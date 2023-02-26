let menuIcon = document.querySelector("#menu-icon");
let mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
let menuMobile = document.querySelector("#menu-mobile");

menuIcon.addEventListener("click", toggleMenu);
mobileMenuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

function toggleMenu() {
  menuMobile.classList.toggle("shown");
}

function closeMenu() {
  menuMobile.classList.remove("shown");
}
