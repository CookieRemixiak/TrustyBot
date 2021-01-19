const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config  = require("./config.json");
const colors = require("colors");
const prefix = config.prefix;
const sql = require("mysql");
const { inspect } = require('util');
const express = require("express");
const app = express();
const errorembed = new Discord.MessageEmbed().setColor("#cb6a6b").setTitle(`<a:emoji_12:794157906990727170> Error`)




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& WENHOOKI  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const webohook_admi = new Discord.WebhookClient("793206793454878732", "pENZKXsUTYu65zcZRvqm495-4aKk9E3QTe0FgMqKa4S8FdYl_V9vQMz2DWRCxpXnxXMq");
const webhook_logs_join_remove = new Discord.WebhookClient("793448642546630677", "romZb8pNbA2t4v7IoLZk5IgVgDIZDDapsMRQ-wE_vzW8Oe0EvsCn2BmQisKSc5i46isN");

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& EVENT ON MESSAGE &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




const con = sql.createConnection({
    host: "51.83.136.0",
    user: "db_64290",
    password: "VBRwEUx85TJq",
    database: "db_64290"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("CONNECTED TO DATABASE MYSQL".green);
});





client.on('message', async message => {
if(message.author.bot) return
if(message.content == prefix) return

if(message.author.bot) return;
if(message.content.indexOf(prefix) !== 0) return;
//if(message.author.id != "456343371720425473" || message.author.id != "647194026935582761" || message.author.id != "395471691892916224") return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& KOMENDY &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



if(message.mentions.has(client.user) && !message.mentions.everyone && !message.content.length > 1){
    return message.channel.send("Hej! Odpowiedziałem w ciągu: " + client.ws.ping + "\n" + "Moje komendy [t^pomoc](https://trustybot.xyz/join), zaproś mnie [t^invite bot](https://trustybot.xyz/bot)")
}


if(cmd == 'ping' || cmd == `pong`) {
            return message.channel.send(":ping_pong: Pong: " + client.ws.ping + "ms");  
}


if(cmd === `invite` || cmd == `zaproś` || cmd == `zapros`){
var embed_zapro = new Discord.MessageEmbed()
.setColor("#00ff99")
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




if(cmd === `pomoc` || cmd === `help` || cmd === `h` || cmd === `p`){
    var embed_pomoc = new Discord.MessageEmbed()
    .setAuthor(`Komendy`, client.user.displayAvatarURL())
    .setColor("#00ff99")
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Trusty`)
    var opcja1 = (args[0])
    if(!opcja1){
        return message.channel.send(embed_pomoc.setDescription(`\n> **Podaj kategorię** \nDostępne:`).addField('⚙ | Support', 'Komendy dotyczące bota!', false).addField('🛠️ | Ustawienia', 'Tutaj skonfigurujesz kanały i wiadomości!', false).addField('🔨 | Mod', 'Tutaj znajdziesz komendy moderacyjne!', false).addField('ℹ️ | Info', 'Przydatne do sprawdzania kont! (informacje o bocie, serwerze, użytkowników)', false))
    }
    if(opcja1 === "support"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Support\`\`\`\n\n\`▪\` invite\n\`▪\` report\n\n\`\`\` \`\`\``, false))
    }
    if(opcja1 === "ustawienia"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Konfiguracyjne\`\`\`\n\n\`▪\` ustaw\n\`▪\` config\n\n\`\`\` \`\`\``, false))
    }
    if(opcja1 === "info"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Informacyjne\`\`\`\n\n\`▪\` user\n\`▪\` serwer\n\`▪\` bot\n\`▪\` regulamin\n\n\`\`\` \`\`\``, false))
    }
    if(opcja1 === "mod"){
        return message.channel.send(embed_pomoc.setDescription(`\`\`\`Komendy Moderacyjne\`\`\`\n\n\`▪\` ban\n\`▪\` tempban\n\`▪\` unban\n\`▪\` kick\n\`▪\` mute\n\`▪\` tempmute\n\`▪\` unmute\n\`▪\` warn\n\`▪\` unwarn\n\`▪\` warns\n\`▪\` delete-warnings\n\`▪\` lock\n\`▪\` un-lock\n\`▪\` note\n\`▪\` un-note\n\`▪\` clear\n\n\`\`\` \`\`\``, false))
    }
}



