const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "data", "affection.json");

function read() {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function save(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = {

  get() {

    return read().rank;

  },

  set(rank) {

    const data = read();

    data.rank = rank;

    save(data);

  }

};
