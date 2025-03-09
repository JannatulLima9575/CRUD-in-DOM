// animation part
const text = "Bangladesh 2.0";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Typing speed
    } else {
        setTimeout(() => {
            document.getElementById("text").textContent = ""; // Clear text
            index = 0;
            typeEffect(); // Restart animation
        }, 1000); // Pause before restarting
    }
}

typeEffect();
