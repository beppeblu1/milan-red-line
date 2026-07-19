import type { Metadata } from "next";
import Link from "next/link";

import ApartmentCard from "@/components/ApartmentCard";
import GuideCarousel from "@/components/GuideCarousel";
import LocationSection from "@/components/LocationSection";
import WhyChooseUs from "@/components/WhyChooseUs";

import { apartments } from "@/data/apartments";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Apartments near Milan",
  description:
    "Comfortable apartments in Sesto San Giovanni, just a short walk from the M1 Red Line and only minutes from Milan city centre.",
};

export default function Home() {
  const guides = getAllGuides();

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-red-600 md:mx-0" />

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            Your base for Milan.
            <br />
            <span className="text-red-600">And beyond.</span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-zinc-600">
            Comfortable apartments on Milan&apos;s Red Line, with Northern
            Italy within easy reach.
          </p>
        </div>
      </section>

      {/* Apartments */}
      <section
        id="apartments"
        className="border-t border-zinc-100 bg-zinc-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Our Apartments
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-600">
            Two thoughtfully designed spaces, both with easy metro access to
            Milan city centre.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {apartments.map((apartment) => (
              <ApartmentCard
                key={apartment.id}
                title={apartment.name}
                subtitle={apartment.shortDescription}
                image={apartment.coverImage}
                slug={apartment.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Local Guides */}
      <section className="border-t border-zinc-100 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-red-700">
              Local Knowledge
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900">
              Explore Milan and Beyond.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
              Practical advice to help you plan your trip.
            </p>
          </div>

          <GuideCarousel guides={guides} />
        </div>
      </section>

      <LocationSection />

      {/* Final CTA */}
      <section className="border-t border-zinc-100 bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            Ready to plan your stay?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          Choose the apartment that best fits your trip<br />
          <br />
          Get in touch if you have any questions
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#apartments"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              View Apartments
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}