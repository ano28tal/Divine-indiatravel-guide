import type { State } from "../types/destinations";

// Union Territories: Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Delhi
export const territoriesAD: State[] = [
  {
    name: "Andaman and Nicobar Islands",
    districts: [
      {
        name: "Nicobars",
        places: [],
      },
      {
        name: "North And Middle Andaman",
        places: [
          {
            name: "Baratang Mud Volcano",
            history:
              "Rare geological phenomenon with mud volcanoes formed due to gases escaping from beneath. Active since centuries.",
            significance:
              "One of the few mud volcanoes in India. Surrounded by mangroves. Unique natural wonder with spiritual aura.",
          },
        ],
      },
      {
        name: "South Andamans",
        places: [
          {
            name: "Cellular Jail",
            history:
              "Built by British in 1906, used to exile political prisoners during freedom struggle. Veer Savarkar was imprisoned here.",
            significance:
              "National Memorial honoring freedom fighters. Sound and light show narrates sacrifices of patriots. Symbol of India's struggle.",
          },
          {
            name: "Ross Island Church",
            history:
              "Ruins of Anglican church from British era when Ross Island was administrative headquarters. Abandoned after 1941 earthquake.",
            significance:
              "Haunting ruins reclaimed by nature. Deer and peacocks roam freely. Testament to colonial past.",
          },
        ],
      },
    ],
  },
  {
    name: "Chandigarh",
    districts: [
      {
        name: "Chandigarh",
        places: [
          {
            name: "Rock Garden",
            history:
              "Created by Nek Chand starting 1957, built secretly from industrial and urban waste. Spans 40 acres with sculptures.",
            significance:
              "Unique artistic and spiritual space. Waterfalls, amphitheater, and thousands of sculptures. Symbol of creative recycling.",
          },
          {
            name: "Chandi Mandir",
            history:
              "Ancient temple dedicated to Goddess Chandi, from which Chandigarh derives its name. Rebuilt in modern times.",
            significance:
              "Namesake temple of the city. Perched on Shivalik Hills. Panoramic views of the planned city below.",
          },
          {
            name: "ISKCON Temple",
            history:
              "Modern temple built by ISKCON movement. Dedicated to Lord Krishna. Beautiful architecture with sprawling gardens.",
            significance:
              "Major spiritual center in tricity. Daily aarti and kirtan. Vegetarian restaurant serves prasad.",
          },
        ],
      },
    ],
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    districts: [
      {
        name: "Dadra And Nagar Haveli",
        places: [
          {
            name: "Bindrabin Temple",
            history:
              "Temple dedicated to Lord Krishna, built in Vrindavan style. Surrounded by beautiful gardens and water bodies.",
            significance:
              "Main Hindu temple in Silvassa. Peaceful atmosphere. Popular during Janmashtami celebrations.",
          },
        ],
      },
      {
        name: "Daman",
        places: [
          {
            name: "Bom Jesus Church",
            history:
              "Built by Portuguese in 1559, one of the oldest churches in India. Beautiful baroque architecture preserved since colonial era.",
            significance:
              "Major Christian pilgrimage site. Intricate wooden carvings and paintings. Annual feast attracts thousands.",
          },
          {
            name: "Jampore Beach Temple",
            history:
              "Small but significant Hindu temple on the serene Jampore beach. Blend of coastal and spiritual experience.",
            significance:
              "Peaceful worship spot by the Arabian Sea. Popular for sunset prayers. Clean and less crowded.",
          },
        ],
      },
      {
        name: "Diu",
        places: [
          {
            name: "St. Paul's Church",
            history:
              "Built in 1601, finest example of baroque architecture in India. Took 9 years to complete. Intricate wood carvings.",
            significance:
              "One of the most ornate churches in India. Shell windows filter natural light. Still holds regular services.",
          },
          {
            name: "Gangeshwar Temple",
            history:
              "Ancient temple with five Shiva Lingams in natural rock formation on the seashore. Waves constantly wash over them.",
            significance:
              "Unique temple where sea water performs natural abhishek. Believed to be established by Pandavas. Mystical atmosphere.",
          },
        ],
      },
    ],
  },
  {
    name: "Delhi",
    districts: [
      {
        name: "Central",
        places: [
          {
            name: "Jama Masjid",
            history:
              "Built by Shah Jahan between 1650-1656, largest mosque in India. Can accommodate 25,000 worshippers.",
            significance:
              "Architectural masterpiece of Mughal era. Houses relics including Prophet's hair. Grand iftar during Ramadan.",
          },
          {
            name: "Gurudwara Sis Ganj Sahib",
            history:
              "Marks the site where Guru Tegh Bahadur was beheaded in 1675 on orders of Aurangzeb for refusing to convert.",
            significance:
              "One of the nine historical gurdwaras in Delhi. Symbol of Sikh martyrdom. Langar served daily.",
          },
        ],
      },
      {
        name: "East",
        places: [],
      },
      {
        name: "New Delhi",
        places: [
          {
            name: "Akshardham Temple",
            history:
              "Opened in 2005, carved from pink sandstone and marble. Built in just 5 years by 11,000 artisans.",
            significance:
              "Guinness World Record for largest Hindu temple. Exhibitions on Indian culture. Musical fountain show.",
          },
          {
            name: "Laxminarayan Temple (Birla Mandir)",
            history:
              "Built by Birla family in 1939, inaugurated by Mahatma Gandhi. Dedicated to Lakshmi and Narayana.",
            significance:
              "Gandhi made it open to all castes. Beautiful Orissan-style architecture. Multiple shrines to various deities.",
          },
          {
            name: "Sacred Heart Cathedral",
            history:
              "Built in 1930-34, designed by Henry Medd. One of the oldest church buildings in New Delhi.",
            significance:
              "Seat of Archbishop of Delhi. Beautiful Gothic architecture. Major Christmas midnight mass.",
          },
        ],
      },
      {
        name: "North",
        places: [
          {
            name: "Hanuman Temple, Connaught Place",
            history:
              "Ancient temple believed to be from time of Pandavas. Self-manifested Hanuman idol. One of five temples of Mahabharata era.",
            significance:
              "Open 24 hours on Tuesdays and Saturdays. Longest Hanuman Chalisa recitation recorded here. Very powerful deity.",
          },
        ],
      },
      {
        name: "North East",
        places: [],
      },
      {
        name: "North West",
        places: [],
      },
      {
        name: "Shahdara",
        places: [],
      },
      {
        name: "South",
        places: [
          {
            name: "Lotus Temple",
            history:
              "Completed in 1986, designed by Fariborz Sahba. Shaped like lotus flower with 27 marble petals. Bahai House of Worship.",
            significance:
              "Open to all faiths for meditation. No rituals or sermons. One of most visited buildings in the world.",
          },
          {
            name: "ISKCON Temple",
            history:
              "Opened in 1998, one of the largest ISKCON temples. Built with donations. Hosts Glory of India museum.",
            significance:
              "Major Krishna temple in Delhi. Stunning architecture. Daily programs and festivals attract thousands.",
          },
          {
            name: "Chhatarpur Temple",
            history:
              "Built by Sant Baba Nagpal Ji in 1974. Second largest temple complex in India, spread over 60 acres.",
            significance:
              "Dedicated to Goddess Katyayani. Marble temples in South Indian and North Indian styles. Famous Navratri celebrations.",
          },
        ],
      },
      {
        name: "South East",
        places: [],
      },
      {
        name: "South West",
        places: [],
      },
      {
        name: "West",
        places: [],
      },
    ],
  },
];
