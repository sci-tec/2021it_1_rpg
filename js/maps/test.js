export default {
    images: [
        // "aaaaa","BBBBB","BBBBB",
        "aa,aa,aa",
        "aa,aa,aa",
        "aa,ab,aa",
    ],
    sounds: {
        bgm: {
            id: "world"
        }        
    },
    events: [
        {
            x: 6, y: 0, 
            goto: { name: "world", x: 3, y: 1 }
        }
    ]
}
