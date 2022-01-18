function forEachLoop(array, funct) {
  // Code the function here.
  for (let i = 0; i < array.length; i++) {
    funct(array[i]);
  }
}

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
