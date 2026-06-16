import type { TempleDetails } from "../../types/templeDetails";

export {
  generateTempleId,
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "./helpers";

import { bhavanarayanaSwamyTemple } from "./andhra-pradesh/bapatla/bhavanarayana-swamy-temple";
import { jillellamudiAmmaTemple } from "./andhra-pradesh/bapatla/jillellamudi-amma-temple";
import { singarakondaTemple } from "./andhra-pradesh/bapatla/singarakonda-temple";
import { sivalayamTemple } from "./andhra-pradesh/bapatla/sivalayam-temple";
import { pothuluriVeerabrahmendraSwamyTemple } from "./andhra-pradesh/bapatla/pothuluri-veerabrahmendra-swamy-temple";
import { boyakondaGangammaTemple } from "./andhra-pradesh/annamayya/boyakonda-gangamma-temple";
import { tallapakaTemples } from "./andhra-pradesh/annamayya/tallapaka-temples";
import { sriPattabhiRamaSwamyTemple } from "./andhra-pradesh/annamayya/sri-pattabhi-rama-swamy-temple";
import { sompalliChennakesavaSwamyTemple } from "./andhra-pradesh/annamayya/sompalli-chennakesava-swamy-temple";
import { venkateswaraSwamyTemple } from "./andhra-pradesh/annamayya/venkateswara-swamy-temple";
import { veerabhadraSwamyTemple } from "./andhra-pradesh/ananthapuramu/veerabhadra-swamy-temple";
import { pennahobilamLakshmiNarasimhaSwamyTemple } from "./andhra-pradesh/ananthapuramu/pennahobilam-lakshmi-narasimha-swamy-temple";
import { buggaRamalingeswaraSwamyTemple } from "./andhra-pradesh/ananthapuramu/bugga-ramalingeswara-swamy-temple";
import { kadiriLakshmiNarasimhaSwamyTemple } from "./andhra-pradesh/ananthapuramu/kadiri-lakshmi-narasimha-swamy-temple";
import { iskconTemple } from "./andhra-pradesh/ananthapuramu/iskcon-temple";
import { hemavathiTempleComplex } from "./andhra-pradesh/ananthapuramu/hemavathi-temple-complex";
import { guguduKullaiSwamyDevasthanam } from "./andhra-pradesh/ananthapuramu/gugudu-kullai-swamy-devasthanam";
import { sriNookambikaAmmavariTemple } from "./andhra-pradesh/anakapalli/sri-nookambika-ammavari-temple";
import { panchadarlaTemple } from "./andhra-pradesh/anakapalli/panchadarla-temple";
import { gowriParameswarTemple } from "./andhra-pradesh/anakapalli/gowri-parameswar-temple";
import { sriVenkateswaraSwamyTemple } from "./andhra-pradesh/anakapalli/sri-venkateswara-swamy-temple";
import { sriMaridimambaTemple } from "./andhra-pradesh/anakapalli/sri-maridimamba-temple";
import { kasiVisweswaraTemple } from "./andhra-pradesh/anakapalli/kasi-visweswara-temple";
import { sriKanyakaParameswariTemple } from "./andhra-pradesh/anakapalli/sri-kanyaka-parameswari-temple";
import { bojjannakondaTemple } from "./andhra-pradesh/anakapalli/bojjannakonda-temple";
import { borraCavesShivaTemple } from "./andhra-pradesh/alluri-sitharama-raju/borra-caves-shiva-temple";
import { sriAlluriVenkatadriSwamyTemple } from "./andhra-pradesh/alluri-sitharama-raju/sri-alluri-venkatadri-swamy-temple";
import { localPaderuShrineTemple } from "./andhra-pradesh/alluri-sitharama-raju/local-paderu-shrine-temple";
import { tirumalaVenkateswaraTemple } from "./andhra-pradesh/tirupati/tirumala-venkateswara-temple";
import { kanipakamVinayakaTemple } from "./andhra-pradesh/chittoor/kanipakam-vinayaka-temple";
import { tirumalaVenkateswaraTemple as tirumalaVenkateswaraTempleChittoor } from "./andhra-pradesh/chittoor/tirumala-venkateswara-temple";
import { sriKalahastiTemple } from "./andhra-pradesh/chittoor/sri-kalahasti-temple";
import { gudimallamParasurameswaraSwamyTemple } from "./andhra-pradesh/chittoor/gudimallam-parasurameswara-swamy-temple";
import { boyakondaGangammaTemple as boyakondaGangammaTempleChittoor } from "./andhra-pradesh/chittoor/boyakonda-gangamma-temple";
import { mogileeswaraSwamyTemple } from "./andhra-pradesh/chittoor/mogileeswara-swamy-temple";
import { ardhagiriVeeranjaneyaSwamyTemple } from "./andhra-pradesh/chittoor/ardhagiri-veeranjaneya-swamy-temple";
import { kanakaDurgaTemple } from "./andhra-pradesh/ntr/kanaka-durga-temple";
import { mallikarjunaSwamyTemple } from "./andhra-pradesh/nandyal/mallikarjuna-swamy-temple";
import { kamakhyaTemple } from "./assam/kamrup/kamakhya-temple";
import { mahabodhiTemple } from "./bihar/gaya/mahabodhi-temple";

// All curated temple details, keyed by temple id (state-district-temple)
const all: TempleDetails[] = [
  bhavanarayanaSwamyTemple,
  jillellamudiAmmaTemple,
  singarakondaTemple,
  sivalayamTemple,
  pothuluriVeerabrahmendraSwamyTemple,
  boyakondaGangammaTemple,
  tallapakaTemples,
  sriPattabhiRamaSwamyTemple,
  sompalliChennakesavaSwamyTemple,
  venkateswaraSwamyTemple,
  veerabhadraSwamyTemple,
  pennahobilamLakshmiNarasimhaSwamyTemple,
  buggaRamalingeswaraSwamyTemple,
  kadiriLakshmiNarasimhaSwamyTemple,
  iskconTemple,
  hemavathiTempleComplex,
  guguduKullaiSwamyDevasthanam,
  sriNookambikaAmmavariTemple,
  panchadarlaTemple,
  gowriParameswarTemple,
  sriVenkateswaraSwamyTemple,
  sriMaridimambaTemple,
  kasiVisweswaraTemple,
  sriKanyakaParameswariTemple,
  bojjannakondaTemple,
  borraCavesShivaTemple,
  sriAlluriVenkatadriSwamyTemple,
  localPaderuShrineTemple,
  tirumalaVenkateswaraTemple,
  kanipakamVinayakaTemple,
  tirumalaVenkateswaraTempleChittoor,
  sriKalahastiTemple,
  gudimallamParasurameswaraSwamyTemple,
  boyakondaGangammaTempleChittoor,
  mogileeswaraSwamyTemple,
  ardhagiriVeeranjaneyaSwamyTemple,
  kanakaDurgaTemple,
  mallikarjunaSwamyTemple,
  kamakhyaTemple,
  mahabodhiTemple,
];

export const templeDetailsData: Record<string, TempleDetails> =
  Object.fromEntries(all.map((t) => [t.id, t]));
