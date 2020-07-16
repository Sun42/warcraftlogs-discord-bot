require('dotenv').config();
const discord = require('discord.js');

const TOKEN = process.env.TOKEN;
const client = new discord.Client();

client.once('ready', () => {
   console.log('Client ready!');
});

client.on('message', (message) => {
    console.log(message.content);
    if (message.content == "/report") {
        message.channel.send("N/A");
    }
 });

client.login(TOKEN);