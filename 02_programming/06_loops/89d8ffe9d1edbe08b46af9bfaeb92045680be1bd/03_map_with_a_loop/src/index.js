function mapLoop(array, map) {
  // Code the function here.
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(map(array[i]));
  }
  return resultArray;
}

const numbers = [1, 2, 3, 4];

function double(number) {
  return number * 2;
}

const doubledNumbers = mapLoop(numbers, double);

console.log(doubledNumbers);

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
