module.exports = {
  name: 'give me a writing prompt',
  description: 'Isme gives you a prompt',
  execute(msg, args) { askQuestion(msg) },
};

const constants = require('./constants')
let prompts = constants.prompts

function askQuestion(msg) {
  let value = constants.getRandomInt(prompts.length)
  msg.reply(prompts[value]);
}