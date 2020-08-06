module.exports = {
  name: 'help',
  description: 'Isme sends help',
  execute(msg, args) { dmHelp(msg) },
};

const constants = require('./constants')
let commands = constants.commands

function dmHelp(msg) {
  let dmMessage = ''
  commands.forEach( ele => {
    dmMessage += ele + "\n"
  })

  msg.author.send(dmMessage);
}