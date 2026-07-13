import Link from "next/link";

export default function BackButton() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
      >
        ← Back to Home
      </Link>
    </div>
  );
}