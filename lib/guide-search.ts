import type { GuideMetadata } from "@/lib/guides";

export type GuideSearchEntry = {
  slug: string;
  locale: string;
  title: string;
  description: string;
  readingTime: string;
  publishedAt: string;
  keywords: string[];
  destinations: string[];
  searchAliases: string[];
  searchText: string;
};

export type GuideSearchResult = {
  guide: GuideSearchEntry;
  score: number;
};

function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createSearchText(guide: GuideMetadata): string {
  return normalizeSearchText(
    [
      guide.title,
      guide.description,
      ...guide.keywords,
      ...guide.destinations,
      ...guide.searchAliases,
    ].join(" "),
  );
}

export function createGuideSearchIndex(
  guides: GuideMetadata[],
): GuideSearchEntry[] {
  return guides.map((guide) => ({
    slug: guide.slug,
    locale: guide.locale,
    title: guide.title,
    description: guide.description,
    readingTime: guide.readingTime,
    publishedAt: guide.publishedAt,
    keywords: guide.keywords,
    destinations: guide.destinations,
    searchAliases: guide.searchAliases,
    searchText: createSearchText(guide),
  }));
}

function getFieldScore(
  normalizedQuery: string,
  normalizedTerms: string[],
  guide: GuideSearchEntry,
): number {
  const normalizedTitle = normalizeSearchText(guide.title);
  const normalizedDescription = normalizeSearchText(guide.description);
  const normalizedKeywords = normalizeSearchText(guide.keywords.join(" "));
  const normalizedDestinations = normalizeSearchText(
    guide.destinations.join(" "),
  );
  const normalizedAliases = normalizeSearchText(guide.searchAliases.join(" "));

  let score = 0;

  if (normalizedTitle === normalizedQuery) {
    score += 120;
  } else if (normalizedTitle.startsWith(normalizedQuery)) {
    score += 90;
  } else if (normalizedTitle.includes(normalizedQuery)) {
    score += 70;
  }

  if (normalizedDestinations.includes(normalizedQuery)) {
    score += 60;
  }

  if (normalizedAliases.includes(normalizedQuery)) {
    score += 55;
  }

  if (normalizedKeywords.includes(normalizedQuery)) {
    score += 45;
  }

  if (normalizedDescription.includes(normalizedQuery)) {
    score += 25;
  }

  for (const term of normalizedTerms) {
    if (normalizedTitle.includes(term)) {
      score += 20;
    }

    if (normalizedDestinations.includes(term)) {
      score += 16;
    }

    if (normalizedAliases.includes(term)) {
      score += 14;
    }

    if (normalizedKeywords.includes(term)) {
      score += 10;
    }

    if (normalizedDescription.includes(term)) {
      score += 4;
    }
  }

  return score;
}

export function searchGuides(
  guides: GuideSearchEntry[],
  query: string,
  locale?: string,
): GuideSearchEntry[] {
  const normalizedQuery = normalizeSearchText(query);

  const localeGuides = locale
    ? guides.filter((guide) => guide.locale === locale)
    : guides;

  if (!normalizedQuery) {
    return localeGuides;
  }

  const normalizedTerms = normalizedQuery
    .split(" ")
    .filter((term) => term.length > 0);

  return localeGuides
    .filter((guide) =>
      normalizedTerms.every((term) => guide.searchText.includes(term)),
    )
    .map<GuideSearchResult>((guide) => ({
      guide,
      score: getFieldScore(normalizedQuery, normalizedTerms, guide),
    }))
    .sort((firstResult, secondResult) => {
      if (secondResult.score !== firstResult.score) {
        return secondResult.score - firstResult.score;
      }

      return (
        new Date(secondResult.guide.publishedAt).getTime() -
        new Date(firstResult.guide.publishedAt).getTime()
      );
    })
    .map((result) => result.guide);
}