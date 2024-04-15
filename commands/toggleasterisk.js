import './features/removeasterisk'
var removeasterisk == "no"

register('command', () => {
  if (removeasterisk == "yes") {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aAsterisk enabled!')
    removeasterisk = "no";
  } else {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aAsterisk disabled')
    removeasterisk = "yes";
  }

}).setName('toggleasterisk');
