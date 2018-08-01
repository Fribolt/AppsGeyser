var lines = bodymovin.loadAnimation({
	container: document.getElementById('animate-about-us'), // Required
	path: 'animationJson/appG.json', // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: false, // Optional
	name: "Hello World" // Name for future reference. Optional.
});

var noCash = bodymovin.loadAnimation({
	container: document.querySelector('.icon-money'), // Required
	path: 'animationJson/noCash.json', // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: false, // Optional
	name: "Hello World" // Name for future reference. Optional.
});

var stars = bodymovin.loadAnimation({
	container: document.querySelector('.icon-star'), // Required
	path: 'animationJson/stars.json', // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: false, // Optional
	name: "Hello World" // Name for future reference. Optional.
});

var magic = bodymovin.loadAnimation({
	container: document.querySelector('.icon-magic-wand'), // Required
	path: 'animationJson/magic.json', // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: false, // Optional
	name: "Hello World" // Name for future reference. Optional.
});

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 530 && scrolled < 700) {
		setTimeout(function () {
			lines.play();
		}, 2000);
	} else if (scrolled > 1330 && scrolled < 1500) {
		setTimeout(function () {
			noCash.play();
		}, 1000);
		setTimeout(function () {
			stars.play();
		}, 2000);
		setTimeout(function () {
			magic.play();
		}, 3000);
	}
};