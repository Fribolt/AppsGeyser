
var map = new Datamap({
	element: document.querySelector('.map'),
	//projection: 'mercator',
	geographyConfig: {
		highlightOnHover: false,
		popupOnHover: false,
		borderWidth: 0,
	},
	responsive: false,
	fills: {
		defaultFill: "#e3e3e3",
		"hardGreen": "#5CD629",
		"lightGreen": "#A3E07C"
	}
});

// var het = {
// 	one: '5CD629',
// 	two: 'A3E07C',
// 	three: 'C8E6B4'
// };

fadingBubbles = function (layer, data) {
	// the datamap instance
	var self = this,
			className = 'fadingBubble',
			defaultColor = 'red';

	// bind the data
	var bubbles = layer
			.selectAll(className)
			.data(data, JSON.stringify)

	// append the circles
	bubbles.enter()
			.append('circle')
			.attr('class', className)
			.attr('cx', function (datum) {

				return self.latLngToXY(datum.latitude, datum.longitude)[0];

			})
			.attr('cy', function (datum) {

				return self.latLngToXY(datum.latitude, datum.longitude)[1];

			})
			.attr('r', function () {

				/**
				 * The initial radius of the circle.
				 * we will transition this value to a larger number
				 */
				return 1;
			})
			.style('fill', function (d, i) {

				/**
				 * If a fillKey was specified in the data, and if the datamap
				 * was initialized with the "fills" option, then use the color
				 * of this fill key for this bubble
				 */
				if (self.options.fills && d.fillKey) {

					if (self.options.fills[d.fillKey]) {
						return self.options.fills[d.fillKey];
					}
				}
				// no fillKey was specified, so use the default color
				return defaultColor;
			})
			.style('stroke', function (d, i) {

				// same logic as the fill property
				if (self.options.fills && d.fillKey) {

					if (self.options.fills[d.fillKey]) {
						return self.options.fills[d.fillKey];
					}
				}
				return defaultColor;
			})
			.transition()
			.duration(3000)
			.ease(Math.sqrt)
			.attr('r', function (datum) {
				/**
				 * The size of the bubble can be controlled using the magnitude
				 * property
				 */
				return datum.magnitude ? datum.magnitude * 20 : 22;

			})
			.style('fill-opacity', 1e-4)
			.style('stroke-opacity', 1e-3)
			.remove()
}

map.addPlugin('fadingBubbles', fadingBubbles);



///// new



let INTERVAL = 60000;
let PORTION = 10;

function isPageHidden() {
	return document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
}

function elementInViewport2(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
	);
}

function loadInstalls() {
	var start = (new Date()).getTime();
	var instals = [
		{"coordinates":[65,110]},
		{"coordinates":[55,30]},
		{"coordinates":[10,40]},
		{"coordinates":[-10,-50]},
		{"coordinates":[50,-100]}];

	function getInstals(installs) {
		for (var i = 0; i < installs.length; i+=PORTION) {
			showInstallsOnTimeout(i, installs);
		}
	}
	getInstals(instals);
}
loadInstalls();
setInterval(loadInstalls, INTERVAL);
var mapElement = document.querySelector('.map');
function showInstallsOnTimeout(i, installs) {
	setInterval(function () {
		if(!isPageHidden() && elementInViewport2(mapElement)){
			showInstalls(i, installs);
		}
	}, 1000);
}

function showInstalls(i, installs) {
	var bubbles = [];
	for(var j = i; j < installs.length && j < i+PORTION; j++){
		bubbles.push({
			radius: 10,
			latitude: installs[j]['coordinates'][0],
			longitude: installs[j]['coordinates'][1],
			fillKey: Math.random() > 0.5 ? "hardGreen" : "lightGreen"
		});
	}
	map.fadingBubbles(bubbles);
}

