// Divine Names and Sacred Places Types

export interface SacredPlace {
  name: string;
  location: string;
  state: string;
  description: string;
}

export interface DivineName {
  name: string;
  meaning?: string;
}

export interface Deity {
  id: string;
  name: string;
  icon: string;
  color: string;
  names: DivineName[];
  sacredPlaces: SacredPlace[];
}

export interface JyotirlingaPlace {
  name: string;
  location: string;
  state: string;
  description: string;
}

export interface ShaktiPeethaPlace {
  name: string;
  location: string;
  state: string;
  description: string;
}

export interface ShivaTemplePlace {
  name: string;
  location: string;
  state: string;
  description: string;
  element?: string;
  sabha?: string;
  deity?: string;
  consort?: string;
  commemorates?: string;
}

export interface SearchResult {
  type: "deity" | "jyotirlinga" | "shaktipeetha" | "place";
  deity?: Deity;
  place?: SacredPlace | JyotirlingaPlace | ShaktiPeethaPlace;
  matchedName?: string;
}

// Page types
export type TabType =
  | "deities"
  | "jyotirlingas"
  | "shivatemples"
  | "shaktipeethas";
export type ShivaSubTab =
  | "pancha-bhuta"
  | "pancharama"
  | "pancha-sabhai"
  | "ashta-veeratta"
  | "notable";

export interface TabConfig {
  id: TabType;
  label: string;
  icon: string;
  count: number;
}

export interface ShivaSubTabConfig {
  id: ShivaSubTab;
  label: string;
  count: number;
}

export interface UseDivinePlacesReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  shivaSubTab: ShivaSubTab;
  setShivaSubTab: (tab: ShivaSubTab) => void;
  expandedDeity: string | null;
  toggleDeityExpand: (deityId: string) => void;
  selectedDeity: Deity | null;
  handleDeitySelect: (deity: Deity) => void;
  handleBackToDeities: () => void;
  filteredDeities: Deity[];
  filteredJyotirlingas: JyotirlingaPlace[];
  filteredShaktiPeethas: ShaktiPeethaPlace[];
  filteredPanchaBhuta: ShivaTemplePlace[];
  filteredPancharama: ShivaTemplePlace[];
  filteredPanchaSabhai: ShivaTemplePlace[];
  filteredAshtaVeeratta: ShivaTemplePlace[];
  filteredNotableTemples: ShivaTemplePlace[];
  searchResults: SearchResult[];
  tabs: TabConfig[];
  shivaSubTabs: ShivaSubTabConfig[];
}

// Import data from constants for internal use
import {
  deities,
  ganeshaDeity,
  vishnuDeity,
  shivaDeity,
  hanumanDeity,
  shaktiDeity,
  jyotirlingas,
  shaktiPeethas,
  panchaBhutaSthalams,
  pancharamaKshetras,
  panchaSabhai,
  ashtaVeerattaTemples,
  notableShivaTemples,
} from "../constants";

// Re-export data from constants for backward compatibility
export {
  deities,
  ganeshaDeity,
  vishnuDeity,
  shivaDeity,
  hanumanDeity,
  shaktiDeity,
  jyotirlingas,
  shaktiPeethas,
  panchaBhutaSthalams,
  pancharamaKshetras,
  panchaSabhai,
  ashtaVeerattaTemples,
  notableShivaTemples,
};

// Helper function to get all searchable names
export const getAllSearchableNames = (): string[] => {
  const names: string[] = [];

  deities.forEach((deity: Deity) => {
    names.push(deity.name);
    deity.names.forEach((n: DivineName) => names.push(n.name));
  });

  return names;
};

// Helper function to search across all data
export const searchDivinePlaces = (query: string): SearchResult[] => {
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();

  // Search in deities and their names
  deities.forEach((deity: Deity) => {
    const deityNameMatch = deity.name.toLowerCase().includes(lowerQuery);
    const alternateNameMatch = deity.names.find((n: DivineName) =>
      n.name.toLowerCase().includes(lowerQuery)
    );

    if (deityNameMatch || alternateNameMatch) {
      results.push({
        type: "deity",
        deity,
        matchedName: alternateNameMatch?.name || deity.name,
      });
    }
  });

  // Search in Jyotirlingas
  jyotirlingas.forEach((place: JyotirlingaPlace) => {
    if (
      place.name.toLowerCase().includes(lowerQuery) ||
      place.location.toLowerCase().includes(lowerQuery) ||
      place.state.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        type: "jyotirlinga",
        place,
      });
    }
  });

  // Search in Shakti Peethas
  shaktiPeethas.forEach((place: ShaktiPeethaPlace) => {
    if (
      place.name.toLowerCase().includes(lowerQuery) ||
      place.location.toLowerCase().includes(lowerQuery) ||
      place.state.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        type: "shaktipeetha",
        place,
      });
    }
  });

  return results;
};
