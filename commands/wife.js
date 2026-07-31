const { KING_ID } = require("../config");

const categories = {

  morning: [

`— Welcome home, my King.

She had clearly been waiting.

Without a word, she quietly takes your coat.

Only then does a gentle smile appear.

— ...I'm glad you're home.`,

`Artoria closes the book she was reading.

— ...You're later than usual.

She walks over and quietly fixes your collar.

Only then does she smile.

— Welcome home.`,

`She had been looking out the window.

The moment she hears your footsteps...

she immediately turns around.

— ...There you are.

A quiet sigh escapes her lips.

— Welcome back.

For just a brief moment...

...she forgets to hide how relieved she is.`

  ],

  afternoon: [

`— Welcome home.

She hesitates.

— ...The castle feels much quieter...

— ...when you're away.

She lowers her gaze for a moment.

Only after gathering herself does she finally meet your eyes again.`,

`She quietly takes your hand.

— ...My King.

— Welcome home.

Her fingers gently tighten around yours.

She never lets go.

Not until you're safely beside her.`,

`...

"I..."

She stops herself.

...

— ...I was looking forward to your return.

A faint blush slowly spreads across her face.

She tries to compose herself...

...but the small smile never disappears.`

  ],

  evening: [

`Without asking...

she quietly prepares fresh coffee.

The aroma slowly fills the room before she places a cup in front of you.

— Our schedules finally aligned today.

— ...I wished to spend a little time with you.

She gently nudges the cup toward you.

— Please enjoy it.`,

`— Dinner is ready.

She pauses for a brief moment.

— ...I wasn't certain when you'd return.

— ...so I kept it warm.

Only after saying it does she realize how personal it sounded.

A faint blush quietly colors her cheeks.`

  ],

  midnight: [

`Without saying a word...

Artoria quietly sits beside you.

The silence between you is comfortable.

...

— ...I rather enjoy moments like these...

— ...with you.

She realizes only afterward how honest she'd been.

Her cheeks quietly turn pink.

Still...

she doesn't move away.`,

`— You've worked hard today.

She gently brushes a loose strand of hair away from your face.

— ...You should rest.

She quietly takes your hand.

...

— ...Would you mind...

— ...if we rested together?

She can't quite hide the hopeful look in her eyes.`,

`— ...There's still some time before sunset.

If you aren't occupied...

— ...would you care to accompany me for a walk?

...

— ...Please?

The word leaves her lips almost as a whisper.

Her ears have already turned bright red.`

  ]

};

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

      pool = categories.morning;

    } else if (hour >= 12 && hour < 18) {

      pool = categories.afternoon;

    } else if (hour >= 18 && hour < 23) {

      pool = categories.evening;

    } else {

      pool = categories.midnight;

    }

    const reply =
      pool[Math.floor(Math.random() * pool.length)];

    message.reply(reply);

  }

};
