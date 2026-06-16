import type { State } from "../../types/destinations";
import { bajali } from "./bajali";
import { baksa } from "./baksa";
import { barpeta } from "./barpeta";
import { biswanath } from "./biswanath";
import { bongaigaon } from "./bongaigaon";
import { cachar } from "./cachar";
import { charaideo } from "./charaideo";
import { chirang } from "./chirang";
import { darrang } from "./darrang";
import { dhemaji } from "./dhemaji";
import { dhubri } from "./dhubri";
import { dibrugarh } from "./dibrugarh";
import { dimaHasao } from "./dima-hasao";
import { goalpara } from "./goalpara";
import { golaghat } from "./golaghat";
import { hailakandi } from "./hailakandi";
import { hojai } from "./hojai";
import { jorhat } from "./jorhat";
import { kamrup } from "./kamrup";
import { kamrupMetro } from "./kamrup-metro";
import { karbiAnglong } from "./karbi-anglong";
import { kokrajhar } from "./kokrajhar";
import { lakhimpur } from "./lakhimpur";
import { majuli } from "./majuli";
import { marigaon } from "./marigaon";
import { nagaon } from "./nagaon";
import { nalbari } from "./nalbari";
import { sivasagar } from "./sivasagar";
import { sonitpur } from "./sonitpur";
import { southSalmaraMancachar } from "./south-salmara-mancachar";
import { sribhumi } from "./sribhumi";
import { tamulpur } from "./tamulpur";
import { tinsukia } from "./tinsukia";
import { udalguri } from "./udalguri";
import { westKarbiAnglong } from "./west-karbi-anglong";

// Assam — one file per district in this folder
export const assam: State = {
  name: "Assam",
  districts: [
    bajali,
    baksa,
    barpeta,
    biswanath,
    bongaigaon,
    cachar,
    charaideo,
    chirang,
    darrang,
    dhemaji,
    dhubri,
    dibrugarh,
    dimaHasao,
    goalpara,
    golaghat,
    hailakandi,
    hojai,
    jorhat,
    kamrup,
    kamrupMetro,
    karbiAnglong,
    kokrajhar,
    lakhimpur,
    majuli,
    marigaon,
    nagaon,
    nalbari,
    sivasagar,
    sonitpur,
    southSalmaraMancachar,
    sribhumi,
    tamulpur,
    tinsukia,
    udalguri,
    westKarbiAnglong,
  ],
};
