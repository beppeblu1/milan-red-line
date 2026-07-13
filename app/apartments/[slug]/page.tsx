import { notFound } from "next/navigation";
import ApartmentHero from "@/components/ApartmentHero";
import ApartmentInfo from "@/components/ApartmentInfo";
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
      <ApartmentHero
        title={apartment.name}
        subtitle={apartment.tagline}
        image={apartment.coverImage}
      />

      <ApartmentInfo
        guests={apartment.guests}
        beds={apartment.beds}
        bathrooms={apartment.bathrooms}
        squareMeters={apartment.squareMeters}
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
    </main>
  );
}