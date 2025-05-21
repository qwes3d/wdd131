const menuButton = document.getElementById('menuBtn');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');

   // Toggle the button symbol
  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖"; // Unicode 'X'
  } else {
    menuButton.textContent = "☰"; // Hamburger
  }

});

// Footer dynamic content
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
