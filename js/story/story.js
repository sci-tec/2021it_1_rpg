import G from '../common/global.js'
import { CONFIG } from '../common/config.js';
import { refreshMap } from '../field/field.js';

let currentId;
let currentMessageIdx;

export function story_init(op) {
    $("#mat_story").show();
    currentId = op.id;
    startStory();
    // addEventListeners();
    // option = op;
    // refreshBattleScene(option);
}

export function story_keyDown(code) {
    // console.log(code);
    switch(code) {
        case 37:
            console.log("left")
            break;
        case 38:
            console.log("up")
            break;
        case 39:
            console.log("right")
            break;
        case 40:
            console.log("down");
            break;
        case 32:
            console.log("space");
            nextMessage();
            break;
        default:
            break;
    }
}

function startStory() {
    showMessageById(0);
}
function showMessageById(id) {
    currentMessageIdx = id;
    let msg = G.DATA.STORY[currentId][id];
    console.log(msg);
    if(msg.image) {
        if(msg.image == "-") {
            $("#mat_story .img img").attr('src', ``);
        } else {
            $("#mat_story .img img").attr('src', `/images/story/${msg.image}`);
        }
    }
    $("#mat_story .messageblock").html(msg.text);
}
function nextMessage() {
    currentMessageIdx++;
    if(currentMessageIdx < G.DATA.STORY[currentId].length) {
        showMessageById(currentMessageIdx);
    } else {
        close();
    }
}

function close() {
    $("#mat_story .messageblock").html("");
    G.refresh(CONFIG.MODE_FIELD);
}
