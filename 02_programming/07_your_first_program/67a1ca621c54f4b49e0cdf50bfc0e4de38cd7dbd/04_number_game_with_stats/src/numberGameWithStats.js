function numberGameWithStats(reader, min = 1, max = 100) {
  // Code here
  const randomNumber = getRandomNumber(min, max);
  let counter = 0;
  console.log(randomNumber);

  function question() {
    reader.question("Enter a number\n", (number) => {
      const userNumber = parseInt(number);

      if (!Number.isInteger(userNumber)) {
        console.log("It's not a number");
        counter++;
        question();
      } else if (userNumber > max || userNumber < min) {
        console.log(`The number is between ${min} and ${max}`);
        counter++;
        question();
      } else if (userNumber > randomNumber) {
        console.log("Too high");
        counter++;
        question();
      } else if (userNumber < randomNumber) {
        console.log("Too low");
        counter++;
        question();
      } else {
        console.log("You won");
        counter++;
        if (counter > 1) {
          console.log(`you suceed after ${counter} try`);
        } else {
          console.log(`Wow, you succed after only ${counter} try !!`);
        }
        reader.close();
      }
    });
  }

  question();
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

module.exports = numberGameWithStats;
