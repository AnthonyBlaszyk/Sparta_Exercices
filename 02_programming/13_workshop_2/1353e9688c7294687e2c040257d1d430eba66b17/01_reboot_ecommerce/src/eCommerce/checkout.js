const cart = require("./cart");

function checkout(reader, callbackReturn, callbackQuit) {
  cart.cart.forEach((element, index) => {
    console.log(`${index + 1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });
}

function askForPayment(reader, price) {
  reader.question(`You have to pay : ${price} €\n> `, (userSum) => {
    if (Number(userSum) > price) {
      console.log(`${Number(userSum) - price} more than expected`);
    } else if (Number(userSum) < price) {
      console.log(`still ${price - Number(userSum)}`);
    } else if (Number(userSum) === price) {
      console.log("ok");
    }
  });
}

module.exports = { checkout: checkout };
