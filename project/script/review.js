
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
    document.getElementById("reviewSection").style.display = "block";
});
