function numberGame(reader, min = 1, max = 100) {
  // code here
  const randomNumber = getRandomNumber(min, max);

  console.log(randomNumber);

  console.log("Welcome!");
  console.log("You have to find the right number, between 1 and 100!");
  console.log("Good luck!!");

  function question() {
    reader.question("Enter a number\n", (number) => {
      let userNumber = parseInt(number);

      if (!Number.isInteger(userNumber)) {
        console.log("This was not a number");
        question();
      } else if (userNumber > max || userNumber < min) {
        console.log(`The number is between ${min} and ${max}`);
        question();
      } else if (userNumber > randomNumber) {
        console.log("Too high");
        question();
      } else if (userNumber < randomNumber) {
        console.log("Too low");
        question();
      } else if (userNumber === randomNumber) {
        console.log("you won");
        reader.close();
      }
    });
  }

  question();
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

module.exports = numberGame;
