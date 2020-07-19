require('dotenv').config();
const TOKEN = process.env.TOKEN;
const { prefix } = require('./config.json')

const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
   console.log('Client ready');
});

client.on('message', (message) => {
    /*
    console.log(message.content);
    if (message.content.startsWith(`${prefix}info`)) {
        message.channel.send("Your discord guild name: " + message.guild.name);
        message.channel.send("Your discord guild id: " + message.guild.id);
        message.channel.send("Your discord user name: " + message.author.username);
        message.channel.send("Your discord user id: " + message.author.id);
    }
    */
   if (!message.content.startsWith(prefix) || message.author.bot) {
       console.log('Invalid message' + message.content);
       return;
   }
   const args = message.content.slice(prefix.length).trim().split('/ +/');
   const command = args.shift().toLowerCase();

   if (command === 'watch') {
       if (!args.length) {
           error_message = 'Provide a valid url argument ex: /watch https://classic.warcraftlogs.com/guild/eu/auberdine/sigma or https://classic.warcraftlogs.com/guild/id/475922';
           return message.channel.send(error_message);
       }
       const url = args.shift();
   }
 });

client.login(TOKEN);