if(cmd === `helpop`){

    var embed_report = new Discord.MessageEmbed()

    if(message.guild.ownerID !== message.author.id){
        return message.channel.send(errorembed.setDescription(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`OWNER\``).setFooter(`Trusty ▪ Błąd`).setColor(`#00ffff`))
    }

    var oznaczona_osoba = message.mentions.members.first();
    if(!oznaczona_osoba){
        return message.channel.send(errorembed.setDescription(`:x: **Oznacz osobę!**\nOznacz osobę, którą chcesz zgłosić\n\nPrzykład: \`t^report @Remixiak powód\``))
    }
    var powod = args.slice(1).join(" ")
    if(!powod){
        return message.channel.send(errorembed.setDescription(`:x: **Podaj powód zgłoszenia**`))
    }

    message.channel.send(`${oznaczona_osoba.user} został zgłoszony do administracji bota, dziękujemy za zgłoszenie!`);

    return webohook_admi.send(new Discord.MessageEmbed().setColor(`yellow`).setDescription(`**Zgłoszenie**\n\n\`\`\`\nZgłosił: ${message.author.tag} | ${message.author.id}\nZgłoszony: ${oznaczona_osoba.user.tag} | ${oznaczona_osoba.id}\n\`\`\`\n*Powód:*\n\`\`\`${powod}\n\`\`\``))

}

if(cmd === "eval"){
    if(message.author.id != config.devs){
        return;
    }

    var evaledp = args.slice(0).join(" ");
    if(!evaledp){
        return message.channel.send(errorembed.setDescription(`NAPISZ CO MAM ZROBIĆ TYPIE`))
    }
    try {
      var evaled = eval(evaledp);
      message.channel.send("**Wprowadzono**\n\n" + "\`\`\`js" + "\n" + evaledp + "\`\`\`" + "\n\n" + "**Wykonano**" + "\n\n" + "\`\`\`yaml" + "\n" + inspect(evaled) + "\`\`\`");
    }
    catch (error) {
      console.error(error);
      message.reply('Wystąpił błąd podczas wykonywania operacji ;c');
    }

}



if(cmd === `ban` || cmd === `b`){

    if(!message.member.hasPermission(`BAN_MEMBERS`)){
        return message.channel.send(errorembed.setDescription(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`BAN_MEMBERS\``))
    }

    var do_bana = message.mentions.members.first() 

    if(!do_bana){
        return message.channel.send(errorembed.setDescription(`:x: **Brak oznaczenia**\nOznacz osobę, którą chcesz zbanować\nPrzykład: \`t^ban @Toshinori\``))
    }

    if(!do_bana.bannable || do_bana.id === message.author.id){
        return message.channel.send(errorembed.setDescription(`:x: **Nie można wykonać komendy!**\nOsoba, która została oznaczona nie jest możliwa do zbanowania`))
    }else{

    var powodp = args.slice(1).join(" ");

    if(!powodp) return message.channel.send(errorembed.setDescription("Podaj powód bana!"))

        try{
        do_bana.ban()    
        message.channel.send(`**Zbanowano!**\nModerator: \`${message.author.tag}\`\nZbanowany: \`${do_bana.user.tag}\`\nPowód:\n\`\`\`\n${powodp}\n\`\`\``)
        do_bana.send(`Zostałeś zbanowany na serwerze **\`${message.guild.name}\`**, przez **\`${message.author.tag}\`**\n\nPowód:\n\`\`\`\n${powodp}\n\`\`\``)
        return;
        }catch(e){
            return message.channel.send(errorembed.setDescription("Błąd podczas nadawania bana, skontaktuj się z administracją bota :|"))
        }
    }
}
    

