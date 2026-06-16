import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import kasiVisweswara1 from "@/shared/assets/andhra-pradesh/anakapalli/kasi-visweswara-temple/1.jpg";
import kasiVisweswara2 from "@/shared/assets/andhra-pradesh/anakapalli/kasi-visweswara-temple/2.jpg";

export const kasiVisweswaraTemple: TempleDetails = {
  id: "andhra-pradesh-anakapalli-kasi-visweswara-temple",
  name: "Kasi Visweswara Temple",
  history:
    "The exact origin date of the temple is not precisely documented, but it is believed to be an ancient shrine with regional historical roots, possibly developed and expanded during medieval South Indian dynasties such as the Eastern Chalukyas and later local rulers. Temples named 'Kasi Visweswara' across India are traditionally established to bring the sanctity of Varanasi's Kashi Vishwanath closer to devotees in different regions. According to Hindu belief, Lord Shiva as Visweswara represents the cosmic ruler and destroyer of ignorance, and worshipping Shiva in this form is believed to cleanse sins and lead toward moksha (liberation); it is said that praying here with devotion grants similar spiritual merit as visiting Kashi. Its development went from an early local Shiva shrine to gradual expansion by regional patrons and devotees, with renovations in recent decades to support growing pilgrim visits.",
  significance:
    "The temple holds deep spiritual value for devotees of Lord Shiva. It represents Lord Shiva as the universal protector and destroyer of evil, and is believed to grant peace, prosperity, and spiritual clarity, and is associated with the removal of negative karma and sins. Offering bilva leaves and milk during Abhishekam is considered highly auspicious, Monday prayers are especially powerful, and devotees perform Archana and Rudrabhishekam. Devotees visit to seek blessings for success and stability, relief from stress and obstacles, and spiritual purification and inner peace. It is an important local religious center in Anakapalle, with celebrations during Mahashivratri and Karthika Masam.",
  about:
    "Kasi Visweswara Temple in Anakapalle District is a revered shrine dedicated to Lord Shiva, worshipped here as Visweswara (the 'Lord of the Universe'). The name 'Kasi Visweswara' reflects a spiritual connection to the famous Kashi Vishwanath Temple in Varanasi, symbolizing that devotees can receive similar divine blessings without traveling far. The main deity is Lord Shiva (Visweswara Lingam), often accompanied by Goddess Parvati (Visalakshi/Parvati Devi) in associated shrines. The temple is known for its peaceful and sacred environment, strong local devotional following, and daily rituals and traditional Shiva worship. Especially popular during Mondays and Shiva-related festivals, it features an entrance gate with traditional South Indian design, a simple yet sacred structure, a mandapam with pillars, and the Shiva Lingam decorated with flowers, bilva leaves, and sacred offerings.",
  images: [
    {
      url: kasiVisweswara1,
      alt: "Kasi Visweswara Temple exterior with golden domes",
      caption: "The golden-domed structure of Kasi Visweswara Temple",
    },
    {
      url: kasiVisweswara2,
      alt: "Shiva Lingam at Kasi Visweswara Temple",
      caption:
        "The Shiva Lingam (Visweswara) decorated with flowers and offerings",
    },
  ],
  address: {
    street: "Kasi Visweswara Temple",
    city: "Anakapalle",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    pincode: "531001",
    landmark: "Near Anakapalle Railway Station",
  },
  coordinates: {
    latitude: 17.6868,
    longitude: 83.0087,
  },
  timings:
    "5:30 AM - 8:30 PM (Morning: 5:30 AM – 12 PM, Evening: 4:30 PM – 8:30 PM)",
  entryFee: "General Entry: Free (Special poojas/Abhishekam: nominal charges)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; Mondays and Mahashivratri for spiritual significance",
  dressCode:
    "Modest attire expected. Men: traditional wear or modest formal clothing. Women: saree, salwar kameez, or traditional attire. Avoid shorts, sleeveless tops, and inappropriate casual wear.",
  nearbyAttractions: [
    "Anakapalle",
    "Visakhapatnam",
    "Anakapalle Railway Station",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
