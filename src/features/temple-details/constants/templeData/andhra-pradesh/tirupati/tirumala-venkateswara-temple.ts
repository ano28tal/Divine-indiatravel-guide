import type { TempleDetails } from "../../../../types/templeDetails";
import tirumalaTempleImage from "@/shared/assets/andhra-pradesh/tirupati/tirumala-venkateswara-temple/1.jpg";
import tirumalaLordVishnu from "@/shared/assets/andhra-pradesh/tirupati/tirumala-venkateswara-temple/2.jpeg";
import tirumalaHills from "@/shared/assets/andhra-pradesh/tirupati/tirumala-venkateswara-temple/3.jpg";
import tirumalaTempleNight from "@/shared/assets/andhra-pradesh/tirupati/tirumala-venkateswara-temple/4.jpg";

export const tirumalaVenkateswaraTemple: TempleDetails = {
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
};
