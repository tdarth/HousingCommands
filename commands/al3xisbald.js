import Settings from "../features/Settings";

register('command', () => {
    ChatLib.chat(Settings.chatPrefix + '&aAl3x is very bald.')
}).setName('al3xisbald');
