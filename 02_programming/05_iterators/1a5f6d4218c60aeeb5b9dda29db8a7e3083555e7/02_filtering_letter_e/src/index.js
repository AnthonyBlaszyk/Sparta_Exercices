function theEFilter(sentences) {
  const filteredArray = sentences.filter((sentence)=>{
    return (sentence.includes("E") || sentence.includes("e"));
  });
  return filteredArray;
}

console.log(theEFilter(["Tst", "test", "TEST", "tast"]));

// Do not remove the following line, it is for tests
module.exports = theEFilter;
