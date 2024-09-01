  // DOM MANUPULATION
  const dressImg = document.querySelector("#dressImg");
  const dressBtns = document.querySelectorAll(".circle");

  dressBtns[0].onclick = function(){
      dressImg.src = "images/image1.png";
      for(btn of dressBtns){
          btn.classList.remove("active");
      }
      this.classList.add("active");
  };

  dressBtns[1].onclick = function(){
      dressImg.src = "images/image2.png";
      for(btn of dressBtns){
          btn.classList.remove("active");
      }
      this.classList.add("active");
  };

  dressBtns[2].onclick = function(){
      dressImg.src = "images/image3.png";
      for(btn of dressBtns){
          btn.classList.remove("active");
      }
      this.classList.add("active");
  };
  


  // ALTERNATE METHOD
  // const dressImg = document.querySelector("#dressImg");
  // const dressBtn1 = document.querySelector("#one");
  // const dressBtn2 = document.querySelector("#two");
  // const dressBtn3 = document.querySelector("#three");


  // dressBtn1.addEventListener("click" , () =>{
  //     dressImg.src = "images/image1.png"
  // });

  // dressBtn2.addEventListener("click" , () =>{
  //     dressImg.src = "images/image2.png"
  // });
  // dressBtn3.addEventListener("click" , () =>{
  //     dressImg.src = "images/image3.png"
  // });