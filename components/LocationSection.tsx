import { Train, MapPin, Clock, Home } from "lucide-react";

import ApartmentMap from "@/components/map/Map";
import MarkerIcon from "@/components/ui/MarkerIcon";

export default function LocationSection() {
  return (
    <section className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            Excellent Location
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-900">
            The best of Milan.
            <br />
            <span className="text-red-600">
              The comfort of home.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Both apartments are located in Sesto San Giovanni, only a short walk
            from the M1 Red Line. Reach the heart of Milan in minutes while
            enjoying the comfort of a quiet neighbourhood, with cafés,
            restaurants and everyday services just around the corner.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <Train className="mt-1 h-6 w-6 text-red-600" />

              <div>
                <h3 className="font-semibold text-zinc-900">
                  M1 Red Line
                </h3>

                <p className="text-zinc-600">
                  Approximately 6–7 minutes on foot.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 text-red-600" />

              <div>
                <h3 className="font-semibold text-zinc-900">
                  Milan city centre
                </h3>

                <p className="text-zinc-600">
                  About 20 minutes by metro.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 text-red-600" />

              <div>
                <h3 className="font-semibold text-zinc-900">
                  Quiet residential area
                </h3>

                <p className="text-zinc-600">
                  Restaurants, cafés, supermarkets and everyday services are
                  all within walking distance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <ApartmentMap />

          <div className="border-t border-zinc-200 bg-white p-6">
            <div className="space-y-3 text-sm text-zinc-700">
              <div className="flex items-center gap-3">
                <MarkerIcon
                  type="apartment"
                  size={24}
                />
                <span>Arco Apartment</span>
              </div>

              <div className="flex items-center gap-3">
                <MarkerIcon
                  type="apartment"
                  size={24}
                />
                <span>Gramsci Apartment</span>
              </div>

              <div className="flex items-center gap-3">
                <MarkerIcon
                  type="metro"
                  size={24}
                />
                <span>Sesto Rondò (M1)</span>
              </div>

              <div className="flex items-center gap-3">
                <MarkerIcon
                  type="station"
                  size={24}
                />
                <span>Sesto San Giovanni FS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}