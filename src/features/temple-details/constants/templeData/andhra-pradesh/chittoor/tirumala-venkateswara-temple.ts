import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultYogaCenters,
  defaultFoodCenters,
  defaultSpiritualTeachers,
} from "../../helpers";
import tirumalaVenkateswaraTempleImage from "@/shared/assets/andhra-pradesh/chittoor/tirumala-venkateswara-temple/1.jpg";

export const tirumalaVenkateswaraTemple: TempleDetails = {
  id: "andhra-pradesh-chittoor-tirumala-venkateswara-temple",
  name: "Tirumala Venkateswara Temple",
  history:
    "The origins of the temple date back over a thousand years, with references found in ancient scriptures and Tamil Sangam literature. The temple gained prominence during the rule of the Pallava Dynasty, and later flourished under the Chola Dynasty and the Vijayanagara Empire. The Vijayanagara kings, especially Krishnadevaraya, made significant contributions including the gold plating of the temple tower and donations of jewels. According to legend, Lord Vishnu descended to earth as Lord Venkateswara to save mankind from the trials of Kaliyuga, and is believed to have taken a loan from Kubera for his marriage — devotees contribute offerings to help repay this divine debt. It is now managed by Tirumala Tirupati Devasthanams (TTD).",
  significance:
    "Dedicated to Lord Venkateswara, a form of Lord Vishnu, the deity is revered as 'Kaliyuga Varada' — the giver of boons in the present age. It is one of the most sacred and visited pilgrimage sites in the world and among the richest temples, with offerings of cash, gold, and valuables. Devotees believe wishes made here are always granted; hair tonsuring (mundan) is offered as a sign of devotion, and donations symbolize repayment of the Lord's divine debt.",
  about:
    "The Tirumala Venkateswara Temple is one of the most sacred and visited pilgrimage sites in the world, located in the Tirumala hills of Chittoor district, Andhra Pradesh. Dedicated to Lord Venkateswara, the temple attracts millions of devotees every year who seek blessings for prosperity, health, and success. It is renowned for its grand architecture, spiritual atmosphere, and the famous Tirupati Laddu Prasadam offered to devotees. The temple is a major center of South Indian culture, festivals, and traditions, and plays a vital role in charity, education, and social services through TTD.",
  images: [
    {
      url: tirumalaVenkateswaraTempleImage,
      alt: "Tirumala Venkateswara Temple golden gopuram",
      caption: "The golden Gopuram of the Tirumala Venkateswara Temple",
    },
  ],
  address: {
    street: "Tirumala Tirupati Devasthanams, Tirumala Hills",
    city: "Tirumala",
    district: "Chittoor",
    state: "Andhra Pradesh",
    pincode: "517504",
    landmark: "Approx. 22 km from Tirupati",
  },
  coordinates: {
    latitude: 13.6833,
    longitude: 79.347,
  },
  timings: "Approx. 2:30 AM - 11:30 PM (varies by darshan type)",
  entryFee:
    "Sarva Darshan (Free): long waiting time; Special Entry Darshan: ₹300; VIP Darshan via recommendations/donations",
  bestTimeToVisit:
    "Early morning on weekdays for less crowd; avoid peak festivals if you want shorter waiting times",
  dressCode:
    "Strict traditional dress code — Men: dhoti or pyjama with shirt/kurta; Women: saree, salwar kameez, or churidar. Avoid shorts, sleeveless shirts, and western outfits like mini skirts.",
  nearbyAttractions: [
    "Sri Kalahasti Temple",
    "Gudimallam Parasurameswara Swamy Temple",
    "Kanipakam Vinayaka Temple",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
