const leftBox = document.querySelector("#left");
const rightBox = document.querySelector("#right");
const list = document.querySelectorAll(".list");

for (elements of list) {
    elements.addEventListener("dragstart", (e) => {
        let selected = e.target;
        rightBox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", (e) => {
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", (e) => {
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}

