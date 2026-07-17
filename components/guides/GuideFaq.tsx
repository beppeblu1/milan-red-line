import type { ReactNode } from "react";

type GuideFaqProps = {
  children: ReactNode;
};

type GuideFaqItemProps = {
  question: string;
  children: ReactNode;
};

export function GuideFaq({ children }: GuideFaqProps) {
  return <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">{children}</div>;
}

export function GuideFaqItem({
  question,
  children,
}: GuideFaqItemProps) {
  return (
    <details className="group py-1">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 [&::-webkit-details-marker]:hidden">
        <span>{question}</span>

        <span
          aria-hidden="true"
          className="text-xl font-normal text-red-600 group-open:hidden"
        >
          +
        </span>

        <span
          aria-hidden="true"
          className="hidden text-xl font-normal text-red-600 group-open:inline"
        >
          −
        </span>
      </summary>

      <div className="pb-6 text-lg leading-8 text-zinc-700">{children}</div>
    </details>
  );
}
