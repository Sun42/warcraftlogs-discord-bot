module.exports = {
    name : 'watch',
    args : true,
    usage : 'https://classic.warcraftlogs.com/guild/id/guild_id',
    description : 'watch guild logs',
    execute(message, args) {
        const url = args.shift();
        return message.channel.send(message.guild.name + ' is now watching ' + url);
    },
};