if(cmd === `kick` || cmd === `k`){
    if(!message.member.hasPermission(`KICK_MEMBERS`)){
        return message.channel.send(errorembed.setDescription(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`KICK_MEMBERS\``))
    }

    var do_kicka = message.mentions.members.first();
    if(!do_kicka){
        return message.channel.send(errorembed.setDescription(`:x: **Brak oznaczenia**\nOznacz osobę, którą chcesz wyrzucić\nPrzykład: \`t^kick @Toshinori\``))
    }

    if(!do_kicka.kickable || do_kicka.id === message.author.id){
        return message.channel.send(errorembed.setDescription(`:x: **Nie można wykonać komendy!**\nOsoba, która została oznaczona nie jest możliwa do wyrzucenia`))
    }else{

    var reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send(errorembed.setDescription("Podaj powód wyrzucenia!"))
err
    try{
        do_kicka.kick()
        message.channel.send(`**Wyrzucono!**\nModerator: \`${message.author.tag}\`\nWyrzucony: \`${do_kicka.user.tag}\`\nPowód:\n\`\`\`\n${reason}\n\`\`\``)
        do_kicka.send(`Zostałeś wyrzucony z serwera **\`${message.guild.name}\`**, przez **\`${message.author.tag}\`**\n\nPowód:\n\`\`\`\n${reason}\n\`\`\``)
        return;
        }catch(e){
            message.channel.send(errorembed.setDescription("Błąd podczas nadawania bana, skontaktuj się z administracją bota :|"))
            console.log(e)
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
      .setColor("#00ff99")
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
         return;
}



if(cmd === "user" || cmd === "user-info" || cmd === "info"){

  var stat = {
    online: `Online`,
    dnd: `Nie przeszkadzać`,
    idle: `Zajęty`,
    offline: `Offline`
}

var status = {
    online: `<:ONLINE:793462116811800596> `,
    dnd: `<:DND:793462116190781440>`,
    idle: `<:IDLE:793462116421599282>`,
    offline: `<:OFFLINE:793462116480450570>`
}


let mentioneduserinfo = message.mentions.members.first() //oznaczony
if (!mentioneduserinfo) {
    var dt = message.author.createdAt //autor stworzył
    var dol = message.member.joinedAt //autor doiłączył

    let uEmbed = new Discord.MessageEmbed()
         .setColor("#00ff99")
        .setThumbnail(message.author.displayAvatarURL())
        .addField(`**Nazwa:**`, `\`${message.author.username}\``, true)
        .addField(`**Tag:**`, `\`#${message.author.discriminator}\``, true)
        .addField(`**ID:**`, `\`${message.author.id}\``)
        .addField(`**Status:**`, `${status[message.author.presence.status]} ${stat[message.author.presence.status]}`)
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
        .setFooter(`Trusty`, client.user.displayAvatarURL());
    message.channel.send(uEmbed);
    return;
} else {
    var lod = mentioneduserinfo.joinedAt
    var lud = mentioneduserinfo.user.createdAt

    let okims = new Discord.MessageEmbed()
        .setColor("#00ff99")
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
        .addField(`**Gra w: **`, `\`${mentioneduserinfo.presence.activities.join(" \`•\` ")}\`` || `\`W nic nie gra\``, true)
        .setFooter(`Trusty`, client.user.displayAvatarURL());

         message.channel.send(okims);
         return
}
}


if(cmd === "invites"){

    var user = message.mentions.members.first();
    if(!user){
        user = message.author; 
    }
    message.guild.fetchInvites().then(invites =>
        {
            const userInvites = invites.array().filter(o => o.inviter.id === user.id);
            var userInviteCount = 0;
            for(var i=0; i < userInvites.length; i++)
            {
                var invite = userInvites[i];
                userInviteCount += invite['uses'];
            }
                 return message.channel.send(`<:addmember:793842830346158150> **Konto ${user} posiada \`${userInviteCount}\` zaproszeń!**`);
        }
    )
}




if(cmd === "clear" || cmd === "purge" || cmd === "c"){
    if(!message.member.hasPermission(`MANAGE_CHANNELS`)){
        return message.channel.send(errorembed.setDescription(`:x: **Brak permisji!**\n*Nie posiadasz permisji* \`MANAGE_CHANNELS\``));
    }
    var ile_wiad = parseInt(args[0]) 
    if(!ile_wiad){
        return message.channel.send(errorembed.setDescription(`Podaj ilę wiadomości mam usunąć \`max. 200\`\n*Przykład:* \`t^clear 20\``));
    }
    if(ile_wiad > 100){
        return message.channel.send(errorembed.setDescription("Nie można usunąć więcej niż 100 wiadomości na raz"));
    }

    try{
    const { size } = await message.channel.bulkDelete(ile_wiad);
    message.reply(`Usunięto ${size} wiadomości!`);
    return;
    }catch(e){
        message.channel.send(errorembed)
        console.log(e)
    }
}



if(cmd === "chatguard" || cmd === "cg" || cmd === "chat-guard"){

}


if(cmd === "defcon" || cmd === "def-con"){
if(!message.member.hasPermission(`ADMINISTRATOR`)){
    return message.channel.send(errorembed.setDescription("Nie posiadasz permisji \`ADMINISTRATOR\`"))
}
var lvl = (args[0])
if(!lvl){
    return message.channel.send(errorembed.setDescription("Podaj poziom weryfikacji serwera jaki chcesz ustawić!\n\`BRAK\`, \`SŁABY\`, \`ŚREDNI\`, \`WYSOKI\`, \`ULTRA\`"))
}
var set;

if(lvl === `BRAK`){
set = `NONE`;
}else if (lvl === `SŁABY`){
set = `LOW`;
}else if (lvl === `ŚREDNI`){
 set = `MEDIUM`;
}else if (lvl === `WYSOKI`){
set = `HIGH`;
}else if (lvl === `ULTRA`){
set = `VERY_HIGH`;
}

if(message.guild.verificationLevel === set){
    return message.channel.send(errorembed.setDescription("Nie możesz ustawić tego samego poziomu weryfikacji, ustaw inny!"))
}

try{
    message.guild.setVerificationLevel(`${set}`);
    message.reply(`Pomyślnie ustawiono poziom weryfikacji na **${lvl}** **(** \`${set}\` **)**`)
    return;
}catch(e){
    message.channel.send(errorembed.setDescription(`Nie mogę wykonać tej czynności, mam za małe permisje lub ten poziom nie jest możliwy do włączenia dla serwera o tej kategorii`))
    return;
}
}


if(cmd === "test"){
    var str = `:tada: | **Witaj {user-mention} na serwerze {guild-name}**\n\n*Jesteś naszym {guild-members} użytkownikiem*\n\n{user-tag}\n{user-create}\n{user-id}\n{user-discrim}\n{guild-id}\n{guild-owner}`;

    const repl = str.replace(/{user-mention}/gi, `${message.author}`).replace(/{guild-name}/gi, `${message.guild.name}`).replace(/{guild-members}/gi, `${message.guild.memberCount}`).replace(/{user-tag}/gi, `${message.author.tag}`).replace(/{user-create}/gi, `${message.author.createdTimestamp}`).replace(/{user-id}/gi, `${message.author.id}`).replace(/{user-discrim}/gi, `#${message.author.discriminator}`).replace(/{guild-id}/gi, `${message.guild.id}`).replace(/{guild-owner}/gi, `${message.guild.owner}`)
    
    return message.channel.send("Wejście\n\n" + "\`\`\`yaml\n" + str + "\`\`\`\n" + "\n\n" + "Wyjście" + "\n\n" + repl);
}



if(cmd === "stats" || cmd === "statystyki" || cmd === "ustawienia"){
    var invite;
    var spam;
    var alt;
    var captcha;
    var emoji;
    var logi;
    var alert;
    var cg;
    var reps;
    con.query(`SELECT anti_invite FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
        if(err) return message.reply("Błąd w zapytaniu MYSQL")       
        if(!rows.length){
        invite = "<a:no:793842558572822529>"
        }else{
            if(rows[0].anti_invite === null){
                invite = "<a:no:793842558572822529>"
            }else{
                invite =  " <a:yes:793842528864174091>"
            }
        }
        con.query(`SELECT anti_spam FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
            if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))        
            if(!rows.length){
                spam = "<a:no:793842558572822529>"
                }else{
                    if(rows[0].anti_spam === null){
                        spam = "<a:no:793842558572822529>"
                    }else{
                        spam =  " <a:yes:793842528864174091>"
                    }
                }
            con.query(`SELECT anti_alt FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))       
                if(!rows.length){
                    alt = "<a:no:793842558572822529>"
                    }else{
                        if(rows[0].anti_alt === null){
                            alt = "<a:no:793842558572822529>"
                        }else{
                            alt =  " <a:yes:793842528864174091>"
                        }
                    }
                con.query(`SELECT captcha FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                    if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))        
                    if(!rows.length){
                        captcha = "<a:no:793842558572822529>"
                        }else{
                            if(rows[0].captcha === null){
                                captcha = "<a:no:793842558572822529>"
                            }else{
                                captcha =  " <a:yes:793842528864174091>"
                            }
                        }
                    con.query(`SELECT emoji FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                        if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))        
                        if(!rows.length){
                            emoji = "<a:no:793842558572822529>"
                            }else{
                                if(rows[0].emoji === null){
                                    emoji = "<a:no:793842558572822529>"
                                }else{
                                    emoji =  " <a:yes:793842528864174091>"
                                }
                            }
                        con.query(`SELECT logi FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                            if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))        
                            if(!rows.length){
                                logi = "<a:no:793842558572822529>"
                                }else{
                                    if(rows[0].logi === null){
                                        logi = "<a:no:793842558572822529>"
                                    }else{
                                        logi =  " <a:yes:793842528864174091>"
                                    }
                                }
                            con.query(`SELECT alert FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                                if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))     
                                if(!rows.length){
                                    alert = "<a:no:793842558572822529>"
                                    }else{
                                        if(rows[0].alert === null){
                                            alert = "<a:no:793842558572822529>"
                                        }else{
                                            alert =  " <a:yes:793842528864174091>"
                                        }
                                    }
                                con.query(`SELECT chat_guard FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                                    if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))        
                                    if(!rows.length){
                                        cg = "<a:no:793842558572822529>"
                                        }else{
                                            if(rows[0].chat_guard === null){
                                                cg = "<a:no:793842558572822529>"
                                            }else{
                                                cg =  " <a:yes:793842528864174091>"
                                            }
                                        }
                                    con.query(`SELECT reports FROM config WHERE id_serwera="${message.guild.id}"`, function(err, rows){
                                        if(err) return message.reply(errorembed.setDescription("Błąd w zapytaniu MYSQL"))        
                                        if(!rows.length){
                                            reps = "<a:no:793842558572822529>"
                                            }else{
                                                if(rows[0].reports === null){
                                                    reps = "<a:no:793842558572822529>"
                                                }else{
                                                    reps =  " <a:yes:793842528864174091>"
                                                }
                                            }
                                        var embed_s = new Discord.MessageEmbed()
    .setColor("#00ff99")
    .setAuthor("Statystyki Zabezpieczeń", client.user.displayAvatarURL({dynamic:true}))
    .addField(`AntyInvite`, invite, true)
    .addField(`AntySpam`, spam, true)
    .addField(`AntyAlt`, alt, true)
    .addField(`ReCaptcha`, captcha, true)
    .addField(`Weryfikacja Emoji`, emoji, true)
    .addField(`Logi`, logi, true)
    .addField(`Powiadomienia`, alert, true)
    .addField(`ChatGuard`, cg, true)
    .addField(`Zgłoszenia`, reps, true)
    return message.channel.send(embed_s)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& USTAWIENIAAAAAAAAAAAAAAAAAAA &&&&&&&&&&&&&&&&&&&






if(cmd === "ustaw"){
    if(!message.member.hasPermission(`ADMINISTRATOR`)){
        return message.channel.send(errorembed.setDescription("Nie masz permisji \`ADMINISTRATOR\`"))
    }
    var option = (args[0])
    if(!option){
        return message.channel.send(errorembed.setDescription("**Dostępne opcje**\n\nreport-channel"))
    }
    if(option === "report-channel"){

        var kanal = message.mentions.channels.first();
        if(!kanal){
            return message.channel.send(errorembed.setDescription("Oznacz kanał do zgłoszeń"))
        }

        con.query(`SELECT reports FROM config WHERE config.reports="1" AND config.id_serwera="${message.guild.id}"`, function(err, row){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            if(!row.length){
             return message.reply("Najpierw włącz kanał do zgłoszeń komendą \`t^config reports on\`") 
            }else{
        con.query(`SELECT report_channel FROM ustawienia WHERE id_serwera="${message.guild.id}"`, function(err, res){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            if(!res.length){
        con.query(`INSERT INTO ustawienia(id_serwera,report_channel) VALUES("${message.guild.id}", "${kanal.id}")`, function(err){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            return message.channel.send("Kanał zgłoszeń został ustawiony na " + kanal)
        }) 
               }else{
        con.query(`UPDATE ustawienia SET report_channel="${kanal.id}" WHERE id_serwera="${message.guild.id}"`, function(err){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            return message.channel.send("Kanał zgłoszeń został ustawiony na " + kanal)
})
}
})
}
})
    //KONIEC report channel
    }
    if(option === "logi"){
        if(!message.member.hasPermission(`ADMINISTRATOR`)){
            return message.channel.send(errorembed.setDescription("Nie masz permisji \`ADMINISTRATOR\`"))
        }
        var kan = message.mentions.channels.first();
        if(!kanal){
            return message.channel.send(errorembed.setDescription("Oznacz kanał do logów"))
        }
        
        con.query(`SELECT logi FROM config WHERE config.logi="1" AND config.id_serwera="${message.guild.id}"`, function(err, row){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            if(!row.length){
             return message.reply("Najpierw włącz kanał do logów komendą \`t^config logi on\`") 
            }else{
        con.query(`SELECT log_channel FROM ustawienia WHERE id_serwera="${message.guild.id}"`, function(err, res){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            if(!res.length){
        con.query(`INSERT INTO ustawienia(id_serwera,log_channel) VALUES("${message.guild.id}", "${kan.id}")`, function(err){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            return message.channel.send("Kanał zgłoszeń został ustawiony na " + kan)
        }) 
               }else{
        con.query(`UPDATE ustawienia SET log_channel="${kan.id}" WHERE id_serwera="${message.guild.id}"`, function(err){
            if(err) return message.reply("Błąd w zapytaniu MYSQL")
            return message.channel.send("Kanał logów został ustawiony na " + kan)
})
}
})
}
})
    }


//KONIEC t^ustaw
}



if(cmd === "config" || cmd === "konfiguracja"){
    if(!message.member.hasPermission(`ADMINISTRATOR`)){
        return message.channel.send(errorembed.setDescription("Nie masz permisji \`ADMINISTRATOR\`"))
    }

    var opt = (args[0])
    if(!opt){
        return message.channel.send(errorembed.setDescription("**Dostępne kategorie komendy**\n\nlogi\nzgłoszenia\nchatguard\nantyinvite\nantyspam\nantyalt\nrecaptcha\npowiadomienia"))
    }
    
    if(opt === "logi"){

        var onf = (args[1])

        if(!onf){
            return message.channel.send(errorembed.setDescription("**Dostępne Opcje** \`on / off\`"))
        }
        if(onf === "on"){
            con.query(`SELECT logi FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, logi) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Logi aktywowane**\nUstaw kanał logów \`t^ustaw log-channel <#Kanał>\`")
                    })
                }else{
                    return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **Logi są już aktywowane**"))
                }
            })
        }else if(onf === "off"){
            con.query(`SELECT logi FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send("<a:yes:793842528864174091> **Logi są już dezaktywowane**")
                   
                }else{
                  
                    con.query(`UPDATE config SET logi="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Logi dezaktywowane**\n")
                    })

        
                }
            })
        }

    }     
    if(opt === "zgłoszenia" || opt === "zgloszenia"){

        var onf1 = (args[1])

        if(!onf1){
            return message.channel.send(errorembed.setDescription("**Dostępne Opcje** \`on / off\`"))
        }
        if(onf1 === "on"){
            con.query(`SELECT reports FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, reports) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Zgłoszenia aktywowane**\nUstaw kanał zgłoszeń \`t^ustaw log-channel <#Kanał>\`")
                    })
                }else{
                    return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **Zgłoszenia są już aktywowane**"))
                }
            })
        }else if(onf1 === "off"){
            con.query(`SELECT reports FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **Zgłoszenia są już dezaktywowane**"))
                   
                }else{
                  
                    con.query(`UPDATE config SET reports="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Zgłoszenia dezaktywowane**\n")
                    })

        
                }
            })
        }

    }  
    if(opt === "chat-guard" || opt === "chatguard"){

        var onf12 = (args[1])

        if(!onf12){
            return message.channel.send(errorembed.setDescription("**Dostępne Opcje** \`on / off\`"))
        }
        if(onf12 === "on"){
            con.query(`SELECT chat_guard FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, chat_guard) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **ChatGuard aktywowany**\n\`Twój serwer jest już chroniony przed toksycznymi osobami\`")
                    })
                }else{
                    return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **ChatGuard jest już aktywowany**"))
                }
            })
        }else if(onf12 === "off"){
            con.query(`SELECT chat_guard FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **ChatGuard jest już dezaktywowany**"))
                   
                }else{
                  
                    con.query(`UPDATE config SET chat_guard="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **ChatGuard dezaktywowany**\n")
                    })

        
                }
            })
        }

    } 
    if(opt === "alerts" || opt === "powiadomienia"){

        var onf12o = (args[1])

        if(!onf12o){
            return message.channel.send(errorembed.setDescription("**Dostępne Opcje** \`on / off\`"))
        }
        if(onf12o === "on"){
            con.query(`SELECT alerts FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, alerts) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Powiadomienia aktywowane**\nUstaw kanał zgłoszeń komendą \`t^ustaw alerts-channel <#Kanał>\`")
                    })
                }else{
                    return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **Powiadomienia są już aktywowane**"))
                }
            })
        }else if(onf12o === "off"){
            con.query(`SELECT alerts FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **Powiadomienia są już dezaktywowane**"))
                   
                }else{
                  
                    con.query(`UPDATE config SET alerts="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **Powiadomienia są już dezaktywowane**\n"))
                    })

        
                }
            })
        }

    }   
    if(opt === "anty-invite" || opt === "anti-invite"){

        var onf12ioo = (args[1])

        if(!onf12ioo){
            return message.channel.send("**Dostępne Opcje** \`on / off\`")
        }
        if(onf12ioo === "on"){
            con.query(`SELECT invite FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, invite) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **AntiInvite aktywowany**\nUstaw karę za wysyłanie zaproszeń \`t^ustaw invite-punichment <ban/kick/mute/warn>\`")
                    })
                }else{
                    return message.channel.send(errorembed.setDescription("<a:yes:793842528864174091> **AntiInvite jest już aktywowany**"))
                }
            })
        }else if(onf12ioo === "off"){
            con.query(`SELECT invite FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send("<a:yes:793842528864174091> **AntiInvite jest już dezaktywowany**")
                   
                }else{
                  
                    con.query(`UPDATE config SET invite="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **AntiInvite dezaktywowany**\n")
                    })

        
                }
            })
        }

    }
    if(opt === "recaptcha" || opt === "captcha"){

        var duppa = (args[1])

        if(!duppa){
            return message.channel.send("**Dostępne Opcje** \`on / off\`")
        }
        if(duppa === "on"){
            con.query(`SELECT captcha FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, captcha) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **ReCaptcha aktywowana**\n\`Każdy kto wejdzie na serwer zostanie zweryfikowany\`")
                    })
                }else{
                    return message.channel.send("<a:yes:793842528864174091> **ReCaptcha jest już aktywowana**")
                }
            })
        }else if(duppa === "off"){
            con.query(`SELECT captcha FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send("<a:yes:793842528864174091> **ReCaptcha jest już dezaktywowana**")
                   
                }else{
                  
                    con.query(`UPDATE config SET captcha="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **ReCaptcha dezaktywowana**\n")
                    })

        
                }
            })
        }

    }    
    if(opt === "anty-spam" || opt === "anti-spam"){

        var duppap = (args[1])

        if(!duppa){
            return message.channel.send("**Dostępne Opcje** \`on / off\`")
        }
        if(duppap === "on"){
            con.query(`SELECT anti_spam FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, anti_spam) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **AntiSpam aktywowany**\nUstaw karę za spam \`t^ustaw spam-punishment <ban/kick/mute/warn>\`")
                    })
                }else{
                    return message.channel.send("<a:yes:793842528864174091> **AntiSpam jest już aktywowany**")
                }
            })
        }else if(duppap === "off"){
            con.query(`SELECT anti_spam FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send("<a:yes:793842528864174091> **AntiSpam jest już dezaktywowany**")
                   
                }else{
                  
                    con.query(`UPDATE config SET anti_spam="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **AntiSpam dezaktywowany**\n")
                    })

        
                }
            })
        }

    }       
    if(opt === "anty-alt" || opt === "anti-alt"){

        var duppaj = (args[1])

        if(!duppaj){
            return message.channel.send("**Dostępne Opcje** \`on / off\`")
        }
        if(duppaj === "on"){
            con.query(`SELECT anti_alt FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, anti_alt) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **AntiAlt aktywowany**\nUstaw minimalny wiek kont \`t^ustaw alt-age <ILOŚĆ DNI>\`")
                    })
                }else{
                    return message.channel.send("<a:yes:793842528864174091> **AntiAlt jest już aktywowany**")
                }
            })
        }else if(duppaj === "off"){
            con.query(`SELECT anti_alt FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send("<a:yes:793842528864174091> **AntiAlt jest już dezaktywowany**")
                   
                }else{
                  
                    con.query(`UPDATE config SET anti_alt="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **AntiAlt dezaktywowany**\n")
                    })

        
                }
            })
        }

    } 
    if(opt === "emoji" || opt === "weryfikacja-emoji"){

        var dujjppaj = (args[1])

        if(!dujjppaj){
            return message.channel.send("**Dostępne Opcje** \`on / off\`")
        }
        if(dujjppaj === "on"){
            con.query(`SELECT emoji FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){
                    con.query(`INSERT INTO config(id_serwera, emoji) VALUES("${message.guild.id}", "1")`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Weryfikacja emoji aktywowana**\n\`Każdy kto wejdzie na serwer zostanie zweryfikowany\`")
                    })
                }else{
                    return message.channel.send("<a:yes:793842528864174091> **Weryfikacja emojijest już aktywowana**")
                }
            })
        }else if(dujjppaj === "off"){
            con.query(`SELECT emoji FROM config WHERE id_serwera="${message.guild.id}"`, function(err, row){
                if(err) throw err;
                if(!row.length){

                      return message.channel.send("<a:yes:793842528864174091> **Weryfikacja emoji jest już dezaktywowana**")
                   
                }else{
                  
                    con.query(`UPDATE config SET emoji="0" WHERE id_serwera="${message.guild.id}"`, function(err){
                        if(err) throw err;
                        return message.channel.send("<a:yes:793842528864174091> **Weryfikacja emoji dezaktywowana**\n")
                    })

        
                }
            })
        }

    } 
}


});


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  LOGOWANIE  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

client.on('ready', () => {
    console.log(`${client.user.tag}`.yellow + ` • ${client.user.id}`.cyan +  ` - Online • ${client.ws.ping} ms`.green)
    client.user.setActivity("@Trusty | t^pomoc");
});

module.exports = {
    client: client,
    con: con,
   config: config,
    app: app,
    colors: colors
}

require('./web')

client.on('guildMemberAdd', async member => {
    
});
client.on('guildCreate', async guild => {
    webhook_logs_join_remove.send(new Discord.MessageEmbed().setColor("#00ff99").setDescription(`Bot dołączył na serwer!\n\nNazwa: ${guild.name}\nID: ${guild.id}\n\nWłaściciel: ${guild.owner.user}\nID: ${guild.ownerID}\n\nUżytkownicy: + ${guild.memberCount}`))
});
client.on(`guildDelete`, async guild_leave => {
    webhook_logs_join_remove.send(new Discord.MessageEmbed().setColor("#00ff99").setDescription(`Bot opuścił serwer!\n\nNazwa: ${guild_leave.name}\nID: ${guild.id}\n\nWłaściciel: ${guild_leave.owner.user}\nID: ${guild_leave.ownerID}\n\nUżytkownicy: -${guild_leave.memberCount}`))
})
client.on('guildBanAdd', async (guild, user) => {
     
});
client.on('message', async (message_check) => {
    
    if(message_check.author.bot) return;
    if(message_check.member.hasPermission(`ADMINISTRATOR`)) return;

  for (var i = 0; i < n_words.length; i++) {
    if (message_check.content.includes(n_words[i])) {
      con.query(`SELECT chat_guard FROM config WHERE id_serwera="${message_check.guild.id}"`, function(err, ree){
        if(err) return;
        if(!ree.length){
            return;
        }else{
            if(ree[0].chat_guard === null){
                return;
            }else{
                message_check.delete();
                message_check.channel.send(new Discord.MessageEmbed().setColor(`#ff0000`).setAuthor("ChatGuard", client.user.displayAvatarURL({dynamic:true})).addField(`<:ban:793844572974612490> **Autor**`, `> \`${message_check.author.tag}\``, true).addField(`<a:annoucement:793844443605237781> **ID:**`, `> \`${message_check.author.id}\``, true).addField(`<a:mute:793843495764623361> **Kanał**`, `${message_check.channel}`, true).addField(`Wiadomość`, `\`\`\`yaml\n${message_check.content}\n\`\`\``))
                return;
            }
        }
      })
    }
  }
});

