module.exports = {
  name: 'i need your help',
  description: 'Isme sends help',
  execute(msg, args) { dmHelp(msg) },
};

const commands = [
  "Hello! I heard you need some help. (:",
  "You can get my attention by saying \"Isme, \" or \"-isme\" \n",
  "\"I need your help\": I\'ll send you a DM with a list of possible commands.",
  "\"help\": I\'ll send you a DM with a list of possible commands.",
  "\"ask me about my character\": I'll ask a question for you about your character! Tell me all about them.",
  "\"askme\": I'll ask a question for you about your character! Tell me all about them.",
  "\"ask my character a question\": You can add \": (your character\'s name)\" after this prompt. I'll ask a question for your character to answer! Let them speak through you.",
  "\"askcharacter\": You can add \": (your character\'s name)\" after this prompt. I'll ask a question for your character to answer! Let them speak through you.",
  "\"give me a writing prompt\": I'll give you a prompt to write a short story about. I would love to see what you come up with!",
  "\"prompt\": I'll give you a prompt to write a short story about. I would love to see what you come up with!"
]

function dmHelp(msg) {
  let dmMessage = ''
  commands.forEach( ele => {
    dmMessage += ele + "\n"
  })

  msg.author.send(dmMessage);
}