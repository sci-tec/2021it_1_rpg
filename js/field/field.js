import G from '../common/global.js'
import {CONFIG} from '../common/config.js'

import mapchip from './mapchip.js'

export function field_init() {
    G.currentMapId = CONFIG.START_MAP; // 初期マップ

    G.player = new Image();
    G.player.src = `images/player/player_D_1.png`;
    G.player.onload = () => {
        setScreenSize(G.currentMapId);
        refreshMap(CONFIG.START_MAP, CONFIG.START_POST_X, CONFIG.START_POST_Y);
    };

    G.playBGM("world");

}

export function field_keyDown(code) {
    let nextX = G.player_x;
    let nextY = G.player_y;
    switch(code) {
        case 37:
            nextX--;
            break;
        case 38:
            nextY--;
            break;
        case 39:
            nextX++;
            break;
        case 40:
            nextY++;
            break;
        default:
            break;
    }
    if(canMove(nextX, nextY)) {
        movePlayer(nextX,nextY);
    }
}

function setScreenSize(mapId) {

    let screenWidth = G.map[mapId].images[0].split(",").length * CONFIG.BLOCK_WIDTH;
    let screenHeight = G.map[mapId].images.length * CONFIG.BLOCK_HEIGHT ;

    //canvas
    let canvas = document.getElementById('canvasMap');
    canvas.width  = screenWidth;
    canvas.height = screenHeight;

    let canvas2 = document.getElementById('canvasChar');
    canvas2.width  = screenWidth;
    canvas2.height = screenHeight;

    $("#world").css("width", screenWidth + "px");
    $("#world").css("height", screenHeight + "px");
}

export function refreshMap(mapId, pX=1, pY=1) {
    G.currentMapId = mapId;
    setScreenSize(G.currentMapId);
    for( let y in G.map[mapId].images) {
        let line = G.map[mapId].images[y];
        let arr = line.split(",");
        for(let x = 0; x<arr.length; x++) {
            putImage(arr[x], x, y);
        }
    }

    if(G.map[mapId].sounds) {
        // playBGM(G.map[mapId].sounds.bgm.id);
    }

    setPlayer(pX, pY);
}

function putImage(imageId, x, y) {
    const chara = new Image();
    chara.src = `images/map/${imageId}.png`;
    chara.onload = () => {
        G.ctx.map.drawImage(chara, x*CONFIG.BLOCK_WIDTH, y*CONFIG.BLOCK_HEIGHT, CONFIG.BLOCK_WIDTH, CONFIG.BLOCK_HEIGHT);
    };
}

function movePlayer(x, y) {
    setPlayer(x, y)
    checkEvent(x, y);
}

function setPlayer(x, y) {
    G.player_x = x;
    G.player_y = y;
    G.ctx["char"].clearRect(0, 0, G.ctx["char"].canvas.width, G.ctx["char"].canvas.height);
    G.ctx["char"].drawImage(G.player, x*CONFIG.BLOCK_WIDTH, y*CONFIG.BLOCK_HEIGHT, CONFIG.BLOCK_WIDTH, CONFIG.BLOCK_HEIGHT);
}

function getBlock(currentMapId,x,y) {
    try{
        // let id = G.map[currentMapId].images[y][x];
        let id = G.map[currentMapId].images[y].split(",")[x];
    } catch {
        return null;
    }
    return mapchip[G.map[currentMapId].images[y].split(",")[x]];
}

function canMove(x,y) {
    let block = getBlock(G.currentMapId,x,y);
    if(block == null) return false;
    return !block.isBlock;
}

function checkEvent(x, y) {

    if(!G.map[G.currentMapId]) return
    if(!G.map[G.currentMapId].events) return

    for(let i=0; i<G.map[G.currentMapId].events.length; i++) {
        let event = G.map[G.currentMapId].events[i];
        if(event.x == x && event.y == y) {
            if(event.enemy) {
                let option = {
                    value: event.enemy
                }
                G.refresh(CONFIG.MODE_BATTLE, option)
            }
            if(event.goto) {
                refreshMap(event.goto.name, event.goto.x, event.goto.y);
                G.playSE("step_slow");
            }
            if(event.talk) {
                // refreshMap(event.goto.name, event.goto.x, event.goto.y);
                // G.playSE("step_slow");
                let option = {
                    value: event.talk
                }
                G.refresh(CONFIG.MODE_TALK, option)
            }
        }

    }

}

