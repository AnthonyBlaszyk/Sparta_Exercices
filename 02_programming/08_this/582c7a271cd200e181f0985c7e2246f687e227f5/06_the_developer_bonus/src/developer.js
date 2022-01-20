const developer = {
  isCoding: false,
  daysCoding: 0,
  projectStatus: "waiting for a project",
  codeLinesProduced: 0,
  linesNeeded: 0,
  maxDelay: 0,

  initiateProject: function () {
    this.isCoding = true;
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    return this;
  },
  startProject: function (linesNeeded, maxDelay) {
    this.linesNeeded = linesNeeded;
    this.maxDelay = maxDelay;
    return this;
  },

  codeForOneDay: function () {
    const randomBug = this.generateBug();
    if (this.codeLinesProduced < 80) {
      if (randomBug > 1) {
        this.codeLinesProduced += 2;
        this.daysCoding++;
      } else {
        this.codeLinesProduced += 2;
        this.daysCoding += 3;
      }
    } else if (this.codeLinesProduced < 150) {
      if (randomBug > 2) {
        this.codeLinesProduced += 2;
        this.daysCoding++;
      } else {
        this.codeLinesProduced += 2;
        this.daysCoding += 3;
      }
    } else {
      if (randomBug > 4) {
        this.codeLinesProduced += 2;
        this.daysCoding++;
      } else {
        this.codeLinesProduced += 2;
        this.daysCoding += 3;
      }
    }
    return this;
  },

  generateBug: function () {
    return Math.round(Math.random() * 10);
  },

  mightStop: function () {
    if (this.maxDelay - 1 >= this.daysCoding) {
      this.projectStatus = "project finished";
      this.isCoding = false;
    } else if (this.linesNeeded === this.codeLinesProduced) {
      this.projectStatus = "project stopped";
      this.isCoding = false;
    }
    return this;
  },
};

module.exports = {
  developer,
};
