import map from './map.js'
import images from './image.js'
import { playBGM, playSE } from './sound.js'

const BLOCK_WIDTH = 48;
const BLOCK_HEIGHT = 48;

const START_MAP = 'test';
const START_POST_X = 0;
const START_POST_Y = 0;

let ctx = {
    map: document.querySelector("#canvasMap").getContext("2d"),
    char: document.querySelector("#canvasChar").getContext("2d")
}

let player;
let player_x = 0;
let player_y = 0;

let currentMapId = START_MAP;

$(function(){
    init();
    develop();
    playBGM("step_slow");
});

function develop() {
    $("#mat").hide();
    $("#ui .btnOpen").click(()=>{
        $("#mat").show();
    });
    $("#ui .btnClose").click(()=>{
        $("#mat").hide();
    });
    $("#ui .btnMapWorld").click(()=>{
        refreshMap(START_MAP, 3, 5);
    });
    $("#ui .btnMapTown1").click(()=>{
        refreshMap("castle", 1, 1);
    });
}

function init() {

    // 画像読み込み
    let image_src = {};

    // 画像ファイルから画像を読み込んでオブジェクトに追加
    for( let i in images) {
        // console.log(i);
        const img = new Image();
        img.src = `images/map/${images[i].img}`;
        image_src[i.id] = img;
        image_src.a = img;
    }

    player = new Image();
    player.src = `images/player/player_D_1.png`;
    player.onload = () => {
        setScreenSize();
        refreshMap(START_MAP, START_POST_X, START_POST_Y);
    };

    //イベントリスナー
    addEventListener( "keydown", keydownfunc );

}

function refreshMap(mapId, pX=1, pY=1) {
    currentMapId = mapId;
    setScreenSize();
    for( let y in map[mapId].images) {
        let line = map[mapId].images[y];
        // for( let x in line) {
        //     putImage("map", line[x], x, y);
        // }

        //         "aa,aa,aa",
        let arr = line.split(",");
        for(let x = 0; x<arr.length; x++) {
            putImage(arr[x], x, y);
        }
    }

    if(map[mapId].sounds) {
        // playBGM(map[mapId].sounds.bgm.id);
    }

    movePlayer(pX, pY);
}

function setScreenSize() {

    let screenWidth = map[currentMapId].images[0].length * BLOCK_WIDTH;
    let screenHeight = map[currentMapId].images.length * BLOCK_HEIGHT;

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

function putImage(imageId, x, y) {
    const chara = new Image();
    chara.src = `images/map/${imageId}.png`;
    chara.onload = () => {
        // ctx["map"].drawImage(chara, x*BLOCK_WIDTH, y*BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
        ctx.map.drawImage(chara, x*BLOCK_WIDTH, y*BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
    };
}

function movePlayer(x, y) {
    player_x = x;
    player_y = y;
    ctx["char"].clearRect(0, 0, ctx["char"].canvas.width, ctx["char"].canvas.height);
    ctx["char"].drawImage(player, x*BLOCK_WIDTH, y*BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
    // console.log(x, y);
    checkEvent(x, y);
}

function keydownfunc( event ) {
	let key_code = event.keyCode;
    let nextX = player_x;
    let nextY = player_y;
	if( key_code === 37 ) nextX--;
	if( key_code === 38 ) nextY--;
	if( key_code === 39 ) nextX++;
	if( key_code === 40 ) nextY++;
    if(canMove(nextX, nextY)) {
        movePlayer(nextX,nextY);
    }
}

function canMove(x,y) {
    let block = getBlock(x,y);
    if(block == null) return false;
    return !block.isBlock;
}

function getBlock(x,y) {
    try{
        // let id = map[currentMapId].images[y][x];
        let id = map[currentMapId].images[y].split(",")[x];
    } catch {
        return null;
    }
    return images[map[currentMapId].images[y].split(",")[x]];
}

function checkEvent(x, y) {

    if(!map[currentMapId]) return
    if(!map[currentMapId].events) return

    for(let i=0; i<map[currentMapId].events.length; i++) {
        let event = map[currentMapId].events[i];

        if(event.x == x && event.y == y) {
            if(event.enemy) {
                $("#mat").show();
                playBGM("zakosen");
            }
            if(event.goto) {
                refreshMap(event.goto.name, event.goto.x, event.goto.y);
                playSE("step_slow");
                return;
            }
        }

    }

}