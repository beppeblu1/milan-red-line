import type { ReactNode } from "react";
import {
  CircleCheck,
  CreditCard,
  List,
} from "lucide-react";

import {
  guideIcons,
  type GuideIconName,
} from "@/components/guides/guide-icons";

type GuideSectionHeadingIcon =
  | GuideIconName
  | "check-circle"
  | "credit-card"
  | "list";

type GuideSectionHeadingProps = {
  id: string;
  children: ReactNode;
  icon?: GuideSectionHeadingIcon;
};

const icons = {
  ...guideIcons,
  "check-circle": CircleCheck,
  "credit-card": CreditCard,
  list: List,
};

export default function GuideSectionHeading({
  id,
  children,
  icon,
}: GuideSectionHeadingProps) {
  const Icon = icon ? icons[icon] : null;

  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl"
    >
      <span className="flex items-center gap-3">
        {Icon && (
          <Icon
            className="h-7 w-7 shrink-0 text-red-600"
            aria-hidden="true"
          />
        )}

        <span>{children}</span>
      </span>
    </h2>
  );
}