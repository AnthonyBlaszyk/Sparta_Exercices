import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here

  const tmpArray = sentenceSplitter(sentence);
  const finalArray = [];
  tmpArray.filter((word) => {
    if (
      word.charAt(0).toLowerCase() !== "a" &&
      word.charAt(0).toLowerCase() !== "e" &&
      word.charAt(0).toLowerCase() !== "i" &&
      word.charAt(0).toLowerCase() !== "o" &&
      word.charAt(0).toLowerCase() !== "u"
    ) {
      finalArray.push(word);
    }
  });
  return sentenceJoiner(finalArray);
};
