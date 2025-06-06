const menuButton = document.getElementById('menuBtn');
const navMenu = document.querySelector('nav ul');

// Toggle navigation
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Footer
dcument.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
o
// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Birmingham England",
    location: "Birmingham, England",
    dedicated: "2000, September, 16",
    area: 40000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/154ee0c38f920aa66074c0338fe29f535e0d0a65/full/500%2C/0/default.jpg"
  },
    {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, May, 9",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/500%2C/0/default.jpg" 
  
},
{
  templeName: "Copenhagen Denmark",
  location: "Copenhagen, Denmark",
  dedicated: "1927, September, 30",
  area: 10000,
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
}
];

// Render function
function createTempleCards(data) {
  const container = document.querySelector('.temple-cards');
  container.innerHTML = ''; // Clear existing cards

  data.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3'); // Correct name variable
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
    
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', temple.templeName);
    image.setAttribute('loading', 'lazy');

    card.appendChild(image);
    card.appendChild(name);        // ✅ Use 'name', not 'namwe'
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    container.appendChild(card);
  });
}


// Filters
document.getElementById('home').addEventListener('click', () => createTempleCards(temples));

document.getElementById('old').addEventListener('click', () => {
  const filtered = temples.filter(t => new Date(t.dedicated.split(',')[0]) < new Date(1900, 0));
  createTempleCards(filtered);
});

document.getElementById('new').addEventListener('click', () => {
  const filtered = temples.filter(t => new Date(t.dedicated.split(',')[0]) > new Date(2000, 0));
  createTempleCards(filtered);
});

document.getElementById('large').addEventListener('click', () => {
  const filtered = temples.filter(t => t.area > 90000);
  createTempleCards(filtered);
});

document.getElementById('small').addEventListener('click', () => {
  const filtered = temples.filter(t => t.area < 10000);
  createTempleCards(filtered);
});

// Search Functionality
document.getElementById('searchBox').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = temples.filter(t => t.templeName.toLowerCase().includes(searchTerm));
  createTempleCards(filtered);
});

// Initial render
createTempleCards(temples);
