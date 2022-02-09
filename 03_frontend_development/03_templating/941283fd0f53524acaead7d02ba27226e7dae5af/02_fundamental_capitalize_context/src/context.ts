import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  const wordArray = sentence.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = capitalize(wordArray[i]);
  }
  return wordArray.join(" ");
}
