import type { State } from "../../types/destinations";
import { almora } from "./almora";
import { bageshwar } from "./bageshwar";
import { chamoli } from "./chamoli";
import { champawat } from "./champawat";
import { dehradun } from "./dehradun";
import { haridwar } from "./haridwar";
import { nainital } from "./nainital";
import { pauriGarhwal } from "./pauri-garhwal";
import { pithoragarh } from "./pithoragarh";
import { rudraprayag } from "./rudraprayag";
import { tehriGarhwal } from "./tehri-garhwal";
import { udhamSinghNagar } from "./udham-singh-nagar";
import { uttarkashi } from "./uttarkashi";

// Uttarakhand — one file per district in this folder
export const uttarakhand: State = {
  name: "Uttarakhand",
  districts: [
    almora,
    bageshwar,
    chamoli,
    champawat,
    dehradun,
    haridwar,
    nainital,
    pauriGarhwal,
    pithoragarh,
    rudraprayag,
    tehriGarhwal,
    udhamSinghNagar,
    uttarkashi,
  ],
};
