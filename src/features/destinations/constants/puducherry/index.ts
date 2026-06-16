import type { State } from "../../types/destinations";
import { puducherryDistrict } from "./puducherry-district";
import { karaikal } from "./karaikal";

// Puducherry — one file per district in this folder
export const puducherry: State = {
  name: "Puducherry",
  districts: [puducherryDistrict, karaikal],
};
