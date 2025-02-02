// Get DOM elements
const searchInput = document.getElementById('place-search');
const placeList = document.getElementById('place-list');
const places = Array.from(placeList.getElementsByTagName('li'));

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    places.forEach(place => {
        const placeName = place.textContent.toLowerCase();
        if (placeName.includes(searchTerm)) {
            place.style.display = '';
            place.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            place.style.display = 'none';
        }
    });
});

// Auto-scroll based on mouse position
const placeListContainer = document.querySelector('.place-list');
let scrollAnimation;
const scrollSpeed = 100000; // Increased to 2000 pixels per scroll (10x faster)
const scrollThreshold = 100; // Pixels from edge to trigger scroll

placeListContainer.addEventListener('mousemove', (e) => {
    const containerRect = placeListContainer.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    
    if (scrollAnimation) {
        cancelAnimationFrame(scrollAnimation);
    }

    // Smooth scroll function using requestAnimationFrame
    const smoothScroll = (direction) => {
        const scroll = () => {
            placeListContainer.scrollLeft += direction * (scrollSpeed / 60);
            scrollAnimation = requestAnimationFrame(scroll);
        };
        scroll();
    };

    // If mouse is within threshold of left edge, scroll left
    if (mouseX < scrollThreshold) {
        smoothScroll(-1);
    }
    // If mouse is within threshold of right edge, scroll right 
    else if (mouseX > containerRect.width - scrollThreshold) {
        smoothScroll(1);
    }
});

placeListContainer.addEventListener('mouseleave', () => {
    if (scrollAnimation) {
        cancelAnimationFrame(scrollAnimation);
    }
});

// Add hover effects
places.forEach(place => {
    place.addEventListener('mouseenter', () => {
        place.style.transform = 'translateY(-50px)';
        place.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        place.style.backgroundColor = 'rgba(255, 255, 204, 0.8)'; // Light yellow with some transparency
    });

    place.addEventListener('mouseleave', () => {
        place.style.transform = 'translateY(0)';
        place.style.boxShadow = 'none';
        place.style.backgroundColor = ''; // Reset to default
    });
});
