---
layout: default
title: "Online JavaScript Beautifier & Formatter | Format & Minify JS"
permalink: /online-javascript-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online JavaScript Beautifier & Formatter | Format & Minify JS</title>

<meta name="description"
  content="Free online JavaScript Beautifier & Formatter. Clean, format, and minify JS code for readability and faster performance. Perfect for developers and production-ready code.">

<meta name="keywords"
  content="javascript beautifier, js formatter, prettify javascript, minify js, javascript code formatter, js compressor, js optimizer online, clean js code, online javascript tool">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:title" content="JavaScript Beautifier & Formatter Online — Format & Minify JS Code Free">
<meta property="og:description" content="Format, beautify, and compress JavaScript instantly for clean and optimized code. Free online JS formatter tool.">
<meta property="og:url" content="https://toolesy.com/online-javascript-beautifier-formatter">
<meta property="og:site_name" content="ToolEsy">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online JavaScript Beautifier & Formatter">
<meta name="twitter:description" content="Beautify and minify JS code instantly. Make JavaScript clean, readable & production-ready.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* JavaScript Beautifier Styles */
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
  <h1>Free Online JavaScript Beautifier & Formatter</h1>
  <p class="welcome-message">Format and beautify your JavaScript code instantly with proper indentation and structure. Minify JS to reduce file size for faster loading.</p>

  <div class="converter-section">
    <h2>JavaScript Beautifier & Formatter</h2>

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
        <span>Function Count: </span>
        <span id="functionCount">0</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 KB</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input JavaScript <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="jsInput" rows="6" placeholder="Paste your JavaScript code here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".js,.txt" style="display: none;">

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
          <option value="single">Single Quotes</option>
          <option value="double">Double Quotes</option>
          <option value="auto">Auto</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">End of Line</label>
        <select id="endOfLine" class="option-select">
          <option value="lf">LF (Unix)</option>
          <option value="crlf">CRLF (Windows)</option>
          <option value="auto">Auto</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="preserveEmptyLines" checked>
          <label for="preserveEmptyLines">Preserve Empty Lines</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="addSemicolons" checked>
          <label for="addSemicolons">Add Missing Semicolons</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="beautify">Beautify JS</button>
        <button class="case-button" data-action="minify">Minify JS</button>
        <button class="case-button" data-action="validate">Validate JS</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download JS</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Beautification:</h3>
      <div class="example-text">function calculateTotal(items){let total=0;for(let i=0;i<items.length;i++){total+=items[i].price*items[i].quantity}return total}const items=[{name:"Book",price:15,quantity:2},{name:"Pen",price:2,quantity:5}];console.log("Total:",calculateTotal(items));</div>

      <h3>After Beautification:</h3>
      <div class="example-text">function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

const items = [
  { name: "Book", price: 15, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 }
];

