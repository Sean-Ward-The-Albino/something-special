function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "When we want to observe something under a mincroscope we use electrons that are accelerated to 70% of the speed of light. Through that process we about to see things the size of 1 nanometer (10 atoms thick). When peering into someone elses mind it's not as logocally straightforward and trust me the process is a lot more difficult and involved than what I said. Despite the emotional complexites I hope that one day I can be able to to understand your mind like aan electron can create an image of a transister. You're so complex and interesting and I want to understand you to a deep of a level as I can.";

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
