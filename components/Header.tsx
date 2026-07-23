"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Milan Red Line — Home"
            className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/brand/mrl-mark-version-b.svg"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8 shrink-0"
            />

            <span className="whitespace-nowrap text-xl font-bold tracking-tight">
              Milan <span className="text-red-600">Red Line</span>
            </span>
          </Link>

          {/* Desktop navigation */}

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

          {/* Mobile menu button */}

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <>
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    className="text-red-600"
                  />
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    className="text-red-600"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className="text-red-600"
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className="text-red-600"
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className="text-red-600"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-zinc-200 py-4 md:hidden"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium transition hover:bg-zinc-100 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}