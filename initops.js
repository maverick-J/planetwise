// Get body element and add hover styles for option cards
const style = document.createElement('style');
style.textContent = `
  .option-card {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    border: 2px solid transparent;
  }
  
  .option-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6),
                0 0 30px rgba(255, 215, 0, 0.4);
    border-color: rgba(255, 215, 0, 0.8);
  }

  .option-card:focus {
    outline: none;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6),
                0 0 30px rgba(255, 215, 0, 0.4);
    border-color: rgba(255, 215, 0, 0.8);
  }
`;
document.head.appendChild(style);

// Add focus/keyboard navigation support
document.addEventListener('DOMContentLoaded', () => {
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.setAttribute('tabindex', '0');
    });
});

// Initialize Lucide icons
lucide.createIcons();
