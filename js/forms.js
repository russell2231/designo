const contactForm = document.querySelector('#contact-form');

function isValidInput(input) {
	if (input.value === '') {
		input.parentElement.classList.add('error');
	} else {
		return true;
	}

	return false;
}

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
