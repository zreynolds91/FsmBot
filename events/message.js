const settings = require('../settings.json');

module.exports = message => {

  // If the message does not begin with the prefix, ignore it.
  if(!message.content.toUpperCase().includes("GOD")
      && !message.content.toUpperCase().includes("FSM")
      && !message.content.toUpperCase().includes("FLYING SPAGHETTI MONSTER")) {
    return;
  }
  // If it is a message from the bot, ignore it.
  if(message.author.bot) {
    return;
  }

  message.reply("WHO CALLS UPON THE GREAT, NOODLY ONE!?!??!?!?!");
};
