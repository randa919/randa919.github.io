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
