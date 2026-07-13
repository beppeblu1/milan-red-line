import { notFound } from "next/navigation";
import ApartmentHero from "@/components/ApartmentHero";
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

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <p className="max-w-3xl text-lg leading-8 text-zinc-700">
          {apartment.longDescription}
        </p>
      </section>
    </main>
  );
}