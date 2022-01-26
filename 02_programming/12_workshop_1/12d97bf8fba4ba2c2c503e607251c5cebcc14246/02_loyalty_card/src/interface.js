import { viewCustomerList, createCustomer } from "./customer.js"

function start(reader){

  console.log("\nWelcome\n*******************")
  console.log("1 - add new customer\n2 - access customer data\n3 - Quit\n")

  askAction(reader);
}

function askAction(reader) {
  reader.question("Choose an action\n> ", (choice)=>{
    switch(choice){
      case "1":
        createCustomer(reader);
        break;
      case "2":
        viewCustomerList(reader);
        break;
      case "3":
        quit(reader);
        break;
      default: askAction(reader);
      }
  })
}

function quit(reader){
  reader.close();
}
export {start, quit};
