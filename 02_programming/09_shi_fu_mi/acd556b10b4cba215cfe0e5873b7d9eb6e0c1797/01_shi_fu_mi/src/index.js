const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rock = [
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];
const paper = [
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];
const scissors = [
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];

let playerOne;
let playerTwo;
let playerOneName = "Player";
let playerTwoName = "IA";
let playerOneScore = 0;
let playerTwoScore = 0;
let roundNumber = 0;

function resetScore() {
  playerOneScore = 0;
  playerTwoScore = 0;
}

function askForGameMode() {
  reader.question("Choose a game mode : \n [1 = Player vs IA; 2 = Player vs Player]\n", (gameMode) => {
    reader.question("-\nHow many round ?\n [1 = 1 round; 2 = best of three; 3 = best of five]\n", (gameRoundNumber) => {
      switch (gameRoundNumber) {
        case "1":
          roundNumber = 1;
          break;
        case "2":
          roundNumber = 2;
          break;
        case "3":
          roundNumber = 3;
          break;
        default:
          console.log("Please enter only number to choose game mode and number of round");
          askForGameMode();
      }
      if (gameMode === "1") {
        startGame();
      } else if (gameMode === "2") {
        reader.question("-\nEnter player one name\n", (firstPlayerName) => {
          playerOneName = firstPlayerName;
          reader.question("-\nEnter player two name\n", (secondPlayerName) => {
            playerTwoName = secondPlayerName;
            startGameWithFriend();
          });
        });
      } else {
        console.log("please enter 1 or 2 to choose a game mode");
        askForGameMode();
      }
    });
  });
}

function startGame() {
  reader.question("-\nChoose a move:\n [1 = rock, 2 = paper, 3 = scissors]\n", (userMoove) => {
    if (userMoove === "1") {
      playerOne = rock;
      playerTwo = generateIAMoove();
    } else if (userMoove === "2") {
      playerOne = paper;
      playerTwo = generateIAMoove();
    } else if (userMoove === "3") {
      playerOne = scissors;
      playerTwo = generateIAMoove();
    } else {
      console.log("Please enter a number between 1 and 3");
      startGame();
    }
    testResults(playerOne, playerTwo);
    isGameEnding(roundNumber, "vsIA");
  });
}

function generateIAMoove() {
  const randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return rock;
  } else if (randomInt === 1) {
    return paper;
  } else {
    return scissors;
  }
}

function startGameWithFriend() {
  reader.question(`-\n${playerOneName} choose a move:\n [1 = rock, 2 = paper, 3 = scissors]\n`, (playerOneMove) => {
    switch (playerOneMove) {
      case "1":
        playerOne = rock;
        break;
      case "2":
        playerOne = paper;
        break;
      case "3":
        playerOne = scissors;
        break;
      default:
        startGameWithFriend();
    }
    reader.question(`-\n${playerTwoName} choose a move:\n [1 = rock, 2 = paper, 3 = scissors]\n`, (playerTwoMove) => {
      switch (playerTwoMove) {
        case "1":
          playerTwo = rock;
          break;
        case "2":
          playerTwo = paper;
          break;
        case "3":
          playerTwo = scissors;
          break;
        default:
          startGameWithFriend();
      }
      testResults(playerOne, playerTwo);
      isGameEnding(roundNumber, "vsPlayer");
    });
  });
}

function testResults(playerOneMove, playerTwoMove) {
  displayResults(playerOneMove, playerTwoMove);
  if (
    (playerOneMove === rock && playerTwoMove === scissors) ||
    (playerOneMove === paper && playerTwoMove === rock) ||
    (playerOneMove === scissors && playerTwoMove === paper)
  ) {
    console.log(`${playerOneName} win !`);
    playerOneScore++;
    console.log(`${playerOneName} : ${playerOneScore} --- ${playerTwoName} : ${playerTwoScore}\n`);
  } else if (playerOneMove === playerTwoMove) {
    console.log("draw !");
    console.log(`${playerOneName} : ${playerOneScore} --- ${playerTwoName} : ${playerTwoScore}\n`);
  } else {
    console.log(`${playerTwoName} win !`);
    playerTwoScore++;
    console.log(`${playerOneName} : ${playerOneScore} --- ${playerTwoName} : ${playerTwoScore}\n`);
  }
}

function displayResults(playerOneMove, playerTwoMove) {
  console.log(`-\n${playerOneName} move`);
  console.log(playerOneMove);
  console.log(`${playerTwoName} move`);
  console.log(playerTwoMove);
  console.log("\n");
}

function isGameEnding(roundNumber, gamemode) {
  if (playerOneScore === roundNumber || playerTwoScore === roundNumber) {
    playAgain(gamemode);
  } else {
    if (gamemode === "vsIA") {
      startGame();
    } else {
      startGameWithFriend();
    }
  }
}

function playAgain(gamemode) {
  reader.question("play again ? (y/n)\n", (choice) => {
    if (choice === "y" || choice === "Y") {
      if (gamemode === "vsIA") {
        resetScore();
        startGame();
      } else {
        resetScore();
        startGameWithFriend();
      }
    } else if (choice === "n" || choice === "N") {
      console.log("Thanks for the game !\n");
      reader.close();
    } else {
      playAgain();
    }
  });
}

console.log("Welcome to the ShiFuMi!\n-");
askForGameMode();
