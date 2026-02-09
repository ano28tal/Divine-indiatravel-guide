import type { State } from "../types/destinations";
import { statesAD } from "./statesA-D";
import { statesGK } from "./statesG-K";
import { statesMN } from "./statesM-N";
import { statesOR } from "./statesO-R";
import { statesST } from "./statesS-T";
import { statesUW } from "./statesU-W";
import { territoriesAD } from "./territoriesA-D";
import { territoriesJP } from "./territoriesJ-P";

// Export individual chunks for selective imports
export { statesAD } from "./statesA-D";
export { statesGK } from "./statesG-K";
export { statesMN } from "./statesM-N";
export { statesOR } from "./statesO-R";
export { statesST } from "./statesS-T";
export { statesUW } from "./statesU-W";
export { territoriesAD } from "./territoriesA-D";
export { territoriesJP } from "./territoriesJ-P";

// All Indian states (excluding union territories)
export const allStates: State[] = [
  ...statesAD,
  ...statesGK,
  ...statesMN,
  ...statesOR,
  ...statesST,
  ...statesUW,
];

// All union territories
export const unionTerritories: State[] = [...territoriesAD, ...territoriesJP];

// Combined data: States + Union Territories
export const indianStates: State[] = [...allStates, ...unionTerritories];
