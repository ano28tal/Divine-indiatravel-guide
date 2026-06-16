import type { TempleDetails } from "../../../../types/templeDetails";
import kanakaDurgaTempleImage from "@/shared/assets/andhra-pradesh/ntr/kanaka-durga-temple/1.jpg";
import kanakaDurgaTempleImage2 from "@/shared/assets/andhra-pradesh/ntr/kanaka-durga-temple/2.png";

export const kanakaDurgaTemple: TempleDetails = {
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
      caption:
        "Sri Durga Malleswara Swamyvarla Devasthanam on the banks of Krishna River",
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
    latitude: 16.519,
    longitude: 80.6215,
  },
  timings: "6:00 AM - 9:00 PM",
  entryFee: "Free (Special darshan tickets available)",
  bestTimeToVisit:
    "September to February (Dasara/Navaratri in October is most auspicious)",
  dressCode:
    "Traditional attire preferred. Men: Dhoti/Pants with shirt. Women: Saree/Salwar Kameez",
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
};
