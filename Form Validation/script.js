// DOM MANIPULATION
const nameErr = document.querySelector("#nameErr");
const phoneErr = document.querySelector("#phoneErr");
const emailErr = document.querySelector("#emailErr");
const formErr = document.querySelector("#formErr");
const msgErr = document.querySelector("#msgErr");
const submitBtn = document.querySelector("#submit");


const validateName = () => {
    const name = document.querySelector("#name").value;

    if (name.length === 0) {
        nameErr.innerHTML = "Enter your name";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameErr.innerHTML = "Enter full Name";
        return false;
    }
    nameErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    nameErr.classList.add("green");
    return true;
}


const validatePhone = () => {
    const phone = document.querySelector("#phone").value;
    if (phone.length === 0) {
        phoneErr.innerHTML = "Phone is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneErr.innerHTML = "Phone number should be 10 digit";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneErr.innerHTML = "Only digits please";
        return false;
    }
    phoneErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    phoneErr.classList.add("green");
    return true;
}

const validateEmail = () => {
    const email = document.querySelector("#email").value;
    if (email.length === 0) {
        emailErr.innerHTML = "email is required";
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailErr.innerHTML = "invalid email";
        return false;
    }
    emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    emailErr.classList.add("green");
    return true;
}

const validateMsg = () => {
    const message = document.querySelector("#msg").value;
    const required = 30;
    const left = required - message.length;

    if (message.length === 0) {
        msgErr.innerHTML = "Message is required";
        return false;
    }

    if (left > 0) {
        msgErr.innerHTML = left + "more characters";
        return false;
    }
    msgErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    msgErr.classList.add("green");
    return true;
}

submitBtn.addEventListener("click", () => {
    validationForm();
});

const validationForm = () => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        formErr.style.display = "block";
        formErr.innerHTML = "Please fix the error";
        setTimeout(() => {
            formErr.style.display = "none";
        }, 3000)
        return false;
    }
   
}
