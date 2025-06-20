// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Select the progress bar fill element
const progressBar = document.querySelector('.filled');

window.addEventListener('scroll', () => {
    // Calculate the scroll progress
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Update the width of the progress bar
    progressBar.style.width = scrollPercentage + '%';
});


// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides
setInterval(nextSlide, 3000);

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Room Selection
function selectRoom(roomType) {
    const roomSelect = document.getElementById('roomtype');
    if (roomSelect) {
        if (roomType === 'double') {
            roomSelect.value = 'double';
        } else if (roomType === 'triple') {
            roomSelect.value = 'triple';
        }
        scrollToSection('booking');
    }
}

// Email sending function - moved inside DOMContentLoaded to ensure EmailJS is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS after DOM is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.init('DRXOHWryOTpy9TUps');
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS not loaded');
    }

    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Form submission started');

            const form = this;
            const submitBtn = form.querySelector('.submit-btn');
            const modal = document.getElementById('booking-success-modal');
            const overlay = document.getElementById('booking-overlay');

            // Validate EmailJS is available
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not available');
                alert('❌ Email service not available. Please try again later.');
                return;
            }

            // Check if all required elements exist
            if (!submitBtn || !modal || !overlay) {
                console.error('Required elements not found:', { submitBtn, modal, overlay });
                alert('❌ Form elements not found. Please refresh the page.');
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            console.log('Sending form with EmailJS...');

            emailjs.sendForm('service_kl8aq6v', 'template_0w1hphg', form)
                .then((response) => {
                    console.log('✅ Email sent successfully:', response);
                    form.reset();
                    // Show success modal
                    modal.style.display = 'block';
                    overlay.style.display = 'block';

                    // Auto-close modal after 2 seconds
                    setTimeout(() => {
                        modal.style.display = 'none';
                        overlay.style.display = 'none';
                    }, 2000);
                })
                .catch((error) => {
                    console.error('❌ Failed to send booking request:', error);
                    alert('❌ Failed to send booking request. Please try again later.');
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Booking Request';
                });
        });
    } else {
        console.error('Booking form not found');
    }

    // Smooth scrolling function
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Loading animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Observe all sections for loading animations
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('loading');
            observer.observe(section);
        });
        
        // Set minimum date for check-in
        const checkinInput = document.getElementById('checkin');
        if (checkinInput) {
            const today = new Date().toISOString().split('T')[0];
            checkinInput.setAttribute('min', today);
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});
