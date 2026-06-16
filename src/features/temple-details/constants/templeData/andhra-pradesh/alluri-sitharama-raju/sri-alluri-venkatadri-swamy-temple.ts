import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import venkatadriSwamyTemple from "@/shared/assets/andhra-pradesh/alluri-sitharama-raju/sri-alluri-venkatadri-swamy-temple/1.jpg";

export const sriAlluriVenkatadriSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-alluri-sitharama-raju-sri-alluri-venkatadri-swamy-temple",
  name: "Sri Alluri Venkatadri Swamy Temple",
  history:
    "The exact origin of the temple is not precisely documented, but it is believed to be several centuries old, rooted in local traditions and tribal devotion. The temple likely began as a small shrine maintained by local communities and later developed into a structured temple. Over time, it has been supported and maintained by local rulers and village heads, devotee contributions, and regional temple authorities. According to local legends, Lord Vishnu appeared in this region to protect devotees living in forest areas, and the deity is believed to be self-manifested (Swayambhu) or divinely established. Its historical evolution spans local shrine worship in the ancient/medieval period, gradual construction of the temple structure in later centuries, and renovations with improved access for pilgrims in the modern era.",
  significance:
    "This temple holds strong spiritual importance, especially among local tribal communities and devotees of Lord Vishnu. Devotees believe the deity fulfills immediate wishes (Mannat), offering special prayers for health recovery, financial stability, and family peace. Lord Venkatadri Swamy is worshipped as a form of Lord Vishnu who protects and sustains the universe, with devotees believing that worship here brings prosperity and wealth, relief from hardships, and fulfillment of wishes. The temple acts as a religious hub for nearby villages and strengthens cultural and spiritual unity in the region.",
  about:
    "Sri Alluri Venkatadri Swamy Temple is a revered Hindu temple located in the tribal and forest-rich region of Alluri Sitarama Raju District in Andhra Pradesh. Surrounded by the scenic beauty of the Eastern Ghats, the temple offers a peaceful and spiritually uplifting environment for devotees. It is dedicated to Lord Vishnu in the form of Venkatadri Swamy, a manifestation closely associated with Lord Venkateswara (Balaji). Known as a regional spiritual center for tribal and rural communities, it is believed to grant quick blessings and wish fulfillment, and its peaceful location amidst forests makes it ideal for meditation and devotion. The temple features a small sanctum (garbhagriha) with traditional design and local artistic influence, housing the idol of Lord Venkatadri Swamy decorated with flowers and traditional ornaments.",
  images: [
    {
      url: venkatadriSwamyTemple,
      alt: "Idol of Lord Venkatadri Swamy decorated with ornaments",
      caption:
        "The idol of Lord Venkatadri Swamy (Vishnu form) adorned with flowers and traditional ornaments",
    },
  ],
  address: {
    street: "Sri Alluri Venkatadri Swamy Temple",
    city: "Paderu",
    district: "Alluri Sitharama Raju",
    state: "Andhra Pradesh",
    pincode: "531024",
    landmark: "Near Paderu / Rampachodavaram",
  },
  coordinates: {
    latitude: 17.9,
    longitude: 81.9,
  },
  timings:
    "6:00 AM - 8:00 PM (Morning Darshan: 6 AM – 12 PM, Evening Darshan: 4 PM – 8 PM)",
  entryFee: "General Entry: Free (Special sevas may have nominal charges)",
  bestTimeToVisit:
    "Winter and post-monsoon seasons; early morning for peaceful darshan",
  dressCode:
    "Simple and traditional attire. Men: Dhoti, shirt, or traditional wear. Women: Saree or salwar kameez. Avoid shorts, revealing clothes, and casual western outfits inside the sanctum.",
  nearbyAttractions: ["Paderu", "Rampachodavaram", "Eastern Ghats forests"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
