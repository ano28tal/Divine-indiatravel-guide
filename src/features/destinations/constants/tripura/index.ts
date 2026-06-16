import type { State } from "../../types/destinations";
import { dhalai } from "./dhalai";
import { gomati } from "./gomati";
import { khowai } from "./khowai";
import { northTripura } from "./north-tripura";
import { sepahijala } from "./sepahijala";
import { southTripura } from "./south-tripura";
import { unakoti } from "./unakoti";
import { westTripura } from "./west-tripura";

// Tripura — one file per district in this folder
export const tripura: State = {
  name: "Tripura",
  districts: [
    dhalai,
    gomati,
    khowai,
    northTripura,
    sepahijala,
    southTripura,
    unakoti,
    westTripura,
  ],
};
