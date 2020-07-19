require('dotenv').config();
const TOKEN = process.env.TOKEN;
const { prefix } = require('./config.json')

const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
   console.log('Client ready');
});

client.on('message', (message) => {
    console.log(message.content);
    if (message.content.startsWith(`${prefix}info`)) {
        message.channel.send("Your discord guild name: " + message.guild.name);
        message.channel.send("Your discord guild id: " + message.guild.id);
        message.channel.send("Your discord user name: " + message.author.username);
        message.channel.send("Your discord user id: " + message.author.id);
    }
 });

client.login(TOKEN);