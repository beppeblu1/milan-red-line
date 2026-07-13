import { notFound } from "next/navigation";

import BackButton from "@/components/BackButton";
import ApartmentHero from "@/components/ApartmentHero";
import ApartmentGallery from "@/components/ApartmentGallery";
import ApartmentInfo from "@/components/ApartmentInfo";
import ApartmentAmenities from "@/components/ApartmentAmenities";
import LocationHighlight from "@/components/LocationHighlight";

import { apartments } from "@/data/apartments";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ApartmentPage({ params }: PageProps) {
  const { slug } = await params;

  const apartment = apartments.find((apt) => apt.slug === slug);

  if (!apartment) {
    notFound();
  }

  return (
    <main className="bg-white">
      <BackButton />

      <ApartmentHero
        title={apartment.name}
        subtitle={apartment.tagline}
      />

      <ApartmentGallery
        images={apartment.gallery}
        title={apartment.name}
      />

      <ApartmentInfo
        guests={apartment.guests}
        beds={apartment.beds}
        bathrooms={apartment.bathrooms}
        squareMeters={apartment.squareMeters}
      />

      <ApartmentAmenities
        wifi={apartment.wifi}
        airConditioning={apartment.airConditioning}
        kitchen={apartment.kitchen}
        washingMachine={apartment.washingMachine}
        tv={apartment.tv}
        elevator={apartment.elevator}
        balcony={apartment.balcony}
        selfCheckIn={apartment.selfCheckIn}
      />

      <LocationHighlight
        metroStation={apartment.metroStation}
        metroMinutes={apartment.metroMinutes}
        city={apartment.city}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-zinc-900">
            About this apartment
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-700">
            {apartment.longDescription}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-zinc-200 px-6 py-12">
        <div className="text-sm text-zinc-500">
          <p>
            <strong>CIN:</strong> {apartment.cin}
          </p>

          {apartment.cir && (
            <p className="mt-2">
              <strong>CIR:</strong> {apartment.cir}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}