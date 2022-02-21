type ParamRest = string[];

export function greetEveryone(...greet: string[]): void {
  // Code your function here
  greet.forEach((person) => {
    console.log(`Welcome to ${person}`);
  });
}
