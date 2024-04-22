import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("PlayerIDs")
class PlayerIds {

    @ButtonProperty({
        name: "&a&l1.&r &fImport IDMSG",
        description: "&7Imports the function that allows Join Messages to be added.",
        placeholder: "Import",
        category: "PlayerIDs"
    })
    importIDMSG() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6625d17f71aea71d3ff1e0d6', 'idMSG')
        ChatLib.chat(Settings.chatPrefix + "&aImporting IDMSG code..");
    }

    @ButtonProperty({
        name: "&a&l2.&r &fImport ID",
        description: "&7Imports the function that allows IDs to work properly.",
        placeholder: "Import",
        category: "PlayerIDs"
    })
    importID() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('65ec8f1f9e99143d124f5429', 'ID')
        ChatLib.chat(Settings.chatPrefix + "&aImporting ID code..");
    }

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("PlayerIDs", "&bHousing&3Commands \n PlayerID Template \n &f \n &aAfter importing both functions, add the ID function to Join Event Actions. \n &2Make sure to import each function in order.")
    }
}

export default new PlayerIds();
