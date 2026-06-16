import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import paderuShrine1 from "@/shared/assets/andhra-pradesh/alluri-sitharama-raju/local-paderu-shrine-temple/1.jpg";
import paderuShrine2 from "@/shared/assets/andhra-pradesh/alluri-sitharama-raju/local-paderu-shrine-temple/2.jpg";

export const localPaderuShrineTemple: TempleDetails = {
  id: "andhra-pradesh-alluri-sitharama-raju-local-paderu-shrine-temple",
  name: "Local Paderu Shrine Temple",
  history:
    "The shrines in Paderu do not have a single recorded founding date. Instead, they evolved organically over centuries as part of the traditions of indigenous tribal communities such as the Konda Dora and Bagata tribes. These temples were typically established by local villagers near sacred trees, hills, or water sources, serving as centers for the protection and prosperity of the community. Mythology here is passed through oral traditions rather than classical texts; common beliefs hold that the deity protects the village from disease and natural disasters, that the goddess resides in forests and must be worshipped during festivals, and that rituals ensure good harvests and rainfall. The timeline spans ancient tribal worship, medieval development of local shrine structures, limited documentation in the colonial period, and recognition as cultural and spiritual heritage sites in the modern era.",
  significance:
    "The Paderu shrine temples hold deep spiritual importance, especially for local tribal communities. Worship focuses on nature, fertility, and protection, with the deities seen as guardians of the village and a strong belief in divine intervention in daily life. Some shrines are believed to be self-manifested (Swayambhu), increasing their spiritual significance. The shrines are central to tribal identity and heritage, local festivals and fairs, and the preservation of ancient traditions — representing a living example of India's diverse spiritual landscape.",
  about:
    "The Local Paderu Shrine Temple refers to a group of traditional tribal and regional Hindu shrines located in and around the hill town of Paderu, in the Eastern Ghats of Andhra Pradesh. Unlike large, well-documented temples, these shrines are deeply rooted in local tribal traditions and folk Hinduism, making them culturally unique. The temples are generally dedicated to village deities (Grama Devatas) such as Ganga Amma, Poleramma, or Mutyalamma, forms of Shiva and Shakti, and nature-associated deities worshipped by tribal communities. They are important because they represent a blend of tribal beliefs and mainstream Hindu practices, with worship that is simple, deeply spiritual, and connected to nature. The shrines are known for strong community-based worship, sacred rituals tied to agriculture, rain, and protection, and a peaceful location amidst dense forests and hills.",
  images: [
    {
      url: paderuShrine1,
      alt: "Local Paderu shrine temple gopuram exterior",
      caption:
        "The colorful gopuram of a local Paderu shrine temple amidst the Eastern Ghats",
    },
    {
      url: paderuShrine2,
      alt: "Goddess idol inside a Paderu shrine",
      caption:
        "The presiding goddess idol decorated with flowers inside the shrine",
    },
  ],
  address: {
    street: "Paderu Region",
    city: "Paderu",
    district: "Alluri Sitharama Raju",
    state: "Andhra Pradesh",
    pincode: "531024",
    landmark: "Paderu town and surrounding villages",
  },
  coordinates: {
    latitude: 17.933,
    longitude: 82.616,
  },
  timings:
    "6:00 AM - 7:00 PM (timings may vary depending on the specific shrine)",
  entryFee: "Free entry (donations are voluntary)",
  bestTimeToVisit:
    "Early morning or evening for a peaceful experience; festival periods for cultural richness",
  dressCode:
    "Simple but respectful. Recommended: modest, comfortable clothing and traditional Indian attire. Avoid revealing or inappropriate clothing and loud or flashy outfits; respect local customs and tribal traditions.",
  nearbyAttractions: [
    "Paderu hill town",
    "Eastern Ghats forests",
    "Konda Dora & Bagata tribal villages",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
