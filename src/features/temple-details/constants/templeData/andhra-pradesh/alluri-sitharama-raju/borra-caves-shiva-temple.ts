import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import borraCavesTemple1 from "@/shared/assets/andhra-pradesh/alluri-sitharama-raju/borra-caves-shiva-temple/1.jpg";
import borraCavesTemple2 from "@/shared/assets/andhra-pradesh/alluri-sitharama-raju/borra-caves-shiva-temple/2.jpg";

export const borraCavesShivaTemple: TempleDetails = {
  id: "andhra-pradesh-alluri-sitharama-raju-borra-caves-shiva-temple",
  name: "Borra Caves Shiva Temple",
  history:
    "The Borra Caves were documented in 1807 by British geologist William King George, though local tribal communities had known about the caves and worshipped the Shiva Lingam long before its official discovery. The temple was never constructed in the traditional sense — it evolved naturally as devotees began worshipping the stalagmite Shiva Lingam inside the cave. A popular legend says a cowherd lost his cow, which fell into a hole in the ground; when villagers searched, they discovered the cave and found a Shiva Lingam glowing inside, believed to be the divine presence of Lord Shiva. The site progressed from ancient tribal worship to documented discovery in 1807, development by Andhra Pradesh Tourism in the modern era, and is presently maintained as both a tourist attraction and spiritual site.",
  significance:
    "The Borra Caves Shiva Temple holds a unique place in spirituality because it represents nature itself as divine. The naturally formed Shiva Lingam is believed to be self-created (Swayambhu) by divine forces, with devotees offering prayers for protection, health, and peace of mind. Rock formations within the cave are believed to represent Shiva and Parvati, Kamadhenu (the divine cow), and Rishi figures. Local tribal communities continue their traditional worship practices, making it an important center of eco-spiritual tourism that blends folk beliefs with mainstream Hindu worship.",
  about:
    "The Borra Caves Shiva Temple, located inside the famous Borra Caves, is a unique spiritual site set within one of India's largest and deepest natural limestone caves. Nestled in the scenic Ananthagiri Hills of the Eastern Ghats, this temple combines natural wonder with divine significance. The main deity is Lord Shiva, represented in the form of a naturally formed Shiva Lingam (stalagmite formation). What makes the temple extraordinary is that the Lingam is not man-made but formed naturally over thousands of years due to mineral deposits, making it deeply revered as a self-manifested (Swayambhu) form of Lord Shiva. Its location inside a magnificent cave structure, the stunning limestone formations (stalactites and stalagmites), colorful lighting, and deep cavern views attract both devotees and tourists, making it a rare combination of pilgrimage and adventure destination.",
  images: [
    {
      url: borraCavesTemple1,
      alt: "Borra Caves interior with colorful lighting",
      caption:
        "The magnificent limestone cavern of Borra Caves illuminated with colorful lighting",
    },
    {
      url: borraCavesTemple2,
      alt: "Natural Shiva Lingam inside Borra Caves",
      caption:
        "The naturally formed (Swayambhu) Shiva Lingam worshipped inside the cave",
    },
  ],
  address: {
    street: "Borra Caves Road, Ananthagiri Hills, Araku Valley Mandal",
    city: "Araku Valley",
    district: "Alluri Sitharama Raju",
    state: "Andhra Pradesh",
    pincode: "531149",
    landmark: "Near Borra Guhalu Railway Station",
  },
  coordinates: {
    latitude: 18.2798,
    longitude: 83.0416,
  },
  timings: "10:00 AM - 5:00 PM (cave visiting hours)",
  entryFee:
    "Cave Entry Fee: ₹60–₹100 (approx.). Camera/Photography: Extra charges may apply",
  bestTimeToVisit:
    "October to March (pleasant weather); morning hours (10 AM – 1 PM) for less crowd",
  dressCode:
    "No strict dress code. Recommended: comfortable, modest clothing and shoes suitable for walking on uneven cave surfaces. Avoid slippery footwear and very short clothing.",
  nearbyAttractions: [
    "Araku Valley",
    "Ananthagiri Hills",
    "Borra Guhalu Railway Station",
    "Eastern Ghats viewpoints",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
