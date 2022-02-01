type Continents = string[];
type Cities = {
  [key: string]: string[];
};

const continents: Continents = [
  // Replace 'any' type and write your data here.
  "Europe",
  "North America",
  "South America",
  "Asia",
  "Africa",
  "Oceania",
];

const cities: Cities = {
  // Replace 'any' type and write your data here.
  europe: ["city", "city", "city"],
  northAmerica: ["city", "city", "city"],
  southAmerica: ["city", "city", "city"],
  asia: ["city", "city", "city"],
  africa: ["city", "city", "city"],
  oceania: ["city", "city", "city"],
};

// Leave the line below for tests to work properly.
export { continents, cities };
