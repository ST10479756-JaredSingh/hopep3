// Handle form submission
document.getElementById("volunteer-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value;

  // Validate phone input: only digits allowed if entered
  if (phone && !/^\d{10}$/.test(phone)) {
    showFeedback("Please enter a valid 10-digit phone number.", true);
    document.getElementById("phone").focus();
    return;
  }

  // Success message
  alert(`Thank you, ${name}!\n\nYour volunteer sign-up for "${interest}" has been received.\nWe’ll reach out soon with more details.`);

  showFeedback("Thank you for signing up! We’ll contact you shortly.", false);
  this.reset();
});

// Only allow numbers in the phone field
document.getElementById("phone").addEventListener("input", function() {
  this.value = this.value.replace(/\D/g, '');
});

// Show feedback and fade out
function showFeedback(message, isError) {
  const feedback = document.getElementById("feedback");
  feedback.style.color = isError ? "#b71c1c" : "#2e7d32";
  feedback.innerText = message;
  feedback.style.opacity = 1;

  setTimeout(() => {
    feedback.style.opacity = 0;
  }, 4000);
}
