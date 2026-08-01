const { KING_ID } = require("../config");

const morning = require("../responses/hug/morning");
const afternoon = require("../responses/hug/afternoon");
const evening = require("../responses/hug/evening");
const midnight = require("../responses/hug/midnight");

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {

  execute(message) {

    if (message.author.id !== KING_ID) {

      return message.reply(
`— Artoria gently shakes her head.

— ...That privilege belongs to the King alone.`
      );

    }

    const hour = new Date().getHours();

    let pool;

    if (hour >= 5 && hour < 12) {

      pool = morning;

    } else if (hour >= 12 && hour < 18) {

      pool = afternoon;

    } else if (hour >= 18 && hour < 24) {

      pool = evening;

    } else {

      pool = midnight;

    }

    message.reply(random(pool));

  }

};
