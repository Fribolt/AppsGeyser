var sliderState = {
  activeSlide: 2
};

var containerSize = document.querySelector('.slider-container').offsetWidth;
var elementSize = document.querySelector('.slider .slide').offsetWidth;
var spaceBetween = (containerSize - elementSize) / 2;
var initialLeft = spaceBetween - elementSize;

var leftEnd = initialLeft + elementSize;
var midleEnd = initialLeft;
var rightEnd = initialLeft - elementSize;

var moveSlider = function (index) {
    if ( index === 1 ) {
        document.querySelector('.slider').style.left = leftEnd  + 'px';
    } else if ( index === 2 ) {
        document.querySelector('.slider').style.left = midleEnd + 'px';
    } else if ( index === 3 ) {
        document.querySelector('.slider').style.left = rightEnd + 'px';
    }
};


moveSlider(sliderState.activeSlide);

window.onresize = function() {
    containerSize = document.querySelector('.slider-container').offsetWidth;
    elementSize = document.querySelector('.slider .slide').offsetWidth;
    spaceBetween = (containerSize - elementSize) / 2;
    initialLeft = spaceBetween - elementSize;

    leftEnd = initialLeft + elementSize;
    midleEnd = initialLeft;
    rightEnd = initialLeft - elementSize;
    moveSlider(sliderState.activeSlide);
};

var stringToNumber = function (string) {
    return + string
};

var showComment = function (index) {
    document.querySelector('.comments .comment:nth-child(' + sliderState.activeSlide + ')').classList.toggle('active');
    document.querySelector('.comments .comment:nth-child(' + index + ')').classList.toggle('active');
};

var setActiveSlide = function (index) {
    document.querySelector('.slider .slide:nth-child(' + sliderState.activeSlide + ')').classList.toggle('active');
    document.querySelector('.slider .slide:nth-child(' + index + ')').classList.toggle('active');
};

var setActiveIndicator = function (index) {
    document.querySelector('.indicators .indicator:nth-child(' + sliderState.activeSlide + ')').classList.toggle('active');
    document.querySelector('.indicators .indicator:nth-child(' + index + ')').classList.toggle('active');

};

const changeSlide = function (index) {
    var containerSize = document.querySelector('.slider-container').offsetWidth;
    var elementSize = document.querySelector('.slider .slide').offsetWidth;
    var spaceBetween = (containerSize - elementSize) / 2;
    // console.log('containerSize' + containerSize);
    // console.log('elementSize' + elementSize);
    // console.log('spaceBetween' + spaceBetween);
    console.log('initialLeft' + initialLeft);

    moveSlider(index);
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

