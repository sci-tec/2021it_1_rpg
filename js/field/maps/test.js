export default {
    images: [
        "aa,aa,ca,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa",
        "ab,aa,ab,aa,ab,aa,ab",
        "aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa",
        "aa,ab,aa,ab,aa,ab,aa"
    ],
    sounds: {
        bgm: {
            id: "world"
        }        
    },
    events: [
        {
            x: 2, y: 0, 
            goto: { name: "test2", x: 4, y: 3 }
        },
        {
            x: 1, y: 6, 
            enemy: { id: 1 }
        },
        {
            x: 0, y: 3, 
            talk: { type: "talk", id: 1 }
        },
        {
            x: 2, y: 3, 
            talk: { type: "talk", id: 2 }
        },
        {
            x: 5, y: 6, 
            talk: { type: "shop", id: 1 }
        }
    ]
}
