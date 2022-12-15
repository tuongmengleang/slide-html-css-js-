const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.slider__item');
const btnPrev = sliderContainer.querySelector('.btn.prev');
const btnNext = sliderContainer.querySelector('.btn.next');
let counter = 0;

btnPrev.addEventListener('click', function() {
    slides[counter].classList.toggle('active');
    counter--;
    if (counter < 0) counter = slides.length - 1;
    slides[counter].classList.toggle('active');
})

btnNext.addEventListener('click', function() {
    slides[counter].classList.toggle('active');
    counter++;
    if (counter >= slides.length) counter = 0;
    slides[counter].classList.toggle('active');
})