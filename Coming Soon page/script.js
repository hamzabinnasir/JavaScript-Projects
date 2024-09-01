const countDownDate = new Date("April 14, 2025 00:00:00").getTime();
    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // DOM MANIPULATION
        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = seconds;

        if (distance < 0) {
            document.querySelector("#days").innerHTML = "00";
            document.querySelector("#hours").innerHTML = "00";
            document.querySelector("#minutes").innerHTML = "00";
            document.querySelector("#seconds").innerHTML = "00";
        }
    }, 1000);