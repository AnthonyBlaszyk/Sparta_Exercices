function addition(numberOne, numberTwo) {
  // Code here
  return numberOne+numberTwo;
}

function substraction(numberOne, numberTwo) {
  // Code here
  return numberOne-numberTwo;
}

function multiplication(numberOne, numberTwo) {
  // Code here
  return numberOne*numberTwo;
}

function division(numberOne, numberTwo) {
  // Code here
  return numberOne/numberTwo;
}

function chooseOperation(numberOne, numberTwo, operation) {
  // Code here
  if(Number.isInteger(numberOne) && Number.isInteger(numberTwo)){
    return operation(numberOne, numberTwo);
  }else{
    throw new Error("Parameters are not integer");
  }
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
