import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import boyakondaGangammaTempleImage from "@/shared/assets/andhra-pradesh/chittoor/boyakonda-gangamma-temple/1.jpg";

export const boyakondaGangammaTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-boyakonda-gangamma-temple",
  name: "Boyakonda Gangamma Temple",
  history:
    "The origins of the Boyakonda Gangamma Temple are deeply rooted in local folklore and tribal traditions rather than formal royal construction records. It is believed the temple has existed for several centuries and was initially worshipped by local tribal communities. According to legend, Goddess Gangamma appeared to protect villagers from evil forces and natural calamities, and her divine presence was established on the hill where a shrine was built to honor her. Another belief holds that the goddess is a manifestation of Parvati who chose Boyakonda hill as her abode. The shrine, initially small and maintained by locals, gradually expanded into a structured temple as pilgrim visits increased.",
  significance:
    "Dedicated to Goddess Gangamma, a powerful regional form of Shakti (Divine Mother), worshipped as a protector and healer who safeguards devotees from evil forces, diseases, and misfortunes. Devotees believe she removes obstacles and grants wishes, and visit seeking blessings for health, success, and family well-being — often before starting important life events. Rituals include coconut breaking and offering sarees to the goddess.",
  about:
    "Boyakonda Gangamma Temple is a renowned hilltop shrine dedicated to Goddess Gangamma, situated amidst scenic hills in Chittoor district. It offers a peaceful yet spiritually charged atmosphere that attracts thousands of devotees every year. Famous for its hilltop location with panoramic views, strong local devotion and folk traditions, and annual festivals that draw large crowds, the temple serves as a spiritual hub for nearby villages and is closely connected with local traditions and rural faith.",
  images: [
    {
      url: boyakondaGangammaTempleImage,
      alt: "Boyakonda Gangamma Temple hilltop entrance with steps",
      caption: "The golden hilltop gopuram of Boyakonda Gangamma Temple",
    },
  ],
  address: {
    street: "Boyakonda Hill",
    city: "Boyakonda",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517299",
    landmark: "Approx. 30 km from Chittoor",
  },
  coordinates: {
    latitude: 13.217,
    longitude: 78.921,
  },
  timings: "6:00 AM - 8:00 PM; general darshan available throughout the day",
  entryFee: "Free entry for all devotees",
  bestTimeToVisit:
    "Early morning (6:00 AM - 9:00 AM) for a peaceful darshan; evenings for scenic views and aarti",
  dressCode:
    "Traditional and modest attire — Men: dhoti, kurta, or full pants with shirt; Women: saree, salwar kameez, or traditional wear. Avoid shorts, sleeveless tops, and revealing clothes.",
  nearbyAttractions: [
    "Ardhagiri Veeranjaneya Swamy Temple",
    "Mogileeswara Swamy Temple",
    "Kanipakam Vinayaka Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
