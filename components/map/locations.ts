export type MapLocation = {
    id: string;
    name: string;
    position: [number, number];
    type: "apartment" | "station";
  };
  
  export const locations: MapLocation[] = [
    {
      id: "arco",
      name: "Arco Apartment",
      position: [45.5408, 9.2327],
      type: "apartment",
    },
    {
      id: "gramsci",
      name: "Gramsci Apartment",
      position: [45.5368, 9.2310],
      type: "apartment",
    },
    {
      id: "rondo",
      name: "Sesto Rondò (M1)",
      position: [45.5345, 9.2308],
      type: "station",
    },
    {
      id: "fs",
      name: "Sesto San Giovanni FS",
      position: [45.5342, 9.2412],
      type: "station",
    },
  ];