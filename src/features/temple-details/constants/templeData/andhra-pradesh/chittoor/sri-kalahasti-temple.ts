import type { TempleDetails } from "../../../../types/templeDetails";
import sriKalahastTempleImage from "@/shared/assets/andhra-pradesh/chittoor/sri-kalahasti-temple/1.jpg";

export const sriKalahastiTemple: TempleDetails = {
  id: "andhra-pradesh-tirupati-sri-kalahasti-temple",
  name: "Sri Kalahasti Temple",
  history:
    "Established in the 5th century CE by the Pallava kings, Sri Kalahasti Temple is one of the most ancient and revered Shiva temples in India. The temple has a rich history spanning over 1500 years and has been mentioned in ancient Tamil Sangam literature. The Chola, Pallava, and Vijayanagara empires all contributed to its construction and renovation. The temple's name derives from the legend of three devotees - Sri (spider), Kala (serpent), and Hasti (elephant) - who worshipped Lord Shiva here and attained salvation.",
  significance:
    "Sri Kalahasti Temple is one of the Pancha Bhoota Sthalas representing the element of air (Vayu). It is famous for Rahu-Ketu puja to nullify the effects of planetary positions - this is the only temple where Rahu-Ketu puja can be performed at any time, making it unique among all Hindu temples. The lamp inside the sanctum never flickers despite wind, proving divine presence and the presence of Vayu (air element). The temple is also known as Dakshina Kailasam (Kailash of the South).",
  about:
    "Sri Kalahasti Temple is one of the most famous Shiva temples in South India, located in the town of Srikalahasti in Tirupati district, Andhra Pradesh. The presiding deities are Srikalahasteeswara (Lord Shiva) and Gnana Prasunambika Devi (Goddess Parvati). The temple showcases magnificent Dravidian architecture with intricate carvings and sculptures. The temple features a majestic 120-feet tall Rajagopuram (main tower) that is a blend of Dravidian and Vijayanagara architectural styles. The inner sanctum houses the sacred Shiva Lingam representing the element of air, and the unique feature is that the lamp flame flickers on its own due to the air element's presence, even in the absence of wind.",
  images: [
    {
      url: sriKalahastTempleImage,
      alt: "Sri Kalahasti Temple gopuram",
      caption: "The towering gopuram of Sri Kalahasti Temple",
    },
  ],
  address: {
    street: "Temple Street",
    city: "Srikalahasti",
    district: "Tirupati",
    state: "Andhra Pradesh",
    pincode: "517644",
    landmark: "Near Srikalahasti Railway Station",
  },
  coordinates: {
    latitude: 13.74944,
    longitude: 79.69833,
  },
  timings: "6:00 AM - 9:00 PM",
  entryFee: "Free",
  bestTimeToVisit: "October to March",
  dressCode: "Traditional attire recommended",
  nearbyAttractions: [
    "Bharadwaja Tirtham",
    "Kannapiran Temple",
    "Durgamba Temple",
  ],
  yogaCenters: [
    {
      name: "Vayu Yoga Center",
      address: "Main Road, Srikalahasti",
      distance: "1 km",
      rating: 4.2,
      description:
        "Yoga center focusing on pranayama and breath-based practices",
    },
  ],
  foodCenters: [
    {
      name: "Temple Prasadam Counter",
      address: "Inside Temple Complex",
      distance: "0.1 km",
      rating: 4.5,
      description: "Traditional temple prasadam and South Indian meals",
    },
    {
      name: "Annapurna Bhavan",
      address: "Near Temple Entrance, Srikalahasti",
      distance: "0.2 km",
      rating: 4.3,
      description: "Pure vegetarian restaurant serving authentic cuisine",
    },
  ],
  spiritualTeachers: [
    {
      name: "Sri Kalahasti Agama Patasala",
      address: "Temple Complex, Srikalahasti",
      distance: "0.3 km",
      description: "Traditional school teaching temple rituals and Agamas",
    },
  ],
};
