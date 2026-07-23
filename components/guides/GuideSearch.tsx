"use client";

import { Search, X } from "lucide-react";
import { useId } from "react";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";

import GuideSearchCard from "@/components/guides/GuideSearchCard";
import { useGuideSearch } from "@/hooks/use-guide-search";
import type { GuideSearchEntry } from "@/lib/guide-search";

type GuideSearchProps = {
  guides: GuideSearchEntry[];
  locale: string;
};

export default function GuideSearch({
  guides,
  locale,
}: GuideSearchProps) {
  const inputId = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";

  const {
    query,
    setQuery,
    results,
    hasQuery,
    hasResults,
  } = useGuideSearch({
    guides,
    locale,
    initialQuery,
  });

  const resultsHeading = !hasQuery
    ? "All guides"
    : hasResults
      ? "Search results"
      : "No guides found";

  const countLabel = !hasQuery
    ? `${results.length} available`
    : results.length === 1
      ? "1 guide"
      : `${results.length} guides`;

  function updateSearch(nextQuery: string) {
    setQuery(nextQuery);

    const normalizedQuery = nextQuery.trim();
    const nextSearchParams = new URLSearchParams(
      searchParams.toString(),
    );

    if (normalizedQuery) {
      nextSearchParams.set("q", normalizedQuery);
    } else {
      nextSearchParams.delete("q");
    }

    const queryString = nextSearchParams.toString();

    const nextUrl = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    window.history.replaceState(null, "", nextUrl);
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key !== "Escape") {
      return;
    }

    event.preventDefault();
    updateSearch("");
  }

  return (
    <section aria-label="Guide search">
      <div className="mx-auto mt-7 max-w-[720px]">
        <div className="relative">
          <label htmlFor={inputId} className="sr-only">
            Search local guides
          </label>

          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
          />

          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => updateSearch(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search by destination, topic or travel need..."
            autoComplete="off"
            className="h-14 w-full rounded-2xl border border-zinc-300 bg-white pl-12 pr-12 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100 [&::-webkit-search-cancel-button]:appearance-none"
          />

          {hasQuery && (
            <button
              type="button"
              onClick={() => updateSearch("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {resultsHeading}
          </h2>

          <p
            aria-live="polite"
            className="text-sm font-medium text-zinc-500"
          >
            {countLabel}
          </p>
        </div>

        {hasResults ? (
          <div className="mt-6 space-y-4">
            {results.map((guide) => (
              <GuideSearchCard
                key={guide.slug}
                guide={guide}
              />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
            <p className="leading-7 text-zinc-600">
              Try a different destination, topic or travel need.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}