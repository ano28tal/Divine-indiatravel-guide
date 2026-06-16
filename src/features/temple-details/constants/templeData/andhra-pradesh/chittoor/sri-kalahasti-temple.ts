import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import sriKalahastTempleImage from "@/shared/assets/andhra-pradesh/chittoor/sri-kalahasti-temple/1.jpg";

export const sriKalahastiTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-sri-kalahasti-temple",
  name: "Sri Kalahasti Temple",
  history:
    "The origins of Srikalahasti Temple date back to ancient times and are deeply rooted in mythology. The name 'Srikalahasti' comes from three devoted beings — Sri (spider), Kala (serpent), and Hasti (elephant) — who worshipped Lord Shiva with deep devotion and were granted liberation, giving the temple its name. The temple was significantly developed during the Pallava dynasty (5th–9th century CE), with later expansions by the Chola dynasty and the Vijayanagara Empire. The grand gopuram and structures were enhanced under Krishnadevaraya of Vijayanagara, making the temple a blend of Dravidian architecture and rich spiritual heritage.",
  significance:
    "One of the most revered Shiva temples in South India and one of the Pancha Bhoota Stalas, representing the element of air (Vayu). Known as the 'Kashi of the South', it is especially famous for the Rahu-Ketu pooja, believed to remove planetary afflictions (doshas) and obstacles related to marriage delays, career, and health. Its most unique feature is that the lamp flame inside the sanctum moves continuously without any wind, symbolizing the presence of the air element.",
  about:
    "The Srikalahasti Temple is one of the most revered Shiva temples in South India, located in the town of Srikalahasti near the pilgrimage city of Tirupati in Chittoor district. It is dedicated to Lord Shiva, worshipped here as Sri Kalahasteeswara, represented in the form of a Vayu Lingam (air element). As one of the Pancha Bhoota Stalas, the temple draws devotees seeking relief from karmic doshas, spiritual growth, and inner peace, and is a major pilgrimage center with deep cultural roots.",
  images: [
    {
      url: sriKalahastTempleImage,
      alt: "Srikalahasti Temple gopuram near the Swarnamukhi river",
      caption: "The towering gopuram of Srikalahasti Temple",
    },
  ],
  address: {
    street: "Sannidhi Street",
    city: "Srikalahasti",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517644",
    landmark: "Near Srikalahasti Railway Station (2 km)",
  },
  coordinates: {
    latitude: 13.7498,
    longitude: 79.6984,
  },
  timings:
    "5:30 AM - 9:30 PM; peak hours morning (6:00 AM - 10:00 AM) and evening",
  entryFee:
    "General Darshan: Free; Special Darshan: ₹50 - ₹500; Rahu-Ketu Pooja: approx. ₹300 - ₹2500 by category",
  bestTimeToVisit:
    "Early morning for a peaceful darshan; Maha Shivaratri and Kartika Deepam; avoid weekends and festivals if you prefer less crowd",
  dressCode:
    "Traditional and modest attire — Men: dhoti, kurta, or formal wear; Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and western party wear; strict rules may apply for special poojas like Rahu-Ketu rituals.",
  nearbyAttractions: [
    "Tirumala Venkateswara Temple",
    "Gudimallam Parasurameswara Swamy Temple",
    "Kanipakam Vinayaka Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
