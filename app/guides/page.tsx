import type { Metadata } from "next";
import Link from "next/link";

import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Local Guides",
  description:
    "Helpful local guides to make the most of your stay near Milan.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

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

      {guides.length > 0 ? (
        <div className="space-y-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-red-500 hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-3 text-sm text-zinc-500">
                <span>{guide.readingTime}</span>

                {guide.publishedAt && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{guide.publishedAt}</span>
                  </>
                )}
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                {guide.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-600">
                {guide.description}
              </p>

              <div className="mt-6 inline-flex items-center font-medium text-red-600">
                Read guide →
              </div>
            </Link>
          ))}
        </div>
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