import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  const starLine = line(width);
  return column(height, starLine);
}
