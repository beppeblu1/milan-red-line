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
            Enjoy Milan. Sleep in peace.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Both apartments are located in Sesto San Giovanni, just a short walk
            from the M1 Red Line. Enjoy the energy of Milan during the day and
            relax in a quieter neighbourhood in the evening.
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
                  Restaurants, cafés, supermarkets and everyday services are all
                  within walking distance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <iframe
            title="Apartment locations"
            src="https://www.google.com/maps?q=Via%20Giovanna%20d%27Arco%20200%2C%20Sesto%20San%20Giovanni&z=14&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

          <div className="border-t border-zinc-200 bg-white p-6">
            <div className="space-y-2 text-sm text-zinc-600">
              <p>
                📍 Arco Apartment — Via Giovanna d'Arco area
              </p>

              <p>
                📍 Gramsci Apartment — Viale Gramsci area
              </p>

              <p>
                🚇 M1 Red Line – Sesto Rondò
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}