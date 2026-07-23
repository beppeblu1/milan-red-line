export type ApartmentRecommendationContext =
  | "malpensa-airport"
  | "linate-airport"
  | "orio-al-serio-airport"
  | "milano-centrale"
  | "m1-red-line"
  | "public-transport";

export type Apartment = {
  id: string;
  slug: string;

  // General
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  description: string;
  space: string;

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

  // Recommendations
  priority: number;
  relevance: Record<ApartmentRecommendationContext, number>;

  // Visibility
  published: boolean;
};
