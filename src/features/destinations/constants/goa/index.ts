import type { State } from "../../types/destinations";
import { kushavati } from "./kushavati";
import { northGoa } from "./north-goa";
import { southGoa } from "./south-goa";

// Goa — one file per district in this folder
export const goa: State = {
  name: "Goa",
  districts: [kushavati, northGoa, southGoa],
};
