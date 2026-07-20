const relatedGuidesBySlug: Record<string, string[]> = {
    "where-to-stay-near-rho-fiera-milano": [
      "where-to-stay-near-the-m1-red-line",
      "best-area-to-stay-in-milan-for-business-travellers",
      "where-to-stay-in-milan-without-a-car",
    ],
  
    "where-to-stay-near-the-m1-red-line": [
      "where-to-stay-near-rho-fiera-milano",
      "where-to-stay-in-milan-without-a-car",
      "best-area-to-stay-in-milan-for-business-travellers",
    ],
  
    "where-to-stay-in-milan-without-a-car": [
      "where-to-stay-near-the-m1-red-line",
      "is-sesto-san-giovanni-a-good-place-to-stay",
      "where-to-stay-near-rho-fiera-milano",
    ],
  
    "is-sesto-san-giovanni-a-good-place-to-stay": [
      "where-to-stay-near-the-m1-red-line",
      "where-to-stay-in-milan-without-a-car",
      "where-to-stay-near-rho-fiera-milano",
    ],
  
    "best-area-to-stay-in-milan-for-business-travellers": [
      "where-to-stay-near-rho-fiera-milano",
      "where-to-stay-near-the-m1-red-line",
      "where-to-stay-in-milan-without-a-car",
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