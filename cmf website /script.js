// Function to add "active" class to items in view
function activateParallaxItems() {
    const items = document.querySelectorAll('.parallax-item');

    items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Trigger animation when the item enters the viewport
        if (rect.top < windowHeight - 100 && rect.bottom > 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', activateParallaxItems);

// Run on page load to check initial visibility
document.addEventListener('DOMContentLoaded', activateParallaxItems);




