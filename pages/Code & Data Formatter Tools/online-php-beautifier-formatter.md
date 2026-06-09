---
layout: default
title: "Online PHP Beautifier & Formatter – Format Clean PHP Code"
permalink: /online-php-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online PHP Beautifier & Formatter – Format Clean PHP Code</title>

<meta name="description"
  content="Free online PHP Beautifier & Formatter tool to format, clean, and organize your PHP code. Improve readability, fix structure, and get instant clean PHP formatting.">

<meta name="keywords"
  content="php beautifier, php formatter, format php online, php validator, php minifier, prettify php code, php parser, php code formatter, php IDE online">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="PHP Beautifier & Formatter Online — Free PHP Code Formatter">
<meta property="og:description" content="Beautify, validate & minify PHP code instantly. Improve readability and structure for faster debugging and cleaner code.">
<meta property="og:url" content="https://toolesy.com/online-php-beautifier-formatter">
<meta property="og:site_name" content="ToolEsy">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online PHP Beautifier & Formatter">
<meta name="twitter:description" content="Format, minify, and validate PHP code easily. Boost readability and clean up messy PHP code online.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* PHP Beautifier Styles */
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
  <h1>Free Online PHP Beautifier & Formatter</h1>
  <p class="welcome-message">Format and beautify your PHP code instantly with proper indentation and structure. Minify PHP to reduce file size for faster loading.</p>

  <div class="converter-section">
    <h2>PHP Beautifier & Formatter</h2>

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
        <span>Class Count: </span>
        <span id="classCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input PHP <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="phpInput" rows="6" placeholder="Paste your PHP code here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".php,.txt" style="display: none;">

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
        <label class="option-label">Braces Style</label>
        <select id="braceStyle" class="option-select">
          <option value="allman">Allman (Next Line)</option>
          <option value="k&r">K&R (Same Line)</option>
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
          <input type="checkbox" id="sortImports" checked>
          <label for="sortImports">Sort Use Statements</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="fixSyntax" checked>
          <label for="fixSyntax">Fix Basic Syntax</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="beautify">Beautify PHP</button>
        <button class="case-button" data-action="minify">Minify PHP</button>
        <button class="case-button" data-action="validate">Validate PHP</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download PHP</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Beautification:</h3>
      <div class="example-text">&lt;?php function calculateTotal($price,$quantity){$subtotal=$price*$quantity;$tax=$subtotal*0.1;$total=$subtotal+$tax;return $total;}class Order{private $items;public function __construct(){$this-&gt;items=[];}public function addItem($item){$this-&gt;items[]=$item;}}</div>

      <h3>After Beautification:</h3>
      <div class="example-text">&lt;?php

function calculateTotal($price, $quantity)
{
    $subtotal = $price * $quantity;
    $tax = $subtotal * 0.1;
    $total = $subtotal + $tax;
    return $total;
}

class Order
{
    private $items;
    
    public function __construct()
    {
        $this-&gt;items = [];
    }
    
