const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
