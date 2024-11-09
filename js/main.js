const navButton = document.querySelector('.check_btn');
const navButtonIcon = document.querySelector('.check_btn i');
const dropDownMenu = document.querySelector('.navbar__dropdown_menu_container');
const searchButton = document.querySelector('.search_icon');
const searchInput = document.querySelector('.search-input');

// Toggle the dropdown menu
navButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  navButtonIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Toggle the search input
searchButton.addEventListener('click', () => {
  searchInput.classList.toggle('visible');
  const isSearchOpen = searchInput.classList.contains('visible');
  searchButton.querySelector('i').className = isSearchOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-magnifying-glass';
});
