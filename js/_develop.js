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

    $("#ui #addEXP1").click((e)=>{ G.addExp(1);});
    $("#ui #addEXP10").click((e)=>{ G.addExp(10);});
    $("#ui #addEXP50").click((e)=>{ G.addExp(50);});

    $("#ui #enemy1").click((e)=>{ showEnemy(1);});
    $("#ui #enemy2").click((e)=>{ showEnemy(2);});

    var listener = function(e){
        e.clipboardData.setData("text/plain" , getCopyString());    
        e.preventDefault();
    }

    document.addEventListener("copy" , listener);

    let tm = setInterval(()=>{
        showEnemy(1);
        clearInterval(tm);
    }, 10)

}

export function devConsole() {
    $("#console").html(`lv: ${G.level}, exp: ${G.exp}, x:${G.player_x} y:${G.player_y} mapId:${G.currentMapId} mode:${G.currentMode}`);
    $("#tagForCopy").html(getCopyString(G.currentMapId));
}

function getCopyString(to = "行き先マップID") {
    return `{ x: ${G.player_x}, y: ${G.player_y}, goto: { name: '${to}', x: 0, y: 0 }},`;
}

export function showEnemy(id) {
    let op1 = { id: id }
    G.refresh(CONFIG.MODE_BATTLE, op1);
}