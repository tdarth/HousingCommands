import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("HousingCommands")
class Settings {
	
	// @SwitchProperty({
    //     name: "&e&lToggle Module",
    //     description: "Should the Module be &aenabled&7 or &cdisabled&7?",
    //     category: "Settings"
    // })
    // moduleEnabled = true;
	
	// @SwitchProperty({
    //     name: "&e&lToggle Command Shortcuts",
    //     description: "Should Commands Shortucts be &aenabled &7or &cdisabled&7?",
	// 	category: "Command Shortcuts"
    // })
    // commandShortcuts = true;
	
	// @SwitchProperty({
    //     name: "&e&lToggle HC Commands",
    //     description: "Should HC Commands be &aenabled &7or &cdisabled&7?",
    //     category: "HC Commands"
    // })
    // hcCommands = true;
	
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

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Settings", "&bHousing&3Commands \n A QoL Housing Mod.")
    }
}

export default new Settings();
