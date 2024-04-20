import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aViewing your current Player Stats!')
    ChatLib.command('viewstats ' + Player.getName());
}).setName('mystats');
