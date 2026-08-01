import type {
    AvailabilityRequestFieldErrors,
  } from "@/lib/contact-validation";
  
  export type AvailabilityRequestFormValues = {
    apartmentSlug?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    message?: string;
  };
  
  export type AvailabilityRequestFormState = {
    status: "idle" | "error" | "success";
    message?: string;
    fieldErrors?: AvailabilityRequestFieldErrors;
    values?: AvailabilityRequestFormValues;
  };
  
  export const initialAvailabilityRequestFormState:
    AvailabilityRequestFormState = {
      status: "idle",
    };