const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
const modifiedDate = new Date(document.lastModified);

lastModified.textContent = `Last Modified: ${modifiedDate.toLocaleString("en-US",{
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
})}`;