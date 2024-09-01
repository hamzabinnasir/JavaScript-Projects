const searchBox = document.querySelector("#searchBox");
const message = document.querySelector("#message");
const para = document.querySelector(".para");
const inputBox = document.querySelector(".inputBox");
const arrowBtn = document.querySelector("#arrow");


// let weakMsg = "Password is weak";
// let mediumMsg = "Password is medium";
// let strongMsg = "Password is strong";


searchBox.addEventListener("input", () => {
    passwordStr();
});

const passwordStr = () => {
    if (searchBox.value.length > 0) {
        para.style.display = "block";
    }
    else {
        para.style.display = "none";
        // inputBox.style.border = "1px solid #ffff";
    }

    // if(searchBox.value.length >= 1 && searchBox.value.length < 4){
    //     inputBox.style.border = "1px solid red";
    //     message.innerHTML = "weak";
    //     para.style.color = "red";
    // }

    if (searchBox.value.length < 4) {
        inputBox.style.border = "1px solid red";
        message.innerHTML = "weak";
        para.style.color = "red";
    }

    else if (searchBox.value.length >= 4 && searchBox.value.length < 8) {
        inputBox.style.border = "1px solid orange";
        message.innerHTML = "medium";
        para.style.color = "orange";
    }

    else if (searchBox.value.length >= 8) {
        inputBox.style.border = "1px solid green";
        message.innerHTML = "strong";
        para.style.color = "green";
    }
}
arrowBtn.addEventListener("click", () => {
    if(searchBox.type === "password"){
        searchBox.type = "text";
        arrowBtn.src = "images/eye-open.png";
    }
    else{
        searchBox.type = "password";
        arrowBtn.src = "images/eye-close.png";
    }
});