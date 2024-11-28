function changeSlide(button, direction) {
  const slideshow = button.closest(".slideshow");
  const images = slideshow.querySelectorAll("img");
  let activeIndex = Array.from(images).findIndex((img) =>
    img.classList.contains("active")
  );

  // Remove 'active' class from current image
  images[activeIndex].classList.remove("active");

  // Calculate new active index
  let newIndex = (activeIndex + direction + images.length) % images.length;

  // Add 'active' class to the new image
  images[newIndex].classList.add("active");
}
// Add to your script.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Initialize AOS
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        navLinks.classList.remove("active");
      }
    });
  });
});

// Enhanced slideshow function
function changeSlide(button, direction) {
  const slideshow = button.closest(".slideshow");
  const images = slideshow.querySelectorAll("img");
  let activeIndex = Array.from(images).findIndex((img) =>
    img.classList.contains("active")
  );

  // Remove active class from current image
  images[activeIndex].classList.remove("active");

  // Calculate new index with wrap-around
  activeIndex = (activeIndex + direction + images.length) % images.length;

  // Add active class to new image
  images[activeIndex].classList.add("active");
}
