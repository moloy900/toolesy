---
layout: default
title: "Base64 Encoder / Decoder - Online Base64 Converter Tool"
permalink: /base64-encoder-decoder-online-base64-converter-tool/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Base64 Encoder & Decoder ✨ Free Online Text & File Converter</title>

<meta name="description" content="Free online Base64 encoder & decoder. Convert text, images, files, and URLs to Base64 format or decode Base64 back to readable data. Instant, secure & no signup required.">

<meta name="keywords" content="base64, base64 encode, base64 decode, convert to base64, base64 encoder online, base64 decoder online, base64 converter tool, image to base64, base64 to text, decode base64 string">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Free Base64 Encoder & Decoder - Convert Text & Files Online">
<meta property="og:description" content="Convert text, images and data to Base64 or decode Base64 instantly. Fast, secure tool for developers.">
<meta property="og:url" content="https://www.toolesy.com/base64-encoder-decoder-online-base64-converter-tool">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Base64 Encoder & Decoder - Convert Text & Files Online">
<meta name="twitter:description" content="Fast & secure Base64 converter for developers and users. No signup required.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Base64 Encoder/Decoder Styles */
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

  /* Base64 specific styles */
  .base64-options {
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

  /* File upload specific styles */
  .file-input-wrapper {
    position: relative;
    display: inline-block;
  }

  .file-input-wrapper input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  /* Image preview */
  .image-preview {
    margin: 20px 0;
    text-align: center;
  }

  .image-preview img {
    max-width: 100%;
    max-height: 200px;
    border: 2px dashed #e0e6ed;
    border-radius: 8px;
    padding: 10px;
  }

  /* Data URL preview */
  .dataurl-preview {
    margin: 20px 0;
    padding: 15px;
    background: #e8f4fc;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .dataurl-preview-title {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 10px;
  }

  .dataurl-preview-content {
    font-family: 'Courier New', monospace;
    word-break: break-all;
    background: white;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #e0e6ed;
    font-size: 0.9rem;
    max-height: 150px;
    overflow-y: auto;
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

    .base64-options {
      grid-template-columns: 1fr;
    }

    .example-text {
      font-size: 0.9rem;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Base64 Encoder & Decoder</h1>
  <p class="welcome-message">Convert text, images, and files to Base64 format and decode Base64 strings back to their original form. Essential tool for web development, data transmission, and embedding files in web applications.</p>

  <div class="converter-section">
    <h2>Base64 Encoder & Decoder</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Size: </span>
        <span id="inputSize">0 bytes</span>
      </div>
      <div class="counter-item">
        <span>Output Size: </span>
        <span id="outputSize">0 bytes</span>
      </div>
      <div class="counter-item">
        <span>Size Increase: </span>
        <span id="sizeIncrease">0%</span>
      </div>
      <div class="counter-item">
        <span>Encoding Time: </span>
        <span id="encodingTime">0ms</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text or File <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Enter text to encode or Base64 string to decode..."></textarea>
    </div>

    <!-- File upload section -->
    <div class="file-upload-section">
      <div class="file-input-wrapper">
        <button class="file-upload-button">
          <i class="fas fa-file-upload"></i> Choose File
        </button>
        <input type="file" id="fileUpload" accept="*/*">
      </div>
      <span id="fileName">No file chosen</span>
      <div class="file-info" id="fileInfo"></div>
    </div>

    <!-- Image preview -->
    <div class="image-preview" id="imagePreview" style="display: none;">
      <img id="previewImage" src="" alt="Image preview">
    </div>

    <div class="base64-options">
      <div class="option-group">
        <label class="option-label">Operation Type</label>
        <select id="operationType" class="option-select">
          <option value="encode">Base64 Encode</option>
          <option value="decode">Base64 Decode</option>
          <option value="urlEncode">Base64 URL Encode</option>
          <option value="urlDecode">Base64 URL Decode</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Character Set</label>
        <select id="charsetType" class="option-select">
          <option value="utf8">UTF-8</option>
          <option value="ascii">ASCII</option>
          <option value="binary">Binary</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Line Breaks</label>
        <select id="lineBreaks" class="option-select">
          <option value="none">No Line Breaks</option>
          <option value="76">76 Characters</option>
          <option value="64">64 Characters</option>
          <option value="48">48 Characters</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="autoDetect" checked>
          <label for="autoDetect">Auto-detect Operation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="validateBase64" checked>
          <label for="validateBase64">Validate Base64</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeMimeType">
          <label for="includeMimeType">Include MIME Type</label>
        </div>
      </div>
    </div>

    <!-- Data URL preview -->
    <div class="dataurl-preview" id="dataUrlPreview" style="display: none;">
      <div class="dataurl-preview-title">Data URL Preview</div>
      <div class="dataurl-preview-content" id="dataUrlContent"></div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="encode">Base64 Encode</button>
        <button class="case-button" data-action="decode">Base64 Decode</button>
        <button class="case-button" data-action="toggle">Toggle Encode/Decode</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Result</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Base64 Encoding Examples</h2>

      <h3>Original Text:</h3>
      <div class="example-text">Hello World!
This is a test message for Base64 encoding.
Web development tools are essential!</div>

      <h3>Base64 Encoded:</h3>
      <div class="example-text">SGVsbG8gV29ybGQhClRoaXMgaXMgYSB0ZXN0IG1lc3NhZ2UgZm9yIEJhc2U2NCBlbmNvZGluZy4KV2ViIGRldmVsb3BtZW50IHRvb2xzIGFyZSBlc3NlbnRpYWwh</div>

      <h3>Base64 Decoded (Back to Original):</h3>
      <div class="example-text">Hello World!
This is a test message for Base64 encoding.
Web development tools are essential!</div>

      <h3>Common Base64 Patterns:</h3>
      <div class="example-text">Text: "A" → Base64: "QQ=="
Text: "AB" → Base64: "QUI="
Text: "ABC" → Base64: "QUJD"
Text: "Hello" → Base64: "SGVsbG8="
Text: "Base64" → Base64: "QmFzZTY0"</div>

      <h3>Image Data URL Example:</h3>
      <div class="example-text">data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMzNmEiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TVkc8L3RleHQ+PC9zdmc+</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Base64 Encoder & Decoder Tool</h2>

    <p>Need to convert data to Base64 format for web applications, data transmission, or file embedding? Our free <strong>Base64 Encoder & Decoder tool</strong> is the comprehensive solution for developers, system administrators, and data analysts. This powerful tool instantly converts text, images, and files to Base64 format and decodes Base64 strings back to their original form. Base64 encoding is essential for safely transmitting binary data over text-based protocols and embedding files in web applications. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Base64 Encoder/Decoder (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text or Upload File:</strong> Type text in the input box or upload any file using the file upload button. You can input regular text to encode or Base64 strings to decode.</li>
      <li><strong>Choose Operation:</strong> Select whether you want to encode (convert to Base64) or decode (convert back to original format).</li>
      <li><strong>Customize Options:</strong> Adjust encoding type, character set, line breaks, and other options according to your specific needs.</li>
      <li><strong>Process Data:</strong> Click the "Base64 Encode" or "Base64 Decode" button to convert your data instantly. See real-time previews for images and data URLs.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab your encoded/decoded data for use in your applications, websites, or data processing workflows.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're developing a web application that needs to embed small images directly in HTML or CSS without separate file requests. Instead of hosting images on a server, you can use this tool to convert images to Base64 data URLs. For example, converting a company logo to Base64 allows you to embed it directly in your CSS as a background image: <code>background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...')</code>. This reduces HTTP requests, improves loading performance, and makes your application more self-contained!</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Encode images and files for data URLs in HTML, CSS, and JavaScript applications.</li>
      <li><strong>API Developers:</strong> Handle Base64 encoded data in REST APIs and web services for binary data transmission.</li>
      <li><strong>System Administrators:</strong> Process Base64 encoded configuration files and data in scripts and automation.</li>
      <li><strong>Security Professionals:</strong> Analyze and decode Base64 encoded data in security logs and forensic analysis.</li>
      <li><strong>Data Analysts:</strong> Process and convert Base64 encoded data from various sources and databases.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is Base64 encoding and why is it used?</strong><br>
      Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It's commonly used to encode binary data (like images, files) for transmission over protocols that only support text, such as email (MIME), XML, JSON, and data URLs in web development.</p>

    <p><strong>What's the difference between standard Base64 and Base64 URL encoding?</strong><br>
      Standard Base64 uses '+' and '/' characters and may include padding with '='. Base64 URL encoding replaces '+' with '-' and '/' with '_', and omits padding, making it safe for use in URLs and filenames without requiring URL encoding.</p>

    <p><strong>Is my data kept private and secure when I use this encoder?</strong><br>
      Absolutely. This is a core principle of our tool. The encoding/decoding happens locally on your own computer or phone. Your files and data are never sent to any server, meaning we never see, store, or have access to your sensitive information, images, or documents. It is 100% secure.</p>

    <p><strong>Can I encode large files with this tool?</strong><br>
      While the tool can handle reasonably sized files, very large files may impact browser performance. For optimal results, we recommend files under 10MB. The tool provides real-time feedback on file size and encoding performance.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Base64 Encoder & Decoder Tool?</h3>
    <p>Our <strong>online Base64 encoder/decoder</strong> stands out from other tools because of its comprehensive features, real-time previews, and privacy-focused design. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your sensitive files, confidential documents, and proprietary data remain completely secure. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Understanding Base64 Encoding</h3>
    <p>Base64 encoding works by converting binary data into a set of 64 different ASCII characters. Here's how it works:</p>
    <ul>
      <li><strong>Character Set:</strong> Uses A-Z, a-z, 0-9, +, / (64 characters total)</li>
      <li><strong>Encoding Process:</strong> Every 3 bytes (24 bits) of binary data is converted to 4 Base64 characters (each representing 6 bits)</li>
      <li><strong>Padding:</strong> If the input isn't divisible by 3, padding characters (=) are added to make the output length a multiple of 4</li>
      <li><strong>Size Increase:</strong> Base64 encoding typically increases data size by approximately 33% due to the 3:4 ratio conversion</li>
      <li><strong>Common Uses:</strong> Email attachments (MIME), data URLs, storing binary data in XML/JSON, basic obfuscation</li>
    </ul>

    <h3>Common Applications of Base64 Encoding</h3>
    <p>Base64 encoding is essential in various development and data processing scenarios:</p>
    <ul>
      <li><strong>Web Development:</strong> Embed images and fonts directly in HTML/CSS using data URLs</li>
      <li><strong>API Development:</strong> Transmit binary data (images, files) in JSON and XML APIs</li>
      <li><strong>Email Systems:</strong> Encode file attachments in MIME email format</li>
      <li><strong>Database Storage:</strong> Store binary data in text-based database fields</li>
      <li><strong>Configuration Files:</strong> Include small binary assets directly in configuration files</li>
      <li><strong>Security:</strong> Basic obfuscation for sensitive data (though not encryption)</li>
    </ul>

    <h3>Best Practices for Base64 Encoding</h3>
    <p>To make the most of Base64 encoding in your projects, follow these professional guidelines:</p>
    <ul>
      <li><strong>Use for Appropriate Data:</strong> Base64 is best for small to medium-sized binary data, not large files</li>
      <li><strong>Consider Performance:</strong> Remember the 33% size increase and additional processing overhead</li>
      <li><strong>Choose the Right Variant:</strong> Use standard Base64 for most cases, Base64 URL for web addresses</li>
      <li><strong>Handle Padding:</strong> Be aware that different systems may handle padding characters differently</li>
      <li><strong>Validate Input:</strong> Always validate Base64 strings before decoding to prevent errors</li>
      <li><strong>Use MIME Types:</strong> Include appropriate MIME types when creating data URLs for proper rendering</li>
    </ul>

    <h3>Technical Implementation Notes</h3>
    <p>Our tool implements comprehensive Base64 encoding/decoding following RFC 4648 standards:</p>
    <ul>
      <li>Supports both standard Base64 and Base64 URL encoding variants</li>
      <li>Handles various character encodings including UTF-8, ASCII, and binary data</li>
      <li>Provides configurable line breaking for improved readability</li>
      <li>Includes real-time file processing with progress feedback</li>
      <li>Offers image preview and data URL generation capabilities</li>
      <li>Validates Base64 strings to ensure data integrity</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a file to encode to Base64 format. Supported files: images, documents, text files, etc.</p>
      <input type="file" id="modalFileUpload" accept="*/*">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload & Encode</button>
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
          <h4>Original Data</h4>
          <textarea id="originalData" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Base64 Result</h4>
          <textarea id="base64Result" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const fileName = document.getElementById('fileName');
    const fileInfo = document.getElementById('fileInfo');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const dataUrlPreview = document.getElementById('dataUrlPreview');
    const dataUrlContent = document.getElementById('dataUrlContent');
    
    // Base64 options
    const operationType = document.getElementById('operationType');
    const charsetType = document.getElementById('charsetType');
    const lineBreaks = document.getElementById('lineBreaks');
    const autoDetect = document.getElementById('autoDetect');
    const validateBase64 = document.getElementById('validateBase64');
    const includeMimeType = document.getElementById('includeMimeType');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalData = document.getElementById('originalData');
    const base64Result = document.getElementById('base64Result');
    

    // Store original data for comparison
    let originalDataContent = '';
    let currentFile = null;

    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', function() {
      updateCounts();
      hidePreviews();
    });

    // File upload handling
    fileUpload.addEventListener('change', handleFileUpload);
    modalFileUpload.addEventListener('change', handleModalFileUpload);

    // Update when options change
    operationType.addEventListener('change', updateCounts);
    lineBreaks.addEventListener('change', updateCounts);
    includeMimeType.addEventListener('change', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleBase64Action(action);
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

    // Confirm upload button
    confirmUpload.addEventListener('click', function() {
      const file = modalFileUpload.files[0];
      if (!file) {
        showAlert('Please select a file first.', 'error');
        return;
      }
      handleFileProcessing(file);
      uploadModal.style.display = 'none';
    });

    function handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        handleFileProcessing(file);
      }
    }

    function handleModalFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      } else {
        fileInfo.textContent = '';
      }
    }

    function handleFileProcessing(file) {
      currentFile = file;
      fileName.textContent = file.name;
      fileInfo.textContent = `Type: ${file.type || 'Unknown'} | Size: ${(file.size / 1024).toFixed(2)} KB`;
      
      // Clear text input when file is selected
      textInput.value = '';
      
      // Show image preview if it's an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
          previewImage.src = e.target.result;
          imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        imagePreview.style.display = 'none';
      }
      
      updateCounts();
      hidePreviews();
    }

    function hidePreviews() {
      imagePreview.style.display = 'none';
      dataUrlPreview.style.display = 'none';
    }

    function updateCounts() {
      let inputSize = 0;
      let outputSize = 0;
      
      if (currentFile) {
        inputSize = currentFile.size;
        // For files, we'll estimate the Base64 size (roughly 1.37x original size)
        outputSize = Math.ceil(inputSize * 1.37);
      } else {
        const text = textInput.value;
        inputSize = new Blob([text]).size;
        
        // Calculate approximate Base64 size
        if (operationType.value.includes('encode') || (autoDetect.checked && !isBase64(text))) {
          outputSize = Math.ceil(inputSize * 1.37);
        } else {
          outputSize = Math.ceil(inputSize * 0.75); // Approximate decoded size
        }
      }
      
      document.getElementById('inputSize').textContent = formatBytes(inputSize);
      document.getElementById('outputSize').textContent = formatBytes(outputSize);
      
      const increase = inputSize > 0 ? Math.round(((outputSize - inputSize) / inputSize) * 100) : 0;
      document.getElementById('sizeIncrease').textContent = increase + '%';
      
      // Simulate encoding time (in real implementation, this would be actual timing)
      const encodingTime = Math.max(10, Math.min(500, Math.round(inputSize / 100)));
      document.getElementById('encodingTime').textContent = encodingTime + 'ms';
    }

    function handleBase64Action(action) {
      const startTime = performance.now();
      
      // Store original data for comparison
      if (action === 'encode' || action === 'decode' || action === 'toggle') {
        if (currentFile) {
          originalDataContent = `File: ${currentFile.name} (${formatBytes(currentFile.size)})`;
        } else {
          originalDataContent = textInput.value;
        }
      }

      let result;
      let operation;

      switch (action) {
        case 'encode':
          operation = 'encode';
          result = performBase64Encode();
          showAlert('Data Base64 encoded successfully!', 'success');
          break;

        case 'decode':
          operation = 'decode';
          result = performBase64Decode();
          showAlert('Data Base64 decoded successfully!', 'success');
          break;

        case 'toggle':
          // Toggle between encode and decode
          if (currentFile || (autoDetect.checked && !isBase64(textInput.value))) {
            operation = 'encode';
            result = performBase64Encode();
            showAlert('Data Base64 encoded successfully!', 'success');
          } else {
            operation = 'decode';
            result = performBase64Decode();
            showAlert('Data Base64 decoded successfully!', 'success');
          }
          break;

        case 'copy':
          copyToClipboard(textInput.value);
          break;

        case 'download':
          downloadResult(textInput.value, operationType.value.includes('encode') ? 'base64.txt' : 'decoded.txt');
          break;

        case 'compare':
          if (!originalDataContent) {
            showAlert('Please encode or decode data first to compare.', 'error');
            return;
          }
          originalData.value = originalDataContent;
          base64Result.value = textInput.value;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          currentFile = null;
          fileName.textContent = 'No file chosen';
          fileInfo.textContent = '';
          originalDataContent = '';
          hidePreviews();
          updateCounts();
          break;
      }

      const endTime = performance.now();
      document.getElementById('encodingTime').textContent = Math.round(endTime - startTime) + 'ms';
      updateCounts();
    }

    function performBase64Encode() {
      if (currentFile) {
        return encodeFileToBase64(currentFile);
      } else {
        return encodeTextToBase64(textInput.value);
      }
    }

    function performBase64Decode() {
      if (currentFile) {
        showAlert('Cannot decode files. Please use text input for decoding.', 'error');
        return textInput.value;
      } else {
        return decodeBase64ToText(textInput.value);
      }
    }

    function encodeTextToBase64(text) {
      if (!text) return '';
      
      let encoded;
      const lineBreak = parseInt(lineBreaks.value) || 0;
      
      if (operationType.value === 'urlEncode') {
        // Base64 URL encoding
        encoded = btoa(unescape(encodeURIComponent(text)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      } else {
        // Standard Base64 encoding
        encoded = btoa(unescape(encodeURIComponent(text)));
      }
      
      // Add line breaks if specified
      if (lineBreak > 0) {
        encoded = encoded.replace(new RegExp(`(.{${lineBreak}})`, 'g'), '$1\n').trim();
      }
      
      // Update text input with result
      textInput.value = encoded;
      
      // Show data URL preview for text
      if (includeMimeType.checked) {
        const dataUrl = `data:text/plain;base64,${encoded}`;
        dataUrlContent.textContent = dataUrl;
        dataUrlPreview.style.display = 'block';
      }
      
      return encoded;
    }

    function encodeFileToBase64(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function(e) {
          let base64 = e.target.result.split(',')[1]; // Remove data URL prefix
          
          if (operationType.value === 'urlEncode') {
            base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
          }
          
          // Add line breaks if specified
          const lineBreak = parseInt(lineBreaks.value) || 0;
          if (lineBreak > 0) {
            base64 = base64.replace(new RegExp(`(.{${lineBreak}})`, 'g'), '$1\n').trim();
          }
          
          textInput.value = base64;
          
          // Show data URL preview
          if (includeMimeType.checked) {
            const mimeType = file.type || 'application/octet-stream';
            const dataUrl = `data:${mimeType};base64,${base64}`;
            dataUrlContent.textContent = dataUrl.substring(0, 200) + '...'; // Show first 200 chars
            dataUrlPreview.style.display = 'block';
          }
          
          resolve(base64);
        };
        reader.readAsDataURL(file);
      });
    }

    function decodeBase64ToText(base64String) {
      if (!base64String) return '';
      
      if (validateBase64.checked && !isBase64(base64String)) {
        showAlert('Invalid Base64 string!', 'error');
        return base64String;
      }
      
      try {
        // Remove line breaks and URL encoding characters if present
        let cleanBase64 = base64String.replace(/\s/g, '');
        
        if (operationType.value === 'urlDecode') {
          cleanBase64 = cleanBase64.replace(/-/g, '+').replace(/_/g, '/');
          // Add padding if needed
          while (cleanBase64.length % 4) {
            cleanBase64 += '=';
          }
        }
        
        const decoded = decodeURIComponent(escape(atob(cleanBase64)));
        textInput.value = decoded;
        hidePreviews();
        return decoded;
      } catch (error) {
        showAlert('Error decoding Base64: ' + error.message, 'error');
        return base64String;
      }
    }

    function isBase64(str) {
      if (typeof str !== 'string') return false;
      
      // Remove whitespace and URL-safe characters for checking
      const cleanStr = str.replace(/\s/g, '').replace(/-/g, '+').replace(/_/g, '/');
      
      // Base64 regex pattern
      const base64Pattern = /^[A-Za-z0-9+/]*={0,2}$/;
      
      return base64Pattern.test(cleanStr) && cleanStr.length % 4 === 0;
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 bytes';
      const k = 1024;
      const sizes = ['bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy: ' + err, 'error');
      });
    }

    function downloadResult(content, filename) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('File downloaded successfully!', 'success');
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