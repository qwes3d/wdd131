// main.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after click
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    }
  });
});

// Quote form validation
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    const name = quoteForm.querySelector('input[name="name"]');
    const email = quoteForm.querySelector('input[name="email"]');
    const product = quoteForm.querySelector('select[name="product"]');
    let valid = true;
    let messages = [];

    if (!name.value.trim()) {
      valid = false;
      messages.push('Please enter your name.');
    }

    if (!email.value.trim() || !email.value.includes('@')) {
      valid = false;
      messages.push('Please enter a valid email.');
    }

    if (!product.value) {
      valid = false;
      messages.push('Please select a product.');
    }

    if (!valid) {
      e.preventDefault();
      alert(messages.join('\n'));
    }
  });
}
