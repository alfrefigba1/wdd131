// Dynamically display the current year and the document's last-modified date.
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
