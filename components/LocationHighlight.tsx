type LocationHighlightProps = {
    metroStation: string;
    metroMinutes: number;
    city: string;
  };
  
  export default function LocationHighlight({
    metroStation,
    metroMinutes,
    city,
  }: LocationHighlightProps) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-red-600 p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Location
          </p>
  
          <h2 className="mt-3 text-3xl font-bold">
            {metroMinutes} minutes to {metroStation}
          </h2>
  
          <p className="mt-4 max-w-2xl text-lg leading-8 text-red-100">
            Located in {city}, the apartment offers quick access to the M1 Red
            Line, making it easy to reach Milan city centre in just a few stops.
          </p>
        </div>
      </section>
    );
  }