import Link from "next/link";

export default function GuideApartmentsInlineCTA() {
  return (
    <div className="mb-14" aria-label="Stay planning">
      <div className="border-y border-zinc-200 py-4 sm:flex sm:items-center sm:border-y-0 sm:py-0">
        <div className="hidden h-px flex-1 bg-zinc-200 sm:block" aria-hidden="true" />
        <div className="flex flex-col items-start gap-1.5 text-sm sm:mx-4 sm:flex-row sm:items-center sm:gap-3">
          <span className="text-zinc-500">Planning your stay in Milan?</span>
          <span className="hidden text-zinc-300 sm:inline" aria-hidden="true">
            |
          </span>
          <Link
            href="/#apartments"
            className="-my-2 inline-flex min-h-11 items-center py-2 font-medium text-red-600 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
 Check our apartments <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="hidden h-px w-10 bg-zinc-200 sm:block" aria-hidden="true" />
      </div>
    </div>
  );
}
