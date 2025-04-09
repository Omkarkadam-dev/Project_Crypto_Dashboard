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


// Scroll Fade Animation
const featureCards = document.querySelectorAll('[data-aos]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

featureCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  observer.observe(card);
});
