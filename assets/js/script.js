/* To toggle pages on the Menu bar open and close */

let navLink = document.getElementById("nav-bar");

function showMenu() {
    navLink.style.right = "0";
}

function hideMenu() {
    navLink.style.right = "-200px";
};

/* To toggle pages in section one service.html */

function showPage(coach) {
    let nodeList = document.querySelectorAll(".trainer");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = "none";
    }
    document.querySelector(`#${coach}`).style.display = "block";
}
document.addEventListener('DOMContentLoaded', function () {
    let nodeList = document.querySelectorAll('button');
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].onclick = function () {
            showPage(this.dataset.coach);
        }
    }
});

/* Book Time form validation */

const form = document.getElementById("booktime");

form.addEventListener("submit",(event)=> {

    const nameInputf = document.getElementById("first_name");
    const nameInputl = document.getElementById("last_name");
    const passWord1 = document.getElementById("userpass1");
    const passWord2 = document.getElementById("userpass2");
    const emailInput = document.getElementById("email_address");
    const nameErrorf = document.getElementById("namef-error");
    const nameErrorl = document.getElementById("namel-error");
    const pass1Error = document.getElementById("pass1-error");
    const pass2Error = document.getElementById("pass2-error");
    const emailError = document.getElementById("email_error");

    nameErrorf.textContent = "";
    nameErrorl.textContent = "";
    pass1Error.textContent = "";
    pass2Error.textContent = "";
    emailError.textContent = "";
    nameInputf.classList.remove("error");
    nameInputl.classList.remove("error");
    passWord1.classList.remove("error");
    passWord2.classList.remove("error");
    emailInput.classList.remove("error");

    if (nameInputf.value.trim() === "") {
        nameErrorf.textContent = "Please enter your first name.";
        nameInputf.classList.add("error");
        event.preventDefault();
    }

    if (passWord1.value.trim() === "") {
        pass1Error.textContent = "Please enter your last name.";
        passWord1.classList.add("error");
        event.preventDefault();
    }

    if (passWord2.value.trim() === "") {
        pass2Error.textContent = "Please enter your last name.";
        passWord2.classList.add("error");
        event.preventDefault();
    }

    if (nameInputf.value.trim() === "") {
        nameErrorf.textContent = "Please enter your first name.";
        nameInputf.classList.add("error");
        event.preventDefault();
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        emailError.textContent = "Please enter your email address.";
        emailInput.classList.add("error");
        event.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("error");
        event.preventDefault();
    }
});