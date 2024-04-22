import Settings from "../features/Settings";

var down = false

register('command', (number) => {
  if (number) {
    ChatLib.chat(Settings.chatPrefix + '&aTeleported you down ' + number + " blocks!")
    ChatLib.command('tp ~ ' + Math.round(Player.getY()-number) + ' ~');
    down = true;
  } else {
    ChatLib.chat(Settings.chatPrefix + '&cNo value provided!')
  }
}).setName('down');

register("chat", (event) => {
  if (down) {
    const message = ChatLib.getChatMessage(event);
    if (message.match(/Teleporting you to/)) {
      down = false;
      cancel(event);
  }}
});