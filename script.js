function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "prefection is a paradox concept. The ideas of something that's perfect is boring because that's it. there is no room for growth, imagination, development, or anything else. it's a paradox because the lack of prefection is perfect. i am not perfect, you are not perfect and yet that's perfect. Everyone can learn to love their flaws as their flaws make them unique and allow growth.";

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
