// ==============================
// Donation Form Interactivity
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const amountSelect = document.getElementById("amount");
    const otherAmountContainer = document.getElementById("other-amount-container");
    const form = document.getElementById("donation-form");
    const feedback = document.getElementById("feedback");

    // Show/hide other amount field
    amountSelect.addEventListener("change", function () {
        if (this.value === "other") {
            otherAmountContainer.style.display = "block";
            document.getElementById("otherAmount").setAttribute("required", "true");
        } else {
            otherAmountContainer.style.display = "none";
            document.getElementById("otherAmount").removeAttribute("required");
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        feedback.textContent = "💚 Thank you for your generous donation! We truly appreciate your support.";
        feedback.style.color = "#4e944f";

        // Reset form and hide extra field
        form.reset();
        otherAmountContainer.style.display = "none";
    });
});
