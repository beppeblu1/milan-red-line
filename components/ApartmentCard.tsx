import Image from "next/image";
import Link from "next/link";

type ApartmentCardProps = {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
};

export default function ApartmentCard({
  title,
  subtitle,
  image,
  slug,
}: ApartmentCardProps) {
  return (
    <Link href={`/apartments/${slug}`}>
      <div className="cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="h-64 w-full object-cover"
        />

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-zinc-900">
            {title}
          </h2>

          <p className="mt-3 leading-7 text-zinc-600">
            {subtitle}
          </p>

          <div className="mt-8 inline-flex rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
            View Apartment →
          </div>
        </div>
      </div>
    </Link>
  );
}