const { Client, GatewayIntentBits } = require("discord.js");

const wife = require("./commands/wife");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("clientReady", () => {
  console.log(`👑 ${client.user.tag} despertou!`);
});

client.on("messageCreate", (message) => {

  if (message.author.bot) return;

  if (message.content === "!wife") {
    wife.execute(message);
  }

});

client.login(process.env.TOKEN);
