register('command', (number) => {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aSet visibility to ' + number + "!")
    ChatLib.command('visibility ' + number)
}).setName('vis');
