const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');


// Show popup
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Optional: Close popup on clicking outside
loginPopup.addEventListener('click', (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
});
