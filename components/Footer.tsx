import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold">
            Milan <span className="text-red-600">Red Line</span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Comfortable apartments in Sesto San Giovanni,
            just a few minutes from the M1 Red Line and
            the centre of Milan.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-zinc-900">
            Explore
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/apartments/arco">Arco</Link>
            </li>

            <li>
              <Link href="/apartments/gramsci">Gramsci</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-zinc-900">
            Information
          </h4>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            CIN and CIR are displayed on each apartment page,
            in accordance with Italian regulations.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Milan Red Line.
            All rights reserved.
          </p>

          <p>
            Made with ❤️ in Italy
          </p>
        </div>
      </div>
    </footer>
  );
}