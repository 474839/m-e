const paragraph = document.querySelector('p');

function showPopupAnimation() {
  paragraph.classList.add('popup-animation'); // Add the animation class
}

// Trigger the animation
setTimeout(showPopupAnimation, 500); // Delay before the pop-up appears