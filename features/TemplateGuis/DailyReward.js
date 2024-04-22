import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("Daily Reward")
class DailyReward {

    @ButtonProperty({
        name: "&a&l1.&r &fImport DRJoinEvent",
        description: "&7Imports the Join Event function.",
        placeholder: "Import",
        category: "Daily Reward"
    })
    importUnix() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6626f034ecb9b1d2a66a7794', 'DRJoinEvent')
        ChatLib.chat(Settings.chatPrefix + "&aImporting DRJoinEvent function..");
    }

    @ButtonProperty({
        name: "&a&l2.&r &fImport DRCode",
        description: "&7Imports the DRCode function. Place in the area where you want the reward to be claimed. Add rewards in the Else Actions.",
        placeholder: "Import",
        category: "Daily Reward"
    })
    importUnixTimer() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6626f0a0ecb9b1d2a66a77a3', 'DRCode')
        ChatLib.chat(Settings.chatPrefix + "&aImporting DRCode function..");
    }


    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Daily Reward", "&bHousing&3Commands \n Daily Reward Template \n &f \n &aAfter importing both functions, put DRJoinEvent in Join Events, and DRCode in the daily reward npc/command. Put the rewards you would like to give in the Else Actions. \n &2Make sure to import each function in order.")
    }
}

export default new DailyReward();
