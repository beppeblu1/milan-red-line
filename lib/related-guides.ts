const relatedGuidesBySlug: Record<string, string[]> = {
  "practical-guide-to-sesto-san-giovanni": [
    "places-to-visit-near-sesto-san-giovanni",
    "is-sesto-san-giovanni-a-good-place-to-stay",
    "where-to-stay-near-the-m1-red-line",
    "where-to-stay-in-milan-without-a-car",
  ],

  "places-to-visit-near-sesto-san-giovanni": [
    "practical-guide-to-sesto-san-giovanni",
    "where-to-stay-near-carroponte",
    "where-to-stay-near-bicocca-university",
  ],

  "where-to-stay-near-carroponte": [
    "places-to-visit-near-sesto-san-giovanni",
    "practical-guide-to-sesto-san-giovanni",
    "where-to-stay-near-the-m1-red-line",
  ],

  "where-to-stay-near-bicocca-university": [
    "places-to-visit-near-sesto-san-giovanni",
    "practical-guide-to-sesto-san-giovanni",
    "where-to-stay-near-the-m1-red-line",
  ],

  "where-to-stay-near-rho-fiera-milano": [
    "where-to-stay-near-the-m1-red-line",
    "best-area-to-stay-in-milan-for-business-travellers",
    "where-to-stay-in-milan-without-a-car",
  ],

  "where-to-stay-near-the-m1-red-line": [
    "how-to-use-the-milan-metro",
    "practical-guide-to-sesto-san-giovanni",
    "where-to-stay-in-milan-without-a-car",
  ],

  "where-to-stay-in-milan-without-a-car": [
    "practical-guide-to-sesto-san-giovanni",
    "where-to-stay-near-the-m1-red-line",
    "is-sesto-san-giovanni-a-good-place-to-stay",
  ],

  "is-sesto-san-giovanni-a-good-place-to-stay": [
    "practical-guide-to-sesto-san-giovanni",
    "where-to-stay-near-the-m1-red-line",
    "where-to-stay-in-milan-without-a-car",
  ],

  "best-area-to-stay-in-milan-for-business-travellers": [
    "where-to-stay-near-rho-fiera-milano",
    "where-to-stay-near-the-m1-red-line",
    "where-to-stay-in-milan-without-a-car",
  ],

  "how-to-use-the-milan-metro": [
    "how-to-use-milan-public-transport",
    "milan-public-transport-tickets",
    "arriving-in-milan-how-to-get-around",
  ],

  "how-to-use-milan-public-transport": [
    "how-to-use-the-milan-metro",
    "milan-public-transport-tickets",
    "arriving-in-milan-how-to-get-around",
  ],

  "milan-public-transport-tickets": [
    "how-to-use-the-milan-metro",
    "how-to-use-milan-public-transport",
    "arriving-in-milan-how-to-get-around",
  ],

  "arriving-in-milan-how-to-get-around": [
    "how-to-use-milan-public-transport",
    "how-to-use-the-milan-metro",
    "milan-public-transport-tickets",
  ],
};
const fallbackRelatedGuideSlugs = [
  "where-to-stay-near-the-m1-red-line",
  "where-to-stay-in-milan-without-a-car",
  "is-sesto-san-giovanni-a-good-place-to-stay",
];

export function getRelatedGuideSlugs(currentSlug: string): string[] {
  const configuredSlugs =
    relatedGuidesBySlug[currentSlug] ?? fallbackRelatedGuideSlugs;

  return Array.from(
    new Set(
      configuredSlugs.filter(
        (relatedSlug) => relatedSlug !== currentSlug,
      ),
    ),
  );
}