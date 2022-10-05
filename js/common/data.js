import TALK from './talk/talk.js'
import STORY from './data/storyContents.js'

export default {
    TALK: TALK,
    STORY: STORY,

    LEVELS: [

        { lv:1, exp: 0, hp: 20, mp: 5, ap: 2 },
        { lv:2, exp: 5, hp: 30, mp: 10, ap: 3 },
        { lv:3, exp: 15, hp: 35, mp: 15, ap: 5 },
        { lv:4, exp: 40, hp: 50, mp: 20, ap: 7 },
        { lv:5, exp: 100, hp: 63, mp: 25, ap: 10 },
        { lv:6, exp: 165, hp: 70, mp: 30, ap: 13 },
        { lv:7, exp: 270, hp: 80, mp: 35, ap: 15 },
        { lv:8, exp: 370, hp: 85, mp: 40, ap: 0 }, // W_WP 不明
        { lv:9, exp: 470, hp: 90, mp: 45, ap: 0 }, // W_WP 不明
        { lv:10, exp: 600, hp: 100, mp: 50, ap: 0 }, // W_WP 不明
    ],

    WEAPON: {
        w01: { name: "鉄の棒", image: "w01.png", point: 3 },
        w02: { name: "錆びた剣", image: "w02.png", point: 5 },
        w03: { name: "鉄の剣", image: "w03.png", point: 8 },
        w04: { name: "なんか強い剣", image: "w04.png", point: 10 },
    },
    ARMER: {
        a01: { name:"布切れ",image:"a01.png",pint:0},
        a02: { name:"錆びた　頭",image:"a02.png",pint:3},
        a03: { name:"錆びた　胴",image:"a03.png",pint:3},
        a04: { name:"錆びた　足",image:"a04.png",pint:3},
        a05: { name:"鉄の　頭",image:"a05.png",pint:5},
        a06: { name:"鉄の　胴",image:"a06.png",pint:5},
        a07: { name:"鉄の　足",image:"a07.png",pint:5},
        a08: { name:"なんか強い　頭",image:"a08.png",pint:7},
        a09: { name:"なんか強い　胴",image:"a09.png",pint:7},
        a10: { name:"なんか強い　足",image:"a10.png",pint:7},
    },
    MAGIC: {
        m01: { name:"ファイアーボール",image:"m01.png",pint:5,point2:7},
        m02: { name:"アイスアロー",image:"m02.png",pint:8,point2:15},
        m03: { name:"サンダー",image:"m03.png",pint:12,point2:20},
    },
    ITEM: {
        i01: { name:"薬草",image:"item_yakuso.png",pint:"15~20randum",price: 7},
        i02: { name:"魔法の瓶",image:"item_magic.png",pint:"10MP回復",price: 20},
    },
    ENEMY: {
        e01: { name:"トレント",image:"e01.png",hitpint:"12",at: 3},
        e02: { name:"虫",image:"e02.png",hitpint:"20",at: 5},
        e03: { name:"スライム",image:"e03.png",hitpint:"35",at: 10},
        e04: { name:"ねず",image:"e04.png",hitpint:"65",at: 12},
        e05: { name:"ロボ",image:"e05.png",hitpint:"97",at: 15},
        e98: { name:"王",image:"e98.png",hitpint:"15",at: 3},
        e99: { name:"犬",image:"e99.png",hitpint:"200",at: 0.645833333333333},
    },
    ATTACK: {
        at01: { name:"殴る", image: "at01.png", point: 3 },
        at02: { name:"斬りつけようとする", image: "at02.png", point: 5 },
        at03: { name:"切りつける", image: "at03.png", point: 8 },
        at04: { name:"よく切れる", image: "at04.png", point: 10 },
    },


    menus: {
        left: {
            battle_main: {
                items: [
                    { text: "たたかう", action: { type: "left_menu", value: "battle_sub" } },
                    { text: "どうぐ", action: { type: "left_menu", value: "item" } },
                    { text: "にげる", action: { type: "func", value: "escape" } },
                ]                
            },
            battle_sub: {
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
    },
}


