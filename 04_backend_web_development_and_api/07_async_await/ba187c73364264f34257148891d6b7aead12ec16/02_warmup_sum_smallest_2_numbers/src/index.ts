export function sumTwoSmallestNumbers(numbers: number[]): number {
  if (numbers.length < 4) {
    throw new Error("less than 4 elements");
  }

  let firstLowest = numbers[0];
  let secondLowest = numbers[1];

  numbers.map((element) => {
    if (element < 0) {
      throw new Error("non-positive numbers");
    } else if (element < firstLowest) {
      secondLowest = firstLowest;
      firstLowest = element;
    }
  });

  return firstLowest + secondLowest;
}
