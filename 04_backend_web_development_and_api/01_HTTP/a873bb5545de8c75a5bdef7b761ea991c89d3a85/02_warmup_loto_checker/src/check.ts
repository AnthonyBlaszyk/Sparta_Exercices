import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // Code the function here
  const winningTicket = lottery_draw();
  let winningNumber = 0;
  for (let i = 0; i < ticket.length; i++) {
    if (ticket[i] === winningTicket[i]) {
      winningNumber++;
    }
  }

  if (winningNumber === 3) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}
