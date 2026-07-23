import { Apartment } from "@/types/apartment";

export const apartments: Apartment[] = [
  {
    id: "1",
    slug: "arco",

    // General
    name: "Arco",
    tagline: "Quiet apartment near the M1 Red Line",

    shortDescription:
      "A peaceful apartment in a private residential area, just a few minutes from the M1 Red Line.",

    longDescription:
      "Located inside a private gated residential area with internal roads and a shared garden, Arco Apartment offers a quiet and relaxing environment while keeping Milan within easy reach. The apartment is ideal for couples, families and travellers looking for comfort, privacy and excellent connections.",

    // Detailed description
    description:
      "Both apartments are located in Sesto San Giovanni, only a short walk from the M1 Red Line. Reach the heart of Milan in minutes while enjoying the comfort of a quiet neighbourhood, with cafÃ©s, restaurants and everyday services nearby.",

    space:
      "The apartment features a spacious bedroom with a comfortable double bed and a large wardrobe. The living area includes a sofa bed, creating additional sleeping space for guests. The private residential setting, green areas and quiet surroundings make Arco Apartment ideal for both short stays and longer visits.",

    // Legal
    cin: "IT015209C2IRDP6EAB",
    cir: "",

    // Property
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    squareMeters: 58,
    floor: 2,
    elevator: true,

    // Location
    city: "Sesto San Giovanni",
    district: "Via Giovanna d'Arco area",
    metroStation: "Sesto RondÃ²",
    metroMinutes: 7,

    // Amenities
    wifi: true,
    airConditioning: true,
    heating: true,
    kitchen: true,
    washingMachine: true,
    dishwasher: false,
    tv: true,
    balcony: false,
    selfCheckIn: true,

    // Booking
    airbnbUrl: "https://www.airbnb.it/rooms/23072204",
    bookingUrl: "",

    // Media
    coverImage: "/images/arco/cover.jpg",
    gallery: [
      "/images/arco/cover.jpg",
      "/images/arco/01_vista_panoramica_totale_01.png",
      "/images/arco/03_vista_living_02.png",
      "/images/arco/Cucina_01.jpg",
      "/images/arco/04_vista_cucina_01.png",
      "/images/arco/Camera_01.jpg",
      "/images/arco/08_vista_camera_01.png",
      "/images/arco/10_vista_camera_03.png",
      "/images/arco/Bagno_01.jpg",
      "/images/arco/13_vista_bagno_02.png",
      "/images/arco/Balcone.jpg",
      "/images/arco/15_vista_balcone_02.png",
      "/images/arco/Esterno.jpg",
    ],

    // Recommendations
    priority: 1,
    relevance: {
      "malpensa-airport": 100,
      "linate-airport": 100,
      "orio-al-serio-airport": 100,
      "milano-centrale": 100,
      "m1-red-line": 100,
      "public-transport": 100,
    },

    // Visibility
    published: true,
  },

  {
    id: "2",
    slug: "gramsci",

    // General
    name: "Gramsci",
    tagline: "Comfortable apartment with balcony near Milan",

    shortDescription:
      "A comfortable apartment with balcony, just five minutes from the M1 Red Line and Sesto San Giovanni station.",

    longDescription:
      "Gramsci Apartment is a welcoming and well-connected home in Sesto San Giovanni. Its strategic location makes it an ideal base for exploring Milan, Monza and Lake Como, while keeping all everyday services within walking distance.",

    // Detailed description
    description:
      "Located just a few minutes from the metro and railway station, Gramsci Apartment offers excellent connections to Milan city centre, Monza and Lake Como. Supermarkets, cafÃ©s and restaurants are all nearby.",

    space:
      "The apartment includes a large bedroom with a comfortable double bed, a private bathroom and a bright living area with sofa, TV, kitchen and dining table. A spacious balcony can be accessed both from the bedroom and the living area, offering an additional outdoor space during your stay.",

    // Legal
    cin: "IT015209C2JEUIKROO",
    cir: "",

    // Property
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    squareMeters: 60,
    floor: 1,
    elevator: true,

    // Location
    city: "Sesto San Giovanni",
    district: "Viale Gramsci area",
    metroStation: "Sesto RondÃ²",
    metroMinutes: 5,

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
    airbnbUrl: "https://www.airbnb.it/rooms/1004153206964898199",
    bookingUrl: "",

    // Media
    coverImage: "/images/gramsci/cover.jpg",
    gallery: [
      "/images/gramsci/cover.jpg",
      "/images/gramsci/P1010002_tv.jpg",
      "/images/gramsci/P1010009.JPG",
      "/images/gramsci/P1010010.JPG",
      "/images/gramsci/P1010015.JPG",
      "/images/gramsci/P1010006.JPG",
      "/images/gramsci/P1010007.JPG",
      "/images/gramsci/P1010008.JPG",
      "/images/gramsci/P1010011.JPG",
      "/images/gramsci/P1010016.JPG",
      "/images/gramsci/P1010018.JPG",
      "/images/gramsci/P1010019.JPG",
      "/images/gramsci/P1010022.JPG",
    ],

    // Recommendations
    priority: 2,
    relevance: {
      "malpensa-airport": 100,
      "linate-airport": 100,
      "orio-al-serio-airport": 100,
      "milano-centrale": 100,
      "m1-red-line": 100,
      "public-transport": 100,
    },

    // Visibility
    published: true,
  },
];
