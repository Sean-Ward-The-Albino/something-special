// Function to fade in elements
function fadeInElements() {
    // Get elements to fade in
    const elementsToFadeIn = document.querySelectorAll('.fade-in');

    // Loop through the elements and apply the fade-in class
    elementsToFadeIn.forEach((element, index) => {
        // Delay the animation for each element to create a staggered effect
        setTimeout(() => {
            element.classList.add('fade-in-animation');
        }, index * 500); // Adjust the delay duration as needed
    });
}

// Add event listener to trigger the fade-in when the page is fully loaded
window.addEventListener('load', () => {
    fadeInElements();
});