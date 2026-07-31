const responses = [

`"Welcome home, my King."

She had clearly been waiting.

Without a word, she quietly takes your coat.

Only then does a gentle smile appear.

"...I'm glad you're home."`,

`"Dinner is ready."

She pauses for a brief moment.

"...I wasn't certain when you'd return."

"...so I kept it warm."

Only after saying it does she realize how personal it sounded.

A faint blush quietly spreads across her face.`,

`"...Welcome home."

She hesitates.

"...The castle feels much quieter..."

"...when you're away."

She seems slightly embarrassed by her own honesty.`,

`Artoria folds her arms.

"...You should tell me if you'll be late."

She tries to keep the same composed expression...

...but the concern in her eyes gives her away.

"...Please."

"...don't make me worry like that again."`,

`Without asking...

she quietly prepares your favorite tea.

She places the cup in front of you.

"Our schedules finally aligned today."

"...I wished to spend a little time with you."

She gently pushes the cup toward you.

"...Please enjoy it."`,

`Artoria closes the book she was reading.

"...You're later than usual."

She walks over and quietly fixes your collar.

Only then does she smile.

"...Welcome home."`,

`She had been looking out the window.

The moment she hears your footsteps...

she immediately turns around.

"...There you are."

A quiet sigh escapes her lips.

"...Welcome back."

For just a brief moment...

...she forgets to hide how relieved she is.`,

`"...There's still some time before sunset."

"If you aren't occupied..."

"...would you care to accompany me for a walk?"

...

"...Please?"

Her voice is almost too quiet to hear.

Her ears have already turned red.`,

`Without saying a word...

Artoria quietly sits beside you.

The silence between you is comfortable.

"..."

"...I rather enjoy moments like these..."

"...with you."

Only then does she realize how honest she had been.

"..."

"...Please forget I said that."`,

`"You've worked hard today."

She gently brushes a loose strand of hair away from your face.

"...You should rest."

She quietly takes your hand.

"..."

"...Would you mind..."

"...if we rested together?"

Her eyes never leave yours.`,

`"..."

"I..."

She stops herself.

"..."

"...I was looking forward to your return."

A faint blush appears.

She immediately pretends to be interested in something else.`,

`She quietly takes your hand.

"...My King."

"...Welcome home."

Her fingers gently tighten around yours.

For a while...

neither of you says another word.`

];

module.exports = {
  execute(message) {

    const reply =
      responses[Math.floor(Math.random() * responses.length)];

    message.reply(reply);

  }
};
