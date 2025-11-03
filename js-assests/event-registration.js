// Handle form submission
document.getElementById("registration-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.trim();
  const eventSelect = document.getElementById("event");
  const selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;

  // Validate phone number: must be 10 digits or empty
  if (phone !== "" && !/^\d{10}$/.test(phone)) {
    phoneInput.style.border = "2px solid red"; // highlight invalid input
    phoneInput.focus();
    showFeedback("Please enter a valid 10-digit phone number.");
    return;
  } else {
    phoneInput.style.border = ""; // reset border if valid
  }

  // Show popup alert
  alert(`Thank you, ${name}!\n\nWe have received your registration for "${selectedEvent}".\nWe appreciate your interest and will get back to you with further details soon.`);

  // Update feedback div
  showFeedback(`Registration for "${selectedEvent}" received! We will contact you soon.`);

  // Reset form
  this.reset();
});

// Auto-fill event when coming from Events page via URL
const urlParams = new URLSearchParams(window.location.search);
const eventParam = urlParams.get("event");
if (eventParam) {
  const eventSelect = document.getElementById("event");
  for (let option of eventSelect.options) {
    if (option.value === eventParam) {
      option.selected = true;
      break;
    }
  }
}

// Restrict phone input to digits only while typing
document.getElementById("phone").addEventListener("input", function() {
  this.value = this.value.replace(/\D/g, ''); // remove non-digit characters
});

// Function to show feedback with fade-out effect
function showFeedback(message) {
  const feedback = document.getElementById("feedback");
  feedback.innerText = message;
  feedback.style.opacity = 1;

  // Fade out after 5 seconds
  setTimeout(() => {
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity <= 0.05) {
        clearInterval(fadeOut);
        feedback.innerText = "";
        feedback.style.opacity = 1; // reset for next time
      }
      feedback.style.opacity = opacity;
      opacity -= 0.05;
    }, 50);
  }, 5000);
}
