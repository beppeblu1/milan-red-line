"use client";

import { Search, X } from "lucide-react";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";

import { useGuideSearch } from "@/hooks/use-guide-search";
import type { GuideSearchEntry } from "@/lib/guide-search";

type GuideSearchShortcutProps = {
  guides: GuideSearchEntry[];
  locale: string;
};

const minimumQueryLength = 2;

export default function GuideSearchShortcut({
  guides,
  locale,
}: GuideSearchShortcutProps) {
  const router = useRouter();
  const inputId = useId();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const {
    query,
    setQuery,
    count,
    hasResults,
  } = useGuideSearch({
    guides,
    locale,
  });

  const normalizedQuery = query.trim();
  const canSearch =
    normalizedQuery.length >= minimumQueryLength;

  const isPanelVisible = isPanelOpen && canSearch;

  const resultLabel =
    count === 1
      ? "1 result available"
      : `${count} results available`;

  function handleQueryChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const nextQuery = event.target.value;

    setQuery(nextQuery);
    setIsPanelOpen(
      nextQuery.trim().length >= minimumQueryLength,
    );
  }

  function goToResults() {
    if (!canSearch || !hasResults) {
      return;
    }

    router.push(
      `/guides?q=${encodeURIComponent(normalizedQuery)}`,
    );
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    goToResults();
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Escape") {
      setIsPanelOpen(false);
    }
  }

  function clearSearch() {
    setQuery("");
    setIsPanelOpen(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="relative w-full sm:w-80"
    >
      <label htmlFor={inputId} className="sr-only">
        Search local guides
      </label>

      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
        />

        <input
          id={inputId}
          type="search"
          value={query}
          onChange={handleQueryChange}
          onFocus={() => {
            if (canSearch) {
              setIsPanelOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search destinations or topics…"
          autoComplete="off"
          className="h-11 w-full rounded-xl border border-zinc-300 bg-white pl-10 pr-10 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100 [&::-webkit-search-cancel-button]:appearance-none"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear guide search"
            className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>

      {isPanelVisible && (
        <div className="absolute right-0 top-full z-20 mt-2 w-full rounded-xl border border-zinc-200 bg-white p-4 shadow-lg">
          <p
            aria-live="polite"
            className="text-sm font-medium text-zinc-700"
          >
            {hasResults
              ? resultLabel
              : "No matching guides"}
          </p>

          {hasResults && (
            <button
              type="submit"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:gap-3 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              {count === 1
                ? "Go to result"
                : "Go to results"}
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      )}
    </form>
  );
}