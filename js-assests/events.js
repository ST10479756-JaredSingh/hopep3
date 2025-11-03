const modal = document.getElementById('eventModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close');

// Open modal when event clicked
document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = event.dataset.img;
        modalImg.alt = event.dataset.title;
        modalTitle.textContent = event.dataset.title;
        modalDate.textContent = `${event.dataset.date} (${event.dataset.type})`;
        modalDescription.textContent = event.dataset.description;
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
