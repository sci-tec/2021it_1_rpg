import G from '../common/global.js'
import { CONFIG } from '../common/config.js';

let option;
let mode = null;
let texts;
let currentPage = 0;

export function talk_init(opt) {

    $("#talk").show();

    option = opt;

    G.playBGM("siro");

    switch(option.value.type) {
        case "talk" :
            mode = "read";
            currentPage = 0;
            texts = G.DATA.TALK[option.value.id].text
            talk(0);            
            break;
        case "shop" :
            shop();            
            break;
        default:
            break;
    }

}

export function talk_keyDown(code) {

    switch(mode) {
        case "read" :
            switch(code) {
                case 32:
                    currentPage++;
                    talk(currentPage);
                    break;
                default:
                    break;
            }
            break;
        case "select" :
            switch(code) {
                case 32:
                    console.log("SPACE"); // space key
                    break;
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
            break;
    }


}

function talk(page) {
    if(texts.length > page) {
        let text = "";
        for( let i=0; i<texts[page].length; i++) {
            text += texts[page][i] + "<br>";
        }
        $("#talk #message").html(text);
    } else {
        G.refresh(CONFIG.MODE_FIELD)
    }

}



function shop() {

}