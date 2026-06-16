import type { State } from "../../types/destinations";
import { chumoukedima } from "./chumoukedima";
import { dimapur } from "./dimapur";
import { kiphire } from "./kiphire";
import { kohima } from "./kohima";
import { longleng } from "./longleng";
import { meluri } from "./meluri";
import { mokokchung } from "./mokokchung";
import { mon } from "./mon";
import { niuland } from "./niuland";
import { noklak } from "./noklak";
import { peren } from "./peren";
import { phek } from "./phek";
import { shamator } from "./shamator";
import { tseminyu } from "./tseminyu";
import { tuensang } from "./tuensang";
import { wokha } from "./wokha";
import { zunheboto } from "./zunheboto";

// Nagaland — one file per district in this folder
export const nagaland: State = {
  name: "Nagaland",
  districts: [
    chumoukedima,
    dimapur,
    kiphire,
    kohima,
    longleng,
    meluri,
    mokokchung,
    mon,
    niuland,
    noklak,
    peren,
    phek,
    shamator,
    tseminyu,
    tuensang,
    wokha,
    zunheboto,
  ],
};
