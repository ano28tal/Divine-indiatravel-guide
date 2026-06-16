import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import panchadarlaTempleImg from "@/shared/assets/andhra-pradesh/anakapalli/panchadarla-temple/1.jpg";

export const panchadarlaTemple: TempleDetails = {
  id: "andhra-pradesh-anakapalli-panchadarla-temple",
  name: "Panchadarla Temple",
  history:
    "The origins of Panchadarla Temple are ancient, though exact construction dates are not precisely documented. It is believed that the temple has existed for several centuries and was developed under regional dynasties that promoted Shaivism in the region. Architectural elements suggest influence from the Eastern Ganga Dynasty and Chalukyan-style temple architecture. Over time, the temple has undergone minor renovations while retaining its traditional structure. According to local legends, the five sacred streams originated from the blessings of Lord Shiva and represent five holy elements or sacred rivers; another belief states that sages and saints performed penance here, making the place spiritually charged. The timeline spans an ancient era associated with sages and spiritual practices, establishment of the temple structure in the early medieval period, expansion under later dynasties, and management by local temple authorities in the modern era.",
  significance:
    "Panchadarla Temple is deeply revered for its natural and spiritual elements. Dedicated to Lord Shiva as Dharmalingeswara Swamy, it symbolizes the destruction of evil and transformation. What makes it unique is the presence of five natural water streams ('Pancha Dharalu') that continuously flow near the temple and are believed to have purifying powers. Devotees wash their hands and feet or bathe in the streams before entering, and offering prayers is believed to bring mental peace and relief from stress. Devotees visit to cleanse sins through the sacred water, for peace of mind and spiritual healing, and to seek blessings for health and family well-being. Special rituals are performed during Shivaratri.",
  about:
    "Panchadarla Temple, also known as Sri Dharmalingeswara Swamy Temple, is a serene and spiritually significant temple located near Anakapalle in Andhra Pradesh. Nestled amidst lush greenery and low hillocks, the temple is known for its peaceful environment and unique natural features. It is dedicated to Lord Shiva as Dharmalingeswara Swamy. What makes this temple unique is the presence of five natural water streams ('Pancha Dharalu') that continuously flow near the temple — these streams are believed to be sacred and are used for ritual purification before darshan. The temple is famous for its naturally flowing five water springs, its calm and less crowded spiritual atmosphere, and being an important local pilgrimage site that combines nature and spirituality. The temple features a simple yet traditional structure with stone carvings and a mandapam, housing the Shiva Lingam (Dharmalingeswara Swamy).",
  images: [
    {
      url: panchadarlaTempleImg,
      alt: "Panchadarla Temple entrance gopuram",
      caption:
        "The entrance of Panchadarla (Sri Dharmalingeswara Swamy) Temple surrounded by greenery",
    },
  ],
  address: {
    street: "Panchadarla Village, Near Anakapalle",
    city: "Anakapalle",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    pincode: "531001",
    landmark: "Panchadarla Village",
  },
  coordinates: {
    latitude: 17.6905,
    longitude: 83.0135,
  },
  timings: "6:00 AM - 7:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 7 PM)",
  entryFee: "General Entry: Free (Special poojas may have nominal charges)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; during Mahashivratri for spiritual celebrations",
  dressCode:
    "Modest and traditional attire. Men: traditional wear or full pants with shirt. Women: saree, salwar kameez, or modest dress. Avoid shorts, sleeveless outfits, and revealing clothes.",
  nearbyAttractions: [
    "Anakapalle",
    "Scenic hills and forest backdrop",
    "Five sacred streams (Pancha Dharalu)",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
