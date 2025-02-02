// Enhanced header animation with smooth transitions
function initializeHeaderScroll() {
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Smooth header transition
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }
        lastScroll = currentScroll;
    });
}

// Initialize animations and interactions on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    
    // Initialize enhanced header behavior
    initializeHeaderScroll();

    // Add smooth scroll reveal animations to sections
    const sections = document.querySelectorAll('section');
    animateOnScroll(sections, 'fade-in');

    // Add hover animations to interactive elements
    const cards = document.querySelectorAll('.card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // Page specific animations
    if (currentPage.includes('fundingabout.html')) {
        animateProgressBars();
        initializeCounters();
    }
    else if (currentPage.includes('impactabout.html')) {
        animateImpactMetrics();
        initializeParallax();
    }
    else if (currentPage.includes('volunteerabout.html')) {
        animateVolunteerStats();
        initializeTestimonialSlider();
    }
});

// Enhanced scroll animation with options
function animateOnScroll(elements, animationClass, options = {}) {
    const defaultOptions = {
        threshold: 0.2,
        rootMargin: '0px',
        delay: 0
    };
    const finalOptions = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.classList.add(animationClass);
                    entry.target.style.transition = 'all 0.8s ease-out';
                    entry.target.style.opacity = '1';
                }, finalOptions.delay);
            }
        });
    }, {
        threshold: finalOptions.threshold,
        rootMargin: finalOptions.rootMargin
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Export enhanced animation functions
export {
    initializeHeaderScroll,
    animateOnScroll
};
