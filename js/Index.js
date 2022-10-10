let hamburgherMenu = document.querySelector(".hamburger-menu");
let options = document.querySelector(".options");

hamburgherMenu.addEventListener("click", function () {
    hamburgherMenu.classList.toggle("active");
    options.classList.toggle("hidden");
});
