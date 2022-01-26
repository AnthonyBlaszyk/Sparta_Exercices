const utilities = require("./utilities");
const display = require("./display");

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null),
};

function handleInput(input, reader) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    if (hasWinner()) {
      console.log(display.renderBoard(state));
      console.log(`Congratulations ${utilities.currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished(state)) {
      console.log(display.renderBoard(state));
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      utilities.nextPlayer();
      playTurn(reader);
    }
  } else {
    console.log("This is not a valid move");
    playTurn(reader);
  }
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function updateState(coordinate, player) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = player;
}

function start(reader) {
  utilities.currentPlayer = ["X", "O"][Math.round(Math.random())];
  // console.log("51 ", { reader });
  playTurn(reader);
}

function playTurn(reader) {
  console.log(display.renderBoard(state));
  console.log("57 ", { reader });
  reader.question(`${utilities.currentPlayer}: What is your move? e.g: a1\n`, (input) => handleInput(input, reader));
}

function gameIsFinished(state) {
  const allValues = utilities.flattenArray(Object.values(state));

  return allValues.every(utilities.isNotNull);
}

function hasWinner() {
  const isWinningLine = (line) => {
    const pattern = line.map((coordinate) => state[coordinate.letter][coordinate.digit]).join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return utilities.WINNING_COORDINATES.some(isWinningLine);
}

module.exports = {
  state: state,
  handleInput: handleInput,
  getCoordinate: getCoordinate,
  updateState: updateState,
  playTurn: playTurn,
  gameIsFinished: gameIsFinished,
  hasWinner: hasWinner,
  start: start,
};
