// Code here

function findDigit(numberArray: number[], numberToFind: number): number[] {
  const finalArray: number[] = [];
  numberArray.filter((numb) => {
    if (numb.toString().includes(numberToFind.toString())) {
      finalArray.push(numb);
    }
  });
  return finalArray;
}

export { findDigit };
