import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import kanipakamVinayakaTempleImage from "@/shared/assets/andhra-pradesh/chittoor/kanipakam-vinayaka-temple/1.jpg";

export const kanipakamVinayakaTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-kanipakam-vinayaka-temple",
  name: "Kanipakam Vinayaka Temple",
  history:
    "The temple dates back to the 11th century CE and was originally built by the Chola Dynasty, later expanded and renovated by the Vijayanagara Empire rulers. According to local mythology, three brothers — one blind, one deaf, and one mute — were digging a well for irrigation when their tool struck a hard object and blood began oozing out of the ground. Realizing it was a divine manifestation, all three were miraculously cured of their disabilities. The villagers believed it to be Lord Ganesha's self-manifestation, and the idol was left in the well where it appeared, with a temple later constructed around it.",
  significance:
    "Dedicated to Lord Ganesha worshipped here as Varasiddhi Vinayaka, 'the one who fulfills wishes'. The temple is famed for its self-manifested (Swayambhu) idol installed in a perennial-water well, which devotees believe is gradually increasing in size over time. It is especially known for wish fulfillment (Varasiddhi), resolving disputes through oaths (Pramanam) taken before the deity, prosperity, success in new beginnings, and the removal of obstacles.",
  about:
    "Kanipakam Vinayaka Temple is one of the most revered temples dedicated to Lord Ganesha, located in the peaceful village of Kanipakam in Chittoor district, Andhra Pradesh. The presiding deity is worshipped as Varasiddhi Vinayaka. What makes this temple unique is the self-manifested idol that emerged naturally from the earth and remains surrounded by perennial water, adding to its divine mystery. The temple attracts thousands of pilgrims, especially during festivals and auspicious days, and is renowned for the strong spiritual vibrations and miracles reported by devotees.",
  images: [
    {
      url: kanipakamVinayakaTempleImage,
      alt: "Kanipakam Vinayaka Temple gopuram and temple tank",
      caption:
        "The grand entrance and sacred tank of Kanipakam Vinayaka Temple",
    },
  ],
  address: {
    street: "Kanipakam Village, Irala Mandal",
    city: "Kanipakam",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517131",
    landmark: "Approx. 70 km from Tirupati",
  },
  coordinates: {
    latitude: 13.2833,
    longitude: 79.1,
  },
  timings:
    "4:00 AM - 9:30 PM (Afternoon break 1:00 PM - 4:00 PM); Early Morning Darshan 4:00 AM - 6:00 AM",
  entryFee: "General Darshan: Free; Special Darshan: ₹100 - ₹300 (approx.)",
  bestTimeToVisit: "Early morning for a peaceful darshan; Ganesh Chaturthi",
  dressCode:
    "Traditional and modest attire — Men: dhoti, kurta, or formal wear; Women: saree, salwar kameez, or traditional dress. Avoid shorts, sleeveless tops, and revealing clothes.",
  nearbyAttractions: [
    "Sri Kalahasti Temple",
    "Tirumala Venkateswara Temple",
    "Gudimallam Parasurameswara Swamy Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
