import { Db } from "mongodb";

export function deleteOneCountry(db: Db) {
  // code your function here
  return db.collection("worldAtlas").deleteOne({ name: "France" });
}
