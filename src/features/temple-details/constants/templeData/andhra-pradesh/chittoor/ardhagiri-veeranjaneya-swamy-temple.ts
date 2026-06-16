import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import ardhagiriTempleImage from "@/shared/assets/andhra-pradesh/chittoor/ardhagiri-veeranjaneya-swamy-temple/1.jpg";

export const ardhagiriVeeranjaneyaSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-ardhagiri-veeranjaneya-swamy-temple",
  name: "Ardhagiri Veeranjaneya Swamy Temple",
  history:
    "The origins of the temple are deeply rooted in Hindu mythology and local beliefs rather than documented historical records. According to legend, during the time of the Ramayana, Lord Hanuman rested at this hill while carrying the Sanjeevani mountain to save Lakshmana. It is believed that a portion of the mountain's energy remained here, making the place spiritually charged — the name 'Ardhagiri' is associated with the belief that the hill represents a fragment or partial form of the sacred mountain carried by Hanuman. The temple is thought to have been developed and maintained by local devotees and regional rulers over centuries, preserved through continuous worship.",
  significance:
    "Dedicated to Lord Hanuman (Veeranjaneya Swamy), worshipped in a powerful and divine form believed to grant strength, courage, and protection. Devotees believe worship here removes obstacles and negative energies, provides physical and mental strength, offers protection from evil forces, and fulfills wishes. Special prayers are performed for health recovery, success in career and studies, and protection from hardships, with offerings of betel leaves and coconuts, recitation of the Hanuman Chalisa, and pradakshina (circumambulation).",
  about:
    "The Ardhagiri Veeranjaneya Swamy Temple is a revered Hindu shrine dedicated to Lord Hanuman, located amidst scenic hills and lush greenery in Chittoor district. The name 'Ardhagiri' translates to 'half hill', reflecting the temple's unique location nestled midway on a hill. Unlike large commercial temples, Ardhagiri offers a serene, peaceful, and deeply devotional atmosphere, attracting pilgrims who prefer a calm and meditative experience. It is also a popular stop for devotees traveling between Tirupati and nearby regions.",
  images: [
    {
      url: ardhagiriTempleImage,
      alt: "Ardhagiri Veeranjaneya Swamy Temple on the hillside",
      caption: "The hillside Ardhagiri Veeranjaneya Swamy Temple",
    },
  ],
  address: {
    street: "Ardhagiri Hill, near Aragonda",
    city: "Aragonda",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517129",
    landmark: "Approx. 30 km from Chittoor",
  },
  coordinates: {
    latitude: 13.215,
    longitude: 78.933,
  },
  timings: "Morning: 6:00 AM - 12:00 PM; Evening: 4:00 PM - 7:00 PM",
  entryFee: "No entry fee (free darshan for all devotees)",
  bestTimeToVisit:
    "Early morning for a peaceful darshan; evenings for a calm atmosphere. Tuesdays and Saturdays are auspicious for Hanuman worship, and Hanuman Jayanti sees higher footfall.",
  dressCode:
    "Traditional and modest attire — Men: dhoti, kurta, or decent full-length pants; Women: saree, salwar kameez, or traditional wear. Avoid shorts, sleeveless tops, or revealing clothes.",
  nearbyAttractions: [
    "Boyakonda Gangamma Temple",
    "Mogileeswara Swamy Temple",
    "Kanipakam Vinayaka Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
