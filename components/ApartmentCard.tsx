type ApartmentCardProps = {
    title: string;
    subtitle: string;
  };
  
  export default function ApartmentCard({
    title,
    subtitle,
  }: ApartmentCardProps) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
        <div className="mb-4 h-48 rounded-xl bg-zinc-200"></div>
  
        <h2 className="text-2xl font-semibold text-zinc-900">
          {title}
        </h2>
  
        <p className="mt-3 text-zinc-600">
          {subtitle}
        </p>
  
        <button className="mt-6 rounded-xl bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700">
          View Apartment
        </button>
      </div>
    );
  }