const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("<!");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setGame("<!help | Site bientôt")
});
