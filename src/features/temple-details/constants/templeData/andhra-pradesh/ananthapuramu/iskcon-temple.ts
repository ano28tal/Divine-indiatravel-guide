import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import iskconAnantapur1 from "@/shared/assets/andhra-pradesh/ananthapuramu/iskcon-temple/1.jpg";
import iskconAnantapur2 from "@/shared/assets/andhra-pradesh/ananthapuramu/iskcon-temple/2.jpg";

export const iskconTemple: TempleDetails = {
  id: "andhra-pradesh-ananthapuramu-iskcon-temple",
  name: "ISKCON Temple",
  history:
    "The ISKCON movement was founded in 1966 by A. C. Bhaktivedanta Swami Prabhupada in New York, with the mission to spread Krishna consciousness worldwide through chanting, devotion, and scriptural education. The Anantapur ISKCON temple is a relatively modern establishment compared to ancient Hindu temples, developed as part of ISKCON's expansion across India to bring spiritual awareness and Vedic knowledge to different regions. Its timeline spans ISKCON's global founding by Srila Prabhupada in 1966, rapid expansion of ISKCON temples across India in the 1980s–2000s, and the establishment and development of ISKCON centers in Andhra Pradesh, including Anantapur, in recent years. While it does not have ancient dynastic history, its roots are deeply connected to the Bhakti movement, especially the teachings of Chaitanya Mahaprabhu, who emphasized chanting the holy names of Krishna as the path to salvation.",
  significance:
    "ISKCON temples are centered around the practice of Bhakti Yoga (devotional service), with the core belief that chanting the Hare Krishna Mahamantra leads to spiritual awakening and liberation. Key spiritual elements include chanting ('Hare Krishna Hare Krishna, Krishna Krishna Hare Hare…'), prasadam (sanctified vegetarian food distributed freely), and scriptural learning from the Bhagavad Gita and Srimad Bhagavatam. Devotees visit to seek peace and mental clarity, spiritual growth and self-realization, fulfillment of wishes through devotion, and participation in kirtans and festivals. Culturally, the temple promotes vegetarianism and simple living, encourages youth participation in spirituality, and hosts cultural programs, festivals, and community services.",
  about:
    "The ISKCON temple in Anantapur district is part of the global spiritual movement known as the International Society for Krishna Consciousness, dedicated to spreading the teachings of Lord Krishna based on the Bhagavad Gita and Vedic scriptures. These temples are widely recognized for their serene environment, devotional practices, and community activities. The main deities worshipped are Lord Krishna and Radha (Radha-Krishna), often accompanied by other forms such as Lord Balarama, Lord Chaitanya Mahaprabhu, and Nityananda. Krishna is considered the Supreme Personality of Godhead in Vaishnavism, representing divine love, compassion, and wisdom. The ISKCON center in Anantapur serves as a spiritual hub where devotees engage in bhajans (devotional songs), kirtans, Bhagavad Gita discourses, and prasadam distribution. It is especially popular among youth and spiritual seekers due to its structured teachings, peaceful atmosphere, and emphasis on simple living and high thinking.",
  images: [
    {
      url: iskconAnantapur1,
      alt: "ISKCON Temple illuminated at night",
      caption:
        "The ISKCON temple beautifully illuminated with festive lighting",
    },
    {
      url: iskconAnantapur2,
      alt: "ISKCON Temple complex at night",
      caption:
        "The ISKCON temple complex with decorative horse statues lit up at night",
    },
  ],
  address: {
    street: "ISKCON Temple",
    city: "Anantapur",
    district: "Ananthapuramu",
    state: "Andhra Pradesh",
    pincode: "515001",
    landmark: "Near NH44 (Bangalore–Hyderabad Highway)",
  },
  coordinates: {
    latitude: 14.6819,
    longitude: 77.6006,
  },
  timings:
    "4:30 AM - 8:30 PM (Mangala Aarti: 4:30 AM, Morning Darshan: 7 AM – 12:30 PM, Evening Darshan: 4:30 PM – 8:30 PM)",
  entryFee:
    "Free entry for all visitors (donations accepted but not mandatory)",
  bestTimeToVisit:
    "Early morning (Mangala Aarti) for a spiritual experience; evening aarti for a peaceful atmosphere; Janmashtami is highly vibrant",
  dressCode:
    "Modest and traditional attire. Men: kurta-pajama or full pants with shirt. Women: saree, salwar kameez, or long dresses. Avoid shorts, sleeveless tops, short skirts, and tight or revealing clothing.",
  nearbyAttractions: ["Anantapur city", "NH44 Highway"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
