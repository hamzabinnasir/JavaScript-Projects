// DOM MANIPULATION
const editBtn = document.querySelector("#editBtn");
const notesContaier = document.querySelector("#notesContainer");


editBtn.addEventListener("click" , ()=>{
    let para = document.createElement("p");
    para.setAttribute("contenteditable" , "true");
    para.classList.add("deletePara");
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.classList.add("deleteBtn");
    notesContaier.appendChild(para).appendChild(img);
});

notesContaier.addEventListener("click" , (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        let notes = document.querySelectorAll(".deletePara");
        notes.forEach((notes)=>{
            notes.onkeyup = function(){
                updateStorage();
            }
        });
    }
});


// ISKI SAMAJH NAHIN AY
document.addEventListener("keydown" , (event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});



// // Saving the data
// const updateStorage = () =>{
//     localStorage.setItem("data" , notesContaier.innerHTML);
// };


// // Getting the data
// const getData = () =>{
//    notesContaier.innerHTML = localStorage.getItem("data");
// };
// getData();

