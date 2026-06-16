import type { State } from "../../types/destinations";
import { bokaro } from "./bokaro";
import { chatra } from "./chatra";
import { deoghar } from "./deoghar";
import { dhanbad } from "./dhanbad";
import { dumka } from "./dumka";
import { eastSinghbum } from "./east-singhbum";
import { garhwa } from "./garhwa";
import { giridih } from "./giridih";
import { godda } from "./godda";
import { gumla } from "./gumla";
import { hazaribagh } from "./hazaribagh";
import { jamtara } from "./jamtara";
import { khunti } from "./khunti";
import { koderma } from "./koderma";
import { latehar } from "./latehar";
import { lohardaga } from "./lohardaga";
import { pakur } from "./pakur";
import { palamu } from "./palamu";
import { ramgarh } from "./ramgarh";
import { ranchi } from "./ranchi";
import { sahebganj } from "./sahebganj";
import { saraikelaKharsawan } from "./saraikela-kharsawan";
import { simdega } from "./simdega";
import { westSinghbhum } from "./west-singhbhum";

// Jharkhand — one file per district in this folder
export const jharkhand: State = {
  name: "Jharkhand",
  districts: [
    bokaro,
    chatra,
    deoghar,
    dhanbad,
    dumka,
    eastSinghbum,
    garhwa,
    giridih,
    godda,
    gumla,
    hazaribagh,
    jamtara,
    khunti,
    koderma,
    latehar,
    lohardaga,
    pakur,
    palamu,
    ramgarh,
    ranchi,
    sahebganj,
    saraikelaKharsawan,
    simdega,
    westSinghbhum,
  ],
};
