export default {
    images: [
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "ab,aa,ab,aa,ab,aa,ab,aa",
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "aa,ab,aa,ab,aa,ab,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "aa,ca,aa,ca,aa,ca,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "aa,ca,aa,ca,aa,ca,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa,aa",
        "aa,ca,aa,ca,aa,ca,aa,aa",
    ],
    sounds: {
        bgm: {
            id: "world"
        }        
    },
    events: [
        /*
        **** 地図移動 ****
        マップ移動をしたい場合は、これを参考に。
        左から順に、
        x,y: いまいる地図内の座標で、そこに立った時に移動させたい（ドアの場所など)
        goto内の name: 行き先地図ID
        goto内の x,y: 行き先で表示させる座標
        */
        { x: 1, y: 7, goto: { name: "test2", x: 4, y: 3 } },
        { x: 1, y: 9, goto: { name: "forest", x: 4, y: 3 } },
        { x: 1, y: 11, goto: { name: "mura", x: 14, y: 10 } },
        { x: 3, y: 7, goto: { name: "ouza", x: 4, y: 3 } },
        { x: 3, y: 9, goto: { name: "sironaibu", x: 4, y: 3 } },
        { x: 3, y: 11, goto: { name: "tika", x: 2, y: 3 } },
        { x: 5, y: 7, goto: { name: "urarozi", x: 4, y: 3 } },
        { x: 5, y: 9, goto: { name: "world", x: 20, y: 10 } },
        { x: 5, y: 11, goto: { name: "zyoukamati", x: 16, y: 15 } },
        
        /*
        **** バトル ****
        敵を表示させたい時に使用。
        左から順に、
        x,y: いまいる地図内の座標で、そこに立った時に敵を表示（中ボスなど）
        enemy内の id: 敵ID
        */
        { x: 1, y: 4, enemy: { id: 1 } },

        /*
        **** 会話 ****
        会話させたい時に使用。
        左から順に、
        x,y: いまいる地図内の座標で、そこに立った時に会話を表示
        talk内のid: 会話ID
        */
        { x: 0, y: 1, talk: { type: "talk", id: 1 } },
        { x: 2, y: 1, talk: { type: "talk", id: 2 } },

        /*
        
        ★★★ テスト中 ★★★

        **** 選択肢(ショップ等) ****
        お店を表示させたい時に使用。
        左から順に、
        x,y: いまいる地図内の座標で、そこに立った時に選択式会話を表示
        talk内のid: 会話ID
        */
        { x: 5, y: 4, talk: { type: "shop", id: 1 } }

    ]
}
