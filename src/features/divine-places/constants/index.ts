import type { Deity } from "../types/divinePlaces";
import { ganeshaDeity } from "./deityGanesha";
import { vishnuDeity } from "./deityVishnu";
import { shivaDeity, hanumanDeity } from "./deityShivaHanuman";
import { shaktiDeity } from "./deityShakti";

// Export individual deity data
export { ganeshaDeity } from "./deityGanesha";
export { vishnuDeity } from "./deityVishnu";
export { shivaDeity, hanumanDeity } from "./deityShivaHanuman";
export { shaktiDeity } from "./deityShakti";

// Export Jyotirlingas
export { jyotirlingas } from "./jyotirlingas";

// Export Shakti Peethas
export { shaktiPeethas } from "./shaktiPeethas";

// Export Shiva Temple categories
export {
  panchaBhutaSthalams,
  pancharamaKshetras,
  panchaSabhai,
  ashtaVeerattaTemples,
  notableShivaTemples,
} from "./shivaTemples";

// Combined deities array
export const deities: Deity[] = [
  ganeshaDeity,
  vishnuDeity,
  shivaDeity,
  hanumanDeity,
  shaktiDeity,
];

// Export page content
export { divinePlacesPageContent } from "./pageContent";
