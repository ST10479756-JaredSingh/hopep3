document.getElementById("enquiry-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("feedback").innerText = "Thank you! Your enquiry has been sent.";
  this.reset();
});
