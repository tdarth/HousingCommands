// Code taken from Al3xWarrior (bald), edited by BusterBrown1218 !

const Mouse = Java.type('org.lwjgl.input.Mouse');
import loadAction from 'HousingEditor/api/loadAction';
import inputAnvil from 'HousingEditor/utils/inputAnvil';
import Settings from "../features/Settings";

var queue = [];

export default function importTemplate(HEAction, template) {
    Client.currentGui.close();
    console.log();

    queue.push(['function']);
    queue.push(['click', 50]);
    queue.push(['inputToAnvil', template]);
    queue.push(['loadHEAction', HEAction]);
}

register('step', () => {
    if (queue.length < 0) {
        return;
    }

    const next = queue[0];
    if (!next) {
        return;
    }

    console.log(next);

    if (next.length < 2) {
        switch (next[0]) {
            case 'function':
                ChatLib.say('/functions');
                break;
            case 'command':
                ChatLib.say('/commands');
                break;
        }
    } else {
        switch (next[0]) {
            case 'click':
                Player.getContainer().click(next[1]);
                break;
            case 'inputToAnvil':
                inputAnvil(next[1]);
                break;
            case 'loadHEAction':
                loadAction(next[1]);
                break;
        }
    }

    queue.shift();
}).setDelay(1);
