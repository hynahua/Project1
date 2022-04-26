const mobileMenu = document.querySelector(".mobile-menu-list");
const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-open");
  mobileMenu.classList.toggle("mobile-menu-close");
});

const navItem = document.querySelectorAll(".nav-close");
navItem.forEach(function (item) {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu-open");
    mobileMenu.classList.add("mobile-menu-close");
  });
});

const loader = document.querySelector(".loading");

window.addEventListener("load", () =>
  setTimeout(() => {
    loader.classList.add("disappear");
  }, 1000)
);

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  scrollToTop.classList.toggle("totop", window.scrollY > 300);
});

const header = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 44);
});
