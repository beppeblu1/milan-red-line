import { existsSync } from "node:fs";
import path from "node:path";
import { Suspense } from "react";

import type { Metadata } from "next";

import GuideSearch from "@/components/guides/GuideSearch";
import {
  createGuideSearchIndex,
  type GuideSearchEntry,
} from "@/lib/guide-search";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Local Guides",
  description:
    "Practical guides to explore Milan and beyond.",
};

function removeMissingHero(
  guide: GuideSearchEntry,
): GuideSearchEntry {
  if (!guide.heroImage) {
    return guide;
  }

  const relativeHeroPath = guide.heroImage.replace(/^\/+/, "");
  const absoluteHeroPath = path.join(
    process.cwd(),
    "public",
    relativeHeroPath,
  );

  if (existsSync(absoluteHeroPath)) {
    return guide;
  }

  return {
    ...guide,
    heroImage: undefined,
    heroImageAlt: undefined,
  };
}

export default function GuidesPage() {
  const guides = getAllGuides();

  const searchIndex = createGuideSearchIndex(guides).map(
    removeMissingHero,
  );

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <header className="mx-auto max-w-2xl text-left sm:text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Local Guides
        </h1>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Practical guides to explore Milan and beyond.
        </p>
      </header>

      {searchIndex.length > 0 ? (
        <Suspense fallback={<GuideSearchFallback />}>
          <GuideSearch
            guides={searchIndex}
            locale="en"
          />
        </Suspense>
      ) : (
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <p className="text-zinc-600">
            No guides are available yet.
          </p>
        </div>
      )}
    </div>
  );
}

function GuideSearchFallback() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto mt-7 max-w-[720px]"
    >
      <div className="h-14 rounded-2xl border border-zinc-200 bg-zinc-50" />
    </div>
  );
}







