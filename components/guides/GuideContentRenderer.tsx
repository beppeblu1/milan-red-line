import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import ApartmentContextCard from "@/components/guides/ApartmentContextCard";
import GoodToKnow from "@/components/guides/GoodToKnow";
import {
  GuideFaq,
  GuideFaqItem,
} from "@/components/guides/GuideFaq";
import GuideHighlightCard from "@/components/guides/GuideHighlightCard";
import GuidePanoramicImage from "@/components/guides/GuidePanoramicImage";
import GuideSectionHeading from "@/components/guides/GuideSectionHeading";
import GuideTableOfContents from "@/components/guides/GuideTableOfContents";
import RelatedGuidesBox from "@/components/guides/RelatedGuidesBox";

type GuideContentRendererProps = {
  source: string;
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
      className="font-medium text-red-600 underline decoration-red-200 underline-offset-4 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
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

  ApartmentContextCard,
  GoodToKnow,
  GuideFaq,
  GuideFaqItem,
  GuideHighlightCard,
  GuidePanoramicImage,
  GuideSectionHeading,
  GuideTableOfContents,
  RelatedGuidesBox,
};

export default function GuideContentRenderer({
  source,
}: GuideContentRendererProps) {
  return <MDXRemote source={source} components={mdxComponents} />;
}