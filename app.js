const navBar = document.querySelector("nav");
const faqs = document.querySelectorAll(".faq");
const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");

// Change Navbar Styles
window.addEventListener("scroll", () => {
  navBar.classList.toggle("window-scroll", window.scrollY > 10);
});

// Open Answers

faqs.forEach((q) => {
  q.addEventListener("click", () => {
    q.classList.toggle("open");

    //Change icon
    const faqIcon = q.querySelector(".faq__icon i");
    faqIcon.className == "uil uil-plus"
      ? (faqIcon.className = "uil uil-minus")
      : (faqIcon.className = "uil uil-plus");
  });
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

// Show and hide nav menu

openMenuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
});
