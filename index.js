const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config  = require("./config.json");
const colors = require("colors");
const prefix = config.prefix;
const sql = require("mysql");

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& WENHOOKI  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const webohook_admi = new Discord.WebhookClient("793206793454878732", "pENZKXsUTYu65zcZRvqm495-4aKk9E3QTe0FgMqKa4S8FdYl_V9vQMz2DWRCxpXnxXMq");
const webhook_logs_join_remove = new Discord.WebhookClient("793448642546630677", "romZb8pNbA2t4v7IoLZk5IgVgDIZDDapsMRQ-wE_vzW8Oe0EvsCn2BmQisKSc5i46isN");


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
        return message.channel.send(embed_pomoc.setDescription(`\n> \`Podaj kategorię\`\nDostępne: **\`pomoc\`, \`ustawienia\`, \`info\`, \`mod\`**`))
    }
    if(opcja1 === "pomoc"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Pomocy\`\`\`\n\`▪\` invite\n\`▪\` report\n\n\`\`\` \`\`\``, false))
    }
    if(opcja1 === "ustawienia"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Konfiguracyjne\`\`\`\n\`▪\` ustaw\n\`▪\` config\n\n\`\`\` \`\`\``, false))
    }
    if(opcja1 === "info"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Informacyjne\`\`\`\n\`▪\` user\n\`▪\` serwer\n\`▪\` bot\n\`▪\` regulamin\n\n\`\`\` \`\`\``, false))
    }
    if(opcja1 === "mod"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Moderacyjne\`\`\`\n\`▪\` ban\n\`▪\` tempban\n\`▪\` unban\n\`▪\` kick\n\`▪\` mute\n\`▪\` tempmute\n\`▪\` unmute\n\`▪\` warn\n\`▪\` unwarn\n\`▪\` warns\n\`▪\` delete-warnings\n\`▪\` lock\n\`▪\` un-lock\n\`▪\` note\n\`▪\` un-note\n\`▪\` clear\n\n\`\`\` \`\`\``, false))
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



if(cmd === `ban` || cmd === `b`){

    if(!message.member.hasPermission(`BAN_MEMBERS`)){
        return message.channel.send(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`BAN_MEMBERS\``)
    }

    var do_bana = message.mentions.members.first() 

    if(!do_bana){
        return message.channel.send(`:x: **Brak oznaczenia**\nOznacz osobę, którą chcesz zbanować\nPrzykład: \`t^ban @Toshinori\``)
    }

    if(!do_bana.bannable || do_bana.id === message.author.id){
        return message.channel.send(`:x: **Nie można wykonać komendy!**\nOsoba, która została oznaczona nie jest możliwa do zbanowania`)
    }else{

    var powodp = args.slice(1).join(" ");

    if(!powodp) return message.channel.send("Podaj powód bana!")

        try{
        do_bana.ban()    
        message.channel.send(`**Zbanowano!**\nModerator: \`${message.author.tag}\`\nZbanowany: \`${do_bana.user.tag}\`\nPowód:\n\`\`\`\n${powodp}\n\`\`\``)
        do_bana.send(`Zostałeś zbanowany na serwerze **\`${message.guild.name}\`**, przez **\`${message.author.tag}\`**\n\nPowód:\n\`\`\`\n${powodp}\n\`\`\``)
        return;
        }catch(e){
            return message.reply("Błąd podczas nadawania bana, skontaktuj się z administracją bota :|")
        }
    }
}
    

if(cmd === `kick` || cmd === `k`){
    if(!message.member.hasPermission(`KICK_MEMBERS`)){
        return message.channel.send(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`KICK_MEMBERS\``)
    }

    var do_kicka = message.mentions.members.first();
    if(!do_kicka){
        return message.channel.send(`:x: **Brak oznaczenia**\nOznacz osobę, którą chcesz wyrzucić\nPrzykład: \`t^kick @Toshinori\``)
    }

    if(!do_kicka.kickable || do_kicka.id === message.author.id){
        return message.channel.send(`:x: **Nie można wykonać komendy!**\nOsoba, która została oznaczona nie jest możliwa do wyrzucenia`)
    }else{

    var reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send("Podaj powód wyrzucenia!")

    try{
        do_kicka.kick()
        message.channel.send(`**Wyrzucono!**\nModerator: \`${message.author.tag}\`\nWyrzucony: \`${do_kicka.user.tag}\`\nPowód:\n\`\`\`\n${reason}\n\`\`\``)
        do_kicka.send(`Zostałeś wyrzucony z serwera **\`${message.guild.name}\`**, przez **\`${message.author.tag}\`**\n\nPowód:\n\`\`\`\n${reason}\n\`\`\``)
        return;
        }catch(e){
            return message.reply("Błąd podczas nadawania bana, skontaktuj się z administracją bota :|")
        }
    }
}



