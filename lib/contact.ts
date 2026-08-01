import { apartments } from "@/data/apartments";

import type { AvailabilityRequestInput } from "@/lib/contact-validation";
import type { Apartment } from "@/types/apartment";

export type AvailabilityRequestContext = {
  apartment?: Apartment;
  maximumGuests: number;
};

export type AvailabilityEmail = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
};

export function getPublishedApartmentBySlug(
  slug?: string,
): Apartment | undefined {
  if (!slug) {
    return undefined;
  }

  return apartments.find(
    (apartment) =>
      apartment.published &&
      apartment.slug === slug,
  );
}

export function getPublishedApartments(): Apartment[] {
  return apartments.filter(
    (apartment) => apartment.published,
  );
}

export function getMaximumPublishedGuestCapacity(): number {
  const publishedApartments = getPublishedApartments();

  if (publishedApartments.length === 0) {
    return 1;
  }

  return Math.max(
    ...publishedApartments.map(
      (apartment) => apartment.guests,
    ),
  );
}

export function getAvailabilityRequestContext(
  apartmentSlug?: string,
): AvailabilityRequestContext {
  const apartment =
    getPublishedApartmentBySlug(apartmentSlug);

  return {
    apartment,
    maximumGuests:
      apartment?.guests ??
      getMaximumPublishedGuestCapacity(),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatOptionalValue(value?: string): string {
  return value || "Not provided";
}

function buildGuestName(
  firstName?: string,
  lastName?: string,
): string {
  const fullName = [firstName, lastName]
    .filter(Boolean)
    .join(" ");

  return fullName || "Not provided";
}

export function buildAvailabilityEmail(
  input: AvailabilityRequestInput,
  apartment?: Apartment,
): AvailabilityEmail {
  const apartmentName = apartment
    ? `Apartment ${apartment.name}`
    : "General availability request";

  const guestName = buildGuestName(
    input.firstName,
    input.lastName,
  );

  const subject = apartment
    ? `Availability request — ${apartment.name} — ${input.checkIn} to ${input.checkOut}`
    : `Availability request — ${input.checkIn} to ${input.checkOut}`;

  const rows = [
    ["Request", apartmentName],
    ["Check-in", input.checkIn],
    ["Check-out", input.checkOut],
    ["Guests", String(input.guests)],
    ["Name", guestName],
    ["Email", input.email],
    ["Phone", formatOptionalValue(input.phone)],
    ["Message", formatOptionalValue(input.message)],
  ] as const;

  const text = rows
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th
            align="left"
            valign="top"
            style="padding: 8px 16px 8px 0; color: #3f3f46;"
          >
            ${escapeHtml(label)}
          </th>
          <td
            valign="top"
            style="padding: 8px 0; color: #18181b; white-space: pre-wrap;"
          >
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join("");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h1 style="font-size: 22px; color: #18181b;">
        New availability request
      </h1>

      <table
        role="presentation"
        style="border-collapse: collapse;"
      >
        <tbody>
          ${htmlRows}
        </tbody>
      </table>
    </div>
  `;

  return {
    subject,
    text,
    html,
    replyTo: input.email,
  };
}
