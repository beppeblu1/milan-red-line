import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-zinc-900">
            Milan <span className="text-red-600">Red Line</span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Comfortable apartments in Sesto San Giovanni, connected to the
            heart of Milan by the M1 Red Line.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-zinc-900">
            Quick Links
          </h4>

          <nav className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
            <Link
              href="/"
              className="transition hover:text-red-600"
            >
              Home
            </Link>

            <Link
              href="/#apartments"
              className="transition hover:text-red-600"
            >
              Apartments
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-red-600"
            >
              Contact
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-red-600"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-zinc-900">
            Get in touch
          </h4>

          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition hover:text-red-600"
              >
                <Mail className="h-4 w-4" />
                Send an email
              </a>
            )}

            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-red-600"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 Milan Red Line. All rights reserved.
          </p>

          <p>
            Designed for travellers ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}