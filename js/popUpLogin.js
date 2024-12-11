// Get all login buttons and popup elements
const loginButtons = document.querySelectorAll('[id^="loginBtn"]'); // Select all elements with IDs starting with 'loginBtn'
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');

// Show popup when any login button is clicked
loginButtons.forEach((button) => {
  button.addEventListener('click', () => {
    loginPopup.style.display = 'block';
  });
});

// Close popup when the close button is clicked
closePopup.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Optional: Close popup on clicking outside of the popup content
loginPopup.addEventListener('click', (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
});
