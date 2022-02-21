type ParamRest = string[];

export function greetEveryone(...greet: ParamRest): void {
  // Code your function here
  greet.forEach((person) => {
    console.log(`Welcome to ${person}`);
  });
}
