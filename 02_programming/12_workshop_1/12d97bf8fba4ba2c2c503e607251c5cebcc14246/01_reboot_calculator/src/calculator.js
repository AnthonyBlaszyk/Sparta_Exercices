import { addition, substraction, multiplication, division } from "./operation.js";

function askFirstNumber(reader) {
  reader.question("Enter the first Number\n", (firstNumber) => {
    const firstUserNumber = firstNumber.replace(",", ".");
    if (isNaN(Number(firstUserNumber.replace(",", ".")))) {
      console.log("Wrong input!");
      askFirstNumber(reader);
    }
    askOperation(firstUserNumber, reader);
  });
}

function askOperation(firstUserNumber, reader) {
  reader.question("Enter an operation [ + | - | * | / ]\n", (operation) => {
    if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
      console.log("Wrong input!");
      askOperation(firstUserNumber, reader);
    }
    askSecondNumber(firstUserNumber, operation, reader);
  });
}

function askSecondNumber(firstUserNumber, operation, reader) {
  reader.question("Enter the second number\n", (secondNumber) => {
    const secondUserNumber = secondNumber.replace(",", ".");
    if (isNaN(Number(secondUserNumber))) {
      console.log("Wrong input!");
      askSecondNumber(firstUserNumber, operation, reader);
    }
    printResult(firstUserNumber, operation, secondUserNumber, reader);
  });
}

function calculator(reader) {
  askFirstNumber(reader);
}

function printResult(numberOne, operation, numberTwo, reader) {
  let result;
  switch (operation) {
    case "+":
      result = addition(Number(numberOne), Number(numberTwo));
      break;
    case "-":
      result = substraction(Number(numberOne), Number(numberTwo));
      break;
    case "*":
      result = multiplication(Number(numberOne), Number(numberTwo));
      break;
    case "/":
      result = division(Number(numberOne), Number(numberTwo));
  }
  console.log(`${numberOne} ${operation} ${numberTwo} = ${Math.round(result * 100) / 100}`);
  askAgain(reader);
}

function askAgain(reader) {
  reader.question("Another one ? [y/n]\n", (answer) => {
    if (answer === "y") {
      start(reader);
    } else {
      reader.close();
    }
  });
}

function start(reader) {
  calculator(reader);
}

export default start;
