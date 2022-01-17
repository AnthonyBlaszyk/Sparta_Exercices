function canTakeArtPieces(pieces) {
  const filteredArray = [];
  pieces.forEach((piece)=>{
    filteredArray.push(piece.type);
  });
  return filteredArray.every((type)=>{
    return type === "painting";
  });
}

const test =
  [
    {piece: "The Thinker", type: "statue"},
    {piece: "Mona Lisa", type: "painting"},
    {piece: "Guernica", type: "painting"}
  ];


canTakeArtPieces(test);

// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
