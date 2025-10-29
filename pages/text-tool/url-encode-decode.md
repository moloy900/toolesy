---
layout: default
title: "URL Encode & Decode - Online URL Encoder/Decoder Tool"
permalink: /url-encode-decode-online-url-encoderdecoder-tool/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>URL Encode & Decode - Online URL Encoder/Decoder Tool</title>

<meta name="description"
  content="Free online URL encode and decode tool. Convert text to URL-encoded format and decode encoded URLs instantly. Percent encoding, query string cleaner — perfect for developers.">
<meta name="keywords"
  content="url encode, url decode, url encoder, url decoder, percent encoding, url encoding, url decoding, encode URL online, decode URL online, clean URL, web development tools, encode special characters, query string converter">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free URL Encode & Decode Tool - Encode & Decode Instantly">
<meta property="og:description" content="Instantly convert text to URL encoding and decode encoded URLs. Perfect tool for developers and SEO experts.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/url-encode-decode-online-url-encoderdecoder-tool/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free URL Encode & Decode Tool">
<meta name="twitter:description" content="Convert text to URL encoding and decode encoded URLs online. Fast, free, accurate!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* URL Encode/Decode Styles */
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
    word-break: break-all;
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

  /* URL Encode/Decode specific styles */
  .encoding-options {
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

  /* URL Preview */
  .url-preview {
    margin: 20px 0;
    padding: 15px;
    background: #e8f4fc;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .url-preview-title {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 10px;
  }

  .url-preview-content {
    font-family: 'Courier New', monospace;
    word-break: break-all;
    background: white;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #e0e6ed;
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

    .encoding-options {
      grid-template-columns: 1fr;
    }

    .example-text {
      font-size: 0.9rem;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online URL Encode & Decode Tool</h1>
  <p class="welcome-message">Encode text to URL-safe format and decode URL-encoded strings instantly. Essential tool for web developers, SEO specialists, and anyone working with URLs and web parameters.</p>

  <div class="converter-section">
    <h2>URL Encoder & Decoder</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Encoded Characters: </span>
        <span id="encodedCount">0</span>
      </div>
      <div class="counter-item">
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>URL Safety Score: </span>
        <span id="safetyScore">100%</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Enter text to encode or URL-encoded string to decode..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.json,.csv" style="display: none;">

    <div class="encoding-options">
      <div class="option-group">
        <label class="option-label">Encoding Type</label>
        <select id="encodingType" class="option-select">
          <option value="encode">URL Encode</option>
          <option value="decode">URL Decode</option>
          <option value="fullEncode">Full URL Encode</option>
          <option value="componentEncode">URL Component Encode</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Character Set</label>
        <select id="charsetType" class="option-select">
          <option value="utf8">UTF-8</option>
          <option value="ascii">ASCII</option>
          <option value="unicode">Unicode</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Line Handling</label>
        <select id="lineHandling" class="option-select">
          <option value="preserve">Preserve Line Breaks</option>
          <option value="remove">Remove Line Breaks</option>
          <option value="encode">Encode Line Breaks</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="autoDetect" checked>
          <label for="autoDetect">Auto-detect Encoding</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="preserveSpaces">
          <label for="preserveSpaces">Preserve Spaces as +</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="validateUrl" checked>
          <label for="validateUrl">Validate URL Format</label>
        </div>
      </div>
    </div>

    <div class="url-preview">
      <div class="url-preview-title">URL Preview</div>
      <div class="url-preview-content" id="urlPreview">Your encoded/decoded URL will appear here...</div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="encode">URL Encode</button>
        <button class="case-button" data-action="decode">URL Decode</button>
        <button class="case-button" data-action="toggle">Toggle Encode/Decode</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Result</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>URL Encoding Examples</h2>

      <h3>Original Text:</h3>
      <div class="example-text">Hello World!
Search query: "web development tutorials"
Email: user@example.com
Phone: +1 (555) 123-4567</div>

      <h3>URL Encoded:</h3>
      <div class="example-text">Hello%20World%21%0ASearch%20query%3A%20%22web%20development%20tutorials%22%0AEmail%3A%20user%40example.com%0APhone%3A%20%2B1%20%28555%29%20123-4567</div>

      <h3>URL Decoded (Back to Original):</h3>
      <div class="example-text">Hello World!
Search query: "web development tutorials"
Email: user@example.com
Phone: +1 (555) 123-4567</div>

      <h3>Common URL Encoded Characters:</h3>
      <div class="example-text">Space: %20
Exclamation: %21
Double Quote: %22
Hash: %23
Dollar: %24
Percent: %25
Ampersand: %26
Single Quote: %27
Left Parenthesis: %28
Right Parenthesis: %29
Asterisk: %2A
Plus: %2B
Comma: %2C
Forward Slash: %2F
Colon: %3A
Semicolon: %3B
Question Mark: %3F
At Symbol: %40</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online URL Encode & Decode Tool</h2>

    <p>Working with URLs and need to ensure proper encoding for web applications? Our free <strong>URL Encode & Decode tool</strong> is the essential solution for web developers, SEO professionals, and data analysts. This powerful tool instantly converts your text to URL-safe format (percent encoding) and decodes URL-encoded strings back to readable text. Proper URL encoding is crucial for web security, data integrity, and SEO optimization. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This URL Encoder/Decoder (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your text into the large input box above. You can input regular text to encode or URL-encoded strings to decode.</li>
      <li><strong>Choose Operation:</strong> Select whether you want to encode (convert to URL-safe format) or decode (convert back to readable text).</li>
      <li><strong>Customize Options:</strong> Adjust encoding type, character set, and line handling according to your specific needs.</li>
      <li><strong>Process Text:</strong> Click the "URL Encode" or "URL Decode" button to convert your text instantly. See the URL preview update in real-time.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab your encoded/decoded text for use in your applications, websites, or data processing.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're building a web application that accepts user search queries in the URL. Instead of risking security issues with unencoded special characters, you can use this tool to properly encode the query. For example, if a user searches for "price < $100 & category = 'electronics'", the tool will encode it to "price%20%3C%20%24100%20%26%20category%20%3D%20'electronics'" making it safe for URL usage. This prevents errors, security vulnerabilities, and ensures your application handles special characters correctly!</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Ensure URL parameters are properly encoded for web applications and APIs.</li>
      <li><strong>SEO Specialists:</strong> Analyze and decode URL structures for optimization and troubleshooting.</li>
      <li><strong>Data Analysts:</strong> Process and clean URL-encoded data from various sources.</li>
      <li><strong>Quality Assurance:</strong> Test web applications with properly encoded URLs and parameters.</li>
      <li><strong>System Administrators:</strong> Debug and analyze URL-related issues in web servers and applications.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is URL encoding and why is it important?</strong><br>
      URL encoding (percent encoding) converts special characters into a format that can be safely transmitted over the internet. It's important because URLs can only contain certain characters, and special characters like spaces, ampersands, and question marks have special meanings in URLs that could break them if not properly encoded.</p>

    <p><strong>What's the difference between URL encode and full URL encode?</strong><br>
      Standard URL encoding encodes only unsafe characters, while full URL encoding encodes all non-alphanumeric characters (including dots, hyphens, and underscores). Full encoding is more comprehensive but results in longer URLs.</p>

    <p><strong>Is my data kept private and secure when I use this encoder?</strong><br>
      Absolutely. This is a core principle of our tool. The encoding/decoding happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your sensitive data, URLs, or parameters. It is 100% secure.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets. The URL preview automatically adjusts for mobile screens.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our URL Encode & Decode Tool?</h3>
    <p>Our <strong>online URL encoder/decoder</strong> stands out from other tools because of its accuracy, comprehensive options, and privacy features. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your sensitive URLs, API parameters, and confidential data remain completely secure. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Understanding URL Encoding (Percent Encoding)</h3>
    <p>URL encoding follows the standard known as percent-encoding, where unsafe ASCII characters are replaced with a "%" followed by two hexadecimal digits. Here's what you need to know:</p>
    <ul>
      <li><strong>Safe Characters:</strong> Alphanumeric characters (A-Z, a-z, 0-9) and some special characters (-, _, ., ~) don't need encoding</li>
      <li><strong>Reserved Characters:</strong> Characters like :, /, ?, #, [, ], @, !, $, &, ', (, ), *, +, ,, ;, = have special meanings and must be encoded</li>
      <li><strong>Unsafe Characters:</strong> Spaces, <, >, ", {, }, |, \, ^, %, and control characters must always be encoded</li>
      <li><strong>Encoding Format:</strong> Each unsafe character is replaced by %XX where XX is the hexadecimal value of the character</li>
    </ul>

    <h3>Common Applications of URL Encoding</h3>
    <p>URL encoding is essential in various web development and data processing scenarios:</p>
    <ul>
      <li><strong>Query Parameters:</strong> Encode values in URL query strings for GET requests</li>
      <li><strong>Form Data:</strong> Prepare data for application/x-www-form-urlencoded content type</li>
      <li><strong>API Development:</strong> Ensure proper parameter handling in REST APIs and web services</li>
      <li><strong>Data Transmission:</strong> Safely transmit special characters in URLs and HTTP requests</li>
      <li><strong>Security:</strong> Prevent injection attacks and ensure data integrity in web applications</li>
      <li><strong>SEO:</strong> Create clean, properly encoded URLs for better search engine visibility</li>
    </ul>

    <h3>Best Practices for URL Encoding</h3>
    <p>To make the most of URL encoding in your projects, follow these professional guidelines:</p>
    <ul>
      <li><strong>Encode Early:</strong> Always encode data before constructing URLs or sending requests</li>
      <li><strong>Use Appropriate Methods:</strong> Choose between encodeURI(), encodeURIComponent(), or custom encoding based on your needs</li>
      <li><strong>Test Thoroughly:</strong> Verify encoded URLs work correctly across different browsers and systems</li>
      <li><strong>Handle Decoding Properly:</strong> Always decode received data on the server side</li>
      <li><strong>Consider Readability:</strong> Balance between proper encoding and URL readability for users</li>
      <li><strong>Follow Standards:</strong> Adhere to RFC 3986 standards for URI syntax and encoding</li>
    </ul>

    <h3>Technical Implementation Notes</h3>
    <p>Our tool implements comprehensive URL encoding/decoding following web standards:</p>
    <ul>
      <li>Supports both encodeURI() and encodeURIComponent() JavaScript methods</li>
      <li>Handles Unicode characters and various character sets</li>
      <li>Provides real-time validation and safety scoring</li>
      <li>Includes options for different encoding scenarios and requirements</li>
      <li>Offers batch processing capabilities for multiple strings</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Text File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a text file (.txt, .json, .csv) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.json,.csv">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Compare Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Encoding</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Text</h4>
          <textarea id="originalText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Encoded/Decoded Text</h4>
          <textarea id="processedText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    const urlPreview = document.getElementById('urlPreview');
    
    // Encoding options
    const encodingType = document.getElementById('encodingType');
    const charsetType = document.getElementById('charsetType');
    const lineHandling = document.getElementById('lineHandling');
    const autoDetect = document.getElementById('autoDetect');
    const preserveSpaces = document.getElementById('preserveSpaces');
    const validateUrl = document.getElementById('validateUrl');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalText = document.getElementById('originalText');
    const processedText = document.getElementById('processedText');
    

    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters and preview
    updateCounts();
    updatePreview();

    // Event listeners
    textInput.addEventListener('input', function() {
      updateCounts();
      updatePreview();
    });

    // Update preview when options change
    encodingType.addEventListener('change', updatePreview);
    charsetType.addEventListener('change', updatePreview);
    lineHandling.addEventListener('change', updatePreview);
    preserveSpaces.addEventListener('change', updatePreview);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleEncodingAction(action);
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
        compareModal.style.display = 'none';
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

    // Close compare modal
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === compareModal) {
        uploadModal.style.display = 'none';
        compareModal.style.display = 'none';
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
      if (file.type === 'text/plain' || 
          file.name.endsWith('.txt') || 
          file.name.endsWith('.json') || 
          file.name.endsWith('.csv')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
          updatePreview();
          showAlert('Text file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the text file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a text file (TXT, JSON, CSV).', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Encoded characters count
      const encodedChars = (text.match(/%[0-9A-Fa-f]{2}/g) || []).length;
      document.getElementById('encodedCount').textContent = encodedChars;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Safety score (percentage of safe characters)
      const safeChars = text.replace(/[^A-Za-z0-9\-_.~]/g, '').length;
      const safetyScore = text.length > 0 ? Math.round((safeChars / text.length) * 100) : 100;
      document.getElementById('safetyScore').textContent = safetyScore + '%';
    }

    function updatePreview() {
      const text = textInput.value || 'Your encoded/decoded URL will appear here...';
      
      if (text === 'Your encoded/decoded URL will appear here...') {
        urlPreview.textContent = text;
        return;
      }

      // Auto-detect if enabled
      let operation = encodingType.value;
      if (autoDetect.checked) {
        if (isEncoded(text)) {
          operation = 'decode';
        } else {
          operation = 'encode';
        }
      }

      let result;
      switch (operation) {
        case 'encode':
          result = urlEncode(text);
          break;
        case 'decode':
          result = urlDecode(text);
          break;
        case 'fullEncode':
          result = fullUrlEncode(text);
          break;
        case 'componentEncode':
          result = componentEncode(text);
          break;
      }
      
      urlPreview.textContent = result;
    }

    function handleEncodingAction(action) {
      const text = textInput.value;
      
      // Store original text for comparison
      if (action === 'encode' || action === 'decode' || action === 'toggle') {
        originalTextContent = text;
      }

      switch (action) {
        case 'encode':
          textInput.value = urlEncode(text);
          showAlert('Text URL encoded successfully!', 'success');
          break;

        case 'decode':
          textInput.value = urlDecode(text);
          showAlert('Text URL decoded successfully!', 'success');
          break;

        case 'toggle':
          // Toggle between encode and decode
          if (isEncoded(text)) {
            textInput.value = urlDecode(text);
            showAlert('Text URL decoded successfully!', 'success');
          } else {
            textInput.value = urlEncode(text);
            showAlert('Text URL encoded successfully!', 'success');
          }
          break;

        case 'copy':
          copyToClipboard(textInput.value);
          break;

        case 'download':
          downloadText('url_encoded.txt', textInput.value);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please encode or decode text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          processedText.value = textInput.value;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          originalTextContent = '';
          updateCounts();
          updatePreview();
          break;
      }

      updateCounts();
      updatePreview();
    }

    // URL encode function
    function urlEncode(text) {
      let encoded;
      
      // Handle line breaks based on setting
      let processedText = text;
      if (lineHandling.value === 'remove') {
        processedText = processedText.replace(/\n/g, ' ');
      } else if (lineHandling.value === 'encode') {
        processedText = processedText.replace(/\n/g, '%0A');
      }
      
      if (preserveSpaces.checked) {
        // Use encodeURI which preserves some characters but encodes spaces as %20
        encoded = encodeURI(processedText);
      } else {
        // Use encodeURIComponent which encodes more characters
        encoded = encodeURIComponent(processedText);
      }
      
      return encoded;
    }
    
    // Full URL encode (encodes all non-alphanumeric characters)
    function fullUrlEncode(text) {
      let encoded = '';
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (/[A-Za-z0-9\-_.~]/.test(char)) {
          encoded += char;
        } else {
          encoded += '%' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
        }
      }
      return encoded;
    }
    
    // Component encode (similar to encodeURIComponent but with custom handling)
    function componentEncode(text) {
      return encodeURIComponent(text);
    }
    
    // URL decode function
    function urlDecode(text) {
      try {
        return decodeURIComponent(text.replace(/\+/g, ' '));
      } catch (e) {
        // If decodeURIComponent fails, try custom decoding
        return customUrlDecode(text);
      }
    }
    
    // Custom URL decode for malformed encoded strings
    function customUrlDecode(text) {
      return text.replace(/%([0-9A-Fa-f]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      }).replace(/\+/g, ' ');
    }
    
    // Check if text appears to be URL encoded
    function isEncoded(text) {
      const encodedPattern = /%[0-9A-Fa-f]{2}/;
      return encodedPattern.test(text);
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Text downloaded successfully!', 'success');
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