if(cmd === `serwer` || cmd === "server" || cmd === "serwer-info"){

    var owner = message.guild.ownerID
    var sz = message.guild.members.cache.find(u => u.id === owner);
    if(!sz){
      sz = "Brak danych";
    }  
      var boty = message.guild.members.cache.filter(member => member.user.bot).size;
      var serwus = message.guild.createdAt
      var serwerEmbed = new Discord.MessageEmbed()       
          .setColor("cyan")
          .setThumbnail(message.guild.iconURL())
          .setAuthor(`Informacje o Serwerze`, client.user.displayAvatarURL())
          .addField(` **Nazwa:**`, `\`${message.guild.name}\``)
          .addField(` **ID:**`, `\`${message.guild.id}\``)
          .addField(` **Właściciel:**`, `${sz}`, true)
          .addField(` **Użytkownicy:**`, `\`${message.guild.memberCount}\``, true)
          .addField(` **Boty:**`, `\`${boty}\``, true)
          .addField(` **Online:**`, `\`${message.guild.members.cache.filter(member => member.presence.status === "online").size}\``, true)
          .addField(` **Zajętych:**`, `\`${message.guild.members.cache.filter(member => member.presence.status === "dnd").size}\``, true)
          .addField(` **Offline:**`, `\`${message.guild.members.cache.filter(member => member.presence.status === "offline").size}\``, true)
          .addField(` **Role:**`, `\`${message.guild.roles.cache.size}\``, true)
          .addField(` **Najwyższa:**`, `${message.guild.roles.highest}`, true)
          .addField(` **Emoji:**`, `\`${message.guild.emojis.cache.size}\``, true)
          .addField(` **Utworzono:**`, `\`${
    
    serwus.getDate().toString().padStart(2, '0')}.${
    (serwus.getMonth()+1).toString().padStart(2, '0')}.${
    serwus.getFullYear().toString().padStart(4, '0')}\` **| Godzina:** \`${
    serwus.getHours().toString().padStart(2, '0')}:${
    serwus.getMinutes().toString().padStart(2, '0')}:${
      serwus.getSeconds().toString().padStart(2, '0')}\` `)
      .setFooter(`Trusty`, client.user.displayAvatarURL());
         message.channel.send(serwerEmbed);
}



