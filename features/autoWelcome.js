import Settings from "../features/Settings";

register("chat", (rank, user, event) => {
    if (Settings.welcome && TabList.getFooter().includes(Player.getName()) && user!=Player.getName()) {
        ChatLib.say(Settings.welcomeMSG + user);
        cancel(event);
    } else {
        return;
    }
}).setCriteria("${rank} ${user} entered the world.");
