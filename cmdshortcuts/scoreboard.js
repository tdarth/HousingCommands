import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aOpening the scoreboard..')
    ChatLib.command('scoreboard')
}).setName('sb')