console.log("Total:", calculateTotal(items));</div>

      <h3>After Minification:</h3>
      <div class="example-text">function calculateTotal(items){let total=0;for(let i=0;i<items.length;i++){total+=items[i].price*items[i].quantity}return total}const items=[{name:"Book",price:15,quantity:2},{name:"Pen",price:2,quantity:5}];console.log("Total:",calculateTotal(items));</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online JavaScript Beautifier & Formatter Tool – Clean, Debug, and Organize Your Code Easily</h2>

  <p>JavaScript is powerful, flexible, and everywhere on the web—but it can also get messy very quickly. If you’ve ever opened a large JS file and felt overwhelmed by a wall of unreadable code, you’re not alone. As projects grow, JavaScript files often become difficult to read due to minification, inconsistent formatting, or multiple developers working on the same codebase.</p>

  <p>This is exactly why a <strong>JavaScript Beautifier and Formatter tool</strong> is so useful. It takes messy, compressed, or poorly structured code and instantly turns it into clean, readable, and well-organized JavaScript. Whether you’re debugging, maintaining legacy code, or preparing production scripts, this tool helps you save time and reduce frustration.</p>

  <p>It also works in reverse—allowing you to minify JavaScript when you need optimized files for production environments. Everything runs directly in your browser, so your code remains private, secure, and completely under your control.</p>

  <h3>Why JavaScript Formatting Matters More Than You Think</h3>

  <p>Unlike simple static markup, JavaScript controls how websites behave. It handles user interactions, dynamic content, API requests, animations, and much more. Because of this, JavaScript files tend to grow quickly and become complex over time.</p>

  <p>When code is unformatted or minified, it may still run perfectly—but it becomes extremely difficult for humans to read. Debugging a single issue can turn into a long process of searching through compressed logic, unclear indentation, and tightly packed functions.</p>

  <p>Proper formatting solves this problem by restoring structure. Indentation, spacing, and line breaks help reveal how the code actually works. Functions become easier to follow, logic becomes clearer, and errors become easier to identify.</p>

  <p>This tool automates that process so you don’t have to manually rewrite or reorganize anything.</p>

  <h3>How to Use This JavaScript Beautifier Tool (Step-by-Step Guide)</h3>

  <p>The tool is designed for simplicity. Whether you’re a beginner or an experienced developer, you can use it without any setup.</p>

  <ul>
    <li><strong>Step 1 – Paste Your JavaScript Code:</strong> Copy your JS code from a file, framework, or browser console and paste it into the input area.</li>

    <li><strong>Step 2 – Adjust Formatting Settings:</strong> Choose indentation style, spacing rules, and quotation preferences based on your coding standards.</li>

    <li><strong>Step 3 – Beautify or Minify:</strong> Click “Beautify JS” to format your code or “Minify JS” to compress it for production use.</li>

    <li><strong>Step 4 – Copy or Download:</strong> Once processed, copy the formatted code or download it as a .js file for your project.</li>
  </ul>

  <p>No installation, no configuration, and no waiting—just instant results.</p>

  <h3>A Real-Life Example of How This Tool Helps Developers</h3>

  <p>Imagine you inherit a JavaScript file from another developer. The code is fully minified—everything is written on a single line. There are no spaces, no indentation, and no clear structure. At first glance, it looks impossible to understand.</p>

  <p>You need to fix a bug, but tracing logic in that format is slow and frustrating. Even a small change requires careful reading to avoid breaking something else.</p>

  <p>Instead of manually reformatting the file, you paste it into the JavaScript Beautifier. In seconds, the tool transforms the entire file into structured, readable code. Functions are separated, indentation is restored, and the logic becomes clear again.</p>

  <p>What was once unreadable now feels like a well-organized script that you can confidently debug and modify.</p>

  <h3>Why Clean JavaScript Improves Development Efficiency</h3>

  <p>Readable code is not just about aesthetics—it directly affects productivity. Developers spend far more time reading code than writing it, especially in large projects.</p>

  <p>When JavaScript is well-formatted, it becomes easier to understand logic flow, identify errors, and make changes without introducing new bugs. This reduces debugging time and improves overall development speed.</p>

  <p>In team environments, clean formatting also ensures consistency. When every developer follows the same structure, collaboration becomes smoother and code reviews become faster and more effective.</p>

  <h3>Who Should Use This JavaScript Beautifier Tool?</h3>

  <p>This tool is useful for anyone working with JavaScript, regardless of skill level or project size.</p>

  <ul>
    <li><strong>Frontend Developers:</strong> Format scripts from frameworks and libraries for better readability.</li>

    <li><strong>Web Developers:</strong> Clean up messy or legacy JavaScript files quickly.</li>

    <li><strong>Full Stack Developers:</strong> Debug server-side and client-side JavaScript more efficiently.</li>

    <li><strong>Students and Beginners:</strong> Learn JavaScript structure by comparing raw and formatted code.</li>

    <li><strong>Development Teams:</strong> Maintain consistent coding standards across all projects.</li>
  </ul>

  <h3>Key Features of This JavaScript Beautifier & Formatter</h3>

  <p>This tool is built to handle real-world development needs, from small scripts to large-scale applications.</p>

  <ul>
    <li><strong>Instant Formatting:</strong> Large JavaScript files are processed quickly without delay.</li>

    <li><strong>Minify Option:</strong> Reduce file size for faster loading in production environments.</li>

    <li><strong>Browser-Based Processing:</strong> All code is processed locally for maximum privacy.</li>

    <li><strong>Handles Large Files:</strong> Works with complex scripts, frameworks, and libraries.</li>

    <li><strong>No Setup Required:</strong> No installation or configuration needed—just paste and go.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What is the difference between beautifying and minifying JavaScript?</strong><br>
  Beautifying adds structure, indentation, and spacing to make code readable and maintainable. Minifying removes unnecessary characters like spaces, line breaks, and comments to reduce file size for production use.</p>

  <p><strong>Can this tool handle large JavaScript files?</strong><br>
  Yes. It is designed to handle large scripts, including full libraries and frameworks with thousands of lines of code.</p>

  <p><strong>Is my code safe and private?</strong><br>
  Absolutely. Your JavaScript is processed entirely in your browser. Nothing is uploaded or stored on any server.</p>

  <p><strong>Does it work on mobile devices?</strong><br>
  Yes, the tool is fully responsive and works smoothly on smartphones, tablets, and desktops.</p>

  <p><strong>Do I need to sign up or pay?</strong><br>
  No. The tool is completely free and requires no registration or subscription.</p>

  <h3>Why This JavaScript Beautifier Is Different</h3>

  <p>Many online tools require uploading your code to external servers, which can raise privacy concerns—especially when working with client projects or sensitive business logic.</p>

  <p>This tool avoids that completely by processing everything directly in your browser. Your code never leaves your device, ensuring full privacy and security.</p>

  <p>It is also designed to be fast and distraction-free. You don’t need to navigate complicated settings or menus. Just paste your code, format it, and continue working.</p>

  <h3>Common Use Cases of JavaScript Beautification</h3>

  <p>JavaScript formatting is used in many real-world development scenarios beyond just cleaning up code.</p>

  <ul>
    <li><strong>Code Maintenance:</strong> Keep long-term projects organized and easier to manage.</li>

    <li><strong>Debugging:</strong> Quickly identify issues in messy or minified scripts.</li>

    <li><strong>Team Collaboration:</strong> Ensure consistent formatting across developers.</li>

    <li><strong>Learning:</strong> Understand JavaScript structure more easily.</li>

    <li><strong>Code Reviews:</strong> Present clean and readable code for faster review cycles.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>JavaScript is at the heart of modern web development, but without proper formatting, even simple scripts can become difficult to manage. Clean, structured code makes development faster, debugging easier, and collaboration smoother.</p>

  <p>This JavaScript Beautifier & Formatter tool helps you achieve that instantly. Instead of wasting time manually reorganizing code, you can transform messy scripts into clean, readable JavaScript in seconds.</p>

  <p>Whether you’re fixing bugs, maintaining legacy code, or preparing production-ready files, well-formatted JavaScript always makes your job easier and your workflow more efficient.</p>

