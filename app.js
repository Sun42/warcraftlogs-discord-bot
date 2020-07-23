const fs = require('fs');

// configs
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const { prefix } = require('./config.json');

const discord = require('discord.js');
const client = new discord.Client();

// dynamic commands loading
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Client ready');
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(elem => elem.aliases && elem.aliases.includes(commandName));
    if (!command) return;
    if (command.args && !args.length) {
        let reply = `You didn't provide enough arguments, ${message.author}.`;
        if (command.usage) {
            reply += `\n${prefix}${command.name} ${command.usage}`;
        }
        return message.channel.send(reply);
    }
    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('The was an error trying to execute that command.');
    }
});

client.login(TOKEN);