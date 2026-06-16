import type { State } from "../types/destinations";
import { andhraPradesh } from "./andhra-pradesh";
import { arunachalPradesh } from "./arunachal-pradesh";
import { assam } from "./assam";
import { bihar } from "./bihar";
import { chhattisgarh } from "./chhattisgarh";
import { goa } from "./goa";
import { gujarat } from "./gujarat";
import { haryana } from "./haryana";
import { himachalPradesh } from "./himachal-pradesh";
import { jharkhand } from "./jharkhand";
import { karnataka } from "./karnataka";
import { kerala } from "./kerala";
import { madhyaPradesh } from "./madhya-pradesh";
import { maharashtra } from "./maharashtra";
import { manipur } from "./manipur";
import { meghalaya } from "./meghalaya";
import { mizoram } from "./mizoram";
import { nagaland } from "./nagaland";
import { odisha } from "./odisha";
import { punjab } from "./punjab";
import { rajasthan } from "./rajasthan";
import { sikkim } from "./sikkim";
import { tamilNadu } from "./tamil-nadu";
import { telangana } from "./telangana";
import { tripura } from "./tripura";
import { uttarPradesh } from "./uttar-pradesh";
import { uttarakhand } from "./uttarakhand";
import { westBengal } from "./west-bengal";
import { andamanAndNicobarIslands } from "./andaman-and-nicobar-islands";
import { chandigarh } from "./chandigarh";
import { dadraAndNagarHaveliAndDamanAndDiu } from "./dadra-and-nagar-haveli-and-daman-and-diu";
import { delhi } from "./delhi";
import { jammuAndKashmir } from "./jammu-and-kashmir";
import { ladakh } from "./ladakh";
import { lakshadweep } from "./lakshadweep";
import { puducherry } from "./puducherry";

// Re-export each state/territory for selective imports
export * from "./andhra-pradesh";
export * from "./arunachal-pradesh";
export * from "./assam";
export * from "./bihar";
export * from "./chhattisgarh";
export * from "./goa";
export * from "./gujarat";
export * from "./haryana";
export * from "./himachal-pradesh";
export * from "./jharkhand";
export * from "./karnataka";
export * from "./kerala";
export * from "./madhya-pradesh";
export * from "./maharashtra";
export * from "./manipur";
export * from "./meghalaya";
export * from "./mizoram";
export * from "./nagaland";
export * from "./odisha";
export * from "./punjab";
export * from "./rajasthan";
export * from "./sikkim";
export * from "./tamil-nadu";
export * from "./telangana";
export * from "./tripura";
export * from "./uttar-pradesh";
export * from "./uttarakhand";
export * from "./west-bengal";
export * from "./andaman-and-nicobar-islands";
export * from "./chandigarh";
export * from "./dadra-and-nagar-haveli-and-daman-and-diu";
export * from "./delhi";
export * from "./jammu-and-kashmir";
export * from "./ladakh";
export * from "./lakshadweep";
export * from "./puducherry";

// All Indian states (excluding union territories)
export const allStates: State[] = [
  andhraPradesh,
  arunachalPradesh,
  assam,
  bihar,
  chhattisgarh,
  goa,
  gujarat,
  haryana,
  himachalPradesh,
  jharkhand,
  karnataka,
  kerala,
  madhyaPradesh,
  maharashtra,
  manipur,
  meghalaya,
  mizoram,
  nagaland,
  odisha,
  punjab,
  rajasthan,
  sikkim,
  tamilNadu,
  telangana,
  tripura,
  uttarPradesh,
  uttarakhand,
  westBengal,
];

// All union territories
export const unionTerritories: State[] = [
  andamanAndNicobarIslands,
  chandigarh,
  dadraAndNagarHaveliAndDamanAndDiu,
  delhi,
  jammuAndKashmir,
  ladakh,
  lakshadweep,
  puducherry,
];

// Combined data: States + Union Territories
export const indianStates: State[] = [...allStates, ...unionTerritories];
