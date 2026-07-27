import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { GuideSearchEntry } from "@/lib/guide-search";

type GuideSearchCardProps = {
  guide: GuideSearchEntry;
  imagePriority?: boolean;
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
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function GuideSearchCard({
  guide,
  imagePriority = false,
}: GuideSearchCardProps) {
  const publicationDate = formatPublicationDate(
    guide.publishedAt,
  );

  const metadata = (
    <>
      <span>{guide.readingTime}</span>

      {publicationDate && (
        <>
          <span aria-hidden="true">•</span>
          <span>{publicationDate}</span>
        </>
      )}
    </>
  );

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-200 hover:border-red-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
    >
      {guide.heroImage && (
        <div
          style={{ aspectRatio: "16 / 3" }}
          className="relative w-full overflow-hidden border-b border-zinc-100 bg-zinc-100"
        >
          <Image
            src={guide.heroImage}
            alt={guide.heroImageAlt ?? ""}
            fill
            priority={imagePriority}
            sizes="(min-width: 1024px) 920px, 100vw"
            className="z-0 object-cover"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.38) 30%, rgba(0,0,0,.14) 60%, rgba(0,0,0,.03) 82%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-center gap-x-2 gap-y-1 px-5 pb-2 text-sm font-semibold tracking-wide text-white drop-shadow-md sm:px-6 sm:pb-3">
            {metadata}
          </div>
        </div>
      )}

      <div className="p-5 sm:p-6">
        {!guide.heroImage && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
            {metadata}
          </div>
        )}

        <h3
          className={`max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl ${
            guide.heroImage ? "" : "mt-3"
          }`}
        >
          {guide.title}
        </h3>

        <p className="mt-4 max-w-3xl line-clamp-3 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          {guide.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 transition-colors group-hover:text-red-700">
          Read guide
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}









