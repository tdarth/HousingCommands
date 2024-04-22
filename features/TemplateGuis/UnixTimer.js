import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("Unix Timer")
class UnixTimer {

    @ButtonProperty({
        name: "&a&l1.&r &fImport Unix",
        description: "&7Imports a Unix function.",
        placeholder: "Import",
        category: "Unix Timer"
    })
    importUnix() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6625cbed71aea71d3ff1e006', 'Unix')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Unix function..");
    }

    @ButtonProperty({
        name: "&a&l2.&r &fImport Unix Timer",
        description: "&7Imports a Timer function. Must be placed inside the Unix function to work.",
        placeholder: "Import",
        category: "Unix Timer"
    })
    importUnixTimer() {
        import importTemplate from '../templates';
        import Settings from '../Settings';
        importTemplate('6625ccb071aea71d3ff1e052', 'Timer')
        ChatLib.chat(Settings.chatPrefix + "&aImporting Unix Timer..");
    }


    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Unix Timer", "&bHousing&3Commands \n Unix Timer Template \n &f \n &aAfter importing both functions, make Unix run every 4 ticks, and add the functions you want to run in the If Actions. \n &2Make sure to import each function in order.")
    }
}

export default new UnixTimer();
