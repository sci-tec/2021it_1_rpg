export default {
    images: [
        "aaaaaaaaaaaaaaa",
        "BBBBBBBBBBBBBBB",
        "BBBBBBBBBBBBBBB",
        "BBBBBDDDDDBBBBB",
        "DDDDDDDDDDDDDDD",
        "DDDDDDDFDDDDDDD",
        "DDDDDDDDDDDDDDD",
        "ZZZZZDDDDDZZZZZ",
        "YYYYYYYYYYYYYYY",
        "ZZZZZZZZZZZZZZZ",
        "YYYYYYYYYYYYYYY"
    ],
    sounds: {
        bgm: {
            id: "world"
        }        
    },
    events: [
        {
            x: 14, y: 4, 
            goto: { name: "world", x: 3, y: 1 }
        },
        {
            x: 14, y: 5, 
            goto: { name: "world", x: 3, y: 1 }
        },
        {
            x: 14, y: 6, 
            goto: { name: "world", x: 3, y: 1 }
        },
        {
            x: 0, y: 4, 
            goto: { name: "world", x: 3, y: 1 }
        },
        {
            x: 0, y: 5, 
            goto: { name: "world", x: 3, y: 1 }
        },{
            x: 0, y: 6, 
            goto: { name: "world", x: 3, y: 1 }
        }
    ]
}
