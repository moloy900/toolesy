---
layout: default
title: "Online CSS Beautifier & Formatter - Format and Minify CSS Code"
permalink: /online-css-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CSS Beautifier & Formatter Online - Clean, Prettify & Minify CSS Code Free</title>

<meta name="description" content="Free online CSS Beautifier & Formatter. Format, beautify, minify, and optimize CSS with a single click. Make your CSS clean, readable, and production-ready instantly.">

<meta name="keywords" content="css beautifier, css formatter, prettify css, minify css, css cleanup tool, css optimizer, css code formatter online, beautify css code, css compressor, css formatter free online">

<meta name="author" content="ToolEsy">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/online-css-beautifier-formatter/">

<!-- ✅ Open Graph (Facebook / LinkedIn / WhatsApp) -->
<meta property="og:title" content="CSS Beautifier & Formatter Online - Clean CSS Code Instantly">
<meta property="og:description" content="Format, minify, and beautify CSS online for free. Improve readability and optimize for performance.">
<meta property="og:url" content="https://toolesy.com/online-css-beautifier-formatter/">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CSS Beautifier & Formatter - Free Online Tool">
<meta name="twitter:description" content="Make your CSS beautiful with proper indentation and minify for faster load. 100% Free.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* CSS Beautifier Styles */
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

  /* Beautifier specific styles */
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
  }
</style>

