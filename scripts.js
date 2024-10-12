document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  line1.classList.toggle("transform", "rotate-45");
  line1.classList.toggle("transition", "duration-300");
  line2.classList.toggle("hidden");
  line3.classList.toggle("transform", "-rotate-45");
});

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    line1.classList.remove("transform", "rotate-45");
    line1.classList.remove("transition", "duration-300");
    line2.classList.remove("hidden");
    line3.classList.remove("transform", "-rotate-45");
  });
});
