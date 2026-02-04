import type { TempleDetails } from "../types/templeDetails";
import tirumalaTempleImage from "@/shared/assets/tirumala venkateswara/Tirumala-Venkateswara-Temple.jpg";
import tirumalaLordVishnu from "@/shared/assets/tirumala venkateswara/Lord Vishnu.jpeg";
import tirumalaHills from "@/shared/assets/tirumala venkateswara/tirumal-hills-tirupati.jpg";
import tirumalaTempleNight from "@/shared/assets/tirumala venkateswara/tirumala-tirupati-temple-night-light-decorations.jpg";
import sriKalahastTempleImage from "@/shared/assets/sri kalahasti/Sri-Kalahasti-Temple.jpg";
import kanakaDurgaTempleImage from "@/shared/assets/kanak durga/Kanakadurga_Temple.jpg";
import kanakaDurgaTempleImage2 from "@/shared/assets/kanak durga/kanak durga.png";
import mallikarjunaTempleImage from "@/shared/assets/mallikarjuna-swamy-temple/mallikarjuna-swamy-temple.png";
import mallikarjunaLingam from "@/shared/assets/mallikarjuna-swamy-temple/lingam.jpg";
import mallikarjunaHistory from "@/shared/assets/mallikarjuna-swamy-temple/Mallikarjuna-Temple-History.jpg";
import mallikarjunaSrisailam from "@/shared/assets/mallikarjuna-swamy-temple/Srisailam.jpg";