</div>



<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload JavaScript File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a JavaScript file (.js or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".js,.txt">
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
      <h3 class="modal-title">Compare JavaScript</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original JavaScript</h4>
          <textarea id="originalJs" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Formatted JavaScript</h4>
          <textarea id="formattedJs" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const jsInput = document.getElementById('jsInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Formatting options
    const indentType = document.getElementById('indentType');
    const indentSize = document.getElementById('indentSize');
    const quoteStyle = document.getElementById('quoteStyle');
    const endOfLine = document.getElementById('endOfLine');
    const preserveEmptyLines = document.getElementById('preserveEmptyLines');
    const addSemicolons = document.getElementById('addSemicolons');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalJs = document.getElementById('originalJs');
    const formattedJs = document.getElementById('formattedJs');

    // Store original JS for comparison
    let originalJsContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    jsInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleJsAction(action);
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
      if (file.type === 'application/javascript' || file.name.endsWith('.js') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          jsInput.value = e.target.result;
          updateCounts();
          showAlert('JavaScript file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the JavaScript file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a JS or TXT file.', 'error');
      }
    });

  
    function updateCounts() {
      const js = jsInput.value;

      // Character count
      document.getElementById('charCount').textContent = js.length;

      // Line count
      const lineCount = js ? js.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Function count (approximate)
      const functionCount = (js.match(/function\s+(\w+)?\s*\(/g) || []).length + 
                           (js.match(/(\w+)\s*=\s*\([^)]*\)\s*=>/g) || []).length;
      document.getElementById('functionCount').textContent = functionCount;

      // File size
      const fileSize = (new Blob([js]).size / 1024).toFixed(2);
      document.getElementById('fileSize').textContent = fileSize + ' KB';
    }

    function handleJsAction(action) {
      const js = jsInput.value;
      
      // Store original JS for comparison
      if (action === 'beautify' || action === 'minify') {
        originalJsContent = js;
      }

      switch (action) {
        case 'beautify':
          jsInput.value = beautifyJs(js);
          showAlert('JavaScript beautified successfully!', 'success');
          break;

        case 'minify':
          jsInput.value = minifyJs(js);
          showAlert('JavaScript minified successfully!', 'success');
          break;

        case 'validate':
          const validationResult = validateJs(js);
          if (validationResult.isValid) {
            showAlert('JavaScript is valid!', 'success');
          } else {
            showAlert(`JavaScript validation error: ${validationResult.error}`, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(js);
          break;

        case 'download':
          downloadJs('formatted_javascript.js', js);
          break;

        case 'compare':
          if (!originalJsContent) {
            showAlert('Please beautify or minify JavaScript first to compare.', 'error');
            return;
          }
          originalJs.value = originalJsContent;
          formattedJs.value = js;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          jsInput.value = '';
          originalJsContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // JavaScript beautification function
    function beautifyJs(js) {
      // Remove existing formatting but preserve empty lines if option is checked
      let formatted = js;
      
      if (!preserveEmptyLines.checked) {
        formatted = formatted.replace(/\s+/g, ' ').trim();
      }
      
      // Add line breaks after semicolons, braces, and keywords
      formatted = formatted.replace(/;/g, ';\n');
      formatted = formatted.replace(/{/g, ' {\n');
      formatted = formatted.replace(/}/g, '\n}\n');
      formatted = formatted.replace(/for\(/g, 'for (');
      formatted = formatted.replace(/if\(/g, 'if (');
      formatted = formatted.replace(/while\(/g, 'while (');
      formatted = formatted.replace(/else/g, '\nelse');
      
      // Split into lines
      let lines = formatted.split('\n');
      let result = [];
      let indentLevel = 0;
      const indentChar = indentType.value === 'tabs' ? '\t' : ' '.repeat(parseInt(indentSize.value));
      
      // Process each line
      for (let line of lines) {
        line = line.trim();
        
        if (line.length === 0 && !preserveEmptyLines.checked) continue;
        
        // Decrease indent after closing brace
        if (line.startsWith('}') || line.startsWith('})') || line.startsWith('];')) {
          indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add current indent
        if (line.length > 0) {
          result.push(indentChar.repeat(indentLevel) + line);
        } else {
          result.push('');
        }
        
        // Increase indent after opening brace
        if (line.endsWith('{') || line.endsWith('[') || 
            line.startsWith('if') || line.startsWith('for') || 
            line.startsWith('while') || line.startsWith('function')) {
          indentLevel++;
        }
      }
      
      // Handle quote style
      if (quoteStyle.value === 'single') {
        formatted = result.join('\n').replace(/"/g, "'");
      } else if (quoteStyle.value === 'double') {
        formatted = result.join('\n').replace(/'/g, '"');
      } else {
        formatted = result.join('\n');
      }
      
      // Handle end of line characters
      if (endOfLine.value === 'crlf') {
        formatted = formatted.replace(/\n/g, '\r\n');
      }
      
      // Add missing semicolons if enabled
      if (addSemicolons.checked) {
        formatted = addMissingSemicolons(formatted);
      }
      
      return formatted.trim();
    }
    
    // JavaScript minification function
    function minifyJs(js) {
      // Remove comments
      let minified = js.replace(/\/\*[\s\S]*?\*\//g, '');
      minified = minified.replace(/\/\/.*$/gm, '');
      
      // Remove whitespace
      minified = minified.replace(/\s+/g, ' ');
      
      // Remove spaces around operators and punctuation
      minified = minified.replace(/\s*([=+\-*\/%&|^~!<>?{}();:,])\s*/g, '$1');
      
      // Remove spaces after function names and keywords
      minified = minified.replace(/(function|if|for|while|switch|catch)\s*\(/g, '$1(');
      
      // Remove last semicolon before closing brace
      minified = minified.replace(/;}/g, '}');
      
      // Remove unnecessary spaces
      minified = minified.replace(/\s+/g, ' ');
      minified = minified.trim();
      
      return minified;
    }
    
    // Add missing semicolons
    function addMissingSemicolons(js) {
      const lines = js.split('\n');
      let result = [];
      
      for (let line of lines) {
        const trimmed = line.trim();
        
        // If line contains a statement but no semicolon, add one
        if (trimmed && 
            !trimmed.endsWith('{') && 
            !trimmed.endsWith('}') && 
            !trimmed.endsWith(';') &&
            !trimmed.startsWith('//') &&
            !trimmed.startsWith('/*') &&
            !trimmed.endsWith('*/') &&
            !trimmed.startsWith('if') &&
            !trimmed.startsWith('for') &&
            !trimmed.startsWith('while') &&
            !trimmed.startsWith('function') &&
            !trimmed.startsWith('} else') &&
            !trimmed.match(/^(var|let|const)\s+\w+\s*=\s*function/)) {
          result.push(line + ';');
        } else {
          result.push(line);
        }
      }
      
      return result.join('\n');
    }
    
    // Simple JavaScript validation
    function validateJs(js) {
      // Check for balanced braces and brackets
      let braceCount = 0;
      let bracketCount = 0;
      let parenCount = 0;
      
      for (let char of js) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (char === '[') bracketCount++;
        if (char === ']') bracketCount--;
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      
      if (braceCount !== 0) {
        return {
          isValid: false,
          error: 'Unbalanced braces'
        };
      }
      
      if (bracketCount !== 0) {
        return {
          isValid: false,
          error: 'Unbalanced brackets'
        };
      }
      
      if (parenCount !== 0) {
        return {
          isValid: false,
          error: 'Unbalanced parentheses'
        };
      }
      
      // Try to parse as JavaScript
      try {
        new Function(js);
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

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('JavaScript copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy JavaScript: ' + err, 'error');
      });
    }

    function downloadJs(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('JavaScript downloaded successfully!', 'success');
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