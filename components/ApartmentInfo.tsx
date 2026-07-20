import {
  Users,
  BedDouble,
  Bath,
  Ruler,
} from "lucide-react";

type ApartmentInfoProps = {
  guests: number;
  beds: number;
  bathrooms: number;
  squareMeters: number;
};

export default function ApartmentInfo({
  guests,
  beds,
  bathrooms,
  squareMeters,
}: ApartmentInfoProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:grid-cols-4">
        <div className="text-center">
          <Users className="mx-auto h-7 w-7 text-red-600" />
          <p className="mt-2 text-lg font-semibold">{guests}</p>
          <p className="text-zinc-500">Guests</p>
        </div>

        <div className="text-center">
          <BedDouble className="mx-auto h-7 w-7 text-red-600" />
          <p className="mt-2 text-lg font-semibold">{beds}</p>
          <p className="text-zinc-500">Beds</p>
        </div>

        <div className="text-center">
          <Bath className="mx-auto h-7 w-7 text-red-600" />
          <p className="mt-2 text-lg font-semibold">{bathrooms}</p>
          <p className="text-zinc-500">Bathroom</p>
        </div>

        <div className="text-center">
          <Ruler className="mx-auto h-7 w-7 text-red-600" />
          <p className="mt-2 text-lg font-semibold">{squareMeters} m²</p>
          <p className="text-zinc-500">Size</p>
        </div>
      </div>
    </section>
  );
}