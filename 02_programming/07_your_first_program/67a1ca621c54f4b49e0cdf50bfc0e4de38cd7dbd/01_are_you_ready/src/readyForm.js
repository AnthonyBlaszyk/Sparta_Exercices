const readyForm = (reader) => {
  // Code here
  console.log("Hello user!");
  reader.question("Are you ready for today ??!\n", (ready) => {
    console.log(`WOW, ${ready} ??!! Really Nice! Let's goo !!.`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
