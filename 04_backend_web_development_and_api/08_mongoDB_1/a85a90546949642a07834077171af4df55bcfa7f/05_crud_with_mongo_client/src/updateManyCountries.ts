import { Db } from "mongodb";

export function updateManyCountries(db: Db) {
  // code your function here
  db.collection("worldAtlas").updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
  return db.collection("worldAtlas").find({ continent: "EU" }).toArray();
}
