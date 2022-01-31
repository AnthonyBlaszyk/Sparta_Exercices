type MyTuple = [string, number];

function handleTuple(array: MyTuple): void {
  // Code the function here.
  if (typeof array[0] === "string") {
    console.log(`${array[0]} is a string`);
    console.log(`${array[1]} is a number`);
  }
}

// Leave the line below for tests to work properly.
export { handleTuple };
