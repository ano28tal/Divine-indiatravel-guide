import type { State } from "../../types/destinations";
import { anjaw } from "./anjaw";
import { bichom } from "./bichom";
import { changlang } from "./changlang";
import { dibangValley } from "./dibang-valley";
import { eastKameng } from "./east-kameng";
import { eastSiang } from "./east-siang";
import { kamle } from "./kamle";
import { keyiPanyor } from "./keyi-panyor";
import { kraDaadi } from "./kra-daadi";
import { kurungKumey } from "./kurung-kumey";
import { leparada } from "./leparada";
import { lohit } from "./lohit";
import { longding } from "./longding";
import { lowerDibangValley } from "./lower-dibang-valley";
import { lowerSiang } from "./lower-siang";
import { lowerSubansiri } from "./lower-subansiri";
import { namsai } from "./namsai";
import { pakkeKessang } from "./pakke-kessang";
import { papumPare } from "./papum-pare";
import { shiYomi } from "./shi-yomi";
import { siang } from "./siang";
import { tawang } from "./tawang";
import { tirap } from "./tirap";
import { upperSiang } from "./upper-siang";
import { upperSubansiri } from "./upper-subansiri";
import { westKameng } from "./west-kameng";
import { westSiang } from "./west-siang";

// Arunachal Pradesh — one file per district in this folder
export const arunachalPradesh: State = {
  name: "Arunachal Pradesh",
  districts: [
    anjaw,
    bichom,
    changlang,
    dibangValley,
    eastKameng,
    eastSiang,
    kamle,
    keyiPanyor,
    kraDaadi,
    kurungKumey,
    leparada,
    lohit,
    longding,
    lowerDibangValley,
    lowerSiang,
    lowerSubansiri,
    namsai,
    pakkeKessang,
    papumPare,
    shiYomi,
    siang,
    tawang,
    tirap,
    upperSiang,
    upperSubansiri,
    westKameng,
    westSiang,
  ],
};
