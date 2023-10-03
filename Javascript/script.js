function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "You being the only person that I can trust is one of my greatest weaknesses but, I'm glad it's you because, you're the only person I want to trust. I love that you listen to me ramble about computers or life and I love listening to you ramble about what you want and what you're doing.";
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
