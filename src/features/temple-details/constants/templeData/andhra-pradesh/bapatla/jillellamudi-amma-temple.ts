import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import jillellamudiAmma from "@/shared/assets/andhra-pradesh/bapatla/jillellamudi-amma-temple/1.jpg";

export const jillellamudiAmmaTemple: TempleDetails = {
  id: "andhra-pradesh-bapatla-jillellamudi-amma-temple",
  name: "Jillellamudi Amma Temple",
  history:
    "The temple's origin is deeply connected to the life of Jillellamudi Amma (Anasuya Devi), born in 1923 in Andhra Pradesh. From an early age, she displayed extraordinary compassion and spiritual wisdom, and over time people began to recognize her as a divine figure. She gained recognition as a spiritual guide and mother figure in the 1950s–1960s, devotees began building a spiritual center (ashram) in Jillellamudi, and in 1985 Amma attained Mahasamadhi (left her physical form). Unlike ancient temples built by kings or dynasties, this temple evolved organically through devotee efforts and community service. Devotees believe Amma is a manifestation of Adi Parashakti (Divine Mother) and an embodiment of unconditional love and nourishment; there are no rigid mythological stories, but countless real-life experiences and miracles shared by devotees form the spiritual foundation.",
  significance:
    "The temple represents a rare spiritual philosophy centered on unconditional love and equality. Its core beliefs are that 'Amma is the mother of all beings', that there is no discrimination based on caste, religion, or status, and that feeding others is the highest form of worship. Devotees visit to seek emotional healing and peace, experience unconditional acceptance, and receive blessings for personal and family well-being. Rituals and practices include Annadanam (free food service) as a sacred act, simple prayers instead of complex rituals, and meditation and silent reflection. The temple stands as a symbol of social equality, spiritual humanism, and community living, attracting not only religious devotees but also seekers of peace and philosophical understanding.",
  about:
    "The Jillellamudi Amma Temple, also known as the Anasuya Devi Temple, is a unique spiritual center located in the peaceful village of Jillellamudi in Andhra Pradesh. Unlike traditional temples dedicated to mythological deities, this temple is devoted to Jillellamudi Amma (Anasuya Devi), a revered spiritual mother figure who lived in the 20th century. She is worshipped as a divine incarnation of the universal mother (Adi Shakti), and devotees lovingly call her 'Amma' (Mother of All). The temple is not just a place of worship but a spiritual community centered around love, equality, and service. It is famous for its philosophy of universal motherhood, free food service (Annadanam) for all visitors, a peaceful non-ritualistic spiritual environment, and devotees from across India who come seeking emotional and spiritual comfort.",
  images: [
    {
      url: jillellamudiAmma,
      alt: "Jillellamudi Amma Temple (Anasuya Devi Temple)",
      caption:
        "The Jillellamudi Amma Temple with an image of Amma (Anasuya Devi)",
    },
  ],
  address: {
    street: "Jillellamudi Village",
    city: "Bapatla",
    district: "Bapatla",
    state: "Andhra Pradesh",
    pincode: "522113",
    landmark: "Jillellamudi Village (~15 km from Bapatla)",
  },
  coordinates: {
    latitude: 15.851,
    longitude: 80.389,
  },
  timings: "5:00 AM - 8:30 PM (Darshan: 5:30 AM – 12:30 PM, 4 PM – 8 PM)",
  entryFee:
    "No entry fee (completely free); free meals (Annadanam) served daily",
  bestTimeToVisit:
    "Early morning for a calm atmosphere; festival days for spiritual vibrance",
  dressCode:
    "No strict enforcement, but modest attire is encouraged. Traditional Indian wear (saree, salwar kameez, kurta) and decent, respectful clothing recommended. Avoid shorts, sleeveless tops, and tight or revealing outfits.",
  nearbyAttractions: ["Bapatla", "Guntur", "Jillellamudi Ashram"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
