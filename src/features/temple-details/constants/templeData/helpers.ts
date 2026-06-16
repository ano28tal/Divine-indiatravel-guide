export const generateTempleId = (
  templeName: string,
  districtName: string,
  stateName: string
): string => {
  return `${stateName}-${districtName}-${templeName}`
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Default recommendations for temples without specific data
export const defaultYogaCenters = [
  {
    name: "Local Yoga Center",
    address: "Near Temple Premises",
    distance: "1-2 km",
    description: "Traditional yoga and meditation classes available",
  },
];

export const defaultFoodCenters = [
  {
    name: "Temple Prasadam",
    address: "Temple Complex",
    distance: "Within premises",
    description: "Traditional prasadam available for devotees",
  },
  {
    name: "Local Vegetarian Restaurant",
    address: "Near Temple",
    distance: "0.5 km",
    description: "Pure vegetarian meals available",
  },
];

export const defaultSpiritualTeachers = [
  {
    name: "Temple Priests",
    address: "Temple Complex",
    distance: "Within premises",
    description:
      "Temple priests available for guidance on rituals and spiritual practices",
  },
];
