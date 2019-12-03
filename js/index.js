// Your code goes here

const funBusLogo = document.querySelector(".logo-heading");
const funBusHdrImg = document.querySelector("img");
const pTags = document.getElementsByTagName("p");
const letsGo = document.getElementById("gogogo");

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
    console.log("halted the enemy's movement")
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
})

// Event 5 - mouseleave
funBusHdrImg.addEventListener("mouseleave", () => {
    funBusHdrImg.style.filter = "none";
})

// Event 6 - contextmenu
funBusHdrImg.addEventListener("contextmenu", () => {
    funBusHdrImg.style.transform = "rotate(360deg)";
    funBusHdrImg.style.transition = "transform 3s";
})

// Event 7 - wheel
letsGo.addEventListener("wheel", () => {
    letsGo.style.color = "red";
})




















// letsGo.addEventListener("wheel", () => {
//     letsGo.style.color = "red";
//     console.log("work");
// })