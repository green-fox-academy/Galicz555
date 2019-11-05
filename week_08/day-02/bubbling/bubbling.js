// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//     - the nav buttons(up, down, left, right) move the background by 10px
//     - the zoom buttons increase / decrease the image by 20 %
//     - attach only two event listeners to the nav element
//     - one for navigation
//     - one for zooming

'use strict'

const nav = document.querySelector("nav");
const imgInspector = document.getElementsByClassName("img-inspector")[0];

let img = {
	verticalPosition: 0,
	horizontalPosition: 0,
	aspectRatio: 0
}

nav.addEventListener ('click', function (event) {
	if (event.target.getAttribute('data-action') === 'move') {
		if (event.target.getAttribute('data-direction') === 'right') {
				img.horizontalPosition += 10;
		} else if (event.target.getAttribute('data-direction') === 'left') {
				img.horizontalPosition -= 10;
		} else if (event.target.getAttribute('data-direction') === 'up') {
				img.verticalPosition -= 10;
		} else if (event.target.getAttribute('data-direction') === 'down') {
				img.verticalPosition += 10;
		}
		imgInspector.style.backgroundPosition = `${img.horizontalPosition}px ${img.verticalPosition}px`;
	} else if (event.target.getAttribute('data-action') === 'zoom') {
		if (event.target.getAttribute('data-direction') === 'in') {
			img.aspectRatio += 20;
		} else if (event.target.getAttribute('data-direction') === 'out') {
			img.aspectRatio -= 20;
		}
		imgInspector.style.backgroundSize = `${200 * (1 + img.aspectRatio / 100)}%`
	};
});
