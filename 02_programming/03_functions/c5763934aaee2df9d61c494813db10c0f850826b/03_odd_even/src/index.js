function oddEven(number) {
  // Code the function here.
  if(Number.isInteger(number)){
    return number%2 === 0 ? `${number} is an even number.` : `${number} is an odd number.`;
  }else{
    return console.log(`${number} is not a number.`);
  }
}

// Do not remove last lines, it is for tests
module.exports = oddEven;
