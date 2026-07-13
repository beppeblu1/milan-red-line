import { Apartment } from "@/types/apartment";

export const apartments: Apartment[] = [
  {
    id: "1",
    slug: "arco",

    // General
    name: "Arco",
    tagline: "Bright apartment near the M1 Red Line",
    shortDescription:
      "Bright and comfortable apartment just a few minutes from the M1 Red Line.",
    longDescription:
      "A modern apartment in Sesto San Giovanni, perfect for visiting Milan while enjoying a quiet residential area.",

    // Legal
    cin: "TO_BE_ADDED",
    cir: "",

    // Property
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    squareMeters: 55,
    floor: 2,
    elevator: true,

    // Location
    city: "Sesto San Giovanni",
    district: "Via Arco area",
    metroStation: "Sesto Rondò",
    metroMinutes: 7,

    // Amenities
    wifi: true,
    airConditioning: true,
    heating: true,
    kitchen: true,
    washingMachine: true,
    dishwasher: false,
    tv: true,
    balcony: true,
    selfCheckIn: true,

    // Booking
    airbnbUrl: "",
    bookingUrl: "",

    // Media
    coverImage: "/images/arco/cover.jpg",
    gallery: [
      "/images/arco/cover.jpg",
    ],

    // Visibility
    published: true,
  },

  {
    id: "2",
    slug: "gramsci",

    // General
    name: "Gramsci",
    tagline: "Quiet apartment close to Milan",
    shortDescription:
      "Comfortable apartment with balcony and quick access to Milan city centre.",
    longDescription:
      "A welcoming apartment located near the M1 Red Line, ideal for business trips and city breaks.",

    // Legal
    cin: "TO_BE_ADDED",
    cir: "",

    // Property
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    squareMeters: 60,
    floor: 3,
    elevator: true,

    // Location
    city: "Sesto San Giovanni",
    district: "Via Gramsci area",
    metroStation: "Sesto Rondò",
    metroMinutes: 6,

    // Amenities
    wifi: true,
    airConditioning: true,
    heating: true,
    kitchen: true,
    washingMachine: true,
    dishwasher: false,
    tv: true,
    balcony: true,
    selfCheckIn: true,

    // Booking
    airbnbUrl: "",
    bookingUrl: "",

    // Media
    coverImage: "/images/gramsci/cover.jpg",
    gallery: [
      "/images/gramsci/cover.jpg",
    ],

    // Visibility
    published: true,
  },
];