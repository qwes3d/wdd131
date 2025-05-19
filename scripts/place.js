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
