import type { State } from "../../types/destinations";
import { alipurduar } from "./alipurduar";
import { bankura } from "./bankura";
import { birbhum } from "./birbhum";
import { coochBehar } from "./cooch-behar";
import { dakshinDinajpur } from "./dakshin-dinajpur";
import { darjeeling } from "./darjeeling";
import { hooghly } from "./hooghly";
import { howrah } from "./howrah";
import { jalpaiguri } from "./jalpaiguri";
import { jhargram } from "./jhargram";
import { kalimpong } from "./kalimpong";
import { kolkata } from "./kolkata";
import { malda } from "./malda";
import { murshidabad } from "./murshidabad";
import { nadia } from "./nadia";
import { north24Parganas } from "./north-24-parganas";
import { paschimBardhaman } from "./paschim-bardhaman";
import { paschimMedinipur } from "./paschim-medinipur";
import { purbaBardhaman } from "./purba-bardhaman";
import { purbaMedinipur } from "./purba-medinipur";
import { purulia } from "./purulia";
import { south24Parganas } from "./south-24-parganas";
import { uttarDinajpur } from "./uttar-dinajpur";

// West Bengal — one file per district in this folder
export const westBengal: State = {
  name: "West Bengal",
  districts: [
    alipurduar,
    bankura,
    birbhum,
    coochBehar,
    dakshinDinajpur,
    darjeeling,
    hooghly,
    howrah,
    jalpaiguri,
    jhargram,
    kalimpong,
    kolkata,
    malda,
    murshidabad,
    nadia,
    north24Parganas,
    paschimBardhaman,
    paschimMedinipur,
    purbaBardhaman,
    purbaMedinipur,
    purulia,
    south24Parganas,
    uttarDinajpur,
  ],
};
