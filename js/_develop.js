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

    $("#ui #msg_id1").click((e)=>{ showStory(1); e.currentTarget.blur() });
    $("#ui #msg_id2").click((e)=>{ showStory(2); e.currentTarget.blur() });

    $("#ui #shop1").click((e)=>{ showShop(1); e.currentTarget.blur() });
    $("#ui #menu1").click((e)=>{ showMenu(1); e.currentTarget.blur() });

    var listener = function(e){
        e.clipboardData.setData("text/plain" , getCopyString());    
        e.preventDefault();
    }

    document.addEventListener("copy" , listener);

    // let tm = setInterval(()=>{
    //     showEnemy(1);
    //     clearInterval(tm);
    // }, 10)

}

export function devConsole() {
    $("#console").html(`lv: ${G.level}, exp: ${G.exp}, x:${G.player_x} y:${G.player_y} mapId:${G.currentMapId} mode:${G.currentMode}`);
    $("#tagForCopy").html(getCopyString(G.currentMapId));
}

function getCopyString(to = "行き先マップID") {
    return `{ x: ${G.player_x}, y: ${G.player_y}, goto: { name: '${to}', x: 0, y: 0 }},`;
}

function showShop(id) {
    let op1 = { id: id }
    console.log(op1);
    G.refresh(CONFIG.MODE_SHOP, op1);
}

function showMenu(id) {
    let op1 = { id: id }
    console.log(op1);
    G.refresh(CONFIG.MODE_MENU, op1);
}

function showStory(id) {
    let op1 = { id: id }
    console.log(op1);
    G.refresh(CONFIG.MODE_STORY, op1);
}

export function showEnemy(id) {
    let op1 = { id: id };
    G.refresh(CONFIG.MODE_BATTLE, op1);
}

