import Settings from "../features/Settings";

register('command', (option) => {
    ChatLib.chat(Settings.chatPrefix + '&aSet visiting rules to ' + option + "!")
    ChatLib.command('visitingrule ' + option)
}).setName('vr')
