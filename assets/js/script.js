/* To toggle pages on the Menu bar open and close */

const navLink = document.getElementById("nav-bar");

function showMenu() {
    navLink.style.right = "0";
}

function hideMenu() {
    navLink.style.right = "-200px";
};


/* To toggle pages in section one service.html */

function showPage(coach) {
    const nodeList = document.querySelectorAll(".trainer");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = "none";
    }
    document.querySelector(`#${coach}`).style.display = "block";
}
document.addEventListener('DOMContentLoaded', function () {
    const nodeList = document.querySelectorAll("button");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].onclick = function () {
            showPage(this.dataset.coach);
        }
    }
});


/* To toggle background colors in main section one */

function color1() {
    document.bgColor = "#e4ecbc"
    window.setTimeout("color2()", 3000)
}

function color2() {
    document.bgColor = "#eae4cc"
    window.setTimeout("color3()", 3000)
}

function color3() {
    document.bgColor = "#edf2d2"
    window.setTimeout("color4()", 3000)
}

function color4() {
    document.bgColor = "#f3e4dd"
    window.setTimeout("color1()", 3000)
}


/* Toggle images for hard court page one: home */

const courtImage = document.getElementById('hcourtimg');
const courtImages = ['assets/images/twocourts.jpg', 'assets/images/hard2.jpeg'];
setInterval(function () {
    let randomIndex = Math.floor(Math.random() * courtImages.length);
    courtImage.src = courtImages[randomIndex];
}, 3000);


/* Toggle images for clay court page one: home */

const ccourtImage = document.getElementById('ccourtimg');
const ccourtImages = ['assets/images/claycourt.jpeg', 'assets/images/clay2.jpeg'];
setInterval(function () {
    let randomIndex = Math.floor(Math.random() * ccourtImages.length);
    ccourtImage.src = ccourtImages[randomIndex];
}, 3000);


/* Toggle images for grass court page one: home */

const gcourtImage = document.getElementById('gcourtimg');
const gcourtImages = ['assets/images/grasscourt.jpeg', 'assets/images/grass2.jpeg'];
setInterval(function () {
    let randomIndex = Math.floor(Math.random() * gcourtImages.length);
    gcourtImage.src = gcourtImages[randomIndex];
}, 3000);


/* Book Time form validation */

const form = document.getElementById("booktime");

form.addEventListener("submit", (event) => {
    const nameInputf = document.getElementById("first_name");
    const nameInputl = document.getElementById("last_name");
    const passWord1 = document.getElementById("userpass1");
    const passWord2 = document.getElementById("userpass2");
    const emailInput = document.getElementById("email_address");
    const serviceInput = document.getElementById("service-type");
    const nameErrorf = document.getElementById("namef-error");
    const nameErrorl = document.getElementById("namel-error");
    const pass1Error = document.getElementById("pass1-error");
    const pass2Error = document.getElementById("pass2-error");
    const emailError = document.getElementById("email-error");
    const serviceError = document.getElementById("service-error");

    console.log("all gotten")

    nameErrorf.textContent = "";
    nameErrorl.textContent = "";
    pass1Error.textContent = "";
    pass2Error.textContent = "";
    emailError.textContent = "";
    serviceError.textContent = "";
    nameInputf.classList.remove("error");
    nameInputl.classList.remove("error");
    passWord1.classList.remove("error");
    passWord2.classList.remove("error");
    emailInput.classList.remove("error");
    serviceInput.classList.remove("error");

    if (nameInputf.value.trim() === "") {
        nameErrorf.textContent = "Please enter your first name.";
        nameInputf.classList.add("error");
        event.preventDefault();
    }

    if (nameInputl.value.trim() === "") {
        nameErrorl.textContent = "Please enter your last name.";
        nameInputl.classList.add("error");
        event.preventDefault();
    }

    if (passWord1.value.trim() === "") {
        pass1Error.textContent = "Please enter your password.";
        passWord1.classList.add("error");
        event.preventDefault();
    }

    if (passWord2.value.trim() === "") {
        pass2Error.textContent = "Please re-enter your password.";
        passWord2.classList.add("error");
        event.preventDefault();
    }

    if (passWord1.value.trim() !== passWord2.value.trim()) {
        pass2Error.textContent = "Please passwords doesn't match.";
        passWord2.classList.add("error");
        event.preventDefault();
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        emailError.textContent = "Please enter your email address.";
        emailInput.classList.add("error");
        event.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("error");
        event.preventDefault();
    }

    if (serviceInput.value.trim() === "") {
        serviceError.textContent = "Please choose a service.";
        serviceInput.classList.add("error");
        event.preventDefault();
    }
});