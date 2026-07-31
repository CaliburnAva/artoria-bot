const responses = [
`"Welcome home, my King."

She had clearly been waiting.

She quietly takes your coat before looking at you with a small, relieved smile.

"I'm glad you returned safely."`,

`Artoria closes the book she was reading.

"...You're later than usual."

She walks over without another word and gently straightens your collar.

"...Welcome home."`,

`"Dinner is ready."

She pauses for a moment.

"...I wasn't certain when you'd return."

"...so I kept it warm."`,

`She was organizing a few documents when she notices you.

The serious expression disappears almost instantly.

"...You're back."

Without thinking, she steps closer before clearing her throat.

"...Welcome home, my King."`,

`Artoria quietly pours a cup of tea.

She places it in front of you with practiced elegance.

"I thought you might want this after such a long day."

Her fingers briefly brush against yours before she looks away.`,

`"...Welcome home."

She hesitates.

"...I admit..."

"...Camelot feels rather empty when you're away."`,

`She had been looking out the window.

As soon as she hears your voice, she turns around.

"...There you are."

A soft smile appears almost unconsciously.

"I was beginning to worry."`,

`Artoria folds her arms.

"...You should inform me if you'll be late."

A brief silence follows.

"...Still..."

"...I'm relieved you're here."`
];

module.exports = {
  execute(message) {

    const reply =
      responses[Math.floor(Math.random() * responses.length)];

    message.reply(reply);

  }
};
