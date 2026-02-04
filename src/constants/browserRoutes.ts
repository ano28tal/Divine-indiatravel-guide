/**
 * Centralized route constants for the application
 * This ensures type-safe routing and easy maintenance
 */
export const browserRoutes = {
  // Public routes
  home: "/",
  destinations: "/destinations",
  destinationState: "/destinations/:stateName",
  destinationDistrict: "/destinations/:stateName/:districtName",
  templeDetails: "/destinations/:stateName/:districtName/:templeName",
  divinePlaces: "/divine-places",
  divinePlaceDeity: "/divine-places/:deityName",
  divinePlaceTemple: "/divine-places/:deityName/:templeName",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",

  // Catch-all
  notFound: "*",
} as const;

// Type for route keys
export type BrowserRouteKey = keyof typeof browserRoutes;

// Type for route values
export type BrowserRouteValue = (typeof browserRoutes)[BrowserRouteKey];

// Helper functions to generate dynamic routes
export const getStateRoute = (stateName: string): string =>
  `/destinations/${encodeURIComponent(stateName.toLowerCase().replace(/\s+/g, "-"))}`;

export const getDistrictRoute = (stateName: string, districtName: string): string =>
  `/destinations/${encodeURIComponent(stateName.toLowerCase().replace(/\s+/g, "-"))}/${encodeURIComponent(districtName.toLowerCase().replace(/\s+/g, "-"))}`;

export const getTempleRoute = (
  stateName: string,
  districtName: string,
  templeName: string
): string =>
  `/destinations/${encodeURIComponent(stateName.toLowerCase().replace(/\s+/g, "-"))}/${encodeURIComponent(districtName.toLowerCase().replace(/\s+/g, "-"))}/${encodeURIComponent(templeName.toLowerCase().replace(/\s+/g, "-"))}`;

export type DivinePlaceCategory =
  | "jyotirlinga"
  | "shaktipeetha"
  | "pancha-bhuta"
  | "pancharama"
  | "pancha-sabhai"
  | "ashta-veeratta"
  | "notable-shiva"
  | "deity-temple";

export const getDeityRoute = (deityName: string): string =>
  `/divine-places/${encodeURIComponent(deityName.toLowerCase().replace(/\s+/g, "-"))}`;

export const getDivinePlaceTempleRoute = (
  deityOrCategory: string,
  templeName: string
): string =>
  `/divine-places/${encodeURIComponent(deityOrCategory.toLowerCase().replace(/\s+/g, "-"))}/${encodeURIComponent(templeName.toLowerCase().replace(/\s+/g, "-"))}`;
