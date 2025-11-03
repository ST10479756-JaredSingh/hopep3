// ======== Form Validation Script ========
const form = document.getElementById('contactForm');
const resultDiv = document.getElementById('contactResult');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('c_fullname').value.trim();
  const email = document.getElementById('c_email').value.trim();
  const type = document.getElementById('c_msgtype').value;
  const message = document.getElementById('c_message').value.trim();

  const emailRegex = /\S+@\S+\.\S+/;
  if (!name || !email || !emailRegex.test(email) || !type || message.length < 10) {
    showMessage('⚠️ Please fill all fields correctly before submitting.', 'error');
    return;
  }

  // Simulate success
  showMessage('✅ Message sent successfully! Thank you for contacting us.', 'success');
  form.reset();
});

function showMessage(text, type) {
  resultDiv.textContent = text;
  resultDiv.style.color = type === 'success' ? '#4e944f' : 'red';
  resultDiv.style.opacity = 1;
  setTimeout(() => (resultDiv.style.opacity = 0), 4000);
}
