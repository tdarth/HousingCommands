import Settings from "../features/Settings";

var up = false

register('command', (number) => {
  if (number) {
    ChatLib.chat(Settings.chatPrefix + '&aTeleported you up ' + number + " blocks!")
    ChatLib.command('tp ~ ' + Math.round(Player.getY()+number) + ' ~');
    up = true;
  } else {
    ChatLib.chat(Settings.chatPrefix + '&cNo value provided!')
  }
}).setName('down');

register("chat", (event) => {
  if (up) {
    const message = ChatLib.getChatMessage(event);
    if (message.match(/Teleporting you to/)) {
      up = false;
      cancel(event);
  }}
});