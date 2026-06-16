import type { TempleDetails } from "../../../../types/templeDetails";
import mallikarjunaTempleImage from "@/shared/assets/andhra-pradesh/nandyal/mallikarjuna-swamy-temple/1.png";
import mallikarjunaLingam from "@/shared/assets/andhra-pradesh/nandyal/mallikarjuna-swamy-temple/2.jpg";
import mallikarjunaHistory from "@/shared/assets/andhra-pradesh/nandyal/mallikarjuna-swamy-temple/3.jpg";
import mallikarjunaSrisailam from "@/shared/assets/andhra-pradesh/nandyal/mallikarjuna-swamy-temple/4.jpg";

export const mallikarjunaSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-srisailam-mallikarjuna-swamy-temple",
  name: "Mallikarjuna Swamy Temple",
  history:
    "There is inscriptional evidence from the Satavahana dynasty placing the temple's existence from the 2nd century CE. The Veerasheromandapam and Patalaganga steps were constructed during the Reddy Kingdom period (12th-13th centuries), as the Reddy dynasty were committed devotees of Sri Bhramaramba Mallikarjuna Swamy. Most modern additions were made during the reign of King Harihara I of the Vijayanagara Empire (14th-15th centuries). The temple has been patronized by various dynasties including the Satavahanas, Ikshvakus, Pallavas, Chalukyas, Kakatiyas, and Vijayanagara rulers. According to Hindu legend, the presiding deity in the form of Linga was worshipped with jasmine flowers (called 'Mallika' in Telugu), leading to the name Mallikarjuna.",
  significance:
    "Mallikarjuna Swamy Temple is one of the 12 sacred Jyotirlingas and one of the 18 Maha Shakti Peethas, making it unique as it houses both a Jyotirlinga and a Shakti Peetha. According to legend, when Shiva and Parvati found suitable brides (Riddhi and Siddhi) for Ganesha, Kartikeya was enraged and went to stay alone on Mount Krauncha. When Shiva came to pacify him, Kartikeya moved nearby, and the place where Shiva and Parvati stayed came to be known as Srisailam. Goddess Bhramaramba's shrine is one of the 52 Shakta Pithas - it is believed that Sati Devi's upper lip fell here. The temple is also classified as a Paadal Petra Sthalam. On the way to the main temple is Shikhareshwaram Temple, where it is said that having darshan prevents rebirth.",
  about:
    "The Mallikarjuna Swamy Temple complex covers two hectares and houses four gateway towers (gopurams). The temple is enclosed by tall walls measuring 183m by 152m and 8.5m tall. The temple houses numerous shrines, with those of Mallikarjuna and Bhramaramba being the most prominent. The Mukha Mandapa, built during the Vijayanagar period, features intricately sculpted pillars and a huge idol of Nadikeshwara. The shrine housing Mallikarjuna is considered the oldest in the temple, dating back to the 7th century. There is a Sahasra Linga (1000 lingas) believed to have been commissioned by Lord Rama, and five other lingams believed to have been commissioned by the Pandavas. A mirror hall in the first precinct has images of Nataraja. The Krishna River here is called Patal Ganga, and one must descend 852 stairs to reach the river - the Shiva Linga is bathed with water from this sacred river.",
  images: [
    {
      url: mallikarjunaTempleImage,
      alt: "Mallikarjuna Swamy Temple at Srisailam",
      caption:
        "The sacred Mallikarjuna Swamy Temple - one of the 12 Jyotirlingas",
    },
    {
      url: mallikarjunaLingam,
      alt: "Sacred Lingam at Mallikarjuna Temple",
      caption: "The sacred Jyotirlinga of Mallikarjuna",
    },
    {
      url: mallikarjunaHistory,
      alt: "Historical view of Mallikarjuna Temple",
      caption: "The ancient Mallikarjuna Temple with its rich history",
    },
    {
      url: mallikarjunaSrisailam,
      alt: "Srisailam Temple panoramic view",
      caption: "Panoramic view of Srisailam - the abode of Mallikarjuna",
    },
  ],
  address: {
    street: "Srisailam Temple Complex",
    city: "Srisailam",
    district: "Nandyal",
    state: "Andhra Pradesh",
    pincode: "518101",
    landmark: "On the banks of Krishna River, Nallamala Hills",
  },
  coordinates: {
    latitude: 16.07417,
    longitude: 78.86806,
  },
  timings: "4:30 AM - 3:30 PM, 6:00 PM - 10:00 PM",
  entryFee: "Free (Special darshan tickets available)",
  bestTimeToVisit: "October to February (Maha Shivaratri is most auspicious)",
  dressCode:
    "Traditional attire preferred. Men: Dhoti/Pants with shirt. Women: Saree/Salwar Kameez",
  nearbyAttractions: [
    "Patalaganga (852 steps down)",
    "Shikhareshwaram Temple",
    "Sahasra Linga",
    "Akkamahadevi Caves",
    "Srisailam Dam",
    "Nallamala Forest Tiger Reserve",
    "Mirror Hall with Nataraja",
    "Mukha Mandapa",
  ],
  yogaCenters: [
    {
      name: "Srisailam Yoga Center",
      address: "Near Temple Complex, Srisailam",
      distance: "1 km",
      rating: 4.3,
      description: "Traditional yoga and meditation sessions for pilgrims",
    },
  ],
  foodCenters: [
    {
      name: "Temple Annadanam",
      address: "Inside Temple Complex, Srisailam",
      distance: "0.1 km",
      rating: 4.7,
      description: "Free prasadam distribution for devotees",
    },
    {
      name: "APTDC Restaurant",
      address: "Srisailam Project Area",
      distance: "2 km",
      rating: 4.2,
      description: "Government-run restaurant serving vegetarian meals",
    },
    {
      name: "Hotel Haritha",
      address: "Near Srisailam Bus Stand",
      distance: "1.5 km",
      rating: 4.0,
      description: "APTDC hotel restaurant with South Indian cuisine",
    },
  ],
  spiritualTeachers: [
    {
      name: "Srisailam Devasthanam",
      address: "Temple Complex, Srisailam",
      distance: "0.1 km",
      contact: "083339 01351",
      description:
        "Temple administration conducts religious discourses and rituals",
    },
    {
      name: "Bhramaramba Devi Peetham",
      address: "Temple Complex, Srisailam",
      distance: "0.1 km",
      description: "Shakti Peetha with special pujas and spiritual guidance",
    },
  ],
};
