const typingText = document.querySelector('.typing-animation');
const texts = ["Developer", "Engineer", "Traveler"];
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
    document.querySelector('.reachMeBtn').classList.toggle('active');
});


// Contact popup

// Get the popup
var popup = document.getElementById("contactPopup");
var thankYouPopup = document.getElementById("thankYouPopup");

// Get the button that opens the popup
var btn = document.querySelector(".reachMeBtn");

// Get the <span> element that closes the popup
var closeButtons = document.querySelectorAll(".close");

// When the user clicks the button, open the popup
btn.onclick = function() {
    popup.style.display = "flex";
}

// When the user clicks on <span> (x), close the popups
closeButtons.forEach(function(button) {
    button.onclick = function () {
        contactPopup.style.display = "none";
        thankYouPopup.style.display = "none";
    };
});

// When the user clicks anywhere outside the popups, close them
window.onclick = function (event) {
    if (event.target == contactPopup) {
        contactPopup.style.display = "none";
    }
    if (event.target == thankYouPopup) {
        thankYouPopup.style.display = "none";
    }
};


// Handle Form Submission
const contactForm = document.querySelector("#contactPopup form");
contactForm.addEventListener("submit", function (event) {
   // Prevent the form from submitting the traditional way
    // event.preventDefault(); 

    // Submit the form programmatically
    fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
    })
        .then((response) => {
            if (response.ok) {
                // Wait 0.5 seconds after successful submission
                setTimeout(() => {
                    // Hide the contact popup
                    contactPopup.style.display = "none";

                    // Show the thank you popup
                    // thankYouPopup.style.display = "flex";
                }, 500); // 0.5 seconds delay
            } else {
                alert("Form submission failed. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Form submission failed. Please try again.");
        });
});