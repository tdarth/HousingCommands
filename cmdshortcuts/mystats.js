register('command', () => {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aViewing your current Player Stats!')
    ChatLib.command('viewstats ' + Player.getName());
}).setName('mystats');
