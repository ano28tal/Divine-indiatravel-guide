import type { State } from "../../types/destinations";
import { dadraAndNagarHaveli } from "./dadra-and-nagar-haveli";
import { daman } from "./daman";
import { diu } from "./diu";

// Dadra and Nagar Haveli and Daman and Diu — one file per district in this folder
export const dadraAndNagarHaveliAndDamanAndDiu: State = {
  name: "Dadra and Nagar Haveli and Daman and Diu",
  districts: [dadraAndNagarHaveli, daman, diu],
};
