import type { Deity } from "../types/divinePlaces";

export const vishnuDeity: Deity = {
  id: "vishnu",
  name: "Lord Vishnu",
  icon: "🌸",
  color: "bg-blue-600",
  names: [
    { name: "Vishnu", meaning: "The Preserver" },
    { name: "Narayan", meaning: "The Refuge of Man" },
    { name: "Hari", meaning: "The Remover of Sins" },
    { name: "Krishna", meaning: "The All-Attractive One" },
    { name: "Rama", meaning: "The Source of Joy" },
    { name: "Madhava", meaning: "Lord of Lakshmi" },
    { name: "Govinda", meaning: "Protector of Cows" },
    { name: "Vasudeva", meaning: "Indwelling God" },
    { name: "Janardana", meaning: "Liberator of All" },
    { name: "Keshava", meaning: "Slayer of Keshi" },
    { name: "Padmanabha", meaning: "Lotus-naveled" },
    { name: "Damodara", meaning: "Bound by a Rope" },
  ],
  sacredPlaces: [
    // Major Char Dham Temples
    {
      name: "Badrinath Temple",
      location: "Badrinath",
      state: "Uttarakhand",
      description:
        "A Himalayan Char Dham dedicated to Vishnu as Badrinarayan, nestled at 10,279 feet.",
    },
    {
      name: "Jagannath Temple",
      location: "Puri",
      state: "Odisha",
      description:
        "Major Char Dham site featuring Lord Jagannath, famous for annual Rath Yatra festival.",
    },
    {
      name: "Dwarkadhish Temple",
      location: "Dwarka",
      state: "Gujarat",
      description:
        "One of the Char Dham, dedicated to Lord Krishna at his ancient kingdom.",
    },
    // Major Vishnu Temples
    {
      name: "Tirumala Venkateswara Temple",
      location: "Tirumala, Tirupati",
      state: "Andhra Pradesh",
      description:
        "World's richest and most visited temple dedicated to Lord Venkateswara (Vishnu).",
    },
    {
      name: "Ranganathaswamy Temple",
      location: "Srirangam",
      state: "Tamil Nadu",
      description:
        "Largest functioning Hindu temple complex, dedicated to reclining Vishnu (Ranganatha).",
    },
    {
      name: "Padmanabhaswamy Temple",
      location: "Thiruvananthapuram",
      state: "Kerala",
      description:
        "Famous for immense treasures and Vishnu in Anantha Shayana (reclining) posture.",
    },
    {
      name: "Guruvayur Temple",
      location: "Guruvayur",
      state: "Kerala",
      description:
        "Known as Bhuloka Vaikunta, significant Krishna (Vishnu) temple with elephant sanctuary.",
    },
    {
      name: "Vithoba Temple",
      location: "Pandharpur",
      state: "Maharashtra",
      description:
        "Major pilgrimage site for Vitthal (Krishna), center of Warkari tradition.",
    },
    // Other Notable Vishnu Temples
    {
      name: "Laxminarayan Temple (Birla Mandir)",
      location: "New Delhi",
      state: "Delhi",
      description:
        "Prominent temple in the capital dedicated to Lakshmi and Narayana, inaugurated by Gandhi.",
    },
    {
      name: "Sarangapani Temple",
      location: "Kumbakonam",
      state: "Tamil Nadu",
      description:
        "Ancient and significant Perumal temple, one of the 108 Divya Desams.",
    },
    {
      name: "Varadaraja Perumal Temple",
      location: "Kanchipuram",
      state: "Tamil Nadu",
      description:
        "Important Vishnu temple in the temple city, one of the 108 Divya Desams.",
    },
    {
      name: "Sita Ramachandraswamy Temple",
      location: "Bhadrachalam",
      state: "Telangana",
      description:
        "Dedicated to Lord Rama, famous for Sri Rama Navami celebrations.",
    },
    {
      name: "Ananthapura Lake Temple",
      location: "Kasaragod",
      state: "Kerala",
      description:
        "Only lake temple for Vishnu in India, original seat of Ananthapadmanabha.",
    },
    // Krishna & Rama Temples
    {
      name: "Krishna Janmabhoomi Temple",
      location: "Mathura",
      state: "Uttar Pradesh",
      description:
        "Birthplace of Lord Krishna, one of the seven sacred cities of Hinduism.",
    },
    {
      name: "ISKCON Temple",
      location: "Vrindavan",
      state: "Uttar Pradesh",
      description:
        "International center for Krishna consciousness and devotion.",
    },
    {
      name: "Ayodhya Ram Janmabhoomi",
      location: "Ayodhya",
      state: "Uttar Pradesh",
      description:
        "Birthplace of Lord Rama, one of the seven sacred cities of India.",
    },
    {
      name: "Banke Bihari Temple",
      location: "Vrindavan",
      state: "Uttar Pradesh",
      description:
        "Famous temple dedicated to Krishna, known for unique darshan traditions.",
    },
    {
      name: "Prem Mandir",
      location: "Vrindavan",
      state: "Uttar Pradesh",
      description:
        "Magnificent white marble temple depicting Krishna's divine pastimes.",
    },
    // South Indian Perumal Temples (108 Divya Desams notable ones)
    {
      name: "Oppiliappan Temple",
      location: "Kumbakonam",
      state: "Tamil Nadu",
      description:
        "One of 108 Divya Desams, unique temple where no salt is used in prasadam.",
    },
    {
      name: "Thiruvananthapuram Perumal Temple",
      location: "Thiruvananthapuram",
      state: "Kerala",
      description:
        "Ancient temple dedicated to Anantha Padmanabha, part of Divya Desams.",
    },
    {
      name: "Srivilliputhur Andal Temple",
      location: "Srivilliputhur",
      state: "Tamil Nadu",
      description:
        "Birthplace of Andal, one of the twelve Alvars, important Vishnu shrine.",
    },
    {
      name: "Tirumogur Kalamegaperumal Temple",
      location: "Madurai",
      state: "Tamil Nadu",
      description: "Ancient Divya Desam where Vishnu appeared to Muchukunda.",
    },
    {
      name: "Naimisharanya Chakra Narayana Temple",
      location: "Sitapur",
      state: "Uttar Pradesh",
      description: "Sacred forest pilgrimage site where Vishnu's chakra rests.",
    },
    {
      name: "Simhachalam Temple",
      location: "Visakhapatnam",
      state: "Andhra Pradesh",
      description:
        "Dedicated to Varaha-Lakshmi-Narasimha, hilltop temple with unique traditions.",
    },
    {
      name: "Udupi Sri Krishna Temple",
      location: "Udupi",
      state: "Karnataka",
      description:
        "Famous Krishna temple founded by Madhvacharya, known for Paryaya tradition.",
    },
  ],
};
