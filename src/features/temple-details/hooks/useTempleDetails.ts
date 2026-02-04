import { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { indianStates } from "@/features/destinations/types/destinations";
import type { Place } from "@/features/destinations/types/destinations";
import type { TempleDetails } from "../types/templeDetails";
import {
  templeDetailsData,
  generateTempleId,
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../constants/templeData";
import {
  divinePlacesTempleData,
  generateDivinePlaceTempleId,
} from "../constants/divinePlacesTempleData";
import {
  jyotirlingas,
  shaktiPeethas,
  panchaBhutaSthalams,
  pancharamaKshetras,
  panchaSabhai,
  ashtaVeerattaTemples,
  notableShivaTemples,
  deities,
} from "@/features/divine-places/types/divinePlaces";
import type {
  JyotirlingaPlace,
  ShaktiPeethaPlace,
  ShivaTemplePlace,
  SacredPlace,
} from "@/features/divine-places/types/divinePlaces";

// Helper to convert URL slug back to name
const slugToName = (slug: string): string =>
  decodeURIComponent(slug).replace(/-/g, " ");

// Helper to find state by slug
const findStateBySlug = (slug: string) => {
  const name = slugToName(slug).toLowerCase();
  return indianStates.find((s) => s.name.toLowerCase() === name) || null;
};

// Helper to find district by slug within a state
const findDistrictBySlug = (
  state: ReturnType<typeof findStateBySlug>,
  slug: string
) => {
  if (!state) return null;
  const name = slugToName(slug).toLowerCase();
  return state.districts.find((d) => d.name.toLowerCase() === name) || null;
};

// Helper to find place by slug within a district
const findPlaceBySlug = (
  district: ReturnType<typeof findDistrictBySlug>,
  slug: string
) => {
  if (!district) return null;
  const name = slugToName(slug).toLowerCase();
  return district.places.find((p) => p.name.toLowerCase() === name) || null;
};

// Helper to find divine place by deity name or category and temple name
const findDivinePlace = (
  deityOrCategory: string,
  nameSlug: string
): {
  place: JyotirlingaPlace | ShaktiPeethaPlace | ShivaTemplePlace | SacredPlace | null;
  category: string;
} => {
  const templeName = slugToName(nameSlug).toLowerCase();
  const deityOrCategoryName = slugToName(deityOrCategory).toLowerCase();

  // First, check if it's a deity name
  const deity = deities.find((d) => d.name.toLowerCase() === deityOrCategoryName);
  if (deity) {
    const foundPlace = deity.sacredPlaces.find(
      (p) => p.name.toLowerCase() === templeName
    );
    if (foundPlace) {
      return {
        place: foundPlace,
        category: "deity-temple",
      };
    }
  }

  // Check predefined categories
  switch (deityOrCategory) {
    case "jyotirlinga":
      return {
        place: jyotirlingas.find((p) => p.name.toLowerCase() === templeName) || null,
        category: "jyotirlinga",
      };
    case "shaktipeetha":
      return {
        place: shaktiPeethas.find((p) => p.name.toLowerCase() === templeName) || null,
        category: "shaktipeetha",
      };
    case "pancha-bhuta":
      return {
        place:
          panchaBhutaSthalams.find((p) => p.name.toLowerCase() === templeName) ||
          null,
        category: "pancha-bhuta",
      };
    case "pancharama":
      return {
        place:
          pancharamaKshetras.find((p) => p.name.toLowerCase() === templeName) || null,
        category: "pancharama",
      };
    case "pancha-sabhai":
      return {
        place:
          panchaSabhai.find((p) => p.name.toLowerCase() === templeName) || null,
        category: "pancha-sabhai",
      };
    case "ashta-veeratta":
      return {
        place:
          ashtaVeerattaTemples.find((p) => p.name.toLowerCase() === templeName) ||
          null,
        category: "ashta-veeratta",
      };
    case "notable-shiva":
      return {
        place:
          notableShivaTemples.find((p) => p.name.toLowerCase() === templeName) ||
          null,
        category: "notable-shiva",
      };
    default:
      // Search through all deity sacred places as fallback
      for (const d of deities) {
        const foundPlace = d.sacredPlaces.find(
          (p) => p.name.toLowerCase() === templeName
        );
        if (foundPlace) {
          return {
            place: foundPlace,
            category: "deity-temple",
          };
        }
      }
      return { place: null, category: "" };
  }
};

// Generate temple details from divine place data
const generateDivinePlaceTempleDetails = (
  place: JyotirlingaPlace | ShaktiPeethaPlace | ShivaTemplePlace | SacredPlace,
  category: string
): TempleDetails => {
  const templeId = generateDivinePlaceTempleId(category, place.name);

  // Check if we have detailed data for this temple
  if (divinePlacesTempleData[templeId]) {
    return divinePlacesTempleData[templeId];
  }

  // Get category display name
  const categoryNames: Record<string, string> = {
    jyotirlinga: "Jyotirlinga",
    shaktipeetha: "Shakti Peetha",
    "pancha-bhuta": "Pancha Bhuta Sthalam",
    pancharama: "Pancharama Kshetra",
    "pancha-sabhai": "Pancha Sabhai",
    "ashta-veeratta": "Ashta Veeratta",
    "notable-shiva": "Shiva Temple",
    "deity-temple": "Sacred Temple",
  };

  const categoryName = categoryNames[category] || "Sacred Temple";

  // Generate default temple details from divine place data
  return {
    id: templeId,
    name: place.name,
    history: `${place.name} is one of the sacred ${categoryName}s of India. ${place.description}`,
    significance: place.description,
    about: `${place.name} is located in ${place.location}, ${place.state}. As a revered ${categoryName}, this temple holds immense spiritual significance for devotees across India and the world. The temple attracts thousands of pilgrims who seek blessings and spiritual enlightenment.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
        alt: `${place.name}`,
        caption: `The sacred ${place.name}`,
      },
    ],
    address: {
      street: "Temple Road",
      city: place.location,
      district: place.location,
      state: place.state,
      pincode: "000000",
      landmark: `${place.name} Temple`,
    },
    coordinates: {
      latitude: 20.5937,
      longitude: 78.9629,
    },
    timings: "6:00 AM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March",
    dressCode: "Traditional attire recommended",
    nearbyAttractions: [],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  };
};

// Generate complete temple details from basic place data
const generateTempleDetails = (
  place: Place,
  districtName: string,
  stateName: string
): TempleDetails => {
  const templeId = generateTempleId(place.name, districtName, stateName);

  // Check if we have detailed data for this temple
  if (templeDetailsData[templeId]) {
    return templeDetailsData[templeId];
  }

  // Generate default temple details
  return {
    id: templeId,
    name: place.name,
    history: place.history,
    significance: place.significance,
    about: `${place.name} is a sacred destination located in ${districtName}, ${stateName}. ${place.significance} This temple holds great religious and cultural importance for devotees who visit from across the country.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
        alt: `${place.name} temple`,
        caption: `The sacred ${place.name}`,
      },
    ],
    address: {
      street: "Temple Road",
      city: districtName,
      district: districtName,
      state: stateName,
      pincode: "000000",
      landmark: `Near ${districtName} center`,
    },
    coordinates: {
      latitude: 20.5937,
      longitude: 78.9629,
    },
    timings: "6:00 AM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March",
    dressCode: "Traditional attire recommended",
    nearbyAttractions: [],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  };
};

