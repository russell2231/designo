const navToggler = document.querySelector('.nav__toggler');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const contactForm = document.querySelector('#contact-form');

function isValidInput(input) {
	if (input.value === '') {
		input.parentElement.classList.add('error');
	} else {
		return true;
	}

	return false;
}

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

// Contact Form Submit

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formInputs = Array.from(contactForm.elements);
	let validForm = true;
	formInputs.pop();

	formInputs.forEach((input) => {
		isValidInput(input);
		if (isValidInput(input) === false) {
			validForm = false;
		}
	});

	if (!validForm) {
		for (let input of formInputs) {
			input.addEventListener('keydown', () => {
				input.parentElement.classList.remove('error');
			});
		}
		validForm = true;
	} else {
		contactForm.innerHTML = `
      <div class="success">
        <h3>Thank you!!</h3>
        <p>We will respond as soon as possible.</p>
      </div>
    `;
	}
});
