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

// Initialize loading indicators
const modelViewers = document.querySelectorAll("model-viewer");
modelViewers.forEach((modelViewer) => {
  const progressBar = modelViewer.querySelector(".progress-bar");

  modelViewer.addEventListener("progress", (event) => {
    const progress = event.detail.totalProgress * 100;
    const updateBar = progressBar.querySelector(".update-bar");
    updateBar.style.width = `${progress}%`;
    if (progress === 100) {
      progressBar.classList.add("hide");
    } else {
      progressBar.classList.remove("hide");
    }
  });
});
// Add this to your script.js file
function changeSlide(button, direction) {
  const slideshow = button.closest(".slideshow-container");
  const slides = slideshow.getElementsByClassName("slide");
  let activeIndex = 0;

  // Find the current active slide
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].querySelector("img.active")) {
      activeIndex = i;
      slides[i].querySelector("img").classList.remove("active");
      break;
    }
  }

  // Calculate the new index
  let newIndex = activeIndex + direction;
  if (newIndex >= slides.length) newIndex = 0;
  if (newIndex < 0) newIndex = slides.length - 1;

  // Activate the new slide
  slides[newIndex].querySelector("img").classList.add("active");
}

// Initialize all slideshows
document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.querySelectorAll(".slideshow-container");
  slideshows.forEach((slideshow) => {
    const firstImage = slideshow.querySelector("img");
    if (firstImage) {
      firstImage.classList.add("active");
    }
  });
});
