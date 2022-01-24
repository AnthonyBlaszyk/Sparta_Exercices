const faker = require("faker");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const city = faker.address.city();
const phoneNumber = faker.phone.phoneNumber();
const email = `${firstName}.${lastName}@fake.local`;
const avater = faker.image.avatar();

export { firstName, lastName, city, phoneNumber, email, avater };
