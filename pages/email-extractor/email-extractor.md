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
  <h2>Free Online Email Extractor Tool – Quickly Find Email Addresses from Any Text</h2>

  <p>Finding email addresses inside large amounts of text can be a frustrating and time-consuming task. Whether you're working with customer inquiries, business documents, contact databases, research papers, website content, or support conversations, manually searching for every email address is inefficient and often leads to mistakes. Our free <strong>Online Email Extractor Tool</strong> makes the process simple by automatically scanning your text and identifying all valid email addresses within seconds.</p>

  <p>The tool is designed for speed, accuracy, and privacy. Simply paste your content into the text box, click the extraction button, and instantly receive a clean list of detected email addresses. Since all processing takes place directly inside your browser, your data remains private and secure. Nothing is uploaded, stored, or shared with external servers.</p>

  <p>Whether you are a marketer organizing contacts, a recruiter reviewing applications, a researcher collecting communication data, or a business owner managing customer information, this tool can save valuable time while reducing human error.</p>

  <h3>How to Use This Email Extractor (Step-by-Step)</h3>

  <ul>
    <li><strong>Paste Your Content:</strong> Copy any text containing email addresses and paste it into the input field.</li>
    <li><strong>Start Extraction:</strong> Click the "Extract Emails" button to begin scanning the text.</li>
    <li><strong>Review Results:</strong> The tool automatically identifies valid email addresses and displays them in an organized list.</li>
    <li><strong>Remove Duplicates:</strong> Duplicate email addresses are automatically filtered out.</li>
    <li><strong>Copy or Download:</strong> Copy the extracted list to your clipboard or download it as a text file for later use.</li>
  </ul>

  <h3>Why Email Extraction Matters</h3>

  <p>Email remains one of the most important communication channels in business, education, marketing, and customer support. Organizations often work with large volumes of text containing contact information. Extracting email addresses manually from these sources can take hours, especially when dealing with thousands of lines of content.</p>

  <p>An automated email extraction tool simplifies this process by locating every valid email address instantly. This improves productivity, reduces errors, and ensures no valuable contact information is overlooked.</p>

  <p>For example, imagine receiving hundreds of customer support messages exported into a single document. Instead of manually scanning each message for contact information, you can paste the entire document into the extractor and generate a complete email list within seconds.</p>

  <h3>Understanding Email Address Structure</h3>

  <p>To understand how email extraction works, it helps to know the basic structure of an email address. Most email addresses contain two primary components separated by the "@" symbol.</p>

  <ul>
    <li><strong>Local Part:</strong> The username before the @ symbol.</li>
    <li><strong>Domain Name:</strong> The website or mail server after the @ symbol.</li>
  </ul>

  <p>For example, in the email address <strong>john.smith@example.com</strong>:</p>

  <ul>
    <li><strong>john.smith</strong> is the local part.</li>
    <li><strong>example.com</strong> is the domain name.</li>
  </ul>

  <p>Modern email systems allow a wide variety of characters within email addresses, including letters, numbers, dots, hyphens, underscores, and plus signs. Our extractor is designed to recognize these common formats accurately.</p>

  <h3>Supported Email Formats</h3>

  <p>The extractor recognizes a wide range of valid email structures commonly used around the world.</p>

  <ul>
    <li><strong>Standard Email:</strong> user@example.com</li>
    <li><strong>Names with Dots:</strong> john.doe@example.com</li>
    <li><strong>Underscore Formats:</strong> jane_doe@example.org</li>
    <li><strong>Plus Addressing:</strong> user+newsletter@gmail.com</li>
    <li><strong>Business Emails:</strong> support@company.com</li>
    <li><strong>Subdomain Emails:</strong> contact@mail.company.co.uk</li>
    <li><strong>Country-Specific Domains:</strong> info@business.in, help@service.co.uk</li>
  </ul>

  <h3>Real-World Example</h3>

  <p>Suppose you receive a spreadsheet export containing customer conversations, support tickets, and inquiry forms. The file contains thousands of lines of text with email addresses scattered throughout various sections.</p>

  <p>Manually searching and copying every email address could take hours. Instead, simply copy the text, paste it into the extractor, and allow the tool to generate a clean list automatically. Duplicate addresses are removed, making it easier to organize contacts and import them into CRM systems, spreadsheets, or email platforms.</p>

  <h3>Who Can Benefit from an Email Extractor?</h3>

  <p>This tool serves a wide range of users across different industries and professions.</p>

  <ul>
    <li><strong>Marketing Professionals:</strong> Organize contact information collected from surveys, forms, and customer communications.</li>
    <li><strong>Sales Teams:</strong> Build prospect databases from legitimate business documents and customer inquiries.</li>
    <li><strong>Recruiters:</strong> Extract applicant email addresses from resumes and recruitment records.</li>
    <li><strong>Researchers:</strong> Collect contact information from publications and research materials.</li>
    <li><strong>Business Owners:</strong> Manage customer communications more efficiently.</li>
    <li><strong>Developers:</strong> Test email validation systems and regex implementations.</li>
    <li><strong>Data Analysts:</strong> Clean datasets containing embedded contact information.</li>
  </ul>

  <h3>Key Advantages of Using an Automated Email Extractor</h3>

  <p>Using an automated extraction tool provides several important benefits compared to manual methods.</p>

  <ul>
    <li><strong>Speed:</strong> Extract hundreds or thousands of emails within seconds.</li>
    <li><strong>Accuracy:</strong> Reduce mistakes that often occur during manual copying.</li>
    <li><strong>Duplicate Removal:</strong> Automatically eliminate repeated email addresses.</li>
    <li><strong>Convenience:</strong> Export results instantly for use in spreadsheets or databases.</li>
    <li><strong>Accessibility:</strong> Works directly in any modern web browser.</li>
    <li><strong>Privacy:</strong> Data never leaves your device.</li>
  </ul>

  <h3>Privacy and Security First</h3>

  <p>Many online tools require users to upload documents to remote servers for processing. While convenient, this can create privacy concerns, especially when handling sensitive customer information, business records, or personal communications.</p>

  <p>Our Email Extractor takes a different approach. All processing happens locally inside your browser. Your text never leaves your computer, ensuring complete confidentiality and peace of mind. Whether you're working with business documents, internal communications, or customer data, you remain in full control of your information.</p>

  <p>This browser-based processing model also improves speed because there is no waiting for files to upload or download. The extraction happens instantly using your device's processing power.</p>
