// Your code goes here

const funBusLogo = document.querySelector(".logo-heading");
const funBusHdrImg = document.querySelector("img");
const pTags = document.getElementsByTagName("p");
const letsGo = document.getElementById("gogogo");
const mapImg = document.getElementById("map");
const selectPick = document.getElementById("pick");
const footer = document.querySelector("footer");

// Event 1 - mouseover
funBusLogo.addEventListener("mouseover", () => {
  funBusLogo.style.backgroundColor = "#FFD800";
});

// Event 2 - mouseout
funBusLogo.addEventListener("mouseout", () => {
  funBusLogo.style.background = "none";
});

// Stop the navigation links from refreshing the page
document.querySelectorAll(".nav-link").forEach(function(element) {
  element.addEventListener("click", event => {
    event.preventDefault();
    console.log("halted the enemy's movement");
  });
});

// Event 3 - click
document.querySelectorAll(".nav-link").forEach(function(element) {
  element.addEventListener("click", function() {
    element.style.transform = "rotate(180deg)";
    element.style.transition = "transform 1s";
  });
});

// Event 4 - mouseenter
funBusHdrImg.addEventListener("mouseenter", () => {
  funBusHdrImg.style.filter = "grayscale(100%)";
  funBusHdrImg.style.transition = "filter 2s";
});

// Event 5 - mouseleave
funBusHdrImg.addEventListener("mouseleave", () => {
  funBusHdrImg.style.filter = "none";
});

// Event 6 - contextmenu
funBusHdrImg.addEventListener("contextmenu", () => {
  funBusHdrImg.style.transform = "rotate(360deg)";
  funBusHdrImg.style.transition = "transform 3s";
});

// Event 7 - dblclick
mapImg.addEventListener("dblclick", () => {
  mapImg.style.transform = "scale(1.5)";
  mapImg.style.transition = "transform 2s";
});

// Event 8 - keydown
document.addEventListener("keydown", () => {
  selectPick.style.color = "red";
});

// Event 9 - scroll
document.querySelectorAll("img").forEach(element => {
  document.addEventListener("scroll", () => {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 3s";
  });
});

// Event 10 - keyup
document.addEventListener("keyup", () => {
  footer.style.backgroundColor = "#FFD800";
});

// Stop propagation
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "#FFD800";
  console.log("me last!");
});

document.querySelectorAll(".destination").forEach(function(element) {
  element.addEventListener("click", event => {
    element.style.backgroundColor = "red";
    console.log("me second!");
    event.stopPropagation();
  });
});

document.querySelectorAll("h4").forEach(function(element) {
  element.addEventListener("click", event => {
    element.style.backgroundColor = "pink";
    console.log("me first!");
    event.stopPropagation();
  });
});
