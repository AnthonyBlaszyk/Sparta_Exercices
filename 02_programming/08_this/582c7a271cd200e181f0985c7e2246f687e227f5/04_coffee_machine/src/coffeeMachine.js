const machine = {
  // Complete here
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function (litersAdded) {
    this.litersOfCoffee += litersAdded;
    return this;
  },
  expresso: function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee -= 0.08;
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function () {
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee -= 0.15;
      return true;
    } else {
      return false;
    }
  },
};

module.exports = machine;
