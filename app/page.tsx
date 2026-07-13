import ApartmentCard from "@/components/ApartmentCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationSection from "@/components/LocationSection";
import { apartments } from "@/data/apartments";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartments near Milan",
  description:
    "Comfortable apartments in Sesto San Giovanni, just a short walk from the M1 Red Line and only minutes from Milan city centre.",
};

export default function Home() {
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

          <a
            href="#apartments"
            className="mt-10 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Explore Apartments
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-600 md:justify-start">
            <span>🏡 Self Check-in</span>
            <span>📶 Free Wi-Fi</span>
            <span>🚇 M1 Red Line</span>
            <span>👥 Up to 4 Guests</span>
          </div>
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
            {apartments.map((apt) => (
              <ApartmentCard
                key={apt.id}
                title={apt.name}
                subtitle={apt.shortDescription}
                image={apt.coverImage}
                slug={apt.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <LocationSection />
    </>
  );
}