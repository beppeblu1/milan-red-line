import Image from "next/image";

type ApartmentHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function ApartmentHero({
  title,
  subtitle,
  image,
}: ApartmentHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <Image
        src={image}
        alt={title}
        width={1600}
        height={900}
        className="h-[500px] w-full rounded-3xl object-cover"
        priority
      />

      <div className="mt-10">
        <h1 className="text-5xl font-bold text-zinc-900">{title}</h1>

        <p className="mt-4 max-w-2xl text-xl leading-8 text-zinc-600">
          {subtitle}
        </p>
      </div>
    </section>
  );
}