const navToggler = document.querySelector('.nav__toggler');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');

// Toggle mobile menu

navToggler.addEventListener('click', () => {
	header.classList.toggle('expanded');
	overlay.classList.toggle('expanded');
});

overlay.addEventListener('click', () => {
	header.classList.remove('expanded');
	overlay.classList.remove('expanded');
});

window.addEventListener('resize', () => {
	// Remove mobile nav at larger screens
	if (window.matchMedia('(min-width: 768px)').matches) {
		header.classList.remove('expanded');
		overlay.classList.remove('expanded');
	}
});
