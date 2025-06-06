const products = [
  { name: "Solar Panel A" },
  { name: "Wind Turbine B" },
  { name: "Smart Thermostat C" },
  { name: "Battery Backup D" }
];

window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('product');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
});


// Footer dynamic content
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
