const faker = require("faker");

function identity() {
  const fakerIdentity = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    phoneNumber: faker.phone.phoneNumber(),
    email: `${faker.name.firstName()}.${faker.name.lastName()}@fake.local`,
    avatar: faker.image.avatar(),
  };

  return fakerIdentity;
}

module.exports = identity;
