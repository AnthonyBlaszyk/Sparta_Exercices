const faker = require("faker");

function currentJob() {
  const fakerCurrentJob = {
    companyName: faker.company.companyName(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobTitle: faker.name.jobTitle(),
  };

  return fakerCurrentJob;
}

module.exports = currentJob;
