let navLink = document.getElementById("nav-bar");

function showMenu() {
    navLink.style.right = "0";
}

function hideMenu() {
    navLink.style.right = "-200px";
}

function showPage(coach){

let nodeList = document.querySelectorAll(".trainer");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.display = "none";
}
        document.querySelector(`#${coach}`).style.display = "block";
    }

    document.addEventListener('DOMContentLoaded', function() {
    let nodeList = document.querySelectorAll("button");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].onclick = function () {
            showPage(this.dataset.coach);
                            }
                        }
                    })