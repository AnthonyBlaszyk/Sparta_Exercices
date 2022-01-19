const identityForm = (reader) => {
  // Code here
  reader.question("first name\n", (firstname) => {
    reader.question("last name ?\n", (lastname) => {
      reader.question("age ?\n", (age) => {
        console.log(`Your name is ${firstname} ${lastname} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
