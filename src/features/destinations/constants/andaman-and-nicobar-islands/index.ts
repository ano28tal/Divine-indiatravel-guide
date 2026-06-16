import type { State } from "../../types/destinations";
import { nicobars } from "./nicobars";
import { northAndMiddleAndaman } from "./north-and-middle-andaman";
import { southAndamans } from "./south-andamans";

// Andaman and Nicobar Islands — one file per district in this folder
export const andamanAndNicobarIslands: State = {
  name: "Andaman and Nicobar Islands",
  districts: [nicobars, northAndMiddleAndaman, southAndamans],
};
