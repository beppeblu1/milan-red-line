import ApartmentCard from "@/components/ApartmentCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-3xl">
          <div className="mb-8 h-1 w-24 bg-red-600 rounded-full"></div>

          <h1 className="text-6xl font-bold tracking-tight text-zinc-900">
            Milan Red Line
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-600">
            Comfortable apartments in Sesto San Giovanni, just a short walk from
            the M1 Red Line and only minutes from the heart of Milan.
          </p>

          <button className="mt-10 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
            Explore Apartments
          </button>
          <section className="mx-auto mt-24 grid max-w-6xl gap-8 md:grid-cols-2">

  <ApartmentCard
    title="Red Line One"
    subtitle="Bright apartment just 10 minutes from Sesto Rondò."
  />

  <ApartmentCard
    title="Red Line Two"
    subtitle="Comfortable stay close to Milan and the M1 Metro."
  />

</section>
        </div>
      </main>
    </>
  );
}