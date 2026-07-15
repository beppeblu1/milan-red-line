import { notFound } from "next/navigation";
import { guides } from "../guideData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;

  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">

      <header className="mb-14">

        <p className="mb-4 text-sm text-zinc-500">
          {guide.readingTime}
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          {guide.heroTitle}
        </h1>

        <p className="mt-6 text-xl leading-8 text-zinc-600">
          {guide.heroSubtitle}
        </p>

      </header>

      <div className="space-y-14">

        {guide.sections.map((section) => (

          <section key={section.title}>

            <h2 className="mb-5 text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>

            <div className="space-y-5">

              {section.content.map((paragraph) => (

                <p
                  key={paragraph}
                  className="leading-8 text-zinc-700"
                >
                  {paragraph}
                </p>

              ))}

            </div>

          </section>

        ))}

      </div>

      <section className="mt-20 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">

        <h2 className="text-2xl font-semibold">
        Ready to plan your stay?
        </h2>

        <p className="mt-4 leading-7 text-zinc-600">
        If you're looking for a comfortable base with quick access to Milan, we'd be happy to welcome you.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href="/#apartments"
            className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
          >
            View Apartments
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-zinc-300 px-6 py-3 font-medium transition hover:bg-zinc-100"
          >
            Contact Us
          </a>

        </div>

      </section>

    </article>
  );
}