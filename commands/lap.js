const { KING_ID } = require("../config");

const morning = require("../responses/lap/morning");
const afternoon = require("../responses/lap/afternoon");
const evening = require("../responses/lap/evening");
const midnight = require("../responses/lap/midnight");

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {

  execute(message) {

    if (message.author.id !== KING_ID) {

      return message.reply(
`— ...`
      );

    }

    const hour = new Date().toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "numeric",
      hour12: false
    });

    const currentHour = Number(hour);

    let pool;

    if (currentHour >= 5 && currentHour < 12) {

      pool = morning;

    } else if (currentHour >= 12 && currentHour < 18) {

      pool = afternoon;

    } else if (currentHour >= 18 && currentHour < 24) {

      pool = evening;

    } else {

      pool = midnight;

    }

    message.reply(random(pool));

  }

};
