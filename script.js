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
