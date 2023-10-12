function typeSlogan() {
    const sloganElement = document.getElementById('message-content');
    const sloganText = "It's human nautre to not let our insecurites and flaws show becuase for thounsdands of e=years that's been the only way to assert dominace in the world and it's still like that just in a less direct asspect. I've already discussed how not being perfect is good because we can improve. Having said that I don't think that impossible consecpt still isn't something people shouldn't look too if it's impossible to reach tj=hen let peoplle try because in the end they'lll be further along than where they stated though it can be very demoralizing. The point is you want to find people that you don't have out your guard up against if you think that you have to hide stuff from people they're the wrong people for you that can be difficult given one group of people can bring out one side of usnbut makes us hide another and another group does the exact oppisite.";

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
