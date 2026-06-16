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
import borraCavesTemple1 from "@/shared/assets/alluri sitharama raju/borra-caves-shiva-temple-1.jpg";
import borraCavesTemple2 from "@/shared/assets/alluri sitharama raju/borra-caves-shiva-temple-2.jpg";
import venkatadriSwamyTemple from "@/shared/assets/alluri sitharama raju/sri-alluri-venkatadri-swamy-temple.jpg";
import paderuShrine1 from "@/shared/assets/alluri sitharama raju/local-paderu-shrine-temple-1.jpg";
import paderuShrine2 from "@/shared/assets/alluri sitharama raju/local-paderu-shrine-temple-2.jpg";
import nookambika1 from "@/shared/assets/anakapalli/sri-nookambika-ammavari-temple-1.jpg";
import nookambika2 from "@/shared/assets/anakapalli/sri-nookambika-ammavari-temple-2.jpg";
import panchadarlaTemple from "@/shared/assets/anakapalli/panchadarla-temple.jpg";
import gowriParameswarTemple from "@/shared/assets/anakapalli/gowri-parameswar-temple.jpg";
import anakapalliVenkateswara1 from "@/shared/assets/anakapalli/sri-venkateswara-swamy-temple-1.jpg";
import anakapalliVenkateswara2 from "@/shared/assets/anakapalli/sri-venkateswara-swamy-temple-2.jpg";
import maridimamba1 from "@/shared/assets/anakapalli/sri-maridimamba-temple-1.jpg";
import maridimamba2 from "@/shared/assets/anakapalli/sri-maridimamba-temple-2.jpg";
import kasiVisweswara1 from "@/shared/assets/anakapalli/kasi-visweswara-temple-1.jpg";
import kasiVisweswara2 from "@/shared/assets/anakapalli/kasi-visweswara-temple-2.jpg";
import kanyakaParameswari1 from "@/shared/assets/anakapalli/sri-kanyaka-parameswari-temple-1.jpg";
import kanyakaParameswari2 from "@/shared/assets/anakapalli/sri-kanyaka-parameswari-temple-2.jpg";
import bojjannakonda1 from "@/shared/assets/anakapalli/bojjannakonda-temple-1.jpg";
import bojjannakonda2 from "@/shared/assets/anakapalli/bojjannakonda-temple-2.jpg";
import veerabhadra1 from "@/shared/assets/ananthapuramu/veerabhadra-swamy-temple-1.jpg";
import veerabhadra2 from "@/shared/assets/ananthapuramu/veerabhadra-swamy-temple-2.jpg";
import pennahobilam1 from "@/shared/assets/ananthapuramu/pennahobilam-lakshmi-narasimha-swamy-temple-1.jpg";
import pennahobilam2 from "@/shared/assets/ananthapuramu/pennahobilam-lakshmi-narasimha-swamy-temple-2.jpg";
import buggaRamalingeswara1 from "@/shared/assets/ananthapuramu/bugga-ramalingeswara-swamy-temple-1.jpg";
import buggaRamalingeswara2 from "@/shared/assets/ananthapuramu/bugga-ramalingeswara-swamy-temple-2.jpg";
import kadiriNarasimha1 from "@/shared/assets/ananthapuramu/kadiri-lakshmi-narasimha-swamy-temple-1.jpg";
import kadiriNarasimha2 from "@/shared/assets/ananthapuramu/kadiri-lakshmi-narasimha-swamy-temple-2.jpg";
import iskconAnantapur1 from "@/shared/assets/ananthapuramu/iskcon-temple-1.jpg";
import iskconAnantapur2 from "@/shared/assets/ananthapuramu/iskcon-temple-2.jpg";
import hemavathiComplex from "@/shared/assets/ananthapuramu/hemavathi-temple-complex.jpg";
import guguduKullaiSwamy from "@/shared/assets/ananthapuramu/gugudu-kullai-swamy-devasthanam.jpg";

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

