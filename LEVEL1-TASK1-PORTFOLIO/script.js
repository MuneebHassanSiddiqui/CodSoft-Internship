// Selecting elements
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn"); // Fixed typo here
let navBar = document.querySelector(".navbar");
let nav = document.querySelector("nav");
let body = document.querySelector("body");


// Menu button click handler
menuBtn.onclick = function () {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}

// Cancel button click handler
cancelBtn.onclick = function () {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";

}

// Window scroll handler
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

let NavLink = document.querySelectorAll(".menu li a");
for(var i = 0; i < NavLink.length; i++){
    NavLink[i].addEventListener("click" , ()=>{
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navBar.classList.remove("active");
        body.style.overflow = "auto";
    })
}