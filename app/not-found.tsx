import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
          404
        </div>

        <h1 className="mt-6 text-5xl font-bold text-zinc-900">
          Page not found
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}