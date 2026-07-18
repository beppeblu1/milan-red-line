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
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-red-600 md:mx-0" />

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            Feel at home in Milan.
            <br />
            <span className="text-red-600">One direct line.</span>
            <br />
            To the city center.
          </h1>

          <p className="mt-8 text-xl leading-8 text-zinc-600">
            Comfortable apartments in Sesto San Giovanni, just a short walk
            from the M1 Red Line. Perfect for city breaks, business trips and
            longer stays.
          </p>

          <Link
            href="#apartments"
            className="mt-10 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Explore Apartments
          </Link>
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
              Local Travel Guides
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900">
              Explore Milan and Beyond.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
              Independent travel guides written to help you choose where to
              stay, move around Milan easily and discover the surrounding area
              before your trip.
            </p>
          </div>

          <GuideCarousel guides={guides} />

          <div className="mt-8 text-center">
            <Link
              href="/guides"
              className="inline-block rounded-xl border border-zinc-300 px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Explore all guides
            </Link>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}