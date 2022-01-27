import G from './common/global.js'
import { CONFIG } from './common/config.js';

import { refreshMap } from './field/field.js'
// import { battle_init, battle_keyDown } from './battle/battle.js'
// import { story_init, story_keyDown } from './story/story.js'

export function develop() {
    $("#ui .btnField").click(()=>{
        G.refresh(CONFIG.MODE_FIELD);
    });
    $("#ui .btnBattle").click(()=>{
        G.refresh(CONFIG.MODE_BATTLE);
    });
    $("#ui .btnTalk").click(()=>{
        G.refresh(CONFIG.MODE_TALK);
    });
    $("#ui .btnMapWorld").click(()=>{
        refreshMap(CONFIG.START_MAP, 3, 5);
    });
    $("#ui .btnMapTown1").click(()=>{
        refreshMap("test2", 1, 1);
    });
}
