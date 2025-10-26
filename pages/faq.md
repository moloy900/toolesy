---
layout: default
title: "Frequently Asked Questions (FAQ) - ToolEsy"
permalink: /faq/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Frequently Asked Questions (FAQ) - ToolEsy Free Online Tools</title>
<meta name="description"
  content="Find answers to common questions about ToolEsy free online tools. Learn about text tools, code formatters, calculators, PDF tools, privacy, and more.">
<meta name="keywords"
  content="faq, frequently asked questions, toolesy help, online tools, text tools, code formatters, calculators, pdf tools, privacy policy">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  .faq-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .faq-container h1 {
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

  .faq-category {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .faq-category h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .faq-category h2 i {
    font-size: 1.2rem;
  }

  .faq-item {
    background: white;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .faq-question {
    padding: 20px;
    background: white;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease;
  }

  .faq-question:hover {
    background: #f8f9fa;
  }

  .faq-question.active {
    background: var(--primary);
    color: white;
  }

  .faq-question .icon {
    transition: transform 0.3s ease;
  }

  .faq-question.active .icon {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    background: white;
    border-top: 1px solid #e0e0e0;
  }

  .faq-answer.active {
    padding: 20px;
    max-height: 1000px;
  }

  .faq-answer p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
  }

  .faq-answer p:last-child {
    margin-bottom: 0;
  }

  .search-section {
    margin: 30px 0;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 10px;
    text-align: center;
  }

  .search-box {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
  }

  .search-input {
    width: 100%;
    padding: 15px 50px 15px 20px;
    border: 2px solid #e0e6ed;
    border-radius: 25px;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .search-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #7f8c8d;
  }

  .quick-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 30px 0;
    padding: 25px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;
  }

  .quick-link {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .quick-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }

  .quick-link i {
    font-size: 2rem;
    margin-bottom: 10px;
    display: block;
  }

  .quick-link span {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 40px 0;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 15px;
    text-align: center;
  }

  .stat-item {
    padding: 20px;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 10px;
  }

  .stat-label {
    font-size: 1.1rem;
    color: #666;
    font-weight: 500;
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

  .no-results {
    text-align: center;
    padding: 40px;
    color: #666;
    display: none;
  }

  .no-results i {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #bdc3c7;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .faq-container {
      padding: 15px;
    }

    .faq-container h1 {
      font-size: 2rem;
    }

    .faq-category {
      padding: 20px;
      margin-bottom: 30px;
    }

    .faq-question {
      padding: 15px;
      font-size: 1rem;
    }

    .faq-answer.active {
      padding: 15px;
    }

    .search-section {
      padding: 20px;
      margin: 25px 0;
    }

    .quick-links {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 20px;
      margin: 25px 0;
    }

    .quick-link {
      padding: 15px;
    }

    .stats-section {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 20px;
      margin: 30px 0;
    }

    .stat-number {
      font-size: 2rem;
    }

    .content-section {
      padding: 25px 20px;
      margin-top: 30px;
    }
  }

  @media (max-width: 480px) {
    .quick-links {
      grid-template-columns: 1fr;
    }

    .stats-section {
      grid-template-columns: 1fr;
    }

    .faq-container h1 {
      font-size: 1.8rem;
    }

    .faq-category h2 {
      font-size: 1.3rem;
    }
  }
</style>

<div class="faq-container">
  <h1>Frequently Asked Questions (FAQ)</h1>
  <p class="welcome-message">Find quick answers to common questions about ToolEsy and our free online tools. Can't find what you're looking for? Contact our support team for assistance.</p>

  <!-- Search Section -->
  <div class="search-section">
    <h2>Search Questions</h2>
    <div class="search-box">
      <input type="text" id="faqSearch" class="search-input" placeholder="Type your question here...">
      <i class="fas fa-search search-icon"></i>
    </div>
  </div>

  <!-- Quick Links -->
  <div class="quick-links">
    <a href="#about" class="quick-link">
      <i class="fas fa-info-circle"></i>
      <span>About ToolEsy</span>
    </a>
    <a href="#text-tools" class="quick-link">
      <i class="fas fa-text-height"></i>
      <span>Text Tools</span>
    </a>
    <a href="#code-tools" class="quick-link">
      <i class="fas fa-code"></i>
      <span>Code Tools</span>
    </a>
    <a href="#pdf-tools" class="quick-link">
      <i class="fas fa-file-pdf"></i>
      <span>PDF Tools</span>
    </a>
    <a href="#privacy" class="quick-link">
      <i class="fas fa-shield-alt"></i>
      <span>Privacy & Security</span>
    </a>
    <a href="#support" class="quick-link">
      <i class="fas fa-headset"></i>
      <span>Support</span>
    </a>
  </div>

  <!-- Stats Section -->
  <div class="stats-section">
    <div class="stat-item">
      <div class="stat-number">26</div>
      <div class="stat-label">FAQ Questions</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">80+</div>
      <div class="stat-label">Free Tools</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">100%</div>
      <div class="stat-label">Privacy Focused</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">24/7</div>
      <div class="stat-label">Available</div>
    </div>
  </div>

  <!-- About ToolEsy Section -->
  <div class="faq-category" id="about">
    <h2><i class="fas fa-info-circle"></i> About ToolEsy</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>1️⃣ What is ToolEsy?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>ToolEsy is a comprehensive collection of simple and smart online tools designed to help you complete digital tasks faster. Our platform includes text editing tools, code formatters, domain and network utilities, calculators, and PDF manipulation tools - all available for free in your browser.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>2️⃣ Is ToolEsy free to use?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Yes! All tools available on ToolEsy are 100% free to use without any subscription, payment, or hidden costs. We believe in providing accessible tools for everyone.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>3️⃣ Do I need to create an account to use the tools?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>No account required. You can instantly use any tool right from your browser without registration. We respect your privacy and time.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>4️⃣ Can I access ToolEsy on mobile devices?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Absolutely! All tools are mobile-friendly and work smoothly on smartphones and tablets. Our responsive design ensures optimal experience across all devices.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>5️⃣ How accurate are the calculators and converters?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Our tools are designed with reliable logic and updated algorithms to provide accurate results. However, they are intended for personal and educational use only - not for medical, legal, or professional certification purposes.</p>
      </div>
    </div>
  </div>

  <!-- Text Tools Section -->
  <div class="faq-category" id="text-tools">
    <h2><i class="fas fa-text-height"></i> Text Tools</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>6️⃣ What can I do with ToolEsy Text Tools?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Our text tools suite allows you to convert, edit, clean, rewrite, count, and style text easily. You can perform various operations including case conversion, removing extra spaces, generating fancy fonts, counting words and characters, encoding/decoding text, and much more.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>7️⃣ Do you store any text I enter?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>No. All text processing happens locally in your browser. We don't store, log, or transmit your input text to our servers. Your data remains completely private on your device.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>8️⃣ Can I convert text formats quickly?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Yes! We offer multiple tools that allow encoding, decoding, converting, formatting, and restructuring text instantly. Whether you need to convert between different cases, encode URLs, decode base64, or transform text in various ways, our tools provide quick and efficient solutions.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>9️⃣ How can I generate fancy or aesthetic text?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Use our Aesthetic Text Generator or Fancy Text Tools to quickly create stylish social media-friendly text designs. These tools transform your regular text into various decorative fonts and styles perfect for social media bios, posts, and creative projects.</p>
      </div>
    </div>
  </div>

  <!-- Code & Data Formatting Tools Section -->
  <div class="faq-category" id="code-tools">
    <h2><i class="fas fa-code"></i> Code & Data Formatting Tools</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>🔟 What do Code Formatter tools do?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Our code formatter tools beautify and organize your code, making it clean, readable, and easier to debug. They automatically apply proper indentation, spacing, and formatting according to best practices for various programming languages including CSS, HTML, JavaScript, JSON, XML, PHP, and SQL.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>11️⃣ Do the formatters support large code files?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Yes, most formatters can handle large blocks of code depending on your device's capability and browser performance. While there's no strict file size limit, extremely large files may experience slower processing due to browser memory constraints.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>12️⃣ Is my code saved on your server?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>No. All code formatting runs locally in your browser - we never store any code on our servers. Your proprietary code, client projects, and sensitive information remain completely private on your device.</p>
      </div>
    </div>
  </div>

  <!-- PDF Tools Section -->
  <div class="faq-category" id="pdf-tools">
    <h2><i class="fas fa-file-pdf"></i> PDF Tools</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>13️⃣ How do I merge or split PDFs?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>The process is simple: Upload your PDFs → choose your option (Merge for combining files or Split for separating pages) → Process the files → Download instantly. Our intuitive interface makes PDF manipulation straightforward and user-friendly.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>14️⃣ Is there any file size limit?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>For smooth performance, a moderate file size is recommended depending on your browser's capability. While we don't impose strict limits, very large files may take longer to process or could be limited by your device's memory and internet connection speed.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>15️⃣ Are uploaded PDF files stored permanently?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>No. Files are processed temporarily in your browser and removed automatically after the action is completed. We don't store any uploaded files on our servers, ensuring your document privacy and security.</p>
      </div>
    </div>
  </div>

  <!-- Domain & Network Tools Section -->
  <div class="faq-category">
    <h2><i class="fas fa-network-wired"></i> Domain & Network Tools</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>16️⃣ How does the speed test work?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>The Website Speed Tool measures load time and performance based on your internet connection and site resources. It analyzes various factors including server response time, file sizes, and loading patterns to provide comprehensive performance insights.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>17️⃣ Can I check uptime or server response?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Yes! You can ping a website or check availability directly via our tools. Our network utilities help you monitor server status, response times, and overall website availability in real-time.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>18️⃣ Do you store IP lookup or network data?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>No. All network requests are checked in real-time without saving your browsing information. We respect your privacy and don't log IP addresses, lookup queries, or network testing data.</p>
      </div>
    </div>
  </div>

  <!-- Calculator Tools Section -->
  <div class="faq-category">
    <h2><i class="fas fa-calculator"></i> Calculator Tools</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>19️⃣ Are these calculators medically/scientifically certified?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Our calculators are designed for educational and general guidance purposes only. They are not intended for professional medical, scientific, or legal certification. Always consult with qualified professionals for important decisions involving health, finance, or legal matters.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>20️⃣ Can I calculate age, date & percentage easily?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Yes! Multiple calculators help you compute age, time, hours, percentages, averages and more instantly. Our date and time calculators are particularly useful for planning, scheduling, and various personal and professional calculations.</p>
      </div>
    </div>
  </div>

  <!-- Privacy & Security Section -->
  <div class="faq-category" id="privacy">
    <h2><i class="fas fa-shield-alt"></i> Privacy & Security</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>21️⃣ Is my uploaded data secure?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Yes. Security is our top priority - all tool tasks are processed securely without permanent storage. Your data never leaves your browser during processing, ensuring maximum privacy and protection.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>22️⃣ Do you use cookies or analytics?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Basic cookies may be used to improve performance and user experience. We use analytics to understand how tools are used and to enhance our service. Detailed information about our data practices is available in our Privacy Policy.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>23️⃣ How can I request privacy support?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>You can contact us anytime through our support page for data-related concerns. We take privacy seriously and will promptly address any questions or issues you may have regarding data protection.</p>
      </div>
    </div>
  </div>

  <!-- Technical & Support Section -->
  <div class="faq-category" id="support">
    <h2><i class="fas fa-headset"></i> Technical & Support</h2>
    
    <div class="faq-item">
      <button class="faq-question">
        <span>24️⃣ A tool isn't working — what should I do?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Try refreshing the page or switching to another browser. Clear your browser cache and ensure you have a stable internet connection. If the issue persists, reach out to our support team with details about the problem and your browser information.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>25️⃣ How do I contact ToolEsy support?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>You can email us via the Contact page for suggestions or help. We strive to respond to all inquiries within 24-48 hours and appreciate your feedback to improve our services.</p>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-question">
        <span>26️⃣ Do you accept suggestions for new tools?</span>
        <i class="fas fa-chevron-down icon"></i>
      </button>
      <div class="faq-answer">
        <p>Absolutely YES! We love hearing your ideas and regularly add new tools based on user feedback. Your suggestions help us create the most useful and relevant tools for our community. Please share your ideas through our contact form.</p>
      </div>
    </div>
  </div>

  <!-- No Results Message -->
  <div class="no-results" id="noResults">
    <i class="fas fa-search"></i>
    <h3>No matching questions found</h3>
    <p>Try searching with different keywords or browse the categories above.</p>
  </div>

  <!-- Additional Content Section -->
  <div class="content-section">
    <h2>Need More Help?</h2>

    <p>If you couldn't find the answer to your question in our FAQ section, we're here to help! ToolEsy is committed to providing excellent support and continuously improving our tools based on user feedback.</p>

    <h3>Additional Support Options</h3>
    <p>Beyond our FAQ, here are other ways to get assistance:</p>

    <h4>📧 Email Support</h4>
    <p>For detailed technical issues or specific questions, email our support team directly. We typically respond within 24-48 hours and provide personalized assistance for your concerns.</p>

    <h4>🔧 Tool-Specific Help</h4>
    <p>Each tool page includes detailed instructions, examples, and usage tips. Visit the specific tool you need help with for comprehensive guidance and practical examples.</p>

    <h4>🔄 Regular Updates</h4>
    <p>We continuously update our tools and FAQ based on user feedback. Check back regularly for new features, improved functionality, and additional help resources.</p>

    <h4>🌐 Community Feedback</h4>
    <p>Many of our tools were developed based on user suggestions. We value community input and actively incorporate popular requests into our development roadmap.</p>

    <h3>Common Technical Tips</h3>
    <ul>
      <li><strong>Browser Compatibility:</strong> For best results, use updated versions of Chrome, Firefox, Safari, or Edge</li>
      <li><strong>Large Files:</strong> Some tools may process large files slower depending on your device's capabilities</li>
      <li><strong>Mobile Usage:</strong> All tools are mobile-optimized, but complex operations may work better on desktop</li>
      <li><strong>Offline Functionality:</strong> Most tools work offline once loaded, perfect for unreliable internet connections</li>
      <li><strong>Privacy Assurance:</strong> Remember - your data never leaves your browser during processing</li>
    </ul>

    <h3>Why Choose ToolEsy?</h3>
    <p>ToolEsy stands out from other online tool platforms through our unwavering commitment to user privacy, completely free access, and continuous improvement. Unlike many services, we don't:</p>
    <ul>
      <li>Require registration or personal information</li>
      <li>Store your data on our servers</li>
      <li>Show advertisements or pop-ups</li>
      <li>Charge hidden fees or require subscriptions</li>
      <li>Limit tool functionality for free users</li>
    </ul>

    <p>We believe everyone should have access to quality digital tools without compromising privacy or paying unnecessary costs. Our growing collection of 80+ tools reflects this commitment, and we're constantly working to add more useful utilities based on your feedback.</p>

    <p>Thank you for choosing ToolEsy - we're here to make your digital tasks easier, faster, and more secure!</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    const searchInput = document.getElementById('faqSearch');
    const noResults = document.getElementById('noResults');
    const faqCategories = document.querySelectorAll('.faq-category');
    const faqItems = document.querySelectorAll('.faq-item');

    // FAQ accordion functionality
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = this.classList.contains('active');
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
          this.classList.add('active');
          answer.classList.add('active');
        }
      });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      let hasResults = false;

      if (searchTerm === '') {
        // Show all FAQs when search is empty
        faqItems.forEach(item => {
          item.style.display = 'block';
        });
        faqCategories.forEach(category => {
          category.style.display = 'block';
        });
        noResults.style.display = 'none';
        return;
      }

      // Search through FAQ items
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
          item.style.display = 'block';
          hasResults = true;
          
          // Highlight matching text
          const questionSpan = item.querySelector('.faq-question span');
          const answerContent = item.querySelector('.faq-answer');
          const originalQuestion = questionSpan.innerHTML;
          const originalAnswer = answerContent.innerHTML;
          
          const regex = new RegExp(`(${searchTerm})`, 'gi');
          questionSpan.innerHTML = originalQuestion.replace(regex, '<mark>$1</mark>');
          answerContent.innerHTML = originalAnswer.replace(regex, '<mark>$1</mark>');
        } else {
          item.style.display = 'none';
        }
      });

      // Show/hide categories based on visible items
      faqCategories.forEach(category => {
        const visibleItems = category.querySelectorAll('.faq-item[style="display: block"]');
        if (visibleItems.length > 0) {
          category.style.display = 'block';
        } else {
          category.style.display = 'none';
        }
      });

      // Show no results message if no matches found
      if (hasResults) {
        noResults.style.display = 'none';
      } else {
        noResults.style.display = 'block';
      }
    });

    // Smooth scrolling for quick links
    document.querySelectorAll('.quick-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add animation to FAQ items on scroll
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

    // Observe FAQ items for animation
    document.querySelectorAll('.faq-item').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    // Update stats with animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      if (stat.textContent === '26') {
        animateValue(stat, 0, 26, 2000);
      } else if (stat.textContent === '80+') {
        animateValue(stat, 0, 80, 2000);
      } else if (stat.textContent === '100%') {
        animateValue(stat, 0, 100, 2000);
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