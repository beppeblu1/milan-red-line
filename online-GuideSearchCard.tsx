import Link from "next/link";

import type { GuideSearchEntry } from "@/lib/guide-search";

type GuideSearchCardProps = {
  guide: GuideSearchEntry;
};

function formatPublicationDate(value: string): string {
  if (!value) {
    return "";
  }

  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function GuideSearchCard({
  guide,
}: GuideSearchCardProps) {
  const publicationDate = formatPublicationDate(guide.publishedAt);

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 transition duration-200 hover:border-red-300 hover:bg-zinc-50/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
        <span>{guide.readingTime}</span>

        {publicationDate && (
          <>
            <span aria-hidden="true">·</span>
            <span>{publicationDate}</span>
          </>
        )}
      </div>

      <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
        {guide.title}
      </h3>

      <p className="mt-3 line-clamp-3 leading-7 text-zinc-600">
        {guide.description}
      </p>

      <span className="mt-4 inline-flex items-center gap-2 font-semibold text-red-600 transition group-hover:gap-3 group-hover:text-red-700">
        Read guide
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
