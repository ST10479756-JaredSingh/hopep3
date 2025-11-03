// History & Mission accordions
const accordions = document.querySelectorAll(".accordion:not(.core-values-accordion)");
accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    const content = this.nextElementSibling;

    accordions.forEach(otherAcc => {
      if (otherAcc !== this) {
        const otherContent = otherAcc.nextElementSibling;
        otherContent.classList.remove("expanded");
        otherAcc.classList.remove("active");
      }
    });

    this.classList.toggle("active");
    content.classList.toggle("expanded");
  });
});

// Core Values accordion
const coreAccordion = document.querySelector(".core-values-accordion");
const coreContent = document.querySelector(".core-values-content");

coreAccordion.addEventListener("click", () => {
  coreAccordion.classList.toggle("active");
  coreContent.classList.toggle("expanded");
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const images = document.querySelectorAll(".lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Contact form
const form = document.getElementById("contactForm");
const feedbackMsg = document.getElementById("feedbackMsg");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", function (event) {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    event.preventDefault();
    feedbackMsg.textContent = "Please enter a valid email address.";
    feedbackMsg.style.color = "red";
  } else {
    feedbackMsg.textContent = "Email sent successfully!";
    feedbackMsg.style.color = "green";
  }
});

clearBtn.addEventListener("click", () => {
  form.reset();
  feedbackMsg.textContent = "";
});
