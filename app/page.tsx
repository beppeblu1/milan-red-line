import ApartmentCard from "@/components/ApartmentCard";
import Header from "@/components/Header";
import { apartments } from "@/data/apartments";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-red-600 md:mx-0" />

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Two apartments. One direct line to Milan.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl">
              Comfortable stays in Sesto San Giovanni — just a short walk from
              the M1 Red Line and minutes from the heart of Milan.
            </p>

            <a
              href="#apartments"
              className="mt-10 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Explore Apartments
            </a>
          </div>
        </section>

        {/* Apartments */}
        <section
          id="apartments"
          className="border-t border-zinc-100 bg-zinc-50 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Our Apartments
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-600">
              Two thoughtfully designed spaces, both with easy metro access to
              Milan city centre.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {apartments.map((apt) => (
                <ApartmentCard
                  key={apt.id}
                  title={apt.name}
                  subtitle={apt.description}
                  image={apt.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}