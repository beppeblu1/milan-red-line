import Link from "next/link";

import type { GuideSearchEntry } from "@/lib/guide-search";

type GuideSearchCardProps = {
  guide: GuideSearchEntry;
};

export default function GuideSearchCard({
  guide,
}: GuideSearchCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-red-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
        <span>{guide.readingTime}</span>

        {guide.publishedAt && (
          <>
            <span aria-hidden="true">·</span>
            <span>{guide.publishedAt}</span>
          </>
        )}
      </div>

      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
        {guide.title}
      </h2>

      <p className="mt-4 leading-7 text-zinc-600">
        {guide.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-red-600 transition group-hover:gap-3 group-hover:text-red-700">
        Read guide
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
