import { Mail, MessageCircle, House } from "lucide-react";
import Link from "next/link";

import { site } from "@/data/site";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Milan Red Line for availability, apartment information and booking enquiries.",
};

export default function ContactPage() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            Contact
          </div>

          <h1 className="mt-6 text-5xl font-bold text-zinc-900">
            Planning your stay in Milan?
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            If you have any questions about the apartments,
            availability or your stay, feel free to contact us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card>
            <Mail className="h-8 w-8 text-red-600" />

            <h2 className="mt-6 text-xl font-semibold">
              Email
            </h2>

            <a
  href={`mailto:${site.email}`}
  className="mt-3 inline-flex text-red-600 font-medium hover:underline"
>
  Send an email
</a>
          </Card>

          <Card>
            <MessageCircle className="h-8 w-8 text-red-600" />

            <h2 className="mt-6 text-xl font-semibold">
              WhatsApp
            </h2>

            <p className="mt-3 text-zinc-600">
              {site.whatsapp || "Coming soon"}
            </p>
          </Card>

          <Card className="md:col-span-2">
            <House className="h-8 w-8 text-red-600" />

            <h2 className="mt-6 text-xl font-semibold">
              Booking Platforms
            </h2>

            <p className="mt-3 text-zinc-600">
              Airbnb and Booking.com links will be available soon.
            </p>
          </Card>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </Section>
  );
}