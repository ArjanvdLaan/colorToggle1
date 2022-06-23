const getMenu = document.querySelector('.menu');
const navToggle = document.querySelector(".nav-toggle")
let toggleNavStatus =  false;

navToggle.addEventListener('click', function() {
    if (toggleNavStatus === false) {
        getMenu.style.visibility = "visible";
        toggleNavStatus = true;
    } 
    else if  (toggleNavStatus === true) {
        getMenu.style.visibility = "hidden";
        toggleNavStatus = false;
    } 
});

const getDefaultA = document.querySelector(".grey");
const getOrangeA = document.querySelector(".orange");
const getRedA = document.querySelector(".red");
const getGreenA = document.querySelector(".green");
const getBlueA = document.querySelector(".blue");
const getYellowA = document.querySelector(".yellow");
const getPurpleA = document.querySelector(".purple");

const getBody = document.querySelector("body");

function changeColor(color) {
    getBody.style.backgroundColor = color;
    getBody.classList.add('transition');
    getMenu.style.visibility = "hidden"; 
    toggleNavStatus = false;
}

getDefaultA.addEventListener('click', function() {
    changeColor("darkgrey");
});

getOrangeA.addEventListener('click', function() {
    changeColor("orange");
});

getRedA.addEventListener('click', function() {
    changeColor("red");
});

getGreenA.addEventListener('click', function() {
    changeColor("green");
});

getBlueA.addEventListener('click', function() {
    changeColor("blue");
});

getYellowA.addEventListener('click', function() {
    changeColor("yellow");
});

getPurpleA.addEventListener('click', function() {
    changeColor("purple");
});


