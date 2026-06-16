import type { State } from "../../types/destinations";
import { aizawl } from "./aizawl";
import { champhai } from "./champhai";
import { hnahthial } from "./hnahthial";
import { khawzawl } from "./khawzawl";
import { kolasib } from "./kolasib";
import { lawngtlai } from "./lawngtlai";
import { lunglei } from "./lunglei";
import { mamit } from "./mamit";
import { saitual } from "./saitual";
import { serchhip } from "./serchhip";
import { siaha } from "./siaha";

// Mizoram — one file per district in this folder
export const mizoram: State = {
  name: "Mizoram",
  districts: [
    aizawl,
    champhai,
    hnahthial,
    khawzawl,
    kolasib,
    lawngtlai,
    lunglei,
    mamit,
    saitual,
    serchhip,
    siaha,
  ],
};
