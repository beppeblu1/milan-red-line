"use client";

import { Search, X } from "lucide-react";
import { useId, useMemo, useState } from "react";

import GuideSearchCard from "@/components/guides/GuideSearchCard";
import {
  searchGuides,
  type GuideSearchEntry,
} from "@/lib/guide-search";

type GuideSearchProps = {
  guides: GuideSearchEntry[];
  locale: string;
};

export default function GuideSearch({
  guides,
  locale,
}: GuideSearchProps) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const statusId = useId();

  const results = useMemo(
    () => searchGuides(guides, query, locale),
    [guides, locale, query],
  );

  const hasQuery = query.trim().length > 0;
  const resultLabel =
    results.length === 1
      ? "1 guide found"
      : `${results.length} guides found`;

  return (
    <section aria-labelledby={`${inputId}-heading`}>
      <div className="mx-auto max-w-2xl">
        <h2
          id={`${inputId}-heading`}
          className="text-center text-2xl font-semibold tracking-tight text-zinc-900"
        >
          Find the right guide
        </h2>

        <p className="mt-3 text-center leading-7 text-zinc-600">
          Search by destination, transport option, event or travel need.
        </p>

        <div className="relative mt-7">
          <label htmlFor={inputId} className="sr-only">
            Search local guides
          </label>

          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
          />

          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Try "Rho Fiera", "Monza" or "without a car"'
            aria-describedby={statusId}
            autoComplete="off"
            className="w-full rounded-2xl border border-zinc-300 bg-white py-4 pl-12 pr-12 text-base text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
          />

          {hasQuery && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          )}
        </div>

        <p
          id={statusId}
          aria-live="polite"
          className="mt-4 text-center text-sm text-zinc-500"
        >
          {hasQuery ? resultLabel : `${results.length} local guides available`}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="mt-10 space-y-6">
          {results.map((guide) => (
            <GuideSearchCard key={guide.slug} guide={guide} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <h3 className="text-lg font-semibold text-zinc-900">
            No matching guides
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-zinc-600">
            Try a destination such as Monza or Rho Fiera, or a travel need such
            as public transport, business travel or staying without a car.
          </p>
        </div>
      )}
    </section>
  );
}
