//import { pswdCheck } from './controller.js';
import { emailCheck, pswdCheck } from './controller.js';

let password = document.getElementById("pswd");
let passwordError = document.getElementById("pswdError");
passwordError.style.display = "none";
password.addEventListener('keypress', event => {
    let text = password.value + `${event.key}`;
    pswdCheck(text, passwordError);
});

let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
emailError.style.display = "none";

email.addEventListener("keyup", event => {

    console.log('verify email')
    //let text = email.value + `${event.key}`;
    let text = email.value
    emailCheck(text, emailError);
});