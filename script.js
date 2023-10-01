let currentSlide = 0;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(n) {
    currentSlide = n;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    const translateValue = -currentSlide * 100;
    carousel.style.transform = `translateX(${translateValue}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

showSlide(currentSlide);
