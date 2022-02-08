// Code here
function sortingMachine(numberArray: number[], bool: boolean): number[] {
  if (bool === true) {
    return numberArray.sort((a, b) => a - b);
  }
  return numberArray.sort((a, b) => b - a);
}

export { sortingMachine };
