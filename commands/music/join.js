module.exports = {
    name: 'join',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Bạn đang không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} You are not in the same voice channel !`);

        //client.player.setRepeatMode(message, false);
        //client.player.stop(message);
        var voiceCN = message.member.voice.channel;
        //client.player.play(message, './media/audio/join.mp3', { volume: 0.5 });

        voiceCN.join()
        .then(connection => {
            const dispatcher = connection.play('./media/audio/join.mp3');
            dispatcher.on("end", end => {
                //VC.leave()
            });
        })
        .catch(console.error);

        client.user.setStatus("online");
        client.user.setActivity(client.config.discord.activity, {type: client.config.discord.status});

        message.channel.send(`${client.emotes.success} BOT đã vào kênh !`);
    },
};