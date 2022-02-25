export function line(numberOfStars: number): string {
  let starLine: string = "";
  for (let i = 0; i < numberOfStars; i++) {
    starLine += "*";
  }
  return starLine;
}
