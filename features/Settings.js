import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("HousingCommands")
class Settings {
	
	@TextProperty({
        name: "Chat Prefix",
        description: "What do you want the prefix of &aHousingCommands&7 to be?",
        category: "Settings",
        placeholder: "Enter your prefix..",
    })
    chatPrefix = "&8[&b&lHousing&3Commands&8] &f";

    @ButtonProperty({
        name: "Reload ChatTriggers",
        description: "&7Reloading the module is &crequired&7 for some changes to apply.",
        placeholder: "Reload",
        category: "Settings"
    })
    reloadCT() {
        Client.showTitle('&f', "&a&lReloading...", 8, 50, 8);
        ChatLib.command("chattriggers load", true);
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&cFunctions",
        description: "Opens the Function Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openFunctions() {
        ChatLib.command("functions");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&6Regions",
        description: "Opens the Regions Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openRegions() {
        ChatLib.command("regions");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&eEvent Actions",
        description: "Opens the Event Actions Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openEA() {
        ChatLib.command("eventactions");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&aScoreboard Editor",
        description: "Opens the Scoreboard Editor Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openSB() {
        ChatLib.command("scoreboard");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&bCommands",
        description: "Opens the Custom Commands Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openCommands() {
        ChatLib.command("commands");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&3Inventory Layouts",
        description: "Opens the Inventory Layouts Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openLayouts() {
        ChatLib.command("layouts");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&dTeams",
        description: "Opens the Teams Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openTeams() {
        ChatLib.command("teams");
        Client.currentGui.close()
    }

    @ButtonProperty({
        name: "&5Custom Menus",
        description: "Opens the Custom Menus Menu.",
        placeholder: "Open",
        category: "Shortcuts"
    })
    openMenus() {
        ChatLib.command("menus");
        Client.currentGui.close()
    }

    @SwitchProperty({
        name: "&e&lRemove Asterisk",
        description: "&7Removes the &f* &7symbol before messages.",
        category: "Tools",
    })
    asterisk = false;

    @SwitchProperty({
        name: "&a&lAutoWelcome",
        description: "&7Automatically sends a message when a player enters your house. Join/Leave Messages required!",
        category: "Tools"
    })
    welcome = false;

    @TextProperty({
        name: "AutoWelcome Message",
        description: "The username of the player will be added to the end of the message.",
        category: "Tools",
        placeholder: "Enter your message..",
    })
    welcomeMSG = "Welcome ";

    @SwitchProperty({
        name: "&d&lAutoGG",
        description: "&7Sends a customizable message when a game ends.",
        category: "Miscellaneous",
    })
    autoGG = true

    @TextProperty({
        name: "AutoGG Message",
        description: "What do you want the message of AutoGG to be?",
        category: "Miscellaneous",
        placeholder: "Enter your message..",
    })
    ggMessage = "gg";

    @SwitchProperty({
        name: "&5&lAutoGLHF",
        description: "&7Sends a customizable message when a game starts.",
        category: "Miscellaneous",
    })
    autoGLHF = false

    @TextProperty({
        name: "AutoGLHF Message",
        description: "What do you want the message of AutoGLHF to be?",
        category: "Miscellaneous",
        placeholder: "Enter your message..",
    })
    glhfMessage = "GLHF!";
    
