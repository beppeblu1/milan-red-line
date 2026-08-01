"use client";

import {
  useActionState,
  useState,
  type FormEvent,
} from "react";
import { useFormStatus } from "react-dom";
import {
  CalendarDays,
  CheckCircle2,
  Send,
} from "lucide-react";

import {
  submitAvailabilityRequest,
} from "@/app/contact/actions";
import {
  initialAvailabilityRequestFormState,
} from "@/app/contact/form-state";
import InternationalPhoneInput from "@/components/ui/InternationalPhoneInput";

type Props = {
  apartmentSlug?: string;
  apartmentName?: string;
  maximumGuests: number;
};

type FieldErrorProps = {
  errors?: string[];
  id: string;
};

function FieldError({
  errors,
  id,
}: FieldErrorProps) {
  if (!errors?.length) {
    return null;
  }

  return (
    <div
      id={id}
      className="mt-2 space-y-1 text-sm text-red-700"
      role="alert"
    >
      {errors.map((error) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Send className="h-5 w-5" />

      {pending
        ? "Sending request..."
        : "Send availability request"}
    </button>
  );
}

const inputClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

const invalidPhoneMessage =
  "Enter a valid phone number including the international prefix.";

export default function AvailabilityRequestForm({
  apartmentSlug,
  apartmentName,
  maximumGuests,
}: Props) {
  const [state, formAction] = useActionState(
    submitAvailabilityRequest,
    initialAvailabilityRequestFormState,
  );

  const [phone, setPhone] = useState(
    state.values?.phone ?? "",
  );
  const [phoneIsValid, setPhoneIsValid] =
    useState<boolean | null>(null);
  const [phoneTouched, setPhoneTouched] =
    useState(false);

  if (state.status === "success") {
    return (
      <div
        className="rounded-3xl border border-green-200 bg-green-50 p-8"
        role="status"
      >
        <CheckCircle2 className="h-10 w-10 text-green-700" />

        <h2 className="mt-5 text-2xl font-semibold text-zinc-900">
          Request sent
        </h2>

        <p className="mt-3 leading-7 text-zinc-700">
          {state.message ??
            "Thank you. Your availability request has been sent."}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          We usually reply within a few hours.
        </p>
      </div>
    );
  }

  const guestOptions = Array.from(
    { length: maximumGuests },
    (_, index) => index + 1,
  );

  const hasClientPhoneError =
    phoneTouched &&
    phone.length > 0 &&
    phoneIsValid === false;

  const phoneErrors = hasClientPhoneError
    ? [invalidPhoneMessage]
    : state.fieldErrors?.phone;

  function handlePhoneChange(value: string) {
    setPhone(value);

    if (!value) {
      setPhoneIsValid(null);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    if (
      phone.length > 0 &&
      phoneIsValid === false
    ) {
      event.preventDefault();
      setPhoneTouched(true);

      document
        .getElementById("phone-visible")
        ?.focus();
    }
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
      noValidate
    >
      <input
        type="hidden"
        name="apartmentSlug"
        value={apartmentSlug ?? ""}
      />

      <input
        type="hidden"
        name="phone"
        value={phone}
      />

      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Leave this field empty
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
          <CalendarDays className="h-6 w-6 text-red-600" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Check availability
          </h2>

          <p className="mt-1 leading-7 text-zinc-600">
            {apartmentName
              ? `Request availability for ${apartmentName}.`
              : "Tell us your dates and the number of guests."}
          </p>
        </div>
      </div>

      {state.status === "error" && state.message && (
        <div
          className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
          role="alert"
        >
          {state.message}
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="font-medium text-zinc-800"
          >
            First name
            <span className="ml-1 text-sm font-normal text-zinc-500">
              optional
            </span>
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            maxLength={80}
            defaultValue={state.values?.firstName}
            className={inputClassName}
            aria-describedby="firstName-error"
          />

          <FieldError
            id="firstName-error"
            errors={state.fieldErrors?.firstName}
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="font-medium text-zinc-800"
          >
            Last name
            <span className="ml-1 text-sm font-normal text-zinc-500">
              optional
            </span>
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            maxLength={80}
            defaultValue={state.values?.lastName}
            className={inputClassName}
            aria-describedby="lastName-error"
          />

          <FieldError
            id="lastName-error"
            errors={state.fieldErrors?.lastName}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-medium text-zinc-800"
          >
            Email
            <span className="ml-1 text-red-600">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            required
            defaultValue={state.values?.email}
            className={inputClassName}
            aria-describedby="email-error"
            aria-invalid={
              state.fieldErrors?.email ? true : undefined
            }
          />

          <FieldError
            id="email-error"
            errors={state.fieldErrors?.email}
          />
        </div>

        <div>
          <label
            htmlFor="phone-visible"
            className="font-medium text-zinc-800"
          >
            Phone number
            <span className="ml-1 text-sm font-normal text-zinc-500">
              optional
            </span>
          </label>

          <InternationalPhoneInput
            value={phone}
            onChange={handlePhoneChange}
            onValidityChange={setPhoneIsValid}
            onBlur={() => setPhoneTouched(true)}
            ariaDescribedBy="phone-help phone-error"
            ariaInvalid={
              phoneErrors?.length ? true : undefined
            }
          />

          <p
            id="phone-help"
            className="mt-2 text-sm text-zinc-500"
          >
            Include your country code.
          </p>

          <FieldError
            id="phone-error"
            errors={phoneErrors}
          />
        </div>

        <div>
          <label
            htmlFor="checkIn"
            className="font-medium text-zinc-800"
          >
            Check-in
            <span className="ml-1 text-red-600">*</span>
          </label>

          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            defaultValue={state.values?.checkIn}
            className={inputClassName}
            aria-describedby="checkIn-error"
            aria-invalid={
              state.fieldErrors?.checkIn ? true : undefined
            }
          />

          <FieldError
            id="checkIn-error"
            errors={state.fieldErrors?.checkIn}
          />
        </div>

        <div>
          <label
            htmlFor="checkOut"
            className="font-medium text-zinc-800"
          >
            Check-out
            <span className="ml-1 text-red-600">*</span>
          </label>

          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            defaultValue={state.values?.checkOut}
            className={inputClassName}
            aria-describedby="checkOut-error"
            aria-invalid={
              state.fieldErrors?.checkOut ? true : undefined
            }
          />

          <FieldError
            id="checkOut-error"
            errors={state.fieldErrors?.checkOut}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="guests"
            className="font-medium text-zinc-800"
          >
            Number of guests
            <span className="ml-1 text-red-600">*</span>
          </label>

          <select
            id="guests"
            name="guests"
            required
            defaultValue={state.values?.guests ?? ""}
            className={inputClassName}
            aria-describedby="guests-help guests-error"
            aria-invalid={
              state.fieldErrors?.guests ? true : undefined
            }
          >
            <option value="" disabled>
              Select the number of guests
            </option>

            {guestOptions.map((guests) => (
              <option key={guests} value={guests}>
                {guests}{" "}
                {guests === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>

          <p
            id="guests-help"
            className="mt-2 text-sm text-zinc-500"
          >
            Maximum {maximumGuests}{" "}
            {maximumGuests === 1 ? "guest" : "guests"}
            {apartmentName ? ` for ${apartmentName}` : ""}.
          </p>

          <FieldError
            id="guests-error"
            errors={state.fieldErrors?.guests}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="font-medium text-zinc-800"
          >
            Message
            <span className="ml-1 text-sm font-normal text-zinc-500">
              optional
            </span>
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={2000}
            defaultValue={state.values?.message}
            placeholder="Questions, arrival information or anything else we should know."
            className={inputClassName}
            aria-describedby="message-help message-error"
          />

          <p
            id="message-help"
            className="mt-2 text-sm text-zinc-500"
          >
            Maximum 2,000 characters.
          </p>

          <FieldError
            id="message-error"
            errors={state.fieldErrors?.message}
          />
        </div>
      </div>

      <div className="mt-8">
        <SubmitButton />
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        Required fields are marked with an asterisk. By
        submitting this form, you agree that we may use your
        details to respond to your request.
      </p>
    </form>
  );
}