type TableOfContentsItem = {
  label: string;
  href: `#${string}`;
};

type GuideTableOfContentsProps = {
  items: TableOfContentsItem[];
  title?: string;
};

export default function GuideTableOfContents({
  items,
  title = "In this guide",
}: GuideTableOfContentsProps) {
  return (
    <nav
      aria-label={title}
      className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
    >
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="font-medium text-red-600 underline decoration-red-200 underline-offset-4 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
