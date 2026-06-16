import type { State } from "../../types/destinations";
import { anantnag } from "./anantnag";
import { bandipora } from "./bandipora";
import { baramulla } from "./baramulla";
import { budgam } from "./budgam";
import { doda } from "./doda";
import { ganderbal } from "./ganderbal";
import { jammu } from "./jammu";
import { kathua } from "./kathua";
import { kishtwar } from "./kishtwar";
import { kulgam } from "./kulgam";
import { kupwara } from "./kupwara";
import { poonch } from "./poonch";
import { pulwama } from "./pulwama";
import { rajouri } from "./rajouri";
import { ramban } from "./ramban";
import { reasi } from "./reasi";
import { samba } from "./samba";
import { shopian } from "./shopian";
import { srinagar } from "./srinagar";
import { udhampur } from "./udhampur";

// Jammu and Kashmir — one file per district in this folder
export const jammuAndKashmir: State = {
  name: "Jammu and Kashmir",
  districts: [
    anantnag,
    bandipora,
    baramulla,
    budgam,
    doda,
    ganderbal,
    jammu,
    kathua,
    kishtwar,
    kulgam,
    kupwara,
    poonch,
    pulwama,
    rajouri,
    ramban,
    reasi,
    samba,
    shopian,
    srinagar,
    udhampur,
  ],
};
