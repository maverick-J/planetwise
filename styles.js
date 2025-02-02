// Get body element and add hover styles for option cards
const style = document.createElement('style');
style.textContent = `
  .option-card {
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  }
  
  .option-card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(244, 208, 63, 0.5), 
                0 0 40px rgba(244, 208, 63, 0.3);
  }
`;
document.head.appendChild(style);
const body = document.body;

// Create floating bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 10px and 30px
    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random starting position
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.bottom = '-20px';
    
    // Add styles
    bubble.style.position = 'fixed';
    bubble.style.background = 'rgba(255, 255, 255, 0.1)';
    bubble.style.borderRadius = '50%';
    bubble.style.animation = `float ${Math.random() * 5 + 5}s linear infinite`;
    
    // Add bubble to body
    body.appendChild(bubble);
    
    // Remove bubble after animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Add keyframe animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0);
            opacity: 0;
        }
        20% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }

    .option-card:focus {
        outline: none;
        box-shadow: 0 0 20px rgba(244, 208, 63, 0.6);
        transform: translateY(-5px);
        transition: box-shadow 0.3s ease, transform 0.2s ease;
    }
`;
document.head.appendChild(style);

// Create new bubbles periodically
setInterval(createBubble, 300);

// Add focus styles to option cards
document.addEventListener('DOMContentLoaded', () => {
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.setAttribute('tabindex', '0');
    });
});

// Initialize Lucide icons
lucide.createIcons();
