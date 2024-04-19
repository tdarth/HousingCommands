import Settings from "../features/Settings"

register("chat", (msg, event) => {
    if (Settings.asterisk) {
        ChatLib.chat(msg);
        cancel(event);
    } else {
        return;
    }
    
}).setCriteria("&r&7* ${msg}")