export const useTempleDetails = () => {
  const { stateName, districtName, templeName, deityName } = useParams<{
    stateName?: string;
    districtName?: string;
    templeName?: string;
    deityName?: string;
  }>();
  const location = useLocation();

  // Determine if this is a divine places route
  const isDivinePlacesRoute = location.pathname.startsWith("/divine-places");

  // For destinations route
  const selectedState = useMemo(() => {
    if (isDivinePlacesRoute || !stateName) return null;
    return findStateBySlug(stateName);
  }, [stateName, isDivinePlacesRoute]);

  const selectedDistrict = useMemo(() => {
    if (isDivinePlacesRoute || !selectedState || !districtName) return null;
    return findDistrictBySlug(selectedState, districtName);
  }, [selectedState, districtName, isDivinePlacesRoute]);

  const selectedPlace = useMemo(() => {
    if (isDivinePlacesRoute || !selectedDistrict || !templeName) return null;
    return findPlaceBySlug(selectedDistrict, templeName);
  }, [selectedDistrict, templeName, isDivinePlacesRoute]);

  // For divine places route
  const divinePlace = useMemo(() => {
    if (!isDivinePlacesRoute || !deityName || !templeName) return null;
    return findDivinePlace(deityName, templeName);
  }, [deityName, templeName, isDivinePlacesRoute]);

  // Generate temple details
  const templeDetails = useMemo(() => {
    // Divine places route
    if (isDivinePlacesRoute && divinePlace?.place) {
      return generateDivinePlaceTempleDetails(
        divinePlace.place,
        divinePlace.category
      );
    }

    // Destinations route
    if (!isDivinePlacesRoute && selectedPlace && selectedDistrict && selectedState) {
      return generateTempleDetails(
        selectedPlace,
        selectedDistrict.name,
        selectedState.name
      );
    }

    return null;
  }, [
    isDivinePlacesRoute,
    divinePlace,
    selectedPlace,
    selectedDistrict,
    selectedState,
  ]);

  return {
    templeDetails,
    selectedState,
    selectedDistrict,
    isDivinePlacesRoute,
    isLoading: false,
    error: !templeDetails && (templeName || deityName) ? "Temple not found" : null,
  };
};
