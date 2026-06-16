import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import tallapakaVenkateswara from "@/shared/assets/andhra-pradesh/annamayya/venkateswara-swamy-temple/1.jpg";

export const venkateswaraSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-annamayya-venkateswara-swamy-temple",
  name: "Venkateswara Swamy Temple",
  history:
    "The origins of the temple date back several centuries and are deeply intertwined with the Vijayanagara Empire, which played a major role in promoting Vaishnavism in South India. With the 15th-century birth of Annamacharya in Tallapaka, the temple gained prominence as a center of devotion due to his compositions dedicated to Lord Venkateswara, and Vijayanagara rulers supported temple construction and maintenance in the region. The temple is believed to be spiritually connected to the Tirumala Venkateswara Temple, and devotees consider visiting Tallapaka as part of a complete pilgrimage circuit. Annamacharya composed thousands of sankeertanas (devotional songs) praising Lord Venkateswara, many inspired by this region. Over time, the temple has undergone restorations by local authorities and religious organizations to preserve its heritage.",
  significance:
    "The temple holds deep importance in the Vaishnavite tradition, especially due to its association with Annamacharya. Dedicated to Lord Venkateswara, believed to be the protector and provider, it is seen as a spiritually connected extension of Tirumala. Devotees believe prayers here bring peace of mind, fulfillment of wishes, and spiritual growth, and singing or listening to Annamacharya's compositions is considered highly auspicious. Tallapaka is known as the birthplace of devotional music traditions, and Annamacharya's compositions are still sung in temples across South India. Devotees visit to experience a calm, less crowded spiritual environment, to connect with the roots of bhakti (devotion), and to honor Annamacharya and Lord Venkateswara together.",
  about:
    "The Venkateswara Swamy Temple in Tallapaka is a sacred shrine dedicated to Lord Venkateswara, a revered incarnation of Lord Vishnu. Located in the historic village of Tallapaka, this temple holds immense spiritual and cultural significance, especially for devotees of Lord Venkateswara. The temple is closely associated with Annamacharya, the legendary saint-poet and composer who is considered the greatest devotee of Lord Venkateswara — Tallapaka is his birthplace, making this temple an important pilgrimage site for followers of devotional music and spirituality. The temple is known for its peaceful rural setting, deep spiritual atmosphere, and strong connection to devotional traditions (the bhakti movement). Unlike the grand Tirumala temple, this shrine offers a more serene and less crowded spiritual experience, attracting devotees seeking calmness and devotion.",
  images: [
    {
      url: tallapakaVenkateswara,
      alt: "Venkateswara Swamy Temple at Tallapaka",
      caption:
        "The golden vimana and gopuram of the Venkateswara Swamy Temple in Tallapaka",
    },
  ],
  address: {
    street: "Tallapaka Village, Rajampet Mandal",
    city: "Rajampet",
    district: "Annamayya",
    state: "Andhra Pradesh",
    pincode: "516126",
    landmark: "Birthplace of Annamacharya",
  },
  coordinates: {
    latitude: 13.95,
    longitude: 79.2,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
  entryFee:
    "Free entry for all devotees (special pooja on request during festivals)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; during festivals related to Lord Venkateswara or Annamacharya Jayanti",
  dressCode:
    "Traditional and modest attire. Men: dhoti, kurta, or decent formal clothes. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and revealing outfits.",
  nearbyAttractions: [
    "Tallapaka village",
    "Annamacharya Memorial",
    "Rajampet",
    "Tirupati",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
