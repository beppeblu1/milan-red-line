import Image from "next/image";

type ApartmentCardProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function ApartmentCard({
  title,
  subtitle,
  image,
}: ApartmentCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

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

        <p className="mt-3 text-zinc-600 leading-7">
          {subtitle}
        </p>

        <button className="mt-8 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
          View Apartment
        </button>

      </div>

    </div>
  );
}