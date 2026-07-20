import type { ReactNode } from "react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  CircleHelp,
  Clock3,
  Info,
  Lightbulb,
  MapPinned,
  Train,
  Users,
} from "lucide-react";

type GuideHighlightIcon =
  | "briefcase"
  | "building"
  | "calendar"
  | "clock"
  | "help"
  | "info"
  | "lightbulb"
  | "map"
  | "train"
  | "users";

type GuideHighlightCardProps = {
  icon: GuideHighlightIcon;
  title: string;
  children: ReactNode;
};

const icons = {
  briefcase: Briefcase,
  building: Building2,
  calendar: CalendarDays,
  clock: Clock3,
  help: CircleHelp,
  info: Info,
  lightbulb: Lightbulb,
  map: MapPinned,
  train: Train,
  users: Users,
} satisfies Record<GuideHighlightIcon, typeof Train>;

export default function GuideHighlightCard({
  icon,
  title,
  children,
}: GuideHighlightCardProps) {
  const Icon = icons[icon];

  return (
    <aside className="my-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50">
          <Icon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>

        <div>
          <h3 className="font-semibold text-zinc-900">
            {title}
          </h3>

          <div className="mt-2 leading-7 text-zinc-600">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}