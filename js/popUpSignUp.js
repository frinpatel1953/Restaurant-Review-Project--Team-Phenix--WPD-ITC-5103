// Get all sign-up buttons and popup elements
const signUpButtons = document.querySelectorAll('[id^="signUpBtn"]'); // Select all elements with IDs starting with 'signUpBtn'
const signUpPopup = document.getElementById('signUpPopup');
const closeSignUpPopup = document.getElementById('closeSignUpPopup');

// Show popup when any sign-up button is clicked
signUpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    signUpPopup.style.display = 'block';
  });
});

// Close popup when the close button is clicked
closeSignUpPopup.addEventListener('click', () => {
  signUpPopup.style.display = 'none';
});

// Optional: Close popup on clicking outside of the popup content
signUpPopup.addEventListener('click', (e) => {
  if (e.target === signUpPopup) {
    signUpPopup.style.display = 'none';
  }
});
