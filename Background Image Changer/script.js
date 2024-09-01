 // DOM MANIPULATION
 const imageBox = document.querySelector(".card");
 const imageWrap = document.querySelector(".originalImg");
 const originalImg = document.querySelector("#original");
 const line = document.querySelector("#line");

 originalImg.style.width = imageBox.offsetWidth + "px";

 const leftSpace = imageBox.offsetLeft;
 imageBox.onmousemove = function (e) {
     const boxWidth = (e.pageX - leftSpace) + "px";
     imageWrap.style.width = boxWidth;
     line.style.left = boxWidth;
 }













