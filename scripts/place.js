// place.js - Footer "Last Modified" script

// Get the <span> element with id="last-modified"
const lastModifiedSpan = document.getElementById("last-modified");

// Format the last modified date
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short"
});

// Set the content of the span
lastModifiedSpan.textContent = formattedDate;

// Static values for temperature and wind speed (Imperial: °F and mph)
const temperature = 45; // °F
const windSpeed = 10;   // mph

// Function to calculate wind chill (Imperial formula)
function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1); // Round to 1 decimal place
}

// Check if conditions are valid for wind chill calculation
let windChill;

if (temperature <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temperature, windSpeed) + " °F";
} else {
  windChill = "N/A";
}

// Display result in HTML element with ID "windchill"
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("windchill").textContent = windChill;
});
