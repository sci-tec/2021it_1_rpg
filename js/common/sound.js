
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
        step_slow: {
            file: 'SE/step_slow.wav'
        }
    }
}

export function playSE(id) {
    if(se != null) {
        stopSE()
    }
    let filepath = BASE_DIR + sounds.se[id].file;
    se = new Audio(filepath);
    se.play()
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

    audio.play()
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


