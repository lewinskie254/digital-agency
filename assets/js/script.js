'use strict';

// Function to add an event listener to multiple elements
const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

// Navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

// Adding a click event listener to the navbar toggle button and overlay
addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// Parallax effect
const parallaxElements = document.querySelectorAll("[data-parallax][data-parallax-speed]");
window.addEventListener('mousemove', event => {
    for (let i = 0, len = parallaxElements.length; i < len; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed);

        parallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, { duration: 500, fill: "forwards" });
    }
});
