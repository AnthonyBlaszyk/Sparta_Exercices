type Draw = number[];

export function lottery_draw(): Draw {
  const lotteryTicket = [];
  for (let i = 0; i < 6; i++) {
    lotteryTicket.push(Math.round(Math.random() * 100));
  }
  return lotteryTicket;
}
