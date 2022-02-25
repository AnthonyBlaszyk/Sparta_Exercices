export function column(numberOfLines: number, lineContent: string): string {
  let content: string = "";
  for (let i = 0; i < numberOfLines; i++) {
    content += `${lineContent}\n`;
  }
  return content;
}
