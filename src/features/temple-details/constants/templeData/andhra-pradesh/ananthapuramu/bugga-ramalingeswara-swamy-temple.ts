import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import buggaRamalingeswara1 from "@/shared/assets/andhra-pradesh/ananthapuramu/bugga-ramalingeswara-swamy-temple/1.jpg";
import buggaRamalingeswara2 from "@/shared/assets/andhra-pradesh/ananthapuramu/bugga-ramalingeswara-swamy-temple/2.jpg";

export const buggaRamalingeswaraSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-ananthapuramu-bugga-ramalingeswara-swamy-temple",
  name: "Bugga Ramalingeswara Swamy Temple",
  history:
    "The temple dates back to the 15th–16th century and was built during the reign of the powerful Vijayanagara Empire. It is believed to have been constructed by local governors or chieftains under the Vijayanagara rulers, in Vijayanagara architectural style similar to temples in Hampi, designed with highly detailed carvings depicting gods and goddesses, mythological stories, and floral and geometric patterns. According to local belief, the temple is associated with Lord Rama, who is said to have installed the Shiva Lingam during his exile (Vanavas) — the name 'Ramalingeswara' reflects this connection. Its timeline spans temple construction beginning under Vijayanagara rule in the 15th century, expansion and sculptural enhancements in the 16th century, and minor restorations with continued worship in later years. It stands today as a protected heritage structure and a symbol of South Indian temple artistry.",
  significance:
    "The temple holds deep spiritual importance among devotees of Lord Shiva. The natural water spring beneath the Lingam is believed to be divinely originated, and worship here is said to bring peace and prosperity, remove obstacles, and fulfill wishes. Rituals and traditions include Abhishekam (ritual bathing of the deity), Rudrabhishekam and special Shiva poojas, and Maha Shivaratri celebrations that attract large crowds. The temple is not only a religious site but also a cultural landmark representing Vijayanagara art and architecture, regional devotion to Lord Shiva, and traditional temple rituals of Andhra Pradesh.",
  about:
    "The Bugga Ramalingeswara Swamy Temple is a magnificent and historically rich Hindu temple dedicated to Lord Shiva, located in the town of Tadipatri. Known for its stunning architecture and spiritual ambiance, the temple is one of the finest examples of Vijayanagara-style craftsmanship in South India. The presiding deity, Lord Ramalingeswara (a form of Lord Shiva), is worshipped here in the form of a Shiva Lingam. What makes this temple unique is the presence of a natural underground water spring ('Bugga') beneath the Shiva Lingam, from which water continuously flows — a phenomenon considered highly sacred that symbolizes purity and divine energy. The temple is famous for its intricate stone carvings and sculptures, majestic gopuram (tower), the sacred water spring beneath the deity, and its peaceful riverside setting near the Penna River. It attracts devotees, history lovers, and architecture enthusiasts alike.",
  images: [
    {
      url: buggaRamalingeswara1,
      alt: "Bugga Ramalingeswara Swamy Temple aerial view",
      caption:
        "Aerial view of the Vijayanagara-style Bugga Ramalingeswara Swamy Temple, Tadipatri",
    },
    {
      url: buggaRamalingeswara2,
      alt: "Bugga Ramalingeswara Temple stone structure",
      caption: "The intricately carved stone gateway of the temple at sunset",
    },
  ],
  address: {
    street: "Bugga Ramalingeswara Swamy Temple, Tadipatri Town",
    city: "Tadipatri",
    district: "Ananthapuramu",
    state: "Andhra Pradesh",
    pincode: "515411",
    landmark: "Near the Penna River",
  },
  coordinates: {
    latitude: 14.908,
    longitude: 78.0105,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
  entryFee: "Free entry for all devotees (special poojas during festivals)",
  bestTimeToVisit:
    "Early morning (peaceful and less crowded); evening aarti time; winter months (October to February) for comfortable weather",
  dressCode:
    "Traditional and modest attire. Men: dhoti, kurta, or formal wear. Women: saree, salwar kameez, or traditional dress. Avoid shorts, sleeveless tops, and revealing clothing.",
  nearbyAttractions: [
    "Penna River",
    "Tadipatri Railway Station",
    "Chintala Venkataramana Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
