// JavaScript source code
const openMenu = document.getElementsByClassName("nav-toggle")[0];
const mainMenu = document.getElementsByClassName("nav-links")[0];

openMenu.addEventListener('click', () => {
    mainMenu.classList.toggle("active");
});