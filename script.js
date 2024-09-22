const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");

function validateName(){
    let name = document.querySelector("#contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required!";  
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name!";  
        return false;
    }
     nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
}

function validatePhone(){
    let phone = document.querySelector("#contact-phone").value;

    if(phone.length == 0){
       phoneError.innerHTML = "Phone no is required!";
       return false;
    }

    if(phone.length != 10){
        phoneError.innerHTML = "Phone no should have 10 digits ";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only numeric value allowed!";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.querySelector("#contact-email").value;

    if(email.length == 0){
      emailError.innerHTML = "Email is required!";
      return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid email";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.querySelector("#contact-message").value;

    if(message.length < 30){
        messageError.innerHTML = 'Minimum 30 characters required!';
        return false;
    }
     messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;

}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error to submit";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 5000);
        return false;
    }
}