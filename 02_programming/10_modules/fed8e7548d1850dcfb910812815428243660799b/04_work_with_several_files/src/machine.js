// Here you can import functions from 'container' and 'drink'
import { putLitersOfCoffee, consumeLitersOfCoffee, litersOfCoffee } from "./container";

function fillWithLitersOfCoffee(container) {
  return putLitersOfCoffee(container);
}
function expresso() {
  return consumeLitersOfCoffee(0.08);
}

function longCoffee() {
  return consumeLitersOfCoffee(0.15);
}

export { fillWithLitersOfCoffee, expresso, longCoffee, litersOfCoffee };
