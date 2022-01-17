function onlyMyTips(invoices) {
  // Code here
  const tipArray = [];
  invoices.forEach((invoice)=>{
    if(invoice.waiter === "Yourself"){
      tipArray.push(invoice.tip);
    }
  });
  console.log(tipArray);
  return tipArray;
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

onlyMyTips(todaysInvoices);

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
