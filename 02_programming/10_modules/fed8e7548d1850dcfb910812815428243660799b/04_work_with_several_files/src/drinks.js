// There should be no import in this file. Only exports!

function expresso(container) {
  return this.serveACup(container);
}

function longCoffee(container) {
  return this.serveACup(container);
}

export { expresso, longCoffee };