</div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h3>How Email Extraction Technology Works</h3>

  <p>Behind every email extractor is a pattern-matching system that scans text and identifies strings that resemble valid email addresses. Instead of reading content like a human, the software analyzes every character and checks whether it follows recognized email formatting rules.</p>

  <p>Most extraction tools rely on regular expressions (commonly known as regex). A regular expression is a search pattern that allows software to locate specific text structures. In the case of email extraction, regex patterns are designed to recognize combinations of usernames, domain names, and top-level domains.</p>

  <p>When you paste content into the tool, the extractor scans the entire text from beginning to end. Every sequence matching the email pattern is collected and displayed in the results section. This process takes only a fraction of a second, even for large documents containing thousands of words.</p>

  <p>The advantage of automated pattern matching is consistency. Unlike manual extraction, which can miss addresses hidden within long paragraphs, automated systems scan every line equally and ensure greater accuracy.</p>

  <h3>Email Validation vs Email Extraction</h3>

  <p>Many people confuse email extraction with email validation, but they serve different purposes.</p>

  <p>Email extraction focuses on finding email addresses within text. Validation, on the other hand, attempts to determine whether an extracted email address follows acceptable formatting standards.</p>

  <p>For example, the address <strong>john@example.com</strong> is correctly formatted and would be extracted successfully. An invalid address such as <strong>john@@example..com</strong> would typically be ignored because it does not match accepted email syntax.</p>

  <p>While extraction identifies possible email addresses, it does not necessarily confirm whether the mailbox exists or is currently active. For that level of verification, specialized email validation services are typically required.</p>

  <h3>Automatic Duplicate Removal</h3>

  <p>One of the most useful features of modern email extractors is automatic duplicate detection. Large documents often contain the same email address multiple times. Without duplicate removal, the resulting list can become cluttered and difficult to manage.</p>

  <p>Imagine analyzing customer support logs where a customer sends multiple messages using the same email address. If the address appears twenty times in the conversation history, manually removing duplicates would take unnecessary effort.</p>

  <p>The extractor automatically identifies repeated addresses and keeps only one unique copy. This creates cleaner contact lists and improves data quality when exporting information into spreadsheets, CRM systems, or marketing platforms.</p>

  <h3>Working with Large Documents</h3>

  <p>Email extraction becomes especially valuable when working with large volumes of text. Business reports, exported chat logs, customer databases, website content archives, and research materials can contain hundreds or even thousands of email addresses.</p>

  <p>Searching manually through such content is not practical. Automated extraction significantly reduces the time required to locate and organize contact information.</p>

  <p>For example, a researcher analyzing thousands of pages of public documents may need to collect author contact details. Rather than searching every page individually, they can process the content through an extractor and generate a comprehensive list within minutes.</p>

  <p>The same principle applies to businesses handling large customer communication archives or organizations managing extensive databases.</p>

  <h3>Business Applications of Email Extraction</h3>

  <p>Email extraction tools are widely used across industries because email remains one of the most effective methods of communication.</p>

  <p>Businesses often store customer information across multiple platforms, documents, and communication channels. An email extractor simplifies the process of organizing this information into a usable format.</p>

  <ul>
    <li><strong>Customer Support:</strong> Collect customer contact information from support conversations.</li>
    <li><strong>Sales Operations:</strong> Organize prospect details from inquiry forms and communications.</li>
    <li><strong>Administration:</strong> Compile contact databases from internal documents.</li>
    <li><strong>Event Management:</strong> Gather participant email addresses from registrations.</li>
    <li><strong>Membership Organizations:</strong> Maintain accurate communication records.</li>
  </ul>

  <p>By automating repetitive tasks, organizations can focus more on communication and relationship building rather than data collection.</p>

  <h3>Email Extraction for Marketing Teams</h3>

  <p>Marketing professionals frequently work with contact information collected from surveys, lead forms, customer feedback, webinars, events, and business communications.</p>

  <p>An email extractor helps consolidate this information into structured lists that can later be imported into email marketing platforms, CRM systems, or analytics tools.</p>

  <p>For example, after hosting a conference, organizers may have attendee information stored across registration forms, spreadsheets, and email conversations. Extracting all email addresses into a single organized list simplifies follow-up communication and event reporting.</p>

  <p>It is important to note that responsible email marketing should always comply with applicable privacy laws and regulations. Contact information should only be used when proper consent has been obtained.</p>

  <h3>CRM and Contact Management Workflows</h3>

  <p>Customer Relationship Management (CRM) systems rely heavily on accurate contact information. Poor-quality data can lead to duplicate records, communication errors, and lost opportunities.</p>

  <p>Email extractors assist in data preparation by collecting and organizing email addresses before importing them into CRM platforms.</p>

  <p>A common workflow may include:</p>

  <ul>
    <li>Gathering raw customer communications.</li>
    <li>Extracting all email addresses.</li>
    <li>Removing duplicates.</li>
    <li>Exporting results into CSV or TXT format.</li>
    <li>Importing the cleaned list into a CRM system.</li>
  </ul>

  <p>This process improves database quality and reduces manual entry errors.</p>

  <h3>Educational and Research Applications</h3>

  <p>Email extraction is not limited to business use. Educational institutions and researchers also benefit from automated contact collection.</p>

  <p>Academic researchers may analyze publications, conference proceedings, or collaborative documents containing author contact information. Universities may use extraction tools when organizing participant records for academic events or alumni databases.</p>

  <p>Students studying data processing, text analysis, or regular expressions can also use email extractors as practical examples of pattern recognition technology.</p>

  <h3>Data Organization Best Practices</h3>

  <p>Extracting email addresses is only the first step. Proper organization helps maximize the usefulness of collected information.</p>

  <ul>
    <li><strong>Remove Duplicates:</strong> Keep only unique addresses.</li>
    <li><strong>Verify Formatting:</strong> Check for incomplete or malformed entries.</li>
    <li><strong>Categorize Contacts:</strong> Separate customers, partners, suppliers, and prospects.</li>
    <li><strong>Maintain Permissions:</strong> Ensure compliance with privacy regulations.</li>
    <li><strong>Update Regularly:</strong> Remove outdated or inactive records.</li>
  </ul>

  <p>Following these practices improves communication efficiency and helps maintain high-quality contact databases.</p>

  <h3>Exporting and Sharing Results</h3>

  <p>Once extraction is complete, most users need a convenient way to use the collected data. Export functionality allows email lists to be saved and transferred into other tools.</p>

  <p>Common export formats include:</p>

  <ul>
    <li><strong>TXT:</strong> Simple text file with one email per line.</li>
    <li><strong>CSV:</strong> Spreadsheet-compatible format for Excel and Google Sheets.</li>
    <li><strong>Clipboard Copy:</strong> Instant copying for quick pasting into applications.</li>
  </ul>

  <p>These options make it easy to integrate extracted email data into existing workflows.</p>

  <h3>Accuracy and Performance Considerations</h3>

  <p>Modern email extraction tools are designed to handle large amounts of text quickly while maintaining high accuracy. Browser-based processing allows results to appear almost instantly, even when analyzing extensive documents.</p>

  <p>Performance depends on factors such as document size, browser capabilities, and device hardware. However, most users experience near-instant extraction results for typical workloads.</p>

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