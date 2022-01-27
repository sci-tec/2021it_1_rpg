import G from './common/global.js'
import { CONFIG } from './common/config.js'

import { field_init, field_keyDown } from './field/field.js'
import { battle_init, battle_keyDown } from './battle/battle.js'
import { story_init, story_keyDown } from './story/story.js'
import { talk_init, talk_keyDown } from './talk/talk.js'

import { develop } from './_develop.js'

$(function(){
    develop();
    init();
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
    refresh();

    addEventListener( "keydown", keydown );
}

function keydown( event ) {
    switch(G.currentMode) {
        case CONFIG.MODE_STORY: story_keyDown(event.keyCode); break;
        case CONFIG.MODE_FIELD: field_keyDown(event.keyCode); break;
        case CONFIG.MODE_BATTLE: battle_keyDown(event.keyCode); break;
        case CONFIG.MODE_TALK: talk_keyDown(event.keyCode); break;
        default : break;
    }
}

function refresh(mode = G.currentMode, option = {}) {

    G.currentMode = mode;

    $("#talk").hide();
    $("#mat").hide();
    // console.log("refresh", option, G.currentMode);
    switch(G.currentMode) {
        case CONFIG.MODE_STORY: 
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
        default : 
            break;
    }
}


