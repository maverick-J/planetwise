// Core UI elements
const progressCards = document.querySelectorAll('.progress-card');
const header = document.querySelector('.header');

// Apply glassmorphism and animation effects
progressCards.forEach(card => {
    // Add frosted glass effect
    card.style.background = 'rgba(255, 255, 255, 0.1)';
    card.style.backdropFilter = 'blur(10px)';
    card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    card.style.borderRadius = '24px';

    // Smooth hover transitions
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02) translateY(-8px)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12), 0 0 20px rgba(0, 123, 255, 0.5)'; // Added blue glow
        card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.08)';
    });
});

// Fluid header animations
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScrollY) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScroll;
});

// Smooth value animation with easing
function animateValue(element, start, end, duration) {
    const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(start + (end - start) * easedProgress);

        if (element.classList.contains('metric-value')) {
            if (element.textContent.includes('$')) {
                element.textContent = `$${currentValue}K`;
            } else if (element.textContent.includes('+')) {
                element.textContent = `${currentValue}+`;
            } else {
                element.textContent = currentValue;
            }
        }

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Intersection observer with fluid reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                const metricValue = entry.target.querySelector('.metric-value');
                const currentValue = parseInt(metricValue.textContent.replace(/\D/g, ''));
                animateValue(metricValue, 0, currentValue, 2000);
            });

            observer.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.2,
    rootMargin: '50px'
});

progressCards.forEach(card => {
    observer.observe(card);
});
