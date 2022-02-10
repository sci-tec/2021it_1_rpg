import G from './common/global.js'
import { CONFIG } from './common/config.js';

import { refreshMap } from './field/field.js'
// import { battle_init, battle_keyDown } from './battle/battle.js'
// import { story_init, story_keyDown } from './story/story.js'

export function develop() {
    $("#ui .btnDev").click(()=>{
        refreshMap("test", 4, 6);
    });
    
    $("#ui #tagCopy").click((e)=>{
        document.execCommand("copy");
    });

    var listener = function(e){
        e.clipboardData.setData("text/plain" , getCopyString());    
        e.preventDefault();
    }

    document.addEventListener("copy" , listener);

}

export function devConsole() {
    $("#console").html(`x:${G.player_x} y:${G.player_y} mapId:${G.currentMapId} mode:${G.currentMode}`);
    $("#tagForCopy").html(getCopyString(G.currentMapId));
}

function getCopyString(to = "行き先マップID") {
    return `{ x: ${G.player_x}, y: ${G.player_y}, goto: { name: '${to}', x: 0, y: 0 }},`;
}