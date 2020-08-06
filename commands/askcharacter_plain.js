module.exports = {
  name: 'askcharacter',
  description: 'Isme asks your character a question',
  execute(msg, args) { askQuestion(msg, args) },
};

const constants = require('./constants')
let characterQuestions = constants.characterQuestions

function askQuestion(msg, args) {
  let value = constants.getRandomInt(characterQuestions.length)
  let char = 'your character'
  if (args[0]) { char = args[0] }
  msg.reply('This question is for ' + char + ". " + characterQuestions[value]);
}