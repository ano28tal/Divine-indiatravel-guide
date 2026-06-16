import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import nookambika1 from "@/shared/assets/andhra-pradesh/anakapalli/sri-nookambika-ammavari-temple/1.jpg";
import nookambika2 from "@/shared/assets/andhra-pradesh/anakapalli/sri-nookambika-ammavari-temple/2.jpg";

export const sriNookambikaAmmavariTemple: TempleDetails = {
  id: "andhra-pradesh-anakapalli-sri-nookambika-ammavari-temple",
  name: "Sri Nookambika Ammavari Temple",
  history:
    "The exact origin of Sri Nookambika Temple is not precisely documented, but it is believed to be several centuries old, deeply rooted in local traditions and folklore. The temple evolved as a Gramadevata shrine, later expanding into a well-structured temple complex. Unlike royal temples built by major dynasties, this temple grew primarily through community devotion and regional patronage; over time it received support from local rulers and devotees, leading to renovations and expansions. According to local legend, Goddess Nookambika appeared to protect the region from diseases, natural calamities, and evil forces, manifesting herself in Anakapalle to safeguard the people and ensure prosperity. Its historical evolution spans ancient origins as a local village deity shrine, gradual medieval expansion with regional support, continued worship and preservation through the colonial era, and development into a major pilgrimage center with improved infrastructure in the modern era.",
  significance:
    "Sri Nookambika Ammavari Temple is an important center of Shakti worship in Andhra Pradesh. The deity, Nookambika Ammavaru, is believed to be a manifestation of Goddess Parvati, symbolizing protection, strength, and prosperity, and is worshipped as the guardian deity (Gramadevata) and protector of villages and remover of obstacles. She is regarded as a 'wish-fulfilling deity' who responds quickly to sincere prayers. Devotees visit seeking family well-being, protection from negative energies, and fulfillment of wishes and prosperity. The temple is renowned for the grand annual Nookambika Jatara festival, which attracts thousands and preserves local traditions and devotional practices.",
  about:
    "Sri Nookambika Ammavari Temple is a prominent and deeply revered Hindu temple located in Anakapalle town of Andhra Pradesh. The temple is dedicated to Goddess Nookambika Devi, a powerful form of Shakti (Divine Mother) worshipped by locals as the guardian deity (Gramadevata) of the region. The deity holds immense importance among devotees, especially in coastal Andhra Pradesh, where she is considered the protector of villages and remover of obstacles. The temple is widely known for its strong local and regional devotion, the grand annual Nookambika Jatara festival, and being a major center for Shakti worship. The temple complex features a sanctum (garbhagriha), prayer halls and mandapam, and traditional decorations and lighting.",
  images: [
    {
      url: nookambika1,
      alt: "Sri Nookambika Ammavari Temple exterior",
      caption: "The golden temple structure of Sri Nookambika Ammavari Temple",
    },
    {
      url: nookambika2,
      alt: "Goddess Nookambika Ammavaru idol",
      caption: "The idol of Goddess Nookambika Ammavaru with sacred offerings",
    },
  ],
  address: {
    street: "Sri Nookambika Ammavari Temple",
    city: "Anakapalle",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    pincode: "531001",
    landmark: "Near Anakapalle Railway Station",
  },
  coordinates: {
    latitude: 17.6916,
    longitude: 83.0062,
  },
  timings:
    "5:00 AM - 9:00 PM (Morning Darshan: 5 AM – 12:30 PM, Evening Darshan: 4 PM – 9 PM)",
  entryFee:
    "General Darshan: Free (Special sevas/poojas: charges vary by ritual)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; during the Nookambika Jatara festival for a vibrant experience",
  dressCode:
    "Modest and respectful attire. Men: dhoti or simple formal clothing. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and revealing or casual western outfits.",
  nearbyAttractions: [
    "Anakapalle town",
    "Visakhapatnam",
    "Anakapalle Railway Station",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
