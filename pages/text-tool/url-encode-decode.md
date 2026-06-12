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

    <p>Whether you're building websites, working with APIs, managing SEO campaigns, or handling web data, properly encoded URLs are essential. Our <strong>URL Encode & Decode Tool</strong> helps you quickly convert text into a URL-safe format and decode encoded strings back into human-readable text. The tool is designed for developers, marketers, students, and anyone who regularly works with URLs, query parameters, or web applications.</p>

    <p>Special characters such as spaces, ampersands, question marks, brackets, and symbols can cause problems when included directly in URLs. URL encoding solves this issue by converting these characters into a standardized format that browsers and servers can safely understand. With our tool, you can perform this conversion instantly without installing software or creating an account.</p>

    <p>Everything runs directly inside your browser, ensuring fast performance and complete privacy. Your text never leaves your device, making this tool suitable for working with sensitive URLs, API requests, tracking parameters, and confidential project data.</p>

    <h3>How to Use This URL Encoder & Decoder (Step-by-Step)</h3>

    <ul>
        <li><strong>Paste or Type Your Text:</strong> Enter the text, URL, query string, or parameter value you want to encode or decode.</li>

        <li><strong>Select an Operation:</strong> Choose whether you want to URL encode the text or decode an existing encoded string.</li>

        <li><strong>Adjust Settings:</strong> Depending on your requirements, customize encoding behavior and formatting options.</li>

        <li><strong>Process Instantly:</strong> Click the appropriate button to convert your data within seconds.</li>

        <li><strong>Copy the Result:</strong> Use the output directly in your website, application, marketing campaign, or development project.</li>
    </ul>

    <h3>What Is URL Encoding?</h3>

    <p>URL encoding, also known as percent encoding, is a method used to convert special characters into a format that can be safely transmitted over the internet. Since URLs can only contain a limited set of characters, any unsupported character must be encoded before being included in a web address.</p>

    <p>For example, a space character cannot appear directly inside a URL. Instead, it is typically represented as <code>%20</code>. Similarly, characters such as <code>&amp;</code>, <code>#</code>, <code>?</code>, and <code>=</code> are encoded to prevent conflicts with URL syntax.</p>

    <p>Without proper encoding, web pages may fail to load correctly, parameters may become corrupted, and security vulnerabilities may be introduced into applications.</p>

    <h3>Why URL Encoding Matters</h3>

    <p>Many users underestimate the importance of URL encoding until they encounter broken links, API errors, or data transmission problems. Proper encoding ensures that information is transferred accurately between browsers, servers, databases, and web services.</p>

    <ul>
        <li><strong>Improves Compatibility:</strong> Ensures URLs work consistently across browsers and platforms.</li>

        <li><strong>Prevents Errors:</strong> Avoids issues caused by unsupported or reserved characters.</li>

        <li><strong>Enhances Security:</strong> Helps reduce risks associated with malformed URLs and injection attacks.</li>

        <li><strong>Supports International Characters:</strong> Allows safe transmission of Unicode and multilingual text.</li>

        <li><strong>Maintains Data Integrity:</strong> Ensures information arrives exactly as intended.</li>
    </ul>

    <h3>Real-World Example</h3>

    <p>Imagine you are creating a search URL for an online store. A customer enters the search phrase:</p>

    <div class="example-text">
        Best laptops under $1000 & gaming accessories
    </div>

    <p>If this text is placed directly into a URL, the special characters may interfere with the query structure. After encoding, the text becomes:</p>

    <div class="example-text">
        Best%20laptops%20under%20%241000%20%26%20gaming%20accessories
    </div>

    <p>The encoded version can now be safely included in a URL without causing formatting or processing issues.</p>

    <h3>Who Should Use This Tool?</h3>

    <ul>
        <li><strong>Web Developers:</strong> Create properly formatted URLs for websites, APIs, and applications.</li>

        <li><strong>SEO Professionals:</strong> Analyze URL structures and troubleshoot encoded links.</li>

        <li><strong>Digital Marketers:</strong> Build campaign tracking URLs and marketing parameters.</li>

        <li><strong>Data Analysts:</strong> Process encoded datasets and imported web data.</li>

        <li><strong>Software Engineers:</strong> Test API endpoints and application behavior.</li>

        <li><strong>Students:</strong> Learn how URL encoding works in web technologies.</li>

        <li><strong>System Administrators:</strong> Diagnose URL-related server and application issues.</li>
    </ul>

    <h3>Key Features of Our URL Encoder & Decoder</h3>

    <ul>
        <li>Instant URL encoding and decoding.</li>

        <li>Works directly inside your browser.</li>

        <li>No installation required.</li>

        <li>Completely free to use.</li>

        <li>Supports large amounts of text.</li>

        <li>Handles Unicode and international characters.</li>

        <li>Mobile-friendly interface.</li>

        <li>Fast and lightweight performance.</li>

        <li>Privacy-focused processing.</li>

        <li>Suitable for both beginners and professionals.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>

    <p><strong>What is the difference between encoding and decoding?</strong><br>
    Encoding converts readable text into URL-safe format, while decoding converts URL-safe text back into its original readable form.</p>

    <p><strong>Can I encode complete URLs?</strong><br>
    Yes. You can encode individual parameters, text strings, or entire URLs depending on your specific requirements.</p>

    <p><strong>Does the tool support international languages?</strong><br>
    Absolutely. The tool supports Unicode characters and works with languages from around the world.</p>

    <p><strong>Will my data be stored?</strong><br>
    No. All processing occurs directly within your browser. Nothing is uploaded or stored on external servers.</p>

    <h3>Understanding URL Encoding in Detail</h3>

    <p>To fully understand why URL encoding is important, it helps to know how web browsers and servers communicate. A URL is more than just a website address—it often contains instructions, search queries, tracking parameters, session identifiers, and other pieces of information. Since URLs follow strict formatting rules, certain characters cannot appear directly within them.</p>

    <p>When a browser encounters characters that are not allowed inside a URL, it must convert them into a safe format. This conversion process is called percent encoding because each converted character is represented by a percent sign (%) followed by its hexadecimal value.</p>

    <p>For example, the space character becomes <code>%20</code>, the ampersand character becomes <code>%26</code>, and the question mark becomes <code>%3F</code>. This ensures that browsers, web servers, APIs, and applications interpret the URL correctly.</p>

    <p>Modern websites rely heavily on URL encoding for search functionality, user-generated content, multilingual support, tracking campaigns, API requests, and secure data transmission.</p>

    <h3>Safe Characters vs Reserved Characters</h3>

    <p>Not all characters require encoding. Some characters are considered safe and can appear directly in URLs without modification.</p>

    <ul>
        <li><strong>Safe Characters:</strong> Letters (A-Z, a-z), numbers (0-9), hyphen (-), underscore (_), period (.), and tilde (~).</li>

        <li><strong>Reserved Characters:</strong> Characters such as ?, &, =, #, :, ;, @, and / have special meanings within URLs and often require encoding depending on their usage.</li>

        <li><strong>Unsafe Characters:</strong> Spaces, quotation marks, angle brackets, braces, pipes, and control characters should always be encoded.</li>
    </ul>

    <p>Understanding this distinction is important when building URLs manually or debugging web applications.</p>

    <h3>Common Applications of URL Encoding</h3>

    <p>URL encoding plays a critical role in many areas of web development, digital marketing, cybersecurity, and data processing.</p>

    <ul>
        <li><strong>Search Queries:</strong> Search engines encode user-entered keywords before including them in URLs.</li>

        <li><strong>API Requests:</strong> REST APIs often require encoded parameters to ensure proper communication between systems.</li>

        <li><strong>Form Submissions:</strong> Web forms use encoded values to safely transmit user input.</li>

        <li><strong>Email Marketing:</strong> Tracking URLs frequently contain encoded campaign parameters.</li>

        <li><strong>E-commerce Platforms:</strong> Product searches and filter selections depend on properly encoded URLs.</li>

        <li><strong>Analytics Tools:</strong> Encoded URLs help preserve accurate tracking information.</li>

        <li><strong>Multilingual Websites:</strong> International characters and Unicode text are transmitted safely through encoding.</li>

        <li><strong>Database Applications:</strong> Encoded data prevents corruption when moving information between systems.</li>
    </ul>

    <h3>URL Encoding Examples</h3>

    <p>Below are several examples showing how common characters are encoded:</p>

    <ul>
        <li>Space → %20</li>
        <li>! → %21</li>
        <li>" → %22</li>
        <li># → %23</li>
        <li>$ → %24</li>
        <li>% → %25</li>
        <li>& → %26</li>
        <li>' → %27</li>
        <li>( → %28</li>
        <li>) → %29</li>
        <li>+ → %2B</li>
        <li>, → %2C</li>
        <li>/ → %2F</li>
        <li>: → %3A</li>
        <li>; → %3B</li>
        <li>= → %3D</li>
        <li>? → %3F</li>
        <li>@ → %40</li>
    </ul>

    <p>Knowing these common conversions can help developers troubleshoot URL-related problems more efficiently.</p>

    <h3>Benefits of Using Our URL Encoder & Decoder</h3>

    <ul>
        <li><strong>Save Time:</strong> Instantly encode and decode data without manual conversions.</li>

        <li><strong>Reduce Errors:</strong> Avoid broken URLs caused by incorrect character handling.</li>

        <li><strong>Improve Security:</strong> Ensure data is transmitted safely between systems.</li>

        <li><strong>Increase Productivity:</strong> Handle URL transformations in seconds.</li>

        <li><strong>Cross-Platform Compatibility:</strong> Create URLs that work consistently across browsers and devices.</li>

        <li><strong>Support Large Data Sets:</strong> Process long URLs and extensive query strings with ease.</li>

        <li><strong>Maintain Data Integrity:</strong> Prevent accidental data corruption during transmission.</li>
    </ul>

    <h3>Best Practices for URL Encoding</h3>

    <p>Professionals working with web technologies follow several best practices to ensure reliable URL handling.</p>

    <ul>
        <li><strong>Encode User Input:</strong> Never place raw user input directly into URLs.</li>

        <li><strong>Encode Before Transmission:</strong> Perform encoding before sending requests to servers or APIs.</li>

        <li><strong>Decode Carefully:</strong> Only decode data when required to prevent formatting issues.</li>

        <li><strong>Validate URLs:</strong> Check encoded URLs before deploying them in production environments.</li>

        <li><strong>Use Standard Methods:</strong> Follow RFC 3986 standards whenever possible.</li>

        <li><strong>Handle International Characters:</strong> Ensure multilingual content is encoded properly.</li>

        <li><strong>Test Across Platforms:</strong> Verify compatibility with different browsers and operating systems.</li>
    </ul>

    <h3>Frequently Asked Questions (Extended)</h3>

    <p><strong>Can URL encoding improve website security?</strong><br>
    URL encoding alone is not a complete security solution, but it helps prevent malformed requests and ensures special characters are interpreted correctly.</p>

    <p><strong>Can I decode an entire URL?</strong><br>
    Yes. The tool can decode full URLs, query strings, and individual encoded parameters.</p>

    <p><strong>Does URL encoding affect SEO?</strong><br>
    Proper URL encoding helps search engines correctly interpret page addresses, improving crawlability and user experience.</p>

    <p><strong>Why do spaces become %20?</strong><br>
    The hexadecimal value of the space character is 20, so it is represented as %20 in URL encoding.</p>

    <p><strong>Can encoded URLs contain Unicode characters?</strong><br>
    Yes. Unicode characters are converted into a safe encoded format that browsers and servers can process correctly.</p>

    <p><strong>Is URL encoding the same as encryption?</strong><br>
    No. Encoding simply converts characters into a standardized format. It does not protect information from being viewed or intercepted.</p>

    <h3>Privacy & Security</h3>

    <p>Your privacy is important. Unlike many online tools that process data on remote servers, our URL Encode & Decode Tool performs all operations directly inside your browser. No text, URLs, parameters, or encoded strings are transmitted to our systems.</p>

    <p>This browser-based approach provides maximum privacy, faster processing speeds, and greater reliability. Whether you're working with API tokens, tracking parameters, confidential project URLs, or customer data, you can use the tool with confidence.</p>

    <h3>Final Thoughts</h3>

    <p>URL encoding is one of the most important yet often overlooked aspects of web development and data handling. Properly encoded URLs ensure reliable communication between browsers, applications, APIs, and servers while reducing errors and improving security.</p>

    <p>Our free <strong>URL Encode & Decode Tool</strong> provides a fast, accurate, and privacy-friendly way to convert URLs and text between encoded and readable formats. Whether you're a developer building web applications, an SEO specialist analyzing URLs, a marketer creating campaign links, or a student learning web technologies, this tool offers a simple solution for handling URL encoding tasks efficiently.</p>

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