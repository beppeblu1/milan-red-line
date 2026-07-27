import Link from "next/link";

type GuidePaginationProps = {
  currentPage: number;
  totalPages: number;
  pathname: string;
};

function createPageHref(
  pathname: string,
  page: number,
): string {
  return page <= 1 ? pathname : `${pathname}?page=${page}`;
}

export default function GuidePagination({
  currentPage,
  totalPages,
  pathname,
}: GuidePaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const navigationClassName =
    "inline-flex min-h-11 min-w-24 items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2";

  const enabledClassName =
    "border-zinc-300 bg-white text-zinc-700 hover:border-red-300 hover:text-red-700";

  const disabledClassName =
    "cursor-not-allowed border-zinc-200 bg-zinc-50 text-zinc-400";

  return (
    <nav
      aria-label="Guides pagination"
      className="mt-8 flex items-center justify-between gap-3 border-t border-zinc-200 pt-6 sm:mt-10"
    >
      {hasPreviousPage ? (
        <Link
          href={createPageHref(pathname, currentPage - 1)}
          className={`${navigationClassName} ${enabledClassName}`}
          rel="prev"
        >
          Previous
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className={`${navigationClassName} ${disabledClassName}`}
        >
          Previous
        </span>
      )}

      <p
        aria-live="polite"
        className="shrink-0 text-center text-sm font-medium text-zinc-600"
      >
        Page {currentPage} of {totalPages}
      </p>

      {hasNextPage ? (
        <Link
          href={createPageHref(pathname, currentPage + 1)}
          className={`${navigationClassName} ${enabledClassName}`}
          rel="next"
        >
          Next
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className={`${navigationClassName} ${disabledClassName}`}
        >
          Next
        </span>
      )}
    </nav>
  );
}

