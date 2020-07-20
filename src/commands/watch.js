module.exports = {
    name : 'watch',
    description : 'watch guild logs',
    execute(message, args) {
        console.log(args);
        if (!args.length) {
            let error_message = 'Provide a valid url argument ';
            error_message += 'ex: /watch https://classic.warcraftlogs.com/guild/eu/auberdine/sigma or https://classic.warcraftlogs.com/guild/id/475922';
            return message.channel.send(error_message);
        }
        const url = args.shift();
        return message.channel.send(message.guild.name + ' is now watching ' + url);
    },
};