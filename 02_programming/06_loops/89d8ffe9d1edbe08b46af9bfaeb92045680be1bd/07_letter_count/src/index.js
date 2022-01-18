function letterCount(string, chara) {
  // Code here
  let numberOfChara = 0;
  for(let i=0; i<string.length; i++){
    if(chara === string[i]){
      numberOfChara++;
    }
  }
  return numberOfChara;
}


// Do not remove the following line, it is for tests
module.exports = letterCount;
