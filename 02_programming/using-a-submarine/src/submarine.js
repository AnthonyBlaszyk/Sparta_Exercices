const submarine = {
  horizontalPosition: 0,
  depth: 0,
  aim: 0,
  multiplyBoth: function () {
    return this.horizontalPosition * this.depth;
  },
};

function getNumber(string) {
  return Number(string.charAt(string.length - 1));
}

function resetSubmarine() {
  submarine.horizontalPosition = 0;
  submarine.depth = 0;
  submarine.aim = 0;
}

export { submarine, getNumber, resetSubmarine };
