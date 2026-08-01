"use server";

import { createHmac } from "node:crypto";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { Resend } from "resend";

import type {
  AvailabilityRequestFormState,
  AvailabilityRequestFormValues,
} from "@/app/contact/form-state";
import {
  buildAvailabilityEmail,
  getAvailabilityRequestContext,
} from "@/lib/contact";
import {
  availabilityRequestFromFormData,
  availabilityRequestSchema,
  type AvailabilityRequestField,
  type AvailabilityRequestFieldErrors,
} from "@/lib/contact-validation";

const availabilityRequestFields =
  new Set<AvailabilityRequestField>([
    "apartmentSlug",
    "firstName",
    "lastName",
    "email",
    "phone",
    "checkIn",
    "checkOut",
    "guests",
    "message",
  ]);

function getSubmittedValues(
  rawInput: ReturnType<
    typeof availabilityRequestFromFormData
  >,
): AvailabilityRequestFormValues {
  return {
    apartmentSlug: rawInput.apartmentSlug,
    firstName: rawInput.firstName,
    lastName: rawInput.lastName,
    email: rawInput.email,
    phone: rawInput.phone,
    checkIn: rawInput.checkIn,
    checkOut: rawInput.checkOut,
    guests: rawInput.guests,
    message: rawInput.message,
  };
}

function getFieldErrors(
  issues: ReadonlyArray<{
    path: PropertyKey[];
    message: string;
  }>,
): AvailabilityRequestFieldErrors {
  const fieldErrors: AvailabilityRequestFieldErrors = {};

  for (const issue of issues) {
    const field = issue.path[0];

    if (
      typeof field !== "string" ||
      !availabilityRequestFields.has(
        field as AvailabilityRequestField,
      )
    ) {
      continue;
    }

    const typedField =
      field as AvailabilityRequestField;

    fieldErrors[typedField] = [
      ...(fieldErrors[typedField] ?? []),
      issue.message,
    ];
  }

  return fieldErrors;
}

function getClientIp(
  requestHeaders: Headers,
): string {
  const forwardedFor =
    requestHeaders.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    requestHeaders.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function createRateLimitIdentifier(
  clientIp: string,
  secret: string,
): string {
  return createHmac("sha256", secret)
    .update(clientIp)
    .digest("hex");
}

function getRequiredEnvironmentVariable(
  name: string,
): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`,
    );
  }

  return value;
}

async function checkRateLimit(): Promise<boolean> {
  const redisUrl =
    process.env.UPSTASH_REDIS_REST_URL?.trim();
  const redisToken =
    process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  const rateLimitSecret =
    process.env.CONTACT_RATE_LIMIT_SECRET?.trim();

  if (!redisUrl || !redisToken || !rateLimitSecret) {
    return true;
  }

  const redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });

  const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(
      5,
      "15 m",
    ),
    prefix: "mrl:availability-request",
  });

  const requestHeaders = await headers();
  const clientIp = getClientIp(requestHeaders);

  const identifier = createRateLimitIdentifier(
    clientIp,
    rateLimitSecret,
  );

  const result = await ratelimit.limit(identifier);

  return result.success;
}

export async function submitAvailabilityRequest(
  _previousState: AvailabilityRequestFormState,
  formData: FormData,
): Promise<AvailabilityRequestFormState> {
  const rawInput =
    availabilityRequestFromFormData(formData);

  const submittedValues =
    getSubmittedValues(rawInput);

  const validationResult =
    availabilityRequestSchema.safeParse(rawInput);

  if (!validationResult.success) {
    return {
      status: "error",
      message:
        "Please check the highlighted fields and try again.",
      fieldErrors: getFieldErrors(
        validationResult.error.issues,
      ),
      values: submittedValues,
    };
  }

  const input = validationResult.data;

  // Silently accept honeypot submissions without
  // sending an email or revealing the protection.
  if (input.website) {
    return {
      status: "success",
      message:
        "Thank you. Your availability request has been sent.",
    };
  }

  const context = getAvailabilityRequestContext(
    input.apartmentSlug,
  );

  if (
    input.apartmentSlug &&
    !context.apartment
  ) {
    return {
      status: "error",
      message:
        "The selected apartment is no longer available. Please submit a general request instead.",
      fieldErrors: {
        apartmentSlug: [
          "The selected apartment is not valid.",
        ],
      },
      values: submittedValues,
    };
  }

  if (input.guests > context.maximumGuests) {
    const guestLabel =
      context.maximumGuests === 1
        ? "guest"
        : "guests";

    return {
      status: "error",
      message:
        "Please check the number of guests.",
      fieldErrors: {
        guests: [
          `This request can accommodate up to ${context.maximumGuests} ${guestLabel}.`,
        ],
      },
      values: submittedValues,
    };
  }

  try {
    const isAllowed = await checkRateLimit();

    if (!isAllowed) {
      return {
        status: "error",
        message:
          "Too many requests have been sent. Please wait a few minutes and try again.",
        values: submittedValues,
      };
    }

    const resendApiKey =
      getRequiredEnvironmentVariable(
        "RESEND_API_KEY",
      );
    const emailFrom =
      getRequiredEnvironmentVariable(
        "CONTACT_EMAIL_FROM",
      );
    const emailTo =
      getRequiredEnvironmentVariable(
        "CONTACT_EMAIL_TO",
      );

    const email = buildAvailabilityEmail(
      input,
      context.apartment,
    );

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (error) {
      console.error(
        "Resend availability request error:",
        error,
      );

      return {
        status: "error",
        message:
          "We could not send your request. Please try again shortly.",
        values: submittedValues,
      };
    }

    return {
      status: "success",
      message:
        "Thank you. Your availability request has been sent.",
    };
  } catch (error) {
    console.error(
      "Availability request submission error:",
      error,
    );

    return {
      status: "error",
      message:
        "The request service is temporarily unavailable. Please try again shortly.",
      values: submittedValues,
    };
  }
}