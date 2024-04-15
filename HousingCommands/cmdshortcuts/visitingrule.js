register('command', (option) => {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aSet visiting rules to ' + option + "!")
    ChatLib.command('visitingrule ' + option)
}).setName('vr')
