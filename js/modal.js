const modal = document.getElementById("image-viewer-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
const thumbnails = document.querySelectorAll(".thumbnail-container img, .columns-wrapper img");

let currentIndex = 0;
let images = Array.from(thumbnails);

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = img.dataset.largeSrc;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) { 
    modal.style.display = "none";
  }
});

document.getElementById("prev-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].dataset.largeSrc;
});

document.getElementById("next-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].dataset.largeSrc;
});