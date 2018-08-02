const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = (".");

var prefix = (".");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setActivity(".help | NyXion")
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setAuthor("HELP", message.guild.iconURL)
        .setTitle("Commandes du NyXion BOT !")
        .addField(".help", "Affiche la liste des commandes du bot !")
        .setFooter("© NyXion")
        .setColor("0x6a9ccc")
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {
    
    if (message.content === prefix + "mcount") {
        var embed = new Discord.RichEmbed()
        .setAuthor("Membres", "https://cdn.discordapp.com/attachments/438419377335828491/449613403254685706/members.png")
        .setTitle(message.guild.memberCount)
        .setColor("0x6a9ccc")
    message.channel.sendEmbed(embed)
    }
  
    if (message.content === prefix + "membercount") {
        var embed = new Discord.RichEmbed()
        .setAuthor("Membres", "https://cdn.discordapp.com/attachments/438419377335828491/449613403254685706/members.png")
        .setTitle(message.guild.memberCount)
        .setColor("0x6a9ccc")
    message.channel.sendEmbed(embed)
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question :8ball:")};
        
            var replys = [
                "Oui",
                "Non",
                "Je sais pas",
                "Peut-être"
            ];
        
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :thinking:", tte)
            .addField("Réponse :kissing_heart:", reponse)
            message.channel.sendEmbed(bembed)
            break;
            }
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "🔶bienvenue").send(`[-] ${member.user.username}`)
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🔶bienvenue").send(`[+] ${member.user.username}`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'NyXionniens');
    member.addRole(role)
})
