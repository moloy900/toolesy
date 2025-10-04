---
layout: default
title: Contact
permalink: /contact/
---



<style>
    /* Contact Us Styles */
    .contact-container {
        padding: 20px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .contact-container h1 {
        color: var(--primary);
        text-align: center;
        margin-bottom: 10px;
        font-size: 2.5rem;
        border-bottom: 3px solid var(--primary);
        padding-bottom: 15px;
    }

    .contact-intro {
        text-align: center;
        color: #666;
        margin-bottom: 40px;
        font-size: 1.1rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .contact-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 40px;
        margin-bottom: 40px;
    }

    .contact-form-section h2,
    .contact-info-section h2,
    .faq-section h2 {
        color: var(--primary);
        margin-bottom: 20px;
        font-size: 1.5rem;
        border-bottom: 2px solid #f0f0f0;
        padding-bottom: 10px;
    }

    .contact-form {
        background: #f8f9fa;
        padding: 25px;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #333;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        font-family: inherit;
        transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
    }

    .submit-btn {
        background: var(--primary);
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .submit-btn:hover {
        background: var(--secondary);
        transform: translateY(-2px);
    }

    .form-message {
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
        display: none;
    }

    .form-message.success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
        display: block;
    }

    .form-message.error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        display: block;
    }

    .contact-info {
        margin-bottom: 30px;
    }

    .contact-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .contact-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .contact-icon {
        font-size: 24px;
        margin-right: 15px;
        min-width: 30px;
        margin-top: -5px;
        color: var(--primary);
    }

    .contact-details h3 {
        margin: 0 0 5px 0;
        color: var(--primary);
        font-size: 1.1rem;
    }

    .contact-details p {
        margin: 0;
        color: #666;
    }

    .faq-section {
        background: #f8f9fa;
        padding: 30px;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
    }

    .faq-item {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
    }

    .faq-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .faq-item h3 {
        color: var(--primary);
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    .faq-item p {
        color: #666;
        margin: 0;
        line-height: 1.6;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .contact-container {
            padding: 15px;
        }

        .contact-container h1 {
            font-size: 2rem;
        }

        .contact-form {
            padding: 20px;
        }

        .contact-item {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            /* Changed to flex-start */
        }

        .contact-icon {
            margin-right: 15px;
            margin-bottom: 0;
            flex-shrink: 0;
            margin-top: -5px;
            /* Adjust this value as needed */
        }

        .faq-section {
            padding: 20px;
        }
    }
</style>


<!-- Contact Us Content -->
<div class="content-box">
    <div class="contact-container">
        <h1>Contact Us</h1>
        <p class="contact-intro">We'd love to hear from you! Please fill out the form below or use our contact
            information to get in touch with us.</p>

        <div class="contact-content">
            <div class="contact-form-section">
                <h2>Send Us a Message</h2>
                <form id="contactForm" class="contact-form">
                    <div class="form-group">
                        <label for="name">Your Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>

                    <div class="form-group">
                        <label for="message">Your Message *</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="submit-btn">Send Message</button>
                    </div>

                    <div id="formMessage" class="form-message"></div>
                </form>
            </div>

            <div class="contact-info-section">
                <h2>Contact Information</h2>

                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                        <div class="contact-details">
                            <h3>Email</h3>
                            <p>support@seotoolshub.com</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon"><i class="fas fa-globe"></i></div>
                        <div class="contact-details">
                            <h3>Website</h3>
                            <p>seotoolshub.com</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon"><i class="fas fa-clock"></i></div>
                        <div class="contact-details">
                            <h3>Response Time</h3>
                            <p>We typically respond within 24-48 hours</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-list">
                <div class="faq-item">
                    <h3>How long does it take to get a response?</h3>
                    <p>We typically respond to all inquiries within 24-48 hours during business days.</p>
                </div>

                <div class="faq-item">
                    <h3>Do you provide technical support for your tools?</h3>
                    <p>Yes, we offer technical support for all tools available on our website. Please describe
                        your issue in detail for faster resolution.</p>
                </div>

                <div class="faq-item">
                    <h3>Can I suggest a new tool or feature?</h3>
                    <p>Absolutely! We welcome suggestions for new tools or improvements to existing ones. Use
                        the contact form to share your ideas.</p>
                </div>
            </div>
        </div>
    </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>

    // Contact form functionality
    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (in a real scenario, this would be an AJAX call)
            showMessage('Sending your message...', 'success');

            setTimeout(() => {
                showMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            }, 1500);
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function showMessage(text, type) {
            formMessage.textContent = text;
            formMessage.className = `form-message ${type}`;

            // Auto-hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });


    // Contact form submission to Google Sheets
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show sending message
        showMessage('Sending your message...', 'success');
        
        // Submit to Google Sheets
        submitContactToGoogleSheets(name, email, subject, message);
    });
    
    function submitContactToGoogleSheets(name, email, subject, message) {
        // Replace with your Google Apps Script Web App URL for contact form
        const scriptURL = 'https://script.google.com/macros/s/AKfycbylqjcNPaIuWVieNq3JeD09lDScnD7gk5oWPX6F_W8II2Svc--y5VaaOesskZbYGEMr/exec';
        
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date().toISOString(),
                source: 'Contact Form'
            })
        })
        .then(() => {
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});

// CSS for horizontal social icons - add this to your existing CSS
const horizontalSocialCSS = `
@media (max-width: 768px) {
    .social-icons {
        flex-direction: row !important;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    
    .social-link {
        flex: 0 0 calc(50% - 10px);
        text-align: center;
        padding: 10px;
    }
}

@media (max-width: 480px) {
    .social-link {
        flex: 0 0 100%;
    }
}
`;

// Inject the CSS for horizontal social icons
const style = document.createElement('style');
style.textContent = horizontalSocialCSS;
document.head.appendChild(style);
</script>
