type ApartmentLocation = {
  id: string;
  name: string;
  type: "apartment";
  slug: string;
  latitude: number;
  longitude: number;
};

type TransportLocation = {
  id: string;
  name: string;
  type: "metro" | "station";
  latitude: number;
  longitude: number;
};

export type MapLocation =
  | ApartmentLocation
  | TransportLocation;

export const locations = [
  {
    id: "arco",
    name: "Arco Apartment",
    type: "apartment",
    slug: "arco",
    latitude: 45.53484359188006,
    longitude: 9.241858656150693,
  },
  {
    id: "gramsci",
    name: "Gramsci Apartment",
    type: "apartment",
    slug: "gramsci",
    latitude: 45.53803524573547,
    longitude: 9.234724625743274,
  },
  {
    id: "rondo",
    name: "Sesto Rondò (M1)",
    type: "metro",
    latitude: 45.534159629167405,
    longitude: 9.231549465978194,
  },
  {
    id: "fs",
    name: "Sesto San Giovanni FS",
    type: "station",
    latitude: 45.541391515885884,
    longitude: 9.238662019759103,
  },
] satisfies readonly MapLocation[];