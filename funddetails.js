// Enhanced animations and interactions for fund details page
document.addEventListener('DOMContentLoaded', () => {
    // Animate progress bar from 0 to current value on page load
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        // Create dollar sign icon
        const dollarIcon = document.createElement('div');
        dollarIcon.className = 'dollar-icon';
        dollarIcon.innerHTML = '$';
        dollarIcon.style.cssText = `
            position: absolute;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            background: #004d00;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `;
        progressBar.style.position = 'relative';
        progressBar.appendChild(dollarIcon);

        progressBar.style.width = '0%';
        progressBar.style.background = '#FFA500'; // Start with orange
        setTimeout(() => {
            progressBar.style.transition = 'width 2s ease-in-out, background 2s ease-in-out';
            progressBar.style.width = '65%'; // Animate to current funding percentage
            progressBar.style.background = '#4CAF50'; // End with green
        }, 300);
    }

    // Animate buttons sliding in from sides
    const fundButton = document.querySelector('.fund-button');
    const contactButton = document.querySelector('.contact-button');

    if (fundButton) {
        fundButton.style.transform = 'translateX(200%)';
        fundButton.style.transition = 'transform 0.8s ease-out, box-shadow 0.3s ease';
        setTimeout(() => {
            fundButton.style.transform = 'translateX(0)';
        }, 300);

        fundButton.addEventListener('mouseenter', () => {
            fundButton.style.transform = 'scale(1.05)';
            fundButton.style.boxShadow = '0 0 20px 5px rgba(255, 215, 0, 0.5)'; // Golden glow
        });

        fundButton.addEventListener('mouseleave', () => {
            fundButton.style.transform = 'scale(1)';
            fundButton.style.boxShadow = '0 4px 12px rgba(0, 77, 0, 0.2)';
        });
    }

    if (contactButton) {
        contactButton.style.transform = 'translateX(-200%)';
        contactButton.style.transition = 'transform 0.8s ease-out, box-shadow 0.3s ease';
        setTimeout(() => {
            contactButton.style.transform = 'translateX(0)';
        }, 300);

        contactButton.addEventListener('mouseenter', () => {
            contactButton.style.transform = 'scale(1.05)';
            contactButton.style.boxShadow = '0 0 20px 5px rgba(255, 215, 0, 0.5)'; // Golden glow
        });

        contactButton.addEventListener('mouseleave', () => {
            contactButton.style.transform = 'scale(1)';
            contactButton.style.boxShadow = '0 4px 12px rgba(0, 77, 0, 0.2)';
        });

        contactButton.addEventListener('click', () => {
            // Create and show contact modal
            const modal = document.createElement('div');
            modal.className = 'contact-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h3>Contact Project Leaders</h3>
                    <form id="contact-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    <button class="close-modal">×</button>
                </div>
            `;

            document.body.appendChild(modal);

            // Add modal styles
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 1000;
            `;

            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);

            // Handle modal close
            const closeModal = () => {
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.remove();
                }, 300);
            };

            modal.querySelector('.close-modal').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // Handle form submission
            const contactForm = document.getElementById('contact-form');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                closeModal();
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Message sent successfully!';
                successMessage.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #4CAF50;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 4px;
                    animation: slideIn 0.3s ease;
                `;
                
                document.body.appendChild(successMessage);
                setTimeout(() => successMessage.remove(), 3000);
            });
        });
    }

    // Slow zoom animation for project images
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(img => {
        img.style.transition = 'transform 8s ease-in-out, box-shadow 0.3s ease';
        img.style.transformOrigin = 'center center';
        
        img.addEventListener('mouseenter', () => {
            img.style.boxShadow = '0 0 20px 5px rgba(255, 215, 0, 0.5)'; // Golden glow
        });

        img.addEventListener('mouseleave', () => {
            img.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });
        
        setInterval(() => {
            if(img.style.transform === 'scale(1.1)') {
                img.style.transform = 'scale(1)';
            } else {
                img.style.transform = 'scale(1.1)';
            }
        }, 8000);
    });

    // Smooth header scroll behavior
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});
