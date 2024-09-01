const apiKey = "504c4fba980ea8c2103a3c307b0e96aa";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector("#searchBtn");
const searchBox = document.querySelector("#searchBox");
const weatherImg = document.querySelector("#weatherImg");
// const parent = document.querySelector(".parent")

const checkWeather = async (city) => {
    let response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".parent").style.display = "none";
    }
    else {
        let data = await response.json();
        console.log(data);

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherImg.src = "images/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherImg.src = "images/rain.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherImg.src = "images/drizzle.png";
        }
        else if (data.weather[0].main === "Mist") {
            weatherImg.src = "images/mist.png";
        }
        else if (data.weather[0].main === "Snow") {
            weatherImg.src = "images/snow.png";
        }

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".parent").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    //    parent.style.display = "block";
});