import type { State } from "../../types/destinations";
import { eastGaroHills } from "./east-garo-hills";
import { eastJaintiaHills } from "./east-jaintia-hills";
import { eastKhasiHills } from "./east-khasi-hills";
import { easternWestKhasiHills } from "./eastern-west-khasi-hills";
import { northGaroHills } from "./north-garo-hills";
import { riBhoi } from "./ri-bhoi";
import { southGaroHills } from "./south-garo-hills";
import { southWestGaroHills } from "./south-west-garo-hills";
import { southWestKhasiHills } from "./south-west-khasi-hills";
import { westGaroHills } from "./west-garo-hills";
import { westJaintiaHills } from "./west-jaintia-hills";
import { westKhasiHills } from "./west-khasi-hills";

// Meghalaya — one file per district in this folder
export const meghalaya: State = {
  name: "Meghalaya",
  districts: [
    eastGaroHills,
    eastJaintiaHills,
    eastKhasiHills,
    easternWestKhasiHills,
    northGaroHills,
    riBhoi,
    southGaroHills,
    southWestGaroHills,
    southWestKhasiHills,
    westGaroHills,
    westJaintiaHills,
    westKhasiHills,
  ],
};
