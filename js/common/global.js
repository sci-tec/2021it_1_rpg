import map from '../field/map.js'
import mapchip from '../field/mapchip.js'
import { playBGM, playSE } from './sound.js'
import data from './data.js'

export default {
    ctx: {
        map: document.querySelector("#canvasMap").getContext("2d"),
        char: document.querySelector("#canvasChar").getContext("2d")
    },
    DATA: data,
    player: null,
    player_x: 0,
    player_y: 0,
    direction: "",
    currentMapId: "",
    currentMode: "",
    mapchips: mapchip,
    map: map,
    playBGM: playBGM,
    playSE: playSE,
    refresh: null
};



