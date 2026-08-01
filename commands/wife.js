const { KING_ID } = require("../config");

const affection = require("../affection");

const morning = require("../responses/wife/morning");
const afternoon = require("../responses/wife/afternoon");
const evening = require("../responses/wife/evening");
const midnight = require("../responses/wife/midnight");

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {

  execute(message) {

    if (message.author.id !== KING_ID) {

      return message.reply(
`— That matter concerns the King alone.`
      );

    }

    const hour = new Date().toLocaleString("en-US", {
  timeZone: "America/Sao_Paulo",
  hour: "numeric",
  hour12: false

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

    let reply = random(pool);

    switch (affection.get()) {

      case "D":
        break;

      case "C":

        reply += `

────────────────

She seems noticeably more at ease around you than before.`;

        break;

      case "B":

        reply += `

────────────────

Before stepping away...

she quietly brushes her fingers against yours.

The gesture lasts only a second...

...but it feels entirely natural.`;

        break;

      case "A":

        reply += `

────────────────

She gently squeezes your hand.

Her gaze lingers for a moment.

— ...I'm glad you're here.`;

        break;

      case "EX":

        reply += `

────────────────

She quietly moves a little closer.

There is no hesitation anymore.

Her forehead softly rests against yours.

...

— Stay a little longer.

—I don't want this evening to end just yet.`;

        break;

    }

    message.reply(reply);

  }

};
