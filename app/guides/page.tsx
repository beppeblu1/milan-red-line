import type { Metadata } from "next";

import GuideSearch from "@/components/guides/GuideSearch";
import { createGuideSearchIndex } from "@/lib/guide-search";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Local Guides",
  description:
    "Practical guides to help you choose where to stay, move around Milan and explore beyond the city.",
};

export default function GuidesPage() {
  const guides = getAllGuides();
  const searchIndex = createGuideSearchIndex(guides);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <header className="mx-auto max-w-2xl text-left sm:text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Local Guides
        </h1>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Practical guides to help you choose where to stay, move around Milan
          and explore beyond the city.
        </p>
      </header>

      {searchIndex.length > 0 ? (
        <GuideSearch guides={searchIndex} locale="en" />
      ) : (
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <p className="text-zinc-600">No guides are available yet.</p>
        </div>
      )}
    </div>
  );
}
