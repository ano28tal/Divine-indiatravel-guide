import type { State } from "../../types/destinations";
import { lehLadakh } from "./leh-ladakh";
import { kargil } from "./kargil";

// Ladakh — one file per district in this folder
export const ladakh: State = {
  name: "Ladakh",
  districts: [lehLadakh, kargil],
};
