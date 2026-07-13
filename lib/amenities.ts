import {
    Wifi,
    Snowflake,
    ChefHat,
    WashingMachine,
    Tv,
    Building2,
    Trees,
    KeyRound,
  } from "lucide-react";
  
  type ApartmentAmenitiesProps = {
    wifi: boolean;
    airConditioning: boolean;
    kitchen: boolean;
    washingMachine: boolean;
    tv: boolean;
    elevator: boolean;
    balcony: boolean;
    selfCheckIn: boolean;
  };
  
  export default function ApartmentAmenities({
    wifi,
    airConditioning,
    kitchen,
    washingMachine,
    tv,
    elevator,
    balcony,
    selfCheckIn,
  }: ApartmentAmenitiesProps) {
    const amenities = [
      { show: wifi, label: "Free Wi-Fi", icon: Wifi },
      { show: airConditioning, label: "Air conditioning", icon: Snowflake },
      { show: kitchen, label: "Fully equipped kitchen", icon: ChefHat },
      { show: washingMachine, label: "Washing machine", icon: WashingMachine },
      { show: tv, label: "Smart TV", icon: Tv },
      { show: elevator, label: "Elevator", icon: Building2 },
      { show: balcony, label: "Balcony", icon: Trees },
      { show: selfCheckIn, label: "Self check-in", icon: KeyRound },
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-zinc-900">
          What you'll find
        </h2>
  
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {amenities
            .filter((item) => item.show)
            .map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-zinc-200 p-5"
                >
                  <Icon size={24} className="text-red-600" />
  
                  <span className="text-lg text-zinc-700">
                    {item.label}
                  </span>
                </div>
              );
            })}
        </div>
      </section>
    );
  }