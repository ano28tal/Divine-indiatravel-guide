import type { State } from "../types/destinations";

// States: Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal
export const statesSW: State[] = [
  {
    name: "Sikkim",
    districts: [
      {
        name: "Gangtok",
        places: [
          {
            name: "Rumtek Monastery",
            history:
              "Built in 1966, seat of Karmapa, head of Karma Kagyu lineage. Replica of the original monastery in Tibet destroyed in 1959.",
            significance:
              "Most important monastery of Karma Kagyu sect. Houses sacred relics including Black Hat used in ceremony.",
          },
          {
            name: "Hanuman Tok",
            history:
              "Temple maintained by Indian Army at 7,200 feet. Legend says Hanuman rested here while carrying Sanjeevani herb.",
            significance:
              "Stunning views of Kanchenjunga. Only temple maintained by army. Serene atmosphere away from crowds.",
          },
        ],
      },
      {
        name: "Gyalshing",
        places: [
          {
            name: "Pemayangtse Monastery",
            history:
              "Built in 1705, one of the oldest monasteries in Sikkim. Means 'Perfect Sublime Lotus'. Only monks of pure Tibetan ancestry allowed.",
            significance:
              "Premier monastery of Nyingmapa sect. Houses 7-tiered painted model of heaven created by single monk over 5 years.",
          },
          {
            name: "Khecheopalri Lake",
            history:
              "Sacred lake for Buddhists and Hindus alike. Also known as 'Wish Fulfilling Lake'. Legend says leaves don't stay on surface.",
            significance:
              "Birds keep lake clean by removing leaves. Prayers written on flags around lake. Annual Buddha Purnima celebration.",
          },
        ],
      },
      {
        name: "Mangan",
        places: [],
      },
      {
        name: "Namchi",
        places: [],
      },
      {
        name: "Pakyong",
        places: [],
      },
      {
        name: "Soreng",
        places: [],
      },
    ],
  },
  {
    name: "Tamil Nadu",
    districts: [
      {
        name: "Ariyalur",
        places: [],
      },
      {
        name: "Chengalpattu",
        places: [],
      },
      {
        name: "Chennai",
        places: [],
      },
      {
        name: "Coimbatore",
        places: [],
      },
      {
        name: "Cuddalore",
        places: [
          {
            name: "Nataraja Temple",
            history:
              "Ancient temple where Shiva performed cosmic dance. One of five Pancha Bhoota Sthalas representing space (akasha).",
            significance:
              "Only temple for Shiva as Nataraja. Secret chamber represents formless space. Gold-plated roof.",
          },
        ],
      },
      {
        name: "Dharmapuri",
        places: [],
      },
      {
        name: "Dindigul",
        places: [],
      },
      {
        name: "Erode",
        places: [],
      },
      {
        name: "Kallakurichi",
        places: [],
      },
      {
        name: "Kancheepuram",
        places: [],
      },
      {
        name: "Kanniyakumari",
        places: [
          {
            name: "Bhagavathy Amman Temple",
            history:
              "An ancient temple dedicated to Goddess Kanyakumari, a form of Parvati. The nose ring of the deity is said to be visible from the sea.",
            significance:
              "Located at the southernmost tip of India where three oceans meet. Goddess here performed penance to marry Shiva.",
          },
          {
            name: "Vivekananda Rock Memorial",
            history:
              "Built in 1970 on a small island, commemorating Swami Vivekananda's meditation here in 1892 before his Chicago visit.",
            significance:
              "Sacred rock where Swami Vivekananda attained enlightenment. A major spiritual and tourist attraction.",
          },
        ],
      },
      {
        name: "Karur",
        places: [],
      },
      {
        name: "Krishnagiri",
        places: [],
      },
      {
        name: "Madurai",
        places: [
          {
            name: "Meenakshi Amman Temple",
            history:
              "Built in the 6th century, rebuilt in the 17th century. Dedicated to Goddess Meenakshi and Lord Sundareshwarar (Shiva).",
            significance:
              "One of the greatest examples of Dravidian architecture. Features 14 gopurams and attracts 15,000 visitors daily.",
          },
          {
            name: "Thiruparankundram Murugan Temple",
            history:
              "One of the six abodes of Murugan, carved out of rock. Dating back to 8th century. Lord Murugan married Devasena here.",
            significance:
              "First among the Arupadaiveedu temples. Rock-cut cave temple is ancient. Popular for Thaipusam and Thai Poosam.",
          },
        ],
      },
      {
        name: "Mayiladuthurai",
        places: [],
      },
      {
        name: "Nagapattinam",
        places: [],
      },
      {
        name: "Namakkal",
        places: [],
      },
      {
        name: "Perambalur",
        places: [],
      },
      {
        name: "Pudukkottai",
        places: [],
      },
      {
        name: "Ramanathapuram",
        places: [
          {
            name: "Ramanathaswamy Temple",
            history:
              "Built in 12th century, this temple has the longest corridor among all Hindu temples in India. Associated with the Ramayana.",
            significance:
              "One of the 12 Jyotirlinga temples. Part of the Char Dham pilgrimage. Lord Rama worshipped Shiva here before going to Lanka.",
          },
          {
            name: "Dhanushkodi",
            history:
              "A ghost town destroyed in the 1964 cyclone. Once a bustling port and pilgrimage center where Rama built the bridge to Lanka.",
            significance:
              "Confluence of Bay of Bengal and Indian Ocean. Believed to be where Rama broke the Sethu bridge with his bow.",
          },
        ],
      },
      {
        name: "Ranipet",
        places: [],
      },
      {
        name: "Salem",
        places: [],
      },
      {
        name: "Sivaganga",
        places: [],
      },
      {
        name: "Tenkasi",
        places: [],
      },
      {
        name: "Thanjavur",
        places: [
          {
            name: "Brihadeeswarar Temple",
            history:
              "Built by Raja Raja Chola I in 1010 CE. The vimana is 216 feet, tallest in the world. Capstone weighs 80 tons.",
            significance:
              "UNESCO World Heritage Site. Shadow of vimana never falls on ground. Engineering marvel of ancient India.",
          },
        ],
      },
      {
        name: "The Nilgiris",
        places: [],
      },
      {
        name: "Theni",
        places: [],
      },
      {
        name: "Thiruvallur",
        places: [],
      },
      {
        name: "Thiruvarur",
        places: [],
      },
      {
        name: "Thoothukkudi",
        places: [],
      },
      {
        name: "Tiruchirappalli",
        places: [
          {
            name: "Sri Ranganathaswamy Temple",
            history:
              "Largest functioning Hindu temple in the world covering 156 acres. Seven concentric walls. Dates to 1st century BCE.",
            significance:
              "First of 108 Divya Desams. Vishnu depicted in reclining pose. Non-Hindus can visit outer prakaarams.",
          },
        ],
      },
      {
        name: "Tirunelveli",
        places: [],
      },
      {
        name: "Tirupathur",
        places: [],
      },
      {
        name: "Tiruppur",
        places: [],
      },
      {
        name: "Tiruvannamalai",
        places: [
          {
            name: "Arunachaleswarar Temple",
            history:
              "One of the Pancha Bhoota Sthalas representing fire. Present structure mostly from 9th century Chola period.",
            significance:
              "During Karthigai Deepam, huge fire lit atop hill visible for miles. Circumambulation of Arunachala Hill is sacred.",
          },
        ],
      },
      {
        name: "Vellore",
        places: [],
      },
      {
        name: "Viluppuram",
        places: [],
      },
      {
        name: "Virudhunagar",
        places: [],
      },
    ],
  },
  {
    name: "Telangana",
    districts: [
      {
        name: "Adilabad",
        places: [],
      },
      {
        name: "Bhadradri Kothagudem",
        places: [],
      },
      {
        name: "Hanumakonda",
        places: [],
      },
      {
        name: "Hyderabad",
        places: [
          {
            name: "Birla Mandir",
            history:
              "Built in 1976, constructed from 2000 tons of Rajasthani white marble. Built by Birla Foundation.",
            significance:
              "Overlooking Hussain Sagar Lake. Blend of South Indian, Rajasthani and Udipi architectural styles. Beautiful night illumination.",
          },
          {
            name: "Mecca Masjid",
            history:
              "Built by Muhammad Quli Qutb Shah in 1617, construction completed in 1694. Bricks from Mecca used in central arch.",
            significance:
              "One of the largest mosques in India. Can accommodate 10,000 worshippers. Tombs of Nizams within compound.",
          },
        ],
      },
      {
        name: "Jagitial",
        places: [],
      },
      {
        name: "Jangoan",
        places: [],
      },
      {
        name: "Jayashankar Bhupalapally",
        places: [],
      },
      {
        name: "Jogulamba Gadwal",
        places: [
          {
            name: "Jogulamba Temple",
            history:
              "One of the 18 Maha Shakti Peethas, ancient temple rebuilt several times. Goddess Jogulamba is fierce form of Shakti.",
            significance:
              "One of only two Shakti Peethas in Telangana. Non-vegetarian offering is unique. Annual Brahmotsavam famous.",
          },
        ],
      },
      {
        name: "Kamareddy",
        places: [],
      },
      {
        name: "Karimnagar",
        places: [],
      },
      {
        name: "Khammam",
        places: [],
      },
      {
        name: "Kumuram Bheem Asifabad",
        places: [],
      },
      {
        name: "Mahabubabad",
        places: [],
      },
      {
        name: "Mahabubnagar",
        places: [],
      },
      {
        name: "Mancherial",
        places: [],
      },
      {
        name: "Medak",
        places: [],
      },
      {
        name: "Medchal Malkajgiri",
        places: [],
      },
      {
        name: "Mulugu",
        places: [],
      },
      {
        name: "Nagarkurnool",
        places: [],
      },
      {
        name: "Nalgonda",
        places: [],
      },
      {
        name: "Narayanpet",
        places: [],
      },
      {
        name: "Nirmal",
        places: [],
      },
      {
        name: "Nizamabad",
        places: [],
      },
      {
        name: "Peddapalli",
        places: [],
      },
      {
        name: "Rajanna Sircilla",
        places: [],
      },
      {
        name: "Ranga Reddy",
        places: [],
      },
      {
        name: "Sangareddy",
        places: [],
      },
      {
        name: "Siddipet",
        places: [],
      },
      {
        name: "Suryapet",
        places: [],
      },
      {
        name: "Vikarabad",
        places: [],
      },
      {
        name: "Wanaparthy",
        places: [],
      },
      {
        name: "Warangal",
        places: [],
      },
      {
        name: "Yadadri Bhuvanagiri",
        places: [
          {
            name: "Yadadri Lakshmi Narasimha Temple",
            history:
              "Ancient temple on Yadadri hills, massively renovated 2016-2022. Deity is Narasimha in five forms.",
            significance:
              "Major Vaishnavite temple in Telangana. Massive renovation made it one of largest temple complexes. Beautiful granite structure.",
          },
        ],
      },
    ],
  },
  {
    name: "Tripura",
    districts: [
      {
        name: "Dhalai",
        places: [],
      },
      {
        name: "Gomati",
        places: [],
      },
      {
        name: "Khowai",
        places: [],
      },
      {
        name: "North Tripura",
        places: [],
      },
      {
        name: "Sepahijala",
        places: [],
      },
      {
        name: "South Tripura",
        places: [
          {
            name: "Tripura Sundari Temple",
            history:
              "Built in 1501 by Maharaja Dhanya Manikya. One of the 51 Shakti Peethas where Sati's right foot fell.",
            significance:
              "Most important temple in Tripura. Goddess is Shodashi, 16-year-old form of Shakti. Matabari village around it.",
          },
        ],
      },
      {
        name: "Unakoti",
        places: [],
      },
      {
        name: "West Tripura",
        places: [
          {
            name: "Ujjayanta Palace",
            history:
              "Built in 1901 by Maharaja Radha Kishore Manikya. Now serves as state museum. Indo-Saracenic architecture.",
            significance:
              "Houses temples of Lakshmi Narayan, Umamaheshwar and others. Beautiful gardens and tiled floors. Symbol of Tripura's heritage.",
          },
        ],
      },
    ],
  },
  {
    name: "Uttar Pradesh",
    districts: [
      {
        name: "Agra",
        places: [],
      },
      {
        name: "Aligarh",
        places: [],
      },
      {
        name: "Ambedkar Nagar",
        places: [],
      },
      {
        name: "Amethi",
        places: [],
      },
      {
        name: "Amroha",
        places: [],
      },
      {
        name: "Auraiya",
        places: [],
      },
      {
        name: "Ayodhya",
        places: [
          {
            name: "Ram Janmabhoomi",
            history:
              "Believed to be the birthplace of Lord Rama. The site has been a place of worship for thousands of years with the new temple inaugurated in 2024.",
            significance:
              "One of the seven most sacred cities in Hinduism. Central to the Ramayana epic and Hindu faith.",
          },
          {
            name: "Hanuman Garhi",
            history:
              "A 10th-century temple dedicated to Lord Hanuman, built like a fortress with 76 steps leading to the main shrine.",
            significance:
              "Devotees believe visiting Hanuman Garhi before Ram Janmabhoomi completes the pilgrimage.",
          },
        ],
      },
      {
        name: "Azamgarh",
        places: [],
      },
      {
        name: "Baghpat",
        places: [],
      },
      {
        name: "Bahraich",
        places: [],
      },
      {
        name: "Ballia",
        places: [],
      },
      {
        name: "Balrampur",
        places: [],
      },
      {
        name: "Banda",
        places: [],
      },
      {
        name: "Bara Banki",
        places: [],
      },
      {
        name: "Bareilly",
        places: [],
      },
      {
        name: "Basti",
        places: [],
      },
      {
        name: "Bhadohi",
        places: [],
      },
      {
        name: "Bijnor",
        places: [],
      },
      {
        name: "Budaun",
        places: [],
      },
      {
        name: "Bulandshahr",
        places: [],
      },
      {
        name: "Chandauli",
        places: [],
      },
      {
        name: "Chitrakoot",
        places: [],
      },
      {
        name: "Deoria",
        places: [],
      },
      {
        name: "Etah",
        places: [],
      },
      {
        name: "Etawah",
        places: [],
      },
      {
        name: "Farrukhabad",
        places: [],
      },
      {
        name: "Fatehpur",
        places: [],
      },
      {
        name: "Firozabad",
        places: [],
      },
      {
        name: "Gautam Buddha Nagar",
        places: [],
      },
      {
        name: "Ghaziabad",
        places: [],
      },
      {
        name: "Ghazipur",
        places: [],
      },
      {
        name: "Gonda",
        places: [],
      },
      {
        name: "Gorakhpur",
        places: [
          {
            name: "Gorakhnath Temple",
            history:
              "Founded by Guru Gorakhnath in 11th-12th century. Mahant is traditionally head of the Nath sect.",
            significance:
              "Headquarter of Nath sect. Monthly fairs on no-moon day. Famous Makar Sankranti mela.",
          },
        ],
      },
      {
        name: "Hamirpur",
        places: [],
      },
      {
        name: "Hapur",
        places: [],
      },
      {
        name: "Hardoi",
        places: [],
      },
      {
        name: "Hathras",
        places: [],
      },
      {
        name: "Jalaun",
        places: [],
      },
      {
        name: "Jaunpur",
        places: [],
      },
      {
        name: "Jhansi",
        places: [],
      },
      {
        name: "Kannauj",
        places: [],
      },
      {
        name: "Kanpur Dehat",
        places: [],
      },
      {
        name: "Kanpur Nagar",
        places: [],
      },
      {
        name: "Kasganj",
        places: [],
      },
      {
        name: "Kaushambi",
        places: [],
      },
      {
        name: "Kheri",
        places: [],
      },
      {
        name: "Kushinagar",
        places: [],
      },
      {
        name: "Lalitpur",
        places: [],
      },
      {
        name: "Lucknow",
        places: [],
      },
      {
        name: "Mahoba",
        places: [],
      },
      {
        name: "Mahrajganj",
        places: [],
      },
      {
        name: "Mainpuri",
        places: [],
      },
      {
        name: "Mathura",
        places: [
          {
            name: "Krishna Janmabhoomi",
            history:
              "The birthplace of Lord Krishna, dating back over 5000 years. The site includes an ancient prison cell where Krishna was born.",
            significance:
              "One of the Sapta Puri (seven sacred cities). Major pilgrimage center for Vaishnavites worldwide.",
          },
          {
            name: "Dwarkadhish Temple",
            history:
              "Built in 1814, this temple is dedicated to Lord Krishna as the King of Dwarka. The architecture reflects traditional North Indian style.",
            significance:
              "Famous for its grand celebrations during Janmashtami. One of the most visited Krishna temples in India.",
          },
          {
            name: "Banke Bihari Temple",
            history:
              "Built by Swami Haridas in 1864, a devotee of Krishna. The deity appeared to him during meditation.",
            significance:
              "Most popular temple in Vrindavan. Unique - deity's curtain opens and closes frequently. Janmashtami celebration famous.",
          },
          {
            name: "ISKCON Temple",
            history:
              "Built by ISKCON in 1975, designed by Achyut Kanvinde. Also called Glory of India & Sri Krishna-Balaram Mandir.",
            significance:
              "Major Krishna Consciousness center. Beautiful white marble. Tombs of ISKCON founder Prabhupada here.",
          },
        ],
      },
      {
        name: "Mau",
        places: [],
      },
      {
        name: "Meerut",
        places: [],
      },
      {
        name: "Mirzapur",
        places: [],
      },
      {
        name: "Moradabad",
        places: [],
      },
      {
        name: "Muzaffarnagar",
        places: [],
      },
      {
        name: "Pilibhit",
        places: [],
      },
      {
        name: "Pratapgarh",
        places: [],
      },
      {
        name: "Prayagraj",
        places: [
          {
            name: "Triveni Sangam",
            history:
              "The confluence of three sacred rivers - Ganga, Yamuna, and mythical Saraswati. Mentioned in ancient Vedic texts.",
            significance:
              "Holiest bathing spot in Hinduism. Hosts the Kumbh Mela, the world's largest religious gathering every 12 years.",
          },
          {
            name: "Hanuman Mandir",
            history:
              "A unique temple where the idol of Hanuman is in a reclining position. Believed to be established during Treta Yuga.",
            significance:
              "Only temple where Hanuman is shown lying down. Partially submerged during monsoons, adding to its mystique.",
          },
        ],
      },
      {
        name: "Rae Bareli",
        places: [],
      },
      {
        name: "Rampur",
        places: [],
      },
      {
        name: "Saharanpur",
        places: [],
      },
      {
        name: "Sambhal",
        places: [],
      },
      {
        name: "Sant Kabir Nagar",
        places: [],
      },
      {
        name: "Shahjahanpur",
        places: [],
      },
      {
        name: "Shamli",
        places: [],
      },
      {
        name: "Shrawasti",
        places: [],
      },
      {
        name: "Siddharthnagar",
        places: [],
      },
      {
        name: "Sitapur",
        places: [],
      },
      {
        name: "Sonbhadra",
        places: [],
      },
      {
        name: "Sultanpur",
        places: [],
      },
      {
        name: "Unnao",
        places: [],
      },
      {
        name: "Varanasi",
        places: [
          {
            name: "Kashi Vishwanath Temple",
            history:
              "One of the twelve Jyotirlingas, dedicated to Lord Shiva. The temple has been rebuilt several times, with the current structure dating to 1780 by Ahilya Bai Holkar.",
            significance:
              "Most sacred temple in Hinduism, believed to grant moksha (liberation). Pilgrims believe that dying in Kashi leads to salvation.",
          },
          {
            name: "Dashashwamedh Ghat",
            history:
              "Named after the ancient Dashawamedha sacrifice performed by Lord Brahma. The ghat hosts the famous Ganga Aarti every evening since ancient times.",
            significance:
              "Witness the mesmerizing Ganga Aarti ceremony at sunset. One of the oldest and most spectacular ghats along the Ganges.",
          },
          {
            name: "Sarnath",
            history:
              "Where Buddha gave his first sermon after attaining enlightenment around 528 BCE. The Dhamek Stupa marks this sacred spot where Buddhism was born.",
            significance:
              "One of the four holy Buddhist pilgrimage sites. Contains the Ashoka Pillar and numerous ancient monasteries and stupas.",
          },
        ],
      },
    ],
  },
  {
    name: "Uttarakhand",
    districts: [
      {
        name: "Almora",
        places: [],
      },
      {
        name: "Bageshwar",
        places: [],
      },
      {
        name: "Chamoli",
        places: [
          {
            name: "Badrinath Temple",
            history:
              "One of the Char Dhams, established by Adi Shankaracharya in 8th century. Dedicated to Lord Vishnu in the form of Badrinarayan.",
            significance:
              "One of the 108 Divya Desams. Open only 6 months due to harsh winters. Located at 10,279 feet in the Himalayas.",
          },
          {
            name: "Hemkund Sahib",
            history:
              "High altitude Sikh shrine at 15,200 feet. Guru Gobind Singh meditated here in previous life according to his autobiography.",
            significance:
              "One of the holiest Sikh shrines. Accessible only June to October. Lake surrounded by seven peaks.",
          },
        ],
      },
      {
        name: "Champawat",
        places: [],
      },
      {
        name: "Dehradun",
        places: [
          {
            name: "Triveni Ghat",
            history:
              "Confluence point with religious significance dating back centuries. Mentioned in ancient Hindu scriptures.",
            significance:
              "Hosts spectacular evening Ganga Aarti. Believed that bathing here washes away sins. Starting point for Himalayan pilgrimages.",
          },
          {
            name: "Parmarth Niketan",
            history:
              "Established in 1942, one of the largest ashrams in Rishikesh with over 1000 rooms on the banks of Ganges.",
            significance:
              "Center for spiritual learning and yoga. Hosts International Yoga Festival annually. Famous for evening Ganga Aarti.",
          },
          {
            name: "Neelkanth Mahadev Temple",
            history:
              "Ancient temple where Shiva drank poison during Samudra Manthan. His throat turned blue (Neelkanth).",
            significance:
              "Surrounded by dense forests. Waterfall nearby is sacred. Trek from Rishikesh is popular pilgrimage.",
          },
        ],
      },
      {
        name: "Haridwar",
        places: [
          {
            name: "Har Ki Pauri",
            history:
              "Built by King Vikramaditya in 1st century BCE. The footprint of Lord Vishnu is believed to be imprinted on a stone wall here.",
            significance:
              "Most sacred ghat in Haridwar. Evening Ganga Aarti attracts thousands. Gateway to the Char Dham pilgrimage.",
          },
          {
            name: "Mansa Devi Temple",
            history:
              "Built in 1811-1815, dedicated to Goddess Mansa Devi who grants wishes. Located atop Bilwa Parvat at 2,200 feet.",
            significance:
              "One of the Siddha Peethas. Accessible by cable car. Devotees tie threads to sacred tree for wish fulfillment.",
          },
        ],
      },
      {
        name: "Nainital",
        places: [],
      },
      {
        name: "Pauri Garhwal",
        places: [],
      },
      {
        name: "Pithoragarh",
        places: [],
      },
      {
        name: "Rudraprayag",
        places: [
          {
            name: "Kedarnath Temple",
            history:
              "One of the 12 Jyotirlingas and part of Char Dham. Built by Pandavas, rebuilt by Adi Shankaracharya in 8th century.",
            significance:
              "Located at 11,755 feet. Survived 2013 floods miraculously. Trek from Gaurikund is pilgrimage of faith.",
          },
        ],
      },
      {
        name: "Tehri Garhwal",
        places: [],
      },
      {
        name: "Udham Singh Nagar",
        places: [],
      },
      {
        name: "Uttarkashi",
        places: [
          {
            name: "Gangotri Temple",
            history:
              "Built by Amar Singh Thapa in early 19th century. Marks spot where King Bhagirath meditated for Ganga to descend.",
            significance:
              "Source of river Ganges. Part of Char Dham. Temple closed in winter, deity moved to Mukhba village.",
          },
          {
            name: "Yamunotri Temple",
            history:
              "Built by Maharaja of Jaipur Pratap Shah in 19th century. Dedicated to Goddess Yamuna at source of Yamuna River.",
            significance:
              "Part of Char Dham yatra. Hot water springs used to cook rice as prasad. Open May to November.",
          },
        ],
      },
    ],
  },
  {
    name: "West Bengal",
    districts: [
      {
        name: "Alipurduar",
        places: [],
      },
      {
        name: "Bankura",
        places: [],
      },
      {
        name: "Birbhum",
        places: [
          {
            name: "Tarapith Temple",
            history:
              "Ancient temple where Sati's 'third eye' fell. Tantric saint Bamakhepa practiced here in 19th century.",
            significance:
              "Major Tantric pilgrimage. Cremation ground (smashan) is sacred. Unique rituals including animal sacrifice.",
          },
        ],
      },
      {
        name: "Cooch Behar",
        places: [],
      },
      {
        name: "Dakshin Dinajpur",
        places: [],
      },
      {
        name: "Darjeeling",
        places: [
          {
            name: "Ghoom Monastery",
            history:
              "Built in 1850, oldest Tibetan Buddhist monastery in Darjeeling. Houses sacred Maitreya Buddha statue.",
            significance:
              "Beautiful monastery with stunning Kanchenjunga views. Houses rare Buddhist scriptures and artifacts.",
          },
        ],
      },
      {
        name: "Hooghly",
        places: [
          {
            name: "Bandel Church",
            history:
              "Built by Portuguese in 1599, one of the oldest churches in India. Destroyed and rebuilt several times.",
            significance:
              "Houses statue of Our Lady of Happy Voyage. Major Christian pilgrimage. Beautiful Gothic architecture.",
          },
          {
            name: "Tarakeswar Temple",
            history:
              "Ancient Shiva temple, current structure from 18th century. Deity is Baba Taraknath, a form of Shiva.",
            significance:
              "One of the most visited pilgrimage sites in Bengal. Famous for Gajan festival. Many devotees crawl here.",
          },
        ],
      },
      {
        name: "Howrah",
        places: [],
      },
      {
        name: "Jalpaiguri",
        places: [],
      },
      {
        name: "Jhargram",
        places: [],
      },
      {
        name: "Kalimpong",
        places: [],
      },
      {
        name: "Kolkata",
        places: [
          {
            name: "Dakshineswar Kali Temple",
            history:
              "Built by Rani Rashmoni in 1855. Ramakrishna Paramahansa was priest here and had visions of goddess.",
            significance:
              "Most famous Kali temple. Ramakrishna's room preserved. 12 Shiva temples in compound. Beautiful riverside location.",
          },
          {
            name: "Kalighat Temple",
            history:
              "One of the 51 Shakti Peethas where Sati's right toe fell. Present temple built in 1809.",
            significance:
              "Gives Kolkata its name. Ancient pilgrimage site. Unique Kalighat painting style originated here.",
          },
          {
            name: "Belur Math",
            history:
              "Headquarters of Ramakrishna Mission, established in 1899 by Swami Vivekananda. Ramakrishna's relics enshrined here.",
            significance:
              "Unique architecture blending Hindu, Muslim, Christian elements. International center of Ramakrishna Movement.",
          },
        ],
      },
      {
        name: "Malda",
        places: [],
      },
      {
        name: "Murshidabad",
        places: [],
      },
      {
        name: "Nadia",
        places: [],
      },
      {
        name: "North 24 Parganas",
        places: [],
      },
      {
        name: "Paschim Bardhaman",
        places: [],
      },
      {
        name: "Paschim Medinipur",
        places: [],
      },
      {
        name: "Purba Bardhaman",
        places: [],
      },
      {
        name: "Purba Medinipur",
        places: [],
      },
      {
        name: "Purulia",
        places: [],
      },
      {
        name: "South 24 Parganas",
        places: [],
      },
      {
        name: "Uttar Dinajpur",
        places: [],
      },
    ],
  },
];
