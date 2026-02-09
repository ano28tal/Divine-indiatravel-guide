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

// Re-export data from constants for backward compatibility
export {
  indianStates,
  allStates,
  unionTerritories,
  statesAD,
  statesGK,
  statesMN,
  statesOR,
  statesST,
  statesUW,
  territoriesAD,
  territoriesJP,
} from "../constants";
