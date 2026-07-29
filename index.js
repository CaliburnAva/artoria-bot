javascriptconst { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => { res.send('Artoria Online'); });
app.listen(process.env.PORT || 3000);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => { console.log('Saber está online!'); });
client.login(process.env.TOKEN);