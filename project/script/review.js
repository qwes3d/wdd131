
document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
      const params = new URLSearchParams(window.location.search);
      return {
        product: params.get("product"),
        rating: params.get("rating"),
        installDate: params.get("installDate"),
        features: params.getAll("features").join(", "),
        review: params.get("review") || "N/A",
        username: params.get("username") || "Anonymous"
      };
    }

    const data = getQueryParams();
    document.getElementById("product").textContent = data.product;
    document.getElementById("rating").textContent = data.rating + " star(s)";
    document.getElementById("installDate").textContent = data.installDate;
    document.getElementById("features").textContent = data.features || "None selected";
    document.getElementById("review").textContent = data.review;
    document.getElementById("username").textContent = data.username;
    const reviewSection = document.getElementById("reviewSection");
    if (reviewSection) {
      reviewSection.style.display = "block";
    }
});


// Footer dynamic content
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("balloon-wrapper");

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    
    // Random colors
    const colors = ["#FF69B4", "#FFD700", "#87CEEB", "#32CD32", "#FF4500", "#9370DB"];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random position and delay
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDelay = (Math.random() * 1.5) + "s";
    balloon.style.transform = `scale(${Math.random() * 0.5 + 0.75})`;

    wrapper.appendChild(balloon);
  }

  // Optional: remove after animation ends
  setTimeout(() => {
    wrapper.remove();
  }, 6000);
});
