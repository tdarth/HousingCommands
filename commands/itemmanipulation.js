register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&l' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem bolded!');
}).setName('bolditem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&o' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem italicized!');
}).setName('italicitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&n' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem underlined!');
}).setName('underlineitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&m' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem strikethroughed!');
}).setName('strikethroughitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aRemoved all formatting from item!');
}).setName('resetitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&k' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem obfuscated!');
}).setName('obfuscateitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&0' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('blackitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&1' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('darkblueitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&2' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('greenitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&3' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('cyanitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&4' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('darkreditem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&5' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('purpleitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&6' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('orangeitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&7' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('grayitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&8' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('darkgrayitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&9' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('blueitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&a' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('limeitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&b' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('aquaitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&c' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('reditem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&d' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('pinkitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&e' + itemName);
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aItem colored!');
}).setName('yellowitem');
