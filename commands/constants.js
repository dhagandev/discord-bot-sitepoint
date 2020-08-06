const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

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


const prompts = [
  `You look at a falling star and make a wish: "I wish for a million more wishes" You say smugly, a milion more 'falling stars' appear in the night sky and suddenly you realize you've just inadvertedly caused the apocalypse.`,
  `Years ago you made a deal with Death, that he would kill anyone you wished so long as you offered a single life to him in return. Death thought it would teach you the value of life, but he didn't count on you owning an ant farm.`,
  `You’re a blacksmith and a woman you’ve never seen before walks into your shop, asking for a blade. She stops by daily to check on it’s progress, and you form a bond over time, until one day she disappears. You’re afraid you’ll never see her again, until you're summoned to the castle.`,
  `500 Years ago, people suddenly gained magical powers based on their surname. Over the centuries, Smith went from the most common surname to the least common surname. You are the last remaining Smith, and you can create tools out of literally anything.`,
  `While out of your armor, you recognize a beautiful woman as your fellow knight out of armor, but they don’t recognize you as you have mostly stayed in your armor at work. She tries to flirt with you in a shy manner.`,
  `Yeah, love potions are a thing, but there is one problem: they never specified the kind of love. Sometimes this backfires.`,
  `An alien breaks into your house. You, naturally, shoot it. It's armor easily breaks, leaving it bleeding on your floor. You learn of an impending invasion, and their armor was made for lasers and nuclear weapons, not bullets. Time to convince the government not to use nukes.`,
  `You are a survivor of The Tilt, an unexplained disaster in which gravity suddenly changed from pulling straight down to pulling at a 30 degree angle.`,
  `To prevent extinction from the Wizard Clan wars, a Law was established that the Wizard Clans could only fight by sending out magicless champions to fight to the death in combat. When warriors began to run out, the wizards began summoning humans from their world to fight instead.`,
]

const characterQuestion = [
  `What matters most to you?`,
  `What is your biggest desire?`,
  `What is your greatest fear?`,
  `What are your flaws?`,
]

const question = [
  `What matters most to your character?`,
  `What is your character’s biggest desire?`,
  `What’s your character’s greatest fear?`,
  `What are your character’s flaws?`,
  `What’s your character’s type or archetype?`
]

exports.getRandomInt = getRandomInt;
exports.commands = commands;
exports.prompts = prompts;
exports.characterQuestions = characterQuestion;
exports.questions = question;