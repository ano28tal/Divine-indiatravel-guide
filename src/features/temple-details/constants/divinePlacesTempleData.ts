import type { TempleDetails } from "../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "./templeData";

// Divine Places Temple Data - Jyotirlingas, Shakti Peethas, Shiva Temples, etc.
export const divinePlacesTempleData: Record<string, TempleDetails> = {
  // ============ JYOTIRLINGAS ============
  "jyotirlinga-somnath": {
    id: "jyotirlinga-somnath",
    name: "Somnath Jyotirlinga",
    history:
      "First among the 12 Jyotirlingas, the Somnath temple has been destroyed and rebuilt multiple times throughout history. According to tradition, the temple was originally built by the Moon God (Soma/Chandra) in gold, rebuilt by Ravana in silver, by Krishna in wood, and by Bhimadeva in stone. The temple was destroyed by Mahmud of Ghazni in 1024 CE and subsequently rebuilt. The current temple was reconstructed in 1951 after India's independence, with Sardar Vallabhbhai Patel playing a key role.",
    significance:
      "The first and most sacred of the 12 Jyotirlingas, symbolizing eternal resilience and the triumph of faith. The temple is believed to be the spot where Lord Shiva appeared as an infinite pillar of light. Pilgrims believe that visiting Somnath washes away all sins and grants liberation.",
    about:
      "Somnath Temple, located in Prabhas Patan near Veraval in Gujarat, is one of the most sacred pilgrimage sites for Hindus. The temple stands at the shore of the Arabian Sea and is known for its stunning architecture and spiritual significance. The temple complex includes the main shrine, a museum, and the famous 'Baan Ganga' - believed to be the spot where Lord Krishna was struck by a hunter's arrow.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621427643025-8bb3fb4a8f41?w=1200",
        alt: "Somnath Temple",
        caption: "The magnificent Somnath Temple at sunset",
      },
    ],
    address: {
      street: "Somnath Temple Road",
      city: "Prabhas Patan",
      district: "Veraval",
      state: "Gujarat",
      pincode: "362268",
      landmark: "Near Arabian Sea Shore",
    },
    coordinates: {
      latitude: 20.8880,
      longitude: 70.4012,
    },
    timings: "6:00 AM - 9:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March",
    dressCode: "Traditional attire recommended",
    nearbyAttractions: [
      "Bhalka Tirth",
      "Triveni Sangam",
      "Somnath Museum",
      "Gita Mandir",
    ],
    yogaCenters: [
      {
        name: "Somnath Yoga Shala",
        address: "Near Somnath Temple, Veraval",
        distance: "1 km",
        rating: 4.3,
        description: "Traditional yoga and meditation center",
      },
    ],
    foodCenters: [
      {
        name: "Somnath Trust Bhojanalaya",
        address: "Temple Complex",
        distance: "0.2 km",
        rating: 4.5,
        description: "Pure vegetarian meals and prasadam",
      },
    ],
    spiritualTeachers: [
      {
        name: "Somnath Vidyapeeth",
        address: "Near Temple Complex",
        distance: "0.5 km",
        description: "Vedic education and spiritual guidance",
      },
    ],
  },
  "jyotirlinga-mallikarjuna": {
    id: "jyotirlinga-mallikarjuna",
    name: "Mallikarjuna Jyotirlinga",
    history:
      "The temple dates back to the 2nd century and has been patronized by various dynasties including the Satavahanas, Ikshvakus, Pallavas, Chalukyas, and Vijayanagara rulers. According to legend, when Lord Shiva and Parvati's sons Ganesha and Kartikeya competed to circle the world, Kartikeya, feeling slighted, retreated to Mount Krauncha. To pacify him, Shiva and Parvati appeared here as Mallikarjuna and Bhramaramba.",
    significance:
      "Second among the 12 Jyotirlingas and also one of the 18 Maha Shakti Peethas where Goddess Bhramaramba resides. The temple is often called 'Kailash of the South' due to its immense spiritual significance. It is one of the few places where both Jyotirlinga and Shakti Peetha are present together.",
    about:
      "Sri Bhramaramba Mallikarjuna Temple is located on Srisailam, a hill on the banks of the Krishna River in Andhra Pradesh. The temple complex is surrounded by dense forests of the Nallamala Hills, adding to its mystique. The architecture showcases Dravidian style with intricate carvings depicting scenes from Hindu mythology.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604693766238-d84c5f3ff9c8?w=1200",
        alt: "Mallikarjuna Temple",
        caption: "Mallikarjuna Temple at Srisailam",
      },
    ],
    address: {
      street: "Srisailam Temple Complex",
      city: "Srisailam",
      district: "Kurnool",
      state: "Andhra Pradesh",
      pincode: "518102",
      landmark: "On Srisailam Hill",
    },
    coordinates: {
      latitude: 16.0742,
      longitude: 78.8683,
    },
    timings: "4:30 AM - 10:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to February",
    dressCode: "Traditional attire recommended",
    nearbyAttractions: [
      "Srisailam Dam",
      "Akka Mahadevi Caves",
      "Sakshi Ganapati Temple",
      "Pathala Ganga",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "jyotirlinga-mahakaleshwar": {
    id: "jyotirlinga-mahakaleshwar",
    name: "Mahakaleshwar Jyotirlinga",
    history:
      "The temple's history spans several centuries with references in ancient texts including the Puranas. The current structure was built by the Maratha general Ranoji Shinde in 1734 CE after the previous temple was destroyed. The temple has been a major center of Shaivism since ancient times, mentioned by the poet Kalidasa in his works.",
    significance:
      "The only south-facing (Dakshinamurti) Jyotirlinga among the 12, making it extremely unique. Famous for the daily Bhasma Aarti performed at 4 AM where the deity is adorned with ash from funeral pyres. Lord Shiva is believed to be Swayambhu (self-manifested) here, deriving power from within himself.",
    about:
      "Mahakaleshwar Temple is located in the ancient city of Ujjain in Madhya Pradesh, on the banks of the holy river Shipra. The temple is spread across five levels, with the main shrine in the basement. The idol is believed to be Swayambhu, meaning it derives its power from within. The temple architecture showcases Bhumija, Chalukya, and Maratha styles.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
        alt: "Mahakaleshwar Temple",
        caption: "The sacred Mahakaleshwar Temple in Ujjain",
      },
    ],
    address: {
      street: "Jaisinghpura",
      city: "Ujjain",
      district: "Ujjain",
      state: "Madhya Pradesh",
      pincode: "456001",
      landmark: "Near Rudra Sagar Lake",
    },
    coordinates: {
      latitude: 23.1828,
      longitude: 75.7682,
    },
    timings: "4:00 AM - 11:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March, Maha Shivaratri",
    dressCode: "Traditional attire mandatory for Bhasma Aarti",
    nearbyAttractions: [
      "Ram Ghat",
      "Kal Bhairav Temple",
      "Harsiddhi Temple",
      "Vedh Shala (Observatory)",
    ],
    yogaCenters: [
      {
        name: "Ujjain Yoga Institute",
        address: "Near Mahakaleshwar Temple",
        distance: "1 km",
        rating: 4.4,
        description: "Traditional yoga with Shaiva practices",
      },
    ],
    foodCenters: [
      {
        name: "Mahakal Prasad Bhandar",
        address: "Temple Complex",
        distance: "0.1 km",
        rating: 4.6,
        description: "Famous prasadam and vegetarian meals",
      },
    ],
    spiritualTeachers: [
      {
        name: "Sandipani Ashram",
        address: "Ujjain",
        distance: "3 km",
        description:
          "Ancient ashram where Lord Krishna studied, now a spiritual learning center",
      },
    ],
  },
  "jyotirlinga-kedarnath": {
    id: "jyotirlinga-kedarnath",
    name: "Kedarnath Jyotirlinga",
    history:
      "The temple is believed to have been built by the Pandavas and later restored by Adi Shankaracharya in the 8th century CE. The current structure is attributed to the efforts of Adi Shankaracharya. In 2013, the region faced devastating floods, but the temple miraculously survived while the surrounding areas were destroyed.",
    significance:
      "Highest among the 12 Jyotirlingas at 11,755 feet and part of the sacred Char Dham pilgrimage. According to legend, the Pandavas sought Lord Shiva's forgiveness here for killing their kin in the Mahabharata war. Lord Shiva, avoiding them, transformed into a bull, but Bhima recognized him. When Shiva tried to sink into the ground, Bhima caught his hump, which is worshipped here.",
    about:
      "Kedarnath Temple is located in the Garhwal Himalayan range near the Mandakini river in Uttarakhand. The temple is only accessible by a 22 km trek from Gaurikund, though helicopter services are available. The temple remains open only for six months (April/May to November) due to extreme weather conditions. The architecture features stone work without any mortar.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590654871816-66a61b26cae8?w=1200",
        alt: "Kedarnath Temple",
        caption: "Kedarnath Temple amidst the Himalayas",
      },
    ],
    address: {
      street: "Kedarnath Temple",
      city: "Kedarnath",
      district: "Rudraprayag",
      state: "Uttarakhand",
      pincode: "246445",
      landmark: "Near Mandakini River",
    },
    coordinates: {
      latitude: 30.7352,
      longitude: 79.0669,
    },
    timings: "4:00 AM - 9:00 PM (Open April/May to November only)",
    entryFee: "Free",
    bestTimeToVisit: "May to June, September to October",
    dressCode: "Warm traditional attire due to cold weather",
    nearbyAttractions: [
      "Bhairav Temple",
      "Gandhi Sarovar",
      "Vasuki Tal",
      "Shankaracharya Samadhi",
    ],
    yogaCenters: [
      {
        name: "Himalayan Yoga Retreat",
        address: "Gaurikund Base",
        distance: "22 km (at base)",
        description: "Yoga and meditation in the Himalayan setting",
      },
    ],
    foodCenters: [
      {
        name: "Temple Prasad Counter",
        address: "Kedarnath Temple",
        distance: "Within premises",
        description: "Simple prasadam and meals for pilgrims",
      },
    ],
    spiritualTeachers: [
      {
        name: "Shankaracharya Samadhi",
        address: "Behind Kedarnath Temple",
        distance: "0.2 km",
        description:
          "Samadhi of Adi Shankaracharya, a place of deep spiritual significance",
      },
    ],
  },
  "jyotirlinga-kashi-vishwanath": {
    id: "jyotirlinga-kashi-vishwanath",
    name: "Kashi Vishwanath Jyotirlinga",
    history:
      "The original temple was destroyed and rebuilt multiple times throughout history. The current temple was built by Ahilya Bai Holkar in 1780. The temple has been the spiritual heart of Varanasi for millennia, mentioned in the Puranas and Skanda Purana. Adi Shankaracharya visited here in the 8th century.",
    significance:
      "The most sacred Shiva temple in Hinduism. It is believed that those who die in Kashi attain Moksha (liberation). The temple is located on the western bank of the holy river Ganges. Lord Shiva himself is said to have declared that Kashi is his eternal abode.",
    about:
      "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva, located in Varanasi, Uttar Pradesh. The temple stands on the western bank of the Ganges and is one of the twelve Jyotirlingas. The main deity is known as Vishwanatha or Vishweshwara meaning 'Ruler of the Universe'. The recently built Kashi Vishwanath Corridor has transformed the temple complex.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200",
        alt: "Kashi Vishwanath Temple",
        caption: "The golden spire of Kashi Vishwanath Temple",
      },
    ],
    address: {
      street: "Vishwanath Gali",
      city: "Varanasi",
      district: "Varanasi",
      state: "Uttar Pradesh",
      pincode: "221001",
      landmark: "Near Dashashwamedh Ghat",
    },
    coordinates: {
      latitude: 25.3109,
      longitude: 83.0107,
    },
    timings: "3:00 AM - 11:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March, Maha Shivaratri",
    dressCode: "Traditional attire recommended",
    nearbyAttractions: [
      "Dashashwamedh Ghat",
      "Manikarnika Ghat",
      "Sankat Mochan Temple",
      "Sarnath",
    ],
    yogaCenters: [
      {
        name: "International Yoga Center",
        address: "Assi Ghat, Varanasi",
        distance: "2 km",
        rating: 4.7,
        description: "Traditional yoga with Ganga view",
      },
    ],
    foodCenters: [
      {
        name: "Kashi Chat Bhandar",
        address: "Vishwanath Gali",
        distance: "0.1 km",
        rating: 4.5,
        description: "Famous Banarasi cuisine and snacks",
      },
    ],
    spiritualTeachers: [
      {
        name: "Banaras Hindu University",
        address: "BHU Campus, Varanasi",
        distance: "5 km",
        description: "Premier institution for Vedic and spiritual studies",
      },
    ],
  },
  "jyotirlinga-rameshwaram": {
    id: "jyotirlinga-rameshwaram",
    name: "Rameshwaram Jyotirlinga",
    history:
      "According to the Ramayana, Lord Rama worshipped Lord Shiva here to absolve himself of the sin of killing Ravana (a Brahmin). Unable to get a Shivalinga from Kashi in time, Sita made one from sand, which is still worshipped as Ramalingam. The temple was expanded over centuries by Pandya, Chola, and Nayak rulers.",
    significance:
      "One of the Char Dham pilgrimage sites and the southernmost of the 12 Jyotirlingas. The temple has the longest corridor among all Hindu temples in India (197 meters). It is believed that pilgrimage to Kashi is incomplete without visiting Rameshwaram, and vice versa.",
    about:
      "Ramanathaswamy Temple is located on Pamban Island in Tamil Nadu. The temple is famous for its magnificent corridors with intricately carved pillars. There are 22 sacred wells (theerthams) within the temple, and pilgrims take bath in these wells before darshan. The temple architecture is a masterpiece of Dravidian style.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
        alt: "Rameshwaram Temple",
        caption: "The majestic corridors of Rameshwaram Temple",
      },
    ],
    address: {
      street: "Ramanathaswamy Temple",
      city: "Rameshwaram",
      district: "Ramanathapuram",
      state: "Tamil Nadu",
      pincode: "623526",
      landmark: "Pamban Island",
    },
    coordinates: {
      latitude: 9.2885,
      longitude: 79.3174,
    },
    timings: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to April",
    dressCode: "Traditional attire, wet clothes for theertham bath",
    nearbyAttractions: [
      "Pamban Bridge",
      "Dhanushkodi",
      "Agni Theertham",
      "Gandhamadhana Parvatham",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: [
      {
        name: "Temple Annadanam",
        address: "Temple Complex",
        distance: "Within premises",
        rating: 4.5,
        description: "Traditional South Indian meals and prasadam",
      },
    ],
    spiritualTeachers: defaultSpiritualTeachers,
  },

  // ============ SHAKTI PEETHAS ============
  "shaktipeetha-kamakhya": {
    id: "shaktipeetha-kamakhya",
    name: "Kamakhya Shakti Peetha",
    history:
      "One of the oldest Shakti Peethas, dating back to 8th-17th century. The temple was destroyed during the Muslim invasion and rebuilt by Koch king Nara Narayana in 1565. The temple has been a major center of Tantric practices since ancient times.",
    significance:
      "One of the 51 Shakti Peethas where Sati's womb (yoni) fell. The goddess is worshipped in the form of a yoni, symbolizing the power of creation. Famous for the annual Ambubachi Mela which celebrates the goddess's annual menstruation cycle.",
    about:
      "Kamakhya Temple is situated on Nilachal Hill in Guwahati, Assam. Unlike other temples, there is no idol - the goddess is worshipped in the form of a yoni carved in stone. The temple architecture features a distinctive beehive-shaped shikhara. It is the most important pilgrimage site for Tantric practitioners.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=1200",
        alt: "Kamakhya Temple",
        caption: "The unique dome of Kamakhya Temple",
      },
    ],
    address: {
      street: "Nilachal Hill",
      city: "Guwahati",
      district: "Kamrup",
      state: "Assam",
      pincode: "781010",
      landmark: "West of Guwahati city",
    },
    coordinates: {
      latitude: 26.1664,
      longitude: 91.7052,
    },
    timings: "5:30 AM - 10:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March",
    dressCode: "Modest traditional attire",
    nearbyAttractions: [
      "Basistha Temple",
      "Umananda Temple",
      "Assam State Museum",
    ],
    yogaCenters: [
      {
        name: "Shakti Yoga Ashram",
        address: "Near Nilachal Hill",
        distance: "2 km",
        description: "Tantra yoga and meditation practices",
      },
    ],
    foodCenters: defaultFoodCenters,
    spiritualTeachers: [
      {
        name: "Kamakhya Tantric School",
        address: "Near Temple Complex",
        distance: "0.5 km",
        description: "Traditional Tantric practices and learning",
      },
    ],
  },
  "shaktipeetha-kalighat": {
    id: "shaktipeetha-kalighat",
    name: "Kalighat Shakti Peetha",
    history:
      "The original temple is believed to be 200 years old, though the site has been sacred for much longer. The present temple was built in 1809. It is said that a devotee found a luminescent toe of Sati's right foot here.",
    significance:
      "One of the 51 Shakti Peethas where Sati's toes of her right foot fell. The temple gave its name to the city of Kolkata. Goddess Kali is worshipped here in her fiercest form.",
    about:
      "Kalighat Kali Temple is one of the 51 Shakti Peethas of India, located in Kolkata, West Bengal. The temple is dedicated to Goddess Kali, the fierce form of the Divine Mother. The temple is known for its distinctive architecture and the famous 'Kalighat paintings' art form that originated here.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200",
        alt: "Kalighat Temple",
        caption: "Kalighat Temple in Kolkata",
      },
    ],
    address: {
      street: "Kalighat",
      city: "Kolkata",
      district: "South 24 Parganas",
      state: "West Bengal",
      pincode: "700026",
      landmark: "Near Kalighat Metro Station",
    },
    coordinates: {
      latitude: 22.5196,
      longitude: 88.3426,
    },
    timings: "5:00 AM - 10:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March, Kali Puja",
    dressCode: "Modest attire",
    nearbyAttractions: [
      "Mother Teresa's Home",
      "Birla Planetarium",
      "Victoria Memorial",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },

  // ============ PANCHA BHUTA TEMPLES ============
  "pancha-bhuta-thiruvanaikaval": {
    id: "pancha-bhuta-thiruvanaikaval",
    name: "Thiruvanaikaval - Water Element Temple",
    history:
      "The temple dates back to the Chola period and has been expanded by various dynasties. Legend says an elephant and a spider worshipped Shiva here, and the temple is named after the elephant (anai in Tamil).",
    significance:
      "Represents the Water element (Appu/Jalam) among the Pancha Bhuta Sthalas. The lingam here is submerged in water from an underground spring. The temple demonstrates Lord Shiva's manifestation as the element of water.",
    about:
      "Jambukeswarar Temple at Thiruvanaikaval, near Trichy in Tamil Nadu, is one of the Pancha Bhuta Sthalas representing water. The lingam in the inner sanctum is always submerged in water from an underground spring. The temple features magnificent Dravidian architecture with five enclosures and seven gopurams.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604693766238-d84c5f3ff9c8?w=1200",
        alt: "Thiruvanaikaval Temple",
        caption: "Thiruvanaikaval Temple - Water Element",
      },
    ],
    address: {
      street: "Thiruvanaikaval",
      city: "Thiruvanaikaval",
      district: "Tiruchirappalli",
      state: "Tamil Nadu",
      pincode: "620005",
      landmark: "Near Srirangam",
    },
    coordinates: {
      latitude: 10.8538,
      longitude: 78.7046,
    },
    timings: "6:00 AM - 1:00 PM, 3:00 PM - 8:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March",
    dressCode: "Traditional attire",
    nearbyAttractions: [
      "Srirangam Temple",
      "Rock Fort Temple",
      "Kallanai Dam",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "pancha-bhuta-tiruvannamalai": {
    id: "pancha-bhuta-tiruvannamalai",
    name: "Tiruvannamalai - Fire Element Temple",
    history:
      "The temple is one of the largest in India, with origins dating back over 1200 years. The Chola kings made significant contributions to its construction. The sacred Arunachala Hill itself is considered a Shiva Lingam.",
    significance:
      "Represents the Fire element (Agni) among the Pancha Bhuta Sthalas. The annual Karthigai Deepam festival, when a huge lamp is lit on top of Arunachala Hill, attracts millions. Sri Ramana Maharshi's ashram near the temple has made it a center for self-inquiry meditation.",
    about:
      "Annamalaiyar Temple at Tiruvannamalai represents Lord Shiva as fire. The temple covers 25 acres and has four gateway towers, with the eastern tower being the tallest in India at 217 feet. The pradakshina (circumambulation) of Arunachala Hill (14 km) is considered highly meritorious.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
        alt: "Tiruvannamalai Temple",
        caption: "Annamalaiyar Temple at Tiruvannamalai",
      },
    ],
    address: {
      street: "Annamalaiyar Temple",
      city: "Tiruvannamalai",
      district: "Tiruvannamalai",
      state: "Tamil Nadu",
      pincode: "606601",
      landmark: "At the foot of Arunachala Hill",
    },
    coordinates: {
      latitude: 12.2315,
      longitude: 79.0667,
    },
    timings: "5:30 AM - 12:30 PM, 4:30 PM - 9:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "November (Karthigai Deepam), October to March",
    dressCode: "Traditional attire",
    nearbyAttractions: [
      "Sri Ramana Ashram",
      "Skandashramam",
      "Virupaksha Cave",
      "Seshadri Ashram",
    ],
    yogaCenters: [
      {
        name: "Sri Ramana Ashram",
        address: "At the foot of Arunachala",
        distance: "1 km",
        rating: 4.9,
        description:
          "World-renowned center for self-inquiry meditation taught by Sri Ramana Maharshi",
      },
    ],
    foodCenters: [
      {
        name: "Sri Ramana Ashram Dining Hall",
        address: "Ashram Premises",
        distance: "1 km",
        description: "Free sattvic meals for devotees",
      },
    ],
    spiritualTeachers: [
      {
        name: "Sri Ramana Ashram",
        address: "Tiruvannamalai",
        distance: "1 km",
        description:
          "Teachings of Sri Ramana Maharshi, Advaita Vedanta and self-inquiry",
      },
    ],
  },
};

// Helper function to generate divine place temple ID
export const generateDivinePlaceTempleId = (
  category: string,
  templeName: string
): string => {
  return `${category}-${templeName}`
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};
