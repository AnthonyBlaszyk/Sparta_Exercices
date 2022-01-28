import { submarine, getNumber, resetSubmarine } from "./submarine.js";

function increasePosition(direction) {
  if (direction.includes("forward")) {
    submarine.horizontalPosition += getNumber(direction);
  } else if (direction.includes("down")) {
    submarine.depth += getNumber(direction);
  } else if (direction.includes("up")) {
    submarine.depth -= getNumber(direction);
  }
}

function movements(arrayOfDirection) {
  resetSubmarine();
  for (let i = 0; i < arrayOfDirection.length; i++) {
    increasePosition(arrayOfDirection[i]);
  }
  console.log(`\ndepth : \t\t${submarine.depth}`);
  console.log(`Horizontal position : \t${submarine.horizontalPosition}`);
  console.log(`aim : \t\t\t${submarine.aim}`);
  console.log(`depth * horizontal : \t ${submarine.multiplyBoth()}`);
  return submarine;
}

export default movements;
