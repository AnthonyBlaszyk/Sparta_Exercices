const cart = require("./cart");

const productBDD = [
  {
    name: "beer",
    price: 4,
    quantity: 300,
  },
  {
    name: "chips",
    price: 2,
    quantity: 25,
  },
  {
    name: "cheese",
    price: 3,
    quantity: 50,
  },
  {
    name: "olives",
    price: 1,
    quantity: 200,
  },
  {
    name: "waterBottle",
    price: 0.5,
    quantity: 1000,
  },
];

function displayProduct(reader, callbackReturn, callbackQuit) {
  let i = 1;
  console.log("\n**************************************************");
  console.log("SHOP");
  console.log("**************************************************");
  productBDD.forEach((element, index) => {
    i++;
    console.log(`${index + 1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });
  console.log(`${i} - back to menu`);
  console.log(`${i + 1} - quit`);
  chooseProduct(reader, callbackReturn, callbackQuit);
}

function chooseProduct(reader, callbackReturn, callbackQuit) {
  reader.question("\nchoose a product\n> ", (choice) => {
    if (Number(choice) > 0 && Number(choice) <= productBDD.length) {
      reader.question(`How many ${productBDD[choice - 1].name} ?\n> `, (quantity) => {
        if (checkCart(productBDD[choice - 1], quantity)) {
          productBDD[choice - 1].quantity -= Number(quantity);
          callbackReturn(reader);
        } else {
          productBDD[choice - 1].quantity -= Number(quantity);
          cart.addToCart(reader, productBDD[choice - 1], quantity);
          callbackReturn(reader);
        }
      });
    } else {
      console.log("Wrong input!");
      chooseProduct(reader, callbackReturn, callbackQuit);
    }
  });
}

function checkCart(product, quantity) {
  let check = false;
  cart.cart.forEach((element) => {
    if (element.name === product.name) {
      element.quantity += Number(quantity);
      check = true;
    }
  });
  return check;
}

module.exports = {
  displayProduct: displayProduct,
};
