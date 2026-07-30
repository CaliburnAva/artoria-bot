const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("clientReady", () => {
  console.log(`👑 ${client.user.tag} despertou!`);
});

client.login(process.env.TOKEN);
