console.log("Hello from script!!");

// Get HTML elements
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");
let cards = document.querySelector("#menu-card");

// Submit Button Function
function handelSubmit(event) {
    event.preventDefault();  // Stop Reload
    // Input JSON array with Parse
    let menu = JSON.parse(input.value);
    // Update total number of items in menu
    count.textContent = "We have " + menu.length + " items today.";

    menuText.textContent = "";
    // Loop for menu items
    for (let i = 0; i < menu.length; i++) {
        menuText.textContent = menuText.textContent + menu[i].name + " - $" + menu[i].price + "\n";
    }
   }
     // Submit button listener
     form.addEventListener("submit", handelSubmit);