client.on('message', async (msg_invite) => {
    
    if(msg_invite.author.bot) return;
    if(msg_invite.member.hasPermission(`ADMINISTRATOR`)) return;

    var zapro_link = ["https://discord.gg/invite", "https://discordapp.com/invite", "https://discord.com/invite", "https://discord.com/", "https://discorapp.gg/", "discord.gg/", "discord.com/", "nadsc.pl/", "sparfy.pl/", "http://discord.gg/", "http://dicordapp.com/"];

  for (var o = 0; o < zapro_link.length; o++) {
    if (msg_invite.content.includes(zapro_link[o])) {
      con.query(`SELECT anti_invite FROM config WHERE id_serwera="${msg_invite.guild.id}"`, function(err, reoe){
        if(err) return;
        if(!reoe.length){
            return;
        }else{
            if(reoe[0].chat_guard === null){
                return;
            }else{
                con.query(`SELECT invite_punish FROM ustawienia WHERE id_serwera="${msg_invite}"`, function(err, ro){
                    if(err) return;
                    if(!ro.length){
                        msg_invite.delete();
                        return message.reply("**Wysyłanie zaproszeń nie jest dozwolone na tym serwerze!**")
                    }else{
                        if(ro[0].invite_punish === null){
                            msg_invite.delete();
                            return message.reply("**Wysyłanie zaproszeń nie jest dozwolone na tym serwerze!**")
                        }else{
                            if(ro[0].invite_punish === "kick"){
                                msg_invite.delete();
                                msg_invite.member.kick();
                                return;
                            }else if(ro[0].invite_punish === "ban"){
                                msg_invite.delete();
                                msg_invite.member.ban();
                                return;
                            }
                        }
                    }
                })
            }
        }
      })
    }
  }
  
});


