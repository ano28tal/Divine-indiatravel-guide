import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import gudimallamTempleImage from "@/shared/assets/andhra-pradesh/chittoor/gudimallam-parasurameswara-swamy-temple/1.jpg";

export const gudimallamParasurameswaraSwamyTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-gudimallam-parasurameswara-swamy-temple",
  name: "Gudimallam Parasurameswara Swamy Temple",
  history:
    "The origins of the Gudimallam Temple trace back to around the 2nd or 3rd century BCE, making it one of the oldest continuously worshipped Shiva temples in the world. It is believed to have been constructed during the pre-Satavahana period, with later contributions from the Pallavas, Cholas, and the Vijayanagara Empire. The Shiva Lingam itself is considered pre-classical, indicating very early forms of Shaivism, while structural additions and renovations were made across the Pallava, Chola, and Vijayanagara eras. According to legend, the temple is associated with Lord Parashurama, the sixth avatar of Vishnu, who is believed to have installed the Shiva Lingam here to atone for his sins.",
  significance:
    "Renowned for housing a unique and ancient Shiva Lingam featuring a full-length human figure of Lord Shiva carved onto it, depicted holding a ram and a water pot — symbolizing his role as a divine ascetic and protector. It is widely regarded as one of the earliest known examples of Shiva worship in lingam form, representing an early form of Shiva before classical iconography developed. The temple is a rare spiritual and historical landmark attracting historians, archaeologists, and devotees alike.",
  about:
    "The Gudimallam Parasurameswara Swamy Temple is one of the oldest and most historically significant Shiva temples in India, located in the small village of Gudimallam near Tirupati in Chittoor district. The main deity is Lord Shiva in the form of Parasurameswara. What makes the temple exceptional is its rare Shiva Lingam carved with a human figure of Lord Shiva, dating back over 2000 years. This combination of mythology and archaeology makes it a major site for understanding the evolution of temple architecture and religious practices in India.",
  images: [
    {
      url: gudimallamTempleImage,
      alt: "Gudimallam Parasurameswara Swamy Temple stone structure",
      caption:
        "The ancient stone structure of Gudimallam Parasurameswara Swamy Temple",
    },
  ],
  address: {
    street: "Gudimallam Village, Yerpedu Mandal",
    city: "Gudimallam",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517619",
    landmark: "Approx. 13 km from Tirupati",
  },
  coordinates: {
    latitude: 13.6076,
    longitude: 79.6192,
  },
  timings: "Morning: 6:00 AM - 12:00 PM; Evening: 5:00 PM - 8:00 PM",
  entryFee: "Free entry for all devotees",
  bestTimeToVisit:
    "Early morning for a peaceful darshan; Mahashivaratri for grand celebrations",
  dressCode:
    "Modest and traditional attire — Men: dhoti, kurta, or full pants with shirt; Women: saree, salwar kameez, or traditional wear. Avoid shorts, sleeveless tops, and revealing clothing.",
  nearbyAttractions: [
    "Tirumala Venkateswara Temple",
    "Sri Kalahasti Temple",
    "Kanipakam Vinayaka Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
