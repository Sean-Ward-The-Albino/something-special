function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "You're a shinging beacon of joy in my life and I want to just remind you that you have the ability to pursue anything you desire and that I wholheartedly believe in you. You have such a profound and bold personality that I think the world generally lacks and needs now more than ever. This distinct feature about you will help you glow in the future";
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
