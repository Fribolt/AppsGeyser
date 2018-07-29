const sliderState = {
  activeSlide: 2
};

const stringToNumber = function (string) {
    return + string
};

const moveSlider = function (distance) {
    document.querySelector('.slider').style.left = distance + 'px';
};

const showComment = function (index) {
    document.querySelector('.comments .comment:nth-child(' + sliderState.activeSlide + ')').classList.toggle('active');
    document.querySelector('.comments .comment:nth-child(' + index + ')').classList.toggle('active');
};

const setActiveSlide = function (index) {
    document.querySelector('.slider .slide:nth-child(' + sliderState.activeSlide + ')').classList.toggle('active');
    document.querySelector('.slider .slide:nth-child(' + index + ')').classList.toggle('active');
};

const setActiveIndicator = function (index) {
    document.querySelector('.indicators .indicator:nth-child(' + sliderState.activeSlide + ')').classList.toggle('active');
    document.querySelector('.indicators .indicator:nth-child(' + index + ')').classList.toggle('active');

};

const changeSlide = function (index) {
    const elementSize = document.querySelector('.slider .slide').offsetWidth;
    const stepSize = - elementSize * (index - 1);
    moveSlider(stepSize);
    showComment(index);
    setActiveSlide(index);
    setActiveIndicator(index);
    sliderState.activeSlide = index;
};

document.querySelector('.slider-container').addEventListener('click', function (e) {

    switch (e.target.parentNode.className) {
        case 'slide':
            changeSlide(stringToNumber(e.target.parentNode.getAttribute('data-index')));
            break;
    }
});

document.querySelector('.indicators').addEventListener('click', function (e) {
    switch (e.target.className) {
        case 'indicator':
            changeSlide(stringToNumber(e.target.getAttribute('data-index')));
            break;
    }
});

