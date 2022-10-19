import G from './common/global.js'
import { CONFIG } from './common/config.js'

import { field_init, field_keyDown } from './field/field.js'
import { battle_init, battle_keyDown, addExp } from './battle/battle.js'
import { story_init, story_keyDown } from './story/story.js'
import { talk_init, talk_keyDown } from './talk/talk.js'
import { shop_init, shop_keyDown,shop_show_message } from './shop/shop.js'

import { develop, devConsole } from './_develop.js'

$(function(){
    develop();
    init();
    devConsole();
});

function init() {
    G.currentMode = CONFIG.MODE_FIELD; // ゲーム開始時はフィールド
    switch(G.currentMode) {
        case CONFIG.MODE_STORY: story_init(); break;
        case CONFIG.MODE_FIELD: field_init(); break;
        case CONFIG.MODE_BATTLE: battle_init(); break;
        case CONFIG.MODE_TALK: talk_init(); break;
        default : break;
    }
    G.refresh = refresh; // リフレッシュ関数をどこからでも使えるように
    G.addExp = addExp;
    G.devConsole = devConsole;
    refresh();

    addEventListener( "keydown", keydown );

    $("#mat_title .container").click(()=>{
        $("#mat_title").remove();
        // story_init();
    });

}

function keydown( event ) {
    switch(G.currentMode) {
        case CONFIG.MODE_STORY: story_keyDown(event.keyCode); break;
        case CONFIG.MODE_FIELD: field_keyDown(event.keyCode); break;
        case CONFIG.MODE_BATTLE: battle_keyDown(event.keyCode); break;
        case CONFIG.MODE_TALK: talk_keyDown(event.keyCode); break;
        default : break;
    }
    devConsole();
}

function refresh(mode = G.currentMode, option = {}) {

    G.currentMode = mode;

    $("#talk").hide();
    $("#mat").hide();
    $("#mat_shop").hide();
    $("#mat_story").hide();
    // console.log("refresh", option, G.currentMode);
    switch(G.currentMode) {
        case CONFIG.MODE_STORY: 
            story_init(option);
            break;
        case CONFIG.MODE_FIELD: 
            // field_init(option)
        break;
        case CONFIG.MODE_BATTLE: 
            battle_init(option)
            break;
        case CONFIG.MODE_TALK: 
            talk_init(option)
            break;
        case CONFIG.MODE_SHOP: 
            shop_init(option)
            break;
        default : 
            break;
    }
}


