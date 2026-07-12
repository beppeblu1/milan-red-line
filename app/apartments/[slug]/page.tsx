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
        subtitle={apartment.description}
        image={apartment.image}
      />
    </main>
  );
}