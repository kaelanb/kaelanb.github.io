// SentiaFlora Interactive JavaScript

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Modal functionality
function showNotifyModal() {
    const modal = document.getElementById('notifyModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideNotifyModal() {
    const modal = document.getElementById('notifyModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('notifyModal');
    if (event.target === modal) {
        hideNotifyModal();
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const notifyForm = document.getElementById('notifyForm');
    
    if (notifyForm) {
        notifyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            
            if (email) {
                // Simulate form submission
                const button = notifyForm.querySelector('button');
                const originalText = button.textContent;
                
                button.textContent = 'Submitting...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Thank you!';
                    button.style.background = '#48bb78';
                    
                    setTimeout(() => {
                        hideNotifyModal();
                        notifyForm.reset();
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.background = '#48bb78';
                    }, 1500);
                }, 1000);
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add some interactive particle effects
    createParticles();
});

// Create floating particles for visual enhancement
function createParticles() {
    const heroSection = document.querySelector('.hero-section');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        heroSection.appendChild(particle);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        .particle {
            z-index: 1;
        }
    `;
    document.head.appendChild(style);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideNotifyModal();
    }
});

// Progress circle animation
function animateProgressCircle() {
    const progressCircle = document.querySelector('.progress-circle');
    if (progressCircle) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressCircle.style.background = 'conic-gradient(#48bb78 0deg 90deg, #4a5568 90deg 360deg)';
                    progressCircle.style.transition = 'background 2s ease';
                }
            });
        });
        observer.observe(progressCircle);
    }
}

// Initialize progress animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateProgressCircle);

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 