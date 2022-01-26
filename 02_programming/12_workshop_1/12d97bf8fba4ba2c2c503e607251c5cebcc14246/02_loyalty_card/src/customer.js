import {customerList} from "./customerList.js"
import {start, quit} from "./interface.js"
import {showCustomerAccount} from "./customerAccount.js"

function viewCustomerList(reader){
  console.log("\n*******************\nCustomer list\n*******************")
  let i = 1;
  customerList.forEach((element)=>{
    console.log(`${i} - ${element.firstName} ${element.lastName}`)
    i++
  })
  console.log(`\n${i} - quit\n`);
  chooseCustomer(reader);
}

function chooseCustomer(reader){
  reader.question("Choose a customer\n> ", (choice)=>{
    if(Number.isInteger(Number(choice)) && Number(choice)>0 && Number(choice)<= customerList.length){
      accessCustomer(choice, reader)
    }else if(Number(choice) === customerList.length+1){
      quit(reader);
    }else{
      chooseCustomer(reader)
    }
  })
}

function accessCustomer(index, reader){
  console.log(`\n*******************\n${customerList[index-1].firstName} ${customerList[index-1].lastName}\n*******************`)
  console.log("1 - Show account\n2 - Add purchase\n3 - Use loyalty points")
  console.log("4 - Show purchase history\n5 - Choose another customer\n6 - Back to menu")
  console.log("7 - Quit\n")

  reader.question(`Choose an action for ${customerList[index-1].firstName} ${customerList[index-1].lastName}\n> `, (choice)=>{
    switch (choice){
      case "1":
        showCustomerAccount(index, reader)
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        viewCustomerList(reader)
        break;
      case "6":
        start(reader);
        break;
      case "7":
        quit(reader);
        break;
      default: accessCustomer(index, reader);
    }
  })
}

function createCustomer(reader){
  reader.question("Cusomer firstname : \n> ", (customerFirstName)=>{
    reader.question("Customer lastname : \n> ", (customerLastName)=>{
      reader.question("Customer mail : \n> ", (customerAddress)=>{
        reader.question("Customer city : \n> ", (customerCity)=>{
          reader.question("Customer country : \n> ", (customerCountry)=>{
            customerList.push({
              firstName : customerFirstName,
              lastName : customerLastName,
              email : customerAddress,
              adress : {
                city: customerCity,
                country : customerCountry
              },
              totalPurchase: 0,
              loyaltyPoints: 0,
            })
            viewCustomerList(reader)
          })
        })
      })
    })

  })
}

export {viewCustomerList, accessCustomer, createCustomer};