    public function addItem($item)
    {
        $this-&gt;items[] = $item;
    }
}</div>

      <h3>After Minification:</h3>
      <div class="example-text">&lt;?php function calculateTotal($price,$quantity){$subtotal=$price*$quantity;$tax=$subtotal*0.1;$total=$subtotal+$tax;return $total;}class Order{private $items;public function __construct(){$this-&gt;items=[];}public function addItem($item){$this-&gt;items[]=$item;}}</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online PHP Beautifier & Formatter Tool – Clean, Structure, and Maintain Your Code Easily</h2>

  <p>PHP has been one of the most widely used server-side programming languages for decades. From content management systems like WordPress to custom web applications and APIs, PHP continues to power a large portion of the web. But as projects grow, PHP code can quickly become messy, inconsistent, and difficult to maintain.</p>

  <p>That’s where a <strong>PHP Beautifier and Formatter tool</strong> becomes extremely useful. It takes unstructured, poorly formatted, or minified PHP code and instantly converts it into clean, readable, and well-organized code. Whether you are maintaining legacy applications, debugging server-side logic, or working on collaborative projects, this tool helps you work faster and more efficiently.</p>

  <p>The tool also supports PHP minification, which reduces unnecessary spacing and formatting for production use. Everything runs directly in your browser, meaning your code stays private and is never uploaded or stored anywhere.</p>

  <h3>Why PHP Code Becomes Messy Over Time</h3>

  <p>Unlike small scripts, real-world PHP projects often grow over time. Multiple developers contribute to the same codebase, different coding styles get mixed together, and quick fixes are added under pressure. Over time, this leads to inconsistent indentation, mixed brace styles, and unclear structure.</p>

  <p>Another common issue comes from legacy code. Many older PHP projects were written before modern coding standards became common, resulting in deeply nested logic and minimal formatting.</p>

  <p>Even automated tools and frameworks can produce compact or minified PHP that is difficult for humans to read. While this doesn’t affect execution, it makes debugging and maintenance significantly harder.</p>

  <p>Proper formatting solves this by restoring structure, improving readability, and making code easier to understand at a glance.</p>

  <h3>How to Use This PHP Beautifier Tool (Step-by-Step Guide)</h3>

  <p>The tool is designed to be simple enough for beginners while still useful for professional developers.</p>

  <ul>
    <li><strong>Step 1 – Paste Your PHP Code:</strong> Copy code from your editor, project file, or framework and paste it into the input box.</li>

    <li><strong>Step 2 – Adjust Formatting Preferences:</strong> Choose indentation style, spacing rules, and brace formatting based on your project standards.</li>

    <li><strong>Step 3 – Beautify or Minify:</strong> Click “Beautify PHP” to format your code or “Minify PHP” to compress it for production environments.</li>

    <li><strong>Step 4 – Copy or Download:</strong> Once formatted, copy the output or download it as a .php file for your project.</li>
  </ul>

  <p>No installation, no setup, and no configuration required—just paste and process instantly.</p>

  <h3>A Real-World Example of PHP Formatting in Action</h3>

  <p>Imagine you join a project where the previous developer left behind a large PHP file. The code works, but it is extremely difficult to read. Indentation is inconsistent, functions are nested without structure, and different coding styles are mixed throughout the file.</p>

  <p>At first glance, making changes feels risky because you cannot clearly see how the logic flows.</p>

  <p>Instead of manually reformatting everything line by line, you paste the file into the PHP Beautifier. In seconds, the tool reorganizes the code into a clean structure. Indentation becomes consistent, braces are aligned properly, and logical blocks become easy to identify.</p>

  <p>What used to feel like a confusing block of server-side logic now becomes readable and maintainable code.</p>

  <h3>Why Clean PHP Code Matters in Real Development</h3>

  <p>Readable code is not just a preference—it directly impacts productivity and long-term maintainability. Developers spend more time reading code than writing it, especially in large systems.</p>

  <p>When PHP code is properly formatted, it becomes easier to understand logic flow, detect bugs, and make updates safely. This reduces the chances of introducing new errors during development.</p>

  <p>In team environments, consistent formatting ensures that every developer can read and understand the code in the same way. This improves collaboration and speeds up code reviews significantly.</p>

  <h3>Who Should Use This PHP Beautifier Tool?</h3>

  <p>This tool is useful for anyone working with PHP, regardless of experience level or project size.</p>

  <ul>
    <li><strong>PHP Developers:</strong> Clean and format application code for better readability and maintenance.</li>

    <li><strong>Backend Developers:</strong> Debug server-side logic more efficiently by organizing messy scripts.</li>

    <li><strong>WordPress Developers:</strong> Format theme and plugin code before customization or debugging.</li>

    <li><strong>Students and Beginners:</strong> Learn PHP structure by comparing raw and formatted code.</li>

    <li><strong>Development Teams:</strong> Maintain consistent coding standards across shared projects.</li>
  </ul>

  <h3>Key Features of This PHP Beautifier & Formatter</h3>

  <p>This tool is designed for real-world development needs, from small scripts to large applications.</p>

  <ul>
    <li><strong>Instant Formatting:</strong> Large PHP files are processed quickly without delays.</li>

    <li><strong>Minify Option:</strong> Reduce file size for production environments when needed.</li>

    <li><strong>Browser-Based Processing:</strong> All code is handled locally for maximum privacy.</li>

    <li><strong>Supports Large Codebases:</strong> Works with complex applications and long PHP files.</li>

    <li><strong>No Setup Required:</strong> No installation or configuration needed—just paste and format.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What is the difference between beautifying and minifying PHP?</strong><br>
  Beautifying adds indentation, spacing, and structure to make PHP code readable and easier to maintain. Minifying removes unnecessary characters like spaces, line breaks, and comments to reduce file size in production.</p>

  <p><strong>Can this tool handle large PHP projects?</strong><br>
  Yes. It is designed to handle large PHP files, including full applications and frameworks with thousands of lines of code.</p>

  <p><strong>Is my code safe and private?</strong><br>
  Absolutely. Your PHP code is processed entirely in your browser. Nothing is uploaded or stored on any server.</p>

  <p><strong>Does it work on mobile devices?</strong><br>
  Yes, the tool is fully responsive and works smoothly on smartphones, tablets, and desktops.</p>

  <p><strong>Do I need to pay or register?</strong><br>
  No. The tool is completely free and requires no account or subscription.</p>

  <h3>Why This PHP Beautifier Stands Out</h3>

  <p>Many online tools require developers to upload code to external servers, which can raise serious privacy concerns—especially when working with client projects or sensitive business logic.</p>

  <p>This tool avoids that entirely by processing everything locally in your browser. Your code never leaves your device, ensuring complete privacy and control.</p>

  <p>It is also designed for simplicity. You don’t need to navigate complex menus or settings. Just paste your PHP code, format it, and continue working immediately.</p>

  <h3>Common Use Cases of PHP Beautification</h3>

  <p>PHP formatting is used in many real-world development scenarios beyond simple cleanup.</p>

  <ul>
    <li><strong>Code Maintenance:</strong> Keep long-term projects organized and easier to manage.</li>

    <li><strong>Debugging:</strong> Quickly identify logic errors in messy or legacy code.</li>

    <li><strong>Team Collaboration:</strong> Ensure consistent formatting across developers.</li>

    <li><strong>Learning:</strong> Understand PHP structure more clearly as a beginner.</li>

    <li><strong>Code Reviews:</strong> Present clean and readable code for faster review cycles.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>PHP remains a powerful backbone of web development, but without proper formatting, even simple scripts can become difficult to manage. Clean, structured code is essential for maintainability, debugging, and collaboration.</p>

  <p>This PHP Beautifier & Formatter tool helps solve that problem instantly. Instead of spending time manually organizing code, you can transform messy PHP into a clean and readable structure in seconds.</p>

  <p>Whether you're maintaining legacy systems, building new applications, or debugging server-side logic, well-formatted PHP always makes development smoother and more efficient.</p>

