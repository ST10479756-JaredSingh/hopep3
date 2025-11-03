// Lightbox for gallery images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.lightbox');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('lightbox-overlay');

            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

            overlay.appendChild(lightboxImg);
            document.body.appendChild(overlay);

            // Close overlay on click
            overlay.addEventListener('click', () => overlay.remove());
        });
    });
});
