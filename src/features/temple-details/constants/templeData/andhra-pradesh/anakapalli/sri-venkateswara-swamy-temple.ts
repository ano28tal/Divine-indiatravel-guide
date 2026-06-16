import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import anakapalliVenkateswara1 from "@/shared/assets/andhra-pradesh/anakapalli/sri-venkateswara-swamy-temple/1.jpg";
import anakapalliVenkateswara2 from "@/shared/assets/andhra-pradesh/anakapalli/sri-venkateswara-swamy-temple/2.jpg";

export const sriVenkateswaraSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-anakapalli-sri-venkateswara-swamy-temple",
  name: "Sri Venkateswara Swamy Temple",
  history:
    "The exact origin of the temple is not precisely documented, but it is believed to have been established several centuries ago by local rulers and devotees inspired by Vaishnavite traditions. Over time, the temple has undergone renovations and expansions supported by regional patrons and temple authorities. The architecture and rituals suggest influence from South Indian temple traditions, particularly those seen during the Chola and Vijayanagara periods, which promoted Vishnu worship across Andhra Pradesh. Like other temples dedicated to Lord Venkateswara, it is believed that the deity manifested to protect devotees during difficult times and to guide them toward dharma. Its indicative timeline spans establishment by local devotees in the ancient/medieval period, strengthening of Vaishnavite worship traditions under Vijayanagara influence, and renovations with improved facilities in the modern era.",
  significance:
    "The temple holds deep spiritual importance for devotees of Lord Vishnu. Lord Venkateswara, also known as Balaji, Srinivasa, or Govinda, is believed to grant prosperity, wealth, and relief from hardships, and is considered the Kaliyuga deity — most responsive to devotees in the present age. Devotees associate the temple with the same divine energy as Tirumala, believing that prayers offered here are equally powerful, and visit seeking success, financial stability, marriage, and overall well-being. Offering prayers here is believed to help remove financial and personal obstacles, with devotees performing Archana, Abhishekam, and Pradakshina. Major festivals include Vaikuntha Ekadashi, Brahmotsavam, and Janmashtami.",
  about:
    "The Sri Venkateswara Swamy Temple in Anakapalle district is a revered Hindu shrine dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, who is widely worshipped as the preserver and protector of the universe. The temple is known for its peaceful atmosphere, traditional South Indian architecture, and deep spiritual significance among local devotees. Although not as globally famous as Tirupati, this temple holds strong regional importance and attracts devotees who prefer a less crowded yet equally divine experience. It stands as a center of faith, devotion, and cultural tradition in the Anakapalle region, featuring an entrance gopuram with traditional carvings, pillared halls (mandapam), a decorated sanctum, and the idol of Lord Venkateswara adorned with ornaments.",
  images: [
    {
      url: anakapalliVenkateswara1,
      alt: "Sri Venkateswara Swamy Temple entrance",
      caption:
        "Devotees at the entrance of Sri Venkateswara Swamy Temple, Anakapalle",
    },
    {
      url: anakapalliVenkateswara2,
      alt: "Lord Venkateswara deity in the sanctum",
      caption: "The decorated idol of Lord Venkateswara in the sanctum",
    },
  ],
  address: {
    street: "Sri Venkateswara Swamy Temple",
    city: "Anakapalle",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    pincode: "531001",
    landmark: "Near Anakapalle Railway Station",
  },
  coordinates: {
    latitude: 17.6915,
    longitude: 83.003,
  },
  timings:
    "5:30 AM - 8:30 PM (Morning Darshan: 6 AM – 12 PM, Evening Darshan: 4 PM – 8:30 PM)",
  entryFee:
    "General Darshan: Free (Special sevas/poojas: charges vary by ritual)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; weekdays to avoid crowd; festival days for vibrancy",
  dressCode:
    "Traditional and modest attire. Men: dhoti, kurta, or formal wear. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and tight or revealing clothes.",
  nearbyAttractions: [
    "Anakapalle",
    "Visakhapatnam",
    "Anakapalle Railway Station",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
