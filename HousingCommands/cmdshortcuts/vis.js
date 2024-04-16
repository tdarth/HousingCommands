import Settings from "../features/Settings";

register('command', (number) => {
    ChatLib.chat(Settings.chatPrefix + '&aSet visibility to ' + number + "!")
    ChatLib.command('visibility ' + number)
}).setName('vis');
