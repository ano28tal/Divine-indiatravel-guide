import type { Deity } from "../types/divinePlaces";

export const ganeshaDeity: Deity = {
  id: "ganesha",
  name: "Lord Ganesha",
  icon: "🐘",
  color: "bg-orange-500",
  names: [
    { name: "Ganesh", meaning: "Lord of the Ganas" },
    { name: "Vinayak", meaning: "Supreme Leader" },
    { name: "Vighnaharta", meaning: "Remover of Obstacles" },
    { name: "Lambodar", meaning: "One with a Large Belly" },
    { name: "Ekdant", meaning: "Single Tusked" },
    { name: "Siddhivinayak", meaning: "Bestower of Success" },
    { name: "Gajanan", meaning: "Elephant-faced" },
    { name: "Ganapati", meaning: "Lord of all Beings" },
    { name: "Omkara", meaning: "Form of Om" },
    { name: "Heramba", meaning: "Mother's Beloved Son" },
  ],
  sacredPlaces: [
    // Ashtavinayaka - 8 Sacred Ganesha Temples
    {
      name: "Morgaon Ganesha Temple (Mayureshwar)",
      location: "Morgaon, Pune",
      state: "Maharashtra",
      description:
        "First of Ashtavinayaka, where Ganesha killed demon Sindhu. Starting point of pilgrimage.",
    },
    {
      name: "Siddhivinayak Temple, Siddhatek",
      location: "Siddhatek, Ahmednagar",
      state: "Maharashtra",
      description:
        "Second Ashtavinayaka, where Ganesha defeated demon Bhringi. Trunk turns right (rare).",
    },
    {
      name: "Ballaleshwar Temple",
      location: "Pali, Raigad",
      state: "Maharashtra",
      description:
        "Third Ashtavinayaka, only one named after a devotee - Ballal. Self-manifested idol.",
    },
    {
      name: "Varadvinayak Temple",
      location: "Mahad, Raigad",
      state: "Maharashtra",
      description:
        "Fourth Ashtavinayaka, idol found in a lake. Grants boons to devotees.",
    },
    {
      name: "Chintamani Temple",
      location: "Theur, Pune",
      state: "Maharashtra",
      description:
        "Fifth Ashtavinayaka, where sage Kapila recovered the Chintamani jewel.",
    },
    {
      name: "Girijatmaj Temple (Lenyadri)",
      location: "Lenyadri, Pune",
      state: "Maharashtra",
      description:
        "Sixth Ashtavinayaka, located in Buddhist caves. Where Parvati worshipped Ganesha.",
    },
    {
      name: "Vigneshwara Temple, Ozar",
      location: "Ozar, Pune",
      state: "Maharashtra",
      description:
        "Seventh Ashtavinayaka, where Ganesha killed demon Vighnasura. Gold-plated dome.",
    },
    {
      name: "Mahaganapati Temple, Ranjangaon",
      location: "Ranjangaon, Pune",
      state: "Maharashtra",
      description:
        "Eighth Ashtavinayaka, where Ganesha defeated demon Tripurasura. 10-trunk form.",
    },
    // Famous Mumbai Temple
    {
      name: "Siddhivinayak Temple, Mumbai",
      location: "Prabhadevi, Mumbai",
      state: "Maharashtra",
      description:
        "Most visited Ganesha temple in India, 200+ years old, frequented by celebrities.",
    },
    // Other Maharashtra Temples
    {
      name: "Dagdusheth Halwai Ganpati",
      location: "Pune",
      state: "Maharashtra",
      description:
        "Famous temple established by sweetshop owner, adorned with gold and jewels.",
    },
    {
      name: "Ganpatipule Temple",
      location: "Ganpatipule, Ratnagiri",
      state: "Maharashtra",
      description:
        "400-year-old temple with self-manifested swayambhu idol facing west.",
    },
    {
      name: "Kasba Ganapati",
      location: "Pune",
      state: "Maharashtra",
      description:
        "Gramdevata (village deity) of Pune, established by Jijabai (Shivaji's mother).",
    },
    {
      name: "Titwala Siddhivinayak Temple",
      location: "Titwala, Thane",
      state: "Maharashtra",
      description:
        "Ancient temple with swayambhu idol, located near sacred pond.",
    },
    {
      name: "Navshya Ganpati Mandir",
      location: "Nashik",
      state: "Maharashtra",
      description:
        "Located on banks of Godavari river, unique idol with crescent moon.",
    },
    // Andhra Pradesh
    {
      name: "Kanipakam Vinayaka Temple",
      location: "Chittoor",
      state: "Andhra Pradesh",
      description:
        "Ancient temple where the self-manifested idol is believed to be growing in size.",
    },
    {
      name: "Swayambhu Gnana Ganapathi Temple",
      location: "Kurnool",
      state: "Andhra Pradesh",
      description:
        "Self-manifested idol known for granting wisdom and knowledge.",
    },
    // Karnataka
    {
      name: "Dodda Ganapathi Temple",
      location: "Basavanagudi, Bengaluru",
      state: "Karnataka",
      description:
        "18-feet tall monolithic Ganesha carved from single boulder, 500+ years old.",
    },
    {
      name: "Kurudumale Ganesha Temple",
      location: "Kurudumale, Kolar",
      state: "Karnataka",
      description:
        "Massive rock-cut Ganesha, one of the largest monolithic idols in South India.",
    },
    {
      name: "Ganesha Temple, Idagunji",
      location: "Idagunji, Uttara Kannada",
      state: "Karnataka",
      description:
        "One of the most famous Ganesha temples in coastal Karnataka.",
    },
    {
      name: "Sri Vinayaka Temple, Anegudde",
      location: "Anegudde, Udupi",
      state: "Karnataka",
      description:
        "Ancient temple known for powerful Ganesha idol and elephant imagery.",
    },
    {
      name: "Maha Ganapathi Mahammaya Temple",
      location: "Shirali, Uttara Kannada",
      state: "Karnataka",
      description:
        "Twin temple dedicated to Ganesha and goddess, GSB community's sacred site.",
    },
    // Tamil Nadu
    {
      name: "Ucchi Pillayar Temple (Rockfort)",
      location: "Tiruchirappalli",
      state: "Tamil Nadu",
      description:
        "Atop 273-feet rock, 417 steps, where Ganesha prevented Vibhishana.",
    },
    {
      name: "Karpaka Vinayakar Temple",
      location: "Pillayarpatti, Sivaganga",
      state: "Tamil Nadu",
      description:
        "Rock-cut cave temple from 7th century, 7-feet tall Ganesha carved from single rock.",
    },
    {
      name: "Swetha Vinayagar Temple",
      location: "Thiruvalanchuzhi, Kumbakonam",
      state: "Tamil Nadu",
      description:
        "White Ganesha idol, birthplace of saint Thirugnanasambandar.",
    },
    {
      name: "Varasiddhi Vinayaka Temple",
      location: "Besant Nagar, Chennai",
      state: "Tamil Nadu",
      description: "Popular seaside temple established in 1975, grants wishes.",
    },
    {
      name: "Nandrudayan Vinayaka Temple",
      location: "Tiruchirappalli",
      state: "Tamil Nadu",
      description: "Ancient temple near Rockfort with unique rituals.",
    },
    // Kerala
    {
      name: "Madhur Ganapathi Temple",
      location: "Kasaragod",
      state: "Kerala",
      description:
        "Famous for unique mud-covered idol and ancient Maha Ganapathi traditions.",
    },
    {
      name: "Kalamassery Mahaganapathy Temple",
      location: "Kalamassery, Ernakulam",
      state: "Kerala",
      description:
        "Major Ganesha temple in Kochi, known for grand Vinayaka Chaturthi.",
    },
    {
      name: "Kottarakkara Sree Mahaganapathi Temple",
      location: "Kottarakkara, Kollam",
      state: "Kerala",
      description: "Ancient temple, origin of Kathakali dance form.",
    },
    {
      name: "Pazhavangadi Ganapathy Temple",
      location: "Thiruvananthapuram",
      state: "Kerala",
      description: "300+ year old temple near Padmanabhaswamy Temple.",
    },
    {
      name: "Pournamikavu Temple (5-faced Ganesha)",
      location: "Thiruvananthapuram",
      state: "Kerala",
      description:
        "Rare Panchaamukha (5-faced) Ganesha temple, very auspicious.",
    },
    {
      name: "Malliyoor Maha Ganapathi Temple",
      location: "Kottayam",
      state: "Kerala",
      description:
        "Famous temple known for powerful Ganesha and elephant offerings.",
    },
    // Madhya Pradesh
    {
      name: "Chintaman Ganesh Temple",
      location: "Ujjain",
      state: "Madhya Pradesh",
      description: "One of three swayambhu temples in Ujjain, fulfills wishes.",
    },
    {
      name: "Khajrana Ganesh Temple",
      location: "Indore",
      state: "Madhya Pradesh",
      description:
        "Most visited temple in Indore, established by Ahilyabai Holkar.",
    },
    // Rajasthan
    {
      name: "Trinetra Ganesha Temple",
      location: "Ranthambhore Fort",
      state: "Rajasthan",
      description:
        "Only 3-eyed Ganesha in world, wedding invitations sent here.",
    },
    {
      name: "Bohra Ganesh Temple",
      location: "Udaipur",
      state: "Rajasthan",
      description: "Historic temple established by Bohra community.",
    },
    // Odisha
    {
      name: "Budha Ganesha Temple",
      location: "Jajpur",
      state: "Odisha",
      description: "Ancient temple associated with Mahabharata period.",
    },
    {
      name: "Mahavinayak Temple",
      location: "Jajpur",
      state: "Odisha",
      description: "Major pilgrimage site, believed to grant liberation.",
    },
    // Jammu & Kashmir
    {
      name: "Ganpatyar Temple",
      location: "Srinagar",
      state: "Jammu & Kashmir",
      description:
        "Ancient Ganesha temple in Kashmir, survived centuries of history.",
    },
    // Assam
    {
      name: "Lord Ganesh Temple, Boha Pahar",
      location: "Mayong, Morigaon",
      state: "Assam",
      description: "Temple atop Boha hill in land of black magic traditions.",
    },
  ],
};