client.on("channelCreate", function(channel){
    console.log(`Stworzono kanał: ${channel}`);
});

client.on("channelDelete", function(channel){
    console.log(`Usunięto kanał: ${channel}`);
});

client.on("emojiCreate", function(emoji){
    console.log(`Stworzono emotke: ${emoji}`);
});

client.on("emojiDelete", function(emoji){
    console.log(`Usunięto emotke \`${emoji}\``);
});

client.on("emojiUpdate", function(oldEmoji, newEmoji){
    console.log(`Zedytowano emoji: ${oldEmoji} na ${newEmoji}`);
});

client.on("messageDelete", function(message){
    console.log(`Usunięto wiadomość -> ${message}`);
});

client.on("messageDeleteBulk", function(messages){
    console.log(`Usunięto wiadomości -> ${messages}`);
});

client.on("messageReactionAdd", function(messageReaction, user){
    console.log(`${user} dał reakcje ${messageReaction}`);
});

client.on("messageReactionRemove", function(messageReaction, user){
    console.log(`${user} usunął reakcje ${messageReaction}`);
});

client.on("messageReactionRemoveAll", function(message){
    console.error(`Usunięto wszystkie reakcje z wiadmości (${message})`);
});

client.on("messageUpdate", function(oldMessage, newMessage){
    console.log(`Zedytowano wiadomość z ${oldMessage} na ${newMessage}`);
});

client.on("roleCreate", function(role){
    console.error(`Stworzono role: ${role}`);
});

client.on("roleDelete", function(role){
    console.error(`Usunięto role: ${role}`);
});

client.on("roleUpdate", function(oldRole, newRole){
    console.error(`Zmieniono role z ${oldRole} na ${newRole}`);
});

client.on("userUpdate", function(oldUser, newUser){
    console.log(`Wykryto zmiane dla użytkownika z ${oldUser} na ${newUser}`);
});

client.on("message", async message => {
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        const oznacznie = new Discord.MessageEmbed()
        .setAuthor(`Wykryto oznaczenie!`, client.user.displayAvatarURL())
        .setColor("#00ff99")
        .addField('Prefix: ', '\`t^\`', true)
        .addField('Ping: ', Math.round(client.ws.ping), true)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(`Trusty`)
       return message.channel.send(oznacznie)
    }
})

    
client.login(config.token)

