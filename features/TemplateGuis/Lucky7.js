import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("Lucky 7")
class Lucky7 {

    @ButtonProperty({
        name: "&a&l1.&r &fImport Lucky Broadcasts",
        description: "&7Imports the Lucky Broadcasts function.",
        placeholder: "Import",
        category: "Lucky 7"
    })
    importLuckyBroadcast() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6626f185ecb9b1d2a66a77ad', 'Lucky Broadcasts')
        ChatLib.chat(Settings.chatPrefix + "&aImporting LuckyBroadcast function..");
    }

    @ButtonProperty({
        name: "&a&l2.&r &fImport Lucky 7 REWARD",
        description: "&7Imports the Lucky 7 REWARD function. (Requires you to modify the code after importing.)",
        placeholder: "Import",
        category: "Lucky 7"
    })
    importLucky7Reward() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6626f253ecb9b1d2a66a77bb', 'Lucky 7 REWARD')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Lucky 7 REWARD function..");
    }

    @ButtonProperty({
        name: "&a&l3.&r &fImport Lucky 7 (Sneaking)",
        description: "&7Imports the Lucky 7 (Sneaking) function. Make sure to run automatic execution on 4 ticks! (Requires you to modify the code after importing.)",
        placeholder: "Import",
        category: "Lucky 7"
    })
    importLucky7Sneaking() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6626f362ecb9b1d2a66a77d7', 'Lucky 7 (Sneaking)')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Lucky 7 (Sneaking) function..");
    }

    @ButtonProperty({
        name: "&a&l4.&r &fImport Lucky 7 Item",
        description: "&7Imports the Lucky 7 Item function. Place this function in your Lucky 7 Item, and modify both the functions Lucky 7 (Sneaking) and Lucky 7 Item! (Requires you to modify the code after importing.)",
        placeholder: "Import",
        category: "Lucky 7"
    })
    importLucky7Item() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6626f3b2ecb9b1d2a66a77f0', 'Lucky 7 Item')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Lucky 7 Item function..");
    }

    @ButtonProperty({
        name: "&cVideo Tutorial",
        description: "&7Watch a video on how the code functions and how to import it.",
        placeholder: "Watch",
        category: "Lucky 7"
    })
    importLucky7Item() {
        import Settings from '../Settings';
        Client.currentGui.close();
        ChatLib.chat(Settings.chatPrefix + "&aVideo Link: https://www.youtube.com/watch?v=hCK8Gh9YEQ8");
    }


    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Lucky 7", "&bHousing&3Commands \n Lucky 7 Template \n &f \n &aAfter importing both functions, you will need to edit the Lucky7 function to make a key item work. \n &2Make sure to import each function in order.")
    }
}

export default new Lucky7();
