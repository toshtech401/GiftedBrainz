const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const agreementCheckbox = document.getElementById('agreement');
    const validationErrorsContainer = document.getElementById('validationErrors');

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Clear previous validation errors
        validationErrorsContainer.innerHTML = '';

        // Array to store validation errors
        const errors = [];

        // Perform validation
        if (usernameInput.value === '') {
            errors.push('Please enter a username.');
        }

        if (emailInput.value === '') {
            errors.push('Please enter an email address.');
        }

        if (passwordInput.value === '') {
            errors.push('Please enter a password.');
        }

        if (!agreementCheckbox.checked) {
            errors.push('Please agree to the terms and conditions.');
        }

        // Display validation errors, if any
        if (errors.length > 0) {
            const errorsList = document.createElement('ul');
            errors.forEach((error) => {
                const listItem = document.createElement('li');
                listItem.textContent = error;
                errorsList.appendChild(listItem);
            });
            validationErrorsContainer.appendChild(errorsList);
            return;
        }

        // If all validation passes, you can proceed with form submission
        // form.submit(); // Uncomment this line to submit the form
    }

    // Add event listener to the form submit event
    form.addEventListener('submit', handleSubmit);
