const arraysIntoObjects = (keysArray, valuesArray) => {
  /// Code your function here
  let result = {};
  keysArray.forEach((key, i) => {
    result[key] = valuesArray[i];
  });
  return result;
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
