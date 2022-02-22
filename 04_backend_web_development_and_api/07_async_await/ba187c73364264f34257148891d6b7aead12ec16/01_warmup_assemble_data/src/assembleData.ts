type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names: string[], ages: number[], countries: string[], haveTravaled: boolean[]): Profile[] {
  // Code here
  const assembleData = [];
  for (let i = 0; i < names.length; i++) {
    assembleData.push({ name: names[i], age: ages[i], country: countries[i], haveTraveled: haveTravaled[i] });
  }
  return assembleData;
}
