import {
  House,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import AvailabilityRequestForm from "@/components/contact/AvailabilityRequestForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/data/site";
import {
  getAvailabilityRequestContext,
  getPublishedApartmentBySlug,
} from "@/lib/contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request apartment availability and contact Milan Red Line about your stay in Milan.",
};

type ContactPageProps = {
  searchParams: Promise<{
    apartment?: string | string[];
  }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const resolvedSearchParams = await searchParams;

  const requestedApartmentSlug =
    typeof resolvedSearchParams.apartment === "string"
      ? resolvedSearchParams.apartment
      : undefined;

  const apartment = getPublishedApartmentBySlug(
    requestedApartmentSlug,
  );

  const context = getAvailabilityRequestContext(
    apartment?.slug,
  );

  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            Contact
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl">
            Planning your stay in Milan?
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Send us your dates and the number of guests. We will
            confirm availability and answer any questions about
            the apartments or your stay.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.7fr)]">
          <AvailabilityRequestForm
            apartmentSlug={apartment?.slug}
            apartmentName={apartment?.name}
            maximumGuests={context.maximumGuests}
          />

          <div className="space-y-8">
            <Card>
              <MessageCircle className="h-8 w-8 text-red-600" />

              <h2 className="mt-6 text-xl font-semibold text-zinc-900">
                WhatsApp
              </h2>

              <p className="mt-3 leading-7 text-zinc-600">
                Prefer a quick conversation? Send us a message
                directly on WhatsApp.
              </p>

              {site.whatsapp ? (
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex font-medium text-red-600 transition hover:underline"
                >
                  Chat on WhatsApp
                </a>
              ) : (
                <p className="mt-5 text-zinc-600">
                  Coming soon
                </p>
              )}
            </Card>

            <Card>
              <House className="h-8 w-8 text-red-600" />

              <h2 className="mt-6 text-xl font-semibold text-zinc-900">
                {apartment?.airbnbUrl
                  ? "Book on Airbnb"
                  : "Booking platforms"}
              </h2>

              <p className="mt-3 leading-7 text-zinc-600">
                {apartment?.airbnbUrl
                  ? `Prefer to book ${apartment.name} through Airbnb? You can use the official Airbnb listing instead of requesting direct availability.`
                  : "Prefer to book through a platform? Explore our apartments and open the apartment you are interested in. Booking platform links are available on each apartment page."}
              </p>

              {apartment?.airbnbUrl ? (
                <a
                  href={apartment.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex font-medium text-red-600 transition hover:underline"
                >
                  View on Airbnb
                </a>
              ) : (
                <Link
                  href="/#apartments"
                  className="mt-5 inline-flex font-medium text-red-600 transition hover:underline"
                >
                  View apartments
                </Link>
              )}
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <Link
            href="/"
            className="inline-flex rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-100"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </Section>
  );
}