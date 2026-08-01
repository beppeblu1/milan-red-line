import { z } from "zod";

const optionalShortText = (maximumLength: number) =>
  z
    .string()
    .trim()
    .max(maximumLength)
    .transform((value) => value || undefined)
    .optional();

const optionalInternationalPhone = z
  .string()
  .trim()
  .max(
    16,
    "Enter a valid phone number including the international prefix.",
  )
  .refine(
    (value) =>
      value === "" ||
      /^\+[1-9]\d{6,14}$/.test(value),
    {
      message:
        "Enter a valid phone number including the international prefix.",
    },
  )
  .transform((value) => value || undefined)
  .optional();

const dateSchema = z
  .string()
  .trim()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date.");

export const availabilityRequestSchema = z
  .object({
    apartmentSlug: z
      .string()
      .trim()
      .max(80)
      .regex(
        /^[a-z0-9-]*$/,
        "The selected apartment is not valid.",
      )
      .transform((value) => value || undefined)
      .optional(),

    firstName: optionalShortText(80),
    lastName: optionalShortText(80),

    email: z
      .string()
      .trim()
      .min(1, "Enter your email address.")
      .max(254, "The email address is too long.")
      .email("Enter a valid email address."),

    phone: optionalInternationalPhone,

    checkIn: dateSchema,
    checkOut: dateSchema,

    guests: z.preprocess(
      (value) => {
        if (
          typeof value !== "string" ||
          value.trim() === ""
        ) {
          return undefined;
        }

        return Number(value);
      },
      z
        .number({
          error: "Select the number of guests.",
        })
        .int("Select a valid number of guests.")
        .min(1, "Select at least one guest.")
        .max(20, "Select a valid number of guests."),
    ),

    message: z
      .string()
      .trim()
      .max(
        2000,
        "The message cannot exceed 2,000 characters.",
      )
      .transform((value) => value || undefined)
      .optional(),

    // Honeypot: hidden from genuine visitors.
    website: z
      .string()
      .max(200)
      .transform((value) => value || undefined)
      .optional(),
  })
  .superRefine((data, context) => {
    if (data.checkOut <= data.checkIn) {
      context.addIssue({
        code: "custom",
        path: ["checkOut"],
        message: "Check-out must be after check-in.",
      });
    }
  });

export type AvailabilityRequestInput = z.infer<
  typeof availabilityRequestSchema
>;

export type AvailabilityRequestField =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "checkIn"
  | "checkOut"
  | "guests"
  | "message"
  | "apartmentSlug";

export type AvailabilityRequestFieldErrors = Partial<
  Record<AvailabilityRequestField, string[]>
>;

function getFormDataString(
  formData: FormData,
  field: string,
): string {
  const value = formData.get(field);

  return typeof value === "string" ? value : "";
}

export function availabilityRequestFromFormData(
  formData: FormData,
) {
  return {
    apartmentSlug: getFormDataString(
      formData,
      "apartmentSlug",
    ),
    firstName: getFormDataString(formData, "firstName"),
    lastName: getFormDataString(formData, "lastName"),
    email: getFormDataString(formData, "email"),
    phone: getFormDataString(formData, "phone"),
    checkIn: getFormDataString(formData, "checkIn"),
    checkOut: getFormDataString(formData, "checkOut"),
    guests: getFormDataString(formData, "guests"),
    message: getFormDataString(formData, "message"),
    website: getFormDataString(formData, "website"),
  };
}