const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.login("MTQ2NzA1MTI5NTA1ODgyNTI2Ng.GYRqlR.dGKcWmYxCKzRqvEO266NE7rrIVVP1NTeoKsgp8");
