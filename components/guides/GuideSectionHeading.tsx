import type { ReactNode } from "react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  CircleCheck,
  CircleHelp,
  Clock3,
  CreditCard,
  Info,
  Lightbulb,
  List,
  MapPinned,
  Ticket,
  Train,
  Users,
} from "lucide-react";

type GuideSectionHeadingIcon =
  | "briefcase"
  | "building"
  | "calendar"
  | "check-circle"
  | "clock"
  | "credit-card"
  | "help"
  | "info"
  | "lightbulb"
  | "list"
  | "map"
  | "ticket"
  | "train"
  | "users";

type GuideSectionHeadingProps = {
  id: string;
  children: ReactNode;
  icon?: GuideSectionHeadingIcon;
};

const icons = {
  briefcase: Briefcase,
  building: Building2,
  calendar: CalendarDays,
  "check-circle": CircleCheck,
  clock: Clock3,
  "credit-card": CreditCard,
  help: CircleHelp,
  info: Info,
  lightbulb: Lightbulb,
  list: List,
  map: MapPinned,
  ticket: Ticket,
  train: Train,
  users: Users,
} satisfies Record<GuideSectionHeadingIcon, typeof Train>;

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