export interface Place {
  name: string;
  history: string;
  significance: string;
}

export interface District {
  name: string;
  places: Place[];
}

export interface State {
  name: string;
  districts: District[];
}

// Re-export aggregated data from constants
export { indianStates, allStates, unionTerritories } from "../constants";
