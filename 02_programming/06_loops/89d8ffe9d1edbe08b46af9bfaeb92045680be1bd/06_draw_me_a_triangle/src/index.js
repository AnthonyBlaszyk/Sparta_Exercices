function triangle(triangleSize) {
  // Code here
  let triangleLine = "";
  for (let i = 0; i < triangleSize; i++) {
    triangleLine += "*";
    console.log(triangleLine);
  }
}

// Do not remove the following line, it is for tests
module.exports = triangle;
