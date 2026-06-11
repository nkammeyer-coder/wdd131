const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
const modifiedDate = new Date(document.lastModified);

lastModified.textContent = `Last Modified: ${modifiedDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
})}`;

const filterButtons = document.querySelectorAll(".recipe-filters button");
const recipeCards = document.querySelectorAll(".recipe-card");

if (filterButtons.length > 0 && recipeCards.length > 0) {
    const savedFilter = localStorage.getItem("recipeFilter") || "all";

    filterRecipes(savedFilter);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            localStorage.setItem("recipeFilter", filter);
            filterRecipes(filter);
        });
    });
}

function filterRecipes(filter) {
    recipeCards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || filter === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}