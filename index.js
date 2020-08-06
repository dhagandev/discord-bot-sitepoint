require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
})

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  let fancy = 'Isme, '
  let plain = '-isme '
  let properStart = ''

  if (msg.content.startsWith(fancy)) { properStart = fancy }
  if (msg.content.startsWith(plain)) { properStart = plain }

  if (properStart) {
    msg.content = msg.content.replace(properStart, '')

    const args = msg.content.split(': ');
    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) {
      msg.channel.send(`I'm sorry ${msg.author}, I don't know what you're talking about. If you need help, please say "Isme, I need help" or "-isme help" and I will get back to you soon.`)
      return;
    }

    try {
      bot.commands.get(command).execute(msg, args);
    }
    catch (error) {
      console.log(error);
      msg.channel.send(`I'm sorry ${msg.author}, I think something went wrong. If you need help, please say "Isme, I need help" or "-isme help" and I will get back to you soon.`)
    }
  }
});
