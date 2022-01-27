export default {
    images: [
        "aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,aa,aa,aa",
        "aa,aa,aa,aa,ab,aa,aa",
    ],
    sounds: {
        bgm: {
            id: "world"
        }        
    },
    events: [
        {
            x: 4, y: 3, 
            goto: { name: "test", x: 2, y: 0 }
        }
    ]
}
