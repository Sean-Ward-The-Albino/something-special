function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "When considering how we can have the ability to shift the dynamic of our lifestyle its sometimes overwhleming to decide which one suits us the best. I think it's about the people you live your life with. If you're around creative people you will do creative things. Picking whom to surrouned yourself with is difficult sometimes but it's just somethings those gems of people in which you don't have to think about if they will be a good fitin your life because you know they will be. They make you feel calm or energetic and you can feel confort in not having to try to be someone or something you're not.";

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
