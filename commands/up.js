register('command', (number) => {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aTeleported you up ' + number + " blocks!")
    ChatLib.command('tp ~ ' + number + ' ~');
}).setName('up');
