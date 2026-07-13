import {
    Train,
    House,
    Wifi,
    KeyRound,
  } from "lucide-react";
  
  const features = [
    {
      icon: Train,
      title: "One direct line to Milan",
      description:
        "Just a short walk to the M1 Red Line with direct connections to the city centre.",
    },
    {
      icon: House,
      title: "Feel at home",
      description:
        "Bright, fully equipped apartments designed for comfort and privacy.",
    },
    {
      icon: Wifi,
      title: "Fast Wi-Fi",
      description:
        "Stay connected whether you're working remotely or planning your next day in Milan.",
    },
    {
      icon: KeyRound,
      title: "Easy arrival",
      description:
        "Flexible self check-in lets you arrive whenever it suits you.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-zinc-900">
              Why guests love Milan Red Line
            </h2>
  
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Comfort, convenience and easy access to Milan — everything you need
              for a relaxing stay.
            </p>
          </div>
  
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                    <Icon className="h-7 w-7 text-red-600" />
                  </div>
  
                  <h3 className="mt-6 text-xl font-semibold text-zinc-900">
                    {feature.title}
                  </h3>
  
                  <p className="mt-3 leading-7 text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }