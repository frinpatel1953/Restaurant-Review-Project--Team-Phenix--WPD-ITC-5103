const signUpBtn = document.getElementById('signUpBtn');
const signUpPopup = document.getElementById('signUpPopup');
const closeSignUpPopup = document.getElementById('closeSignUpPopup');

// Show the Sign-Up popup
signUpBtn.addEventListener('click', () => {
  signUpPopup.style.display = 'block';
});

// Close the Sign-Up popup
closeSignUpPopup.addEventListener('click', () => {
  signUpPopup.style.display = 'none';
});

// Optional: Close the Sign-Up popup on clicking outside
signUpPopup.addEventListener('click', (e) => {
  if (e.target === signUpPopup) {
    signUpPopup.style.display = 'none';
  }
});
