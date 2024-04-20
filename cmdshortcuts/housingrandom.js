import Settings from "../features/Settings";

var hr = false

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aSending you to a random house..')
    ChatLib.command('housing random');
    setTimeout(() => {
      if (TabList.getFooter().includes("Sim" || "Simulator" || "SIM" || "SIMULATOR" || "ＳＩＭ" || "ＳＩＭＵＬＡＴＯＲ")) {
        ChatLib.chat("Simulator!");
      if (TabList.getFooter().includes("Freebuild" || "FREEBUILD" || "freebuild" || "ＦＲＥＥＢＵＩＬＤ" || "ｆｒｅｅｂｕｉｌｄ" || "Ｆｒｅｅｂｕｉｌｄ")) {
        ChatLib.chat("Freebuild!");
      }
    }}, 1000);
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