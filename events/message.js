const sql = require("mysql");
const Discord = require('discord.js');
const cool_oznacz = new Set();
const config = require("../config.json")
const pref = config.prefix;



module.exports = (client, message) => {

  
if (message.author.bot || message.channel.type === "dm") return;  


        if (!message.content.startsWith(pref)) return;
        const args = message.content.slice(pref.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
        if (!cmd) return;
        cmd.run(client, message, args);
    
    
    
    

 if (message.mentions.has(client.user) && !message.mentions.everyone) {
	 
	   if (cool_oznacz.has(message.author.id)) {
      return;
    }


      var embed_ping = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setDescription(`**:bell: Wykryto ping**\n\n> *${message.author}, mój prefix* **\`t^\`** . \n\n\`• Spis komend\` - \`t^pomoc\``)
      .setFooter(message.member.user.tag, message.author.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      message.channel.send(embed_ping);

      cool_oznacz.add(message.author.id);
    setTimeout(() => {
      cool_oznacz.delete(message.author.id);
    }, 30000);
    return;
    
}
}




  










