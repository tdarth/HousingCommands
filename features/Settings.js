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
	

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Settings", "&bHousing&3Commands \n A QoL Housing Mod.")
    }
}

export default new Settings();
