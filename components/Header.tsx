import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Milan <span className="text-red-600">Red Line</span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-red-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}