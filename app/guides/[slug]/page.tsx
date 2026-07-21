import { existsSync } from "node:fs";
import path from "node:path";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import GuideContentRenderer from "@/components/guides/GuideContentRenderer";
import GuideSearchShortcut from "@/components/guides/GuideSearchShortcut";
import PilotGuideLayout from "@/components/guides/PilotGuideLayout";
import { createGuideSearchIndex } from "@/lib/guide-search";
import {
  getAllGuides,
  getGuideBySlug,
  getGuideSlugs,
} from "@/lib/guides";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide not found",
    };
  }

  return {
    title: guide.metadata.title,
    description: guide.metadata.description,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const searchIndex = createGuideSearchIndex(getAllGuides());

  const usesReadingExperiencePilot =
    guide.metadata.layout === "reading-experience-pilot";

  const hasHeroImage = publicFileExists(guide.metadata.heroImage);

  const heroImage = hasHeroImage
    ? guide.metadata.heroImage
    : undefined;

  const heroImageAlt =
    hasHeroImage && guide.metadata.heroImageAlt
      ? guide.metadata.heroImageAlt
      : undefined;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <Link
          href="/guides"
          className="mt-3 text-sm font-medium text-zinc-500 transition hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          ← All guides
        </Link>

        <GuideSearchShortcut
          guides={searchIndex}
          locale="en"
        />
      </div>

      <header className="mb-14 border-b border-zinc-200 pb-10">
        <p className="text-sm font-medium text-zinc-500">
          {guide.metadata.readingTime}
        </p>

        {guide.metadata.publishedAt && (
          <p className="mt-2 text-sm text-zinc-500">
            Published {guide.metadata.publishedAt}
          </p>
        )}
      </header>

      {usesReadingExperiencePilot ? (
        <PilotGuideLayout
          source={guide.content}
          currentSlug={slug}
          heroImage={heroImage}
          heroImageAlt={heroImageAlt}
        />
      ) : (
        <>
          <GuideContentRenderer
            source={guide.content}
            showEditorialLeadConnector
          />

          <BookingCallToAction />
        </>
      )}
    </article>
  );
}

function publicFileExists(
  publicPath: string | undefined,
): boolean {
  if (!publicPath) {
    return false;
  }

  const normalizedPublicPath = publicPath
    .split("?")[0]
    .split("#")[0]
    .replace(/^\/+/, "");

  if (
    !normalizedPublicPath ||
    normalizedPublicPath.includes("..")
  ) {
    return false;
  }

  const absolutePath = path.join(
    process.cwd(),
    "public",
    normalizedPublicPath,
  );

  return existsSync(absolutePath);
}

function BookingCallToAction() {
  return (
    <section className="mt-20 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
        Ready to plan your stay?
      </h2>

      <p className="mt-4 leading-7 text-zinc-600">
        Discover our comfortable apartments near the M1 Red Line or contact us
        directly to check availability for your travel dates.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/#apartments"
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          View Apartments
        </Link>

        <Link
          href="/contact"
          className="rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}