// Sample detailed temple data - in production this would come from an API
export const templeDetailsData: Record<string, TempleDetails> = {
  "andhra-pradesh-ananthapuramu-veerabhadra-swamy-temple": {
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
        caption: "The Vijayanagara-style stone architecture of Veerabhadra Swamy Temple, Lepakshi",
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
    bestTimeToVisit: "Early morning for peaceful darshan; winter months (October to February) for comfortable weather",
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
  },
  "andhra-pradesh-ananthapuramu-pennahobilam-lakshmi-narasimha-swamy-temple": {
    id: "andhra-pradesh-ananthapuramu-pennahobilam-lakshmi-narasimha-swamy-temple",
    name: "Pennahobilam Lakshmi Narasimha Swamy Temple",
    history:
      "The temple's origins are believed to date back several centuries, with strong links to the Vijayanagara Empire, which played a major role in developing many temples across Andhra Pradesh. According to legend, after slaying the demon king Hiranyakashipu, Lord Narasimha's intense energy spread across different regions, and Pennahobilam is believed to be one of the places where his divine presence manifested. The name 'Pennahobilam' is derived from 'Penna' (referring to the Pennar River) and 'Ahobilam' (the sacred site of Narasimha), signifying it as a southern extension of the famous Ahobilam Temple. Its historical timeline spans temple construction and patronage by regional rulers in the medieval period, architectural enhancements during the Vijayanagara era (14th–16th century), and maintenance by local devotees and pilgrims in the modern period. The architecture reflects traditional South Indian style with simple yet spiritually powerful design elements.",
    significance:
      "The temple holds deep spiritual importance for devotees of Lord Narasimha. Worshipping here is believed to remove fear and negativity; devotees seek protection, courage, and prosperity, and the presence of Lakshmi signifies wealth and well-being. Daily poojas and archana are performed, with special rituals during Narasimha Jayanti, and offerings include coconuts, flowers, and prasadam. Devotees visit to overcome obstacles and life challenges, for mental peace and spiritual growth, and to fulfill wishes and seek divine blessings. The temple is an important spiritual center in the Anantapur region, attracting local devotees and pilgrims especially during festivals.",
    about:
      "The Pennahobilam Lakshmi Narasimha Swamy Temple is a revered Hindu shrine dedicated to Lord Narasimha, the fierce incarnation of Lord Vishnu. The temple is uniquely situated on a rocky hill near the banks of the Pennar River, giving it both spiritual and scenic significance. The main deity, Lakshmi Narasimha Swamy, is worshipped along with Goddess Lakshmi, symbolizing protection, prosperity, and divine power. What makes this temple special is the belief that it represents one of the sacred forms of Narasimha associated with the famous Ahobilam temples. Devotees visit seeking relief from fears, obstacles, and negative influences. The calm surroundings, combined with the temple's spiritual aura, make it a peaceful destination for both pilgrims and travelers, featuring a hilltop view, pillars and mandapam, and traditional carvings around the sanctum.",
    images: [
      {
        url: pennahobilam1,
        alt: "Pennahobilam Lakshmi Narasimha Swamy Temple gopuram",
        caption: "The hilltop gopuram and steps of Pennahobilam Lakshmi Narasimha Swamy Temple",
      },
      {
        url: pennahobilam2,
        alt: "Lakshmi Narasimha Swamy idol",
        caption: "The idol of Lakshmi Narasimha Swamy decorated with flowers and ornaments",
      },
    ],
    address: {
      street: "Pennahobilam Village, Uravakonda Mandal",
      city: "Uravakonda",
      district: "Ananthapuramu",
      state: "Andhra Pradesh",
      pincode: "515812",
      landmark: "On a rocky hill near the Pennar River",
    },
    coordinates: {
      latitude: 14.93,
      longitude: 77.25,
    },
    timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12:30 PM, Evening: 4 PM – 8 PM)",
    entryFee: "Free entry for all devotees (special poojas on auspicious days)",
    bestTimeToVisit: "Early morning for peaceful darshan; evenings for scenic views; Narasimha Jayanti is especially vibrant",
    dressCode:
      "Traditional attire recommended. Men: dhoti, kurta, or full pants with shirt. Women: saree, salwar kameez, or traditional wear. Avoid shorts, sleeveless tops, and revealing clothing.",
    nearbyAttractions: [
      "Pennar River",
      "Uravakonda",
      "Anantapur",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-ananthapuramu-bugga-ramalingeswara-swamy-temple": {
    id: "andhra-pradesh-ananthapuramu-bugga-ramalingeswara-swamy-temple",
    name: "Bugga Ramalingeswara Swamy Temple",
    history:
      "The temple dates back to the 15th–16th century and was built during the reign of the powerful Vijayanagara Empire. It is believed to have been constructed by local governors or chieftains under the Vijayanagara rulers, in Vijayanagara architectural style similar to temples in Hampi, designed with highly detailed carvings depicting gods and goddesses, mythological stories, and floral and geometric patterns. According to local belief, the temple is associated with Lord Rama, who is said to have installed the Shiva Lingam during his exile (Vanavas) — the name 'Ramalingeswara' reflects this connection. Its timeline spans temple construction beginning under Vijayanagara rule in the 15th century, expansion and sculptural enhancements in the 16th century, and minor restorations with continued worship in later years. It stands today as a protected heritage structure and a symbol of South Indian temple artistry.",
    significance:
      "The temple holds deep spiritual importance among devotees of Lord Shiva. The natural water spring beneath the Lingam is believed to be divinely originated, and worship here is said to bring peace and prosperity, remove obstacles, and fulfill wishes. Rituals and traditions include Abhishekam (ritual bathing of the deity), Rudrabhishekam and special Shiva poojas, and Maha Shivaratri celebrations that attract large crowds. The temple is not only a religious site but also a cultural landmark representing Vijayanagara art and architecture, regional devotion to Lord Shiva, and traditional temple rituals of Andhra Pradesh.",
    about:
      "The Bugga Ramalingeswara Swamy Temple is a magnificent and historically rich Hindu temple dedicated to Lord Shiva, located in the town of Tadipatri. Known for its stunning architecture and spiritual ambiance, the temple is one of the finest examples of Vijayanagara-style craftsmanship in South India. The presiding deity, Lord Ramalingeswara (a form of Lord Shiva), is worshipped here in the form of a Shiva Lingam. What makes this temple unique is the presence of a natural underground water spring ('Bugga') beneath the Shiva Lingam, from which water continuously flows — a phenomenon considered highly sacred that symbolizes purity and divine energy. The temple is famous for its intricate stone carvings and sculptures, majestic gopuram (tower), the sacred water spring beneath the deity, and its peaceful riverside setting near the Penna River. It attracts devotees, history lovers, and architecture enthusiasts alike.",
    images: [
      {
        url: buggaRamalingeswara1,
        alt: "Bugga Ramalingeswara Swamy Temple aerial view",
        caption: "Aerial view of the Vijayanagara-style Bugga Ramalingeswara Swamy Temple, Tadipatri",
      },
      {
        url: buggaRamalingeswara2,
        alt: "Bugga Ramalingeswara Temple stone structure",
        caption: "The intricately carved stone gateway of the temple at sunset",
      },
    ],
    address: {
      street: "Bugga Ramalingeswara Swamy Temple, Tadipatri Town",
      city: "Tadipatri",
      district: "Ananthapuramu",
      state: "Andhra Pradesh",
      pincode: "515411",
      landmark: "Near the Penna River",
    },
    coordinates: {
      latitude: 14.908,
      longitude: 78.0105,
    },
    timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
    entryFee: "Free entry for all devotees (special poojas during festivals)",
    bestTimeToVisit: "Early morning (peaceful and less crowded); evening aarti time; winter months (October to February) for comfortable weather",
    dressCode:
      "Traditional and modest attire. Men: dhoti, kurta, or formal wear. Women: saree, salwar kameez, or traditional dress. Avoid shorts, sleeveless tops, and revealing clothing.",
    nearbyAttractions: [
      "Penna River",
      "Tadipatri Railway Station",
      "Chintala Venkataramana Temple",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-ananthapuramu-kadiri-lakshmi-narasimha-swamy-temple": {
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
        caption: "The self-manifested idol of Lord Lakshmi Narasimha Swamy adorned with garlands",
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
    timings: "5:30 AM - 8:30 PM (Morning: 5:30 AM – 1 PM, Evening: 4:30 PM – 8:30 PM)",
    entryFee: "No general entry fee; special seva/darshan tickets may range between ₹50 – ₹300",
    bestTimeToVisit: "Early morning for peaceful darshan; evening aarti time for spiritual ambiance; Brahmotsavam and Narasimha Jayanti festivals",
    dressCode:
      "Traditional and modest attire. Men: dhoti, kurta, or formal wear. Women: saree or salwar kameez. Avoid shorts, sleeveless tops, or revealing clothes.",
    nearbyAttractions: [
      "Kadiri town",
      "Kadiri Railway Station",
      "Anantapur",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-ananthapuramu-iskcon-temple": {
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
        caption: "The ISKCON temple beautifully illuminated with festive lighting",
      },
      {
        url: iskconAnantapur2,
        alt: "ISKCON Temple complex at night",
        caption: "The ISKCON temple complex with decorative horse statues lit up at night",
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
    timings: "4:30 AM - 8:30 PM (Mangala Aarti: 4:30 AM, Morning Darshan: 7 AM – 12:30 PM, Evening Darshan: 4:30 PM – 8:30 PM)",
    entryFee: "Free entry for all visitors (donations accepted but not mandatory)",
    bestTimeToVisit: "Early morning (Mangala Aarti) for a spiritual experience; evening aarti for a peaceful atmosphere; Janmashtami is highly vibrant",
    dressCode:
      "Modest and traditional attire. Men: kurta-pajama or full pants with shirt. Women: saree, salwar kameez, or long dresses. Avoid shorts, sleeveless tops, short skirts, and tight or revealing clothing.",
    nearbyAttractions: [
      "Anantapur city",
      "NH44 Highway",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-ananthapuramu-hemavathi-temple-complex": {
    id: "andhra-pradesh-ananthapuramu-hemavathi-temple-complex",
    name: "Hemavathi Temple Complex",
    history:
      "The Hemavathi Temple Complex dates back to the 8th–10th century CE and was built during the reign of the Nolamba Dynasty, who ruled parts of present-day Karnataka and Andhra Pradesh. It was constructed by the Nolamba rulers, especially under King Iriva Nolamba, and Hemavathi (ancient Henjeru) served as the capital of the Nolamba dynasty. The temples are believed to be dedicated to Lord Shiva in various forms, symbolizing cosmic creation and destruction, and local legends suggest the site was once a major spiritual learning center. Its historical timeline spans initial temple constructions in the 8th century, expansion of the temple complex under the Nolambas in the 9th–10th century, influence of the Cholas and Vijayanagara Empire post 10th century, and protection and maintenance by the Archaeological Survey of India (ASI) in the modern era. Architecturally, it blends Dravidian and early Chalukyan styles with detailed carvings of mythological figures, deities, and floral and geometric patterns.",
    significance:
      "The Hemavathi Temple Complex holds deep spiritual importance, especially for devotees of Lord Shiva. It represents multiple forms of Shiva worship and is considered a powerful place for meditation and spiritual energy. Devotees believe prayers here bring peace of mind, removal of obstacles, and fulfillment of wishes. Rituals include daily Shiva pooja, with special rituals during Mahashivratri and Karthika Masam. Culturally, the complex reflects ancient South Indian temple culture and acts as a historical and spiritual landmark in the region.",
    about:
      "The Hemavathi Temple Complex is an ancient and architecturally significant group of temples located in the village of Hemavathi. This complex is known for its historical richness, intricate carvings, and spiritual importance, making it a hidden gem for both devotees and history enthusiasts. The primary deity worshipped here is Lord Shiva, along with several other deities such as Durga, Vishnu, and Ganapati housed in different shrines within the complex. One of the prominent temples in the complex is dedicated to Lord Doddeshwara (a form of Shiva). The complex is famous for its Dravidian architectural style, intricately carved stone pillars and sculptures, a collection of over 20 ancient temples in one location, and being an important Shaivite pilgrimage site. Overall, it offers a peaceful spiritual environment combined with a rich historical backdrop.",
    images: [
      {
        url: hemavathiComplex,
        alt: "Hemavathi Temple Complex",
        caption: "The ancient stone temple complex of Hemavathi with its Nolamba-era architecture",
      },
    ],
    address: {
      street: "Hemavathi Village, Amarapuram Mandal",
      city: "Amarapuram",
      district: "Ananthapuramu",
      state: "Andhra Pradesh",
      pincode: "515281",
      landmark: "Near Amarapuram (~15 km)",
    },
    coordinates: {
      latitude: 13.79,
      longitude: 77.27,
    },
    timings: "6:00 AM - 7:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 7 PM)",
    entryFee: "Free entry (ASI-protected site)",
    bestTimeToVisit: "Early morning for peaceful darshan; winter months (October to February) for comfortable weather",
    dressCode:
      "No strict enforced dress code, but traditional and modest attire is encouraged. Men: kurta-pajama, dhoti, or full pants. Women: saree, salwar suit, or traditional wear. Avoid shorts, sleeveless tops, and revealing outfits.",
    nearbyAttractions: [
      "Amarapuram",
      "Hindupur",
      "Over 20 ancient temples in the complex",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-ananthapuramu-gugudu-kullai-swamy-devasthanam": {
    id: "andhra-pradesh-ananthapuramu-gugudu-kullai-swamy-devasthanam",
    name: "Gugudu Kullai Swamy Devasthanam",
    history:
      "The origins of Gugudu Kullai Swamy Temple are primarily rooted in local folklore and oral traditions, rather than documented historical records. It is believed that Kullai Swamy was a spiritual figure or saint who lived in this region centuries ago; after his lifetime, devotees started worshipping him due to the miracles and divine experiences associated with him. Villagers believe Kullai Swamy had divine healing powers, with many stories suggesting he helped people overcome illness and hardship, and some consider him a guardian deity of the region. Its development timeline began as a small shrine or samadhi (resting place), gradually developed into a temple by local devotees, with renovations and expansions done over time through community contributions. Unlike temples built by dynasties like the Vijayanagara Empire, this temple reflects folk religion and local devotion, which is equally important in India's spiritual landscape.",
    significance:
      "Gugudu Kullai Swamy Temple holds a strong spiritual connection with local communities. Devotees believe Kullai Swamy grants health recovery, protection from evil, and success in personal life. Rituals and traditions include offering coconuts and flowers, lighting lamps, and special prayers during village festivals. People visit to seek blessings for healing and protection, to fulfill wishes and vows, and for inner peace and spiritual connection. Culturally, the temple represents rural devotional practices, faith-based healing traditions, and community unity through festivals, playing a vital role in preserving local spiritual identity in Andhra Pradesh.",
    about:
      "Gugudu Kullai Swamy Devasthanam is a revered spiritual site located in the rural region of Anantapur district. The temple is dedicated to Kullai Swamy, a locally worshipped saint-like deity believed to be an incarnation or devotee blessed by Lord Shiva or associated with divine spiritual powers. Unlike large, highly commercialized temples, this temple holds a deep grassroots spiritual importance, especially among villagers and devotees from nearby regions. It is known for its peaceful atmosphere, simple structure, and strong belief system rooted in faith and miracles. The temple is particularly famous for fulfilling devotees' wishes, healing-related beliefs, local festivals and gatherings, and strong rural devotional culture. Devotees visit this temple seeking blessings for health, prosperity, and mental peace.",
    images: [
      {
        url: guguduKullaiSwamy,
        alt: "Gugudu Kullai Swamy Devasthanam deity",
        caption: "The decorated shrine of Kullai Swamy adorned with garlands and offerings",
      },
    ],
    address: {
      street: "Gugudu Village, Near Guntakal Region",
      city: "Gugudu",
      district: "Ananthapuramu",
      state: "Andhra Pradesh",
      pincode: "515001",
      landmark: "Near Guntakal (~20–30 km)",
    },
    coordinates: {
      latitude: 15.15,
      longitude: 77.63,
    },
    timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
    entryFee: "Free entry (special pooja conducted by local priests on festival days)",
    bestTimeToVisit: "Early morning for peaceful darshan; festival days (Amavasya, full moon, village festivals) for a cultural experience",
    dressCode:
      "Traditional and respectful attire. Men: shirt and trousers or dhoti. Women: saree or salwar suit. Avoid shorts, sleeveless outfits, and inappropriate or revealing clothes.",
    nearbyAttractions: [
      "Guntakal",
      "Guntakal Junction",
      "Anantapur",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-sri-nookambika-ammavari-temple": {
    id: "andhra-pradesh-anakapalli-sri-nookambika-ammavari-temple",
    name: "Sri Nookambika Ammavari Temple",
    history:
      "The exact origin of Sri Nookambika Temple is not precisely documented, but it is believed to be several centuries old, deeply rooted in local traditions and folklore. The temple evolved as a Gramadevata shrine, later expanding into a well-structured temple complex. Unlike royal temples built by major dynasties, this temple grew primarily through community devotion and regional patronage; over time it received support from local rulers and devotees, leading to renovations and expansions. According to local legend, Goddess Nookambika appeared to protect the region from diseases, natural calamities, and evil forces, manifesting herself in Anakapalle to safeguard the people and ensure prosperity. Its historical evolution spans ancient origins as a local village deity shrine, gradual medieval expansion with regional support, continued worship and preservation through the colonial era, and development into a major pilgrimage center with improved infrastructure in the modern era.",
    significance:
      "Sri Nookambika Ammavari Temple is an important center of Shakti worship in Andhra Pradesh. The deity, Nookambika Ammavaru, is believed to be a manifestation of Goddess Parvati, symbolizing protection, strength, and prosperity, and is worshipped as the guardian deity (Gramadevata) and protector of villages and remover of obstacles. She is regarded as a 'wish-fulfilling deity' who responds quickly to sincere prayers. Devotees visit seeking family well-being, protection from negative energies, and fulfillment of wishes and prosperity. The temple is renowned for the grand annual Nookambika Jatara festival, which attracts thousands and preserves local traditions and devotional practices.",
    about:
      "Sri Nookambika Ammavari Temple is a prominent and deeply revered Hindu temple located in Anakapalle town of Andhra Pradesh. The temple is dedicated to Goddess Nookambika Devi, a powerful form of Shakti (Divine Mother) worshipped by locals as the guardian deity (Gramadevata) of the region. The deity holds immense importance among devotees, especially in coastal Andhra Pradesh, where she is considered the protector of villages and remover of obstacles. The temple is widely known for its strong local and regional devotion, the grand annual Nookambika Jatara festival, and being a major center for Shakti worship. The temple complex features a sanctum (garbhagriha), prayer halls and mandapam, and traditional decorations and lighting.",
    images: [
      {
        url: nookambika1,
        alt: "Sri Nookambika Ammavari Temple exterior",
        caption: "The golden temple structure of Sri Nookambika Ammavari Temple",
      },
      {
        url: nookambika2,
        alt: "Goddess Nookambika Ammavaru idol",
        caption: "The idol of Goddess Nookambika Ammavaru with sacred offerings",
      },
    ],
    address: {
      street: "Sri Nookambika Ammavari Temple",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Near Anakapalle Railway Station",
    },
    coordinates: {
      latitude: 17.6916,
      longitude: 83.0062,
    },
    timings: "5:00 AM - 9:00 PM (Morning Darshan: 5 AM – 12:30 PM, Evening Darshan: 4 PM – 9 PM)",
    entryFee: "General Darshan: Free (Special sevas/poojas: charges vary by ritual)",
    bestTimeToVisit: "Early morning for peaceful darshan; during the Nookambika Jatara festival for a vibrant experience",
    dressCode:
      "Modest and respectful attire. Men: dhoti or simple formal clothing. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and revealing or casual western outfits.",
    nearbyAttractions: [
      "Anakapalle town",
      "Visakhapatnam",
      "Anakapalle Railway Station",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-panchadarla-temple": {
    id: "andhra-pradesh-anakapalli-panchadarla-temple",
    name: "Panchadarla Temple",
    history:
      "The origins of Panchadarla Temple are ancient, though exact construction dates are not precisely documented. It is believed that the temple has existed for several centuries and was developed under regional dynasties that promoted Shaivism in the region. Architectural elements suggest influence from the Eastern Ganga Dynasty and Chalukyan-style temple architecture. Over time, the temple has undergone minor renovations while retaining its traditional structure. According to local legends, the five sacred streams originated from the blessings of Lord Shiva and represent five holy elements or sacred rivers; another belief states that sages and saints performed penance here, making the place spiritually charged. The timeline spans an ancient era associated with sages and spiritual practices, establishment of the temple structure in the early medieval period, expansion under later dynasties, and management by local temple authorities in the modern era.",
    significance:
      "Panchadarla Temple is deeply revered for its natural and spiritual elements. Dedicated to Lord Shiva as Dharmalingeswara Swamy, it symbolizes the destruction of evil and transformation. What makes it unique is the presence of five natural water streams ('Pancha Dharalu') that continuously flow near the temple and are believed to have purifying powers. Devotees wash their hands and feet or bathe in the streams before entering, and offering prayers is believed to bring mental peace and relief from stress. Devotees visit to cleanse sins through the sacred water, for peace of mind and spiritual healing, and to seek blessings for health and family well-being. Special rituals are performed during Shivaratri.",
    about:
      "Panchadarla Temple, also known as Sri Dharmalingeswara Swamy Temple, is a serene and spiritually significant temple located near Anakapalle in Andhra Pradesh. Nestled amidst lush greenery and low hillocks, the temple is known for its peaceful environment and unique natural features. It is dedicated to Lord Shiva as Dharmalingeswara Swamy. What makes this temple unique is the presence of five natural water streams ('Pancha Dharalu') that continuously flow near the temple — these streams are believed to be sacred and are used for ritual purification before darshan. The temple is famous for its naturally flowing five water springs, its calm and less crowded spiritual atmosphere, and being an important local pilgrimage site that combines nature and spirituality. The temple features a simple yet traditional structure with stone carvings and a mandapam, housing the Shiva Lingam (Dharmalingeswara Swamy).",
    images: [
      {
        url: panchadarlaTemple,
        alt: "Panchadarla Temple entrance gopuram",
        caption: "The entrance of Panchadarla (Sri Dharmalingeswara Swamy) Temple surrounded by greenery",
      },
    ],
    address: {
      street: "Panchadarla Village, Near Anakapalle",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Panchadarla Village",
    },
    coordinates: {
      latitude: 17.6905,
      longitude: 83.0135,
    },
    timings: "6:00 AM - 7:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 7 PM)",
    entryFee: "General Entry: Free (Special poojas may have nominal charges)",
    bestTimeToVisit: "Early morning for peaceful darshan; during Mahashivratri for spiritual celebrations",
    dressCode:
      "Modest and traditional attire. Men: traditional wear or full pants with shirt. Women: saree, salwar kameez, or modest dress. Avoid shorts, sleeveless outfits, and revealing clothes.",
    nearbyAttractions: [
      "Anakapalle",
      "Scenic hills and forest backdrop",
      "Five sacred streams (Pancha Dharalu)",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-gowri-parameswar-temple": {
    id: "andhra-pradesh-anakapalli-gowri-parameswar-temple",
    name: "Gowri Parameswar Temple",
    history:
      "The exact origin of Gowri Parameswar Temple is not precisely documented, but it is believed to be an ancient temple with roots in regional devotional traditions. Many such Shiva-Parvati temples in Andhra Pradesh date back several centuries and were often established by local rulers, devotee communities, and regional dynasties supporting Shaivism. The temple has likely undergone renovations over time, maintaining its religious importance for the local population. It reflects Dravidian-style architecture common in South Indian temples and has been a center for local religious gatherings and festivals, maintained and supported by devotees and temple authorities over generations. Its timeline spans initial establishment in the ancient/medieval period (exact date unknown), renovations and local patronage in later periods, and an active place of worship with regular rituals and festivals in the present.",
    significance:
      "Gowri Parameswar Temple holds deep spiritual meaning as it represents the divine union of Shiva and Shakti. According to Hindu belief, the union of Lord Shiva and Goddess Parvati represents eternal love and devotion, the balance of masculine and feminine energies, and the source of creation and protection. Worshipping Gowri and Parameswara together is believed to remove obstacles in marriage, strengthen relationships, and bring harmony in family life. The temple symbolizes the balance of cosmic energies, is considered auspicious for couples and newlyweds, and strengthens marital and family bonds. Special rituals include Abhishekam (ritual bathing of the Shiva Lingam) and Archana, with major celebrations during Mahashivratri, Karthika Masam, and Navratri.",
    about:
      "Gowri Parameswar Temple is a revered Hindu shrine dedicated to the divine couple Lord Shiva (Parameswara) and Goddess Parvati (Gowri). Located in the culturally rich region of Anakapalle district, the temple is known for its peaceful atmosphere and deep spiritual significance among local devotees. The main deities worshipped are Lord Shiva in the form of a Shiva Lingam (Parameswara) and Goddess Gowri (Parvati), symbolizing divine feminine energy. The temple represents the sacred union of Shiva and Shakti, which signifies balance, creation, and cosmic harmony. It is especially famous for worship related to marriage blessings and family harmony, local festivals and traditional rituals, and its serene and less crowded spiritual environment. The temple reflects Dravidian-style architecture with pillared halls, a sanctum, traditional decorations and lamps, and a ritual setup during poojas.",
    images: [
      {
        url: gowriParameswarTemple,
        alt: "Gowri Parameswar Temple interior with carved pillars",
        caption: "The ornately carved pillared interior of Gowri Parameswar Temple",
      },
    ],
    address: {
      street: "Gowri Parameswar Temple",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Anakapalle / Visakhapatnam region",
    },
    coordinates: {
      latitude: 17.6868,
      longitude: 83.003,
    },
    timings: "5:30 AM - 8:30 PM (Morning: 5:30 AM – 12 PM, Evening: 4:30 PM – 8:30 PM)",
    entryFee: "General Entry: Free (Special poojas/archanas: nominal charges)",
    bestTimeToVisit: "Early morning for peaceful darshan; Mondays (auspicious for Lord Shiva) and festival days",
    dressCode:
      "Modest and traditional attire. Men: dhoti, kurta, or formal wear. Women: saree, salwar kameez, or traditional dress. Avoid shorts, sleeveless tops, and tight or revealing clothes.",
    nearbyAttractions: [
      "Anakapalle",
      "Visakhapatnam",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-sri-venkateswara-swamy-temple": {
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
        caption: "Devotees at the entrance of Sri Venkateswara Swamy Temple, Anakapalle",
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
    timings: "5:30 AM - 8:30 PM (Morning Darshan: 6 AM – 12 PM, Evening Darshan: 4 PM – 8:30 PM)",
    entryFee: "General Darshan: Free (Special sevas/poojas: charges vary by ritual)",
    bestTimeToVisit: "Early morning for peaceful darshan; weekdays to avoid crowd; festival days for vibrancy",
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
  },
  "andhra-pradesh-anakapalli-sri-maridimamba-temple": {
    id: "andhra-pradesh-anakapalli-sri-maridimamba-temple",
    name: "Sri Maridimamba Temple",
    history:
      "The exact historical origin of Sri Maridimamba Temple is not clearly documented, but it is believed to have existed for several centuries, rooted in folk traditions and local deity worship rather than royal patronage. Unlike large temple complexes built by dynasties, this temple evolved as a community-centered shrine, gradually expanding over time due to increasing devotion and local support. According to local legends, Goddess Maridimamba is believed to be a manifestation of Durga/Parvati, appearing to protect the region from epidemics and calamities; it is said that during times of disease outbreaks, villagers prayed to the goddess and relief followed, strengthening faith in her healing powers. Its historical growth went from a small shrine maintained by villagers to a proper temple structure, renovated and maintained by local temple authorities and devotees. The timeline spans folk deity worship in the ancient/early period, regional importance in the medieval period, and temple expansion with organized festivals in the modern era.",
    significance:
      "Sri Maridimamba Temple holds deep spiritual value as a guardian deity shrine. Goddess Maridimamba is worshipped as a form of Shakti (Divine Mother) and a Gramadevata (village deity), believed to protect devotees from illness and negative forces and central to local religious practices. Devotees offer coconuts, turmeric, kumkum, and sarees, with special rituals performed for health and protection (animal sacrifice was historically associated but is now largely discontinued or regulated). Devotees visit for protection from diseases, family safety and prosperity, fulfillment of vows (mannat), and emotional and spiritual peace. The Maridimamba Jatara is a major event attracting thousands of devotees and reflecting local traditions and community unity.",
    about:
      "Sri Maridimamba Temple is a highly revered local shrine dedicated to Goddess Maridimamba, a powerful form of Shakti (Divine Mother) worshipped as the protector and guardian deity of the region. The temple is located in the town of Anakapalle and holds deep cultural and spiritual importance among local communities. Goddess Maridimamba is considered a Gramadevata (village deity), believed to safeguard devotees from diseases, negative energies, and misfortunes, and is often associated with healing powers — worshipped with immense devotion, especially by rural and traditional families. The temple is widely known for its annual Jatara (festival), one of the biggest local religious events, strong community participation and devotion, and its role as a protector deity temple. The temple features a colorful, traditionally designed structure, a prayer hall and sanctum, and the idol of Goddess Maridimamba adorned with flowers and jewelry.",
    images: [
      {
        url: maridimamba1,
        alt: "Goddess Maridimamba idol",
        caption: "The idol of Goddess Maridimamba adorned with flowers and ornaments",
      },
      {
        url: maridimamba2,
        alt: "Sri Maridimamba Temple decorated entrance",
        caption: "The colorful temple entrance decorated during a festival",
      },
    ],
    address: {
      street: "Sri Maridimamba Temple, Anakapalle Town",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Near Anakapalle Railway Station",
    },
    coordinates: {
      latitude: 17.6868,
      longitude: 83.0088,
    },
    timings: "5:00 AM - 9:00 PM (Morning Darshan: 5 AM – 12 PM, Evening Darshan: 4 PM – 9 PM)",
    entryFee: "General Darshan: Free (Special poojas/offerings: charges vary)",
    bestTimeToVisit: "Early morning or evening for peaceful darshan; during Maridimamba Jatara for a cultural experience (expect heavy crowds)",
    dressCode:
      "Modest and respectful attire. Recommended: traditional Indian wear — saree, salwar kameez, kurta, dhoti. Avoid shorts and sleeveless or revealing clothes.",
    nearbyAttractions: [
      "Anakapalle town",
      "Visakhapatnam",
      "Anakapalle Railway Station",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-kasi-visweswara-temple": {
    id: "andhra-pradesh-anakapalli-kasi-visweswara-temple",
    name: "Kasi Visweswara Temple",
    history:
      "The exact origin date of the temple is not precisely documented, but it is believed to be an ancient shrine with regional historical roots, possibly developed and expanded during medieval South Indian dynasties such as the Eastern Chalukyas and later local rulers. Temples named 'Kasi Visweswara' across India are traditionally established to bring the sanctity of Varanasi's Kashi Vishwanath closer to devotees in different regions. According to Hindu belief, Lord Shiva as Visweswara represents the cosmic ruler and destroyer of ignorance, and worshipping Shiva in this form is believed to cleanse sins and lead toward moksha (liberation); it is said that praying here with devotion grants similar spiritual merit as visiting Kashi. Its development went from an early local Shiva shrine to gradual expansion by regional patrons and devotees, with renovations in recent decades to support growing pilgrim visits.",
    significance:
      "The temple holds deep spiritual value for devotees of Lord Shiva. It represents Lord Shiva as the universal protector and destroyer of evil, and is believed to grant peace, prosperity, and spiritual clarity, and is associated with the removal of negative karma and sins. Offering bilva leaves and milk during Abhishekam is considered highly auspicious, Monday prayers are especially powerful, and devotees perform Archana and Rudrabhishekam. Devotees visit to seek blessings for success and stability, relief from stress and obstacles, and spiritual purification and inner peace. It is an important local religious center in Anakapalle, with celebrations during Mahashivratri and Karthika Masam.",
    about:
      "Kasi Visweswara Temple in Anakapalle District is a revered shrine dedicated to Lord Shiva, worshipped here as Visweswara (the 'Lord of the Universe'). The name 'Kasi Visweswara' reflects a spiritual connection to the famous Kashi Vishwanath Temple in Varanasi, symbolizing that devotees can receive similar divine blessings without traveling far. The main deity is Lord Shiva (Visweswara Lingam), often accompanied by Goddess Parvati (Visalakshi/Parvati Devi) in associated shrines. The temple is known for its peaceful and sacred environment, strong local devotional following, and daily rituals and traditional Shiva worship. Especially popular during Mondays and Shiva-related festivals, it features an entrance gate with traditional South Indian design, a simple yet sacred structure, a mandapam with pillars, and the Shiva Lingam decorated with flowers, bilva leaves, and sacred offerings.",
    images: [
      {
        url: kasiVisweswara1,
        alt: "Kasi Visweswara Temple exterior with golden domes",
        caption: "The golden-domed structure of Kasi Visweswara Temple",
      },
      {
        url: kasiVisweswara2,
        alt: "Shiva Lingam at Kasi Visweswara Temple",
        caption: "The Shiva Lingam (Visweswara) decorated with flowers and offerings",
      },
    ],
    address: {
      street: "Kasi Visweswara Temple",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Near Anakapalle Railway Station",
    },
    coordinates: {
      latitude: 17.6868,
      longitude: 83.0087,
    },
    timings: "5:30 AM - 8:30 PM (Morning: 5:30 AM – 12 PM, Evening: 4:30 PM – 8:30 PM)",
    entryFee: "General Entry: Free (Special poojas/Abhishekam: nominal charges)",
    bestTimeToVisit: "Early morning for peaceful darshan; Mondays and Mahashivratri for spiritual significance",
    dressCode:
      "Modest attire expected. Men: traditional wear or modest formal clothing. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and inappropriate casual wear.",
    nearbyAttractions: [
      "Anakapalle",
      "Visakhapatnam",
      "Anakapalle Railway Station",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-sri-kanyaka-parameswari-temple": {
    id: "andhra-pradesh-anakapalli-sri-kanyaka-parameswari-temple",
    name: "Sri Kanyaka Parameswari Temple",
    history:
      "The origins of Sri Kanyaka Parameswari worship trace back to ancient times and are deeply rooted in the traditions of the Arya Vysya community. While the exact construction date of this specific temple in Anakapalle is not precisely documented, it is believed to have been established by local merchant communities who were devoted followers of the goddess. Over time, the temple has been renovated and maintained by local devotees, community trusts, and merchant guilds. According to legend, Goddess Kanyaka Parameswari was born as the daughter of a wealthy merchant named Kusuma Sreshti and was known for her beauty, wisdom, and devotion; when a powerful king wished to marry her against her will, she chose self-sacrifice (Agni Pravesham) to protect her honor and uphold dharma, manifesting her divine form as Goddess Parvati and blessing her followers — symbolizing strength of character, protection of dignity, and divine justice. The timeline spans the origin of the Kanyaka Parameswari legend in the ancient period, spread of worship among Vysya communities in the medieval era, temple construction by local traders in later years, and renovations with structured management in the modern era.",
    significance:
      "Sri Kanyaka Parameswari Temple holds deep spiritual value, particularly for the Arya Vysya community, who consider the goddess their kuladevi (family deity). The deity, a form of Goddess Parvati (Adi Shakti), symbolizes purity and divine feminine power, prosperity and protection, and self-sacrifice and righteousness. The goddess represents Shakti (divine energy), is seen as a protector of family and business prosperity, and is worshipped as a symbol of purity and sacrifice. Offering prayers ensures success in business ventures; devotees perform Archana, Kumkum pooja, and special offerings. Devotees visit for financial growth and stability, marriage blessings, protection from difficulties, and spiritual strength and peace. The temple is central to Arya Vysya traditions and festivals, with vibrant celebrations during Navratri.",
    about:
      "Sri Kanyaka Parameswari Temple is a revered Hindu temple dedicated to Goddess Kanyaka Parameswari, a form of Goddess Parvati (Adi Shakti). The temple holds immense significance, especially for the Arya Vysya community, who consider the goddess their kuladevi (family deity). The deity symbolizes purity and divine feminine power, prosperity and protection, and self-sacrifice and righteousness. The temple is widely known for its strong association with trade, business prosperity, and wealth blessings, being a spiritual center for the Vysya (trader) community, and its peaceful atmosphere and devotional activities. Devotees visit seeking blessings for business success, financial stability, and marriage and family well-being. The temple features an entrance gate with traditional architecture, a prayer hall and sanctum (garbhagriha), pillars and decorative elements, and the idol of Goddess Kanyaka Parameswari decorated with flowers, jewelry, and lamps.",
    images: [
      {
        url: kanyakaParameswari1,
        alt: "Sri Kanyaka Parameswari Temple gopuram",
        caption: "The traditional gopuram of Sri Kanyaka Parameswari Temple",
      },
      {
        url: kanyakaParameswari2,
        alt: "Goddess Kanyaka Parameswari Alankaram",
        caption: "The idol of Goddess Kanyaka Parameswari in festive alankaram",
      },
    ],
    address: {
      street: "Sri Kanyaka Parameswari Temple",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Near Anakapalle Railway Station",
    },
    coordinates: {
      latitude: 17.6916,
      longitude: 83.003,
    },
    timings: "6:00 AM - 8:30 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8:30 PM)",
    entryFee: "General Entry: Free (Special poojas/sevas: paid, varies by ritual)",
    bestTimeToVisit: "Early morning for peaceful darshan; during festivals like Navratri and Vysya community celebrations",
    dressCode:
      "Modest and traditional clothing. Men: shirt with trousers, or dhoti. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and revealing or casual western wear.",
    nearbyAttractions: [
      "Anakapalle town",
      "Visakhapatnam",
      "Anakapalle Railway Station",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-anakapalli-bojjannakonda-temple": {
    id: "andhra-pradesh-anakapalli-bojjannakonda-temple",
    name: "Bojjannakonda Temple",
    history:
      "Bojjannakonda dates back to the 4th–9th century CE, flourishing as a major Buddhist monastic center and an active hub for monks, scholars, and meditation practices. The site developed gradually under early local rulers and was later supported by the Eastern Chalukyas and regional dynasties. It reflects the transition of Buddhism: the Hinayana phase focused on symbolic worship (stupas), the Mahayana phase introduced Buddha idols, and Vajrayana influence brought tantric elements and complex carvings. Although primarily historical, local legends suggest the hills were once centers of intense meditation, and the name 'Bojjannakonda' may be derived from 'Buddhuni Konda' (Hill of Buddha). Its timeline spans initial Buddhist settlements in the 4th century CE, growth of monastic structures and stupas in the 5th–7th century, peak development with Mahayana influence in the 7th–9th century, decline of Buddhism in the region after the 9th century, and protection as a site under the Archaeological Survey of India (ASI) in the modern era.",
    significance:
      "Though no longer an active worship site, Bojjannakonda holds deep spiritual importance. It represents ancient Buddhist learning and meditation practices and symbolizes the evolution of Buddhist philosophy. Visitors often experience a sense of peace and calm, making it ideal for meditation and quiet reflection. People visit to explore Buddhist heritage, for meditation and mindfulness, and for historical and educational purposes. As an important part of Andhra Pradesh's Buddhist history, it attracts scholars, tourists, and international visitors, and shows the influence of ancient trade routes and cultural exchange.",
    about:
      "Bojjannakonda, located near the village of Sankaram in Anakapalle district, is an ancient Buddhist archaeological site rather than a conventional Hindu temple. It is one of the most significant Buddhist heritage sites in South India, known for its rock-cut caves, stupas, and monastic structures. The site consists of two adjacent hills — Bojjannakonda and Lingalakonda — and is associated with Lord Buddha and the teachings of Mahayana and Hinayana traditions. It is famous for housing rock-cut caves, stupas, and chaityas (prayer halls), displaying a blend of Hinayana, Mahayana, and Vajrayana Buddhism, a massive rock-cut seated Buddha statue, and scenic hilltop views with a peaceful spiritual atmosphere. It is an important destination for history lovers, spiritual seekers, and archaeology enthusiasts, featuring rock-cut caves used by monks, chaityas and viharas (monasteries), and circular stupas on the hilltop.",
    images: [
      {
        url: bojjannakonda1,
        alt: "Bojjannakonda Buddhist site aerial view",
        caption: "Aerial view of the Bojjannakonda Buddhist complex and its rock-cut structures",
      },
      {
        url: bojjannakonda2,
        alt: "Rock-cut Buddha statues at Bojjannakonda",
        caption: "The rock-cut seated Buddha statues carved into the hillside",
      },
    ],
    address: {
      street: "Bojjannakonda (Sankaram), Near Anakapalle",
      city: "Anakapalle",
      district: "Anakapalli",
      state: "Andhra Pradesh",
      pincode: "531001",
      landmark: "Sankaram village",
    },
    coordinates: {
      latitude: 17.685,
      longitude: 83.003,
    },
    timings: "9:00 AM - 5:00 PM (visiting timings)",
    entryFee: "Indian Citizens: ₹20 (approx.); Foreign Tourists: ₹250 (approx.); Children: free/minimal (managed by ASI; fees may change)",
    bestTimeToVisit: "Morning or late afternoon for pleasant weather; winter season (October–February) is ideal",
    dressCode:
      "No strict dress code, as it is an archaeological site. Recommended: comfortable, modest clothing and walking shoes (due to the hill climb). Avoid very short or revealing clothes for cultural respect.",
    nearbyAttractions: [
      "Lingalakonda",
      "Sankaram village",
      "Anakapalle",
      "Visakhapatnam",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-alluri-sitharama-raju-borra-caves-shiva-temple": {
    id: "andhra-pradesh-alluri-sitharama-raju-borra-caves-shiva-temple",
    name: "Borra Caves Shiva Temple",
    history:
      "The Borra Caves were documented in 1807 by British geologist William King George, though local tribal communities had known about the caves and worshipped the Shiva Lingam long before its official discovery. The temple was never constructed in the traditional sense — it evolved naturally as devotees began worshipping the stalagmite Shiva Lingam inside the cave. A popular legend says a cowherd lost his cow, which fell into a hole in the ground; when villagers searched, they discovered the cave and found a Shiva Lingam glowing inside, believed to be the divine presence of Lord Shiva. The site progressed from ancient tribal worship to documented discovery in 1807, development by Andhra Pradesh Tourism in the modern era, and is presently maintained as both a tourist attraction and spiritual site.",
    significance:
      "The Borra Caves Shiva Temple holds a unique place in spirituality because it represents nature itself as divine. The naturally formed Shiva Lingam is believed to be self-created (Swayambhu) by divine forces, with devotees offering prayers for protection, health, and peace of mind. Rock formations within the cave are believed to represent Shiva and Parvati, Kamadhenu (the divine cow), and Rishi figures. Local tribal communities continue their traditional worship practices, making it an important center of eco-spiritual tourism that blends folk beliefs with mainstream Hindu worship.",
    about:
      "The Borra Caves Shiva Temple, located inside the famous Borra Caves, is a unique spiritual site set within one of India's largest and deepest natural limestone caves. Nestled in the scenic Ananthagiri Hills of the Eastern Ghats, this temple combines natural wonder with divine significance. The main deity is Lord Shiva, represented in the form of a naturally formed Shiva Lingam (stalagmite formation). What makes the temple extraordinary is that the Lingam is not man-made but formed naturally over thousands of years due to mineral deposits, making it deeply revered as a self-manifested (Swayambhu) form of Lord Shiva. Its location inside a magnificent cave structure, the stunning limestone formations (stalactites and stalagmites), colorful lighting, and deep cavern views attract both devotees and tourists, making it a rare combination of pilgrimage and adventure destination.",
    images: [
      {
        url: borraCavesTemple1,
        alt: "Borra Caves interior with colorful lighting",
        caption: "The magnificent limestone cavern of Borra Caves illuminated with colorful lighting",
      },
      {
        url: borraCavesTemple2,
        alt: "Natural Shiva Lingam inside Borra Caves",
        caption: "The naturally formed (Swayambhu) Shiva Lingam worshipped inside the cave",
      },
    ],
    address: {
      street: "Borra Caves Road, Ananthagiri Hills, Araku Valley Mandal",
      city: "Araku Valley",
      district: "Alluri Sitharama Raju",
      state: "Andhra Pradesh",
      pincode: "531149",
      landmark: "Near Borra Guhalu Railway Station",
    },
    coordinates: {
      latitude: 18.2798,
      longitude: 83.0416,
    },
    timings: "10:00 AM - 5:00 PM (cave visiting hours)",
    entryFee: "Cave Entry Fee: ₹60–₹100 (approx.). Camera/Photography: Extra charges may apply",
    bestTimeToVisit: "October to March (pleasant weather); morning hours (10 AM – 1 PM) for less crowd",
    dressCode:
      "No strict dress code. Recommended: comfortable, modest clothing and shoes suitable for walking on uneven cave surfaces. Avoid slippery footwear and very short clothing.",
    nearbyAttractions: [
      "Araku Valley",
      "Ananthagiri Hills",
      "Borra Guhalu Railway Station",
      "Eastern Ghats viewpoints",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-alluri-sitharama-raju-sri-alluri-venkatadri-swamy-temple": {
    id: "andhra-pradesh-alluri-sitharama-raju-sri-alluri-venkatadri-swamy-temple",
    name: "Sri Alluri Venkatadri Swamy Temple",
    history:
      "The exact origin of the temple is not precisely documented, but it is believed to be several centuries old, rooted in local traditions and tribal devotion. The temple likely began as a small shrine maintained by local communities and later developed into a structured temple. Over time, it has been supported and maintained by local rulers and village heads, devotee contributions, and regional temple authorities. According to local legends, Lord Vishnu appeared in this region to protect devotees living in forest areas, and the deity is believed to be self-manifested (Swayambhu) or divinely established. Its historical evolution spans local shrine worship in the ancient/medieval period, gradual construction of the temple structure in later centuries, and renovations with improved access for pilgrims in the modern era.",
    significance:
      "This temple holds strong spiritual importance, especially among local tribal communities and devotees of Lord Vishnu. Devotees believe the deity fulfills immediate wishes (Mannat), offering special prayers for health recovery, financial stability, and family peace. Lord Venkatadri Swamy is worshipped as a form of Lord Vishnu who protects and sustains the universe, with devotees believing that worship here brings prosperity and wealth, relief from hardships, and fulfillment of wishes. The temple acts as a religious hub for nearby villages and strengthens cultural and spiritual unity in the region.",
    about:
      "Sri Alluri Venkatadri Swamy Temple is a revered Hindu temple located in the tribal and forest-rich region of Alluri Sitarama Raju District in Andhra Pradesh. Surrounded by the scenic beauty of the Eastern Ghats, the temple offers a peaceful and spiritually uplifting environment for devotees. It is dedicated to Lord Vishnu in the form of Venkatadri Swamy, a manifestation closely associated with Lord Venkateswara (Balaji). Known as a regional spiritual center for tribal and rural communities, it is believed to grant quick blessings and wish fulfillment, and its peaceful location amidst forests makes it ideal for meditation and devotion. The temple features a small sanctum (garbhagriha) with traditional design and local artistic influence, housing the idol of Lord Venkatadri Swamy decorated with flowers and traditional ornaments.",
    images: [
      {
        url: venkatadriSwamyTemple,
        alt: "Idol of Lord Venkatadri Swamy decorated with ornaments",
        caption: "The idol of Lord Venkatadri Swamy (Vishnu form) adorned with flowers and traditional ornaments",
      },
    ],
    address: {
      street: "Sri Alluri Venkatadri Swamy Temple",
      city: "Paderu",
      district: "Alluri Sitharama Raju",
      state: "Andhra Pradesh",
      pincode: "531024",
      landmark: "Near Paderu / Rampachodavaram",
    },
    coordinates: {
      latitude: 17.9,
      longitude: 81.9,
    },
    timings: "6:00 AM - 8:00 PM (Morning Darshan: 6 AM – 12 PM, Evening Darshan: 4 PM – 8 PM)",
    entryFee: "General Entry: Free (Special sevas may have nominal charges)",
    bestTimeToVisit: "Winter and post-monsoon seasons; early morning for peaceful darshan",
    dressCode:
      "Simple and traditional attire. Men: Dhoti, shirt, or traditional wear. Women: Saree or salwar kameez. Avoid shorts, revealing clothes, and casual western outfits inside the sanctum.",
    nearbyAttractions: [
      "Paderu",
      "Rampachodavaram",
      "Eastern Ghats forests",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
  "andhra-pradesh-alluri-sitharama-raju-local-paderu-shrine-temple": {
    id: "andhra-pradesh-alluri-sitharama-raju-local-paderu-shrine-temple",
    name: "Local Paderu Shrine Temple",
    history:
      "The shrines in Paderu do not have a single recorded founding date. Instead, they evolved organically over centuries as part of the traditions of indigenous tribal communities such as the Konda Dora and Bagata tribes. These temples were typically established by local villagers near sacred trees, hills, or water sources, serving as centers for the protection and prosperity of the community. Mythology here is passed through oral traditions rather than classical texts; common beliefs hold that the deity protects the village from disease and natural disasters, that the goddess resides in forests and must be worshipped during festivals, and that rituals ensure good harvests and rainfall. The timeline spans ancient tribal worship, medieval development of local shrine structures, limited documentation in the colonial period, and recognition as cultural and spiritual heritage sites in the modern era.",
    significance:
      "The Paderu shrine temples hold deep spiritual importance, especially for local tribal communities. Worship focuses on nature, fertility, and protection, with the deities seen as guardians of the village and a strong belief in divine intervention in daily life. Some shrines are believed to be self-manifested (Swayambhu), increasing their spiritual significance. The shrines are central to tribal identity and heritage, local festivals and fairs, and the preservation of ancient traditions — representing a living example of India's diverse spiritual landscape.",
    about:
      "The Local Paderu Shrine Temple refers to a group of traditional tribal and regional Hindu shrines located in and around the hill town of Paderu, in the Eastern Ghats of Andhra Pradesh. Unlike large, well-documented temples, these shrines are deeply rooted in local tribal traditions and folk Hinduism, making them culturally unique. The temples are generally dedicated to village deities (Grama Devatas) such as Ganga Amma, Poleramma, or Mutyalamma, forms of Shiva and Shakti, and nature-associated deities worshipped by tribal communities. They are important because they represent a blend of tribal beliefs and mainstream Hindu practices, with worship that is simple, deeply spiritual, and connected to nature. The shrines are known for strong community-based worship, sacred rituals tied to agriculture, rain, and protection, and a peaceful location amidst dense forests and hills.",
    images: [
      {
        url: paderuShrine1,
        alt: "Local Paderu shrine temple gopuram exterior",
        caption: "The colorful gopuram of a local Paderu shrine temple amidst the Eastern Ghats",
      },
      {
        url: paderuShrine2,
        alt: "Goddess idol inside a Paderu shrine",
        caption: "The presiding goddess idol decorated with flowers inside the shrine",
      },
    ],
    address: {
      street: "Paderu Region",
      city: "Paderu",
      district: "Alluri Sitharama Raju",
      state: "Andhra Pradesh",
      pincode: "531024",
      landmark: "Paderu town and surrounding villages",
    },
    coordinates: {
      latitude: 17.933,
      longitude: 82.616,
    },
    timings: "6:00 AM - 7:00 PM (timings may vary depending on the specific shrine)",
    entryFee: "Free entry (donations are voluntary)",
    bestTimeToVisit: "Early morning or evening for a peaceful experience; festival periods for cultural richness",
    dressCode:
      "Simple but respectful. Recommended: modest, comfortable clothing and traditional Indian attire. Avoid revealing or inappropriate clothing and loud or flashy outfits; respect local customs and tribal traditions.",
    nearbyAttractions: [
      "Paderu hill town",
      "Eastern Ghats forests",
      "Konda Dora & Bagata tribal villages",
    ],
    yogaCenters: defaultYogaCenters,
    foodCenters: defaultFoodCenters,
    spiritualTeachers: defaultSpiritualTeachers,
  },
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
