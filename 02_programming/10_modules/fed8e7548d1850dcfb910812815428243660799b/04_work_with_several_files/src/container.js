// There should be no import in this file. Only exports!
let litersOfCoffee = 0;

function putLitersOfCoffee(coffeeQuantity) {
  litersOfCoffee += coffeeQuantity;
}

function consumeLitersOfCoffee(coffeeQuantity) {
  if (litersOfCoffee - coffeeQuantity >= 0) {
    litersOfCoffee -= coffeeQuantity;
    return true;
  } else {
    return false;
  }
}

export { putLitersOfCoffee, consumeLitersOfCoffee, litersOfCoffee };
