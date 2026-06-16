import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import sompalliChennakesava from "@/shared/assets/andhra-pradesh/annamayya/sompalli-chennakesava-swamy-temple/1.jpg";

export const sompalliChennakesavaSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-annamayya-sompalli-chennakesava-swamy-temple",
  name: "Sompalli Chennakesava Swamy Temple",
  history:
    "The origins of the Sompalli Chennakesava Swamy Temple date back to the Vijayanagara Empire period (14th–16th century), a time known for the flourishing of art, culture, and temple architecture in South India. It is believed that the temple was constructed under the patronage of Vijayanagara rulers, who were devoted followers of Lord Vishnu. The temple showcases the hallmark features of Vijayanagara architecture, including ornate mandapas (pillared halls), detailed carvings of gods, dancers, and mythological scenes, and a symmetrical layout with fine stone craftsmanship. Local legends suggest the temple was established to honor Lord Vishnu in his form as Chennakesava, symbolizing divine beauty and compassion. Its timeline spans temple construction during Vijayanagara rule in the 14th–16th century, maintenance by local rulers and devotees in the post-Vijayanagara period, and restoration and upkeep by local authorities and temple committees in the modern era.",
  significance:
    "The temple holds deep spiritual importance for devotees of Lord Vishnu. Lord Chennakesava is believed to be a wish-fulfilling deity, especially for family harmony, career success, financial stability, and health and well-being. Rituals include daily puja and aarti, special prayers during Vaikunta Ekadashi and other Vishnu festivals, and offerings of flowers, fruits, and prasadam. Devotees believe sincere prayers here help remove obstacles and bring divine blessings, and the peaceful environment enhances meditation and spiritual connection. The temple is an important religious landmark reflecting the rich cultural heritage of Andhra Pradesh, bringing together local communities and preserving traditional practices.",
  about:
    "Sompalli Chennakesava Swamy Temple is a historically significant Hindu temple dedicated to Lord Chennakesava Swamy, a form of Lord Vishnu known for his divine beauty and grace. The temple is located in the peaceful village of Sompalli in Annamayya district and is admired for its architectural elegance and spiritual atmosphere. The presiding deity, Lord Chennakesava, is worshipped as the protector and preserver of the universe; devotees believe that offering prayers here brings prosperity, peace, and fulfillment of wishes. The temple is particularly famous for its intricately carved stone pillars and sculptures, reflecting the brilliance of ancient South Indian temple architecture. This temple is not only a place of worship but also a heritage site that attracts history lovers, spiritual seekers, and tourists alike.",
  images: [
    {
      url: sompalliChennakesava,
      alt: "Sompalli Chennakesava Swamy Temple",
      caption:
        "The intricately carved stone structure of Sompalli Chennakesava Swamy Temple",
    },
  ],
  address: {
    street: "Sompalli Village",
    city: "Rayachoti",
    district: "Annamayya",
    state: "Andhra Pradesh",
    pincode: "516503",
    landmark: "Sompalli Village",
  },
  coordinates: {
    latitude: 13.8,
    longitude: 78.5,
  },
  timings: "6:00 AM - 8:00 PM (Morning: 6 AM – 12 PM, Evening: 4 PM – 8 PM)",
  entryFee:
    "Free entry for all devotees (special pujas may be conducted on request)",
  bestTimeToVisit:
    "Early morning (peaceful darshan); evening aarti time for a spiritually vibrant atmosphere; winter season for pleasant weather",
  dressCode:
    "Traditional and modest attire. Men: dhoti, kurta, or formal wear. Women: saree, salwar kameez, or traditional dresses. Avoid shorts, sleeveless tops, or revealing clothes; maintain a respectful appearance inside temple premises.",
  nearbyAttractions: ["Rayachoti", "Kadapa", "Tirupati"],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
