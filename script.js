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

// Email sending function using mailto
function sendEmailViaMailto(subject, body) {
    const mailtoLink = `mailto:Saurabhtbj143@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Alternative: Create a hidden form and submit to a server-side script
function submitFormData(formData, formType) {
    // This would typically submit to a server-side script
    // For demonstration, we'll use console.log and show success message
    console.log(`${formType} Form Data:`, formData);
    
    // You can replace this with actual form submission to your server
    // Example: fetch('/submit-form.php', { method: 'POST', body: formData })
    
    showModal(`${formType} submitted successfully! We will contact you soon.`);
    return true;
}

// Form Handling
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('confirmationModal');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(bookingForm);
        
        // Create email content
        const subject = 'New Booking Request - Arya Boys PG';
        const body = `
New booking request received:

Name: ${formData.get('name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}
Check-in Date: ${formData.get('checkin')}
Room Type: ${formData.get('roomtype')}
Special Request: ${formData.get('request') || 'None'}

Please contact the customer for confirmation.

--
Arya Boys PG Website
        `;
        
        // Option 1: Open default email client
        sendEmailViaMailto(subject, body);
        
        // Option 2: Submit to server (uncomment if you have server-side handling)
        // submitFormData(formData, 'Booking');
        
        // Show success message and reset form
        setTimeout(() => {
            showModal('Booking request submitted! Your default email client should open. If not, please contact us directly.');
            bookingForm.reset();
        }, 500);
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Create email content
        const subject = 'New Contact Message - Arya Boys PG';
        const body = `
New contact message received:

Name: ${formData.get('name')}
Email: ${formData.get('email')}
Message: ${formData.get('message')}

--
Arya Boys PG Website
        `;
        
        // Option 1: Open default email client
        sendEmailViaMailto(subject, body);
        
        // Option 2: Submit to server (uncomment if you have server-side handling)
        // submitFormData(formData, 'Contact');
        
        // Show success message and reset form
        setTimeout(() => {
            showModal('Message submitted! Your default email client should open. If not, please contact us directly.');
            contactForm.reset();
        }, 500);
    });
}

// Alternative method: Create WhatsApp link for easier contact
function sendWhatsAppMessage(message) {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add WhatsApp button functionality (if you want to add this option)
function handleWhatsAppBooking() {
    const formData = new FormData(bookingForm);
    const message = `
Hi! I want to book a room at Arya Boys PG.

Details:
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}
Check-in Date: ${formData.get('checkin')}
Room Type: ${formData.get('roomtype')}
Special Request: ${formData.get('request') || 'None'}
    `;
    
    sendWhatsAppMessage(message);
}

// Modal Functions
function showModal(customMessage = null) {
    const modalContent = modal.querySelector('.modal-content p');
    if (customMessage) {
        modalContent.textContent = customMessage;
    }
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with X button
const closeBtn = document.querySelector('.close');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

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
