let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");
let passwordElement = document.getElementById("password");

let length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "#@!$%^&*()_+-={}[];':,./|<>?";

let allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordElement.value = password;
}


password.addEventListener('input', () =>{
    if(password.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if(password.value.length < 4 ){
        str.innerHTML = "weak";
        password.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(password.value.length > 4 && password.value.length < 8){
        str.innerHTML = "medium";
        password.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(password.value.length >= 8){
        str.innerHTML = "strong";
        password.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "eye-open.png";
    }else{
        password.type = "password";
        eyeIcon.src = "eye-close.png";
    }
}