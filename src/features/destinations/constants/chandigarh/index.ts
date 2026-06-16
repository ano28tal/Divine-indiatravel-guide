import type { State } from "../../types/destinations";
import { chandigarhDistrict } from "./chandigarh-district";

// Chandigarh — one file per district in this folder
export const chandigarh: State = {
  name: "Chandigarh",
  districts: [chandigarhDistrict],
};
