const isArrayOfString = (currentValue) => typeof currentValue === "string";

const findPosition = (array, name, counter) => {
  // Code here
  if (array.every(isArrayOfString) && typeof name === "string" && Number.isInteger(counter)) {
    if (name === array[0]) {
      return `${name} is at position #1 in this array.`;
    } else if (name === array[1]) {
      return `${name} is at position #2 in this array.`;
    } else if (name === array[2]) {
      return `${name} is at position #3 in this array.`;
    } else if (name === array[3]) {
      return `${name} is at position #4 in this array.`;
    } else if (name === array[4]) {
      return `${name} is at position #5 in this array.`;
    } else if (name === array[5]) {
      return `${name} is at position #6 in this array.`;
    } else if (name === array[6]) {
      return `${name} is at position #7 in this array.`;
    } else if (name === array[7]) {
      return `${name} is at position #8 in this array.`;
    } else {
      return `${name} is not present in this array.`;
    }
  } else {
    throw new Error("error in arguments");
  }
};

// Leave line below for tests to work properly
module.exports = findPosition;
