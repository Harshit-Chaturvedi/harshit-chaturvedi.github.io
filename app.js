
const burger = document.getElementById("burger");
const navUL  = document.querySelector(".nav-links");


burger.addEventListener("click", () => {
    navUL.classList.toggle("show")
})

