import G from '../common/global.js'
import { CONFIG } from '../common/config.js';


let enemyId;
let option;


export function battle_init(op) {
    addEventListeners();
    option = op;
    refreshBattleScene(option);
}

function refreshBattleScene(op) {
    let dom = getScene();
    $("#mat").html(dom).show();
    console.log(op);
    G.playBGM("zakosen");
}


function getScene() {

    let dom = `
        <div id="playerInfo">
            ゆうしゃ<br>
            LV: ${G.level}<br>
            HP: ${G.hp}<br>
            MP: ${G.mp}<br>
        </div>
        <div id="battle" class="screensize">
            <div id="enemy">
                <img src="images/enemy/31.png" />
            </div>
            <div id="message">
                ボスがあらわれた！<br>
                ５５５5ポイントのダメージを与えた
            </div>
        
            <div id="battle_command">
                <div class="commands">
                    <div id="cmd1" data-se="ken_atk3" class="command">たたかう</div>
                    <div id="cmd2" data-se="Openmenu" class="command">どうぐ</div>
                    <div id="cmd3" data-se="escape" class="command">にげる</div>
                </div>
            </div>
            <!-- <div id="battle_command">
                こうげき<br>
                とくぎ<br>
                まほう<br>
                ぼうぎょ<br>
            </div> -->
        </div>`;

    return dom;

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

export let addExp = (num) => {
    let lv_old = getLevelByExp(G.exp);
    G.exp = Math.min(G.exp + num, G.DATA.LEVELS[G.DATA.LEVELS.length-1].exp);
    G.level = getLevelByExp(G.exp);
    G.devConsole();
    if(lv_old != G.level) {
        G.playSE("kaihuku");
    }
}

function getLevelByExp(num) {
    for(let i=0; i<G.DATA.LEVELS.length; i++) {
        if(G.DATA.LEVELS[i].exp > num) {
            return G.DATA.LEVELS[i-1].lv;
        }
    }
    return G.DATA.LEVELS[G.DATA.LEVELS.length-1].lv;
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