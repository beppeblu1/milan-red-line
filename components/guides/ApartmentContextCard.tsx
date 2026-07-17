import type { ReactNode } from "react";
import Link from "next/link";

import { apartments } from "@/data/apartments";

type ApartmentContextCardProps = {
  slugs: string[];
  children?: ReactNode;
  title?: string;
};

export default function ApartmentContextCard({
  slugs,
  children,
  title = "A practical base near the M1 Red Line",
}: ApartmentContextCardProps) {
  const selectedApartments = slugs
    .map((slug) => apartments.find((apartment) => apartment.slug === slug))
    .filter((apartment) => apartment?.published);

  if (selectedApartments.length === 0) {
    return null;
  }

  return (
    <aside
      aria-labelledby="apartment-context-title"
      className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8"
    >
      <h2
        id="apartment-context-title"
        className="text-xl font-semibold tracking-tight text-zinc-900"
      >
        {title}
      </h2>

      {children && (
        <div className="mt-3 leading-7 text-zinc-600">{children}</div>
      )}

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {selectedApartments.map((apartment) => {
          if (!apartment) {
            return null;
          }

          return (
            <Link
              key={apartment.slug}
              href={`/apartments/${apartment.slug}`}
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-red-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              <span className="block font-semibold text-zinc-900">
                Apartment {apartment.name}
              </span>

              <span className="mt-2 block text-sm leading-6 text-zinc-600">
                {apartment.shortDescription}
              </span>

              <span className="mt-4 block text-sm font-semibold text-red-600">
                View apartment →
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
