// Variables
let subscriptionForm = document.querySelector('.subscribe form');
let nameForm = document.querySelector('.feedback form');

// Event listeners
subscriptionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let emailInput = document.getElementById('email').value;

    if (validateEmail(emailInput)) {
        alert('Thank you for subscribing with the email: ' + emailInput);
    } else {
        alert('Please enter a valid email address.');
    }
});

nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let nameInput = document.getElementById('name').value;
    let commentInput = document.getElementById('comment').value;

    if (nameInput && commentInput) {
        alert('Thank you, ' + nameInput + '! Your comment has been submitted.');
    } else {
        alert('Please fill out both your name and comment.');
    }
});

// Functions
function validateEmail(email) {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email);
}