    @ButtonProperty({
        name: "&fCustom House",
        description: "Joins a house that has the keyword in the title.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomK() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomKey;
        randomKey = true;
        randomK();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomK() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes(Settings.customKeyword)
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&a" + customKeyword + " found!");
                        randomKey = false;
                    } else {
                        randomK();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&c&lSimulator",
        description: "Joins a random simulator housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomSim() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomSimulator;
        randomSimulator = true;
        randomSim();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomSim() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("Sim") ||
                        footer.includes("Simulator") ||
                        footer.includes("SIM") ||
                        footer.includes("SIMULATOR") ||
                        footer.includes("ＳＩＭ") ||
                        footer.includes("ＳＩＭＵＬＡＴＯＲ") ||
                        footer.includes("tycoon") ||
                        footer.includes("Tycoon") ||
                        footer.includes("TYCOON") ||
                        footer.includes("ｔｙｃｏｏｎ") ||
                        footer.includes("Ｔｙｃｏｏｎ") ||
                        footer.includes("ＴＹＣＯＯＮ") ||
                        footer.includes("ｓｉｍ") ||
                        footer.includes("Ｓｉｍ") ||
                        footer.includes("Ｓｉｍｕｌａｔｏｒ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aSimulator found!");
                        randomSimulator = false;
                    } else {
                        randomSim();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&6&lParkour",
        description: "Joins a random Parkour housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomPk() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomParkour;
        randomParkour = true;
        randomPk();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomPk() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("Parkour") ||
                        footer.includes("PARKOUR") ||
                        footer.includes("parkour") ||
                        footer.includes("PK") ||
                        footer.includes("pk") ||
                        footer.includes("ｐａｒｋｏｕｒ") ||
                        footer.includes("Ｐａｒｋｏｕｒ") ||
                        footer.includes("ＰＡＲＫＯＵＲ") ||
                        footer.includes("ｐｋ") ||
                        footer.includes("Ｐｋ") ||
                        footer.includes("ＰＫ") ||
                        footer.includes("Pk") ||
                        footer.includes("levels") ||
                        footer.includes("Levels") ||
                        footer.includes("LEVELS") ||
                        footer.includes("ｌｅｖｅｌｓ") ||
                        footer.includes("Ｌｅｖｅｌｓ") ||
                        footer.includes("ＬＥＶＥＬＳ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aParkour found!");
                        randomParkour = false;
                    } else {
                        randomPk();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&e&lPVP",
        description: "Joins a random PVP housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomPv() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomPvp;
        randomPvp = true;
        randomPv();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomPv() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("pvp") ||
                        footer.includes("Pvp") ||
                        footer.includes("PVP") ||
                        footer.includes("ｐｖｐ") ||
                        footer.includes("Ｐｖｐ") ||
                        footer.includes("ＰＶＰ") ||
                        footer.includes("PvP") ||
                        footer.includes("ＰｖＰ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aPVP found!");
                        randomPvp = false;
                    } else {
                        randomPv();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&a&lRoleplay",
        description: "Joins a random Roleplay housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomRole() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomRoleplay;
        randomRoleplay = true;
        randomRole();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomRole() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("rp") ||
                        footer.includes("Rp") ||
                        footer.includes("RP") ||
                        footer.includes("roleplay") ||
                        footer.includes("Roleplay") ||
                        footer.includes("ROLEPLAY") ||
                        footer.includes("lab") ||
                        footer.includes("labs") ||
                        footer.includes("Lab") ||
                        footer.includes("LABS") ||
                        footer.includes("vs") ||
                        footer.includes("Vs") ||
                        footer.includes("VS") ||
                        footer.includes("ｒｐ") ||
                        footer.includes("Ｒｐ") ||
                        footer.includes("ＲＰ") ||
                        footer.includes("ｒｏｌｅｐｌａｙ") ||
                        footer.includes("Ｒｏｌｅｐｌａｙ") ||
                        footer.includes("ＲＯＬＥＰＬＡＹ") ||
                        footer.includes("ｌａｂ") ||
                        footer.includes("ｌａｂｓ") ||
                        footer.includes("ＬＡＢ") ||
                        footer.includes("ＬＡＢＳ") ||
                        footer.includes("ｖｓ") ||
                        footer.includes("Ｖｓ") ||
                        footer.includes("ＶＳ") ||
                        footer.includes("academy") ||
                        footer.includes("Academy") ||
                        footer.includes("ACADEMY") ||
                        footer.includes("ａｃａｄｅｍｙ") ||
                        footer.includes("Ａｃａｄｅｍｙ") ||
                        footer.includes("ＡＣＡＤＥＭＹ") ||
                        footer.includes("hotel") ||
                        footer.includes("Hotel") ||
                        footer.includes("HOTEL") ||
                        footer.includes("ｈｏｔｅｌ") ||
                        footer.includes("Ｈｏｔｅｌ") ||
                        footer.includes("ＨＯＴＥＬ") ||
                        footer.includes("school") ||
                        footer.includes("School") ||
                        footer.includes("SCHOOL") ||
                        footer.includes("ｓｃｈｏｏｌ") ||
                        footer.includes("Ｓｃｈｏｏｌ") ||
                        footer.includes("ＳＣＨＯＯＬ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aRoleplay found!");
                        randomRoleplay = false;
                    } else {
                        randomRole();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&b&lFreebuild",
        description: "Joins a random Freebuild housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomFb() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomFreebuild;
        randomFreebuild = true;
        randomFb();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomFb() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("fb") ||
                        footer.includes("Fb") ||
                        footer.includes("FB") ||
                        footer.includes("freebuild") ||
                        footer.includes("Freebuild") ||
                        footer.includes("FREEBUILD") ||
                        footer.includes("Free Build") ||
                        footer.includes("ｆｂ") ||
                        footer.includes("Ｆｂ") ||
                        footer.includes("ＦＢ") ||
                        footer.includes("ｆｒｅｅｂｕｉｌｄ") ||
                        footer.includes("Ｆｒｅｅｂｕｉｌｄ") ||
                        footer.includes("ＦＲＥＥＢＵＩＬＤ") ||
                        footer.includes("Ｆｒｅｅ Ｂｕｉｌｄ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aFreebuild found!");
                        randomFreebuild = false;
                    } else {
                        randomFb();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&d&l1 Jump = 1 Item",
        description: "Joins a random 1 Jump = 1 Item housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomJump() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomJI;
        randomJI = true;
        randomJump();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomJump() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("1jump") ||
                        footer.includes("1Jump") ||
                        footer.includes("1JUMP") ||
                        footer.includes("1 jump") ||
                        footer.includes("1 Jump") ||
                        footer.includes("1 JUMP") ||
                        footer.includes("１ｊｕｍｐ") ||
                        footer.includes("１Ｊｕｍｐ") ||
                        footer.includes("１ＪＵＭＰ") ||
                        footer.includes("１ ｊｕｍｐ") ||
                        footer.includes("１ Ｊｕｍｐ") ||
                        footer.includes("１ ＪＵＭＰ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&a1 Jump = 1 Item found!");
                        randomJI = false;
                    } else {
                        randomJump();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&c&lRPG",
        description: "Joins a random RPG housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomR() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomRPG;
        randomRPG = true;
        randomR();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomR() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("RPG") ||
                        footer.includes("rpg") ||
                        footer.includes("Rpg") ||
                        footer.includes("ＲＰＧ") ||
                        footer.includes("ｒｐｇ") ||
                        footer.includes("Ｒｐｇ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aRPG found!");
                        randomRPG = false;
                    } else {
                        randomR();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&6&lEscape",
        description: "Joins a random Escape housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomE() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomEscape;
        randomEscape = true;
        randomE();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomE() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("escape") ||
                        footer.includes("Escape") ||
                        footer.includes("ESCAPE") ||
                        footer.includes("ｅｓｃａｐｅ") ||
                        footer.includes("Ｅｓｃａｐｅ") ||
                        footer.includes("ＥＳＣＡＰＥ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aEscape found!");
                        randomEscape = false;
                    } else {
                        randomE();
                    }
                }, 1000);
            }, 1500);
        }       
    }

    @ButtonProperty({
        name: "&e&lEvent",
        description: "Joins a random Event housing.",
        placeholder: "Join",
        category: "Random Houses"
    })
    randomEv() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        var randomEvent;
        randomEvent = true;
        randomEv();
        ChatLib.chat(Settings.chatPrefix + "&aSearching..")
        function randomEv() {
            setTimeout(() => {
                ChatLib.command("housing random")
                setTimeout(() => {
                    const footer = TabList.getFooter();
                    if (
                        footer.includes("event") ||
                        footer.includes("Event") ||
                        footer.includes("EVENT") ||
                        footer.includes("ｅｖｅｎｔ") ||
                        footer.includes("Ｅｖｅｎｔ") ||
                        footer.includes("ＥＶＥＮＴ")
                    ) {
                        ChatLib.chat(Settings.chatPrefix + "&aEvent found!");
                        randomEvent = false;
                    } else {
                        randomEv();
                    }
                }, 1000);
            }, 1500);
        }       
    }

	@TextProperty({
        name: "Custom Keyword",
        description: "Sets the keyword to search for.",
        category: "Random Houses",
        placeholder: "Enter your keyword..",
    })
    customKeyword = "";

    @ButtonProperty({
        name: "&e&lCommand List",
        description: "&7Lists all commands this module has.",
        placeholder: "View",
        category: "Credits"
    })
    commandList() {
        Client.currentGui.close();
        ChatLib.chat ("\n &aShortcuts")
        ChatLib.chat("/ea - Opens the Event Action menu.");
        ChatLib.chat("/fun <edit, delete> <name> - Opens the Function menu.");
        ChatLib.chat("/gstats - View all current Global Stats.");
        ChatLib.chat("/lh - Goes to the Housing Lobby.");
        ChatLib.chat("/mystats - View your current Player Stats.");
        ChatLib.chat("/sb - Opens the Scoreboard Editor.");
        ChatLib.chat("/heads - Opens the Skull Packs menu.");
        ChatLib.chat("/vis <number> - Sets your visibility.");
        ChatLib.chat("/vr <public, friends, guild, party> - Sets your house Visiting Rules.");
        ChatLib.chat("/hr - Joins a random house.");
        ChatLib.chat("/v <user> - Visit a user's house. \n");

        ChatLib.chat("&aCommands");
        ChatLib.chat("/hc - Opens the HousingCommands config menu.");
        ChatLib.chat("/coords - Display your Coords in chat and a title.");
        ChatLib.chat("/down - Teleport down a number of blocks.");
        ChatLib.chat("/up - Teleport up a number of blocks.");
        ChatLib.chat("/(any formatting letter)item - Sets the formatting of the item name.");
        ChatLib.chat("/renameitem - Rename an item.");
        ChatLib.chat("/clearitem - Removes all formatting of an item.");
        ChatLib.chat("/hcemojis - View and copy emojis. \n");
    }

    @ButtonProperty({
        name: "&cPlaytime",
        description: "&7Imports a Playtime function.",
        placeholder: "Import",
        category: "Templates"
    })
    importPlaytime() {
        import Settings from '../features/Settings';
        import importTemplate from './templates';
        importTemplate('649e20e065961a60088995d9', 'Playtime')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Playtime..");
    }

    @ButtonProperty({
        name: "&aMob",
        description: "&7Imports a Mob function.",
        placeholder: "Import",
        category: "Templates"
    })
    importMob() {
        import Settings from '../features/Settings';
        import importTemplate from './templates';
        importTemplate('6625cab971aea71d3ff1dfc0', 'Mob')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Mob code..");
    }

    @ButtonProperty({
        name: "&6Leveling",
        description: "&7Imports a Leveling function.",
        placeholder: "Import",
        category: "Templates"
    })
    importLevel() {
        import Settings from '../features/Settings';
        import importTemplate from './templates';
        importTemplate('66283c377ffcbd4093181dd9', 'LevelHandler')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Level code..");
    }

    @ButtonProperty({
        name: "&eUnix Timer",
        description: "&7Imports a Unix function, as well as a timer.",
        placeholder: "View Imports",
        category: "Templates"
    })
    openUnix() {
        import UnixTimer from './TemplateGuis/UnixTimer';
        UnixTimer.openGUI()
    }

    @ButtonProperty({
        name: "&dPlayerIDs",
        description: "&7Imports a fully functional PlayerID system.",
        placeholder: "View Imports",
        category: "Templates"
    })
    openID() {
        import PlayerIDs from './TemplateGuis/PlayerIDs';
        PlayerIDs.openGUI()
    }

    @ButtonProperty({
        name: "&6Daily Reward",
        description: "&7Imports a fully functional Daily Reward system.",
        placeholder: "View Imports",
        category: "Templates"
    })
    openDR() {
        import DailyReward from './TemplateGuis/DailyReward';
        DailyReward.openGUI()
    }

    @ButtonProperty({
        name: "&2Lucky 7",
        description: "&7Imports a fully functional Lucky 7 system.",
        placeholder: "View Imports",
        category: "Templates"
    })
    openDR() {
        import Lucky7 from './TemplateGuis/Lucky7';
        Lucky7.openGUI()
    }

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Settings", "&bHousing&3Commands \n A QoL Housing Mod.")
        this.setCategoryDescription("Random Houses", "&aRuns /housing random until a keyword is found in the house name. \n &f \n &cUse at your own risk! \n &4Leave the game during a search to cancel.")
        this.setCategoryDescription("Templates", "&aImport important functions with the click of a button! \n &cRequires &4HousingEditor&c to be installed.")
        this.setCategoryDescription("Credits", "&bHousing&3Commands \n &7Credits \n &f \n &ctdarth &8- &7The Module \n &6Al3xWarrior &8- &7Templates Code \n &eBusterBrown1218 &8- &7Major Bugfixes")
    }
}

export default new Settings();
