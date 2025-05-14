// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuBtn');
  const navMenu = document.querySelector('nav ul');

  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Display current year in footer
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  // Display last modified date
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
