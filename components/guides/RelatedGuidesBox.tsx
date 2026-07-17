import Link from "next/link";

import { getAllGuides } from "@/lib/guides";

type RelatedGuidesBoxProps = {
  slugs: string[];
  title?: string;
};

export default function RelatedGuidesBox({
  slugs,
  title = "You may also find these guides useful",
}: RelatedGuidesBoxProps) {
  const guidesBySlug = new Map(
    getAllGuides().map((guide) => [guide.slug, guide]),
  );

  const selectedGuides = slugs
    .map((slug) => guidesBySlug.get(slug))
    .filter((guide) => guide !== undefined);

  if (selectedGuides.length === 0) {
    return null;
  }

  return (
    <aside
      aria-labelledby="related-guides-title"
      className="mt-14 rounded-2xl border border-zinc-200 p-6 md:p-8"
    >
      <h2
        id="related-guides-title"
        className="text-xl font-semibold tracking-tight text-zinc-900"
      >
        {title}
      </h2>

      <ul className="mt-5 space-y-4">
        {selectedGuides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="group block rounded-xl border border-zinc-200 p-5 transition hover:border-red-300 hover:bg-red-50/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              <span className="block font-semibold text-zinc-900 transition group-hover:text-red-700">
                {guide.title}
              </span>

              <span className="mt-2 block text-sm leading-6 text-zinc-600">
                {guide.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
