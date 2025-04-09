// Typing effect
const text = "Track Crypto Like a Pro.";
let index = 0;

function typeText() {
  const typingText = document.querySelector(".typing-text");
  typingText.textContent = text.slice(0, index++);
  
  if (index <= text.length) {
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;
