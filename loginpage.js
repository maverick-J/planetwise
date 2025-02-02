// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');

    // Validate form fields
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const userType = document.querySelector('input[name="userType"]:checked');

        if (!name || !email || !userType) {
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false;
        }

        return true;
    }

    // Handle registration submission
    function handleRegistration(event) {
        event.preventDefault();

        if (!validateForm()) {
            alert('Please fill in all fields correctly');
            return;
        }

        const userType = document.querySelector('input[name="userType"]:checked').value;
        
        // Redirect based on user type
        switch(userType) {
            case 'fund-provider':
                window.location.href = 'fund-provideroptions.html';
                break;
            case 'initiative':
                window.location.href = 'initiative-options.html';
                break;
            case 'organization':
                window.location.href = 'organization-options.html';
                break;
            default:
                alert('Please select a user type');
        }
    }

    // Add card selection styling and descriptions
    const roleCards = document.querySelectorAll('.role-card');
    const descriptions = {
        'initiative': 'Create and manage sustainable development initiatives, connect with organizations and fund providers.',
        'organization': 'Partner with initiatives, provide resources and support for sustainable development projects.',
        'fund-provider': 'Fund sustainable development projects, track impact, and connect with initiatives and organizations.'
    };

    roleCards.forEach(card => {
        const userType = card.querySelector('input[type="radio"]').value;
        
        // Create description element
        const descriptionEl = document.createElement('div');
        descriptionEl.className = 'card-description';
        descriptionEl.style.cssText = `
            position: absolute;
            bottom: -80px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(24, 61, 41, 0.95);
            color: white;
            padding: 10px;
            border-radius: 6px;
            width: 200px;
            font-size: 0.9rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 100;
        `;
        descriptionEl.textContent = descriptions[userType];
        card.style.position = 'relative';
        card.appendChild(descriptionEl);

        // Show/hide description on hover
        card.addEventListener('mouseenter', () => {
            descriptionEl.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            descriptionEl.style.opacity = '0';
        });

        // Handle radio selection
        card.querySelector('input[type="radio"]').addEventListener('change', function() {
            roleCards.forEach(c => {
                c.style.borderColor = 'transparent';
                c.style.backgroundColor = '#183d29';
            });
            
            if (this.checked) {
                this.parentElement.style.borderColor = '#ffffff';
                this.parentElement.style.backgroundColor = '#0000ff';
            }
        });
    });

    // Attach form submission handler
    registrationForm.addEventListener('submit', handleRegistration);
});
