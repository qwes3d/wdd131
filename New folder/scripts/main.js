// scripts/main.js

// Ensure the DOM is fully loaded before querying elements
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    // Toggle aria-expanded for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));

    // Toggle the nav-open class on <body> to show/hide the mobile menu
    body.classList.toggle('nav-open');
  });
});
