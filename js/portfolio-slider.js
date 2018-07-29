const slideContainer = document.querySelector('#portfolio-slider .slide-container');
const slideSize = document.querySelector('#portfolio-slider .slide').offsetWidth;
var currentSlide = 2;
console.log(currentSlide);

document.querySelector('#prev-button').addEventListener('click', function () {
    if (currentSlide == 1) {
        currentSlide = 3;
        slideContainer.style.left = '-2220px';
    } else {
        currentSlide =  currentSlide - 1;
        slideContainer.style.left =  slideSize - slideSize;
        console.log(slideContainer.style.left);

    }

    console.log(currentSlide);
});
