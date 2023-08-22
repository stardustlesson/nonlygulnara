"use strict"
function ChnageColor1() {
	document.querySelector('body').classList.remove('violet', 'blue', 'skystyle');
	document.querySelector('body').classList.add('red');
}
function ChnageColor2() {
	document.querySelector('body').classList.remove('violet', 'red', 'skystyle');
	document.querySelector('body').classList.add('blue');
}
function ChnageColor3() {
	document.querySelector('body').classList.remove('red', 'blue', 'skystyle');
	document.querySelector('body').classList.add('violet');
}
function ChnageColor4() {
	document.querySelector('body').classList.remove('violet', 'blue', 'red');
	document.querySelector('body').classList.add('skystyle');
}

