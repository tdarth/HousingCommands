register('command', (number) => {
  if (number) {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aTeleported you down ' + number + " blocks!")
    ChatLib.command('tp ~ ' + -number + ' ~');
  } else {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &cNo value provided!")
  }
}).setName('down');
