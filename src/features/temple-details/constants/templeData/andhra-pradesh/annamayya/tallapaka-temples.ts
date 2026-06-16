import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import tallapakaTemplesImg from "@/shared/assets/andhra-pradesh/annamayya/tallapaka-temples/1.jpg";

export const tallapakaTemples: TempleDetails = {
  id: "andhra-pradesh-annamayya-tallapaka-temples",
  name: "Tallapaka Temples",
  history:
    "The history of Tallapaka Temples dates back several centuries and is deeply rooted in medieval South Indian temple traditions. The temples were established during the rule of the Vijayanagara Empire (14th–17th century), and the village of Tallapaka gained prominence as the birthplace of Saint Annamacharya (1408–1503). It is believed that Annamacharya was divinely inspired by Lord Venkateswara of Tirumala, and his compositions, known as Sankeertanas, are still sung in temples today. The temples were patronized by local rulers and later maintained under temple administration authorities; over time, renovations have preserved the original structure while maintaining traditional design. Its timeline spans the establishment of temples and the rise of Annamacharya in the 14th–15th century, influence under Vijayanagara rulers in the 16th century, and maintenance as a heritage and pilgrimage site in the modern era. The site continues to attract devotees, historians, and music lovers alike.",
  significance:
    "Tallapaka holds deep spiritual importance due to its connection with devotion, music, and the bhakti tradition. It is the birthplace of Saint Annamacharya, the first known composer of devotional songs in Telugu, and has a strong association with Lord Venkateswara devotion. Devotees believe visiting Tallapaka brings peace, knowledge, and spiritual growth, and many come to seek blessings for artistic inspiration and devotion. Annamacharya's compositions are still performed in temples like Tirumala, and the place is considered sacred for Carnatic music lovers. People visit to connect with spiritual history, experience a calm and less crowded pilgrimage, and honor the legacy of Annamacharya.",
  about:
    "The Tallapaka Temples are a group of sacred shrines located in Tallapaka village in Annamayya District of Andhra Pradesh. This place holds immense religious and cultural importance as it is the birthplace of the legendary saint-poet Annamacharya (Annamayya), a devoted follower of Lord Venkateswara. The primary deities worshipped in the temple complex include Lord Chennakesava Swamy (a form of Lord Vishnu) and Lord Siddheswara Swamy (a form of Lord Shiva). The presence of both Vishnu and Shiva temples in the same area reflects the harmony between Vaishnavism and Shaivism traditions. The temple is famous for its connection to Annamacharya, who composed over 32,000 devotional songs dedicated to Lord Venkateswara, its peaceful spiritual environment away from crowded pilgrimage centers, and its rich cultural heritage and traditional South Indian temple architecture. Overall, Tallapaka is not just a temple destination but a spiritual and cultural heritage site.",
  images: [
    {
      url: tallapakaTemplesImg,
      alt: "Tallapaka Temples entrance",
      caption:
        "The entrance to the Tallapaka Temples, birthplace of Saint Annamacharya",
    },
  ],
  address: {
    street: "Tallapaka Village, Rajampet Mandal",
    city: "Rajampet",
    district: "Annamayya",
    state: "Andhra Pradesh",
    pincode: "516126",
    landmark: "Birthplace of Saint Annamacharya",
  },
  coordinates: {
    latitude: 13.9435,
    longitude: 79.1863,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
  entryFee: "Free entry for all visitors",
  bestTimeToVisit:
    "Early morning for peaceful darshan; festival days for a cultural experience; winter season (Oct–Feb) for comfortable weather",
  dressCode:
    "Traditional and modest attire. Men: dhoti, kurta, or full pants with shirt. Women: saree, salwar kameez, or traditional wear. Avoid shorts, sleeveless tops, short skirts, and revealing or inappropriate clothing.",
  nearbyAttractions: ["Rajampet", "Annamacharya Memorial", "Tirupati"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
