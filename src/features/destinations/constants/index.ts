import type { State } from "../types/destinations";
import { statesAD } from "./statesA-D";
import { statesGK } from "./statesG-K";
import { statesMR } from "./statesM-R";
import { statesSW } from "./statesS-W";
import { unionTerritories } from "./territories";

// Export individual chunks for selective imports
export { statesAD } from "./statesA-D";
export { statesGK } from "./statesG-K";
export { statesMR } from "./statesM-R";
export { statesSW } from "./statesS-W";
export { unionTerritories } from "./territories";

// All Indian states (excluding union territories)
export const allStates: State[] = [
  ...statesAD,
  ...statesGK,
  ...statesMR,
  ...statesSW,
];

// Combined data: States + Union Territories
export const indianStates: State[] = [...allStates, ...unionTerritories];
