module.exports = {
  name: 'ask me about my character',
  description: 'Isme asks a question about your character',
  execute(msg, args) { askQuestion(msg) },
};

const constants = require('./constants')
let questions = constants.questions

function askQuestion(msg) {
  let value = constants.getRandomInt(questions.length)
  msg.reply(questions[value]);
}