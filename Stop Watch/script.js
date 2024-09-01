 // DOM MANIPULATION
 const displayTime = document.querySelector("#time");
 const resetBtn = document.querySelector("#reset");
 const startBtn = document.querySelector("#start");
 const stopBtn = document.querySelector("#stop");

 let timer = 0;

 // COMBINED ARRAY OF SECONDS MINUTTES AND HOURS
 let [hours, minutes, seconds] = [0, 0, 0];
 const stopWatch = () => {
     seconds++;
     if (seconds === 60) {
         seconds = 0;
         minutes++
     }
     if (minutes === 60) {
         minutes = 0;
         hours++;
     }
     // DISPLAY TIME IN TWO DIGITS
     let h = hours < 10 ? "0" + hours : hours;
     let m = minutes < 10 ? "0" + minutes : minutes;
     let s = seconds < 10 ? "0" + seconds : seconds;
     displayTime.innerHTML = h + " : " + m + " : " + s;
 }


 startBtn.addEventListener("click", () => {
     startWatch();
 });


 // START STOPWATCH
 const startWatch = () => {
     if (timer !== null) {
         clearInterval(timer);
     }
     timer = setInterval(stopWatch, 1000);
 }


 // STOPWATCH
 stopBtn.addEventListener("click", () => {
     watchStop();
 });

 const watchStop = () => {
     clearInterval(timer);
 }

 // RESETWATCH
 resetBtn.addEventListener("click", () => {
     resetWatch();
 });

 const resetWatch = () => {
     clearInterval(timer);
     [hours, minutes, seconds] = [0,0,0];
     displayTime.innerHTML = "00 : 00 : 00";
 }


