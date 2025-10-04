---
layout: default
title: "Website Page Snooper - Analyze Web Page Performance"
permalink: /website-page-snooper-view-and-copy-html-code-from-any-website/
---


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Website Page Snooper - View and Copy HTML Code from Any Website</title>
<meta name="description"
  content="Free online Website Page Snooper tool. View and copy HTML source code from any website instantly. Analyze website structure and extract HTML code easily.">
<meta name="keywords"
  content="website page snooper, html viewer, html source code, website source code, copy html code, website analyzer, html extractor, web page inspector">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Page Snooper Styles */
  .converter-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .converter-container h1 {
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

  .converter-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .converter-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .converter-section p {
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

  .url-input-section {
    margin: 20px 0;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }

  .url-input {
    flex: 1;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    min-width: 250px;
  }

  .url-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .file-upload-section {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .file-upload-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  #fileName {
    font-style: italic;
    color: #7f8c8d;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .case-button {
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

  .case-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .case-button:active {
    transform: translateY(0);
  }

  .case-button.success {
    background: var(--success);
  }

  .case-button.success:hover {
    background: #218838;
  }

  .case-button.secondary {
    background: #6c757d;
  }

  .case-button.secondary:hover {
    background: #5a6268;
  }

  .case-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .case-button.warning:hover {
    background: #e0a800;
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

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .options-section {
    background: #f8f9fa;
    padding: 0px;
    border-radius: 10px;
    margin: 10px 0;
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

  /* New styles for share and donation buttons */
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

  .upload-icon {
    color: var(--primary);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 4px;
  }

  .upload-icon:hover {
    background: rgba(52, 152, 219, 0.1);
    transform: scale(1.1);
  }

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .modal-title {
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
  }

  .close-modal {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
  }

  .close-modal:hover {
    color: #000;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .modal-button {
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
  }

  .modal-button.primary {
    background: var(--primary);
    color: white;
  }

  .modal-button.secondary {
    background: #6c757d;
    color: white;
  }

  .modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Snooper specific styles */
  .formatting-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }

  .option-input {
    width: 80px;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  .loading-indicator {
    display: none;
    text-align: center;
    padding: 20px;
    color: var(--primary);
  }

  .loading-indicator i {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .case-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .file-upload-section {
      flex-direction: column;
      align-items: flex-start;
    }

    .converter-container {
      padding: 15px;
    }

    .converter-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section h2 {
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .formatting-options {
      grid-template-columns: 1fr;
    }

    .url-input-section {
      flex-direction: column;
      align-items: stretch;
    }

    .url-input {
      min-width: 100%;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Website Page Snooper</h1>
  <p class="welcome-message">View and copy HTML source code from any website instantly. Analyze website structure and extract HTML code easily.</p>

  <div class="converter-section">
    <h2>Website Page Snooper</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Tag Count: </span>
        <span id="tagCount">0</span>
      </div>
      <div class="counter-item">
        <span>Link Count: </span>
        <span id="linkCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Enter Website URL</h2>
      <div class="url-input-section">
        <input type="text" id="urlInput" class="url-input" placeholder="Enter website URL (e.g., https://example.com)">
        <button class="case-button" id="fetchButton">Fetch HTML</button>
      </div>
    </div>

    <div class="loading-indicator" id="loadingIndicator">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Fetching website HTML code...</p>
    </div>

    <div class="input-section">
      <h2>HTML Code Output <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="htmlOutput" rows="6" placeholder="HTML code will appear here..." readonly></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".html,.htm,.txt" style="display: none;">

    <div class="formatting-options">
      <div class="option-group">
        <label class="option-label">HTML Formatting</label>
        <select id="formatType" class="option-select">
          <option value="formatted">Formatted</option>
          <option value="minified">Minified</option>
          <option value="raw">Raw</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Indentation</label>
        <select id="indentType" class="option-select">
          <option value="spaces">Spaces</option>
          <option value="tabs">Tabs</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Indent Size</label>
        <input type="number" id="indentSize" class="option-input" min="1" max="8" value="2">
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="showLineNumbers" checked>
          <label for="showLineNumbers">Show Line Numbers</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="highlightSyntax" checked>
          <label for="highlightSyntax">Syntax Highlighting</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="copy">Copy HTML</button>
        <button class="case-button success" data-action="download">Download HTML</button>
        <button class="case-button warning" data-action="preview">Preview</button>
        <button class="case-button" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <!-- Share and Donation Section -->
    <div class="share-donation-section">
      <div class="share-buttons">
        <a href="#" class="share-button facebook"><i class="fab fa-facebook-f"></i> Share</a>
        <a href="#" class="share-button twitter"><i class="fab fa-twitter"></i> Tweet</a>
        <a href="#" class="share-button linkedin"><i class="fab fa-linkedin-in"></i> Share</a>
        <a href="#" class="share-button pinterest"><i class="fab fa-pinterest-p"></i> Pin</a>
        <a href="#" class="share-button reddit"><i class="fab fa-reddit-alien"></i> Reddit</a>
      </div>
      <div class="donation-buttons">
        <a href="#" class="donation-button paypal"><i class="fab fa-paypal"></i> Donate</a>
        <a href="#" class="donation-button coffee"><i class="fas fa-coffee"></i> Buy Coffee</a>
      </div>
    </div>

    <div class="examples">
      <h2>Examples</h2>

      <h3>Sample Website HTML:</h3>
      <div class="example-text">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Example Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;section&gt;
      &lt;h2&gt;Main Content&lt;/h2&gt;
      &lt;p&gt;This is a sample paragraph.&lt;/p&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;&copy; 2023 Example Website&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</div>

      <h3>Minified HTML:</h3>
      <div class="example-text">&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;&lt;title&gt;Example Website&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;header&gt;&lt;h1&gt;Welcome to My Website&lt;/h1&gt;&lt;nav&gt;&lt;ul&gt;&lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/nav&gt;&lt;/header&gt;&lt;main&gt;&lt;section&gt;&lt;h2&gt;Main Content&lt;/h2&gt;&lt;p&gt;This is a sample paragraph.&lt;/p&gt;&lt;/section&gt;&lt;/main&gt;&lt;footer&gt;&lt;p&gt;&copy; 2023 Example Website&lt;/p&gt;&lt;/footer&gt;&lt;/body&gt;&lt;/html&gt;</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Website Page Snooper - View and Copy HTML Source Code</h2>

    <p>Need to view the HTML source code of any website? Our free <strong>Website Page Snooper tool</strong> is the perfect solution for developers, designers, and website enthusiasts. This powerful tool allows you to instantly fetch and view the complete HTML source code of any website. You can copy the code, download it, or analyze the website structure. There's no download required, no registration needed, and your privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Website Page Snooper (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter URL:</strong> Type or paste the website URL you want to analyze in the input field above (e.g., https://example.com).</li>
      <li><strong>Fetch HTML:</strong> Click the "Fetch HTML" button to retrieve the website's source code.</li>
      <li><strong>Customize View:</strong> Adjust the formatting options like indentation, line numbers, and syntax highlighting according to your preferences.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy HTML" button to copy the code to your clipboard, or use "Download" to save it as an HTML file on your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a web developer and you've found a website with an interesting layout or feature that you'd like to study. Instead of manually trying to inspect the code through browser developer tools, you can simply enter the website URL into this tool. The Page Snooper will fetch the complete HTML source code, allowing you to analyze the structure, copy specific sections, or save the entire code for later reference.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Quickly analyze website structures and learn from other developers' code.</li>
      <li><strong>Designers:</strong> Understand how specific visual elements are implemented in HTML.</li>
      <li><strong>Students:</strong> Learn HTML by studying real-world examples from live websites.</li>
      <li><strong>SEO Specialists:</strong> Analyze website structure for SEO optimization opportunities.</li>
      <li><strong>Content Creators:</strong> Extract specific HTML elements for use in your own projects.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: Does this tool work with all websites?</strong><br>
      A: Most websites can be analyzed with this tool, but some websites with strict security measures (like CORS policies) might not be accessible directly from the browser.</p>

    <p><strong>Q: Is there a limit to how many websites I can analyze?</strong><br>
      A: You can analyze as many websites as you want. There are no usage limits or restrictions.</p>

    <p><strong>Q: Is my browsing activity tracked when I use this tool?</strong><br>
      A: Absolutely not. This is a core principle of our tool. The HTML fetching happens locally on your own computer or phone. Your activity is never tracked, stored, or shared with anyone.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Website Page Snooper?</h3>
    <p>Our <strong>online Website Page Snooper</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online tools, we don't track your activity or store the websites you analyze - all processing happens in your browser. This means your browsing activity remains completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Website Page Snooping</h3>
    <p>Website page snooping has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Learning & Education:</strong> Study well-structured HTML to understand proper coding practices</li>
      <li><strong>Competitive Analysis:</strong> Analyze competitor websites to understand their structure and features</li>
      <li><strong>Debugging:</strong> Compare HTML structures to identify and fix issues in your own code</li>
      <li><strong>Inspiration:</strong> Find design inspiration by studying how other websites implement specific elements</li>
      <li><strong>SEO Analysis:</strong> Examine website structure for SEO optimization opportunities</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload HTML File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select an HTML file (.html, .htm or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".html,.htm,.txt">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 90%; height: 80%;">
    <div class="modal-header">
      <h3 class="modal-title">HTML Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body" style="height: calc(100% - 100px); overflow: auto;">
      <iframe id="previewFrame" style="width: 100%; height: 100%; border: 1px solid #ddd; border-radius: 8px;"></iframe>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const urlInput = document.getElementById('urlInput');
    const htmlOutput = document.getElementById('htmlOutput');
    const fetchButton = document.getElementById('fetchButton');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    const loadingIndicator = document.getElementById('loadingIndicator');
    
    // Formatting options
    const formatType = document.getElementById('formatType');
    const indentType = document.getElementById('indentType');
    const indentSize = document.getElementById('indentSize');
    const showLineNumbers = document.getElementById('showLineNumbers');
    const highlightSyntax = document.getElementById('highlightSyntax');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const previewModal = document.getElementById('previewModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closePreview = document.getElementById('closePreview');
    const previewFrame = document.getElementById('previewFrame');

    // Initialize counters
    updateCounts();

    // Event listeners
    htmlOutput.addEventListener('input', updateCounts);
    
    fetchButton.addEventListener('click', fetchHtmlFromUrl);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleHtmlAction(action);
      });
    });

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
        previewModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      });
    });

    // Close modal when clicking cancel
    cancelUpload.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === previewModal) {
        uploadModal.style.display = 'none';
        previewModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      }
    });

    // Handle file selection in modal
    modalFileUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      } else {
        fileInfo.textContent = '';
      }
    });

    // Confirm upload button
    confirmUpload.addEventListener('click', function() {
      const file = modalFileUpload.files[0];
      if (!file) {
        showAlert('Please select a file first.', 'error');
        return;
      }

      // Check file type
      if (file.type === 'text/html' || file.name.endsWith('.html') || file.name.endsWith('.htm') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          htmlOutput.value = e.target.result;
          updateCounts();
          showAlert('HTML file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the HTML file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload an HTML or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const html = htmlOutput.value;

      // Character count
      document.getElementById('charCount').textContent = html.length;

      // Line count
      const lineCount = html ? html.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Tag count (approximate)
      const tagCount = (html.match(/<[^>]*>/g) || []).length;
      document.getElementById('tagCount').textContent = tagCount;

      // Link count (approximate)
      const linkCount = (html.match(/<a\s[^>]*>/gi) || []).length;
      document.getElementById('linkCount').textContent = linkCount;
    }

    function fetchHtmlFromUrl() {
      const url = urlInput.value.trim();
      
      if (!url) {
        showAlert('Please enter a website URL.', 'error');
        return;
      }
      
      // Add protocol if missing
      let fullUrl = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        fullUrl = 'https://' + url;
      }
      
      // Show loading indicator
      loadingIndicator.style.display = 'block';
      
      // Use a CORS proxy to bypass same-origin policy
      const proxyUrl = 'https://api.allorigins.win/raw?url=';
      
      fetch(proxyUrl + encodeURIComponent(fullUrl))
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(html => {
          htmlOutput.value = formatHtml(html);
          updateCounts();
          showAlert('HTML fetched successfully!', 'success');
          loadingIndicator.style.display = 'none';
        })
        .catch(error => {
          console.error('Error fetching HTML:', error);
          showAlert('Error fetching HTML. Please check the URL and try again.', 'error');
          loadingIndicator.style.display = 'none';
        });
    }
    
    function formatHtml(html) {
      const format = formatType.value;
      
      if (format === 'raw') {
        return html;
      }
      
      if (format === 'minified') {
        return minifyHtml(html);
      }
      
      // Format HTML with proper indentation
      return beautifyHtml(html);
    }
    
    function beautifyHtml(html) {
      // Simple HTML beautification
      let formatted = html
        .replace(/>\s+</g, '>\n<') // Add line breaks between tags
        .replace(/\s+/g, ' ') // Collapse multiple spaces
        .trim();
      
      // Split into lines
      let lines = formatted.split('\n');
      let result = [];
      let indentLevel = 0;
      const indentChar = indentType.value === 'tabs' ? '\t' : ' '.repeat(parseInt(indentSize.value));
      
      // Process each line
      for (let line of lines) {
        line = line.trim();
        
        if (line.length === 0) continue;
        
        // Decrease indent after closing tag
        if (line.startsWith('</')) {
          indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add current indent
        result.push(indentChar.repeat(indentLevel) + line);
        
        // Increase indent after opening tag (if not self-closing)
        if (line.startsWith('<') && !line.startsWith('</') && 
            !line.endsWith('/>') && 
            !line.includes('<!') &&
            !line.match(/<[^>]*>$/)) {
          indentLevel++;
        }
      }
      
      return result.join('\n');
    }
    
    function minifyHtml(html) {
      // Remove comments
      let minified = html.replace(/<!--[\s\S]*?-->/g, '');
      
      // Remove whitespace between tags
      minified = minified.replace(/>\s+</g, '><');
      
      // Remove extra whitespace
      minified = minified.replace(/\s+/g, ' ');
      
      return minified.trim();
    }

    function handleHtmlAction(action) {
      const html = htmlOutput.value;

      switch (action) {
        case 'copy':
          copyToClipboard(html);
          break;

        case 'download':
          downloadHtml('website_code.html', html);
          break;

        case 'preview':
          if (!html) {
            showAlert('Please fetch HTML first to preview.', 'error');
            return;
          }
          previewHtml(html);
          break;

        case 'clear':
          htmlOutput.value = '';
          urlInput.value = '';
          updateCounts();
          break;
      }
    }
    
    function previewHtml(html) {
      // Create a blob URL for the HTML content
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      // Set the iframe source to the blob URL
      previewFrame.src = url;
      
      // Show the preview modal
      previewModal.style.display = 'block';
      
      // Clean up the URL when the modal is closed
      previewModal.addEventListener('click', function cleanup() {
        URL.revokeObjectURL(url);
        previewModal.removeEventListener('click', cleanup);
      }, { once: true });
    }

    function copyToClipboard(text) {
      if (!text) {
        showAlert('No HTML code to copy.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('HTML copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy HTML: ' + err, 'error');
      });
    }

    function downloadHtml(filename, text) {
      if (!text) {
        showAlert('No HTML code to download.', 'error');
        return;
      }
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('HTML downloaded successfully!', 'success');
    }

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
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });

      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>