// Helper to generate temple ID from name
export const generateTempleId = (
  templeName: string,
  districtName: string,
  stateName: string
): string => {
  return `${stateName}-${districtName}-${templeName}`
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Sample detailed temple data - in production this would come from an API
export const templeDetailsData: Record<string, TempleDetails> = {
  "andhra-pradesh-tirupati-tirumala-venkateswara-temple": {
    id: "andhra-pradesh-tirupati-tirumala-venkateswara-temple",
    name: "Tirumala Venkateswara Temple",
    history:
      "The history of the Tirumala Venkateswara Temple dates back to ancient times, with origins shrouded in legend and mythology. According to Hindu scriptures, Lord Sri Venkateswara manifested on the Venkatadri hill during the Kali Yuga. The earliest known reference can be found in ancient Tamil Sangam poetry from the 9th century CE. The temple received patronage from various dynasties including the Pallavas, Cholas, and Chalukyas. One of the most transformative periods was its association with the Vijayanagara Empire (14th-16th centuries). Emperor Krishnadevaraya, a devout worshipper, made substantial contributions including the 'Dhana Annaprasadam' (free food distribution) scheme that continues today. The temple faced challenges during Muslim rule but survived thanks to local rulers who protected it. In the 18th century, the Maratha rulers under Chhatrapati Shivaji's descendants helped restore the temple to its former glory. Post-independence in 1933, the Tirumala Tirupati Devasthanams (TTD) was established to oversee administration.",
    significance:
      "The Tirumala Venkateswara Temple is the richest and most visited temple in the world, often referred to as the 'Spiritual Capital of Andhra Pradesh.' Millions of devotees visit annually to seek blessings of Lord Venkateswara, believing that darshan will bestow blessings, remove sins, and fulfill wishes. The temple is known for its grand festivals including the annual Brahmotsavam (a nine-day extravaganza), Vaikunta Ekadashi, Rathasapthami, and Teppotsavam (boat festival). The tradition of tonsuring hair as an offering and the free food distribution (Dhana Annaprasadam) ensuring no devotee goes hungry are integral practices. The hundi receives millions of rupees daily, making it one of the wealthiest religious institutions globally.",
    about:
      "The Tirumala Venkateswara Temple, nestled in the serene hills of Tirupati in Andhra Pradesh, is one of the most revered spiritual sites in the world. Dedicated to Lord Venkateswara (also known as Balaji or Srinivasa), an incarnation of Lord Vishnu, the temple is often called the 'Temple of Seven Hills' due to its location atop the Seshachalam Hills at an altitude of 853 meters. The temple is a masterpiece of Dravidian architecture, featuring towering gopurams (entrance towers), intricately carved pillars, and exquisite sculptures. The main shrine houses a black stone idol of Lord Venkateswara standing approximately 8 feet tall, adorned with gold and precious jewels. The sanctum sanctorum (Garbhagriha) is crowned with a gold-covered Vimana (tower). The iconic Rajagopuram stands approximately 140 feet tall, adorned with intricate sculptures depicting Hindu mythology. The temple complex also features shrines dedicated to Lord Rama, Lord Krishna, and Goddess Lakshmi.",
    images: [
      {
        url: tirumalaTempleImage,
        alt: "Tirumala Venkateswara Temple main entrance",
        caption: "The magnificent gopuram of Tirumala Temple",
      },
      {
        url: tirumalaLordVishnu,
        alt: "Lord Vishnu deity",
        caption: "Lord Vishnu - the presiding deity",
      },
      {
        url: tirumalaHills,
        alt: "Tirumala Hills view",
        caption: "The sacred Tirumala Hills of Tirupati",
      },
      {
        url: tirumalaTempleNight,
        alt: "Tirumala Temple night decorations",
        caption: "Tirumala Temple illuminated with beautiful night lights",
      },
    ],
    address: {
      street: "Tirumala Hill",
      city: "Tirumala",
      district: "Tirupati",
      state: "Andhra Pradesh",
      pincode: "517504",
      landmark: "Near Tirumala Bus Stand",
    },
    coordinates: {
      latitude: 13.6833,
      longitude: 79.3472,
    },
    timings: "3:00 AM - 1:00 AM (Next Day)",
    entryFee: "Free (Special darshan tickets available)",
    bestTimeToVisit: "September to February",
    dressCode:
      "Traditional attire preferred. Men: Dhoti/Pants with shirt. Women: Saree/Salwar Kameez",
    nearbyAttractions: [
      "Sri Padmavathi Temple",
      "Silathoranam",
      "Akasa Ganga",
      "Papavinasanam",
    ],
    yogaCenters: [
      {
        name: "Tirumala Yoga Peetham",
        address: "Near Tirumala Bus Stand, Tirumala",
        distance: "0.5 km",
        rating: 4.5,
        contact: "+91 877 2277777",
        description:
          "Traditional yoga center offering daily classes and meditation sessions",
      },
      {
        name: "Ananda Yoga Shala",
        address: "Tirumala Main Road, Tirumala",
        distance: "1 km",
        rating: 4.3,
        description: "Specializes in Hatha yoga and pranayama techniques",
      },
    ],
    foodCenters: [
      {
        name: "TTD Annadanam Complex",
        address: "Tirumala Temple Complex",
        distance: "0.2 km",
        rating: 4.8,
        description:
          "Free prasadam distribution by TTD. Serves lakhs of devotees daily",
      },
      {
        name: "Vakulamatha Annaprasadam",
        address: "Near Varahaswami Temple, Tirumala",
        distance: "0.3 km",
        rating: 4.6,
        description: "Traditional South Indian vegetarian meals",
      },
      {
        name: "Tirumala Laddu Counter",
        address: "Temple Main Entrance",
        distance: "0.1 km",
        rating: 4.9,
        description: "Famous Tirumala Laddu - the iconic temple prasadam",
      },
    ],
    spiritualTeachers: [
      {
        name: "Sri Veda Patasala",
        address: "Near Tirumala Temple, Tirumala",
        distance: "0.4 km",
        contact: "+91 877 2277888",
        description: "Ancient Vedic school teaching scriptures and rituals",
      },
      {
        name: "Tirumala Dharma Prachara Parishad",
        address: "TTD Administrative Building",
        distance: "0.6 km",
        description:
          "Conducts spiritual discourses and religious education programs",
      },
    ],
  },
  "andhra-pradesh-tirupati-sri-kalahasti-temple": {
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
  },
  "andhra-pradesh-vijayawada-kanaka-durga-temple": {
    id: "andhra-pradesh-vijayawada-kanaka-durga-temple",
    name: "Kanaka Durga Temple",
    history:
      "The Kanaka Durga Temple, officially known as Sri Durga Malleswara Swamyvarla Devasthanam, has ancient origins mentioned in the Kaalika Purana, Durgaa Sapthashati, and other Vedic literature. A Telugu inscription dated 1229 CE from the Chola era, found in Veligandla Village in Prakasam District, recorded a donation to the God Bejawada Malleswaradeva at Indrakiladri, known as Dakshina Varanasi, made by Podukayuri Siddayadeva and Sivamagi Maraya for the merit of their chief Siddaraju, alias Trilochana Pallava, a Telugu Pallava King. The temple has been described in Vedic literature as housing a Swayambhu (self-manifested) deity from the Triteeya Kalpa era.",
    significance:
      "The Kanaka Durga Temple is synonymous with Vijayawada and is one of the most significant Shakti temples in India. According to popular legend, the growing menace of demons became unbearable for the natives, and Sage Indrakila practiced severe penance until the goddess appeared. The sage pleaded with her to reside on his head and keep vigil on the wicked demons. As per his wishes, Durga made Indrakila her permanent abode and later slayed the demon king Mahishasura, freeing the people of Vijayawada from evil. The deity is regarded as Swayambhu (self-manifested) in Hindu scriptures, hence considered very powerful. During the Dasara festival (Navaratri), ten forms of Kanaka Durga are worshipped over 10 days: Swarna Kavachalankrita Durga, Bala Tripurasundari, Annapurna, Gayatri, Lalita Tripura Sundari, Saraswati, Mahalakshmi, Durga, Mahishasura Mardini, and Raja Rajeswari Devi.",
    about:
      "Kanaka Durga Temple is a Hindu temple dedicated to Goddess Kanaka Durga, located in Vijayawada, Andhra Pradesh, on the Indrakeeladri hill on the banks of the Krishna River. The enchanting 4-foot-high (1.2 m) icon of the deity is bedecked in glittering ornaments and bright flowers. Her icon depicts her eight-armed form, each holding a powerful weapon, in a standing posture over the demon Mahishashura and piercing him with her trident. The temple complex houses several sub-shrines including Malleswara Swamy, Nataraja, Kartikeya with Valli and Devasena, Hanuman (the kshetrapalaka or guardian of the temple), Aparajitha Devi, Abhaya Anjaneya, and Kamadhenu Devi. The temple showcases magnificent Dravidian architecture.",
    images: [
      {
        url: kanakaDurgaTempleImage,
        alt: "Kanaka Durga Temple on Indrakeeladri Hill",
        caption: "Sri Durga Malleswara Swamyvarla Devasthanam on the banks of Krishna River",
      },
      {
        url: kanakaDurgaTempleImage2,
        alt: "Goddess Kanaka Durga",
        caption: "The divine Goddess Kanaka Durga in her eight-armed form",
      },
    ],
    address: {
      street: "Indrakeeladri Hill",
      city: "Vijayawada",
      district: "NTR",
      state: "Andhra Pradesh",
      pincode: "520001",
      landmark: "On the banks of Krishna River, near Prakasam Barrage",
    },
    coordinates: {
      latitude: 16.5190,
      longitude: 80.6215,
    },
    timings: "6:00 AM - 9:00 PM",
    entryFee: "Free (Special darshan tickets available)",
    bestTimeToVisit: "September to February (Dasara/Navaratri in October is most auspicious)",
    dressCode: "Traditional attire preferred. Men: Dhoti/Pants with shirt. Women: Saree/Salwar Kameez",
    nearbyAttractions: [
      "Prakasam Barrage",
      "Krishna River",
      "Malleswara Swamy Shrine",
      "Undavalli Caves",
      "Bhavani Island",
      "Rajiv Gandhi Park",
    ],
    yogaCenters: [
      {
        name: "Vijayawada Yoga Center",
        address: "MG Road, Vijayawada",
        distance: "2 km",
        rating: 4.4,
        description:
          "Traditional yoga center offering daily classes and meditation sessions",
      },
      {
        name: "Art of Living Center",
        address: "Governorpet, Vijayawada",
        distance: "3 km",
        rating: 4.5,
        description: "Offers Sudarshan Kriya, yoga, and meditation programs",
      },
    ],
    foodCenters: [
      {
        name: "Temple Prasadam Counter",
        address: "Inside Temple Complex, Indrakeeladri",
        distance: "0.1 km",
        rating: 4.7,
        description:
          "Traditional prasadam distribution. Serves thousands of devotees daily",
      },
      {
        name: "Babai Hotel",
        address: "Eluru Road, Vijayawada",
        distance: "2 km",
        rating: 4.5,
        description: "Famous for authentic Andhra vegetarian meals and snacks",
      },
      {
        name: "Hotel Srinivas",
        address: "Besant Road, Vijayawada",
        distance: "1.5 km",
        rating: 4.3,
        description: "Popular vegetarian restaurant serving South Indian cuisine",
      },
    ],
    spiritualTeachers: [
      {
        name: "Sri Durga Malleswara Swamy Varla Devasthanam",
        address: "Temple Complex, Indrakeeladri",
        distance: "0.1 km",
        contact: "kanakadurgamma.org",
        description:
          "Temple administration conducts spiritual discourses and religious education programs",
      },
      {
        name: "Veda Patasala",
        address: "Near Temple Complex, Vijayawada",
        distance: "0.5 km",
        description: "Traditional Vedic school teaching scriptures and rituals",
      },
    ],
  },
  "andhra-pradesh-srisailam-mallikarjuna-swamy-temple": {
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
        caption: "The sacred Mallikarjuna Swamy Temple - one of the 12 Jyotirlingas",
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
    dressCode: "Traditional attire preferred. Men: Dhoti/Pants with shirt. Women: Saree/Salwar Kameez",
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
        description: "Temple administration conducts religious discourses and rituals",
      },
      {
        name: "Bhramaramba Devi Peetham",
        address: "Temple Complex, Srisailam",
        distance: "0.1 km",
        description: "Shakti Peetha with special pujas and spiritual guidance",
      },
    ],
  },
  "assam-kamrup-kamakhya-temple": {
    id: "assam-kamrup-kamakhya-temple",
    name: "Kamakhya Temple",
    history:
      "One of the oldest Shakti Peethas, dating back to 8th-17th century. Rebuilt by Koch king Nara Narayana in 1565 after destruction. The temple has been a center of Tantric practices for centuries and is mentioned in several ancient texts including the Kalika Purana.",
    significance:
      "One of the 51 Shakti Peethas where Sati's womb fell. Famous for Ambubachi Mela celebrating the goddess's menstruation. The temple is the most important pilgrimage destination for Tantric worshippers and attracts millions during the annual Ambubachi festival.",
    about:
      "Kamakhya Temple is one of the oldest and most revered centers of Tantric practices in India, located on Nilachal Hill in Guwahati, Assam. The temple is dedicated to Goddess Kamakhya, a form of Shakti. Unlike other temples, there is no idol here - the goddess is worshipped in the form of a yoni (female reproductive organ), symbolizing the power of creation. The temple architecture represents the distinctive Nilachal style, with its beehive-shaped shikhara.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=1200",
        alt: "Kamakhya Temple exterior",
        caption: "The unique beehive-shaped dome of Kamakhya Temple",
      },
    ],
    address: {
      street: "Nilachal Hill",
      city: "Guwahati",
      district: "Kamrup",
      state: "Assam",
      pincode: "781010",
      landmark: "Nilachal Hill, West of Guwahati",
    },
    coordinates: {
      latitude: 26.1664,
      longitude: 91.7052,
    },
    timings: "5:30 AM - 10:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "October to March (Avoid Ambubachi period in June unless attending the festival)",
    dressCode: "Modest traditional attire",
    nearbyAttractions: [
      "Basistha Temple",
      "Umananda Temple",
      "Navagraha Temple",
      "Assam State Museum",
    ],
    yogaCenters: [
      {
        name: "Shakti Yoga Ashram",
        address: "Near Nilachal Hill, Guwahati",
        distance: "2 km",
        rating: 4.4,
        description:
          "Traditional ashram offering Tantra yoga and meditation practices",
      },
      {
        name: "Kamakhya Wellness Center",
        address: "GS Road, Guwahati",
        distance: "5 km",
        rating: 4.2,
        description: "Modern yoga center with traditional roots",
      },
    ],
    foodCenters: [
      {
        name: "Temple Prasad Bhavan",
        address: "Kamakhya Temple Complex",
        distance: "0.1 km",
        rating: 4.6,
        description: "Traditional Assamese prasadam and meals",
      },
      {
        name: "Paradise Restaurant",
        address: "GS Road, Guwahati",
        distance: "4 km",
        rating: 4.4,
        description:
          "Vegetarian restaurant serving North-East Indian cuisine",
      },
    ],
    spiritualTeachers: [
      {
        name: "Kamakhya Tantric School",
        address: "Near Temple Complex, Nilachal",
        distance: "0.5 km",
        description:
          "Ancient school teaching Tantric practices and rituals",
      },
      {
        name: "Sri Shakti Peetham",
        address: "Bhootnath, Guwahati",
        distance: "3 km",
        description: "Spiritual center for Shakti worship and learning",
      },
    ],
  },
  "bihar-gaya-mahabodhi-temple": {
    id: "bihar-gaya-mahabodhi-temple",
    name: "Mahabodhi Temple",
    history:
      "Built by Emperor Ashoka in 260 BCE, marks where Buddha attained enlightenment under the Bodhi Tree around 531 BCE. The temple has been rebuilt and restored several times, with major restorations during the Gupta period and by the British in the 19th century.",
    significance:
      "UNESCO World Heritage Site. Most sacred Buddhist pilgrimage site. The original Bodhi Tree's descendant still stands. This is one of the four most important pilgrimage sites for Buddhists around the world.",
    about:
      "The Mahabodhi Temple Complex at Bodh Gaya is one of the four holy sites related to the life of Buddha, and particularly to the attainment of Enlightenment. The first temple was built by Emperor Ashoka in the 3rd century BCE. The current temple dates from the 5th-6th century CE. The temple complex includes the Vajrasana (diamond throne), the sacred Bodhi Tree, animated figures, and votive stupas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1591018653367-3a3f0e3b89f6?w=1200",
        alt: "Mahabodhi Temple",
        caption: "The sacred Mahabodhi Temple at Bodh Gaya",
      },
    ],
    address: {
      street: "Bodh Gaya",
      city: "Bodh Gaya",
      district: "Gaya",
      state: "Bihar",
      pincode: "824231",
      landmark: "Main Temple Complex",
    },
    coordinates: {
      latitude: 24.6961,
      longitude: 84.9911,
    },
    timings: "5:00 AM - 9:00 PM",
    entryFee: "Free (Camera fee applicable)",
    bestTimeToVisit: "October to March",
    dressCode: "Modest attire, remove shoes before entering",
    nearbyAttractions: [
      "Bodhi Tree",
      "Great Buddha Statue",
      "Thai Monastery",
      "Japanese Temple",
      "Sujata Stupa",
    ],
    yogaCenters: [
      {
        name: "Root Institute",
        address: "Bodh Gaya",
        distance: "1 km",
        rating: 4.7,
        description:
          "Buddhist meditation center offering courses and retreats",
      },
      {
        name: "Tergar Monastery",
        address: "Bodh Gaya",
        distance: "2 km",
        rating: 4.8,
        description:
          "Tibetan Buddhist center with meditation programs",
      },
    ],
    foodCenters: [
      {
        name: "Om Restaurant",
        address: "Near Mahabodhi Temple, Bodh Gaya",
        distance: "0.3 km",
        rating: 4.3,
        description: "Vegetarian restaurant serving Indian and Tibetan food",
      },
      {
        name: "Fujiya Green",
        address: "Bodh Gaya Main Road",
        distance: "0.5 km",
        rating: 4.5,
        description: "Japanese-Indian fusion vegetarian cuisine",
      },
    ],
    spiritualTeachers: [
      {
        name: "International Meditation Centre",
        address: "Bodh Gaya",
        distance: "1 km",
        description:
          "Vipassana meditation center with regular courses",
      },
      {
        name: "Thai Monastery",
        address: "Bodh Gaya",
        distance: "0.8 km",
        description: "Theravada Buddhist teachings and meditation",
      },
    ],
  },
};

// Default recommendations for temples without specific data
export const defaultYogaCenters = [
  {
    name: "Local Yoga Center",
    address: "Near Temple Premises",
    distance: "1-2 km",
    description: "Traditional yoga and meditation classes available",
  },
];

export const defaultFoodCenters = [
  {
    name: "Temple Prasadam",
    address: "Temple Complex",
    distance: "Within premises",
    description: "Traditional prasadam available for devotees",
  },
  {
    name: "Local Vegetarian Restaurant",
    address: "Near Temple",
    distance: "0.5 km",
    description: "Pure vegetarian meals available",
  },
];

export const defaultSpiritualTeachers = [
  {
    name: "Temple Priests",
    address: "Temple Complex",
    distance: "Within premises",
    description:
      "Temple priests available for guidance on rituals and spiritual practices",
  },
];
