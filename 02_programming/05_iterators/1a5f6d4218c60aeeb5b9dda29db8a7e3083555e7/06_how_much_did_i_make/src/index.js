function howMuchDidIMake(invoices) {
  // Code here
  const tipArray = [];

  invoices.forEach((invoice)=>{
    if(invoice.waiter === "Yourself"){
      tipArray.push(invoice.tip);
    }
  });

  const totalTip = tipArray.reduce((tip, base)=>{
    return tip + base;
  });

  return totalTip;
}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
  { clients: 2, waiter: "Nobody", price: 2900, tip: 300 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 700 },
];

howMuchDidIMake(invoices);

// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
