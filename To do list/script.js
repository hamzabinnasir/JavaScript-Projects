const btn = document.querySelector("#btn");
const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#list-Container");


btn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert(" You have to write something ");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
})



listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


// SAVING THE DATA
const saveData = () =>{
    localStorage.setItem("data" , listContainer.innerHTML);
}


const showData = () =>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();