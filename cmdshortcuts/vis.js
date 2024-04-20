import Settings from "../features/Settings";

var vis = false;

register('command', (number) => {
    ChatLib.chat(Settings.chatPrefix + '&aSet visibility to ' + number + "!")
    ChatLib.command('visibility ' + number)
    vis = true;
}).setName('vis');

register("chat", (event) => {
    if (vis) {
      const message = ChatLib.getChatMessage(event);
      if (message.match(/Visibility set/)) {
        vis = false;
        cancel(event);
    }}
  });