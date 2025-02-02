// Organization Options Page JavaScript

// Function to handle organization type selection
function handleOrgTypeSelection(type) {
    // Store selected organization type
    localStorage.setItem('selectedOrgType', type);
    
    // Redirect based on organization type
    switch(type) {
        case 'funder':
            window.location.href = 'funding-options.html';
            break;
        case 'ngo':
            window.location.href = 'ngo-options.html';
            break;
        case 'corporate':
            window.location.href = 'corporate-options.html';
            break;
        default:
            console.error('Invalid organization type selected');
    }
}

// Add click event listeners to option cards when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)'; // Golden glow
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });

        // Add click handler
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const orgType = card.getAttribute('data-org-type');
            handleOrgTypeSelection(orgType);
        });
    });

    // Initialize Lucide icons
    lucide.createIcons();
});

// Handle header visibility on scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('header--hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('header--hidden')) {
        // Scrolling down
        header.classList.add('header--hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header--hidden')) {
        // Scrolling up
        header.classList.remove('header--hidden');
    }
    
    lastScroll = currentScroll;
});
