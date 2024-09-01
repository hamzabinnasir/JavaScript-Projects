const mode = document.querySelector("#mode");
const container = document.querySelector(".container");

mode.addEventListener("click" , ()=>{
   changeThene();
});

const changeThene = () =>{
    container.classList.toggle("darkTheme");
    if(container.classList.contains("darkTheme")){
        mode.src = "images/sun.png";
    }
    else{
        mode.src = "images/moon.png";
    }
}


