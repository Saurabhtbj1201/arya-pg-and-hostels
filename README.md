# Arya Boys PG/Hostel Website 🏠

A modern, responsive website for Arya Boys PG/Hostel located near Galgotias University, Greater Noida. This website provides information about accommodation facilities, pricing, and booking services for students and working professionals.

## ✨ Features

### 🎨 Design & UI
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Animations**: Smooth CSS animations and transitions
- **Interactive Elements**: Hover effects, loading animations, and modal dialogs
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Clean Typography**: Professional font styling with Poppins font family

### 📱 User Experience
- **Hamburger Menu**: Mobile-friendly navigation
- **Image Slider**: Auto-advancing hero section slider
- **Gallery Filter**: Interactive image gallery with category filtering
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Integration**: Direct call, WhatsApp, and email functionality

### 🚀 Functionality
- **Booking Form**: Complete booking request system with validation
- **Contact Form**: Message submission with email integration
- **Room Selection**: Interactive pricing cards with selection functionality
- **Modal System**: Success confirmations and information dialogs

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with custom properties and grid/flexbox
- **JavaScript (ES6+)**: Modern JavaScript for interactivity
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family

## 📂 Project Structure

```
arya-boys-pg/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── images/             # Image assets folder
    ├── home1.jpg       # Hero slider image 1
    ├── home2.jpg       # Hero slider image 2
    ├── home3.jpg       # Hero slider image 3
    ├── Admin.jpg       # Owner profile image
    ├── room1.webp      # Room gallery image
    ├── room2.avif      # Room gallery image
    └── outside.webp    # Outside view image
```

## 🎯 Key Sections

### 1. **Hero Section**
- Auto-sliding image carousel
- Call-to-action buttons
- Responsive text overlays

### 2. **Highlights**
- Service feature cards
- Hover animations
- Icon-based design

### 3. **About Section**
- Mission statement
- Owner introduction
- Customer testimonials

### 4. **Rooms & Facilities**
- Room type showcases
- Facility listings
- Interactive cards

### 5. **Pricing**
- Transparent pricing cards
- Popular plan highlighting
- Payment policy information

### 6. **Gallery**
- Filterable image grid
- Overlay effects
- Category-based organization

### 7. **Booking System**
- Complete booking form
- Form validation
- Email integration

### 8. **Contact**
- Multiple contact methods
- Direct action buttons
- Contact form

## 🎨 Stylish Button Implementation

The website features various stylish button designs:

### Primary CTA Buttons
```css
.cta-btn.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}
```

### Contact Action Buttons
```css
.contact-btn {
    background: var(--secondary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.contact-btn:hover {
    transform: translateY(-2px);
    background: var(--primary-color);
}
```

### WhatsApp Button
```css
.whatsapp-btn {
    background: #25D366;
}

.whatsapp-btn:hover {
    background: #20b954;
}
```

## 📧 Email Integration

The website uses a mailto-based approach for form submissions:

### Booking Form
- Collects user details, room preferences, and special requests
- Opens default email client with pre-filled content
- Includes all form data in structured format

### Contact Form
- Simple message submission
- Direct email composition
- Professional email formatting

## 📱 Responsive Design

### Breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px and below
- **Mobile**: 480px and below

### Mobile Features:
- Hamburger navigation menu
- Stacked layouts
- Touch-friendly buttons
- Optimized font sizes

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **Customize** content, images, and contact information
4. **Deploy** to your preferred hosting platform

## 🔧 Customization

### Colors
Update CSS custom properties in `:root`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

### Contact Information
Update these sections:
- Phone numbers in contact section
- Email addresses
- Physical address
- WhatsApp links

### Images
Replace images in the `images/` folder:
- Hero slider images (1200px width recommended)
- Gallery images (400px width recommended)
- Owner profile image (300px square recommended)

## 📞 Contact Information

- **Phone**: +91 8006908513
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/918006908513)
- **Email**: Sachinnagar112@gmail.com
- **Address**: Near Galgotias University, Dankaur, Gautam Buddha Nagar, UP 201301

## 📄 License

This project is created for Arya Boys PG. Feel free to use this template for similar accommodation websites with proper attribution.

## 🔮 Future Enhancements

- [ ] Online payment integration
- [ ] Real-time availability checker
- [ ] Virtual tour feature
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) capabilities
- [ ] Admin dashboard for booking management

---

**Built with ❤️ for Arya Boys PG**

*Providing comfortable, affordable, and secure accommodation for students and professionals near Galgotias University.*