<div class="converter-container">
  <h1>Free Online CSS Beautifier & Formatter</h1>
  <p class="welcome-message">Format and beautify your CSS code instantly with proper indentation and structure. Minify CSS to reduce file size for faster loading.</p>

  <div class="converter-section">
    <h2>CSS Beautifier & Formatter</h2>

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
        <span>Selector Count: </span>
        <span id="selectorCount">0</span>
      </div>
      <div class="counter-item">
        <span>Property Count: </span>
        <span id="propertyCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input CSS <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="cssInput" rows="6" placeholder="Paste your CSS code here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".css,.txt" style="display: none;">

    <div class="formatting-options">
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
        <label class="option-label">Selector Separator</label>
        <select id="selectorSeparator" class="option-select">
          <option value="newline">New Line</option>
          <option value="same-line">Same Line</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">End of Line</label>
        <select id="endOfLine" class="option-select">
          <option value="lf">LF (Unix)</option>
          <option value="crlf">CRLF (Windows)</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="sortProperties" checked>
          <label for="sortProperties">Sort Properties</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="addSemicolon" checked>
          <label for="addSemicolon">Add Missing Semicolons</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="beautify">Beautify CSS</button>
        <button class="case-button" data-action="minify">Minify CSS</button>
        <button class="case-button" data-action="validate">Validate CSS</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download CSS</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Beautification:</h3>
      <div class="example-text">.container{width:100%;margin:0 auto;}.header{background:#333;color:#fff;padding:20px;}.nav ul{list-style:none;padding:0;margin:0;}.nav li{display:inline-block;margin-right:15px;}</div>

      <h3>After Beautification:</h3>
      <div class="example-text">.container {
  width: 100%;
  margin: 0 auto;
}

.header {
  background: #333;
  color: #fff;
  padding: 20px;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  margin-right: 15px;
}</div>

      <h3>After Minification:</h3>
      <div class="example-text">.container{width:100%;margin:0 auto}.header{background:#333;color:#fff;padding:20px}.nav ul{list-style:none;padding:0;margin:0}.nav li{display:inline-block;margin-right:15px}</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online CSS Beautifier & Formatter Tool</h2>

    <p>Struggling with messy, unformatted CSS code? Our free <strong>CSS Beautifier and Formatter tool</strong> is the perfect solution for developers and designers. This powerful tool instantly transforms your messy CSS into clean, readable, and well-organized code with proper indentation and structure. You can also minify your CSS to reduce file size for faster website loading. There's no download required, no registration needed, and your code privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This CSS Beautifier (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste CSS:</strong> Copy your CSS code from any source (CSS file, style tag, or online editor) and paste it into the large input box above.</li>
      <li><strong>Customize Formatting:</strong> Adjust the formatting options like indentation type, size, and selector separation according to your preferences.</li>
      <li><strong>Beautify or Minify:</strong> Click the "Beautify CSS" button to format your code or "Minify CSS" to compress it for production use.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the formatted code for pasting elsewhere, or use "Download" to save it as a .css file on your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've inherited a CSS file from another developer that's completely unformatted - all on one line with no indentation. Instead of manually trying to format it (which could take hours), you can simply paste the CSS into this tool. By selecting your preferred formatting options and clicking "Beautify CSS", the tool will automatically add proper indentation, line breaks, and structure, transforming an unreadable mess into clean, maintainable code in less than a second.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Quickly format CSS code from various sources to maintain consistent coding standards across projects.</li>
      <li><strong>Frontend Developers:</strong> Beautify minified CSS from frameworks or libraries to make it readable and editable.</li>
      <li><strong>Designers:</strong> Clean up CSS generated by design tools before implementing it in your projects.</li>
      <li><strong>Students:</strong> Learn proper CSS formatting and structure by comparing your code with the beautified version.</li>
      <li><strong>Teams:</strong> Ensure all team members follow the same coding standards by using consistent formatting.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between beautifying and minifying CSS?</strong><br>
      A: Beautifying adds proper indentation, line breaks, and structure to make CSS readable and maintainable. Minifying removes all unnecessary characters (spaces, line breaks, comments) to reduce file size for faster loading in production environments.</p>

    <p><strong>Q: Is there a file size limit for this CSS beautifier?</strong><br>
      A: You can beautify very large CSS files, including entire frameworks and libraries, without any issue. The tool is built to handle thousands of lines of CSS at once.</p>

    <p><strong>Q: Is my CSS code kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The beautification happens locally on your own computer or phone. Your CSS code is never sent to any server, meaning we never see, store, or have access to your code. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our CSS Beautifier & Formatter?</h3>
    <p>Our <strong>online CSS beautifier</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online tools, we don't store your code on our servers - all processing happens in your browser. This means your proprietary CSS, client projects, and sensitive code remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of CSS Beautification</h3>
    <p>CSS beautification has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Code Maintenance:</strong> Format messy CSS to make it readable and maintainable for long-term projects</li>
      <li><strong>Team Collaboration:</strong> Ensure all team members follow consistent formatting standards</li>
      <li><strong>Learning & Education:</strong> Study well-formatted CSS to understand proper structure and organization</li>
      <li><strong>Debugging:</strong> Format minified CSS to identify and fix issues more easily</li>
      <li><strong>Code Review:</strong> Prepare CSS for code reviews by ensuring proper formatting and structure</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload CSS File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a CSS file (.css or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".css,.txt">
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
      <h3 class="modal-title">Compare CSS</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original CSS</h4>
          <textarea id="originalCss" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Formatted CSS</h4>
          <textarea id="formattedCss" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const cssInput = document.getElementById('cssInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Formatting options
    const indentType = document.getElementById('indentType');
    const indentSize = document.getElementById('indentSize');
    const selectorSeparator = document.getElementById('selectorSeparator');
    const endOfLine = document.getElementById('endOfLine');
    const sortProperties = document.getElementById('sortProperties');
    const addSemicolon = document.getElementById('addSemicolon');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalCss = document.getElementById('originalCss');
    const formattedCss = document.getElementById('formattedCss');
    

    // Store original CSS for comparison
    let originalCssContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    cssInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCssAction(action);
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
      if (file.type === 'text/css' || file.name.endsWith('.css') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          cssInput.value = e.target.result;
          updateCounts();
          showAlert('CSS file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the CSS file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a CSS or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const css = cssInput.value;

      // Character count
      document.getElementById('charCount').textContent = css.length;

      // Line count
      const lineCount = css ? css.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Selector count (approximate)
      const selectorCount = (css.match(/{/g) || []).length;
      document.getElementById('selectorCount').textContent = selectorCount;

      // Property count (approximate)
      const propertyCount = (css.match(/;/g) || []).length;
      document.getElementById('propertyCount').textContent = propertyCount;
    }

    function handleCssAction(action) {
      const css = cssInput.value;
      
      // Store original CSS for comparison
      if (action === 'beautify' || action === 'minify') {
        originalCssContent = css;
      }

      switch (action) {
        case 'beautify':
          cssInput.value = beautifyCss(css);
          showAlert('CSS beautified successfully!', 'success');
          break;

        case 'minify':
          cssInput.value = minifyCss(css);
          showAlert('CSS minified successfully!', 'success');
          break;

        case 'validate':
          const validationResult = validateCss(css);
          if (validationResult.isValid) {
            showAlert('CSS is valid!', 'success');
          } else {
            showAlert(`CSS validation error: ${validationResult.error}`, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(css);
          break;

        case 'download':
          downloadCss('formatted_css.css', css);
          break;

        case 'compare':
          if (!originalCssContent) {
            showAlert('Please beautify or minify CSS first to compare.', 'error');
            return;
          }
          originalCss.value = originalCssContent;
          formattedCss.value = css;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          cssInput.value = '';
          originalCssContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // CSS beautification function
    function beautifyCss(css) {
      // Remove existing formatting
      let formatted = css.replace(/\s+/g, ' ').trim();
      
      // Add line breaks after braces and semicolons
      formatted = formatted.replace(/;/g, ';\n');
      formatted = formatted.replace(/{/g, ' {\n');
      formatted = formatted.replace(/}/g, '\n}\n');
      
      // Split into lines
      let lines = formatted.split('\n');
      let result = [];
      let indentLevel = 0;
      const indentChar = indentType.value === 'tabs' ? '\t' : ' '.repeat(parseInt(indentSize.value));
      
      // Process each line
      for (let line of lines) {
        line = line.trim();
        
        if (line.length === 0) continue;
        
        // Decrease indent after closing brace
        if (line.startsWith('}')) {
          indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add current indent
        result.push(indentChar.repeat(indentLevel) + line);
        
        // Increase indent after opening brace
        if (line.endsWith('{')) {
          indentLevel++;
        }
      }
      
      // Handle selector separation
      if (selectorSeparator.value === 'newline') {
        formatted = result.join('\n');
        // Add extra line between selectors
        formatted = formatted.replace(/\n}\n/g, '\n}\n\n');
      } else {
        formatted = result.join('\n');
      }
      
      // Handle end of line characters
      if (endOfLine.value === 'crlf') {
        formatted = formatted.replace(/\n/g, '\r\n');
      }
      
      // Sort properties if enabled
      if (sortProperties.checked) {
        formatted = sortCssProperties(formatted);
      }
      
      // Add missing semicolons if enabled
      if (addSemicolon.checked) {
        formatted = addMissingSemicolons(formatted);
      }
      
      return formatted.trim();
    }
    
    // CSS minification function
    function minifyCss(css) {
      // Remove comments
      let minified = css.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove whitespace
      minified = minified.replace(/\s+/g, ' ');
      
      // Remove spaces around braces and semicolons
      minified = minified.replace(/\s*{\s*/g, '{');
      minified = minified.replace(/\s*}\s*/g, '}');
      minified = minified.replace(/\s*;\s*/g, ';');
      minified = minified.replace(/\s*:\s*/g, ':');
      minified = minified.replace(/\s*,\s*/g, ',');
      
      // Remove last semicolon before closing brace
      minified = minified.replace(/;}/g, '}');
      
      return minified.trim();
    }
    
    // Sort CSS properties alphabetically
    function sortCssProperties(css) {
      const blocks = css.split('}');
      let result = [];
      
      for (let block of blocks) {
        if (!block.trim()) continue;
        
        const parts = block.split('{');
        if (parts.length !== 2) {
          result.push(block);
          continue;
        }
        
        const selector = parts[0].trim();
        let properties = parts[1].split(';');
        
        // Filter and trim properties
        properties = properties
          .map(p => p.trim())
          .filter(p => p.length > 0);
        
        // Sort properties alphabetically
        properties.sort((a, b) => {
          const propA = a.split(':')[0].trim().toLowerCase();
          const propB = b.split(':')[0].trim().toLowerCase();
          return propA.localeCompare(propB);
        });
        
        result.push(selector + ' {\n  ' + properties.join(';\n  ') + '\n}');
      }
      
      return result.join('\n\n');
    }
    
    // Add missing semicolons
    function addMissingSemicolons(css) {
      const lines = css.split('\n');
      let result = [];
      
      for (let line of lines) {
        const trimmed = line.trim();
        
        // If line contains a property but no semicolon, add one
        if (trimmed && 
            !trimmed.endsWith('{') && 
            !trimmed.endsWith('}') && 
            !trimmed.endsWith(';') &&
            trimmed.includes(':') &&
            !trimmed.startsWith('/*') &&
            !trimmed.endsWith('*/')) {
          result.push(line + ';');
        } else {
          result.push(line);
        }
      }
      
      return result.join('\n');
    }
    
    // Simple CSS validation
    function validateCss(css) {
      // Check for balanced braces
      let braceCount = 0;
      for (let char of css) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      if (braceCount !== 0) {
        return {
          isValid: false,
          error: 'Unbalanced braces'
        };
      }
      
      // Simple property validation
      const lines = css.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip empty lines and comments
        if (!line || line.startsWith('/*') || line.endsWith('*/')) continue;
        
        // Check for property lines without semicolons
        if (line.includes(':') && 
            !line.endsWith(';') && 
            !line.endsWith('{') && 
            !line.endsWith('}') &&
            !line.startsWith('@')) {
          return {
            isValid: false,
            error: `Missing semicolon at line ${i + 1}`
          };
        }
      }
      
      return {
        isValid: true
      };
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('CSS copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy CSS: ' + err, 'error');
      });
    }

    function downloadCss(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/css;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('CSS downloaded successfully!', 'success');
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