const humanFactory = (humanData = {}) => {
  // code here
  let human = {
    firstName: "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduction: function () {
      return `Hello! My name is ${this.fullname()}.`;
    },
    ...humanData,
  };

  if (human.genre === "female" && human.firstName === "John") {
    human.firstName = "Jane";
  }

  return human;
};

const createHumans = (humans) => {
  // code here
  return humans.map((human) => {
    return humanFactory(human);
  });
};

console.log(createHumans([{ genre: "female" }]));

// const [john, jane] = [createHumans({}), createHuman({ genre: "female" })];

// const [jane, john] = createHumans([{ genre: "female" }, {}]);
// console.log(jane);
// console.log(john);

module.exports = {
  humanFactory,
  createHumans,
};
