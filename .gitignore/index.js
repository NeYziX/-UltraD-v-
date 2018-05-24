const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("</");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setGame("</help | Dév' By NeYziX ✨")
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setAuthor("Nom", "https://cdn.discordapp.com/attachments/442741695289753611/449270732665651211/natsu.png")
        .setTitle("Commande du UltraROBOT !")
        .addField("</help", "Affiche la liste des commandes du bot !")
        .setFooter("© </UltraDév'>")
        .setColor("0x6a9ccc")
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed)
    }
});
