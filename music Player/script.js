const progress = document.querySelector("#progress");
const audio = document.querySelector("#myAudio");
const playIcon = document.querySelector("#play");


// SETTING AUDIO
audio.onloadedmetadata = function () {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
};


playIcon.addEventListener("click", () => {
    playStop();
});

const playStop = () => {
    if (playIcon.classList.contains("fa-pause")) {
        audio.pause();
        playIcon.classList.add("fa-circle-play");
        playIcon.classList.remove("fa-pause");
    }
    else {
        audio.play();
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-circle-play");
    }
};

if (audio.play()) {
    setInterval(() => {
        progress.value = audio.currentTime;
    }, 500)
};

progress.onchange = function(){
    audio.play();
    audio.currentTime = progress.value;
    playIcon.classList.add("fa-pause");
    playIcon.classList.remove("fa-circle-play");
};