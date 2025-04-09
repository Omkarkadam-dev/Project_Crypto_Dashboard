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


const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false';

async function loadTickerData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById('tickerContainer');
    container.innerHTML = ''; // Clear old data

    data.forEach(coin => {
      const priceChange = coin.price_change_percentage_24h;
      const trendClass = priceChange >= 0 ? 'price-up' : 'price-down';

      const item = document.createElement('div');
      item.className = 'ticker-item';
      item.innerHTML = `
        <img src="${coin.image}" alt="${coin.name}">
        <span>${coin.symbol.toUpperCase()}</span>
        <span class="${trendClass}">$${coin.current_price.toFixed(2)}</span>
      `;

      container.appendChild(item);
    });
  } catch (err) {
    console.error('Failed to fetch crypto data:', err);
  }
}

// Load on page load
loadTickerData();

// Optional: Auto-refresh every 1 minute
setInterval(loadTickerData, 60000);
