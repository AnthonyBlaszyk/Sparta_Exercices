// Code here
function slotMachine(
  array: [number, number, number] | [string, string, string] | [boolean, boolean, boolean],
): boolean {
  if (array[0] === array[1] && array[1] === array[2]) {
    return true;
  }
  return false;
}

export { slotMachine };
