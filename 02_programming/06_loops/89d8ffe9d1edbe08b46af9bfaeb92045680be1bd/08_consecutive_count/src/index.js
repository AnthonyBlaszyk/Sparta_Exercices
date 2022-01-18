function consecutiveCount(word, chara) {
  // Code here
  let charaCount = 0;
  let tmpCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === chara && word[i] !== word[i - 1]) {
      tmpCount = 1;
      if (tmpCount > charaCount) {
        charaCount = tmpCount;
      }
    } else if (word[i] === chara && word[i] === word[i - 1]) {
      tmpCount++;
      if (tmpCount > charaCount) {
        charaCount = tmpCount;
      }
    }
  }
  return charaCount;
}

console.log(consecutiveCount("aaaabcaaabaa", "a"));

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
