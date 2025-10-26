---
layout: default
title: "Support ToolEsy - Donate to Keep Tools Free"
permalink: /donate/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Donate to ToolEsy - Support Free Online Tools Development</title>
<meta name="description"
  content="Support ToolEsy's mission to provide free online tools. Your donation helps maintain, improve, and develop new tools for everyone.">
<meta name="keywords"
  content="donate, support toolesy, free tools donation, contribute, paypal donation, buy me a coffee, patreon, open source tools">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  .donate-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .donate-container h1 {
    color: var(--primary);
    text-align: center;
    margin-bottom: 15px;
    font-size: 2.5rem;
    border-bottom: 3px solid var(--primary);
    padding-bottom: 15px;
  }

  .welcome-message {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
    line-height: 1.8;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .donate-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .donate-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .donate-section h2 i {
    font-size: 1.2rem;
  }

  .donate-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .impact-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 30px 0;
    padding: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;
    text-align: center;
  }

  .impact-stat {
    padding: 20px;
  }

  .impact-number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .impact-label {
    font-size: 1.1rem;
    opacity: 0.9;
  }

  .donation-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 30px 0;
  }

  .donation-option {
    background: white;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    border: 2px solid #e0e0e0;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .donation-option:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
  }

  .donation-option.featured {
    border-color: var(--primary);
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  }

  .donation-option.featured::before {
    content: 'Most Popular';
    position: absolute;
    top: 15px;
    right: -30px;
    background: var(--primary);
    color: white;
    padding: 5px 30px;
    font-size: 0.8rem;
    font-weight: 600;
    transform: rotate(45deg);
  }

  .donation-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--primary);
  }

  .donation-option h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }

  .donation-option p {
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .donation-amounts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px 0;
  }

  .amount-option {
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    background: white;
  }

  .amount-option:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .amount-option.selected {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
  }

  .custom-amount {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
  }

  .custom-amount:focus {
    outline: none;
    border-color: var(--primary);
  }

  .donate-button {
    display: inline-block;
    padding: 15px 30px;
    background: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;
  }

  .donate-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .donate-button.success {
    background: var(--success);
  }

  .donate-button.success:hover {
    background: #218838;
  }

  .donate-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .donate-button.warning:hover {
    background: #e0a800;
  }

  .crypto-section {
    background: white;
    padding: 25px;
    border-radius: 12px;
    margin: 30px 0;
    border-left: 4px solid #f39c12;
  }

  .crypto-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .crypto-option {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .crypto-option h4 {
    color: #2c3e50;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .crypto-address {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-family: monospace;
    word-break: break-all;
    margin-bottom: 10px;
    position: relative;
  }

  .copy-button {
    position: absolute;
    right: 10px;
    top: 10px;
    background: var(--primary);
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
  }

  .testimonial-section {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 12px;
    margin: 40px 0;
    text-align: center;
  }

  .testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }

  .testimonial {
    background: white;
    padding: 25px;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
    text-align: left;
  }

  .testimonial-text {
    font-style: italic;
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .testimonial-author {
    font-weight: 600;
    color: #2c3e50;
  }

  .faq-section {
    background: white;
    padding: 30px;
    border-radius: 12px;
    margin-top: 40px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .faq-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
  }

  .faq-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .faq-question {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .faq-answer {
    color: #666;
    line-height: 1.6;
  }

  .content-section {
    padding: 30px;
    background: white;
    border-radius: 12px;
    margin-top: 40px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .content-section h2 {
    color: #2c3e50;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  .content-section h3 {
    color: var(--primary);
    margin: 25px 0 15px 0;
  }

  .content-section p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
  }

  .content-section ul {
    margin: 20px 0;
    padding-left: 30px;
  }

  .content-section li {
    margin-bottom: 12px;
    line-height: 1.6;
    color: #555;
  }

  .alert-container {
    margin-top: 20px;
    min-height: 50px;
  }

  .alert {
    padding: 14px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .donate-container {
      padding: 15px;
    }

    .donate-container h1 {
      font-size: 2rem;
    }

    .donate-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .impact-stats {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 20px;
      margin: 25px 0;
    }

    .impact-number {
      font-size: 2rem;
    }

    .donation-options {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .donation-option {
      padding: 25px 20px;
    }

    .donation-amounts {
      grid-template-columns: repeat(2, 1fr);
    }

    .crypto-options {
      grid-template-columns: 1fr;
    }

    .testimonials {
      grid-template-columns: 1fr;
    }

    .testimonial-section {
      padding: 30px 20px;
      margin: 30px 0;
    }

    .faq-section {
      padding: 25px 20px;
      margin-top: 30px;
    }

    .content-section {
      padding: 25px 20px;
      margin-top: 30px;
    }
  }

  @media (max-width: 480px) {
    .impact-stats {
      grid-template-columns: 1fr;
    }

    .donate-container h1 {
      font-size: 1.8rem;
    }

    .donation-amounts {
      grid-template-columns: 1fr;
    }

    .donation-option.featured::before {
      font-size: 0.7rem;
      right: -35px;
    }
  }
</style>

<div class="donate-container">
  <h1>Support ToolEsy</h1>
  <p class="welcome-message">Help us keep ToolEsy free and accessible for everyone. Your donation supports tool maintenance, new feature development, and server costs.</p>

  <!-- Impact Stats -->
  <div class="impact-stats">
    <div class="impact-stat">
      <div class="impact-number">80+</div>
      <div class="impact-label">Free Tools</div>
    </div>
    <div class="impact-stat">
      <div class="impact-number">100%</div>
      <div class="impact-label">Free Forever</div>
    </div>
    <div class="impact-stat">
      <div class="impact-number">50K+</div>
      <div class="impact-label">Monthly Users</div>
    </div>
    <div class="impact-stat">
      <div class="impact-number">0</div>
      <div class="impact-label">Ads & Tracking</div>
    </div>
  </div>

  <!-- Donation Options -->
  <div class="donate-section">
    <h2><i class="fas fa-heart"></i> Make a Donation</h2>
    <p>Choose your preferred donation method. Every contribution, no matter the size, helps us maintain and improve ToolEsy for the community.</p>

    <div class="donation-options">
      <!-- PayPal Option -->
      <div class="donation-option featured">
        <i class="fab fa-paypal donation-icon"></i>
        <h3>PayPal Donation</h3>
        <p>Quick and secure one-time or recurring donations via PayPal. Most popular option with instant processing.</p>   
        <button class="donate-button" id="paypalDonate">
          <i class="fab fa-paypal"></i> Donate with PayPal
        </button>
      </div>

      <!-- Buy Me a Coffee -->
      <div class="donation-option">
        <i class="fas fa-coffee donation-icon"></i>
        <h3>Buy Me a Coffee</h3>
        <p>Support with a one-time coffee donation. Simple, fast, and helps keep us energized while coding new features!</p>
        <button class="donate-button warning" id="coffeeDonate">
          <i class="fas fa-mug-hot"></i> Buy a Coffee
        </button>
      </div>

      <!-- Patreon -->
      <div class="donation-option">
        <i class="fab fa-patreon donation-icon"></i>
        <h3>Patreon Membership</h3>
        <p>Become a patron with monthly support. Get early access to new tools and exclusive updates from our development team.</p>
        <button class="donate-button success" id="patreonDonate">
          <i class="fab fa-patreon"></i> Support on Patreon
        </button>
      </div>
    </div>
  </div>

  <!-- Cryptocurrency Donations -->
  <div class="crypto-section">
    <h2><i class="fab fa-bitcoin"></i> Cryptocurrency Donations</h2>
    <p>Prefer to donate with cryptocurrency? We accept various cryptocurrencies. Your crypto donations help support decentralization and privacy-focused development.</p>
    
<div class="crypto-options">
      <div class="crypto-option">
        <h4><i class="fab fa-bitcoin"></i> Bitcoin (BTC) - BSC (BEP20)</h4>
        <div class="crypto-address">
          0x9140d279e2fc3b026c3ab4aabe1d4d5ee9adb6fc
          <button class="copy-button" data-address="0x9140d279e2fc3b026c3ab4aabe1d4d5ee9adb6fc">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
        <img src="{{'/assets/images/btc.png' | relative_url }}" alt="Bitcoin QR Code" style="width: 150px; height: 150px; display: block; margin: 0 auto;">
      </div>

<div class="crypto-option">
        <h4><i class="fab fa-ethereum"></i> Ethereum (ETH) - BSC (BEP20)</h4>
        <div class="crypto-address">
          0x9140d279e2fc3b026c3ab4aabe1d4d5ee9adb6fc
          <button class="copy-button" data-address="0x9140d279e2fc3b026c3ab4aabe1d4d5ee9adb6fc">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
        <img src="{{'/assets/images/etc.png' | relative_url }}" alt="Ethereum QR Code" style="width: 150px; height: 150px; display: block; margin: 0 auto;">
      </div>
    </div>
  </div>

  <!-- Testimonials -->
  <div class="testimonial-section">
    <h2>What Supporters Say</h2>
    <p>Join our community of supporters who believe in free, accessible tools for everyone.</p>
    
    <div class="testimonials">
      <div class="testimonial">
        <p class="testimonial-text">"ToolEsy has been invaluable for my web development work. Donating was my way of saying thanks for keeping these tools free and ad-free."</p>
        <div class="testimonial-author">- Sarah Chen, Web Developer</div>
      </div>
      
      <div class="testimonial">
        <p class="testimonial-text">"As a student, I rely on free tools like ToolEsy. When I landed my first job, supporting this project was the first thing I did. Keep up the great work!"</p>
        <div class="testimonial-author">- Alex Rodriguez, Student</div>
      </div>
      
      <div class="testimonial">
        <p class="testimonial-text">"The privacy-focused approach and quality of tools made me want to contribute. It's rare to find such useful tools that respect users' data."</p>
        <div class="testimonial-author">- Michael Thompson, Privacy Advocate</div>
      </div>
    </div>
  </div>

  <!-- Alert Container -->
  <div id="alertContainer" class="alert-container"></div>

  <!-- FAQ Section -->
  <div class="faq-section">
    <h2>Donation FAQs</h2>
    
    <div class="faq-item">
      <div class="faq-question">How will my donation be used?</div>
      <div class="faq-answer">Your donation helps cover server costs, tool maintenance, development of new features, and creating additional free tools. We're committed to keeping ToolEsy completely free and accessible.</div>
    </div>
    
    <div class="faq-item">
      <div class="faq-question">Is my donation tax-deductible?</div>
      <div class="faq-answer">ToolEsy is not a registered non-profit organization, so donations are not tax-deductible. We're an independent project dedicated to providing free tools.</div>
    </div>
    
    <div class="faq-item">
      <div class="faq-question">Can I donate anonymously?</div>
      <div class="faq-answer">Yes! Cryptocurrency donations are naturally anonymous. For PayPal, you can choose to hide your information. We respect your privacy in all transactions.</div>
    </div>
    
    <div class="faq-item">
      <div class="faq-question">What's the difference between one-time and recurring donations?</div>
      <div class="faq-answer">One-time donations provide immediate support, while recurring donations (through Patreon) help with predictable monthly income for long-term planning and sustained development.</div>
    </div>
    
    <div class="faq-item">
      <div class="faq-question">Do donors get any special benefits?</div>
      <div class="faq-answer">While all tools remain free for everyone, Patreon supporters get early access to new tools, behind-the-scenes updates, and can vote on future tool development.</div>
    </div>
  </div>

  <!-- Content Section -->
  <div class="content-section">
    <h2>Why Your Support Matters</h2>

    <p>ToolEsy was created with a simple mission: to provide high-quality, completely free online tools that respect user privacy. Unlike many online services, we don't show ads, don't track users, and don't require registration. This commitment to privacy and accessibility comes with real costs that your donations help cover.</p>

    <h3>Where Your Money Goes</h3>
    <p>Every donation, no matter the size, directly supports the ToolEsy ecosystem:</p>
    
    <ul>
      <li><strong>Server Infrastructure:</strong> Hosting costs for 80+ tools and handling thousands of daily users</li>
      <li><strong>Tool Maintenance:</strong> Regular updates, bug fixes, and security improvements for existing tools</li>
      <li><strong>New Tool Development:</strong> Research, design, and programming of new tools based on user requests</li>
      <li><strong>Performance Optimization:</strong> Ensuring tools load quickly and work smoothly across all devices</li>
      <li><strong>Browser Compatibility:</strong> Testing and adapting tools for different browsers and versions</li>
      <li><strong>Documentation & Support:</strong> Creating help guides and maintaining FAQ sections</li>
    </ul>

    <h3>Our Commitment to You</h3>
    <p>When you support ToolEsy, you're not just funding a website - you're supporting a philosophy:</p>
    
    <ul>
      <li><strong>100% Free Forever:</strong> We'll never charge for basic tool access or put features behind paywalls</li>
      <li><strong>Privacy First:</strong> Your data stays in your browser - we don't store or track your usage</li>
      <li><strong>No Registration Required:</strong> Use any tool instantly without creating accounts</li>
      <li><strong>Ad-Free Experience:</strong> No banners, pop-ups, or sponsored content disrupting your workflow</li>
      <li><strong>Open Development:</strong> We're transparent about our roadmap and listen to community feedback</li>
    </ul>

    <h3>The Impact of Your Support</h3>
    <p>Since our launch, ToolEsy has helped millions of users complete their digital tasks efficiently. Your support enables us to:</p>
    
    <ul>
      <li>Continue providing existing tools without interruptions</li>
      <li>Add 5-10 new tools each year based on user suggestions</li>
      <li>Maintain 99.9% uptime across all tools</li>
      <li>Support the latest web standards and browser technologies</li>
      <li>Provide tools in multiple languages for global accessibility</li>
      <li>Ensure mobile-friendly experiences for all tools</li>
    </ul>

    <h3>Other Ways to Support</h3>
    <p>If you're unable to donate financially, there are other valuable ways to support ToolEsy:</p>
    
    <ul>
      <li><strong>Spread the Word:</strong> Share ToolEsy with friends, colleagues, and on social media</li>
      <li><strong>Provide Feedback:</strong> Suggest improvements or report issues to help us make tools better</li>
      <li><strong>Request Tools:</strong> Tell us what tools you need - your ideas shape our development roadmap</li>
      <li><strong>Technical Contributions:</strong> Developers can contribute code or suggest technical improvements</li>
      <li><strong>Documentation Help:</strong> Help improve our guides and tutorials for other users</li>
    </ul>

    <h3>Transparency Promise</h3>
    <p>We believe in being transparent about our funding and operations:</p>
    
    <ul>
      <li>We'll never sell user data or compromise privacy for revenue</li>
      <li>All donations go directly toward ToolEsy development and maintenance</li>
      <li>We maintain a public roadmap of upcoming features and tools</li>
      <li>Major changes to our service or policies are communicated clearly</li>
      <li>We're responsive to user concerns and feedback</li>
    </ul>

    <p>Thank you for considering support for ToolEsy. Whether through donations, sharing our tools, or providing feedback, every bit of support helps us continue our mission of providing free, privacy-focused tools for everyone.</p>

    <div style="text-align: center; margin-top: 40px; padding: 30px; background: #f8f9fa; border-radius: 10px;">
      <h3 style="color: var(--primary); margin-bottom: 15px;">Ready to Make a Difference?</h3>
      <p style="margin-bottom: 20px;">Choose your preferred donation method above and help us keep ToolEsy free and accessible for everyone.</p>
      <button class="donate-button" onclick="document.getElementById('paypalDonate').scrollIntoView({behavior: 'smooth'})">
        <i class="fas fa-heart"></i> Support ToolEsy Now
      </button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const amountOptions = document.querySelectorAll('.amount-option');
    const customAmountInput = document.querySelector('.custom-amount');
    const copyButtons = document.querySelectorAll('.copy-button');
    const alertContainer = document.getElementById('alertContainer');
    
    let selectedAmount = '15';

    // Amount selection
    amountOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Remove selected class from all options
        amountOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Add selected class to clicked option
        this.classList.add('selected');
        
        // Update selected amount
        selectedAmount = this.getAttribute('data-amount');
        
        // Clear custom amount
        customAmountInput.value = '';
      });
    });

    // Custom amount input
    customAmountInput.addEventListener('input', function() {
      if (this.value) {
        // Remove selected class from all fixed amount options
        amountOptions.forEach(opt => opt.classList.remove('selected'));
        selectedAmount = this.value;
      }
    });

    // Copy crypto address functionality
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const address = this.getAttribute('data-address');
        navigator.clipboard.writeText(address).then(() => {
          showAlert('Cryptocurrency address copied to clipboard!', 'success');
        }).catch(err => {
          showAlert('Failed to copy address: ' + err, 'error');
        });
      });
    });

    // Donation button handlers
    document.getElementById('paypalDonate').addEventListener('click', function() {
      const amount = customAmountInput.value || selectedAmount;
      // In a real implementation, this would redirect to PayPal with the amount
      showAlert(`Redirecting to PayPal with $${amount} donation...`, 'success');
      // Simulate redirect
      setTimeout(() => {
        showAlert('Thank you for your donation! Your support means everything to us.', 'success');
      }, 2000);
    });

    document.getElementById('coffeeDonate').addEventListener('click', function() {
      // In a real implementation, this would redirect to Buy Me a Coffee
      showAlert('Redirecting to Buy Me a Coffee...', 'success');
      setTimeout(() => {
        showAlert('Thanks for the coffee! Your support helps keep us coding.', 'success');
      }, 2000);
    });

    document.getElementById('patreonDonate').addEventListener('click', function() {
      // In a real implementation, this would redirect to Patreon
      showAlert('Redirecting to Patreon...', 'success');
      setTimeout(() => {
        showAlert('Welcome to the ToolEsy Patreon community!', 'success');
      }, 2000);
    });

    function showAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.innerHTML = '';
      alertContainer.appendChild(alertDiv);

      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function() {
        alertDiv.remove();
      });

      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }

    // Add animation to donation options
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe donation options for animation
    document.querySelectorAll('.donation-option, .crypto-option, .testimonial').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    // Update impact stats with animation
    const impactNumbers = document.querySelectorAll('.impact-number');
    impactNumbers.forEach(stat => {
      if (stat.textContent === '80+') {
        animateValue(stat, 0, 80, 2000);
      } else if (stat.textContent === '100%') {
        animateValue(stat, 0, 100, 2000);
      } else if (stat.textContent === '50K+') {
        animateValue(stat, 0, 50, 2000);
      }
    });

    function animateValue(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  });
</script>