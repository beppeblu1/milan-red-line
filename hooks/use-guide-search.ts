"use client";

import { useMemo, useState } from "react";

import {
  searchGuides,
  type GuideSearchEntry,
} from "@/lib/guide-search";

type UseGuideSearchOptions = {
  guides: GuideSearchEntry[];
  locale: string;
  initialQuery?: string;
};

export function useGuideSearch({
  guides,
  locale,
  initialQuery = "",
}: UseGuideSearchOptions) {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(
    () => searchGuides(guides, query, locale),
    [guides, locale, query],
  );

  const hasQuery = query.trim().length > 0;
  const hasResults = results.length > 0;

  return {
    query,
    setQuery,
    results,
    count: results.length,
    hasQuery,
    hasResults,
  };
}