// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add hover and focus styles for option cards
    const cardStyles = document.createElement('style');
    cardStyles.textContent = `
        .option-card {
            transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
        }
        
        .option-card:hover {
            transform: scale(1.03);
            box-shadow: 0 0 20px rgba(244, 208, 63, 0.5),
                        0 0 40px rgba(244, 208, 63, 0.3);
        }

        .option-card:focus {
            outline: none;
            box-shadow: 0 0 20px rgba(244, 208, 63, 0.6);
            transform: translateY(-5px);
            transition: box-shadow 0.3s ease, transform 0.2s ease;
        }

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
    `;
    document.head.appendChild(cardStyles);

    // Make option cards focusable
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.setAttribute('tabindex', '0');
    });

    // Create floating bubble effect
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 40 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.opacity='5';
        bubble.style.bottom = '-30px';
        bubble.style.position = 'fixed';
        bubble.style.background = 'rgba(255, 255, 255, 0.1)';
        bubble.style.borderRadius = '90%';
        bubble.style.animation = `float ${Math.random() * 5 + 5}s linear infinite`;
        
        document.body.appendChild(bubble);
        
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Create new bubbles periodically
    setInterval(createBubble, 300);

    // Initialize Lucide icons
    lucide.createIcons();
});
