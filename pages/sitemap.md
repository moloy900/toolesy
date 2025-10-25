---
layout: default
title: "Sitemap"
permalink: /sitemap/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Text and Code Tools - Text Converter, Code Formatter, Utilities</title>
<meta name="description"
  content="Free online text tools, code formatters, and utilities. Convert text cases, format code, check website status, calculate various metrics, and more.">
<meta name="keywords"
  content="text tools, case converter, code formatter, online utilities, text formatter, css beautifier, html formatter, javascript formatter, json formatter, website tools, calculators, pdf tools">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  .home-container {
    padding: 20px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .home-container h1 {
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

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    margin: 40px 0;
  }

  .tool-category {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .tool-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .tool-category h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.4rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tool-category h2 i {
    font-size: 1.2rem;
  }

  .tool-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tool-list li {
    margin-bottom: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
  }

  .tool-list li:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .tool-link {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .tool-link:hover {
    background: var(--primary);
    color: white;
    transform: translateX(5px);
  }

  .tool-link i {
    font-size: 0.9rem;
    width: 20px;
    text-align: center;
  }

  .featured-tools {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 15px;
    margin: 50px 0;
    text-align: center;
  }

  .featured-tools h2 {
    color: white;
    margin-bottom: 30px;
    font-size: 2rem;
  }

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .featured-tool {
    background: rgba(255, 255, 255, 0.1);
    padding: 25px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .featured-tool:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  .featured-tool h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .featured-tool p {
    margin-bottom: 20px;
    opacity: 0.9;
  }

  .featured-button {
    display: inline-block;
    padding: 12px 25px;
    background: white;
    color: var(--primary);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .featured-button:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 50px 0;
  }

  .stat-item {
    text-align: center;
    padding: 30px 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 10px;
  }

  .stat-label {
    color: #666;
    font-weight: 500;
  }

  .content-section {
    background: white;
    padding: 40px;
    border-radius: 12px;
    margin: 40px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .content-section h2 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.8rem;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 15px;
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

  .quick-actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 40px 0;
  }

  .quick-action {
    background: var(--primary);
    color: white;
    padding: 30px 20px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .quick-action:hover {
    background: #2980b9;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .quick-action i {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  .quick-action h3 {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .home-container {
      padding: 15px;
    }

    .home-container h1 {
      font-size: 2rem;
    }

    .tools-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .tool-category {
      padding: 20px;
    }

    .featured-tools {
      padding: 30px 20px;
      margin: 30px 0;
    }

    .featured-tools h2 {
      font-size: 1.6rem;
    }

    .featured-grid {
      grid-template-columns: 1fr;
    }

    .stats-section {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin: 30px 0;
    }

    .stat-item {
      padding: 20px 15px;
    }

    .stat-number {
      font-size: 2rem;
    }

    .content-section {
      padding: 25px 20px;
      margin: 30px 0;
    }

    .quick-actions {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .tool-link {
      padding: 6px 10px;
    }
  }

  @media (max-width: 480px) {
    .stats-section {
      grid-template-columns: 1fr;
    }

    .home-container h1 {
      font-size: 1.8rem;
    }

    .welcome-message {
      font-size: 1.1rem;
    }
  }
</style>

<div class="home-container">
  <h1>Free Online Text and Code Tools</h1>
  <p class="welcome-message">Your all-in-one toolkit for text conversion, code formatting, website utilities, calculators, and PDF tools. All tools are completely free, work in your browser, and respect your privacy.</p>

  <!-- Quick Actions -->
  <div class="quick-actions">
    <a href="/online-case-converter/" class="quick-action">
      <i class="fas fa-font"></i>
      <h3>Text Case Converter</h3>
      <p>Convert text between different cases instantly</p>
    </a>
    <a href="/online-css-beautifier-formatter/" class="quick-action">
      <i class="fab fa-css3-alt"></i>
      <h3>CSS Beautifier</h3>
      <p>Format and minify CSS code</p>
    </a>
    <a href="/website-availability-check/" class="quick-action">
      <i class="fas fa-globe"></i>
      <h3>Website Check</h3>
      <p>Check website status and performance</p>
    </a>
  </div>

  <!-- Stats Section -->
  <div class="stats-section">
    <div class="stat-item">
      <div class="stat-number">30+</div>
      <div class="stat-label">Online Tools</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">100%</div>
      <div class="stat-label">Free to Use</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">Privacy</div>
      <div class="stat-label">First</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">No Signup</div>
      <div class="stat-label">Required</div>
    </div>
  </div>

  <!-- Tools Grid -->
  <div class="tools-grid">
    <!-- Text Tools -->
    <div class="tool-category">
      <h2><i class="fas fa-text-height"></i> Text Tools</h2>
      <ul class="tool-list">
        <li><a href="/online-case-converter/" class="tool-link"><i class="fas fa-arrow-right"></i>Online Case Converter</a></li>
        <li><a href="/text-replacement-tool/" class="tool-link"><i class="fas fa-exchange-alt"></i>Text Replacement Tool</a></li>
        <li><a href="/plain-text-converter/" class="tool-link"><i class="fas fa-file-alt"></i>Plain Text Converter</a></li>
        <li><a href="/remove-line-breaks/" class="tool-link"><i class="fas fa-minus"></i>Remove Line Breaks</a></li>
        <li><a href="/word-frequency-counter/" class="tool-link"><i class="fas fa-chart-bar"></i>Word Frequency Counter</a></li>
        <li><a href="/text-formatting-removal/" class="tool-link"><i class="fas fa-eraser"></i>Text Formatting Removal</a></li>
        <li><a href="/online-notepad/" class="tool-link"><i class="fas fa-sticky-note"></i>Online Notepad</a></li>
        <li><a href="/reverse-text/" class="tool-link"><i class="fas fa-retweet"></i>Reverse Text</a></li>
        <li><a href="/aesthetic-text-generator/" class="tool-link"><i class="fas fa-palette"></i>Aesthetic Text Generator</a></li>
        <li><a href="/ascii-art-generator/" class="tool-link"><i class="fas fa-shapes"></i>ASCII Art Generator</a></li>
        <li><a href="/alphabetizer-text/" class="tool-link"><i class="fas fa-sort-alpha-down"></i>Alphabetizer Text</a></li>
        <li><a href="/big-text/" class="tool-link"><i class="fas fa-text-width"></i>Big Text</a></li>
        <li><a href="/morse-text/" class="tool-link"><i class="fas fa-wave-square"></i>Morse Text</a></li>
        <li><a href="/morse-code-translator/" class="tool-link"><i class="fas fa-code"></i>Morse Code Translator</a></li>
        <li><a href="/phonetic-spelling-generator/" class="tool-link"><i class="fas fa-microphone"></i>Phonetic Spelling Generator</a></li>
        <li><a href="/whitespace-extra-space-remover/" class="tool-link"><i class="fas fa-space-shuttle"></i>Whitespace / Extra Space Remover</a></li>
        <li><a href="/pig-latin-translator/" class="tool-link"><i class="fas fa-language"></i>Pig Latin Translator</a></li>
        <li><a href="/stacked-vertical-text/" class="tool-link"><i class="fas fa-align-center"></i>Stacked / Vertical Text</a></li>
        <li><a href="/url-encode-decode/" class="tool-link"><i class="fas fa-link"></i>URL Encode & Decode</a></li>
        <li><a href="/base64-encoder-decoder/" class="tool-link"><i class="fas fa-key"></i>Base64 Encoder & Decoder</a></li>
        <li><a href="/text-to-handwriting-converter/" class="tool-link"><i class="fas fa-pen"></i>Text to Handwriting Converter</a></li>
        <li><a href="/spelling-and-grammar-checker/" class="tool-link"><i class="fas fa-spell-check"></i>Spelling and Grammar Checker</a></li>
        <li><a href="/text-rewording-paraphrasing/" class="tool-link"><i class="fas fa-sync-alt"></i>Text Rewording / Paraphrasing</a></li>
      </ul>
    </div>

    <!-- Code Formatter -->
    <div class="tool-category">
      <h2><i class="fas fa-code"></i> Code Formatter</h2>
      <ul class="tool-list">
        <li><a href="/code-formatter/" class="tool-link"><i class="fas fa-indent"></i>Code Formatter</a></li>
        <li><a href="/xml-formatter/" class="tool-link"><i class="fab fa-xml"></i>XML Formatter</a></li>
        <li><a href="/html-formatter/" class="tool-link"><i class="fab fa-html5"></i>HTML Formatter</a></li>
        <li><a href="/online-css-beautifier-formatter/" class="tool-link"><i class="fab fa-css3-alt"></i>CSS Formatter</a></li>
        <li><a href="/javascript-formatter/" class="tool-link"><i class="fab fa-js"></i>Javascript Formatter</a></li>
        <li><a href="/json-formatter/" class="tool-link"><i class="fas fa-brackets-curly"></i>JSON Formatter</a></li>
        <li><a href="/php-formatter/" class="tool-link"><i class="fab fa-php"></i>PHP Formatter</a></li>
        <li><a href="/sql-formatter/" class="tool-link"><i class="fas fa-database"></i>SQL Formatter</a></li>
        <li><a href="/online-compiler/" class="tool-link"><i class="fas fa-cogs"></i>Online Compiler</a></li>
      </ul>
    </div>

    <!-- Domain & Network Tools -->
    <div class="tool-category">
      <h2><i class="fas fa-network-wired"></i> Domain & Network Tools</h2>
      <ul class="tool-list">
        <li><a href="/website-availability-check/" class="tool-link"><i class="fas fa-wifi"></i>Website Availability Check</a></li>
        <li><a href="/ping-website-or-webserver/" class="tool-link"><i class="fas fa-satellite-dish"></i>Ping Website or Webserver</a></li>
        <li><a href="/find-ip-address/" class="tool-link"><i class="fas fa-map-marker-alt"></i>Find IP Address</a></li>
        <li><a href="/find-location-domain/" class="tool-link"><i class="fas fa-map-pin"></i>Find Location Domain</a></li>
        <li><a href="/whois-lookup/" class="tool-link"><i class="fas fa-search"></i>Whois Lookup</a></li>
        <li><a href="/internet-speed-test/" class="tool-link"><i class="fas fa-tachometer-alt"></i>Internet Speed Test</a></li>
      </ul>
    </div>

    <!-- Website SEO & Performance Tools -->
    <div class="tool-category">
      <h2><i class="fas fa-chart-line"></i> Website SEO & Performance</h2>
      <ul class="tool-list">
        <li><a href="/slugify-url-or-permalinks-link-generator/" class="tool-link"><i class="fas fa-sliders-h"></i>Slugify URL or Permalinks</a></li>
        <li><a href="/page-speed-test/" class="tool-link"><i class="fas fa-stopwatch"></i>Page Speed Test</a></li>
        <li><a href="/website-file-size-checker/" class="tool-link"><i class="fas fa-weight"></i>Website File Size Checker</a></li>
        <li><a href="/website-page-snooper/" class="tool-link"><i class="fas fa-binoculars"></i>Website Page Snooper</a></li>
      </ul>
    </div>

    <!-- Calculator Tools -->
    <div class="tool-category">
      <h2><i class="fas fa-calculator"></i> Calculator Tools</h2>
      <ul class="tool-list">
        <li><a href="/sleep-debt-calculator/" class="tool-link"><i class="fas fa-bed"></i>Sleep Debt Calculator</a></li>
        <li><a href="/sleep-cycle-calculator/" class="tool-link"><i class="fas fa-moon"></i>Sleep Cycle Calculator</a></li>
        <li><a href="/water-intake-calculator/" class="tool-link"><i class="fas fa-tint"></i>Water Intake Calculator</a></li>
        <li><a href="/carbon-footprint-calculator/" class="tool-link"><i class="fas fa-leaf"></i>Carbon Footprint Calculator</a></li>
        <li><a href="/mobile-data-usage-calculator/" class="tool-link"><i class="fas fa-mobile-alt"></i>Mobile Data Usage Calculator</a></li>
        <li><a href="/body-water-percentage-calculator/" class="tool-link"><i class="fas fa-user"></i>Body Water Percentage Calculator</a></li>
        <li><a href="/study-time-vs-exam-score-calculator/" class="tool-link"><i class="fas fa-graduation-cap"></i>Study Time vs Exam Score Calculator</a></li>
        <li><a href="/social-media-time-wastage-calculator/" class="tool-link"><i class="fas fa-clock"></i>Social Media Time Wastage Calculator</a></li>
        <li><a href="/language-learning-progress-calculator/" class="tool-link"><i class="fas fa-language"></i>Language Learning Progress Calculator</a></li>
        <li><a href="/travel-carbon-offset-calculator/" class="tool-link"><i class="fas fa-plane"></i>Travel Carbon Offset Calculator</a></li>
        <li><a href="/currency-converter/" class="tool-link"><i class="fas fa-money-bill-wave"></i>Currency Converter</a></li>
        <li><a href="/online-age-calculator/" class="tool-link"><i class="fas fa-birthday-cake"></i>Online Age Calculator</a></li>
        <li><a href="/percentage-calculator/" class="tool-link"><i class="fas fa-percentage"></i>Percentage Calculator</a></li>
        <li><a href="/date-calculator/" class="tool-link"><i class="fas fa-calendar"></i>Date Calculator</a></li>
        <li><a href="/time-calculator/" class="tool-link"><i class="fas fa-clock"></i>Time Calculator</a></li>
        <li><a href="/hours-calculator/" class="tool-link"><i class="fas fa-hourglass"></i>Hours Calculator</a></li>
        <li><a href="/average-calculator/" class="tool-link"><i class="fas fa-chart-bar"></i>Average Calculator</a></li>
        <li><a href="/confidence-interval-calculator/" class="tool-link"><i class="fas fa-chart-line"></i>Confidence Interval Calculator</a></li>
      </ul>
    </div>

    <!-- PDF Tools -->
    <div class="tool-category">
      <h2><i class="fas fa-file-pdf"></i> PDF Tools</h2>
      <ul class="tool-list">
        <li><a href="/pdf-merger/" class="tool-link"><i class="fas fa-compress"></i>PDF Merger</a></li>
        <li><a href="/pdf-splitter/" class="tool-link"><i class="fas fa-cut"></i>PDF Splitter</a></li>
        <li><a href="/pdf-cropper/" class="tool-link"><i class="fas fa-crop"></i>PDF Cropper</a></li>
        <li><a href="/pdf-resizer/" class="tool-link"><i class="fas fa-expand"></i>PDF Resizer</a></li>
        <li><a href="/pdf-compressor/" class="tool-link"><i class="fas fa-compress-alt"></i>PDF Compressor</a></li>
        <li><a href="/pdf-rotator/" class="tool-link"><i class="fas fa-redo"></i>PDF Rotator</a></li>
        <li><a href="/pdf-to-images-convert/" class="tool-link"><i class="fas fa-image"></i>PDF to Images Convert</a></li>
        <li><a href="/images-to-pdf-convert/" class="tool-link"><i class="fas fa-file-image"></i>Images to PDF Convert</a></li>
        <li><a href="/file-to-pdf-convert/" class="tool-link"><i class="fas fa-file-upload"></i>File to PDF Convert</a></li>
        <li><a href="/pdf-ocr/" class="tool-link"><i class="fas fa-eye"></i>PDF OCR</a></li>
      </ul>
    </div>
  </div>

  <!-- Featured Tools -->
  <div class="featured-tools">
    <h2>Most Popular Tools</h2>
    <div class="featured-grid">
      <div class="featured-tool">
        <h3>CSS Beautifier</h3>
        <p>Format and minify your CSS code with proper indentation and structure</p>
        <a href="/online-css-beautifier-formatter/" class="featured-button">Use Tool</a>
      </div>
      <div class="featured-tool">
        <h3>Case Converter</h3>
        <p>Convert text between uppercase, lowercase, title case and more</p>
        <a href="/online-case-converter/" class="featured-button">Use Tool</a>
      </div>
      <div class="featured-tool">
        <h3>JSON Formatter</h3>
        <p>Beautify and validate JSON data with syntax highlighting</p>
        <a href="/json-formatter/" class="featured-button">Use Tool</a>
      </div>
    </div>
  </div>

  <!-- Content Section -->
  <div class="content-section">
    <h2>About Our Free Online Tools</h2>

    <p>Welcome to your comprehensive toolkit for all things text, code, and web utilities. Our platform offers a wide range of completely free online tools designed to make your work easier, faster, and more efficient.</p>

    <h3>Why Choose Our Tools?</h3>
    <ul>
      <li><strong>100% Free:</strong> All tools are completely free to use with no hidden costs or subscriptions</li>
      <li><strong>Privacy First:</strong> Your data never leaves your browser - we don't store or track your content</li>
      <li><strong>No Registration:</strong> Use any tool instantly without creating an account</li>
      <li><strong>Mobile Friendly:</strong> All tools work perfectly on desktop, tablet, and mobile devices</li>
      <li><strong>Regular Updates:</strong> We continuously improve and add new tools based on user feedback</li>
    </ul>

    <h3>Tool Categories</h3>
    <p>Our tools are organized into several categories to help you find exactly what you need:</p>

    <h4>Text Tools</h4>
    <p>Transform and manipulate text with our comprehensive text tool collection. Convert cases, remove formatting, count words, generate aesthetic text, and much more. Perfect for writers, students, and content creators.</p>

    <h4>Code Formatters</h4>
    <p>Professional code formatting tools for developers. Beautify and minify CSS, HTML, JavaScript, JSON, PHP, SQL, and XML. Ensure your code follows best practices and is easy to read and maintain.</p>

    <h4>Website & Network Tools</h4>
    <p>Essential utilities for website owners and developers. Check website availability, perform WHOIS lookups, test internet speed, and analyze SEO performance.</p>

    <h4>Calculators</h4>
    <p>Specialized calculators for health, environment, education, and daily life. Calculate sleep cycles, carbon footprint, study time, currency conversion, and more.</p>

    <h4>PDF Tools</h4>
    <p>Complete PDF manipulation toolkit. Merge, split, compress, convert, and optimize PDF documents without installing any software.</p>

    <h3>How to Use Our Tools</h3>
    <p>Using our tools is simple and straightforward:</p>
    <ol>
      <li>Navigate to the tool you need using the categories above</li>
      <li>Input your text, code, or data into the provided field</li>
      <li>Adjust any settings or options as needed</li>
      <li>Click the appropriate action button</li>
      <li>Copy, download, or use your processed content</li>
    </ol>

    <h3>Frequently Asked Questions</h3>
    <p><strong>Q: Are these tools really free to use?</strong><br>
    A: Yes, all tools are completely free with no limitations or hidden costs.</p>

    <p><strong>Q: Is my data safe when using these tools?</strong><br>
    A: Absolutely. All processing happens in your browser - we never send your data to our servers.</p>

    <p><strong>Q: Can I use these tools on my mobile phone?</strong><br>
    A: Yes, all tools are fully responsive and work perfectly on mobile devices.</p>

    <p><strong>Q: Do I need to create an account?</strong><br>
    A: No account or registration is required to use any of our tools.</p>

    <p><strong>Q: Can I suggest new tools or features?</strong><br>
    A: Yes! We welcome suggestions for new tools or improvements to existing ones.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Add animation to tool categories on scroll
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

    // Observe tool categories for animation
    document.querySelectorAll('.tool-category').forEach(category => {
      category.style.opacity = '0';
      category.style.transform = 'translateY(20px)';
      category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(category);
    });

    // Update stats with random animation (for demo purposes)
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      if (stat.textContent === '30+') {
        animateValue(stat, 0, 30, 2000);
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