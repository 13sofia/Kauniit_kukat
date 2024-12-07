let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  slides.forEach(slide => {
    slide.style.display = 'none'; 
  });

  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1; 
  }

  slides[currentSlide - 1].style.display = 'block'; 
  setTimeout(showSlides, 5000); 
}

document.addEventListener("DOMContentLoaded", showSlides);
