const affection = {

  levels: {
    D: 0,
    C: 25,
    B: 50,
    A: 75,
    EX: 100
  },

  current: "D",

  get() {
    return this.current;
  },

  set(rank) {

    if (this.levels[rank] !== undefined) {
      this.current = rank;
    }

  },

  value() {
    return this.levels[this.current];
  }

};

module.exports = affection;
