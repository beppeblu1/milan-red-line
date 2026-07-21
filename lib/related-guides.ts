const relatedGuidesBySlug: Record<string, string[]> = {
  "arriving-in-milan-how-to-get-around": [
    "where-to-stay-in-milan-without-a-car",
    "where-to-stay-near-the-m1-red-line",
    "best-area-to-stay-in-milan-for-first-time-visitors",
  ],

  "where-to-stay-near-rho-fiera-milano": [
    "arriving-in-milan-how-to-get-around",
    "where-to-stay-near-the-m1-red-line",
    "best-area-to-stay-in-milan-for-business-travellers",
  ],

  "where-to-stay-near-the-m1-red-line": [
    "arriving-in-milan-how-to-get-around",
    "where-to-stay-in-milan-without-a-car",
    "best-area-to-stay-in-milan-for-business-travellers",
  ],

  "where-to-stay-in-milan-without-a-car": [
    "arriving-in-milan-how-to-get-around",
    "where-to-stay-near-the-m1-red-line",
    "is-sesto-san-giovanni-a-good-place-to-stay",
  ],

  "is-sesto-san-giovanni-a-good-place-to-stay": [
    "arriving-in-milan-how-to-get-around",
    "where-to-stay-in-milan-without-a-car",
    "where-to-stay-near-the-m1-red-line",
  ],

  "best-area-to-stay-in-milan-for-business-travellers": [
    "arriving-in-milan-how-to-get-around",
    "where-to-stay-near-rho-fiera-milano",
    "where-to-stay-near-the-m1-red-line",
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