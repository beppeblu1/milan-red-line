import Link from "next/link";

export default function GuideFinalCTA() {
  return (
    <section
      aria-labelledby="guide-final-cta-title"
      className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-10 text-center sm:px-10 sm:py-12"
    >
      <h2
        id="guide-final-cta-title"
        className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
      >
        Ready to plan your stay?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
        Explore our apartments near Milan&apos;s M1 Red Line, or contact us
        directly if you have any questions before booking.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/#apartments"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          View Apartments
        </Link>

        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}