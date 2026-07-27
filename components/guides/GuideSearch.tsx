"use client";

import { Search, X } from "lucide-react";
import {
  useEffect,
  useId,
} from "react";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";

import GuidePagination from "@/components/guides/GuidePagination";
import GuideSearchCard from "@/components/guides/GuideSearchCard";
import { useGuideSearch } from "@/hooks/use-guide-search";
import type { GuideSearchEntry } from "@/lib/guide-search";

const GUIDES_PER_PAGE = 8;

type GuideSearchProps = {
  guides: GuideSearchEntry[];
  locale: string;
};

function parsePage(value: string | null): number {
  if (!value) {
    return 1;
  }

  const parsedPage = Number.parseInt(value, 10);

  return Number.isInteger(parsedPage) && parsedPage > 0
    ? parsedPage
    : 1;
}

export default function GuideSearch({
  guides,
  locale,
}: GuideSearchProps) {
  const inputId = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q")?.trim() ?? "";
  const rawPage = searchParams.get("page");

  const {
    query,
    setQuery,
    results,
    hasQuery,
    hasResults,
  } = useGuideSearch({
    guides,
    locale,
    initialQuery: urlQuery,
  });

  const totalPages = Math.max(
    1,
    Math.ceil(results.length / GUIDES_PER_PAGE),
  );

  const requestedPage = parsePage(rawPage);

  const currentPage = hasQuery
    ? 1
    : Math.min(requestedPage, totalPages);

  const firstGuideIndex =
    (currentPage - 1) * GUIDES_PER_PAGE;

  const visibleGuides = hasQuery
    ? results
    : results.slice(
        firstGuideIndex,
        firstGuideIndex + GUIDES_PER_PAGE,
      );

  useEffect(() => {
    if (query !== urlQuery) {
      setQuery(urlQuery);
    }
  }, [query, setQuery, urlQuery]);

  useEffect(() => {
    const nextSearchParams = new URLSearchParams(
      searchParams.toString(),
    );

    let shouldReplaceUrl = false;

    if (urlQuery && nextSearchParams.has("page")) {
      nextSearchParams.delete("page");
      shouldReplaceUrl = true;
    }

    if (!urlQuery && rawPage) {
      const normalizedPage = Math.min(
        parsePage(rawPage),
        totalPages,
      );

      if (normalizedPage <= 1) {
        nextSearchParams.delete("page");
      } else {
        nextSearchParams.set(
          "page",
          normalizedPage.toString(),
        );
      }

      if (
        rawPage !==
        (normalizedPage <= 1
          ? null
          : normalizedPage.toString())
      ) {
        shouldReplaceUrl = true;
      }
    }

    if (!shouldReplaceUrl) {
      return;
    }

    const queryString = nextSearchParams.toString();

    const nextUrl = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    window.history.replaceState(null, "", nextUrl);
  }, [
    pathname,
    rawPage,
    searchParams,
    totalPages,
    urlQuery,
  ]);

  function updateSearch(nextQuery: string) {
    setQuery(nextQuery);

    const normalizedQuery = nextQuery.trim();

    const nextSearchParams = new URLSearchParams(
      searchParams.toString(),
    );

    nextSearchParams.delete("page");

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

  const resultsHeading = hasQuery
    ? `Search results for “${query.trim()}”`
    : "All guides";

  const countLabel = hasQuery
    ? results.length === 1
      ? "1 result"
      : `${results.length} results`
    : `${results.length} available`;

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
            onChange={(event) =>
              updateSearch(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Search by destination, topic or travel need…"
            autoComplete="off"
            className="h-14 w-full rounded-2xl border border-zinc-300 bg-white pl-12 pr-12 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100 [&::-webkit-search-cancel-button]:appearance-none sm:h-16"
          />

          {hasQuery && (
            <button
              type="button"
              onClick={() => updateSearch("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <X
                aria-hidden="true"
                className="h-5 w-5"
              />
            </button>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {resultsHeading}
          </h2>

          <p
            aria-live="polite"
            className="shrink-0 text-sm text-zinc-500 sm:text-base"
          >
            {countLabel}
          </p>
        </div>

        {hasResults ? (
          <>
            <div className="mt-7 space-y-6">
              {visibleGuides.map((guide, index) => (
                <GuideSearchCard
                  key={guide.slug}
                  guide={guide}
                  imagePriority={
                    !hasQuery &&
                    currentPage === 1 &&
                    index === 0
                  }
                />
              ))}
            </div>

            {!hasQuery && (
              <GuidePagination
                currentPage={currentPage}
                totalPages={totalPages}
                pathname={pathname}
              />
            )}
          </>
        ) : (
          <div className="mt-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
            <p className="leading-7 text-zinc-600">
              Try a different destination, topic or travel need.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}




