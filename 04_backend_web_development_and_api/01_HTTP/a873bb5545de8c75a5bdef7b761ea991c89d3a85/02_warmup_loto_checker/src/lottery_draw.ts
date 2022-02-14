import { Draw } from "./types";

export function lottery_draw(): Draw {
  const lotteryTicket = [];
  for (let i = 0; i < 3; i++) {
    lotteryTicket.push(Math.round(Math.random() * 3));
  }
  return lotteryTicket;
}
