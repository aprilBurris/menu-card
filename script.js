console.log("Hello from script!!");

// Get HTML elements
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

// Submit Button Function
function handelSubmit(event) {
    event.preventDefault();  // Stop Reload
    let menu = JSON.parse(input.value);
    count.textContent = "We have " + menu.length + " items today.";
    }

     form.addEventListener("submit", handelSubmit);
