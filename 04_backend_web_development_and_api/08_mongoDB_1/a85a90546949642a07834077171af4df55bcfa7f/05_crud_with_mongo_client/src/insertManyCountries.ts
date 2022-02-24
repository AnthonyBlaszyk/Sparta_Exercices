import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function insertManyCountries(db: Db, countries: Country[]): number {
  // code your function here
  db.collection("worldAtlas").insertMany(countries);
  return countries.length;
}
