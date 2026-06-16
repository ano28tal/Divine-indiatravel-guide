import type { State } from "../../types/destinations";
import { central } from "./central";
import { east } from "./east";
import { newDelhi } from "./new-delhi";
import { north } from "./north";
import { northEast } from "./north-east";
import { northWest } from "./north-west";
import { shahdara } from "./shahdara";
import { south } from "./south";
import { southEast } from "./south-east";
import { southWest } from "./south-west";
import { west } from "./west";

// Delhi — one file per district in this folder
export const delhi: State = {
  name: "Delhi",
  districts: [
    central,
    east,
    newDelhi,
    north,
    northEast,
    northWest,
    shahdara,
    south,
    southEast,
    southWest,
    west,
  ],
};
