 // DOM MANIPULATION
 const successBtn = document.querySelector("#success");
 const errorBtn = document.querySelector("#error");
 const invalidBtn = document.querySelector("#invalid");
 const toastBox = document.querySelector(".toastBox")

 // MESSAGES TO BE DISPLAYED
 let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
 let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
 let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input. Check again';


 // BUTTON
 successBtn.addEventListener("click", () => {
     showToast(successMsg);
 });

 errorBtn.addEventListener("click", () => {
     showToast(errorMsg);
 });

 invalidBtn.addEventListener("click", () => {
     showToast(invalidMsg);
 });


 // FUNCTION TO BE RUN
 const showToast = (msg) => {
     let toast = document.createElement("div");
     toast.innerHTML = msg;
     toast.classList.add("items");
     toastBox.appendChild(toast);

     if (msg.includes("error")) {
         toast.classList.add("error")
     }

     if (msg.includes("Invalid")) {
         toast.classList.add("invalid")
     }

     setTimeout(()=>{
         toast.remove();
     },6000)
 };