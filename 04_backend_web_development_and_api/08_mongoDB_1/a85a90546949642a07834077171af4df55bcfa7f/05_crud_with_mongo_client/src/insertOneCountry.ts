import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function insertOneCountry(db: Db, country: Country) {
  // code your function here
  return db.collection("worldAtlas").insertOne(country);
}
