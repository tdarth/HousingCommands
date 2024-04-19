import Settings from "./features/Settings";

// Commands
import './commands/al3xisbald';
import './commands/coords';
import './commands/up';
import './commands/down';
import './commands/itemmanipulation';

// cmdshortcuts
import './cmdshortcuts/eventaction';
import './cmdshortcuts/functions';
import './cmdshortcuts/vis';
import './cmdshortcuts/scoreboard';
import './cmdshortcuts/visitingrule';
import './cmdshortcuts/skullpacks';
import './cmdshortcuts/lobbyhousing';
import './cmdshortcuts/mystats';
import './cmdshortcuts/gstats';

// Features
import './features/removeAsterisk';
import './features/autogg';
// import './features/cookieThanks';
// import './features/inCreative';

register("command", () => Settings.openGUI()).setName('housingcommands').setAliases('hc');

ChatLib.chat("")
ChatLib.chat(Settings.chatPrefix + "&aLoaded! &8(&7/hc&8)")
ChatLib.chat("&8└ &7a QoL Housing Mod by &btdarth&7.")
ChatLib.chat("")
