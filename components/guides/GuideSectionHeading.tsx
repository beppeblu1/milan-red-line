import type { ReactNode } from "react";

type GuideSectionHeadingProps = {
  id: string;
  children: ReactNode;
};

export default function GuideSectionHeading({
  id,
  children,
}: GuideSectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl"
    >
      {children}
    </h2>
  );
}
