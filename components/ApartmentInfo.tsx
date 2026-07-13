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
            <div className="text-3xl">👥</div>
            <p className="mt-2 text-lg font-semibold">{guests}</p>
            <p className="text-zinc-500">Guests</p>
          </div>
  
          <div className="text-center">
            <div className="text-3xl">🛏️</div>
            <p className="mt-2 text-lg font-semibold">{beds}</p>
            <p className="text-zinc-500">Beds</p>
          </div>
  
          <div className="text-center">
            <div className="text-3xl">🛁</div>
            <p className="mt-2 text-lg font-semibold">{bathrooms}</p>
            <p className="text-zinc-500">Bathroom</p>
          </div>
  
          <div className="text-center">
            <div className="text-3xl">📐</div>
            <p className="mt-2 text-lg font-semibold">{squareMeters} m²</p>
            <p className="text-zinc-500">Size</p>
          </div>
        </div>
      </section>
    );
  }