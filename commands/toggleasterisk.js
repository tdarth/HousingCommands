register('command', () => {
  if (removeasterisk) {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aAsterisk enabled!')
    
  } else {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aAsterisk disabled')
  }

}).setName('toggleasterisk');
