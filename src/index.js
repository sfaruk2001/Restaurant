import homepageLoad from "./home.js";
import menuLoad from "./menu.js";
import contactLoad from "./contact.js";

homepageLoad();

function clearContent() {
    document.getElementById('content').innerHTML = '';
}

let home = document.querySelector('nav button:nth-child(1)');
home.addEventListener('click', () => {
    clearContent();
    homepageLoad();
});

let menu = document.querySelector('nav button:nth-child(2)');
menu.addEventListener('click', () => {
    clearContent();
    menuLoad();
});

let contact = document.querySelector('nav button:nth-child(3)');
contact.addEventListener('click', () => {
    clearContent();
    contactLoad();
});

