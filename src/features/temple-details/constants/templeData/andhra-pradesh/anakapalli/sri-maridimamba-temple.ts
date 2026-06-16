import type { TempleDetails } from "../../../../types/templeDetails";
import {
  defaultFoodCenters,
  defaultSpiritualTeachers,
  defaultYogaCenters,
} from "../../helpers";
import maridimamba1 from "@/shared/assets/andhra-pradesh/anakapalli/sri-maridimamba-temple/1.jpg";
import maridimamba2 from "@/shared/assets/andhra-pradesh/anakapalli/sri-maridimamba-temple/2.jpg";

export const sriMaridimambaTemple: TempleDetails = {
  id: "andhra-pradesh-anakapalli-sri-maridimamba-temple",
  name: "Sri Maridimamba Temple",
  history:
    "The exact historical origin of Sri Maridimamba Temple is not clearly documented, but it is believed to have existed for several centuries, rooted in folk traditions and local deity worship rather than royal patronage. Unlike large temple complexes built by dynasties, this temple evolved as a community-centered shrine, gradually expanding over time due to increasing devotion and local support. According to local legends, Goddess Maridimamba is believed to be a manifestation of Durga/Parvati, appearing to protect the region from epidemics and calamities; it is said that during times of disease outbreaks, villagers prayed to the goddess and relief followed, strengthening faith in her healing powers. Its historical growth went from a small shrine maintained by villagers to a proper temple structure, renovated and maintained by local temple authorities and devotees. The timeline spans folk deity worship in the ancient/early period, regional importance in the medieval period, and temple expansion with organized festivals in the modern era.",
  significance:
    "Sri Maridimamba Temple holds deep spiritual value as a guardian deity shrine. Goddess Maridimamba is worshipped as a form of Shakti (Divine Mother) and a Gramadevata (village deity), believed to protect devotees from illness and negative forces and central to local religious practices. Devotees offer coconuts, turmeric, kumkum, and sarees, with special rituals performed for health and protection (animal sacrifice was historically associated but is now largely discontinued or regulated). Devotees visit for protection from diseases, family safety and prosperity, fulfillment of vows (mannat), and emotional and spiritual peace. The Maridimamba Jatara is a major event attracting thousands of devotees and reflecting local traditions and community unity.",
  about:
    "Sri Maridimamba Temple is a highly revered local shrine dedicated to Goddess Maridimamba, a powerful form of Shakti (Divine Mother) worshipped as the protector and guardian deity of the region. The temple is located in the town of Anakapalle and holds deep cultural and spiritual importance among local communities. Goddess Maridimamba is considered a Gramadevata (village deity), believed to safeguard devotees from diseases, negative energies, and misfortunes, and is often associated with healing powers — worshipped with immense devotion, especially by rural and traditional families. The temple is widely known for its annual Jatara (festival), one of the biggest local religious events, strong community participation and devotion, and its role as a protector deity temple. The temple features a colorful, traditionally designed structure, a prayer hall and sanctum, and the idol of Goddess Maridimamba adorned with flowers and jewelry.",
  images: [
    {
      url: maridimamba1,
      alt: "Goddess Maridimamba idol",
      caption:
        "The idol of Goddess Maridimamba adorned with flowers and ornaments",
    },
    {
      url: maridimamba2,
      alt: "Sri Maridimamba Temple decorated entrance",
      caption: "The colorful temple entrance decorated during a festival",
    },
  ],
  address: {
    street: "Sri Maridimamba Temple, Anakapalle Town",
    city: "Anakapalle",
    district: "Anakapalli",
    state: "Andhra Pradesh",
    pincode: "531001",
    landmark: "Near Anakapalle Railway Station",
  },
  coordinates: {
    latitude: 17.6868,
    longitude: 83.0088,
  },
  timings:
    "5:00 AM - 9:00 PM (Morning Darshan: 5 AM – 12 PM, Evening Darshan: 4 PM – 9 PM)",
  entryFee: "General Darshan: Free (Special poojas/offerings: charges vary)",
  bestTimeToVisit:
    "Early morning or evening for peaceful darshan; during Maridimamba Jatara for a cultural experience (expect heavy crowds)",
  dressCode:
    "Modest and respectful attire. Recommended: traditional Indian wear — saree, salwar kameez, kurta, dhoti. Avoid shorts and sleeveless or revealing clothes.",
  nearbyAttractions: [
    "Anakapalle town",
    "Visakhapatnam",
    "Anakapalle Railway Station",
  ],
  yogaCenters: defaultYogaCenters,
  foodCenters: defaultFoodCenters,
  spiritualTeachers: defaultSpiritualTeachers,
};
