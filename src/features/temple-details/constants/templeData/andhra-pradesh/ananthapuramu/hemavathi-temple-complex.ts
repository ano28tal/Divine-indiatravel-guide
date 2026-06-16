import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import hemavathiComplex from "@/shared/assets/andhra-pradesh/ananthapuramu/hemavathi-temple-complex/1.jpg";

export const hemavathiTempleComplex: TempleDetails = {
  id: "andhra-pradesh-ananthapuramu-hemavathi-temple-complex",
  name: "Hemavathi Temple Complex",
  history:
    "The Hemavathi Temple Complex dates back to the 8th–10th century CE and was built during the reign of the Nolamba Dynasty, who ruled parts of present-day Karnataka and Andhra Pradesh. It was constructed by the Nolamba rulers, especially under King Iriva Nolamba, and Hemavathi (ancient Henjeru) served as the capital of the Nolamba dynasty. The temples are believed to be dedicated to Lord Shiva in various forms, symbolizing cosmic creation and destruction, and local legends suggest the site was once a major spiritual learning center. Its historical timeline spans initial temple constructions in the 8th century, expansion of the temple complex under the Nolambas in the 9th–10th century, influence of the Cholas and Vijayanagara Empire post 10th century, and protection and maintenance by the Archaeological Survey of India (ASI) in the modern era. Architecturally, it blends Dravidian and early Chalukyan styles with detailed carvings of mythological figures, deities, and floral and geometric patterns.",
  significance:
    "The Hemavathi Temple Complex holds deep spiritual importance, especially for devotees of Lord Shiva. It represents multiple forms of Shiva worship and is considered a powerful place for meditation and spiritual energy. Devotees believe prayers here bring peace of mind, removal of obstacles, and fulfillment of wishes. Rituals include daily Shiva pooja, with special rituals during Mahashivratri and Karthika Masam. Culturally, the complex reflects ancient South Indian temple culture and acts as a historical and spiritual landmark in the region.",
  about:
    "The Hemavathi Temple Complex is an ancient and architecturally significant group of temples located in the village of Hemavathi. This complex is known for its historical richness, intricate carvings, and spiritual importance, making it a hidden gem for both devotees and history enthusiasts. The primary deity worshipped here is Lord Shiva, along with several other deities such as Durga, Vishnu, and Ganapati housed in different shrines within the complex. One of the prominent temples in the complex is dedicated to Lord Doddeshwara (a form of Shiva). The complex is famous for its Dravidian architectural style, intricately carved stone pillars and sculptures, a collection of over 20 ancient temples in one location, and being an important Shaivite pilgrimage site. Overall, it offers a peaceful spiritual environment combined with a rich historical backdrop.",
  images: [
    {
      url: hemavathiComplex,
      alt: "Hemavathi Temple Complex",
      caption:
        "The ancient stone temple complex of Hemavathi with its Nolamba-era architecture",
    },
  ],
  address: {
    street: "Hemavathi Village, Amarapuram Mandal",
    city: "Amarapuram",
    district: "Ananthapuramu",
    state: "Andhra Pradesh",
    pincode: "515281",
    landmark: "Near Amarapuram (~15 km)",
  },
  coordinates: {
    latitude: 13.79,
    longitude: 77.27,
  },
  timings: "6:00 AM - 7:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 7 PM)",
  entryFee: "Free entry (ASI-protected site)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; winter months (October to February) for comfortable weather",
  dressCode:
    "No strict enforced dress code, but traditional and modest attire is encouraged. Men: kurta-pajama, dhoti, or full pants. Women: saree, salwar suit, or traditional wear. Avoid shorts, sleeveless tops, and revealing outfits.",
  nearbyAttractions: [
    "Amarapuram",
    "Hindupur",
    "Over 20 ancient temples in the complex",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
