const readline = require("readline");
const clear = require("./clear");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

const arrayOfSymbols = Object.entries(symbols);

function getBoardSize() {
  reader.question("Choose an even board size between 4 and 40\n", (number) => {
    let userNumber = parseInt(number);
    if (!Number.isInteger(userNumber)) {
      console.log("that's not a number");
      getBoardSize();
    } else if (userNumber % 2 !== 0) {
      console.log("that's an odd number, please choose an even number");
      getBoardSize();
    } else if (userNumber < 4 || userNumber > 40) {
      console.log("please choose a number between 4 and 40");
      getBoardSize();
    } else {
      reader.close();
      return parseInt(userNumber);
    }
  });
}

function generateBoard(boardSize) {
  const board = [];
  for (let i = 0; i < boardSize / 2; i++) {
    board.push({ i: arrayOfSymbols[i][1] });
    board.push({ i: arrayOfSymbols[i][1] });
  }
  console.log(board);
  console.log(Object.keys(board));
  return board;
}

const boardGame = generateBoard(6);

(x) => x + 5;
