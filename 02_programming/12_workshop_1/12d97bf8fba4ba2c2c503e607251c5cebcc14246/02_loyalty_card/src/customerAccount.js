import {customerList} from "./customerList.js"
import {accessCustomer, viewCustomerList} from "./customer.js"
import { start, quit } from "./interface.js"

function showCustomerAccount(index, reader){
  console.log(`\n*******************\n${customerList[index-1].firstName} ${customerList[index-1].lastName}\n*******************`)
  console.log("Customer information")
  console.log(`Name:\t\t${customerList[index-1].firstName} ${customerList[index-1].lastName}`)
  console.log(`Email:\t\t${customerList[index-1].email}`);
  console.log("Address");
  console.log(` - City:\t${customerList[index-1].adress.city}`);
  console.log(` - Country:\t${customerList[index-1].adress.country}`);
  console.log(`Total purchase:\t${customerList[index-1].totalPurchase}`);
  console.log(`Loyalty points:\t${customerList[index-1].loyaltyPoints}\n`);

  console.log("1 - Back to client\n2 - Back to client list\n3 - Back to menu\n4 - quit")

  reader.question("Choose an action\n> ", (choice)=>{
    switch (choice) {
      case "1" :
        accessCustomer(index, reader);
        break;
      case "2":
        viewCustomerList(reader);
        break;
      case "3":
        start(reader);
        break;
      case "4":
        quit(reader);
        break;
      default: showCustomerAccount(index, reader)
    }
  })
}

export {showCustomerAccount};
