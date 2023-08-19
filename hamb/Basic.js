$(document).ready(function() {
	$('.header__burger').click(function(event) {
	$('.header__burger,.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});
});

function choosePageGallerey() {
	if(screen.width <= 768) {
		window.location.href = 'gallerey/mobilegallerey/index.html';
	}
	else {
		window.location.href = 'gallerey/index.html';
	}
}