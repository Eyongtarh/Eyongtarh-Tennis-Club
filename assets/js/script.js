/* Decleration of variable To toggle menu bar*/

/* Decleration of variable To toggle pages in main section one pasge index.html/service.html */
const nodeList = document.querySelectorAll(".trainer");

/* Decleration of variable To toggle color on Read More anchor in header */
const readMore = document.getElementById("readm");
const readmColor = ["blue", "green"];
/* Decleration of variable To validate form in book.html */
const form = document.getElementById("booktime");
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

/* Decleration of variable To toggle the Menu bar open and close */

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navBar = document.querySelector('#nav-bar');
/* To toggle the Menu bar open and close */
/* The element click */
menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);
/* to set the click function active */
function menuTog(e) {
   navBar.classList.toggle("active")
}


/* To toggle pages in section one: index.html and service.html */

function showPage(coach) {
   /*select all the pages not to display*/
   for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "none";
   }
   document.querySelector(`#${coach}`).style.display = "block";
}
/*select the list to display on button click*/
document.addEventListener('DOMContentLoaded', function () {
   const nodeList = document.querySelectorAll("button");
   /*To display a page in the list using this javascript on click of the button */
   for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].onclick = function () {
         showPage(this.dataset.coach);
      }
   }
});


/* To toggle background colors: body */

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
   document.bgColor = "#c8cfd8"
   window.setTimeout("color1()", 3000)
};


/* Toggle color on Read More anchor in header */
setInterval(function () {
   /* selects the color at random in the list of colors and set as backgrond every second*/
   let randomIndex = Math.floor(Math.random() * readmColor.length);
   readMore.style.background = readmColor[randomIndex];
}, 1000);


/* Book Time form validation */
form.addEventListener("submit", (event) => {
   /* Error messages for each input*/
   nameErrorf.textContent = "";
   nameErrorl.textContent = "";
   pass1Error.textContent = "";
   pass2Error.textContent = "";
   emailError.textContent = "";
   serviceError.textContent = "";
   /* Removes Error messages for each input*/
   nameInputf.classList.remove("error");
   nameInputl.classList.remove("error");
   passWord1.classList.remove("error");
   passWord2.classList.remove("error");
   emailInput.classList.remove("error");
   serviceInput.classList.remove("error");
   /* if first name value is empty, withh all spaces removed, error message will display and form validation is prevented */
   if (nameInputf.value.trim() === "") {
      nameErrorf.textContent = "Please enter your first name.";
      nameInputf.classList.add("error");
      event.preventDefault();
   }
   /* if last name value is empty, withh all spaces removed, error message will display and form validation is prevented */
   if (nameInputl.value.trim() === "") {
      nameErrorl.textContent = "Please enter your last name.";
      nameInputl.classList.add("error");
      event.preventDefault();
   }
   /* if password1 value is empty, withh all spaces removed, error message will display and form validation is prevented */
   if (passWord1.value.trim() === "") {
      pass1Error.textContent = "Please enter your password.";
      passWord1.classList.add("error");
      event.preventDefault();
   }
   /* if password2 value is empty, withh all spaces removed, error message will display and form validation is prevented */
   if (passWord2.value.trim() === "") {
      pass2Error.textContent = "Please re-enter your password.";
      passWord2.classList.add("error");
      event.preventDefault();
   }
   /* if password1 is not equal to pasword2 value is empty, withh all spaces removed, error message 
   will display and form validation is prevented */
   if (passWord1.value.trim() !== passWord2.value.trim()) {
      pass2Error.textContent = "Please passwords doesn't match.";
      passWord2.classList.add("error");
      event.preventDefault();
   }
   /* if email value is empty, withh all spaces removed, error message will display and form validation is prevented 
   and if its filled with wrong formate, error message will display and form validation is prevented*/
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
   /* if service value is empty, withh all spaces removed, error message will display and form validation is prevented */
   if (serviceInput.value.trim() === "") {
      serviceError.textContent = "Please choose a service.";
      serviceInput.classList.add("error");
      event.preventDefault();
   }
});