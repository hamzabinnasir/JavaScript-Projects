const hideBtn = document.querySelector("#showHide");
const searchBox = document.querySelector("#searchBox");

hideBtn.addEventListener("click" , ()=>{
   hidePassword();
});

const hidePassword = () =>{
    if(searchBox.type === "password"){
        searchBox.type = "text";
        hideBtn.src = "images/eye-open.png"
    }
    else{
        searchBox.type = "password";
        hideBtn.src = "images/eye-close.png"
    }
};