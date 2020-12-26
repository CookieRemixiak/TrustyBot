const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');

const ping = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Oznaczyłeś mnie!')
	.setDescription('Mój prefix to: `t^`.\n Zobacz moje komendy `t^help`')

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log(`Bot wystartował na ${client.user.tag} (${client.user.id})`);
    client.user.setActivity('@Trusty', { type: 'LISTENING' });
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    console.log(`Wczytano komende : ${command.name}.js`)
    client.commands.set(command.name, command);
}

client.on('message', message => {
	if (message.content === '<@792469472568803329>') {
		message.channel.send(ping);
	}
});

client.on('message', message => {
	if (message.content === '<@!792469472568803329>') {
		message.channel.send(ping);
	}
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
});



client.login(config.token);