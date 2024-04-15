register("chat", (event) => {
  const message = ChatLib.getChatMessage(event);
  if (message.match(/You received/) {
    ChatLib.command('ac Thanks for the cookies ${player}!')
  }
});

// no idea if this works, will test out later
