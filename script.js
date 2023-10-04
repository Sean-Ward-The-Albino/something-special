function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "We create our own paths and sometimes paths cross, somehow you have created a path to me and I can't imagine my life without you in it. You're laugh and smile raidiate like the sunlight coming upon the earth.";
    let charIndex = 0;

    function typeNextCharacter() {
        if (charIndex < sloganText.length) {
            sloganElement.innerHTML += sloganText.charAt(charIndex);
            charIndex++;
            setTimeout(typeNextCharacter, 30); // Adjust typing speed as needed
        }
    }

    typeNextCharacter();
}

// Add event listener to trigger the typing effect when the page is fully loaded
window.addEventListener('load', () => {
    typeSlogan();
});
