import type { ReactNode } from "react";
import {
  Bus,
  Train,
  TrainFront,
  TramFront,
  type LucideIcon,
} from "lucide-react";

type GuideComparisonIcon = "metro" | "tram" | "bus" | "train";

type GuideComparisonTableProps = {
  children: ReactNode;
  firstColumnLabel?: string;
  secondColumnLabel?: string;
};

type GuideComparisonRowProps = {
  title: string;
  icon?: GuideComparisonIcon;
  children: ReactNode;
};

const comparisonIcons: Record<GuideComparisonIcon, LucideIcon> = {
  metro: TrainFront,
  tram: TramFront,
  bus: Bus,
  train: Train,
};

export function GuideComparisonRow({
  title,
  icon = "train",
  children,
}: GuideComparisonRowProps) {
  const Icon = comparisonIcons[icon];

  return (
    <tr>
      <td className="px-5 py-4 align-top md:px-7 md:py-5">
        <span className="flex items-center gap-3">
          <Icon
            className="h-5 w-5 shrink-0 text-red-600"
            aria-hidden="true"
          />

          <span className="font-semibold text-zinc-900">
            {title}
          </span>
        </span>
      </td>

      <td className="px-5 py-4 align-top text-zinc-700 md:px-7 md:py-5">
        {children}
      </td>
    </tr>
  );
}

export default function GuideComparisonTable({
  children,
  firstColumnLabel = "Option",
  secondColumnLabel = "Best for",
}: GuideComparisonTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wide text-red-600 md:px-7">
                {firstColumnLabel}
              </th>

              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wide text-red-600 md:px-7">
                {secondColumnLabel}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-200">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}