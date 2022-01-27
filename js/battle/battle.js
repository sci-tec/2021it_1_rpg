import G from '../common/global.js'

export function battle_init(option) {
    $("#mat").show();
    console.log(option);
    G.playBGM("zakosen");
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
