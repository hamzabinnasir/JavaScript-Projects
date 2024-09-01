// DOM MANIPULATION
const submitBtn = document.querySelector("#submit");
const card = document.querySelector(".card");
const okBtn = document.querySelector("#okBtn");


// SUBMIT BUTTON
submitBtn.addEventListener("click", () => {
    openPopUp();
});

const openPopUp = () => {
    card.classList.add("open-popup");
};

// OK BUTTON
okBtn.addEventListener("click" , ()=>{
    card.classList.remove("open-popup");
});


// okBtn.addEventListener("click", () => {
//     closePopup();
// });

// const closePopup = () => {
//     card.classList.remove("open-popup");
// };