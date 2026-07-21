import type { Metadata } from "next";

import GuideSearch from "@/components/guides/GuideSearch";
import { createGuideSearchIndex } from "@/lib/guide-search";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Local Guides",
  description:
    "Helpful local guides to make the most of your stay near Milan.",
};

export default function GuidesPage() {
  const guides = getAllGuides();
  const searchIndex = createGuideSearchIndex(guides);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Local Guides
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Independent local guides to help you choose where to stay, move
          around Milan and discover the area before your trip.
        </p>
      </header>

      {searchIndex.length > 0 ? (
        <GuideSearch guides={searchIndex} locale="en" />
      ) : (
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <p className="text-zinc-600">
            No guides are available yet.
          </p>
        </div>
      )}
    </div>
  );
}
