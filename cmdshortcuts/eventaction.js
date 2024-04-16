import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aOpening event actions..')
    ChatLib.command('eventactions')
}).setName('ea').setAliases('eac', 'events');
