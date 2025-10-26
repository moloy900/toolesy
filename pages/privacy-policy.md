---
layout: default
title: Privacy Policy
permalink: /privacy-policy/
---


<style>
    .content-box {
        background: white;
        border-radius: 8px;
        padding: 25px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
        margin-bottom: 25px;
    }

    .policy-container {
        padding: 20px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .policy-container h1 {
        color: var(--primary);
        text-align: center;
        margin-bottom: 10px;
        font-size: 2.5rem;
        border-bottom: 3px solid var(--primary);
        padding-bottom: 15px;
    }

    .last-updated {
        text-align: center;
        color: #666;
        font-style: italic;
        margin-bottom: 30px;
        font-size: 0.9rem;
    }

    .policy-content {
        line-height: 1.8;
        color: #333;
    }

    .policy-section {
        margin-bottom: 30px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
    }

    .policy-section h2 {
        color: var(--primary);
        margin-bottom: 15px;
        font-size: 1.4rem;
        border-bottom: 1px solid #ddd;
        padding-bottom: 8px;
    }

    .policy-section p {
        margin-bottom: 15px;
        text-align: justify;
    }

    .policy-section ul {
        margin: 15px 0;
        padding-left: 30px;
    }

    .policy-section li {
        margin-bottom: 10px;
    }

    .policy-section strong {
        color: var(--primary);
    }

    .contact-info {
        background: #e8f4ff;
        padding: 25px;
        border-radius: 8px;
        margin-top: 30px;
        text-align: center;
    }

    .contact-info h3 {
        color: var(--primary);
        margin-bottom: 15px;
    }

    .contact-info a {
        color: var(--primary);
        text-decoration: none;
        font-weight: 600;
    }

    .contact-info a:hover {
        text-decoration: underline;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .policy-container {
            padding: 15px;
        }

        .policy-container h1 {
            font-size: 2rem;
        }

        .policy-section {
            padding: 15px;
            margin-bottom: 20px;
        }

        .policy-section h2 {
            font-size: 1.2rem;
        }

        .policy-section ul {
            padding-left: 20px;
        }

        .contact-info {
            padding: 20px;
        }
    }
    
</style>

<div class="content-box">
    <div class="policy-container">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: <span id="currentDate"></span></p>

        <div class="policy-content">
            <section class="policy-section">
                <h2>1. Information We Collect</h2>
                <p>At <strong>ToolEsy</strong>, we may collect the following types of information when you use our
                    website:</p>

                <ul>
                    <li><strong>Personal Information:</strong> Such as your name and email address if you contact us
                        directly or subscribe to updates.</li>
                    <li><strong>Non-Personal Information:</strong> Such as your browser type, device, IP address, and
                        usage data (collected automatically via cookies or analytics).</li>
                    <li><strong>User Content:</strong> Any text, files, or data you choose to process through our tools.
                    </li>
                </ul>
            </section>

            <section class="policy-section">
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>

                <ul>
                    <li>Improve and optimize our tools and services.</li>
                    <li>Respond to inquiries, support requests, or feedback.</li>
                    <li>Monitor website usage and performance.</li>
                    <li>Ensure compliance with our Terms of Service.</li>
                </ul>

                <p>We do not sell or rent your personal information to third parties.</p>
            </section>

            <section class="policy-section">
                <h2>3. Cookies and Analytics</h2>
                <p>We may use cookies and similar technologies to enhance user experience, track performance, and gather
                    usage data.</p>

                <p>Third-party analytics services (e.g., Google Analytics) may be used to help us understand traffic and
                    user behavior.</p>

                <p>You may disable cookies in your browser settings, but some features of our website may not function
                    properly.</p>
            </section>

            <section class="policy-section">
                <h2>4. Data Security</h2>
                <p>We take reasonable measures to protect your information from unauthorized access, misuse, or
                    disclosure. However, no method of transmission over the internet is 100% secure, and we cannot
                    guarantee absolute security.</p>
            </section>

            <section class="policy-section">
                <h2>5. Third-Party Links</h2>
                <p>Our website may include links to third-party websites. We are not responsible for the privacy
                    practices or content of these external sites.</p>
            </section>

            <section class="policy-section">
                <h2>6. Children's Privacy</h2>
                <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal
                    information from children. If you believe a child has provided us with personal information, please
                    contact us immediately.</p>
            </section>

            <section class="policy-section">
                <h2>7. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated "Last Updated" date.</p>
            </section>

            <div class="contact-info">
                <h3>Contact Information</h3>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us through our <a
                        href="#">Contact Page</a>.</p>
            </div>
        </div>
    </div>
</div>

<script>
    // Set current date automatically
    document.addEventListener('DOMContentLoaded', function () {
        const currentDateElement = document.getElementById('currentDate');
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        currentDateElement.textContent = formattedDate;
    });
</script>