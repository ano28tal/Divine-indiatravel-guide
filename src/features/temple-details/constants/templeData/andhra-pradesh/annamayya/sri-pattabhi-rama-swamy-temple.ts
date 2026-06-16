import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import pattabhiRama from "@/shared/assets/andhra-pradesh/annamayya/sri-pattabhi-rama-swamy-temple/1.jpg";

export const sriPattabhiRamaSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-annamayya-sri-pattabhi-rama-swamy-temple",
  name: "Sri Pattabhi Rama Swamy Temple",
  history:
    "The temple's origins date back several centuries and are closely associated with the Vijayanagara Empire, which was known for promoting temple architecture and Vaishnavite traditions. It is believed to have been built during the 14th–16th century, patronized by Vijayanagara kings, and constructed to honor Lord Rama in his royal form. According to local belief, the region (Valmikipuram, also known as Vayalpadu) is associated with Maharishi Valmiki, the author of the Ramayana, and it is believed that sages performed penance here, making it spiritually powerful. Its historical timeline spans an ancient period as a spiritual site linked with sages and Ramayana traditions, a medieval period when the temple was constructed and expanded under Vijayanagara rulers, and a modern era in which it is maintained by temple authorities and visited by pilgrims year-round. The temple has undergone minor renovations but still retains its original architectural beauty and sacred aura.",
  significance:
    "The temple holds deep spiritual importance as it represents Lord Rama in his royal (Pattabhisheka) form, symbolizing the victory of truth and righteousness, ideal leadership and dharma, and harmony and justice. Devotees pray for family peace, marriage blessings, and success and stability, with special rituals performed during Sri Rama Navami and Vaikuntha Ekadashi. Culturally, the temple acts as a spiritual hub in the region, hosts religious gatherings and festivals, and preserves ancient Vaishnavite traditions — not just a place of worship but also a center of cultural and spiritual learning.",
  about:
    "The Sri Pattabhi Rama Swamy Temple is one of the most revered and ancient temples dedicated to Lord Rama in Andhra Pradesh. Located in the peaceful town of Valmikipuram, this temple holds immense religious and historical significance and is considered a sacred destination for devotees of Lord Rama. The presiding deity is Lord Sri Rama in Pattabhi (coronation) form, seated majestically along with Goddess Sita and Lord Lakshmana. This unique representation symbolizes the coronation of Lord Rama after his return to Ayodhya, making it spiritually significant as a symbol of the victory of dharma (righteousness) over adharma (evil). The temple is famous for its ancient Dravidian architecture, the rare depiction of Pattabhi Rama, its peaceful spiritual atmosphere, and its strong connection with Ramayana traditions. Devotees visit this temple seeking blessings for peace, prosperity, and family harmony.",
  images: [
    {
      url: pattabhiRama,
      alt: "Sri Pattabhi Rama Swamy Temple at Valmikipuram",
      caption:
        "The Dravidian-style gopurams of Sri Pattabhi Rama Swamy Temple set against the hills of Valmikipuram",
    },
  ],
  address: {
    street: "Valmikipuram (also known as Vayalpadu)",
    city: "Valmikipuram",
    district: "Annamayya",
    state: "Andhra Pradesh",
    pincode: "517299",
    landmark: "Valmikipuram town",
  },
  coordinates: {
    latitude: 13.687,
    longitude: 78.47,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
  entryFee:
    "Free entry for all devotees (seva/pooja tickets available at the temple counter)",
  bestTimeToVisit:
    "Early morning for peaceful darshan; during the Rama Navami festival for grand celebrations",
  dressCode:
    "Traditional Indian attire encouraged. Men: dhoti, kurta, or formal wear. Women: saree, salwar kameez, or traditional dress. Avoid shorts, sleeveless tops, and western casual wear.",
  nearbyAttractions: ["Valmikipuram (Vayalpadu)", "Madanapalle", "Tirupati"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
