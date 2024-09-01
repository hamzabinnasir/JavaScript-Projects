const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");
const gallery = document.querySelector(".gallery");

gallery.addEventListener("wheel" , (event)=>{
 event.preventDefault();
// gallery.style.scrollBehavior = "auto";
 gallery.scrollLeft += event.deltaY;
});

nextBtn.addEventListener("click" , ()=>{
// gallery.style.scrollBehavior = "smooth";
gallery.scrollLeft += 300;
});

backBtn.addEventListener("click" , ()=>{
// gallery.style.scrollBehavior = "smooth";
gallery.scrollLeft -= 300;
});