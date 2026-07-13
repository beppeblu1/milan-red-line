import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition hover:opacity-80"
        >
          🚇 Milan <span className="text-red-600">Red Line</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
          <Link
            href="/#apartments"
            className="transition hover:text-red-600"
          >
            Apartments
          </Link>

          <Link
            href="/#about"
            className="transition hover:text-red-600"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="transition hover:text-red-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}