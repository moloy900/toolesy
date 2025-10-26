---
layout: default
title: Terms of Service
permalink: /terms-of-service/
---

<style>
    .content-box {
        background: white;
        border-radius: 8px;
        padding: 25px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
        margin-bottom: 25px;
    }

    .terms-container {
        padding: 20px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .terms-container h1 {
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

    .terms-content {
        line-height: 1.8;
        color: #333;
    }

    .terms-section {
        margin-bottom: 30px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--primary);
    }

    .terms-section h2 {
        color: var(--primary);
        margin-bottom: 15px;
        font-size: 1.4rem;
        border-bottom: 1px solid #ddd;
        padding-bottom: 8px;
    }

    .terms-section p {
        margin-bottom: 15px;
        text-align: justify;
    }

    .terms-list {
        margin: 15px 0;
        padding-left: 30px;
    }

    .terms-list li {
        margin-bottom: 10px;
    }

    .terms-section strong {
        color: var(--primary);
    }

    .contact-info {
        background: #e8f4ff;
        padding: 20px;
        border-radius: 8px;
        margin-top: 15px;
    }

    .contact-email {
        font-weight: 600;
        color: var(--primary);
        font-size: 1.1rem;
        margin: 10px 0 0 0;
    }

    .legal-note {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 6px;
        padding: 20px;
        margin-top: 30px;
        text-align: center;
    }

    .legal-note p {
        margin: 0;
        color: #856404;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .terms-container {
            padding: 15px;
        }

        .terms-container h1 {
            font-size: 2rem;
        }

        .terms-section {
            padding: 15px;
            margin-bottom: 20px;
        }

        .terms-section h2 {
            font-size: 1.2rem;
        }

        .terms-list {
            padding-left: 20px;
        }

        .contact-info {
            padding: 15px;
        }
    }
</style>

<div class="content-box">
    <div class="terms-container">
        <h1>Terms of Service</h1>
        <p class="last-updated">Last Updated: <span id="currentDate"></span></p>

        <div class="terms-content">
            <section class="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>Welcome to <strong>ToolEsy</strong>. By accessing or using our website and the tools we provide
                    — including but not limited to Text Tools, Image Tools, Video Tools, Calculators, Converters, PDF &
                    Document Tools, and Miscellaneous Converters — you agree to comply with and be bound by these Terms
                    of Service. Please read them carefully before using our website.</p>

                <p>By accessing or using <strong>ToolEsy</strong>, you agree to these Terms of Service, our
                    Disclaimer, and Privacy Policy. If you do not agree, you should not use our website.</p>
            </section>

            <section class="terms-section">
                <h2>2. Use of Services</h2>
                <ul class="terms-list">
                    <li>Our tools are provided for personal, educational, and informational purposes only.</li>
                    <li>You agree not to use our services for any illegal, harmful, or unauthorized activities.</li>
                    <li>You are responsible for ensuring that your use of our tools complies with all applicable laws
                        and regulations.</li>
                </ul>
            </section>

            <section class="terms-section">
                <h2>3. No Guarantee of Accuracy</h2>
                <p>We strive to provide accurate and reliable tools, but <strong>ToolEsy</strong> makes no
                    guarantee of accuracy, completeness, or suitability of results. Use of our tools is entirely at your
                    own risk.</p>
            </section>

            <section class="terms-section">
                <h2>4. Intellectual Property</h2>
                <ul class="terms-list">
                    <li>All content, design, and code on <strong>ToolEsy</strong> are the intellectual property of
                        the site owner unless otherwise noted.</li>
                    <li>You may not copy, reproduce, distribute, or modify any part of the website without prior written
                        consent.</li>
                </ul>
            </section>

            <section class="terms-section">
                <h2>5. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the content,
                    services, or policies of those external sites. Use them at your own risk.</p>
            </section>

            <section class="terms-section">
                <h2>6. Limitation of Liability</h2>
                <p>In no event shall <strong>ToolEsy</strong>, its owners, affiliates, employees, or partners be
                    liable for any damages (including but not limited to direct, indirect, incidental, or consequential
                    damages) arising from your use of our website or tools.</p>
            </section>

            <section class="terms-section">
                <h2>7. Termination of Access</h2>
                <p>We reserve the right to suspend or terminate your access to our website at any time, without notice,
                    for any violation of these Terms of Service.</p>
            </section>

            <section class="terms-section">
                <h2>8. Changes to Terms</h2>
                <p><strong>ToolEsy</strong> may update these Terms of Service from time to time. Any changes will
                    be posted on this page with an updated "Last Updated" date. Continued use of the site after changes
                    constitutes acceptance of the updated terms.</p>
            </section>

            <section class="terms-section">
                <h2>9. Contact Us</h2>
                <div class="contact-info">
                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                    <p class="contact-email">📧 paramgyandarshanchat@gmail.com</p>
                </div>
            </section>

            <div class="legal-note">
                <p><strong>Note:</strong> This is a legal agreement between you and <strong>ToolEsy</strong>. By
                    using our website, you acknowledge that you have read, understood, and agree to be bound by these
                    terms.</p>
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