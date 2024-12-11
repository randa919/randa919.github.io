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
// Add this to your script.js file
function resetModel(button) {
  const modelViewer = button
    .closest(".model-viewer-container")
    .querySelector("model-viewer");
  modelViewer.cameraOrbit = "45deg 55deg 2.5m";
  modelViewer.cameraTarget = "0 0 0";
}

function toggleRotation(button) {
  const modelViewer = button
    .closest(".model-viewer-container")
    .querySelector("model-viewer");
  modelViewer.autoRotate = !modelViewer.autoRotate;
  button.textContent = modelViewer.autoRotate ? "Stop Rotation" : "Auto-Rotate";
}

// Object to store the current index for each carousel
const currentIndices = {};

// Initialize all carousels
document.querySelectorAll(".carousel-container").forEach((carousel) => {
  const carouselId = carousel.getAttribute("data-carousel-id");

  // Set initial index for the carousel
  currentIndices[carouselId] = 0;

  // Get carousel elements
  const slides = carousel.querySelectorAll(".carousel-images img");
  const totalSlides = slides.length;

  // Add event listeners for the buttons
  const prevButton = carousel.querySelector(".prev-btn");
  const nextButton = carousel.querySelector(".next-btn");

  // Previous button event listener
  prevButton.addEventListener("click", () => {
    moveSlide(-1, carouselId, totalSlides);
  });

  // Next button event listener
  nextButton.addEventListener("click", () => {
    moveSlide(1, carouselId, totalSlides);
  });
});

function moveSlide(step, carouselId, totalSlides) {
  // Update the currentIndex for the carousel
  currentIndices[carouselId] =
    (currentIndices[carouselId] + step + totalSlides) % totalSlides;

  // Get the carousel and update the images
  const carousel = document.querySelector(
    `.carousel-container[data-carousel-id="${carouselId}"]`
  );
  const carouselImages = carousel.querySelector(".carousel-images");

  carouselImages.style.transform = `translateX(-${
    currentIndices[carouselId] * 100
  }%)`;
}
