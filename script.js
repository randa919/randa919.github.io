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