if(cmd === "user" || cmd === "user-info" || cmd === "info"){

  var stat = {
    online: `Online`,
    dnd: `Nie przeszkadzać`,
    idle: `Zajęty`,
    offline: `Offline`
}


let mentioneduserinfo = message.mentions.members.first() //oznaczony
if (!mentioneduserinfo) {
    var dt = message.author.createdAt //autor stworzył
    var dol = message.member.joinedAt //autor doiłączył

    let uEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setThumbnail(message.author.displayAvatarURL())
        .addField(`**Nazwa:**`, `\`${message.author.username}\``, true)
        .addField(`**Tag:**`, `\`#${message.author.discriminator}\``, true)
        .addField(`**ID:**`, `\`${message.author.id}\``)
        .addField(`**Status:**`, `${stat[message.author.presence.status]}`)
        .addField(`**Utworzono:**`, `\`${


dt.getDate().toString().padStart(2, '0')}.${
(dt.getMonth()+1).toString().padStart(2, '0')}.${
dt.getFullYear().toString().padStart(4, '0')}\` **| Godzina:** \`${
dt.getHours().toString().padStart(2, '0')}:${
dt.getMinutes().toString().padStart(2, '0')}:${
dt.getSeconds().toString().padStart(2, '0')}\``)




    .addField(`**Dołączył:**`, `\`${
dol.getDate().toString().padStart(2, '0')}.${
(dol.getMonth()+1).toString().padStart(2, '0')}.${
dol.getFullYear().toString().padStart(4, '0')}\` **| Godzina:** \`${
dol.getHours().toString().padStart(2, '0')}:${
dol.getMinutes().toString().padStart(2, '0')}:${
  dol.getSeconds().toString().padStart(2, '0')}\``)




    .addField(`**Gra w: **`, `\`${message.author.presence.activities.join(" \`•\` ")}\`` || `\`W nic nie gra\``)
        .setFooter(`Ruby`, client.user.displayAvatarURL());
    message.channel.send(uEmbed);


    return


} else {
    var lod = mentioneduserinfo.joinedAt
    var lud = mentioneduserinfo.user.createdAt

    let okims = new Discord.MessageEmbed()
        .setColor("#000000")
        .setThumbnail(mentioneduserinfo.user.displayAvatarURL())
        .addField(`**Nazwa:**`, `\`${mentioneduserinfo.user.tag}\``, true)
        .addField(`**Tag:**`, `\`#${mentioneduserinfo.user.discriminator}\``, true)
        .addField(`**ID:**`, `\`${mentioneduserinfo.id}\``)
        .addField(`**Status:**`, `${stat[mentioneduserinfo.presence.status]}`)
        .addField(`**Utworzono:**`, `\`${
            lud.getDate().toString().padStart(2, '0')}.${
           (lud.getMonth()+1).toString().padStart(2, '0')}.${
            lud.getFullYear().toString().padStart(4, '0')}\` **| Godzina:** \`${
            lud.getHours().toString().padStart(2, '0')}:${
            lud.getMinutes().toString().padStart(2, '0')}:${
            lud.getSeconds().toString().padStart(2, '0')}\``) 
        .addField(`**Dołączył:**`, `\`${
            lod.getDate().toString().padStart(2, '0')}.${
            (lod.getMonth()+1).toString().padStart(2, '0')}.${
            lod.getFullYear().toString().padStart(4, '0')}\` **| Godzina:** \`${
            lod.getHours().toString().padStart(2, '0')}:${
            lod.getMinutes().toString().padStart(2, '0')}:${
            lod.getSeconds().toString().padStart(2, '0')}\``)
        .addField(`**Gra w: **`, `${mentioneduserinfo.presence.activities.join(" \`•\` ")}` || `\`W nic nie gra\``, true)
        .setFooter(`Ruby`, client.user.displayAvatarURL());

         message.channel.send(okims);
         return
}
}



if(cmd === "clear" || cmd === "purge" || cmd === "c"){
    if(!message.member.hasPermission(`MANAGE_CHANNELS`)){
        return message.channel.send(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`MANAGE_CHANNELS\``);
    }
    var ile_wiad = parseInt(args[0])
    if(!ile_wiad){
        return message.channel.send(`Podaj ilę wiadomości mam usunąć \`max. 200\`\n*Przykład:* \`t^clear 20\``);
    }
    if(ile_wiad > 100){
        return message.channel.send("Nie można usunąć więcej niż 100 wiadomości na raz");
    }
    try{
    message.channel.bulkDelete(ile_wiad);
    message.reply(`Wiadomości zostały usunięte!`);
    return;
    }catch(e){
        return message.channel.send("Błąd...")
    }
}






   
});


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     LOGOWANIE  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

client.on('ready', () => {
    console.log(`${client.user.tag}`.yellow + ` • ${client.user.id}`.cyan +  ` - Online • ${client.ws.ping} ms`.green)
});

client.on('guildMemberAdd', async member => {
    
});
client.on('guildCreate', async guild => {
    webhook_logs_join_remove.send(new Discord.MessageEmbed().setColor("#66ff00").setDescription(`Bot dołączył na serwer!\n\nNazwa: ${guild.name}\nID: ${guild.id}\n\nWłaściciel: ${guild.owner.user}\nID: ${guild.ownerID}\n\nUżytkownicy: + ${guild.memberCount}`))
});
client.on(`guildDelete`, async guild_leave => {
    webhook_logs_join_remove.send(new Discord.MessageEmbed().setColor("#ff0000").setDescription(`Bot opuścił serwer!\n\nNazwa: ${guild_leave.name}\nID: ${guild.id}\n\nWłaściciel: ${guild_leave.owner.user}\nID: ${guild_leave.ownerID}\n\nUżytkownicy: -${guild_leave.memberCount}`))
})
client.on('guildBanAdd', async (guild, user) => {
     
});
client.on('message', async (message_check) => {
    
});
client.login(config.token)

