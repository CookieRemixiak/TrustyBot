const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const sql = require("mysql");
const client = new Discord.Client();
const config = require("./config.json");


client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const eventy = require(`./events/${file}`);
    let event_name = file.split(".")[0];
    console.log(`Załadowano event: ${event_name} ...`);
    client.on(event_name, eventy.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./cmds/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let komendy = require(`./cmds/${file}`);
    let cmd_name = file.split(".")[0];
    console.log(`Załadowano komendę:  ${cmd_name} ...`);
    client.commands.set(cmd_name, komendy);
  });
});

/*
const con = sql.createConnection({
  host: "",
  user: "",
  password: "",
  charset: "",
  database: "",
  connectTimeout: 60 * 60 * 100000
});
con.connect(function(err) {
  console.log("DB CONNECTED");
});

*/


client.on("ready", () => {


  console.log(`${client.user.tag} jest on-line!`);


client.on('error', e => {
  console.log(e)
})
client.on('warn', e => {
  console.log(e)
})



const activities_list = [
    "t^",
    "t^pomoc",
    "Weryfikacja",
    "Serwery: ",
    "Użytkownicy: "
    ];

    client.setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: "WATCHING" });
    }, 300000);
});



client.on('guildCreate', async guild => {

  var owner = guild.ownerID
  var sz = guild.members.cache.find(u => u.id === owner);
  if(!sz){
    sz = "Brak danych";
  }

  const defaultChannel = guild.channels.cache.find(c => c.permissionsFor(guild.me).has("SEND_MESSAGES"));

    var embed2 = new Discord.MessageEmbed()
    .setColor(`#000000`)
  .setAuthor(`BOT DOLACZYL NA SERWER`, guild.iconURL())
  .addField(`Nazwa: `, `\n\`\`\`\n${guild.name}\n\`\`\`\n`)
  .addField(`ID: `, `\n\`\`\`\n${guild.id}\n\`\`\`\n`)
  .addField(`Wlasciciel: `, `${sz}`)
  .addField(`Tag: `, `\n\`\`\`\n${sz.user.tag}\n\`\`\`\n`)
  .addField(`ID: `, `\n\`\`\`\n${sz.id}\n\`\`\`\n`)
  .addField(`Stonks: `, `\n\`\`\`\n + ${guild.memberCount} + users\n\`\`\`\n`)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
    client.channels.cache.get("").send(embed2)

});

client.on('guildDelete', async guildo => {

  var ownerp = guildo.ownerID
  var szp = guildo.members.cache.find(u => u.id === ownerp);
  if(!szp){
    szp = "Brak danych";
  }

  var embed20 = new Discord.MessageEmbed()
  .setColor(`#000000`)
  .setAuthor(`BOT OPUSCIL SERWER`, guildo.iconURL())
  .addField(`Nazwa: `, `\n\`\`\`\n${guildo.name}\n\`\`\`\n`)
  .addField(`ID: `, `\n\`\`\`\n${guildo.id}\n\`\`\`\n`)
  .addField(`Wlasciciel: `, `${szp}`)
  .addField(`Tag: `, `\n\`\`\`\n${szp.user.tag}\n\`\`\`\n`)
  .addField(`ID: `, `\n\`\`\`\n${szp.id}\n\`\`\`\n`)
  .addField(`Stonks: `, `\n\`\`\`\n + ${guildo.memberCount} + users\n\`\`\`\n`)
  .setThumbnail(guildo.iconURL())
  .setTimestamp()
  client.channels.cache.get("").send(embed20)
});

client.login(config.token);