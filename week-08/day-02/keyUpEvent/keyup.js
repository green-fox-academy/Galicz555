//   1) Subscribe to keyup events on the global window object
//   2) Console log the event object and peek inside
//   3) Display the last pressed key's code as "Last pressed key code is: __"

'use strict'

const log = document.getElementsByTagName('h1')[0];

document.addEventListener('keyup', logKey);

function logKey(e) {
    log.textContent = `${e.code}`;
}