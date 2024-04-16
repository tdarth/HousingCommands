import Settings from "../features/Settings";

register('command', (option, name) => {
    if (!option) {
        ChatLib.chat(Settings.chatPrefix + '&aOpening functions..')
        ChatLib.command('functions')
    }
    if (option == "edit") {
        if (name) {
            ChatLib.command('function edit ' + name)
            ChatLib.chat(Settings.chatPrefix + '&aEditing function ' + name + "..")
        } else {
            ChatLib.chat('&8[&b&lHousing&3Commands&8] &cNo function name provided!')
        }
    }
    if (option == "delete") {
        if (name) {
            ChatLib.command('function delete ' + name)
            ChatLib.chat(Settings.chatPrefix + '&aDeleted function ' + name + "!")
        } else {
            ChatLib.chat('&8[&b&lHousing&3Commands&8] &cNo function name provided!')
        }
    }
    if (option == "create") {
        if (name) {
            ChatLib.command('function create ' + name)
            ChatLib.chat(Settings.chatPrefix + '&aCreated function ' + name + "!")
        } else {
            ChatLib.chat(Settings.chatPrefix + '&cNo function name provided!')
        }
    }
}).setName('fun');
