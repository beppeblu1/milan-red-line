"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Map, {
  Marker,
  NavigationControl,
  Popup,
  type MapRef,
} from "react-map-gl/maplibre";

import maplibregl, { LngLatBounds } from "maplibre-gl";

import MarkerIcon from "@/components/ui/MarkerIcon";

import { locations } from "./locations";

import "maplibre-gl/dist/maplibre-gl.css";

type Location = (typeof locations)[number];

export default function ApartmentMap() {
  const mapRef = useRef<MapRef>(null);

  const [selected, setSelected] = useState<Location | null>(null);

  const bounds = useMemo(() => {
    const b = new LngLatBounds();

    locations.forEach((location) => {
      b.extend([location.longitude, location.latitude]);
    });

    return b;
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current.fitBounds(bounds, {
      padding: 70,
      duration: 0,
      maxZoom: 15,
    });
  }, [bounds]);

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-3xl">
      <Map
        ref={mapRef}
        mapLib={maplibregl}
        initialViewState={{
          longitude: 9.239,
          latitude: 45.539,
          zoom: 13,
        }}
        mapStyle="https://tiles.openfreemap.org/styles/bright"
        dragRotate={false}
        touchZoomRotate={false}
        attributionControl={false}
      >
        <NavigationControl
          position="top-right"
          showCompass={false}
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="bottom"
          >
            <button
              type="button"
              onClick={() => setSelected(location)}
              className="transition hover:scale-110"
              aria-label={location.name}
            >
              <MarkerIcon type={location.type} />
            </button>
          </Marker>
        ))}

        {selected && (
          <Popup
            longitude={selected.longitude}
            latitude={selected.latitude}
            anchor="top"
            offset={20}
            closeButton
            closeOnClick={false}
            onClose={() => setSelected(null)}
          >
            <div className="min-w-[180px]">
              <h3 className="font-semibold text-zinc-900">
                {selected.name}
              </h3>

              <p className="mt-1 text-sm text-zinc-600">
                {selected.type === "apartment"
                  ? "Apartment"
                  : selected.type === "metro"
                  ? "M1 Red Line"
                  : "Railway Station"}
              </p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}