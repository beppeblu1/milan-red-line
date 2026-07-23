import type { ReactNode } from "react";
import Link from "next/link";

import { apartments } from "@/data/apartments";
import type {
  Apartment,
  ApartmentRecommendationContext,
} from "@/types/apartment";

type ApartmentContextCardProps = {
  slugs?: string[];
  context?: ApartmentRecommendationContext;
  children?: ReactNode;
  title?: string;
};

const MAX_APARTMENTS = 3;

function sortByPriority(
  firstApartment: Apartment,
  secondApartment: Apartment,
) {
  if (firstApartment.priority !== secondApartment.priority) {
    return firstApartment.priority - secondApartment.priority;
  }

  return firstApartment.slug.localeCompare(secondApartment.slug);
}

function getSelectedApartments({
  slugs,
  context,
}: Pick<ApartmentContextCardProps, "slugs" | "context">) {
  const publishedApartments = apartments.filter(
    (apartment) => apartment.published,
  );

  if (slugs && slugs.length > 0) {
    return slugs
      .map((slug) =>
        publishedApartments.find((apartment) => apartment.slug === slug),
      )
      .filter((apartment): apartment is Apartment => Boolean(apartment))
      .slice(0, MAX_APARTMENTS);
  }

  return [...publishedApartments]
    .sort((firstApartment, secondApartment) => {
      if (context) {
        const relevanceDifference =
          secondApartment.relevance[context] -
          firstApartment.relevance[context];

        if (relevanceDifference !== 0) {
          return relevanceDifference;
        }
      }

      return sortByPriority(firstApartment, secondApartment);
    })
    .slice(0, MAX_APARTMENTS);
}

export default function ApartmentContextCard({
  slugs,
  context,
  children,
  title = "A practical base near the M1 Red Line",
}: ApartmentContextCardProps) {
  const selectedApartments = getSelectedApartments({
    slugs,
    context,
  });

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

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {selectedApartments.map((apartment) => (
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
        ))}
      </div>
    </aside>
  );
}
