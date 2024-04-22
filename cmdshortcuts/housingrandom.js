import Settings from "../features/Settings";

var hr = false

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aSending you to a random house..')
    ChatLib.command('housing random');
    hr = true;
}).setName('hr');

register("chat", (event) => {
  if (hr) {
    const message = ChatLib.getChatMessage(event);
    if (message.match(/Sending you to/)) {
      hr = false;
      cancel(event);
  }}
});