const typingText = document.querySelector('.typing-animation');
const texts = ["Web Developer", "Engineer", "Traveler"];
let index = 0;
let charIndex = 0;
let isTyping = true;

function type() {
    if (charIndex < texts[index].length) {
        typingText.innerHTML = texts[index].substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(type, 100); // Typing speed (100ms per character)
    } else {
        isTyping = false;
        setTimeout(erase, 2000); // Wait 2 seconds before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.innerHTML = texts[index].substring(0, charIndex - 1) + '<span class="cursor">|</span>';
        charIndex--;
        setTimeout(erase, 50); // Erasing speed (50ms per character)
    } else {
        isTyping = true;
        index = (index + 1) % texts.length; // Move to the next word
        setTimeout(type, 500); // Wait 0.5 seconds before typing the next word
    }
}

type(); // Start the typing animation


// Hambuger toggle

document.getElementById('menu-icon').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.search-container').classList.toggle('active');
    document.querySelector('.btn').classList.toggle('active');
});