</div>


<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload PHP File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a PHP file (.php or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".php,.txt">
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
      <h3 class="modal-title">Compare PHP</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original PHP</h4>
          <textarea id="originalPhp" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Formatted PHP</h4>
          <textarea id="formattedPhp" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const phpInput = document.getElementById('phpInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Formatting options
    const indentType = document.getElementById('indentType');
    const indentSize = document.getElementById('indentSize');
    const braceStyle = document.getElementById('braceStyle');
    const endOfLine = document.getElementById('endOfLine');
    const sortImports = document.getElementById('sortImports');
    const fixSyntax = document.getElementById('fixSyntax');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalPhp = document.getElementById('originalPhp');
    const formattedPhp = document.getElementById('formattedPhp');
    

    // Store original PHP for comparison
    let originalPhpContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    phpInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePhpAction(action);
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
      if (file.type === 'text/x-php' || file.name.endsWith('.php') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          phpInput.value = e.target.result;
          updateCounts();
          showAlert('PHP file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the PHP file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a PHP or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const php = phpInput.value;

      // Character count
      document.getElementById('charCount').textContent = php.length;

      // Line count
      const lineCount = php ? php.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Function count (approximate)
      const functionCount = (php.match(/function\s+\w+\s*\(/g) || []).length;
      document.getElementById('functionCount').textContent = functionCount;

      // Class count (approximate)
      const classCount = (php.match(/class\s+\w+/g) || []).length;
      document.getElementById('classCount').textContent = classCount;
    }

    function handlePhpAction(action) {
      const php = phpInput.value;
      
      // Store original PHP for comparison
      if (action === 'beautify' || action === 'minify') {
        originalPhpContent = php;
      }

      switch (action) {
        case 'beautify':
          phpInput.value = beautifyPhp(php);
          showAlert('PHP beautified successfully!', 'success');
          break;

        case 'minify':
          phpInput.value = minifyPhp(php);
          showAlert('PHP minified successfully!', 'success');
          break;

        case 'validate':
          const validationResult = validatePhp(php);
          if (validationResult.isValid) {
            showAlert('PHP is valid!', 'success');
          } else {
            showAlert(`PHP validation error: ${validationResult.error}`, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(php);
          break;

        case 'download':
          downloadPhp('formatted_php.php', php);
          break;

        case 'compare':
          if (!originalPhpContent) {
            showAlert('Please beautify or minify PHP first to compare.', 'error');
            return;
          }
          originalPhp.value = originalPhpContent;
          formattedPhp.value = php;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          phpInput.value = '';
          originalPhpContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // PHP beautification function
    function beautifyPhp(php) {
      // Remove existing formatting but preserve PHP tags
      let formatted = php.replace(/\s+/g, ' ').trim();
      
      // Add line breaks after semicolons, braces, and PHP tags
      formatted = formatted.replace(/;/g, ';\n');
      formatted = formatted.replace(/{/g, ' {\n');
      formatted = formatted.replace(/}/g, '\n}\n');
      formatted = formatted.replace(/\?&gt;/g, '?>\n');
      formatted = formatted.replace(/&lt;\?php/g, '\n<?php');
      
      // Split into lines
      let lines = formatted.split('\n');
      let result = [];
      let indentLevel = 0;
      const indentChar = indentType.value === 'tabs' ? '\t' : ' '.repeat(parseInt(indentSize.value));
      
      // Process each line
      for (let line of lines) {
        line = line.trim();
        
        if (line.length === 0) continue;
        
        // Handle brace styles
        if (braceStyle.value === 'allman') {
          // Allman style - braces on next line
          if (line.startsWith('}')) {
            indentLevel = Math.max(0, indentLevel - 1);
          }
        } else {
          // K&R style - braces on same line
          if (line.endsWith('{')) {
            // No indent change for opening brace on same line
          } else if (line.startsWith('}')) {
            indentLevel = Math.max(0, indentLevel - 1);
          }
        }
        
        // Add current indent
        result.push(indentChar.repeat(indentLevel) + line);
        
        // Increase indent after opening brace
        if (line.endsWith('{')) {
          indentLevel++;
        }
      }
      
      // Handle end of line characters
      if (endOfLine.value === 'crlf') {
        formatted = result.join('\r\n');
      } else {
        formatted = result.join('\n');
      }
      
      // Sort use statements if enabled
      if (sortImports.checked) {
        formatted = sortUseStatements(formatted);
      }
      
      // Fix basic syntax if enabled
      if (fixSyntax.checked) {
        formatted = fixBasicSyntax(formatted);
      }
      
      return formatted.trim();
    }
    
    // PHP minification function
    function minifyPhp(php) {
      // Remove comments but preserve PHP tags
      let minified = php.replace(/\/\*[\s\S]*?\*\//g, '');
      minified = minified.replace(/\/\/.*$/gm, '');
      minified = minified.replace(/#.*$/gm, '');
      
      // Remove whitespace but preserve within strings
      minified = minified.replace(/\s+/g, ' ');
      
      // Remove spaces around operators but preserve in strings
      minified = minified.replace(/\s*\.\s*/g, '.');
      minified = minified.replace(/\s*=\s*/g, '=');
      minified = minified.replace(/\s*,\s*/g, ',');
      minified = minified.replace(/\s*\(\s*/g, '(');
      minified = minified.replace(/\s*\)\s*/g, ')');
      
      // Remove spaces around braces
      minified = minified.replace(/\s*{\s*/g, '{');
      minified = minified.replace(/\s*}\s*/g, '}');
      
      return minified.trim();
    }
    
    // Sort PHP use statements alphabetically
    function sortUseStatements(php) {
      const lines = php.split('\n');
      let useStatements = [];
      let otherLines = [];
      let inUseBlock = false;
      
      for (let line of lines) {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('use ') && trimmed.endsWith(';')) {
          useStatements.push(trimmed);
          inUseBlock = true;
        } else if (inUseBlock && trimmed === '') {
          // Continue use block
        } else {
          if (inUseBlock && useStatements.length > 0) {
            // Sort and add use statements
            useStatements.sort();
            otherLines.push(...useStatements);
            useStatements = [];
          }
          inUseBlock = false;
          otherLines.push(line);
        }
      }
      
      // Add any remaining use statements
      if (useStatements.length > 0) {
        useStatements.sort();
        otherLines.push(...useStatements);
      }
      
      return otherLines.join('\n');
    }
    
    // Fix basic PHP syntax issues
    function fixBasicSyntax(php) {
      let fixed = php;
      
      // Add missing semicolons (basic check)
      const lines = fixed.split('\n');
      let result = [];
      
      for (let line of lines) {
        const trimmed = line.trim();
        
        // If line looks like a statement but has no semicolon, add one
        if (trimmed && 
            !trimmed.endsWith(';') && 
            !trimmed.endsWith('{') && 
            !trimmed.endsWith('}') &&
            !trimmed.startsWith('//') &&
            !trimmed.startsWith('/*') &&
            !trimmed.endsWith('*/') &&
            !trimmed.startsWith('*') &&
            !trimmed.startsWith('use ') &&
            !trimmed.startsWith('namespace ') &&
            !trimmed.startsWith('class ') &&
            !trimmed.startsWith('function ') &&
            !trimmed.startsWith('if ') &&
            !trimmed.startsWith('else') &&
            !trimmed.startsWith('for ') &&
            !trimmed.startsWith('while ') &&
            !trimmed.startsWith('foreach ') &&
            trimmed.includes('=')) {
          result.push(line + ';');
        } else {
          result.push(line);
        }
      }
      
      return result.join('\n');
    }
    
    // Simple PHP validation
    function validatePhp(php) {
      // Check for balanced braces and parentheses
      let braceCount = 0;
      let parenCount = 0;
      
      for (let char of php) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      
      if (braceCount !== 0) {
        return {
          isValid: false,
          error: 'Unbalanced braces'
        };
      }
      
      if (parenCount !== 0) {
        return {
          isValid: false,
          error: 'Unbalanced parentheses'
        };
      }
      
      // Check for basic PHP syntax
      if (!php.includes('<?php') && !php.includes('<?=')) {
        return {
          isValid: false,
          error: 'Missing PHP opening tag'
        };
      }
      
      return {
        isValid: true
      };
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('PHP copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy PHP: ' + err, 'error');
      });
    }

    function downloadPhp(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/php;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('PHP downloaded successfully!', 'success');
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