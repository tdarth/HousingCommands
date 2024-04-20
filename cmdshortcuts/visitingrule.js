import Settings from "../features/Settings";

var vr = false;

register('command', (option) => {
    ChatLib.chat(Settings.chatPrefix + '&aSet visiting rules to ' + option + "!")
    ChatLib.command('visitingrule ' + option)
    vr = true;
}).setName('vr')

register("chat", (event) => {
    if (vr) {
      const message = ChatLib.getChatMessage(event);
      if (message.match(/Successfully toggled visiting/)) {
        vr = false;
        cancel(event);
    }}
  });
