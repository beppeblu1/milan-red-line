import {
    Train,
    House,
    Wifi,
    KeyRound,
  } from "lucide-react";
  
  const features = [
    {
      icon: Train,
      title: "Close to the M1 Red Line",
      description:
        "Reach Milan city centre quickly with the nearby metro.",
    },
    {
      icon: House,
      title: "Entire apartment",
      description:
        "Enjoy complete privacy in a fully furnished apartment.",
    },
    {
      icon: Wifi,
      title: "Fast Wi-Fi",
      description:
        "Reliable high-speed internet for work and leisure.",
    },
    {
      icon: KeyRound,
      title: "Self check-in",
      description:
        "Flexible arrival with independent check-in.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-zinc-900">
              Why choose Milan Red Line?
            </h2>
  
            <p className="mt-4 text-lg text-zinc-600">
              Everything you need for a comfortable stay just outside Milan.
            </p>
          </div>
  
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="h-8 w-8 text-red-600" />
  
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