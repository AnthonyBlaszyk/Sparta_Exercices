const faker = require("faker");

function motivation() {
  const fakerMotivation = {
    catchPhrase: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(1),
  };

  return fakerMotivation;
}

module.exports = motivation;
