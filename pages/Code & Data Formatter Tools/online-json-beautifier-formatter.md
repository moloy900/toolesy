---
layout: default
title: "Online JSON Beautifier & Formatter — Clean & Format JSON"
permalink: /online-json-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online JSON Beautifier & Formatter — Clean & Format JSON</title>

<meta name="description"
  content="Free JSON Beautifier & Formatter tool online. Format and clean messy JSON, fix errors, validate structure, and minify or beautify JSON for better readability and development.">

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

    <p>Let's be honest—JSON is everywhere these days. APIs return it, databases store it, configuration files use it. But have you ever opened a JSON file that came from an API or a database export, and it was just one giant line of text? No line breaks, no indentation, just a wall of curly braces, commas, and quotes. You know the data is there. You can see the structure if you squint. But reading it feels like trying to find a specific grain of sand on a beach. Or maybe you've had the opposite problem: you're working with a beautifully formatted JSON file during development, but you need to send it over the network and it's too big. You want to minify it—remove all those spaces and line breaks—to make it smaller and faster. That's exactly why we built this <strong>JSON Beautifier and Formatter tool</strong>. Paste in your messy or minified JSON, click a button, and in less than a second you get clean, properly indented, perfectly structured data. Each nested object and array is clearly indented. You can see the hierarchy at a glance. If you need to go the other way—taking readable JSON and minifying it for production—the tool does that too, stripping out spaces and line breaks to shrink file size dramatically. It also validates your JSON (so you'll know if it's invalid before you waste time debugging), and even offers a tree view to explore complex nested structures visually. It's free. It's private (all processing happens in your browser, not on our servers). It works offline. And it will save you countless hours of squinting at unreadable data. Bookmark it. Use it daily. Thank me later.</p>

    <h3>How to Use This JSON Beautifier (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Your JSON (The Messy Stuff):</strong> Copy your JSON data from anywhere—an API response, a file, a database export, a configuration file, even a minified production JSON. Paste it into the large input box. The tool doesn't care if it's one line or thousands of lines. It doesn't care if it's pretty or ugly. Just paste it and move to the next step. (If you're not sure your JSON is valid, don't worry—the validator will catch that.)</li>
      <li><strong>Customize Formatting (Make It Yours):</strong> Everyone has preferences. Some people like 2 spaces for indentation. Others prefer 4 spaces. Some like tabs. You can choose indentation type (spaces or tabs) and indentation size (1 to 8 spaces, or tab width). You can also choose whether to keep the keys as they are or sort them alphabetically (useful for comparing two JSON files). Set it once, and the tool remembers your preferences for next time using local storage.</li>
      <li><strong>Beautify or Minify (Two Directions, One Tool):</strong> Need to format messy or minified JSON into readable data? Click "Beautify JSON." The tool will parse the JSON, add line breaks after each key-value pair, and indent nested objects and arrays. Need to compress readable JSON for production? Click "Minify JSON." The tool will remove all unnecessary spaces and line breaks, shrinking file size dramatically (often by 50-70%). Both operations are nearly instant, even on large files.</li>
      <li><strong>Validate & View (Check Your Work):</strong> Not sure if your JSON is valid? Click "Validate JSON." The tool will check for syntax errors—missing commas, trailing commas, unquoted keys, duplicate keys—and tell you exactly where the error is. This alone can save hours of debugging. For complex nested JSON, click "Tree View" to see your data as an expandable/collapsible tree. It's much easier to explore deep structures this way than by reading raw text.</li>
      <li><strong>Copy or Download (Use It Where You Need):</strong> Once your JSON is formatted or minified, click "Copy" to grab it to your clipboard. Paste it into your code, your email, your documentation, or anywhere else. Or click "Download" to save it as a .json file directly to your computer. No more selecting text, scrolling, and accidentally missing the last brace.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet Sarah):</h3>
    <p>Sarah is a front-end developer working on a dashboard that displays data from a dozen different APIs. One of the APIs returns a large JSON response with customer data—orders, preferences, history, and more. The response is minified (no spaces, no line breaks) to save bandwidth, which is great for performance. But Sarah needs to debug why a certain customer's data isn't displaying correctly. She can't read the minified response in the browser's network tab. It's just a long string of text.</p>
    <p>Sarah copies the minified JSON from the network tab and opens our JSON Beautifier. She pastes it into the input box, sets indentation to 2 spaces, and clicks "Beautify JSON." In less than a second, the tool produces a beautifully formatted JSON structure with clear indentation. She can now see the hierarchy: the customer object, the nested orders array, the preferences object. She finds the problematic field, sees that it's null when it should be an array, and fixes the API call. Total time spent: 2 minutes. Without the beautifier, she would have spent 20 minutes trying to read the minified JSON or formatted it manually.</p>
    <p><strong>Another example:</strong> David is a backend developer writing an API. He needs to send a JSON configuration file to a client, but he wants it to be human-readable so the client can modify it. He writes the JSON with proper indentation, but before sending, he uses the minifier to create a production version (smaller, faster) and keeps the beautified version for development. The tool handles both.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Web Developers (Frontend & Backend):</strong> You work with JSON constantly. API requests and responses, configuration files, data storage. The beautifier makes JSON readable so you can debug faster. The minifier makes it smaller for production. The validator catches syntax errors before they break your app. This is an essential tool in any web developer's toolbox.</li>
      <li><strong>Mobile App Developers (iOS, Android, React Native):</strong> Your apps fetch JSON from APIs. When you're debugging network issues or parsing errors, reading minified JSON is a nightmare. Paste it into the beautifier, format it, and see the structure clearly. You can also use the tree view to explore nested objects without getting lost.</li>
      <li><strong>Data Analysts & Data Engineers:</strong> You work with JSON data from various sources—API exports, database dumps, log files. The data is often nested and complex. The beautifier helps you understand the structure before you write queries or transformations. The tree view is especially useful for exploring deep nesting.</li>
      <li><strong>API Developers & Technical Writers:</strong> When documenting an API, you need to show example JSON responses. Writing examples by hand is tedious and error-prone. Instead, take a real API response, paste it into the beautifier, and copy the formatted version into your documentation. It's clean, accurate, and professional.</li>
      <li><strong>Students Learning JSON:</strong> JSON is a core data format in modern development. You're learning how objects, arrays, and nesting work. Paste messy JSON into the beautifier and see how proper indentation reveals the structure. Compare the raw and beautified versions to understand why formatting matters. The validator will also teach you common syntax errors.</li>
      <li><strong>DevOps & System Administrators:</strong> You work with JSON configuration files for tools like VS Code, Prettier, ESLint, Terraform, and cloud services. These files are often minified or poorly formatted. Run them through the beautifier to make them readable and maintainable. Then minify them for production deployments.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>What is the difference between beautifying and minifying JSON? When should I use each?</strong><br>
      Great question. <strong>Beautifying</strong> adds line breaks, indentation, and spaces to make JSON readable for humans. Use this during development, for debugging, when documenting, or when you need to understand a complex JSON structure. <strong>Minifying</strong> does the opposite—it removes unnecessary spaces and line breaks to reduce file size. Use this for production APIs, for data transfer over networks, or for storage where every byte counts. A minified JSON file is often 50-70% smaller than its beautified version. The tool supports both, so you can go back and forth as needed.</p>

    <p><strong>Is there a file size limit? Can I beautify a huge JSON file?</strong><br>
      The tool can handle very large JSON files—megabytes of data, tens of thousands of lines. However, if you paste a massive file (like 50 MB of JSON), your browser might slow down because all the processing happens locally. For typical use—API responses, configuration files, data exports—you won't hit any limits. If you're working with truly enormous files, consider using a command-line tool or splitting the file. But for 99% of real-world JSON, the tool works perfectly.</p>

    <p><strong>Is my JSON data kept private? Do you see my data?</strong><br>
      Absolutely, positively, 100% private. The JSON beautifier runs entirely in your browser using JavaScript. Your data never leaves your computer. When you paste JSON into the input box, it stays there. When you click "Beautify" or "Minify," the transformation happens locally. No data is sent to any server. We can't see your data. We don't store your data. You can prove this by disconnecting your internet after the page loads—the tool still works. That's how local it is. If you're working with sensitive data (API keys, customer information, internal configurations), this tool is safe to use.</p>

    <p><strong>What does "Validate JSON" do? How is it different from beautifying?</strong><br>
      Beautifying assumes your JSON is valid and just formats it. Validating <em>checks</em> if your JSON is valid first. It looks for common syntax errors: missing commas, trailing commas (invalid in strict JSON, though some parsers allow them), unquoted keys (invalid), duplicate keys (allowed but often a mistake), and mismatched brackets/braces. The validator will tell you the line and column where the error occurred, and often suggest a fix. This is incredibly useful when you're writing JSON by hand or when you receive JSON from an unreliable source. Don't waste time debugging a syntax error manually—let the validator find it for you.</p>

    <p><strong>What is the Tree View? How does it help?</strong><br>
      Tree View is a visual representation of your JSON as an expandable/collapsible tree. Instead of reading raw text, you see objects as folders, arrays as lists, and values as leaves. You can expand and collapse nodes to focus on specific parts of the data. This is especially useful for deeply nested JSON (like API responses with 5+ levels of nesting). The tree view makes it easy to see the overall structure without getting lost in the details. It's also great for teaching JSON to beginners who struggle with bracket matching.</p>

    <p><strong>Can I use this tool on my mobile phone or tablet?</strong><br>
      Yes, it's fully responsive. The input box resizes to fit your screen. Buttons are big enough to tap. The copy and download functions work on mobile too (downloading a file on a phone saves it to your downloads folder or offers to share it). The tree view works on touch devices—tap to expand/collapse. However, editing large JSON files on a tiny screen is not the greatest experience—use a laptop or desktop if you can. For quick checks of small JSON snippets, mobile works fine.</p>

    <p><strong>Do I need to create an account or pay for this?</strong><br>
      No. Never. This is completely free. There's no "premium version" with faster processing or larger file limits. There's no "sign up to unlock minification." There's no "free trial" that asks for your credit card. Just a tool that works, forever, at no cost. If you want to share it with a friend or colleague, go ahead. If you want to bookmark it and use it every day, even better. Free means free.</p>

    <p><strong>What does "sort keys alphabetically" do? Why would I want that?</strong><br>
      By default, the beautifier preserves the original order of keys in objects. But if you enable "sort keys alphabetically," it will reorder all keys in every object (at all nesting levels) alphabetically. Why would you want this? It's useful when comparing two JSON files—if both have keys sorted, the differences are easier to spot. It's also useful for generating consistent output (e.g., for tests or documentation). However, be aware: in JSON, object key order is not guaranteed by the specification, so most parsers don't care. But if your application relies on key order (some do), don't use this feature. Use it only for analysis, not for production output.</p>

    <h3>Why Choose Our JSON Beautifier & Formatter (Over Others)?</h3>
    <p>There are a lot of JSON formatters online. I've used many of them. Here's what sets this one apart. <strong>Privacy first.</strong> Most online tools upload your JSON to their server, which means you're giving them your data. Maybe they don't do anything bad with it, but why take the risk? Our tool processes everything locally. <strong>Offline capable.</strong> Once the page loads, you can disconnect from the internet and it still works. That's rare. <strong>Dual mode (beautify + minify).</strong> Many tools only do one. <strong>Built-in validator.</strong> Catches syntax errors instantly. <strong>Tree view.</strong> Visual exploration of nested data. <strong>Customizable.</strong> Indentation type, size, key sorting. <strong>Fast.</strong> Even large files format in under a second. <strong>Clean output.</strong> The formatted JSON is not just technically correct—it's human-readable. Proper nesting. Consistent spacing. And it's free. No hidden costs. No "pro" features locked behind a paywall. Just a solid, reliable tool that does JSON formatting, validation, and visualization better than most paid alternatives.</p>

    <h3>Common Applications of JSON Beautification (Real Use Cases):</h3>
    <ul>
      <li><strong>API Development & Debugging:</strong> You're building or consuming a REST API. The responses come back minified. Copy the response from the network tab, paste it into the beautifier, and suddenly you can see the data structure. Find missing fields, unexpected types, or nested objects. Debug faster.</li>
      <li><strong>Configuration File Management:</strong> Tools like VS Code, Prettier, ESLint, and many cloud services use JSON for configuration. These files are often edited by hand. Run them through the beautifier to keep them readable. Use the validator to catch missing commas before they break your tool.</li>
      <li><strong>Data Analysis & Exploration:</strong> You've exported data from a database or API as JSON. It's deeply nested and hard to understand. Use the beautifier to format it, then use the tree view to explore the structure. Identify which parts you need for analysis and write your queries accordingly.</li>
      <li><strong>Documentation Generation:</strong> You're writing API documentation and need to show example JSON responses. Take a real response, paste it into the beautifier, format it, and copy it into your docs. It's accurate, properly formatted, and much easier than writing examples by hand.</li>
      <li><strong>Teaching & Learning:</strong> You're teaching JSON to students. They often struggle with nested structures. Use the tree view to show how objects and arrays nest. Use the beautifier to demonstrate why formatting matters. Compare invalid JSON (with a missing comma) to valid JSON after fixing.</li>
      <li><strong>Production Optimization:</strong> You have a JSON file that's served to thousands of users. It's currently beautified (with spaces and line breaks). Run it through the minifier to remove all unnecessary characters. The file size drops dramatically, and your users get faster downloads. Keep the beautified version for development.</li>
    </ul>

    <h3>Understanding JSON Formatting (Why It Matters):</h3>
    <p>JSON formatting is not just about aesthetics—though that matters too. Here's why good formatting is essential when working with JSON. <strong>Debugging:</strong> When a JSON response is minified, errors are hard to spot. A missing bracket or extra comma is invisible in a wall of text. Beautified JSON makes these errors obvious. <strong>Collaboration:</strong> When teams share JSON configuration or data files, consistent formatting reduces misunderstandings. Everyone can read and edit the file without friction. <strong>Version control:</strong> If you store JSON in Git, minified JSON produces unreadable diffs. Beautified JSON shows exactly what changed—which key was added, which value was modified. <strong>Learning:</strong> For developers learning JSON, well-formatted examples are essential. The indentation reveals the nesting structure that's invisible in minified form.</p>

    <h3>Common JSON Syntax Errors (And How to Fix Them):</h3>
    <p>The validator catches these automatically, but it's helpful to know what you're looking for. <strong>Trailing commas:</strong> JSON does not allow commas after the last item in an object or array. `{"a":1, "b":2,}` is invalid (the comma after 2 is the problem). <strong>Unquoted keys:</strong> JSON requires double quotes around keys. `{a:1}` is invalid; `{"a":1}` is valid. <strong>Single quotes:</strong> JSON requires double quotes for strings and keys. `{'a':1}` is invalid; `{"a":1}` is valid. <strong>Missing commas:</strong> Between items in objects and arrays, commas are required. `{"a":1 "b":2}` is missing a comma after 1. <strong>Extra or missing braces/brackets:</strong> Every `{` must have a matching `}`, every `[` must have a matching `]`. The validator will tell you if counts don't match. <strong>Comments:</strong> JSON does not allow comments. `/* comment */` or `// comment` are invalid. If you need comments, use JSON with Comments (JSONC) format, which is different.</p>

    <h3>One Final Thought (JSON Doesn't Have to Be Painful):</h3>
    <p>JSON is the language of modern data exchange. APIs, configs, databases—they all speak JSON. But that doesn't mean you have to suffer through reading minified, unformatted, or invalid JSON. The beautifier, minifier, validator, and tree view in this tool turn JSON from a source of frustration into a source of clarity. Next time you're staring at a wall of JSON text with no line breaks, or you're trying to find a syntax error in a configuration file, or you're trying to understand a deeply nested API response, don't struggle. Just paste it into this tool. Format it. Validate it. Explore it in tree view. Then copy it and get back to work. Your eyes—and your sanity—will thank you.</p>


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