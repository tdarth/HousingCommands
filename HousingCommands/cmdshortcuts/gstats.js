import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aViewing current Global Stats!')
    ChatLib.command('viewglobalstats')
}).setName('gstats');
