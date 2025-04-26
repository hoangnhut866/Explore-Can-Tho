
/* Hero js */
// Hero Slideshow
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides
let slideTimer = setInterval(nextSlide, slideInterval);

// Pause on hover
const hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', () => clearInterval(slideTimer));
hero.addEventListener('mouseleave', () => {
    slideTimer = setInterval(nextSlide, slideInterval);
});

// Manual dot controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideTimer);
        showSlide(index);
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});