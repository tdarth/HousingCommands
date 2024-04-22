import Settings from "../features/Settings";

register('command', (user) => {
    if (user) {
        ChatLib.chat(Settings.chatPrefix + '&aVisiting ' + user + "&a..")
        ChatLib.command('visit ' + user)
    } else {
        ChatLib.chat(Settings.chatPrefix + "&cYou didn't enter a user!")
    }
}).setName('v');
