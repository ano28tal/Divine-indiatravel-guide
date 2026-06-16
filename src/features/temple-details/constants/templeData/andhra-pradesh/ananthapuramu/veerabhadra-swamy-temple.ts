import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import veerabhadra1 from "@/shared/assets/andhra-pradesh/ananthapuramu/veerabhadra-swamy-temple/1.jpg";
import veerabhadra2 from "@/shared/assets/andhra-pradesh/ananthapuramu/veerabhadra-swamy-temple/2.jpg";

export const veerabhadraSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-ananthapuramu-veerabhadra-swamy-temple",
  name: "Veerabhadra Swamy Temple",
  history:
    "The temple was built during the Vijayanagara Empire in the 16th century (around 1530–1540 CE). It was constructed by two brothers, Virupanna and Veeranna, who served as governors under King Achyuta Deva Raya. According to legend, the site is associated with the epic Ramayana — it is believed that when Jatayu (the divine bird) was wounded by Ravana while trying to rescue Sita, Lord Rama arrived here and said 'Le Pakshi' (meaning 'rise, bird'), which gave the place its name, Lepakshi. The temple is known for exceptional Dravidian architecture and features paintings depicting scenes from the Ramayana and Mahabharata. Its timeline spans construction under Vijayanagara rule in the 16th century, continuation as a major pilgrimage site in the post-Vijayanagara period, and recognition as a protected heritage monument in the modern era.",
  significance:
    "The temple holds deep spiritual meaning for devotees of Lord Shiva. Lord Veerabhadra represents the destruction of evil and the protection of righteousness, and worship here is believed to remove negative energies and obstacles. Devotees pray for strength, courage, and justice, and the temple is associated with Shiva's cosmic anger and transformation. Daily puja and offerings are conducted, with special celebrations during Mahashivratri and traditional prayers for wish fulfillment. As an important pilgrimage site in Andhra Pradesh, it represents the artistic excellence of the Vijayanagara period.",
  about:
    "The Veerabhadra Swamy Temple, located in the historic village of Lepakshi in Andhra Pradesh, is one of the finest examples of South Indian temple architecture and devotion. Dedicated to Lord Veerabhadra, a fierce incarnation of Lord Shiva, this temple holds immense religious and artistic significance. Lord Veerabhadra is believed to have been created by Lord Shiva in a state of intense anger to destroy the ego of King Daksha; as a result, the deity symbolizes power, protection, and divine justice. The temple is widely famous for its hanging pillar (a mysterious architectural marvel), intricate Vijayanagara-style carvings, beautiful murals and sculptures, and proximity to the giant Nandi statue — one of the largest monolithic Nandis in India. Overall, the temple is a perfect blend of spiritual devotion, history, and architectural brilliance.",
  images: [
    {
      url: veerabhadra1,
      alt: "Veerabhadra Swamy Temple at Lepakshi",
      caption:
        "The Vijayanagara-style stone architecture of Veerabhadra Swamy Temple, Lepakshi",
    },
    {
      url: veerabhadra2,
      alt: "Idol of Lord Veerabhadra",
      caption: "The idol of Lord Veerabhadra inside the sanctum",
    },
  ],
  address: {
    street: "Lepakshi Village, Hindupur Mandal",
    city: "Lepakshi",
    district: "Ananthapuramu",
    state: "Andhra Pradesh",
    pincode: "515331",
    landmark: "Near the giant monolithic Nandi statue",
  },
  coordinates: {
    latitude: 13.8,
    longitude: 77.607,
  },
  timings: "6:00 AM - 6:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 6 PM)",
  entryFee: "Free for all visitors",
  bestTimeToVisit:
    "Early morning for peaceful darshan; winter months (October to February) for comfortable weather",
  dressCode:
    "Respectful and traditional attire. Men: shirts/T-shirts with full pants or dhoti. Women: saree, salwar kameez, or decent traditional attire. Avoid shorts, sleeveless tops, and revealing or inappropriate clothing.",
  nearbyAttractions: [
    "Giant Monolithic Nandi Statue",
    "Hanging Pillar",
    "Hindupur",
    "Lepakshi murals",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
