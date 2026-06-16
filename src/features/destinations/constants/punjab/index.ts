import type { State } from "../../types/destinations";
import { amritsar } from "./amritsar";
import { barnala } from "./barnala";
import { bathinda } from "./bathinda";
import { faridkot } from "./faridkot";
import { fatehgarhSahib } from "./fatehgarh-sahib";
import { fazilka } from "./fazilka";
import { ferozepur } from "./ferozepur";
import { gurdaspur } from "./gurdaspur";
import { hoshiarpur } from "./hoshiarpur";
import { jalandhar } from "./jalandhar";
import { kapurthala } from "./kapurthala";
import { ludhiana } from "./ludhiana";
import { malerkotla } from "./malerkotla";
import { mansa } from "./mansa";
import { moga } from "./moga";
import { pathankot } from "./pathankot";
import { patiala } from "./patiala";
import { rupnagar } from "./rupnagar";
import { sASNagar } from "./s-a-s-nagar";
import { sangrur } from "./sangrur";
import { shahidBhagatSinghNagar } from "./shahid-bhagat-singh-nagar";
import { sriMuktsarSahib } from "./sri-muktsar-sahib";
import { tarnTaran } from "./tarn-taran";

// Punjab — one file per district in this folder
export const punjab: State = {
  name: "Punjab",
  districts: [
    amritsar,
    barnala,
    bathinda,
    faridkot,
    fatehgarhSahib,
    fazilka,
    ferozepur,
    gurdaspur,
    hoshiarpur,
    jalandhar,
    kapurthala,
    ludhiana,
    malerkotla,
    mansa,
    moga,
    pathankot,
    patiala,
    rupnagar,
    sASNagar,
    sangrur,
    shahidBhagatSinghNagar,
    sriMuktsarSahib,
    tarnTaran,
  ],
};
