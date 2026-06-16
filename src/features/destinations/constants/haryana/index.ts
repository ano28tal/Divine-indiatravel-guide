import type { State } from "../../types/destinations";
import { ambala } from "./ambala";
import { bhiwani } from "./bhiwani";
import { charkhiDadri } from "./charkhi-dadri";
import { faridabad } from "./faridabad";
import { fatehabad } from "./fatehabad";
import { gurugram } from "./gurugram";
import { hansi } from "./hansi";
import { hisar } from "./hisar";
import { jhajjar } from "./jhajjar";
import { jind } from "./jind";
import { kaithal } from "./kaithal";
import { karnal } from "./karnal";
import { kurukshetra } from "./kurukshetra";
import { mahendragarh } from "./mahendragarh";
import { nuh } from "./nuh";
import { palwal } from "./palwal";
import { panchkula } from "./panchkula";
import { panipat } from "./panipat";
import { rewari } from "./rewari";
import { rohtak } from "./rohtak";
import { sirsa } from "./sirsa";
import { sonipat } from "./sonipat";
import { yamunanagar } from "./yamunanagar";

// Haryana — one file per district in this folder
export const haryana: State = {
  name: "Haryana",
  districts: [
    ambala,
    bhiwani,
    charkhiDadri,
    faridabad,
    fatehabad,
    gurugram,
    hansi,
    hisar,
    jhajjar,
    jind,
    kaithal,
    karnal,
    kurukshetra,
    mahendragarh,
    nuh,
    palwal,
    panchkula,
    panipat,
    rewari,
    rohtak,
    sirsa,
    sonipat,
    yamunanagar,
  ],
};
