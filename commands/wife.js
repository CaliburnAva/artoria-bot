const { KING_ID } = require("../config");

const affection = require("../affection");

const morning = require("../responses/morning");
const afternoon = require("../responses/afternoon");
const evening = require("../responses/evening");
const midnight = require("../responses/midnight");

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
