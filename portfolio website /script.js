const paragraph = document.querySelector('p');

// Function to check if the paragraph is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to trigger the animation
function onScroll() {
  if (isInViewport(paragraph)) {
    paragraph.classList.add('popup-animation'); // Add the animation class when in viewport
    window.removeEventListener('scroll', onScroll); // Remove the scroll event listener after animation triggers
  }
}

// Add event listener for scroll
window.addEventListener('scroll', onScroll);

// Optional: Check if the paragraph is already in the viewport when the page loads
window.addEventListener('load', onScroll);