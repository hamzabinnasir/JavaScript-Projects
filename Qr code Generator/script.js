const codeBtn = document.querySelector("#codeBtn");
const searchBox = document.querySelector("#searchBox");
const qrImg = document.querySelector("#qrImg");
const qrCode = document.querySelector(".qrCode");

codeBtn.addEventListener("click" , ()=>{
    if(searchBox.value.length > 0 ){
        generatingCode();
    }
    else{
        searchBox.classList.add("error");
        setTimeout(()=>{
        searchBox.classList.remove("error");
        },1000)
    }
});

const generatingCode = () =>{
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + searchBox.value;
    qrCode.classList.add("showImg");
}




