import type { Deity } from "../types/divinePlaces";

export const shivaDeity: Deity = {
  id: "shiva",
  name: "Lord Shiva",
  icon: "🔱",
  color: "bg-indigo-600",
  names: [
    { name: "Shiva", meaning: "The Auspicious One" },
    { name: "Mahadev", meaning: "The Great God" },
    { name: "Shankar", meaning: "The Beneficent" },
    { name: "Bholenath", meaning: "The Simple Lord" },
    { name: "Rudra", meaning: "The Fierce One" },
    { name: "Neelkanth", meaning: "Blue-throated" },
    { name: "Nataraja", meaning: "Lord of Dance" },
    { name: "Mahakala", meaning: "Lord of Time" },
    { name: "Pashupatinath", meaning: "Lord of Animals" },
    { name: "Vishwanath", meaning: "Lord of the Universe" },
    { name: "Trilochan", meaning: "Three-eyed" },
    { name: "Gangadhar", meaning: "Bearer of Ganga" },
  ],
  sacredPlaces: [], // Jyotirlingas listed separately
};

export const hanumanDeity: Deity = {
  id: "hanuman",
  name: "Lord Hanuman",
  icon: "🌞",
  color: "bg-red-600",
  names: [
    { name: "Hanuman", meaning: "One with Broken Jaw" },
    { name: "Bajrangbali", meaning: "Strong as Thunderbolt" },
    { name: "Maruti", meaning: "Son of Marut" },
    { name: "Anjaneya", meaning: "Son of Anjana" },
    { name: "Pavanputra", meaning: "Son of Wind God" },
    { name: "Sankatmochan", meaning: "Remover of Dangers" },
    { name: "Kesari Nandan", meaning: "Son of Kesari" },
    { name: "Ramdoot", meaning: "Messenger of Rama" },
    { name: "Mahavir", meaning: "The Mighty Hero" },
    { name: "Vayuputra", meaning: "Son of Vayu" },
  ],
  sacredPlaces: [
    // Uttar Pradesh - Major Temples
    {
      name: "Sankat Mochan Temple",
      location: "Varanasi",
      state: "Uttar Pradesh",
      description:
        "Founded by Tulsidas in 16th century, known for removing all obstacles and dangers.",
    },
    {
      name: "Hanuman Garhi",
      location: "Ayodhya",
      state: "Uttar Pradesh",
      description:
        "Four-faced temple on hill with 76 steps, believed to guard Rama's palace.",
    },
    {
      name: "Sankat Mochan Temple, Lucknow",
      location: "Lucknow",
      state: "Uttar Pradesh",
      description:
        "Historic temple known for powerful Hanuman idol and Tuesday gatherings.",
    },
    {
      name: "Bade Hanuman Mandir",
      location: "Prayagraj (Allahabad)",
      state: "Uttar Pradesh",
      description: "Reclining Hanuman idol unique in India, located at Sangam.",
    },
    {
      name: "Tulsi Peeth",
      location: "Chitrakoot",
      state: "Uttar Pradesh",
      description:
        "Where Tulsidas wrote Ramcharitmanas, sacred Hanuman worship site.",
    },
    {
      name: "Hanuman Dhara",
      location: "Chitrakoot",
      state: "Madhya Pradesh",
      description:
        "Where Lord Rama created a water spring to cool Hanuman after Lanka war.",
    },
    // Bihar
    {
      name: "Mahavir Mandir",
      location: "Patna",
      state: "Bihar",
      description:
        "Most visited Hanuman temple in Bihar, famous for prasad distribution.",
    },
    {
      name: "Sankat Mochan Mandir",
      location: "Nawada",
      state: "Bihar",
      description: "Ancient temple known for miraculous healings.",
    },
    // Rajasthan
    {
      name: "Mehandipur Balaji Temple",
      location: "Dausa",
      state: "Rajasthan",
      description:
        "Famous for healing rituals, exorcism, and removing negative energies.",
    },
    {
      name: "Salasar Balaji Temple",
      location: "Churu",
      state: "Rajasthan",
      description:
        "Unique temple where the idol has beard and moustache, self-manifested.",
    },
    {
      name: "Punrasar Balaji Temple",
      location: "Bikaner",
      state: "Rajasthan",
      description: "Known for healing powers, devotees offer oil and sindoor.",
    },
    // Himachal Pradesh
    {
      name: "Jakhu Temple",
      location: "Shimla",
      state: "Himachal Pradesh",
      description:
        "108-foot Hanuman statue at 8000 feet, where Hanuman rested carrying Sanjeevani.",
    },
    {
      name: "Sankat Mochan Temple",
      location: "Shimla",
      state: "Himachal Pradesh",
      description: "Scenic temple in cedar forest, popular pilgrimage site.",
    },
    // Delhi & NCR
    {
      name: "Pracheen Hanuman Mandir, Connaught Place",
      location: "New Delhi",
      state: "Delhi",
      description:
        "One of five temples of Pandavas in Delhi, self-manifested idol, very ancient.",
    },
    {
      name: "Marghat Hanuman Temple",
      location: "Yamuna Ghat, Delhi",
      state: "Delhi",
      description:
        "Unique large idol discovered in Yamuna river, powerful healing site.",
    },
    // Gujarat
    {
      name: "Kashtabhanjan Hanuman Temple",
      location: "Salangpur, Botad",
      state: "Gujarat",
      description:
        "Known as 'Crusher of Sorrows', most famous Hanuman temple in Gujarat.",
    },
    {
      name: "Bala Hanuman Temple",
      location: "Jamnagar",
      state: "Gujarat",
      description:
        "In Guinness Book for continuous Ram Dhun chanting since 1964 - non-stop for 60+ years.",
    },
    // Maharashtra
    {
      name: "Bhadra Maruti Temple",
      location: "Khuldabad, Aurangabad",
      state: "Maharashtra",
      description:
        "Unique sleeping Hanuman idol, believed to be in eternal sleep.",
    },
    {
      name: "Camp Hanuman Temple",
      location: "Pune",
      state: "Maharashtra",
      description:
        "Historic temple in British-era camp area, popular for worship.",
    },
    {
      name: "Ghanteshwar Temple",
      location: "Mumbai",
      state: "Maharashtra",
      description: "Famous bell temple with powerful Hanuman idol.",
    },
    // Tamil Nadu
    {
      name: "Panchmukhi Hanuman Temple",
      location: "Rameshwaram",
      state: "Tamil Nadu",
      description:
        "Five-faced Hanuman where he appeared to save Rama and Lakshmana from Ahiravana.",
    },
    {
      name: "Namakkal Anjaneyar Temple",
      location: "Namakkal",
      state: "Tamil Nadu",
      description:
        "18-feet tall rock-cut Hanuman, one of largest in South India.",
    },
    {
      name: "Anjaneya Temple, Nanganallur",
      location: "Chennai",
      state: "Tamil Nadu",
      description:
        "Famous for 32-feet tall Hanuman idol, grand Hanuman Jayanti celebrations.",
    },
    {
      name: "Prasanna Yoga Anjaneyar Temple",
      location: "Chennai",
      state: "Tamil Nadu",
      description: "Known for Hanuman in yoga posture, unique iconography.",
    },
    {
      name: "Bhaktha Anjaneyar Temple",
      location: "Chennai",
      state: "Tamil Nadu",
      description: "Popular temple known for fulfilling devotees' wishes.",
    },
    // Andhra Pradesh
    {
      name: "Paritala Anjaneya Temple",
      location: "Paritala, Vijayawada",
      state: "Andhra Pradesh",
      description: "World's tallest Hanuman statue at 135 feet (41 meters).",
    },
    {
      name: "Karmanghat Hanuman Temple",
      location: "Hyderabad",
      state: "Telangana",
      description:
        "Ancient self-manifested idol, one of oldest temples in Hyderabad.",
    },
    {
      name: "Mounagiri Hanuman Temple",
      location: "Yadagirigutta",
      state: "Telangana",
      description: "Hill temple where Hanuman meditated in silence (Mouna).",
    },
    // Karnataka
    {
      name: "Ragigudda Anjaneya Temple",
      location: "Bengaluru",
      state: "Karnataka",
      description:
        "Hill temple with ancient idol, popular for Saturday worship.",
    },
    {
      name: "Yantrodharaka Hanuman Temple",
      location: "Hampi",
      state: "Karnataka",
      description:
        "In Vijayanagara ruins, Hanuman holding yantra, very powerful.",
    },
    {
      name: "Anjeyanadri Hill Temple",
      location: "Hampi",
      state: "Karnataka",
      description:
        "Believed birthplace of Hanuman, 575 steps to hilltop temple.",
    },
    {
      name: "Kote Anjaneya Temple",
      location: "Bengaluru",
      state: "Karnataka",
      description: "Historic temple inside Bangalore Fort, 300+ years old.",
    },
    {
      name: "Nuggikeri Hanuman Temple",
      location: "Dharwad",
      state: "Karnataka",
      description: "Ancient temple with self-manifested idol.",
    },
    // Kerala
    {
      name: "Alattiyur Hanuman Temple",
      location: "Alathiyur, Palakkad",
      state: "Kerala",
      description: "One of the most ancient Hanuman temples in Kerala.",
    },
    {
      name: "Kaviyoor Mahadevar Temple",
      location: "Kaviyoor, Pathanamthitta",
      state: "Kerala",
      description:
        "Ancient temple with Hanuman shrine, known for rock-cut sculptures.",
    },
    {
      name: "O.T.C. Hanuman Temple",
      location: "Palayam, Thiruvananthapuram",
      state: "Kerala",
      description:
        "Popular temple near government offices, visited by thousands.",
    },
    // Uttarakhand
    {
      name: "Hanumangarhi Temple",
      location: "Nainital",
      state: "Uttarakhand",
      description:
        "Scenic hilltop temple offering panoramic views of Nainital.",
    },
    {
      name: "Kainchi Dham",
      location: "Nainital",
      state: "Uttarakhand",
      description:
        "Neem Karoli Baba's ashram, famous Hanuman temple visited by Steve Jobs.",
    },
    // Sikkim
    {
      name: "Hanuman Tok",
      location: "Gangtok",
      state: "Sikkim",
      description:
        "Army-maintained temple at 7200 feet with stunning Himalayan views.",
    },
    // Jharkhand
    {
      name: "Bijethua Mahavir Temple",
      location: "Ranchi",
      state: "Jharkhand",
      description:
        "Famous temple known for miraculous healings and wish fulfillment.",
    },
    // Chhattisgarh
    {
      name: "Pilua Mahaveer Mandir",
      location: "Bilaspur",
      state: "Chhattisgarh",
      description: "Historic temple with ancient Hanuman idol.",
    },
    // Madhya Pradesh
    {
      name: "Ulta Gadha Dham",
      location: "Ratlam",
      state: "Madhya Pradesh",
      description: "Unique temple where Hanuman holds mace upside down.",
    },
    {
      name: "Gandi Kshetram",
      location: "Ganjbasoda",
      state: "Madhya Pradesh",
      description: "Ancient pilgrimage site associated with Ramayana.",
    },
  ],
};
