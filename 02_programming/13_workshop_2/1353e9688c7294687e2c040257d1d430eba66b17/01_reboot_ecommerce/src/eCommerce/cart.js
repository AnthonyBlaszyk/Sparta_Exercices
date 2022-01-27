let cart = [
  {
    name: "chips",
    quantity: 3,
    price: 2,
  },
  {
    name: "waterBottle",
    quantity: 5,
    price: 0.5,
  },
];

function addToCart(reader, item, quantity) {
  cart.push({
    name: item.name,
    quantity: quantity,
    price: item.price,
  });
}

const createTotalPriceArray = cart.map((element) => {
  return element.price * element.quantity;
});

const calculateTotalPrice = createTotalPriceArray.reduce((first, second) => {
  return first + second;
});

function cartChoice(reader, callbackReturn, callbackQuit) {
  reader.question("\nChoose an action\n> ", (choice) => {
    switch (choice) {
      case "1":
        callbackReturn(reader);
        break;
      case "2":
        callbackQuit(reader);
        break;
      default:
        cartChoice(reader);
    }
  });
}

function displayCart(reader, callbackReturn, callbackQuit) {
  console.log("\n**************************************************");
  console.log("CART");
  console.log("**************************************************");
  cart.forEach((element, index) => {
    console.log(`${index + 1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });
  console.log("**************************************************");
  console.log(`TOTAL: ${calculateTotalPrice} €`);
  console.log("**************************************************");
  console.log("1 - Back to menu");
  console.log("2 - Quit");
  cartChoice(reader, callbackReturn, callbackQuit);
}

module.exports = {
  cart: cart,
  addToCart: addToCart,
  displayCart: displayCart,
};
