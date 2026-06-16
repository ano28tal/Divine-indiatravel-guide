import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import singarakonda from "@/shared/assets/andhra-pradesh/bapatla/singarakonda-temple/1.jpg";

export const singarakondaTemple: TempleDetails = {
  id: "andhra-pradesh-bapatla-singarakonda-temple",
  name: "Singarakonda Temple",
  history:
    "The origins of Singarakonda Temple are believed to date back several centuries, though exact historical records are limited. The temple is strongly rooted in the Vaishnavite tradition, dedicated to Lord Narasimha, the fierce protector form of Vishnu. According to local legends, Lord Narasimha manifested at this hill to bless devotees and protect them from evil forces; the hill itself is considered sacred, and it is believed that sages and saints performed penance here in ancient times. The temple likely saw development during the rule of South Indian dynasties such as the Vijayanagara Empire, which promoted Narasimha worship, and over time local rulers and devotees contributed to its renovation and maintenance, with periodic restoration to accommodate growing numbers of pilgrims. Its timeline spans a mythological origin and sage worship in the ancient period, development under regional dynasties in the medieval period, and renovations with improved accessibility in the modern era.",
  significance:
    "The temple holds deep importance for devotees of Lord Narasimha, who represents protection, courage, and the destruction of evil. Devotees worship here to seek relief from fears, health issues, and life obstacles; prayers here are believed to remove doshas (negative influences), and devotees perform special rituals for prosperity and peace. Offering prayers during festivals is considered highly auspicious. The temple is a key spiritual center in the region, especially during the annual Tirunala festival, when thousands gather for celebrations, rituals, and community events.",
  about:
    "The Singarakonda Temple is a renowned hilltop shrine dedicated to Lord Narasimha, an incarnation of Vishnu. The temple is located near Addanki in Bapatla district and is popularly known as Sri Lakshmi Narasimha Swamy Temple. Perched on a small hill called Singarakonda, the temple offers a peaceful and spiritually uplifting environment. The main deity, Lord Narasimha, is worshipped along with Goddess Lakshmi, symbolizing protection and prosperity. Devotees believe that the deity here is especially powerful in removing obstacles, fears, and negative energies. The temple is particularly famous for its annual Tirunala (festival), which attracts thousands of devotees from across Andhra Pradesh. Its scenic location, combined with deep religious significance, makes it both a pilgrimage site and a serene travel destination, featuring an entrance gopuram, a pillared mandapam, and traditional South Indian architecture.",
  images: [
    {
      url: singarakonda,
      alt: "Singarakonda Temple (Sri Lakshmi Narasimha Swamy Temple)",
      caption: "The hilltop Singarakonda Temple with its white gopurams",
    },
  ],
  address: {
    street: "Singarakonda Hill, near Addanki",
    city: "Addanki",
    district: "Bapatla",
    state: "Andhra Pradesh",
    pincode: "523201",
    landmark: "Atop Singarakonda Hill",
  },
  coordinates: {
    latitude: 15.816,
    longitude: 79.983,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
  entryFee:
    "Free for general darshan (special darshan tickets affordable, managed locally)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; during festivals for a cultural experience (expect crowds)",
  dressCode:
    "Modest and respectful attire. Traditional Indian wear (saree, salwar kameez, kurta-pajama) and decent, fully covered clothing recommended. Avoid shorts, sleeveless tops, and revealing outfits.",
  nearbyAttractions: ["Addanki", "Ongole", "Singarakonda Hill"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
