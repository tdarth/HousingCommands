import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aSending you to the Housing Lobby..')
    ChatLib.command('l housing')
}).setName('lh');
