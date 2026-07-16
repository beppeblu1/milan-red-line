import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getGuideBySlug, getGuideSlugs } from "@/lib/guides";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl"
      {...props}
    />
  ),

  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl"
      {...props}
    />
  ),

  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 text-xl font-semibold tracking-tight text-zinc-900"
      {...props}
    />
  ),

  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-5 text-lg leading-8 text-zinc-700" {...props} />
  ),

  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-zinc-700"
      {...props}
    />
  ),

  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 text-zinc-700"
      {...props}
    />
  ),

  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,

  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-zinc-900" {...props} />
  ),

  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 px-6 py-5 text-lg font-medium leading-8 text-zinc-800"
      {...props}
    />
  ),

  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="font-medium text-red-600 underline decoration-red-200 underline-offset-4 transition hover:text-red-700"
      {...props}
    />
  ),

  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200">
      <table className="w-full border-collapse text-left" {...props} />
    </div>
  ),

  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-zinc-100 text-zinc-900" {...props} />
  ),

  tbody: (props: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className="divide-y divide-zinc-200" {...props} />
  ),

  tr: (props: ComponentPropsWithoutRef<"tr">) => <tr {...props} />,

  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="px-5 py-4 text-sm font-semibold" {...props} />
  ),

  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="px-5 py-4 text-sm text-zinc-700" {...props} />
  ),
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

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <div className="mb-10">
        <Link
          href="/guides"
          className="text-sm font-medium text-zinc-500 transition hover:text-red-600"
        >
          ← All guides
        </Link>
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

      <MDXRemote source={guide.content} components={mdxComponents} />

      <BookingCallToAction />
    </article>
  );
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
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          View Apartments
        </Link>

        <Link
          href="/contact"
          className="rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-100"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}