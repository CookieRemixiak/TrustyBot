const Discord = require("discord.js");

const cool_pomoc = new Set();

exports.run = (client, message, args) => {

  if (cool_pomoc.has(message.author.id)) {
    return message.channel.send(
      `${message.author}, poczekaj \`10\` sekund przed ponownym użyciem tej komendy!`
    );
  }

  const embed_pomoc = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
    .setURL(`https://rubybot.pl/`)
    .addField(`\`|\` Komendy Pomocy**`, `\`\`\`\nhelp\n\`\`\``, true)
    .addField(`\`|\` Komendy Główne**`, `\`\`\`\ncmd\n\`\`\``, true)
    .addField(`\`|\` Komendy Premium**`, `\`\`\`\ncmd\n\`\`\``, true)
    .setTimestamp()


  message.channel.send(embed_pomoc).catch(console.error);
  cool_pomoc.add(message.author.id);
  setTimeout(() => {
    cool_pomoc.delete(message.author.id);
  }, 10000);
  return;
};
