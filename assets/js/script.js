/* To toggle pages on the Menu bar open and close */

let navLink = document.getElementById("nav-bar");

function showMenu() {
   navLink.style.right = "0";
}

function hideMenu() {
   navLink.style.right = "-200px";
}

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
})