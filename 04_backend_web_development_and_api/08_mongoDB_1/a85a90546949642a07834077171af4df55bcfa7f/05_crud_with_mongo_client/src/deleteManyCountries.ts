import { Db } from "mongodb";

export function deleteManyCountries(db: Db) {
  // code your function here
  db.collection("worldAtlas").deleteMany({ continent: "Europe" });
}
