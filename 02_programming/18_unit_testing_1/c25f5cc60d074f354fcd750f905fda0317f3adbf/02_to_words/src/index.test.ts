import { toWords } from "./index";

test("sentences to array of words", function () {
  const result = toWords("TroTro@- - est; meilleur que PepaPig!");
  expect(result).toEqual(["TroTro", "est", "meilleur", "que", "PepaPig"]);
});
