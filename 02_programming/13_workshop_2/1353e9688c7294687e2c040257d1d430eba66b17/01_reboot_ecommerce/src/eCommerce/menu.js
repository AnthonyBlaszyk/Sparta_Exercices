const cart = require("./cart");
const products = require("./products");

function displayMenu(reader) {
  console.log("\n**************************************************");
  console.log("MENU");
  console.log("**************************************************");
  console.log("1 - Buy a product");
  console.log("2 - Show cart");
  console.log("3 - Checkout");
  console.log("4 - Quit");
  menuChoice(reader, backToMenu, quit);
}

function backToMenu(reader) {
  displayMenu(reader);
}

function quit(reader) {
  reader.close();
}

function menuChoice(reader, callbackReturn, callbackQuit) {
  reader.question("\nChoose an action\n> ", (choice) => {
    switch (choice) {
      case "1":
        products.displayProduct(reader, callbackReturn, callbackQuit);
        break;
      case "2":
        cart.displayCart(reader, callbackReturn, callbackQuit);
        break;
      case "3":
        break;
      case "4":
        quit(reader);
        break;
      default:
        menuChoice(reader);
    }
  });
}

module.exports = {
  displayMenu: displayMenu,
};
