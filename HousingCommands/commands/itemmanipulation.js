import Settings from "../features/Settings";

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&l' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem bolded!');
}).setName('bolditem').setAliases('litem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&o' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem italicized!');
}).setName('italicitem').setAliases('oitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&n' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem underlined!');
}).setName('underlineitem').setAliases('nitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&m' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem strikethroughed!');
}).setName('strikethroughitem').setAliases('mitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    ChatLib.chat(Settings.chatPrefix + '&aRemoved all formatting from item!');
}).setName('resetitem').setAliases('ritem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&k' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem obfuscated!');
}).setName('obfuscateitem').setAliases('kitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&0' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('blackitem').setAliases('0item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&1' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('darkblueitem').setAliases('1item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&2' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('greenitem').setAliases('2item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&3' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('cyanitem').setAliases('3item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&4' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('darkreditem').setAliases('4item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&5' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('purpleitem').setAliases('5item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&6' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('orangeitem').setAliases('golditem', '6item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&7' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('grayitem').setAliases('greyitem', '7item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&8' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('darkgrayitem').setAliases('darkgreyitem', '8item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&9' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('blueitem').setAliases('9item');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&a' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('limeitem').setAliases('aitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&b' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('aquaitem').setAliases('bitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&c' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('reditem').setAliases('citem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&d' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('pinkitem').setAliases('ditem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&e' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('yellowitem').setAliases('yitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&f' + itemName);
    ChatLib.chat(Settings.chatPrefix + '&aItem colored!');
}).setName('whiteitem').setAliases('fitem');

register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    item.setName('&f');
    ChatLib.chat(Settings.chatPrefix + '&aItem cleared!');
}).setName('clearitem');

register('command', (name) => {
    if (!name) {
        ChatLib.chat(Settings.chatPrefix + '&cNo name provided!');
    } else {
        const item = Player.getHeldItem();
        item.setName(name);
        ChatLib.chat(Settings.chatPrefix + '&aItem named!');
    }
}).setName('nameitem').setAliases('renameitem');
