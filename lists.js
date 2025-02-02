// Enhanced search functionality with smooth animations
const searchInput = document.querySelector('.search-input');
const initiativeCards = document.querySelectorAll('.initiative-card');

// Add hover effects and info display to cards
initiativeCards.forEach(card => {
    // Create info popup element
    const infoPopup = document.createElement('div');
    infoPopup.className = 'info-popup';
    infoPopup.style.cssText = `
        position: absolute;
        left: 70%;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 270px;
        background: rgba(255, 255, 255, 0.95);
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 100;
    `;

    // Add dummy content
    const title = card.querySelector('.initiative-title').textContent;
    infoPopup.innerHTML = `
        <h3 style="color: #004d00; margin-bottom: 0.5rem;">${title}</h3>
        <p style="margin: 0.5rem 0; color: #333; font-size: 0.9rem;">
            This initiative aims to create sustainable impact in local communities 
            through innovative solutions and community engagement.
        </p>
        <ul style="color: #333; padding-left: 1.2rem; font-size: 0.9rem;">
            <li>Impact: 1000+ beneficiaries</li>
            <li>Duration: 12 months</li>
            <li>Success rate: 85%</li>
        </ul>
    `;
    
    card.style.position = 'relative';
    card.appendChild(infoPopup);

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.boxShadow = '0 0 20px 5px rgba(255, 215, 0, 0.5)'; // Golden glow
        card.style.transition = 'all 0.3s ease';
        infoPopup.style.opacity = '1';
        infoPopup.style.visibility = 'visible';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        card.style.transition = 'all 0.3s ease';
        infoPopup.style.opacity = '0';
        infoPopup.style.visibility = 'hidden';
    });
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    initiativeCards.forEach(card => {
        const title = card.querySelector('.initiative-title').textContent.toLowerCase();
        const details = card.querySelector('.initiative-details').textContent.toLowerCase();
        const description = card.querySelector('p:last-of-type').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.sdg-tag')).map(tag => tag.textContent.toLowerCase());
        
        const searchableText = `${title} ${details} ${description} ${tags.join(' ')}`;
        
        if (searchableText.includes(searchTerm)) {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
            card.style.display = 'block';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
});

// Smooth transitions for "More Details" links
document.querySelectorAll('.more-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const href = btn.getAttribute('href');
        
        // Add fade-out effect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Enhanced header scroll behavior with smooth transitions
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add blur effect based on scroll position
    const blurAmount = Math.min(currentScroll / 100, 20);
    header.style.backdropFilter = `blur(${blurAmount}px)`;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    lastScroll = currentScroll;
});

// Add smooth transitions for dark mode toggle
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const body = document.body;

function updateTheme(e) {
    if (e.matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

prefersDarkScheme.addListener(updateTheme);
updateTheme(prefersDarkScheme);
