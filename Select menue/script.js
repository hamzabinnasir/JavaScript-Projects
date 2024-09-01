const select = document.querySelector("#select");
    const options = document.getElementsByClassName("options");
    const selectList = document.querySelector("#selectList");
    const listContainer = document.querySelector(".listContainer");
    const selectBtn = document.querySelector("#selectBtn");

    listContainer.addEventListener("click", () => {
        selectList.classList.toggle("hide");
        selectBtn.classList.toggle("rotate");
    });



    // isko bhool kr bhi call back function =() =>{} nahin banana;
    for (option of options) {
        option.addEventListener("click", function () {
            select.innerHTML = this.textContent;
            selectList.classList.toggle("hide");
            selectBtn.classList.toggle("rotate");
        });
    };
