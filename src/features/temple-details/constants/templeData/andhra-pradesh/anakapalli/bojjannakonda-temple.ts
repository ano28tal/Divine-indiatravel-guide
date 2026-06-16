import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import bojjannakonda1 from "@/shared/assets/andhra-pradesh/anakapalli/bojjannakonda-temple/1.jpg";
import bojjannakonda2 from "@/shared/assets/andhra-pradesh/anakapalli/bojjannakonda-temple/2.jpg";

export const bojjannakondaTemple: TempleDetails = {
  id: "andhra-pradesh-anakapalli-bojjannakonda-temple",
  name: "Bojjannakonda Temple",
  history:
    "Bojjannakonda dates back to the 4th–9th century CE, flourishing as a major Buddhist monastic center and an active hub for monks, scholars, and meditation practices. The site developed gradually under early local rulers and was later supported by the Eastern Chalukyas and regional dynasties. It reflects the transition of Buddhism: the Hinayana phase focused on symbolic worship (stupas), the Mahayana phase introduced Buddha idols, and Vajrayana influence brought tantric elements and complex carvings. Although primarily historical, local legends suggest the hills were once centers of intense meditation, and the name 'Bojjannakonda' may be derived from 'Buddhuni Konda' (Hill of Buddha). Its timeline spans initial Buddhist settlements in the 4th century CE, growth of monastic structures and stupas in the 5th–7th century, peak development with Mahayana influence in the 7th–9th century, decline of Buddhism in the region after the 9th century, and protection as a site under the Archaeological Survey of India (ASI) in the modern era.",
  significance:
    "Though no longer an active worship site, Bojjannakonda holds deep spiritual importance. It represents ancient Buddhist learning and meditation practices and symbolizes the evolution of Buddhist philosophy. Visitors often experience a sense of peace and calm, making it ideal for meditation and quiet reflection. People visit to explore Buddhist heritage, for meditation and mindfulness, and for historical and educational purposes. As an important part of Andhra Pradesh's Buddhist history, it attracts scholars, tourists, and international visitors, and shows the influence of ancient trade routes and cultural exchange.",
  about:
    "Bojjannakonda, located near the village of Sankaram in Anakapalle district, is an ancient Buddhist archaeological site rather than a conventional Hindu temple. It is one of the most significant Buddhist heritage sites in South India, known for its rock-cut caves, stupas, and monastic structures. The site consists of two adjacent hills — Bojjannakonda and Lingalakonda — and is associated with Lord Buddha and the teachings of Mahayana and Hinayana traditions. It is famous for housing rock-cut caves, stupas, and chaityas (prayer halls), displaying a blend of Hinayana, Mahayana, and Vajrayana Buddhism, a massive rock-cut seated Buddha statue, and scenic hilltop views with a peaceful spiritual atmosphere. It is an important destination for history lovers, spiritual seekers, and archaeology enthusiasts, featuring rock-cut caves used by monks, chaityas and viharas (monasteries), and circular stupas on the hilltop.",
  images: [
    {
      url: bojjannakonda1,
      alt: "Bojjannakonda Buddhist site aerial view",
      caption:
        "Aerial view of the Bojjannakonda Buddhist complex and its rock-cut structures",
    },
    {
      url: bojjannakonda2,
      alt: "Rock-cut Buddha statues at Bojjannakonda",
      caption: "The rock-cut seated Buddha statues carved into the hillside",
    },
  ],
  address: {
    street: "Bojjannakonda (Sankaram), Near Anakapalle",
    city: "Anakapalle",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    pincode: "531001",
    landmark: "Sankaram village",
  },
  coordinates: {
    latitude: 17.685,
    longitude: 83.003,
  },
  timings: "9:00 AM - 5:00 PM (visiting timings)",
  entryFee:
    "Indian Citizens: ₹20 (approx.); Foreign Tourists: ₹250 (approx.); Children: free/minimal (managed by ASI; fees may change)",
  bestTimeToVisit:
    "Morning or late afternoon for pleasant weather; winter season (October–February) is ideal",
  dressCode:
    "No strict dress code, as it is an archaeological site. Recommended: comfortable, modest clothing and walking shoes (due to the hill climb). Avoid very short or revealing clothes for cultural respect.",
  nearbyAttractions: [
    "Lingalakonda",
    "Sankaram village",
    "Anakapalle",
    "Visakhapatnam",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
