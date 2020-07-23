module.exports = {
    name : 'info',
    args: false,
    description : 'display infos',
    usage : '',
    execute(message, args) {
        message.channel.send('Your discord guild name: ' + message.guild.name);
        message.channel.send('Your discord guild id: ' + message.guild.id);
        message.channel.send('Your discord user name: ' + message.author.username);
        message.channel.send('Your discord user id: ' + message.author.id);
    },
};