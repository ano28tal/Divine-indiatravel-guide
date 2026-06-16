import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import sivalayam from "@/shared/assets/andhra-pradesh/bapatla/sivalayam-temple/1.jpg";

export const sivalayamTemple: TempleDetails = {
  id: "andhra-pradesh-bapatla-sivalayam-temple",
  name: "Sivalayam Temple",
  history:
    "The exact historical records of this Sivalayam Temple are limited, which is common for many local temples in Andhra Pradesh. However, temples dedicated to Lord Shiva in this region often date back several centuries and are believed to have been established during the rule of South Indian dynasties like the Chola Dynasty or the Vijayanagara Empire. According to Hindu belief, Lord Shiva is the destroyer of evil and the transformer within the Trimurti (Brahma, Vishnu, Shiva), and many Sivalayam temples are believed to be built at spiritually significant locations where divine energy is naturally strong. Local legends often suggest that the Shiva Lingam may be self-manifested (Swayambhu) or discovered by saints, and that the temple was built to honor divine visions or miraculous events experienced by villagers. Its timeline spans the establishment of a simple shrine in the ancient period, expansion under regional dynasties in the medieval period, and renovations and maintenance by local communities in the modern era.",
  significance:
    "Sivalayam Temple holds deep spiritual importance for devotees of Lord Shiva. Lord Shiva represents the destruction of ego and rebirth of purity, and worshipping here is believed to bring inner peace, protection from negative energies, and fulfillment of wishes. Offering Bilva (Bel) leaves is considered highly sacred, devotees perform milk and water abhishekam, and chanting 'Om Namah Shivaya' is common. Devotees visit to seek blessings for health, success, and peace, for relief from problems and spiritual growth, and during important life events such as marriage and exams. The temple plays a vital role in local traditions and community gatherings, especially during festivals like Mahashivaratri and Shravan month celebrations.",
  about:
    "Sivalayam Temple is a revered Hindu shrine dedicated to Lord Shiva, located in the culturally rich region of Bapatla district. The temple serves as a spiritual center for devotees seeking peace, blessings, and divine connection. The main deity worshipped here is Lord Shiva, typically represented in the form of a Shiva Lingam, symbolizing cosmic energy and creation. Many Sivalayam temples across Andhra Pradesh are known for their simplicity, spiritual purity, and strong local devotion, and this temple follows the same tradition. It is especially popular among devotees during Mahashivaratri, Mondays (considered sacred for Shiva), and the holy month of Shravan. It is known for its calm environment, making it ideal for meditation and prayer, and special sevas include Abhishekam, Rudrabhishekam, and Archana.",
  images: [
    {
      url: sivalayam,
      alt: "Sivalayam Temple in Bapatla district",
      caption: "The Sivalayam Temple gopuram against a dramatic sky",
    },
  ],
  address: {
    street: "Sivalayam Temple",
    city: "Bapatla",
    district: "Bapatla",
    state: "Andhra Pradesh",
    pincode: "522101",
    landmark: "Bapatla district",
  },
  coordinates: {
    latitude: 15.904,
    longitude: 80.467,
  },
  timings:
    "5:30 AM - 8:30 PM (Morning: 5:30 AM – 12 PM, Evening: 4:30 PM – 8:30 PM)",
  entryFee:
    "Free entry for all devotees (special sevas: Abhishekam, Rudrabhishekam, Archana)",
  bestTimeToVisit:
    "Early morning (peaceful and less crowded); evening aarti time (spiritually vibrant); Mahashivaratri and Shravan month",
  dressCode:
    "Modest and respectful attire. Men: traditional wear (dhoti/kurta) or full pants and shirt. Women: saree, salwar kameez, or decent traditional attire. Avoid shorts, sleeveless tops, and revealing clothes.",
  nearbyAttractions: ["Bapatla", "Vijayawada", "Guntur"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
