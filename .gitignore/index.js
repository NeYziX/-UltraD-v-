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
        .setAuthor("Nom", message.guild.iconURL)
        .setTitle("Commande du UltraROBOT !")
        .addField("</help", "Affiche la liste des commandes du bot !")
        .setFooter("© </UltraDév'>")
        .setColor("0x6a9ccc")
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {
    if(message.content[0] === prefix) {
      let splitMessage = message.content.split(" ");
      if(splitMessage[0] === "</ban") {
          if(splitMessage.length === 2)
              message.guild.ban(message.mentions.users.firts());
          else
              sendError(message, "Erreur";                    
      }
    }
})
