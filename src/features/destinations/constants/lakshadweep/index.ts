import type { State } from "../../types/destinations";
import { lakshadweepDistrict } from "./lakshadweep-district";

// Lakshadweep — one file per district in this folder
export const lakshadweep: State = {
  name: "Lakshadweep",
  districts: [lakshadweepDistrict],
};
