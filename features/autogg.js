import Settings from "../features/Settings"

register("chat", (event) => {
  if (Settings.autoGG) {
      const message = ChatLib.getChatMessage(event);
      if (message.match(/Win/ || /Reward Summary/)) {
          cancel(event);
          ChatLib.command('ac ' + Settings.ggMessage);
  }}
});

  register("chat", (event) => {
    if (Settings.autoGLHF) {
        const message = ChatLib.getChatMessage(event);
        if (message.match(/The game starts in 1 second!/)) {
            cancel(event);
            setTimeout(() => {    ChatLib.command('ac ' + Settings.glhfMessage);   }, 1000);
    }}
  });

