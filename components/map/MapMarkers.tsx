"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { locations } from "./locations";

const apartmentIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const stationIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapMarkers() {
  return (
    <>
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={
            location.type === "apartment"
              ? apartmentIcon
              : stationIcon
          }
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </>
  );
}