function waitFor(time: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("this will be printed after 2 seconds"));
    }, time);
  });
}

export { waitFor };
