import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import mogileeswaraSwamyTempleImage from "@/shared/assets/andhra-pradesh/chittoor/mogileeswara-swamy-temple/1.jpg";

export const mogileeswaraSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-mogileeswara-swamy-temple",
  name: "Mogileeswara Swamy Temple",
  history:
    "The origins of the Mogileeswara Swamy Temple trace back several centuries, with strong associations to ancient South Indian dynasties — particularly the Chola Dynasty and later the Vijayanagara Empire, both known for constructing and patronizing Shiva temples. According to local legend, the temple was established in a region once filled with 'mogili' (a type of sacred tree), which is believed to have given the temple its name. Sages and saints are said to have performed intense penance here, invoking the presence of Lord Shiva, and over time the temple gained recognition as a spiritually charged place, with architectural enhancements during the Vijayanagara era.",
  significance:
    "Dedicated to Lord Shiva worshipped in the form of Mogileeswara Swamy, believed to be self-manifested (Swayambhu), which significantly enhances the temple's religious importance. Devotees believe the temple radiates divine energy, making it ideal for meditation, prayer, and inner peace. Worship here is believed to remove obstacles and negative energies, and devotees seek blessings for health, marriage, and prosperity, with Abhishekam considered highly auspicious.",
  about:
    "The Mogileeswara Swamy Temple is a revered Hindu temple dedicated to Lord Shiva, nestled in a serene rural setting of Chittoor district, Andhra Pradesh. Known for its peaceful atmosphere, spiritual vibrations, and deep-rooted cultural heritage, the temple is especially popular among local devotees and pilgrims who believe that prayers offered here are fulfilled with divine grace. Surrounded by natural beauty and greenery, it offers a calm and meditative environment — an ideal destination for spiritual seekers and travelers exploring lesser-known yet powerful religious sites.",
  images: [
    {
      url: mogileeswaraSwamyTempleImage,
      alt: "Mogileeswara Swamy Temple gopuram and entrance",
      caption: "The gopuram and entrance of Mogileeswara Swamy Temple",
    },
  ],
  address: {
    street: "Mogili Village",
    city: "Mogili",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517001",
    landmark: "Approx. 30-40 km from Chittoor",
  },
  coordinates: {
    latitude: 13.2,
    longitude: 79.1,
  },
  timings: "Morning: 6:00 AM - 12:00 PM; Evening: 4:00 PM - 8:00 PM",
  entryFee: "Free entry for all devotees",
  bestTimeToVisit:
    "Early morning for a peaceful darshan; festivals like Mahashivaratri for a vibrant spiritual experience",
  dressCode:
    "Traditional and modest attire — Men: dhoti, kurta, or formal wear; Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and western casual wear.",
  nearbyAttractions: [
    "Ardhagiri Veeranjaneya Swamy Temple",
    "Boyakonda Gangamma Temple",
    "Kanipakam Vinayaka Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
