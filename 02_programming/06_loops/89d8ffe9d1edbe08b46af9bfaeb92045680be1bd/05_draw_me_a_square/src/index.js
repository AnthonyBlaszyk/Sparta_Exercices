function square(squareSize) {
  // Code here
  let squareLine = "";
  for (let i = 0; i < squareSize; i++) {
    squareLine += "*";
  }
  for (let i = 0; i < squareSize; i++) {
    console.log(squareLine);
  }
}

// Do not remove the following line, it is for tests
module.exports = square;
