const currentJob = require("./currentJob");
const identity = require("./identity");
const motivation = require("./motivation");

function fakeCv() {
  let fakerCv = {
    currentJob: currentJob(),
    identity: identity(),
    motivation: motivation(),
  };

  return fakerCv;
}

module.exports = fakeCv;
