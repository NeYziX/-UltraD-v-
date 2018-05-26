const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("<");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setActivity("<help | Dév' By NeYziX ✨")
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

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "8ball":
            let args = message.content.split(" ").slice(1);
            let tte = args.join(" ")
            if (!tte){
        
        
            var replys = [
                "Oui",
                "Non",
                "Surement",
                "Peut-être",
                "Demande pas à moi"
            ];
        
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :thinking:", tte)
            .addField("Réponse :kissing_heart:", reponse)
            message.channel.sendEmbed(bembed)
            break;
            case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Erreur")})}
            break
            }
});

bot.on('message', message => {

    if (message.content === prefix + "test") {
        var embed = new Discord.RichEmbed()
        .setAuthor("Pour les Dév', si vous voulez vous démarquer sur le serveur aller dans #rôles :D", message.guild.iconURL)
        .setFooter("Cordialement, NeYziX ✨")
        .setColor("0x6a9ccc")
    message.channel.sendEmbed(embed)
    }
    
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
  
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`${member} nous a quitté :cry: !`)
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`Hey ${member}, bienvenue sur le serveur :tada::hugging: !`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
});

function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ':x: ' + description
    }});
}

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let splitMessage = message.content.split(" ");
        if(splitMessage[0] === '<play') {
            if(splitMessage.length === 2)
            {
                if(message.member.voiceChannel)
                {
                    message.member.voiceChannel.join().then(connection => {
                        dispatcher = connection.playArbitraryInput(splitMessage[1]);
                        
                        dispatcher.on('error', e => {
                            console.log(e);
                        });
                      
                        dispatcher.on('end', e => {
                            dispatcher = undefined;
                            console.log('Fin du son');
                        });
                    }).catch(console.log);
                }
                else
                sendError(message, "Erreur, vous devez d'abord rejoindre un salon vocal");
            }
            else
                sendError(message, 'Erreur, problème dans les paramètres');
        }
        else if(splitMessage[0] === '<pause') {
            if(dispatcher !== undefined)
                dispatcher.pause();
        }
        else if(splitMessage[0] === '<resume') {
            if(dispatcher !== undefined)
                dispatcher.resume();
        }
    }
})
