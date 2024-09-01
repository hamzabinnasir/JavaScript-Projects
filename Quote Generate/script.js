const apiURL = "https://api.quotable.io/random";

// DOM MANIPULATION
const nextBtn = document.querySelector("#quoteBtn");
const tweetBtn = document.querySelector("#tweet");

const quote = document.querySelector("#quote");
const author = document.querySelector("#name");

nextBtn.addEventListener("click", () => {
    gettingQuoate();
})

const gettingQuoate = async () => {
    let response = await fetch(apiURL);
    let data = await response.json();
    console.log(data);


    // DOM MANIPULATION
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}


tweetBtn.addEventListener("click", () => {
    gotoTwitter();
});

const gotoTwitter = () => {
    window.open("https://developers.facebook.com/docs/plugins/" + quote.innerHTML + " ---by " + author.innerHTML, "Tweet window", "width = 600,height = 300");
};
