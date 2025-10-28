---
layout: default
title: "Online JSON Beautifier & Formatter - Format and Minify JSON Data"
permalink: /online-json-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>JSON Beautifier & Formatter Online — Format, Validate & Minify JSON Free</title>

<meta name="description"
  content="Free online JSON Beautifier & Formatter tool. Format and minify JSON data for clean, readable structure. Validate JSON, fix errors, and view JSON in a structured layout.">

<meta name="keywords"
  content="json beautifier, json formatter, json validator, json viewer, json minifier, format json online, parse json data, prettify json, json tool free">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="JSON Beautifier & Formatter Online — Format, Validate & Minify JSON Free">
<meta property="og:description" content="Format, validate and minify JSON instantly. Free online JSON formatter tool with error highlighter and tree view support.">
<meta property="og:url" content="https://toolesy.com/online-json-beautifier-formatter">
<meta property="og:site_name" content="ToolEsy">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online JSON Beautifier & Formatter">
<meta name="twitter:description" content="Beautify, validate and compress JSON easily. Make JSON readable with proper indentation.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* JSON Beautifier Styles */
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

  .case-button.info {
    background: #17a2b8;
    color: white;
  }

  .case-button.info:hover {
    background: #138496;
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

  /* Tree view styles */
  .json-tree {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    margin: 10px 0;
    font-family: monospace;
    max-height: 300px;
    overflow-y: auto;
  }

  .json-node {
    margin-left: 20px;
  }

  .json-key {
    color: #881391;
    font-weight: bold;
  }

  .json-string {
    color: #c41a16;
  }

  .json-number {
    color: #1c00cf;
  }

  .json-boolean {
    color: #0d22aa;
  }

  .json-null {
    color: #808080;
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
  <h1>Free Online JSON Beautifier & Formatter</h1>
  <p class="welcome-message">Format and beautify your JSON data instantly with proper indentation and structure. Minify JSON to reduce file size for faster data transfer.</p>

  <div class="converter-section">
    <h2>JSON Beautifier & Formatter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Object Count: </span>
        <span id="objectCount">0</span>
      </div>
      <div class="counter-item">
        <span>Array Count: </span>
        <span id="arrayCount">0</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 KB</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input JSON <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="jsonInput" rows="6" placeholder='Paste your JSON data here... Example: {"name":"John","age":30,"city":"New York"}'></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".json,.txt" style="display: none;">

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
        <label class="option-label">Quote Style</label>
        <select id="quoteStyle" class="option-select">
          <option value="double">Double Quotes</option>
          <option value="single">Single Quotes</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Sort Keys</label>
        <select id="sortKeys" class="option-select">
          <option value="none">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="escapeUnicode" checked>
          <label for="escapeUnicode">Escape Unicode</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="trailingCommas">
          <label for="trailingCommas">Allow Trailing Commas</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="beautify">Beautify JSON</button>
        <button class="case-button" data-action="minify">Minify JSON</button>
        <button class="case-button" data-action="validate">Validate JSON</button>
        <button class="case-button info" data-action="tree">Tree View</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download JSON</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <!-- Tree View Section -->
    <div id="treeView" class="json-tree" style="display: none;">
      <h3>JSON Tree View</h3>
      <div id="treeContent"></div>
    </div>
     
{% include share-and-donation.html %}

 <div class="examples">
      <h2>Examples</h2>

      <h3>Before Beautification:</h3>
      <div class="example-text">{"name":"John","age":30,"city":"New York","hobbies":["reading","gaming"],"address":{"street":"123 Main St","zipcode":"10001"}}</div>

      <h3>After Beautification:</h3>
      <div class="example-text">{
  "name": "John",
  "age": 30,
  "city": "New York",
  "hobbies": [
    "reading",
    "gaming"
  ],
  "address": {
    "street": "123 Main St",
    "zipcode": "10001"
  }
}</div>

      <h3>After Minification:</h3>
      <div class="example-text">{"name":"John","age":30,"city":"New York","hobbies":["reading","gaming"],"address":{"street":"123 Main St","zipcode":"10001"}}</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online JSON Beautifier & Formatter Tool</h2>

    <p>Working with messy, unformatted JSON data? Our free <strong>JSON Beautifier and Formatter tool</strong> is the perfect solution for developers and data analysts. This powerful tool instantly transforms your messy JSON into clean, readable, and well-organized data with proper indentation and structure. You can also minify your JSON to reduce file size for faster API responses and data transfer. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This JSON Beautifier (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste JSON:</strong> Copy your JSON data from any source (API response, file, or database) and paste it into the large input box above.</li>
      <li><strong>Customize Formatting:</strong> Adjust the formatting options like indentation type, size, and quote style according to your preferences.</li>
      <li><strong>Beautify or Minify:</strong> Click the "Beautify JSON" button to format your data or "Minify JSON" to compress it for production use.</li>
      <li><strong>Validate & View:</strong> Use "Validate JSON" to check for errors or "Tree View" to explore your JSON structure visually.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the formatted JSON for pasting elsewhere, or use "Download" to save it as a .json file.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're working with a REST API that returns JSON data in a minified format - all on one line with no indentation. Instead of struggling to read and debug this data, you can simply paste the JSON into this tool. By selecting your preferred formatting options and clicking "Beautify JSON", the tool will automatically add proper indentation, line breaks, and structure, transforming an unreadable data blob into clean, analyzable JSON in less than a second.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Quickly format JSON responses from APIs to make them readable and debuggable.</li>
      <li><strong>Mobile App Developers:</strong> Beautify JSON configuration files and API responses for better maintenance.</li>
      <li><strong>Data Analysts:</strong> Clean and organize JSON data from various sources before analysis.</li>
      <li><strong>Backend Developers:</strong> Validate and format JSON payloads before sending or receiving them.</li>
      <li><strong>Students:</strong> Learn proper JSON structure and formatting by comparing raw and beautified versions.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between beautifying and minifying JSON?</strong><br>
      A: Beautifying adds proper indentation, line breaks, and structure to make JSON readable and maintainable. Minifying removes all unnecessary characters (spaces, line breaks) to reduce file size for faster data transfer in production environments.</p>

    <p><strong>Q: Is there a file size limit for this JSON beautifier?</strong><br>
      A: You can beautify very large JSON files, including complex API responses and database exports, without any issue. The tool is built to handle megabytes of JSON data at once.</p>

    <p><strong>Q: Is my JSON data kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The beautification happens locally on your own computer or phone. Your JSON data is never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our JSON Beautifier & Formatter?</h3>
    <p>Our <strong>online JSON beautifier</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your sensitive JSON data, API keys, and confidential information remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of JSON Beautification</h3>
    <p>JSON beautification has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>API Development:</strong> Format JSON responses to make them readable during development and testing</li>
      <li><strong>Data Analysis:</strong> Organize JSON data from various sources for better visualization and analysis</li>
      <li><strong>Debugging:</strong> Format minified JSON to identify and fix data structure issues more easily</li>
      <li><strong>Documentation:</strong> Prepare JSON examples for technical documentation with proper formatting</li>
      <li><strong>Education:</strong> Teach JSON structure and syntax with well-formatted examples</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload JSON File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a JSON file (.json or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".json,.txt">
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
      <h3 class="modal-title">Compare JSON</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original JSON</h4>
          <textarea id="originalJson" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Formatted JSON</h4>
          <textarea id="formattedJson" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const jsonInput = document.getElementById('jsonInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    const treeView = document.getElementById('treeView');
    const treeContent = document.getElementById('treeContent');
    
    // Formatting options
    const indentType = document.getElementById('indentType');
    const indentSize = document.getElementById('indentSize');
    const quoteStyle = document.getElementById('quoteStyle');
    const sortKeys = document.getElementById('sortKeys');
    const escapeUnicode = document.getElementById('escapeUnicode');
    const trailingCommas = document.getElementById('trailingCommas');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalJson = document.getElementById('originalJson');
    const formattedJson = document.getElementById('formattedJson');

    // Store original JSON for comparison
    let originalJsonContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    jsonInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleJsonAction(action);
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
      if (file.type === 'application/json' || file.name.endsWith('.json') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          jsonInput.value = e.target.result;
          updateCounts();
          showAlert('JSON file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the JSON file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a JSON or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const json = jsonInput.value;

      // Character count
      document.getElementById('charCount').textContent = json.length;

      try {
        const parsed = JSON.parse(json);
        
        // Object count
        const objectCount = countObjects(parsed);
        document.getElementById('objectCount').textContent = objectCount;
        
        // Array count
        const arrayCount = countArrays(parsed);
        document.getElementById('arrayCount').textContent = arrayCount;
        
      } catch (e) {
        document.getElementById('objectCount').textContent = '0';
        document.getElementById('arrayCount').textContent = '0';
      }

      // File size
      const fileSize = (new Blob([json]).size / 1024).toFixed(2);
      document.getElementById('fileSize').textContent = fileSize + ' KB';
    }

    function countObjects(obj) {
      let count = 0;
      if (obj && typeof obj === 'object') {
        if (!Array.isArray(obj)) {
          count++;
        }
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            count += countObjects(obj[key]);
          }
        }
      }
      return count;
    }

    function countArrays(obj) {
      let count = 0;
      if (obj && typeof obj === 'object') {
        if (Array.isArray(obj)) {
          count++;
          obj.forEach(item => {
            count += countArrays(item);
          });
        } else {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              count += countArrays(obj[key]);
            }
          }
        }
      }
      return count;
    }

    function handleJsonAction(action) {
      const json = jsonInput.value;
      
      // Store original JSON for comparison
      if (action === 'beautify' || action === 'minify') {
        originalJsonContent = json;
      }

      switch (action) {
        case 'beautify':
          try {
            const beautified = beautifyJson(json);
            jsonInput.value = beautified;
            showAlert('JSON beautified successfully!', 'success');
          } catch (e) {
            showAlert(`Error beautifying JSON: ${e.message}`, 'error');
          }
          break;

        case 'minify':
          try {
            const minified = minifyJson(json);
            jsonInput.value = minified;
            showAlert('JSON minified successfully!', 'success');
          } catch (e) {
            showAlert(`Error minifying JSON: ${e.message}`, 'error');
          }
          break;

        case 'validate':
          const validationResult = validateJson(json);
          if (validationResult.isValid) {
            showAlert('JSON is valid!', 'success');
          } else {
            showAlert(`JSON validation error: ${validationResult.error}`, 'error');
          }
          break;

        case 'tree':
          try {
            const tree = generateTreeView(json);
            treeContent.innerHTML = tree;
            treeView.style.display = 'block';
            showAlert('Tree view generated successfully!', 'success');
          } catch (e) {
            showAlert(`Error generating tree view: ${e.message}`, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(json);
          break;

        case 'download':
          downloadJson('formatted_data.json', json);
          break;

        case 'compare':
          if (!originalJsonContent) {
            showAlert('Please beautify or minify JSON first to compare.', 'error');
            return;
          }
          originalJson.value = originalJsonContent;
          formattedJson.value = json;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          jsonInput.value = '';
          originalJsonContent = '';
          treeView.style.display = 'none';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // JSON beautification function
    function beautifyJson(json) {
      const parsed = JSON.parse(json);
      const indentChar = indentType.value === 'tabs' ? '\t' : ' '.repeat(parseInt(indentSize.value));
      
      // Sort keys if requested
      if (sortKeys.value !== 'none') {
        parsed = sortObjectKeys(parsed, sortKeys.value);
      }
      
      let formatted = JSON.stringify(parsed, null, indentChar);
      
      // Handle quote style
      if (quoteStyle.value === 'single') {
        formatted = formatted.replace(/"/g, "'");
      }
      
      // Handle trailing commas
      if (trailingCommas.checked) {
        formatted = addTrailingCommas(formatted);
      }
      
      return formatted;
    }
    
    // JSON minification function
    function minifyJson(json) {
      const parsed = JSON.parse(json);
      return JSON.stringify(parsed);
    }
    
    // Sort object keys
    function sortObjectKeys(obj, order) {
      if (Array.isArray(obj)) {
        return obj.map(item => sortObjectKeys(item, order));
      } else if (obj !== null && typeof obj === 'object') {
        const sorted = {};
        const keys = Object.keys(obj);
        
        if (order === 'asc') {
          keys.sort();
        } else if (order === 'desc') {
          keys.sort().reverse();
        }
        
        keys.forEach(key => {
          sorted[key] = sortObjectKeys(obj[key], order);
        });
        
        return sorted;
      }
      return obj;
    }
    
    // Add trailing commas
    function addTrailingCommas(json) {
      return json.replace(/(\s*)([}\]])/g, function(match, whitespace, bracket) {
        // Look for the previous non-whitespace character
        const before = json.substring(0, json.lastIndexOf(match));
        const lastChar = before.trim().slice(-1);
        
        if (lastChar !== ',' && lastChar !== '{' && lastChar !== '[') {
          return ',' + whitespace + bracket;
        }
        return whitespace + bracket;
      });
    }
    
    // Simple JSON validation
    function validateJson(json) {
      try {
        JSON.parse(json);
        return {
          isValid: true
        };
      } catch (e) {
        return {
          isValid: false,
          error: e.message
        };
      }
    }
    
    // Generate tree view
    function generateTreeView(json) {
      const parsed = JSON.parse(json);
      return createTreeHtml(parsed);
    }
    
    function createTreeHtml(obj, depth = 0) {
      if (obj === null) {
        return `<span class="json-null">null</span>`;
      }
      
      if (typeof obj === 'boolean') {
        return `<span class="json-boolean">${obj}</span>`;
      }
      
      if (typeof obj === 'number') {
        return `<span class="json-number">${obj}</span>`;
      }
      
      if (typeof obj === 'string') {
        return `<span class="json-string">"${obj}"</span>`;
      }
      
      if (Array.isArray(obj)) {
        if (obj.length === 0) {
          return `[]`;
        }
        
        let html = `[<div class="json-node">`;
        obj.forEach((item, index) => {
          html += `${createTreeHtml(item, depth + 1)}${index < obj.length - 1 ? ',' : ''}<br>`;
        });
        html += `</div>]`;
        return html;
      }
      
      if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length === 0) {
          return `{}`;
        }
        
        let html = `{<div class="json-node">`;
        keys.forEach((key, index) => {
          html += `<span class="json-key">"${key}"</span>: ${createTreeHtml(obj[key], depth + 1)}${index < keys.length - 1 ? ',' : ''}<br>`;
        });
        html += `</div>}`;
        return html;
      }
      
      return '';
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('JSON copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy JSON: ' + err, 'error');
      });
    }

    function downloadJson(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('JSON downloaded successfully!', 'success');
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