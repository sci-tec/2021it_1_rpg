
let audio, se;

const BASE_DIR = "../sounds/";

const sounds = {
    bgm: {
        world: {
            file: 'BGM/fi-rudo-BGM-094.mp3'
        },
        world2: {
            file: 'BGM/fi-rudo,mori-BGM-128.mp3'
        },
        zakosen: {
            file: 'BGM/zakosen_BGM.mp3'
        },
        siro: {
            file: 'BGM/siro-BGM-070.mp3'
        },
    },
    se: {
        damegeuke: { file: 'SE/damegeuke.mp3' },
        escape: { file: 'SE/escape.mp3' },
        honoomahou: { file: 'SE/honoomahou.mp3' },
        kaihuku: { file: 'SE/kaihuku.mp3' },
        kaihukumahou: { file: 'SE/kaihukumahou.mp3' },
        kaminarimahou: { file: 'SE/kaminarimahou.mp3' },
        kasoruidou: { file: 'SE/kasoruidou.mp3' },
        ken_atk3: { file: 'SE/ken_atk3.mp3' },
        Kettei: { file: 'SE/Kettei.mp3' },
        koorimahou: { file: 'SE/koorimahou.mp3' },
        kyanseru: { file: 'SE/kyanseru.mp3' },
        mahou1: { file: 'SE/mahou1.mp3' },
        mahou2: { file: 'SE/mahou2.mp3' },
        Openmenu: { file: 'SE/Openmenu.mp3' },
        setteki: { file: 'SE/setteki.mp3' },
        step_slow: { file: 'SE/step_slow.wav' },
        sudekougeki: { file: 'SE/sudekougeki.mp3' },
        ziko: { file: 'SE/ziko.mp3' },
    }
}

export function playSE(id) {
    if(se != null) {
        stopSE()
    }
    let filepath = BASE_DIR + sounds.se[id].file;
    se = new Audio(filepath);
    // se.play()
}
export function playBGM(id) {
    if(audio) {
        stopBGM();
    }
    let filepath = BASE_DIR + sounds.bgm[id].file;
    audio = new Audio(filepath);

    // loop処理
    if (typeof audio.loop == 'boolean'){
        audio.loop = true;
    } else {
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    // audio.play()
}
export function stopBGM() {
    // audio.stop();
    audio.pause();
    audio.currentTime = 0;
}
export function stopSE() {
    // se.stop();
    se.pause();
    se.currentTime = 0;
}


