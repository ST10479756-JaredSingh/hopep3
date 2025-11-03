// Filter and Search Logic
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resourceCards = document.querySelectorAll(".resource-card");

function filterResources() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  resourceCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const keywords = card.getAttribute("data-keywords");
    const category = card.getAttribute("data-category");

    const matchesSearch =
      title.includes(searchTerm) || keywords.includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterResources);
categoryFilter.addEventListener("change", filterResources);

// Access Request Alerts
document.querySelectorAll(".download-btn").forEach(button => {
  button.addEventListener("click", () => {
    const resourceName = button.getAttribute("data-resource");
    alert(`Thank you for your interest in "${resourceName}".\n\nPlease contact us at info@hopeharvest.org to request access.`);
  });
});
