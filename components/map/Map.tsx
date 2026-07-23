"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import Map, {
  Marker,
  NavigationControl,
  Popup,
  type MapRef,
} from "react-map-gl/maplibre";

import maplibregl, { LngLatBounds } from "maplibre-gl";

import MarkerIcon from "@/components/ui/MarkerIcon";

import {
  locations,
  type MapLocation,
} from "./locations";

import "maplibre-gl/dist/maplibre-gl.css";

export default function ApartmentMap() {
  const mapRef = useRef<MapRef>(null);

  const [selected, setSelected] =
    useState<MapLocation | null>(null);

  const bounds = useMemo(() => {
    const nextBounds = new LngLatBounds();

    locations.forEach((location) => {
      nextBounds.extend([
        location.longitude,
        location.latitude,
      ]);
    });

    return nextBounds;
  }, []);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

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
            offset={5}
            closeButton
            closeOnClick={false}
            onClose={() => setSelected(null)}
          >
            {selected.type === "apartment" ? (
              <Link
                href={`/apartments/${selected.slug}`}
                className="block min-w-[180px] outline-none"
                aria-label={`View ${selected.name}`}
              >
                <h3 className="font-semibold text-zinc-900">
                  {selected.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-600 transition-colors hover:text-red-600">
                  View apartment →
                </p>
              </Link>
            ) : (
              <div className="min-w-[180px]">
                <h3 className="font-semibold text-zinc-900">
                  {selected.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-600">
                  {selected.type === "metro"
                    ? "M1 Red Line"
                    : "Railway Station"}
                </p>
              </div>
            )}
          </Popup>
        )}
      </Map>
    </div>
  );
}