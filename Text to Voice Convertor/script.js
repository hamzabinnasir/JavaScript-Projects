    // DOM MANIPULATION
    const message = document.querySelector("#msg");
    const listenBtn = document.querySelector("#listen");
    const voiceSelect = document.querySelector("#select");



    // SPEAKING WINDOW
    const speech = new SpeechSynthesisUtterance();
    listenBtn.addEventListener("click" , ()=>{
        speech.text = message.value;
        window.speechSynthesis.speak(speech);
    });

    // EMBEDDING ALL THE VOICES AVAILABLE IN THE WINDOW TO SELECT COMMAND
    let voices = [];
    window.speechSynthesis.onvoiceschanged = () =>{
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];

        voices.forEach((voice , i)=>{
            voiceSelect.options[i] = new Option(voice.name , i)
        });
    };


// CHANGING VOICES
voiceSelect.addEventListener("change" , ()=>{
    speech.voice = voices[voiceSelect.value];
});