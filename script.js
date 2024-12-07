let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  slides.forEach(slide => {
    slide.style.display = 'none'; // Hide all slides
  });

  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1; // Reset to first slide
  }

  slides[currentSlide - 1].style.display = 'block'; // Show current slide
  setTimeout(showSlides, 5000); // Change slide every 3 seconds
}

// Start the slideshow
document.addEventListener("DOMContentLoaded", showSlides);
