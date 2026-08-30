import { sendGAEvent } from "@next/third-parties/google";

type AvailabilityAnalyticsContext = {
  apartmentSlug?: string;
};

function getApartmentSlug(
  apartmentSlug?: string,
): string {
  return apartmentSlug ?? "general";
}

export function trackAvailabilityFormStart({
  apartmentSlug,
}: AvailabilityAnalyticsContext) {
  sendGAEvent("event", "availability_form_start", {
    apartment_slug: getApartmentSlug(apartmentSlug),
  });
}

export function trackAvailabilityRequest({
  apartmentSlug,
}: AvailabilityAnalyticsContext) {
  sendGAEvent("event", "availability_request", {
    apartment_slug: getApartmentSlug(apartmentSlug),
  });
}
