import type { Place } from "@/features/destinations/types/destinations";

export interface TempleImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Address {
  street: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface RecommendedPlace {
  name: string;
  address: string;
  distance: string;
  rating?: number;
  contact?: string;
  description?: string;
}

export interface TempleDetails extends Place {
  id: string;
  images: TempleImage[];
  about: string;
  address: Address;
  coordinates: Coordinates;
  timings?: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  dressCode?: string;
  nearbyAttractions?: string[];
  yogaCenters: RecommendedPlace[];
  foodCenters: RecommendedPlace[];
  spiritualTeachers: RecommendedPlace[];
}

export interface TempleDetailsState {
  temple: TempleDetails | null;
  isLoading: boolean;
  error: string | null;
}
