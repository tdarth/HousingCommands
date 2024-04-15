register("chat", (event) => {
  const message = ChatLib.getChatMessage(event);
  if (message.match(/You received/) {
    ChatLib.command('ac Thanks for the cookies ${player}!')
  }
});

// register('chat', (event) => {
//   ChatLib.say(`Thanks for the cookies ${player}! <3`);
// }).setCriteria('You received ${amount} cookies from ${player}!');

// no idea if this works, will test out later
