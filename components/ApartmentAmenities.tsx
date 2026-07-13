import {
    Wifi,
    Snowflake,
    ChefHat,
    Tv,
    Building2,
    KeyRound,
    Waves,
    WashingMachineIcon,
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
      {
        show: wifi,
        label: "Free Wi-Fi",
        Icon: Wifi,
      },
      {
        show: airConditioning,
        label: "Air conditioning",
        Icon: Snowflake,
      },
      {
        show: kitchen,
        label: "Fully equipped kitchen",
        Icon: ChefHat,
      },
      {
        show: washingMachine,
        label: "Washing machine",
        Icon: WashingMachineIcon,
      },
      {
        show: tv,
        label: "Smart TV",
        Icon: Tv,
      },
      {
        show: elevator,
        label: "Elevator",
        Icon: Building2,
      },
      {
        show: balcony,
        label: "Balcony",
        Icon: Waves,
      },
      {
        show: selfCheckIn,
        label: "Self check-in",
        Icon: KeyRound,
      },
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-zinc-900">
          What you'll find
        </h2>
  
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities
            .filter((item) => item.show)
            .map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <Icon className="h-6 w-6 text-red-600" />
  
                <span className="text-zinc-700">{label}</span>
              </div>
            ))}
        </div>
      </section>
    );
  }