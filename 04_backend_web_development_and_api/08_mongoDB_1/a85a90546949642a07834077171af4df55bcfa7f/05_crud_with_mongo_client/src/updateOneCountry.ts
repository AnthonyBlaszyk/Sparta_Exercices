import { Db } from "mongodb";

export function updateOneCountry(db: Db) {
  // code your function here
  return db.collection("worldAtlas").updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } });
}
