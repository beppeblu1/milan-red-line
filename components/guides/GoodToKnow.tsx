import type { ReactNode } from "react";

type GoodToKnowProps = {
  children: ReactNode;
  title?: string;
};

export default function GoodToKnow({
  children,
  title = "Good to know",
}: GoodToKnowProps) {
  return (
    <aside
      aria-labelledby="good-to-know-title"
      className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6"
    >
      <h2
        id="good-to-know-title"
        className="text-lg font-semibold text-zinc-900"
      >
        {title}
      </h2>

      <div className="mt-3 text-base leading-7 text-zinc-700">{children}</div>
    </aside>
  );
}
