import type { ReactNode } from "react";
import { CircleCheck, MapPinned } from "lucide-react";

type GuideDestinationTableProps = {
  children: ReactNode;
  destinationLabel?: string;
  connectionLabel?: string;
};

type GuideDestinationRowProps = {
  destination: string;
  direct?: boolean;
};

export function GuideDestinationRow({
  destination,
  direct = false,
}: GuideDestinationRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 md:px-7 md:py-5">
        <span className="flex items-center gap-3">
          <MapPinned
            className="h-5 w-5 shrink-0 text-red-600"
            aria-hidden="true"
          />

          <span className="font-semibold text-zinc-900">
            {destination}
          </span>
        </span>
      </td>

      <td className="px-5 py-4 text-center md:px-7 md:py-5">
        {direct ? (
          <>
            <CircleCheck
              className="mx-auto h-6 w-6 text-green-600"
              aria-hidden="true"
            />
            <span className="sr-only">Yes</span>
          </>
        ) : (
          <>
            <span className="text-zinc-400" aria-hidden="true">
              —
            </span>
            <span className="sr-only">No</span>
          </>
        )}
      </td>
    </tr>
  );
}

export default function GuideDestinationTable({
  children,
  destinationLabel = "Destination",
  connectionLabel = "Direct on the M1",
}: GuideDestinationTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-5 py-4 text-sm font-semibold uppercase tracking-wide text-red-600 md:px-7">
                {destinationLabel}
              </th>

              <th className="px-5 py-4 text-center text-sm font-semibold uppercase tracking-wide text-red-600 md:px-7">
                {connectionLabel}
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