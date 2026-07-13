export type Apartment = {
    id: string;
    slug: string;
  
    // General
    name: string;
    tagline: string;
    shortDescription: string;
    longDescription: string;
  
    // Legal
    cin: string;
    cir?: string;
  
    // Property
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    squareMeters: number;
    floor: number;
    elevator: boolean;
  
    // Location
    city: string;
    district: string;
    metroStation: string;
    metroMinutes: number;
  
    // Amenities
    wifi: boolean;
    airConditioning: boolean;
    heating: boolean;
    kitchen: boolean;
    washingMachine: boolean;
    dishwasher: boolean;
    tv: boolean;
    balcony: boolean;
    selfCheckIn: boolean;
  
    // Booking
    airbnbUrl?: string;
    bookingUrl?: string;
  
    // Media
    coverImage: string;
    gallery: string[];
  
    // Visibility
    published: boolean;
  };