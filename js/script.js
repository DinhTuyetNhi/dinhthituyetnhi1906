
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error')
    small.innerText = message
}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error')
    small.innerText = ''
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    checkEmpty(email,password,confirm-password)
})

function checkEmpty(listInput){
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            showError(input, 'khong de rong')
        }else{
            showSuccess(input,'')
        }
    });
}

const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formcontainer = document.querySelector(".form-container"),
    formCloseBtn = document.querySelector(".form-close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw-hide");

    formOpenBtn.addEventListener("click", () => home.classList.add("show"))
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

pwShowHide.forEach(icon => {
    icon.addEventListener("click",()=>{
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type ==="password"){
            getPwInput.type = "text"
            icon.classList.replace("fa-eye-slash","fa-eye")
        }else{
            getPwInput.type = "password"
            icon.classList.replace("fa-eye","fa-eye-slash")
        }
    });
});


signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.remove("active");
});