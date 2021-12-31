const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription('Beni Davet Etmek İçin Tıklayın : (https://discord.com/oauth2/authorize?client_id=926389411648786482&permissions=8&scope=bot)')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guilOnly: true,
aliases: [],
permlevel: 0
};
exports.help = {
name: 'davet',
usage:'davet'};

