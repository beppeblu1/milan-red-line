"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import MapMarkers from "./MapMarkers";

export default function ApartmentMap() {
  return (
    <MapContainer
      center={[45.5365, 9.234]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-[500px] w-full rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapMarkers />
    </MapContainer>
  );
}