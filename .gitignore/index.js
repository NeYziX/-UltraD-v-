const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setGame("/help | Dév' By NeYziX ✨")
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Commande du ZBot !")
        .addField("/help", "Affiche la liste des commandes du bot !")
        .setFooter("© ZDown")
        .setColor("0xd26cba")
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed)
    }
});
