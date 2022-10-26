import G from '../common/global.js'
import { CONFIG } from '../common/config.js';

export function shop_init(option) {
    $("#mat_shop").show();
    // console.log(option);
    // G.playBGM("zakosen");
     addEventListeners();
     $("#money .Lv").html(`Lv: ${G.level}`);

}
function addEventListeners() {
    let img = ["images/soubi/icon001.png", "images/soubi/icon003.png", "images/soubi/icon008.png", "images/soubi/icon018.png", "images/soubi/icon054.png", "images/soubi/icon057.png", "images/soubi/icon066.png", "images/soubi/icon072.png", "images/soubi/icon087.png"];
    $("#itemlist .item .buy").click((e)=>{
        let buyid = e.target.id.slice(-1);
        console.log("test");
        $("#upper_right #itemimage img").attr("src", img[buyid] );
        

        shop_show_message(`~~~をかいますか？<br>
        <h1>
            <a href="#" class="btn">はい</a>
            <a href="#" class="btn">いいえ</a>
        </h1>`)
    })
   

    // addEventListeners();
    let greeting ="いらっしゃいませ";
    shop_show_message(greeting);

}


export function shop_keyDown(code) {
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
 export function shop_show_message(msg){
     $("#shop #message").html(msg);
 }

 
 
 //メッセージ呼び出しの関数
 export function shop_show_message_call(msgc) {
     $("#shop #message").click(function(){shop_show_message(msgc)})
 }
 
 

