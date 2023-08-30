// Get the header and mobile menu elements
const header = document.querySelector('header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

// Create a hamburger icon for the mobile menu
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
for (let i = 0; i < 3; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  menuIcon.appendChild(bar);
}

// Clone the navigation links from the existing navigation
const navLinks = document.querySelector('nav').cloneNode(true);
navLinks.classList.add('mobile-nav');

// Append the elements to the header
mobileMenu.appendChild(menuIcon); // Place the menu icon first
mobileMenu.appendChild(navLinks);
header.appendChild(mobileMenu);

// Toggle the mobile menu on menu icon click
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
