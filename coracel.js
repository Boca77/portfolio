// JavaScript code
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.opacity = "0.3";
    slide.style.transform = "scale(1)"; // Reset scale for all slides
    if (index === n) {
      slide.style.opacity = "1";
      slide.style.transform = "scale(1.5)";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.getElementById("left").addEventListener("click", prevSlide);
document.getElementById("right").addEventListener("click", nextSlide);

// Show the initial slide
showSlide(currentSlide);

document.getElementById("imgs").addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("slide")) {
    const index = Array.from(slides).indexOf(target);
    currentSlide = index;
    showSlide(currentSlide);
  }
});
