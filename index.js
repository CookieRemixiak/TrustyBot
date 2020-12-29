const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config  = require("./config.json");
const colors = require("colors");
const prefix = config.prefix;
const sql = require("mysql");

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& WENHOOKI  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const webohook_admi = new Discord.WebhookClient("793206793454878732", "pENZKXsUTYu65zcZRvqm495-4aKk9E3QTe0FgMqKa4S8FdYl_V9vQMz2DWRCxpXnxXMq");


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
.setAuthor(`Tworzenie zaproszenia...`, client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
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




if(cmd === `pomoc` || cmd === `help` || cmd === `h`){
    var embed_pomoc = new Discord.MessageEmbed()
    .setAuthor(`Komendy`, client.user.displayAvatarURL())
    .setColor(`#ff0000`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Trusty`)
    var opcja1 = (args[0])
    if(!opcja1){
        return message.channel.send(`\n> \`Podaj kategorię\`\nDostępne: **\`pomoc\`, \`ustawienia\`, \`info\`, \`mod\`**`)
    }
    if(opcja1 === "pomoc"){
        return message.channel.send(`\`\`\`Komendy Pomocy\`\`\``, `\`▪\` invite\n\`▪\` report\n`, false)
    }
    if(opcja1 === "ustawienia"){
        return message.channel.send(`\`\`\`Komendy Konfiguracyjne\`\`\``, `\`▪\` ustaw\n\`▪\` config\n`, false)
    }
    if(opcja1 === "info"){
        return message.channel.send(`\`\`\`Komendy Informacyjne\`\`\``, `\`▪\` user\n\`▪\` serwer\n\`▪\` bot\n\`▪\` regulamin\n`, false)
    }
    if(opcja1 === "mod"){
        return message.channel.send(`\`\`\`Komendy Moderacyjne\`\`\``, `\`▪\` ban\n\`▪\` tempban\n\`▪\` unban\n\`▪\` kick\n\`▪\` mute\n\`▪\` tempmute\n\`▪\` unmute\n\`▪\` warn\n\`▪\` unwarn\n\`▪\` warns\n\`▪\` delete-warnings\n\`▪\` lock\n\`▪\` un-lock\n\`▪\` note\n\`▪\` un-note\n\`▪\` clear\n`, false)
    }
}



if(cmd === `report`){

    var embed_report = new Discord.MessageEmbed()
/*
    if(message.guild.ownerID !== message.author.id){
        return message.channel.send(embed_report.setDescription(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`OWNER\``).setFooter(`Trusty ▪ Błąd`).setColor(`#00ffff`))
    }
*/
    var oznaczona_osoba = message.mentions.members.first();
    if(!oznaczona_osoba){
        return message.channel.send(`:x: **Oznacz osobę!**\nOznacz osobę, którą chcesz zgłosić\n\nPrzykład: \`t^report @Remixiak\``)
    }
    var powod = args.slice(1).join(" ")
    if(!powod){
        return message.channel.send(`:x: **Podaj powód zgłoszenia**`)
    }

    message.channel.send(`${oznaczona_osoba.user} został zgłoszony do administracji bota, dziękujemy za zgłoszenie!`);

    return webohook_admi.send(new Discord.MessageEmbed().setColor(`yellow`).setDescription(`**Zgłoszenie**\n\n\`\`\`\nZgłosił: ${message.author.tag} | ${message.author.id}\nZgłoszony: ${oznaczona_osoba.user.tag} | ${oznaczona_osoba.id}\n\`\`\`\n*Powód:*\n\`\`\`${powod}\n\`\`\``))

}



if(cmd === `ban`){

   // var embed_ban = new Discord.MessageEmbed()
  //  .setColor("#ff0000")


    if(!message.member.hasPermission(`BAN_MEMBERS`)){
        return message.channel.send(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`BAN_MEMBERS\``)
    }

    var do_bana = message.mentions.members.first() 

    if(!do_bana){
        return message.channel.send(`:x: **Brak oznaczenia**\nOznacz osobę, którą chcesz zbanować\nPrzykład: \`t^ban @Toshinori\``)
    }

        if(!do_bana.bannable || do_bana.id === message.author.id){
            return message.channel.send(`:x: **Nie można wykonać komendy!**\nOsoba, która została oznaczona nie jest możliwa do zbanowania`)
        }

        var powodp = args.slice(1).join(" ");

        if(!powodp) return message.channel.send("Podaj powód bana!")

        try{
        message.channel.send(`**Zbanowano!**\nModerator: \`${message.author.tag}\`\nZbanowany: \`${do_bana.user.tag}\`\nPowód:\n\`\`\`\n${powodp}\n\`\`\``)
        do_bana.send(`Zostałeś zbanowany na serwerze **\`${message.guild.name}\`**, przez **\`${message.author.tag}\`**\n\nPowód:\n\`\`\`\n${powodp}\n\`\`\``)
        do_bana.ban(`Zbanowany przez ${message.author.tag}, z powodu ${powodp}`)
        return;
        }catch(e){
            return message.reply("Błąd podczas nadawania bana, skontaktuj się z administracją bota :|")
        }
}
    













   
});


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     LOGOWANIE  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

client.on("ready", () => console.log(`${client.user.tag} | ${client.user.id} ... Online`.blue.bgWhite))
client.login(config.token)

