import { emailCheck, pswdCheck, confirmPasswordCheck } from './controller.js';

let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
emailError.style.display = "none";

email.addEventListener("keyup", event => {

    console.log('verify email')

    let text = email.value
    emailCheck(text, emailError);
});

// Check password criteria
let password = document.getElementById("pswd");
let passwordError = document.getElementById("pswdError");

passwordError.style.display = "none";
password.addEventListener('keyup', event => {
    let text = password.value + `${event.key}`;
    pswdCheck(text, passwordError);
});


$(document).ready(function () {
    //$("#txtUsername").val("");
    //$("#txtNewPassword, #txtConfirmPassword").keyup(checkPasswordMatch);
    $("#pswd, #confirmPswd").keyup(checkPasswordMatch);
 });

 
function checkPasswordMatch() {
    
    let password = $("#pswd").val();
    let confirmPassword = $("#confirmPswd").val();

    if (password != confirmPassword)
        $("#confirmPswdError").html("Passwords do not match!");
    else
        $("#confirmPswdError").html("Passwords match.");
} 


/*
let confPassword = document.getElementById("confirmPswd");
let confPasswordError = document.getElementById("confirmPswdError");
confPasswordError.style.display = "none";

confPassword.addEventListener('keyup', event => {
    let text = confPassword.value + `${event.key}`;
    let initPasswrd = password.value;
    confirmPasswordCheck(text, initPasswrd, confPasswordError);
})
*/