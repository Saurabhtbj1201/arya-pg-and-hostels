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
        emailjs.init('NINLsGFU3T_M2zjP7'); // Your public key
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

            const termsChecked = document.getElementById('terms').checked;
            const privacyChecked = document.getElementById('privacy').checked;
            const errorDiv = document.getElementById('formError');
            const form = this;
            const submitBtn = form.querySelector('.submit-btn');
            const modal = document.getElementById('booking-success-modal');
            const overlay = document.getElementById('booking-overlay');

            // Clear previous error message
            errorDiv.textContent = '';

            // Validate checkboxes
            if (!privacyChecked) {
                errorDiv.textContent = 'Please read and agree to the Privacy Policy.';
                return;
            }

            if (!termsChecked) {
                errorDiv.textContent = 'Please accept the Terms and Conditions.';
                return;
            }

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

            emailjs.sendForm('service_aryapg', 'template_booking', form) // Replace with your service ID and template ID
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

    //contact form submission
    emailjs.init('NINLsGFU3T_M2zjP7'); // Your public key

    async function fetchIP() {
        try {
            const res = await fetch('https://api.ipify.org?format=json');
            const data = await res.json();
            return data.ip;
        } catch (err) {
            return 'Unavailable';
        }
    }

    function getDeviceInfo() {
        return navigator.userAgent || 'Unknown';
    }

    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const form = this;
        const submitBtn = form.querySelector('.submit-btn');

        document.getElementById('timestamp').value = new Date().toLocaleString();
        document.getElementById('device').value = getDeviceInfo();
        document.getElementById('ip').value = await fetchIP();

        const modal = document.getElementById('booking-success-modal');
        const overlay = document.getElementById('booking-overlay');
        const message = document.getElementById('modal-message');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        emailjs.sendForm('service_aryapg', 'template_contact', form)
            .then((response) => {
                console.log('✅ Email sent successfully:', response);
                form.reset();

                // Set success message and color
                message.textContent = '✅ Booking request sent successfully!';
                message.style.color = '#2e7d32';

                modal.style.display = 'block';
                overlay.style.display = 'block';

                setTimeout(() => {
                    modal.style.display = 'none';
                    overlay.style.display = 'none';
                }, 2500);
            })
            .catch((error) => {
                console.error('❌ Email send error:', error);

                // Set error message and color
                message.textContent = '❌ Failed to send message. Please try again later.';
                message.style.color = '#c62828';

                modal.style.display = 'block';
                overlay.style.display = 'block';

                setTimeout(() => {
                    modal.style.display = 'none';
                    overlay.style.display = 'none';

                    // Optional: Reset to default message for next use
                    message.textContent = '✅ Booking request sent successfully!';
                    message.style.color = '#2e7d32';
                }, 2000);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
    });


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

// Active menu link on scroll
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get current scroll position
    const scrollPosition = window.scrollY;
    
    // Loop through sections to find the one in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for better UX
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            
            // Add active class to corresponding nav link
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active-link');
            }
        }
    });
}

// Add scroll event listener for highlighting active nav link
window.addEventListener('scroll', highlightNavOnScroll);

// Initialize active link on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize active link
    highlightNavOnScroll();
});
