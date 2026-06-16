import type { State } from "../../types/destinations";
import { bishnupur } from "./bishnupur";
import { chandel } from "./chandel";
import { churachandpur } from "./churachandpur";
import { imphalEast } from "./imphal-east";
import { imphalWest } from "./imphal-west";
import { jiribam } from "./jiribam";
import { kakching } from "./kakching";
import { kamjong } from "./kamjong";
import { kangpokpi } from "./kangpokpi";
import { noney } from "./noney";
import { pherzawl } from "./pherzawl";
import { senapati } from "./senapati";
import { tamenglong } from "./tamenglong";
import { tengnoupal } from "./tengnoupal";
import { thoubal } from "./thoubal";
import { ukhrul } from "./ukhrul";

// Manipur — one file per district in this folder
export const manipur: State = {
  name: "Manipur",
  districts: [
    bishnupur,
    chandel,
    churachandpur,
    imphalEast,
    imphalWest,
    jiribam,
    kakching,
    kamjong,
    kangpokpi,
    noney,
    pherzawl,
    senapati,
    tamenglong,
    tengnoupal,
    thoubal,
    ukhrul,
  ],
};
