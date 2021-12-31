const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("RED")
.setImage("https://c.tenor.com/7WZIaXyBev4AAAAM/kanka-bedelini%C3%B6deyeceksin-aykut-elmas.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'salak', 
    description: 'Deathh code team', 
    usage: 'salak'
};