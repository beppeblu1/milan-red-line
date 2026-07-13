import { Train, MapPin, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-zinc-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Testo */}
        <div>
          <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            Excellent Location
          </div>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            Stay close to Milan without staying in the city centre.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Both apartments are located in Sesto San Giovanni, just a short walk
            from the M1 Red Line. Reach Milan quickly while enjoying a quieter
            neighbourhood.
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
                  Around 20 minutes by metro.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 text-red-600" />

              <div>
                <h3 className="font-semibold text-zinc-900">
                  Privacy first
                </h3>

                <p className="text-zinc-600">
                  The exact address is shared after booking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder mappa */}
        <div className="flex aspect-square items-center justify-center rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <div className="text-center">
            <MapPin className="mx-auto h-12 w-12 text-red-600" />

            <h3 className="mt-4 text-xl font-semibold text-zinc-900">
              Interactive map coming soon
            </h3>

            <p className="mt-2 text-zinc-600">
              This area will display the apartment location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}