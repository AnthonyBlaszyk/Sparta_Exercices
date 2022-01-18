function sing() {
  // code here
  let lirycs = [];
  for (let i = 99; i > 0; i--) {
    if (i > 2) {
      lirycs.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`, `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    } else if(i > 1){
      lirycs.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`, `Take one down and pass it around, ${i - 1} bottle of beer on the wall.`);
    }
    else {
      lirycs.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`, "Take one down and pass it around, no more bottles of beer on the wall.");
    }
  }
  lirycs.push("No more bottles of beer on the wall, no more bottles of beer.");
  lirycs.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  return lirycs;
}

// Do not remove the following line, it is for tests
module.exports = sing;
