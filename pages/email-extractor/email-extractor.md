---
layout: default
title: "Email Extractor Tool - Extract Email Addresses from Text"
permalink: /free-email-extractor-tool-extract-email-addresses-from-any-text/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Email Extractor Tool - Extract Email Addresses from Any Text</title>
<meta name="description"
  content="Free online email extractor tool. Extract email addresses from any text, document, or webpage. Fast regex-based email detection with copy and download options.">
<meta name="keywords"
  content="email extractor, extract email addresses, regex email extractor, email parser, extract emails from text, email scraper, email finder, email harvester, text to email extractor, email detection tool">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Email Extractor Styles */
  .extractor-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .extractor-container h1 {
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
  }

  .extractor-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .extractor-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .extractor-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .counter-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .counter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .counter-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .counter-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  .input-section {
    margin: 20px 0;
  }

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 220px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
    padding: 14px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .action-button:active {
    transform: translateY(0);
  }

  .action-button.success {
    background: var(--success);
  }

  .action-button.success:hover {
    background: #218838;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
    background: #e0a800;
  }

  .results-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 2px solid #e0e6ed;
  }

  .results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
  }

  .results-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    max-height: 400px;
    overflow-y: auto;
  }

  .email-card {
    padding: 12px 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .email-card:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .email-address {
    font-size: 1rem;
    font-weight: 500;
    color: #2c3e50;
    font-family: monospace;
  }

  .email-index {
    color: #666;
    font-size: 0.85rem;
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

  .alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-text {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    font-family: monospace;
    white-space: pre-wrap;
  }

  .content-placeholder {
    padding: 25px;
    background: white;
    border-radius: 12px;
    margin-top: 30px;
  }

  .content-placeholder ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .content-placeholder li {
    margin-bottom: 10px;
    line-height: 1.6;
    color: #555;
  }

  .content-placeholder h2 {
    color: #2c3e50;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  .share-donation-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .share-buttons,
  .donation-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .share-button,
  .donation-button {
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: none;
  }

  .share-button:hover,
  .donation-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .facebook {
    background: #3b5998;
    color: white;
  }

  .twitter {
    background: #1da1f2;
    color: white;
  }

  .linkedin {
    background: #0077b5;
    color: white;
  }

  .pinterest {
    background: #bd081c;
    color: white;
  }

  .reddit {
    background: #FF4500;
    color: white;
  }

  .paypal {
    background: #0070ba;
    color: white;
  }

  .coffee {
    background: #ff813f;
    color: white;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .extractor-container {
      padding: 15px;
    }

    .extractor-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .extractor-container h1 {
      font-size: 2rem;
    }

    .extractor-section h2 {
      font-size: 1.3rem;
    }

    .share-donation-section {
      flex-direction: column;
      align-items: stretch;
    }

    .share-buttons,
    .donation-buttons {
      justify-content: center;
    }

    .email-address {
      font-size: 0.9rem;
    }
  }
</style>

<div class="extractor-container">
  <h1>Email Extractor Tool</h1>
  <p class="welcome-message">Extract email addresses from any text instantly. Paste your content and our regex-based pattern matching will detect and extract all valid email addresses.</p>

  <div class="extractor-section">
    <h2>Text-Based Email Extraction</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Text Characters: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Total Lines: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Emails Found: </span>
        <span id="emailCount">0</span>
      </div>
      <div class="counter-item">
        <span>Unique Emails: </span>
        <span id="uniqueCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Paste Your Text Here</h2>
      <textarea id="inputText" rows="8" placeholder="Paste your text here...&#10;&#10;Example:&#10;Contact us at support@example.com or sales@company.com&#10;Admin: admin@website.org&#10;John Doe - john.doe@gmail.com&#10;info@business.net, contact@firm.co.in"></textarea>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="extract">Extract Emails</button>
      <button class="action-button success" data-action="copy">Copy All Emails</button>
      <button class="action-button" data-action="copy-unique">Copy Unique Emails</button>
      <button class="action-button warning" data-action="download">Download as TXT</button>
      <button class="action-button secondary" data-action="clear">Clear Text</button>
      <button class="action-button" data-action="clear-results">Clear Results</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="results-section">
      <div class="results-header">
        <h3>Extracted Email Addresses</h3>
        <span style="color: #666; font-size: 0.9rem;" id="resultStats">No emails extracted yet</span>
      </div>
      <div id="resultsGrid" class="results-grid">
        <div style="text-align: center; color: #999; padding: 40px;">
          <i class="fas fa-envelope" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
          Paste text and click "Extract Emails" to see results
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Sample Text for Testing</h2>

      <h3>Click to test with sample text:</h3>
      <button class="action-button secondary" id="loadSample" style="margin-bottom: 15px;">Load Sample Text</button>

      <h3>Sample Email Formats:</h3>
      <div class="example-text">
        • user@example.com<br>
        • firstname.lastname@gmail.com<br>
        • name+tag@company.co.in<br>
        • contact@website.org<br>
        • admin@domain.net<br>
        • support@business.com
      </div>

      <h3>Example Input:</h3>
      <div class="example-text">
        "For inquiries, please email us at support@techcorp.com or sales@techcorp.com.
        Our team members: john.doe@company.com, jane_smith@company.com,
        contact@business.org. For support: helpdesk@service.net"
      </div>

      <h3>Extracted Output:</h3>
      <div class="example-text">
        support@techcorp.com<br>
        sales@techcorp.com<br>
        john.doe@company.com<br>
        jane_smith@company.com<br>
        contact@business.org<br>
        helpdesk@service.net
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Email Extractor Tool</h2>

    <p>Need to extract email addresses from text, documents, or web content? Our <strong>Email Extractor Tool</strong> is the perfect solution for quickly finding and extracting email addresses from any text. Using advanced regex pattern matching, the tool detects standard email formats including usernames with dots, plus signs, and various domain extensions. No download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Email Extractor (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Your Text:</strong> Copy any text containing email addresses and paste it into the text area above.</li>
      <li><strong>Extract Emails:</strong> Click the "Extract Emails" button to start the regex-based email detection.</li>
      <li><strong>View Results:</strong> All extracted email addresses will appear in the results section with unique email count.</li>
      <li><strong>Copy or Download:</strong> Use "Copy All Emails" to copy to clipboard or "Download as TXT" to save as a file.</li>
    </ul>

    <h3>Email Detection Pattern (Regex):</h3>
    <div class="example-text" style="background: #f0f0f0;">
      Pattern: /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/g
    </div>
    <p>This pattern matches standard email formats including:</p>
    <ul>
      <li>Letters (a-z, A-Z)</li>
      <li>Numbers (0-9)</li>
      <li>Special characters: dot (.), underscore (_), percent (%), plus (+), hyphen (-)</li>
      <li>Domain names with dots (e.g., gmail.com, company.co.in)</li>
      <li>Top-level domains with 2+ characters (.com, .org, .net, .in, etc.)</li>
    </ul>

    <h3>What Email Formats Does This Tool Support?</h3>
    <ul>
      <li><strong>Standard Format:</strong> username@domain.com</li>
      <li><strong>With Dots:</strong> firstname.lastname@gmail.com</li>
      <li><strong>With Underscores:</strong> john_doe@company.org</li>
      <li><strong>With Plus Tags:</strong> name+tag@domain.net</li>
      <li><strong>Subdomains:</strong> contact@mail.company.co.in</li>
      <li><strong>Country Domains:</strong> support@website.co.uk, info@business.in</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you have a long document or email thread containing multiple email addresses scattered throughout. Instead of manually searching and copying each email address (which is time-consuming and error-prone), you can simply paste the entire text into this tool. Click "Extract Emails" and instantly get a clean list of all email addresses, with duplicates removed. This is perfect for building contact lists, cleaning up data, or analyzing email patterns in large text files.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Marketers:</strong> Extract email addresses from customer feedback, surveys, and contact forms.</li>
      <li><strong>Data Analysts:</strong> Clean and extract email data from large text datasets.</li>
      <li><strong>Developers:</strong> Test regex patterns and validate email extraction logic.</li>
      <li><strong>Recruiters:</strong> Extract email addresses from resumes and job applications.</li>
      <li><strong>Researchers:</strong> Collect email contacts from research papers and documents.</li>
      <li><strong>Business Owners:</strong> Extract customer emails from support tickets and communications.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Does this tool extract all email addresses correctly?</strong><br>
      Yes, our regex pattern matches standard email formats including common variations. It detects emails with dots, underscores, plus signs, and various domain extensions (.com, .org, .net, .in, .co.uk, etc.).</p>

    <p><strong>Does the tool remove duplicate email addresses?</strong><br>
      Yes! The tool automatically identifies and removes duplicate email addresses, showing you only unique emails in the results.</p>

    <p><strong>Is my data safe and private?</strong><br>
      Absolutely. All email extraction happens locally in your browser. Your text is never sent to any server, ensuring complete privacy and security of your data.</p>

    <p><strong>Can I extract emails from large text files?</strong><br>
      Yes, the tool can handle large amounts of text. You can paste thousands of lines, and it will efficiently extract all email addresses.</p>

    <p><strong>Can I download the extracted emails?</strong><br>
      Yes, use the "Download as TXT" button to save all extracted emails as a text file, with one email per line.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our email extractor is fully responsive and optimized for smartphones, tablets, and desktop computers.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool with no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Email Extractor Tool?</h3>
    <p>Our <strong>email extractor tool</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online extractors, we don't store your data on servers - all processing happens locally in your browser. This means your email lists and sensitive data remain completely private. The tool uses optimized regex pattern matching for fast email detection and provides both copy and download options for your convenience.</p>

    <h3>Common Applications of Email Extraction</h3>
    <p>Email extraction has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Contact List Building:</strong> Extract email addresses from business communications and documents</li>
      <li><strong>Data Cleaning:</strong> Remove duplicates and extract valid email formats from messy data</li>
      <li><strong>Customer Support:</strong> Extract customer emails from support tickets and chat logs</li>
      <li><strong>Content Analysis:</strong> Analyze email patterns and domains in large text corpora</li>
      <li><strong>Lead Generation:</strong> Collect potential customer emails from various text sources</li>
      <li><strong>Research Projects:</strong> Extract email contacts from academic papers and publications</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const resultsGrid = document.getElementById('resultsGrid');
    const alertContainer = document.getElementById('alertContainer');
    
    // Action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    const loadSampleBtn = document.getElementById('loadSample');
    
    // Statistics elements
    const charCountSpan = document.getElementById('charCount');
    const lineCountSpan = document.getElementById('lineCount');
    const emailCountSpan = document.getElementById('emailCount');
    const uniqueCountSpan = document.getElementById('uniqueCount');
    const resultStatsSpan = document.getElementById('resultStats');
    
    let currentEmails = [];
    let currentUniqueEmails = [];
    
    // Email regex pattern
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/g;
    
    // Update text statistics
    function updateTextStats() {
      const text = inputText.value;
      charCountSpan.textContent = text.length;
      
      const lines = text ? text.split(/\n/).length : 0;
      lineCountSpan.textContent = lines;
    }
    
    // Extract emails from text
    function extractEmails() {
      const text = inputText.value;
      
      if (!text.trim()) {
        showAlert('Please paste some text first.', 'error');
        return;
      }
      
      // Find all email matches
      const matches = text.match(emailRegex);
      
      if (!matches || matches.length === 0) {
        currentEmails = [];
        currentUniqueEmails = [];
        displayResults();
        showAlert('No email addresses found in the text.', 'error');
        emailCountSpan.textContent = '0';
        uniqueCountSpan.textContent = '0';
        resultStatsSpan.textContent = 'No emails found';
        return;
      }
      
      // Get all emails
      currentEmails = matches;
      
      // Get unique emails (case-insensitive, but preserve original case)
      const uniqueMap = new Map();
      currentEmails.forEach(email => {
        const lowerEmail = email.toLowerCase();
        if (!uniqueMap.has(lowerEmail)) {
          uniqueMap.set(lowerEmail, email);
        }
      });
      currentUniqueEmails = Array.from(uniqueMap.values());
      
      // Update counters
      emailCountSpan.textContent = currentEmails.length;
      uniqueCountSpan.textContent = currentUniqueEmails.length;
      resultStatsSpan.textContent = `Found ${currentUniqueEmails.length} unique email${currentUniqueEmails.length !== 1 ? 's' : ''} (${currentEmails.length} total)`;
      
      // Display results
      displayResults();
      showAlert(`Successfully extracted ${currentUniqueEmails.length} unique email addresses!`, 'success');
    }
    
    // Display results in grid
    function displayResults() {
      if (currentUniqueEmails.length === 0) {
        resultsGrid.innerHTML = `
          <div style="text-align: center; color: #999; padding: 40px;">
            <i class="fas fa-envelope" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
            No email addresses found. Paste text and click "Extract Emails".
          </div>
        `;
        return;
      }
      
      let html = '';
      currentUniqueEmails.forEach((email, index) => {
        html += `
          <div class="email-card">
            <div class="email-address">
              <i class="fas fa-envelope" style="color: var(--primary); margin-right: 10px;"></i>
              ${email}
            </div>
            <div class="email-index">#${index + 1}</div>
          </div>
        `;
      });
      
      resultsGrid.innerHTML = html;
    }
    
    // Copy all emails (including duplicates)
    function copyAllEmails() {
      if (currentEmails.length === 0) {
        showAlert('No emails to copy. Extract emails first.', 'error');
        return;
      }
      
      const emailList = currentEmails.join('\n');
      navigator.clipboard.writeText(emailList).then(() => {
        showAlert(`${currentEmails.length} email${currentEmails.length !== 1 ? 's' : ''} copied to clipboard!`, 'success');
      }).catch(err => {
        showAlert('Failed to copy emails: ' + err, 'error');
      });
    }
    
    // Copy unique emails only
    function copyUniqueEmails() {
      if (currentUniqueEmails.length === 0) {
        showAlert('No emails to copy. Extract emails first.', 'error');
        return;
      }
      
      const emailList = currentUniqueEmails.join('\n');
      navigator.clipboard.writeText(emailList).then(() => {
        showAlert(`${currentUniqueEmails.length} unique email${currentUniqueEmails.length !== 1 ? 's' : ''} copied to clipboard!`, 'success');
      }).catch(err => {
        showAlert('Failed to copy emails: ' + err, 'error');
      });
    }
    
    // Download emails as TXT file
    function downloadEmails() {
      if (currentUniqueEmails.length === 0) {
        showAlert('No emails to download. Extract emails first.', 'error');
        return;
      }
      
      const content = currentUniqueEmails.join('\n');
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `extracted_emails_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showAlert(`Downloaded ${currentUniqueEmails.length} email${currentUniqueEmails.length !== 1 ? 's' : ''} as TXT file!`, 'success');
    }
    
    // Clear input text
    function clearText() {
      inputText.value = '';
      updateTextStats();
      showAlert('Text cleared. You can paste new content.', 'success');
    }
    
    // Clear results only (keep text)
    function clearResults() {
      currentEmails = [];
      currentUniqueEmails = [];
      emailCountSpan.textContent = '0';
      uniqueCountSpan.textContent = '0';
      resultStatsSpan.textContent = 'No emails extracted yet';
      displayResults();
      showAlert('Results cleared.', 'success');
    }
    
    // Load sample text
    function loadSampleText() {
      inputText.value = `For customer support, please contact:
- support@techcorp.com
- helpdesk@techcorp.com

Sales inquiries:
sales@techcorp.com
business@techcorp.co.in

Individual contacts:
john.doe@gmail.com
jane_smith@yahoo.com
robert.johnson@outlook.com

International offices:
contact@techcorp.uk
info@techcorp.de
support@techcorp.fr

For urgent matters:
emergency@techcorp.com
+ admin@techcorp.com

Additional contacts:
marketing@company.org
hr@business.net
ceo@startup.co
founder@venture.in

Use the email extractor to find all email addresses in this text!
Pro tip: Duplicate emails like support@techcorp.com will be shown only once in unique results.`;
      
      updateTextStats();
      extractEmails();
      showAlert('Sample text loaded! Click "Extract Emails" to see it in action!', 'success');
    }
    
    // Handle action buttons
    function handleAction(action) {
      switch (action) {
        case 'extract':
          extractEmails();
          break;
        case 'copy':
          copyAllEmails();
          break;
        case 'copy-unique':
          copyUniqueEmails();
          break;
        case 'download':
          downloadEmails();
          break;
        case 'clear':
          clearText();
          break;
        case 'clear-results':
          clearResults();
          break;
      }
    }
    
    // Show alert message
    function showAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;
      
      alertContainer.innerHTML = '';
      alertContainer.appendChild(alertDiv);
      
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });
      
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
    
    // Event listeners
    inputText.addEventListener('input', updateTextStats);
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    if (loadSampleBtn) {
      loadSampleBtn.addEventListener('click', loadSampleText);
    }
    
    // Initialize
    updateTextStats();
  });
</script>