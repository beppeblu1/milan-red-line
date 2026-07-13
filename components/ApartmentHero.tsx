type ApartmentHeroProps = {
  title: string;
  subtitle: string;
};

export default function ApartmentHero({
  title,
  subtitle,
}: ApartmentHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-8 pb-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-zinc-900">
          {title}
        </h1>

        <p className="mt-4 text-xl leading-8 text-zinc-600">
          {subtitle}
        </p>
      </div>
    </section>
  );
}