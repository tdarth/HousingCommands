register('command', () => {
    ChatLib.chat('&8[&b&lHousing&3Commands&8] &aX: ' + Math.round(10 * Player.getX() / 10) + " &aY: " + Math.round(10 * Player.getY() / 10) + " Z: " + Math.round(10 * Player.getZ() / 10));
    Client.showTitle('&f', "&a&l " + Math.round(10 * Player.getX() / 10) + " &a&l " + Math.round(10 * Player.getY() / 10) + " &l " + Math.round(10 * Player.getZ() / 10), 8, 200, 8);
}).setName('coords');