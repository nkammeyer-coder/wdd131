const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");}
)