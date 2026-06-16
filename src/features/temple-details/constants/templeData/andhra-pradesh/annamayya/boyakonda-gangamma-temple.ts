import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import boyakondaGangamma from "@/shared/assets/andhra-pradesh/annamayya/boyakonda-gangamma-temple/1.jpg";

export const boyakondaGangammaTemple: TempleDetails = {
  id: "andhra-pradesh-annamayya-boyakonda-gangamma-temple",
  name: "Boyakonda Gangamma Temple",
  history:
    "The origins of Boyakonda Gangamma Temple are deeply rooted in local folklore rather than documented royal history. It is believed that the temple has existed for centuries, with its worship traditions passed down through generations. Goddess Gangamma is considered a fierce protector deity who appeared to protect villagers from evil spirits and enemies; local legends say the goddess manifested on the hill, and devotees began worshipping her as a guardian of the region. She is associated with Shakti traditions, representing strength, protection, and justice. Initially, the temple was a simple shrine maintained by local villagers; over time, it evolved into a structured temple with support from devotees and regional authorities, with renovations and improvements in recent decades to accommodate increasing pilgrim visits. Its timeline spans an ancient origin as a folk shrine, medieval expansion through community worship, and modern-era infrastructure development, road access, and added facilities.",
  significance:
    "The temple holds deep spiritual importance as a Shakti worship center. Goddess Gangamma is believed to protect devotees from evil forces and negative energy, grant health, prosperity, and success, and fulfill wishes and vows (mannat). Devotees perform special pooja and offerings, some follow traditional rural rituals unique to the region, and festivals are celebrated with great devotion and cultural vibrancy. The temple reflects the folk traditions of Andhra Pradesh, plays a key role in local community identity, and acts as a center for faith, gatherings, and regional festivals.",
  about:
    "The Boyakonda Gangamma Temple is a revered hill shrine dedicated to Goddess Gangamma, a powerful local form of Shakti (Divine Mother). Situated atop a scenic hill, the temple attracts thousands of devotees seeking protection, prosperity, and fulfillment of wishes. The presiding deity, Gangamma, is worshipped as a Gramadevata (village guardian deity), believed to safeguard the region and its people from evil forces, diseases, and natural calamities. The temple holds deep significance among local communities, especially farmers and rural devotees. It is famous for its hilltop location with panoramic views, strong folk traditions and rituals, devotees offering coconuts and symbolic offerings, and annual festivals that draw large crowds. Overall, it serves as both a spiritual center and cultural landmark in the region.",
  images: [
    {
      url: boyakondaGangamma,
      alt: "Boyakonda Gangamma Temple hilltop gopuram",
      caption:
        "The hilltop gopuram of Boyakonda Gangamma Temple approached by a long flight of steps",
    },
  ],
  address: {
    street: "Boyakonda Hill, near Diguvapalle Village",
    city: "Madanapalle",
    district: "Annamayya",
    state: "Andhra Pradesh",
    pincode: "517325",
    landmark: "Atop Boyakonda Hill",
  },
  coordinates: {
    latitude: 13.7,
    longitude: 78.5,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12:30 PM, Evening: 4 PM – 8 PM)",
  entryFee: "General entry is free (special pooja options available)",
  bestTimeToVisit:
    "Early morning or evening for peaceful darshan; festival days for a cultural experience (expect crowds)",
  dressCode:
    "No strict enforced dress code, but traditional and modest attire is strongly recommended. Men: shirt and pants or dhoti. Women: saree or salwar kameez. Avoid shorts, sleeveless tops, and revealing clothing.",
  nearbyAttractions: [
    "Madanapalle",
    "Diguvapalle Village",
    "Panoramic hill views",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
