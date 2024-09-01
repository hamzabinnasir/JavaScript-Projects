 // DOM MANIPULATION
 const searchBtn = document.querySelector("#searchBtn");
 const searchBox = document.querySelector("#searchBox");
 const passwordBtn = document.querySelector("#passwordBtn");

 // Pasword Length
 let length = 12;

 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";
 const numbers = "0123456789";
 const specialChar = "!@#$%^&*()_+=`~{}[]<>;:?/";
 const allChar = upperCase + lowerCase + numbers + specialChar;

 passwordBtn.addEventListener("click" , ()=>{
     generatePass();
 });

 const generatePass = () =>{
     let password = "";
     password += upperCase[Math.floor(Math.random() * upperCase.length)];
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
     password += specialChar[Math.floor(Math.random() * specialChar.length)];
     password += numbers[Math.floor(Math.random() * numbers.length)];

     while(length > password.length){
         password += allChar[Math.floor(Math.random() * allChar.length)]
     }
     searchBox.value = password;
 }

 // Copy Password
 searchBtn.addEventListener("click" , ()=>{
     if(searchBox.value === ""){
         alert(" First Generate a Password ");
     }
     else{
         copyPassword();
     }
 });

 const copyPassword = () =>{
     searchBox.select();
     document.execCommand("copy");
 };