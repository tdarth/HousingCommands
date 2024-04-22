import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aOpening skull packs..')
    ChatLib.command('skulls')
}).setName('heads');
