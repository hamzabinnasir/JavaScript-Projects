const scriptURL = 'https://script.google.com/macros/s/AKfycbw_D2o2E0qAbOxgP3Z5TCv0Bf0OrSjOxtPIJf9JdT36iDAv4E8d3vLr3fXb_xCv5124/exec'
const form = document.forms['submit-to-google-sheet'];
const message = document.querySelector("#msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        message.style.display = "block";
        message.innerHTML = "Thank you for Subscribing!";
        setTimeout(()=>{
        message.style.display = "none";
        },3000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})