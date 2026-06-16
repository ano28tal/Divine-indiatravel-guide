import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import kadiriNarasimha1 from "@/shared/assets/andhra-pradesh/ananthapuramu/kadiri-lakshmi-narasimha-swamy-temple/1.jpg";
import kadiriNarasimha2 from "@/shared/assets/andhra-pradesh/ananthapuramu/kadiri-lakshmi-narasimha-swamy-temple/2.jpg";

export const kadiriLakshmiNarasimhaSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-ananthapuramu-kadiri-lakshmi-narasimha-swamy-temple",
  name: "Kadiri Lakshmi Narasimha Swamy Temple",
  history:
    "The temple's origins date back several centuries and are closely tied to South Indian dynasties, particularly the Vijayanagara Empire. It is believed that the temple was developed and expanded during the reign of kings like Krishnadevaraya in the 16th century. According to legend, Lord Narasimha appeared here after slaying the demon Hiranyakashipu to protect his devotee Prahlada; the region was once covered with Kadiri trees, which is how the town got its name. Another belief suggests that sages performed intense penance here, leading to the divine manifestation of Narasimha in multiple forms within the temple complex. Its timeline spans the self-manifestation of the deity in the ancient period (as per beliefs), temple construction and expansion under Vijayanagara rulers in the medieval period, and renovations with improved facilities in the modern era. The architecture reflects classic Dravidian style with intricate carvings, towering gopurams, and sacred mandapas.",
  significance:
    "The temple holds immense importance for devotees of Lord Narasimha, who is considered the protector against evil forces and fear. Worship here helps in overcoming fear, stress, and negative energies; devotees seek blessings for health, protection, and prosperity, and the famous 'sweating idol' is seen as a sign of divine presence and energy. Rituals include Abhishekam (sacred bathing rituals), Archana and special poojas, and the offering of coconuts and flowers. Major festivals include Brahmotsavam and Narasimha Jayanti, which see a huge influx of devotees. The temple is a central part of Kadiri's identity and plays a vital role in preserving Vaishnavite traditions in the region.",
  about:
    "The Kadiri Lakshmi Narasimha Swamy Temple is one of the most revered pilgrimage sites in Andhra Pradesh, dedicated to Lord Narasimha, the fourth incarnation of Lord Vishnu. Located in the town of Kadiri, this temple is known for its powerful spiritual aura and unique deity form. The presiding deity, Sri Lakshmi Narasimha Swamy, is worshipped along with Goddess Lakshmi. What makes this temple especially significant is that the idol is believed to be self-manifested (Swayambhu), and devotees strongly believe the deity has the power to remove fear, negativity, and obstacles from life. The temple is particularly famous for its 'sweating idol phenomenon', where moisture appears on the idol, symbolizing the intense energy of Lord Narasimha — a mystical occurrence that attracts thousands of devotees and researchers alike. The temple features a grand gopuram with intricate carvings, pillared halls (mandapas), and detailed stone sculptures.",
  images: [
    {
      url: kadiriNarasimha1,
      alt: "Kadiri Lakshmi Narasimha Swamy Temple gopurams",
      caption: "The towering gopurams of Kadiri Lakshmi Narasimha Swamy Temple",
    },
    {
      url: kadiriNarasimha2,
      alt: "Lord Lakshmi Narasimha Swamy idol",
      caption:
        "The self-manifested idol of Lord Lakshmi Narasimha Swamy adorned with garlands",
    },
  ],
  address: {
    street: "Kadiri Lakshmi Narasimha Swamy Temple, Kadiri Town",
    city: "Kadiri",
    district: "Ananthapuramu",
    state: "Andhra Pradesh",
    pincode: "515591",
    landmark: "Near Kadiri Railway Station",
  },
  coordinates: {
    latitude: 14.1115,
    longitude: 78.1595,
  },
  timings:
    "5:30 AM - 8:30 PM (Morning: 5:30 AM – 1 PM, Evening: 4:30 PM – 8:30 PM)",
  entryFee:
    "No general entry fee; special seva/darshan tickets may range between ₹50 – ₹300",
  bestTimeToVisit:
    "Early morning for peaceful darshan; evening aarti time for spiritual ambiance; Brahmotsavam and Narasimha Jayanti festivals",
  dressCode:
    "Traditional and modest attire. Men: dhoti, kurta, or formal wear. Women: saree or salwar kameez. Avoid shorts, sleeveless tops, or revealing clothes.",
  nearbyAttractions: ["Kadiri town", "Kadiri Railway Station", "Anantapur"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
