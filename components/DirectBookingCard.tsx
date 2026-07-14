import {
  CalendarDays,
  ExternalLink,
  Mail,
  MessageCircle,
  Star,
} from "lucide-react";

import { site } from "@/data/site";

type Props = {
  airbnbUrl?: string;
};

export default function DirectBookingCard({
  airbnbUrl,
}: Props) {
  return (
    <section className="mt-28 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-2">
        {/* Left */}
        <div className="p-10 lg:p-14">
          <h2 className="text-5xl font-bold leading-tight text-zinc-900">
            Get the best rate
            <br />
            Book directly
          </h2>

          <p className="mt-8 text-base leading-8 text-zinc-600">
            Skip the booking platform fees and contact us directly.
            We usually reply within a few hours.
          </p>

          <div className="mt-10 space-y-4 text-lg text-zinc-700">
            <div>✓ Best available rate</div>
            <div>✓ Direct communication with the host</div>
            <div>✓ Fast response</div>
            <div>✓ No booking platform fees</div>
          </div>

          {airbnbUrl && (
            <a
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 transition hover:opacity-80"
            >
              <div className="flex text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>

              <span className="font-medium text-zinc-700">
                Trusted by dozens of Airbnb guests
              </span>
            </a>
          )}
        </div>

        {/* Right */}
        <div className="border-t border-zinc-200 p-10 lg:border-l lg:border-t-0 lg:p-14">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <CalendarDays className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-zinc-900">
                Planning your stay?
              </h3>

              <p className="text-base text-zinc-600">
                Send us your travel dates.
              </p>
            </div>
          </div>

          <p className="mt-8 text-base leading-8 text-zinc-600">
            We'll confirm availability and answer any questions you may have.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 font-semibold text-white transition hover:bg-red-700"
            >
              <Mail className="h-5 w-5" />
              Check Availability
            </a>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-4 font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-center text-base text-zinc-600">
            Usually we reply within a few hours.
          </p>

          {airbnbUrl && (
            <>
              <div className="my-10 border-t border-zinc-200" />

              <p className="text-base text-zinc-600">
                Want to read guest reviews first?
              </p>

              <a
                href={airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-medium text-red-600 transition hover:underline"
              >
                Read guest reviews on Airbnb
                <ExternalLink className="h-4 w-4" />
              </a>
            </>
          )}
        </div>
      </div>
      </section>
  );
}