import { getRandomFace } from "./random-face";

function headOrTail(choice: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (choice === getRandomFace()) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
