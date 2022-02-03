import G from '../common/global.js'
import { CONFIG } from '../common/config.js';

export function battle_init(option) {
    $("#mat").show();
    console.log(option);
    G.playBGM("zakosen");
    addEventListeners();
}


function addEventListeners() {
    $("#battle_command .command").click((e)=>{
        behaviour(e.currentTarget);
    });
}

function behaviour(target) {
    let soundId = $(target).data("se");
    G.playSE(soundId);
    switch(soundId) {
        case "escape" :

            let tm = setInterval(()=>{
                $("#mat").hide();
                clearInterval(tm);
                G.refresh(CONFIG.MODE_FIELD);
                G.playBGM("world");
            }, 1000);

            break;
        default:
            // $("#mat").hide();
            break;
    }
}



export function battle_keyDown(code) {
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
            console.log("down")
            break;
        default:
            break;
    }
}

export const BUTTLE = {
    menus: {
        left: {
            buttle_main: {
                items: [
                    { text: "たたかう", action: { type: "left_menu", value: "buttle_sub" } },
                    { text: "どうぐ", action: { type: "left_menu", value: "item" } },
                    { text: "にげる", action: { type: "func", value: "escape" } },
                ]                
            },
            buttle_sub: {
                items: [
                    { text: "こうげき", action: { type: "attack", value: "simple" } },
                    { text: "とくぎ", action: { type: "right_menu", value: "sub_attack" } },
                    { text: "まほう", action: { type: "main", value: "magic_attack" } },
                    { text: "ぼうぎょ", action: { type: "menu", value: "item" } },
                ]                
            },
        },
        right: {
            sub_attack: {
                items: [
                    { text: "なぐる", action: { type: "attack", value: "simple" } },
                    { text: "ける", action: { type: "attack", value: "simple" } },
                    { text: "きりつける", action: { type: "attack", value: "simple" } },
                    { text: "よくきれる", action: { type: "attack", value: "simple" } },
                ]
            },
            item: {
                items: [
                    { text: "やくそう", action: { type: "heal", value: "status" } },
                    { text: "まほうのびん", action: { type: "heal", value: "status" } },
                ]
            },
            magic_attack: {
                items: [
                    { text: "ファイアーボール", action: {type: "magic", value: "simple" } },
                    { text: "アイスアロー", action: {type: "magic", value: "simple" } },
                    { text: "サンダー", action: {type: "magic", value: "simple" } },
                    { text: "ヒール", action: {type: "heal", value: "status" } },
                ]
            }
        }
    }
}