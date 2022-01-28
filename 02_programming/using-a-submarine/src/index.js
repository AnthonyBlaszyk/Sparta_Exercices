import { movements } from "./movements.js";
import movementPartOne from "./partOne.js";
import movementPartTwo from "./PartTwo.js";

// Avec l'exemple du README.md

console.log("\n***********************************\nWith README.md exemple");
movementPartOne([
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]);

movementPartTwo([
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]);

// Avec movement.js

console.log("\n***********************************\nWith movements.js");
movementPartOne(movements);
movementPartTwo(movements);
