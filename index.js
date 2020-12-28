const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config  = require("./config.json");
const colors = require("colors");
const prefix = config.prefix;


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& EVENT ON MESSAGE &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


client.on('message', async message => {
if(message.author.bot) return
if(message.content == prefix) return

if(message.author.bot) return;
if(message.content.indexOf(prefix) !== 0) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  KOMENDY &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


if(cmd == 'ping' || cmd == `pong`) {
return message.channel.send("Pong: " + client.ws.ping + "ms");
}

if(cmd === `invite` || cmd == `zaproś` || cmd == `zapros`){
var embed_zapro = new Discord.MessageEmbed()
.setColor("cyan")
.setDescription(`**Tworzenie zaproszenia...**`)
var opcja = (args[0])
if(!opcja){
    return message.channel.send(embed_zapro.addField(`Jakie zaproszenie chcesz otrzymać?`, `\`t^invite bot\` lub \`t^invite serwer\``, true))
}
if(opcja == "bot"){
    return message.channel.send(embed_zapro.addField(`Wygenerowano zaproszenie do bota!`, `[Dodaj Bota](https://google.com)`, true))
}
if(opcja == "serwer"){
    return message.channel.send(embed_zapro.addField(`Wygenerowano zaproszenie do serwera!`, `[Dołącz do Serwera](https://google.com)`, true))
}
}














   
});


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     LOGOWANIE  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

client.on("ready", () => console.log(`${client.user.tag} | ${client.user.id} ... Online`.blue.bgWhite))
client.login(config.token)

