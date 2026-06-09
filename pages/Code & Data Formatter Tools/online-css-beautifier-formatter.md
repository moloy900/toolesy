---
layout: default
title: "Online CSS Beautifier & Formatter — Clean & Minify CSS Code"
permalink: /online-css-beautifier-formatter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online CSS Beautifier & Formatter — Clean & Minify CSS Code</title>

<meta name="description" content="Free online CSS Beautifier & Formatter. Format, clean, beautify, and minify CSS instantly. Make your CSS optimized and production-ready in one click.">

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

  <h2>Free Online CSS Beautifier & Formatter Tool – Clean, Organize, and Optimize Your Stylesheets</h2>

  <p>Anyone who has worked with CSS for even a short time knows how quickly things can get messy. What starts as a clean stylesheet often turns into a long, tangled file filled with inconsistent spacing, repeated rules, and hard-to-read sections—especially when working with multiple developers, frameworks, or copied snippets from different sources.</p>

  <p>That’s where this <strong>CSS Beautifier and Formatter tool</strong> comes in. It helps you instantly transform disorganized or minified CSS into clean, structured, and readable code. Whether you’re cleaning up legacy styles, debugging layout issues, or preparing production-ready files, this tool saves time and removes frustration from the process.</p>

  <p>And if you need the opposite result, it can also minify your CSS to reduce file size and improve website performance. Everything happens instantly in your browser, with no uploads, no sign-ups, and complete privacy for your code.</p>

  <h3>Why CSS Formatting Actually Matters in Real Projects</h3>

  <p>CSS is one of the most important parts of any website’s frontend, but it’s also one of the easiest to mess up over time. As projects grow, stylesheets tend to expand quickly, especially when multiple developers contribute or when different components are merged together.</p>

  <p>Unformatted CSS might still work perfectly in the browser, but it becomes extremely difficult to maintain. Finding specific rules, fixing bugs, or understanding structure becomes a slow and frustrating task. This is where proper formatting becomes more than just aesthetics—it becomes a productivity tool.</p>

  <p>A well-formatted stylesheet improves readability, helps teams collaborate more effectively, and makes debugging significantly easier. Instead of scanning through endless lines of compressed code, you get a clear structure with spacing, indentation, and logical grouping of selectors.</p>

  <p>This tool helps you achieve that structure instantly without manually editing each section.</p>

  <h3>How to Use This CSS Beautifier Tool (Simple Step-by-Step Guide)</h3>

  <p>The tool is designed to be simple enough for beginners while still useful for experienced developers handling large projects.</p>

  <ul>
    <li><strong>Step 1 – Paste Your CSS Code:</strong> Copy CSS from your file, framework, or editor and paste it directly into the input area.</li>

    <li><strong>Step 2 – Choose Formatting Preferences:</strong> Select indentation style, spacing preferences, and how selectors should be separated.</li>

    <li><strong>Step 3 – Beautify or Minify:</strong> Click “Beautify CSS” to make your code readable or “Minify CSS” to compress it for production use.</li>

    <li><strong>Step 4 – Copy or Download:</strong> Once processed, you can copy the formatted code or download it as a .css file for your project.</li>
  </ul>

  <p>No installations, no plugins, and no complicated setup—just paste and process.</p>

  <h3>A Real-Life Scenario Where This Tool Saves Hours</h3>

  <p>Imagine you join a new development project and are given access to an existing codebase. The CSS file you receive is thousands of lines long, written by multiple developers over time. There is no consistent formatting, selectors are scattered, and some parts are even minified.</p>

  <p>Trying to manually clean this up would take hours, if not days. You’d need to carefully restructure everything, fix indentation, and make sense of overlapping rules.</p>

  <p>Instead, you paste the entire file into the CSS Beautifier. Within seconds, the tool organizes everything into a clean structure. Related selectors are grouped, indentation becomes consistent, and the file suddenly becomes readable.</p>

  <p>What used to look like a chaotic block of code now feels like a well-organized stylesheet that you can confidently work with.</p>

  <h3>What Makes CSS Beautification So Useful?</h3>

  <p>CSS beautification isn’t just about making code look nice—it directly improves how efficiently you can work with it.</p>

  <p>When CSS is properly formatted, you can quickly identify issues like conflicting styles, missing properties, or unnecessary duplication. It also helps reduce cognitive load, meaning your brain doesn’t have to struggle to interpret messy structure.</p>

  <p>For teams, consistent formatting ensures that everyone reads and writes code in the same way. This reduces confusion during collaboration and makes code reviews much smoother.</p>

  <h3>Who Should Use This CSS Formatter?</h3>

  <p>This tool is useful for anyone working with CSS, regardless of experience level or job role.</p>

  <ul>
    <li><strong>Frontend Developers:</strong> Clean up stylesheets from frameworks, libraries, or legacy projects.</li>

    <li><strong>Web Developers:</strong> Maintain consistent formatting across multiple projects and clients.</li>

    <li><strong>UI/UX Designers:</strong> Organize exported CSS from design tools before handoff.</li>

    <li><strong>Students and Beginners:</strong> Learn CSS structure by comparing raw and formatted versions.</li>

    <li><strong>Development Teams:</strong> Enforce consistent coding style across all team members.</li>
  </ul>

  <h3>Key Features of This CSS Beautifier & Formatter</h3>

  <p>This tool is built to handle real-world coding challenges, not just small snippets.</p>

  <ul>
    <li><strong>Instant Formatting:</strong> Large CSS files are processed quickly without delay.</li>

    <li><strong>Minify Option:</strong> Reduce file size for faster website loading in production environments.</li>

    <li><strong>Browser-Based Processing:</strong> Everything runs locally, ensuring complete privacy.</li>

    <li><strong>Handles Large Files:</strong> Works with long stylesheets, frameworks, and complex projects.</li>

    <li><strong>No Setup Required:</strong> Just paste your code and get results immediately.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What is the difference between beautifying and minifying CSS?</strong><br>
  Beautifying adds structure, spacing, and indentation to make CSS readable and easy to maintain. Minifying removes unnecessary characters like spaces and line breaks to reduce file size and improve performance.</p>

  <p><strong>Can this tool handle large CSS files?</strong><br>
  Yes. It is designed to work with large stylesheets, including full frameworks and production-level codebases.</p>

  <p><strong>Is my code safe and private?</strong><br>
  Absolutely. Your CSS never leaves your device. All processing happens directly in your browser, so nothing is uploaded or stored anywhere.</p>

  <p><strong>Does it work on mobile devices?</strong><br>
  Yes, the tool is fully responsive and works smoothly on smartphones, tablets, and desktops.</p>

  <p><strong>Do I need to sign up or pay?</strong><br>
  No. The tool is completely free to use with no registration or hidden charges.</p>

  <h3>Why This CSS Beautifier Is Different</h3>

  <p>There are many formatting tools available online, but not all of them prioritize speed, privacy, and usability. This tool is built with a focus on simplicity and security.</p>

  <p>Unlike server-based tools that upload your code for processing, this formatter works entirely in your browser. That means your proprietary stylesheets, client projects, and private code remain fully under your control.</p>

  <p>It also avoids unnecessary complexity. You don’t have to deal with confusing menus or technical configurations. The goal is simple: paste your code, format it, and continue working.</p>

  <h3>Common Use Cases of CSS Beautification</h3>

  <p>CSS formatting is used in many real-world development workflows beyond simple cleaning.</p>

  <ul>
    <li><strong>Code Maintenance:</strong> Keep long-term projects organized and easy to update.</li>

    <li><strong>Team Development:</strong> Maintain consistent styling conventions across multiple developers.</li>

    <li><strong>Debugging:</strong> Quickly locate and fix issues in messy or minified CSS.</li>

    <li><strong>Learning:</strong> Understand proper CSS structure by analyzing formatted output.</li>

    <li><strong>Code Review Preparation:</strong> Present clean, readable stylesheets during reviews.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>CSS might seem simple at first, but as projects grow, it quickly becomes one of the most complex parts of frontend development. Keeping it organized is not just about aesthetics—it directly affects productivity, collaboration, and maintainability.</p>

  <p>This CSS Beautifier & Formatter tool is designed to make that process effortless. Instead of spending time manually cleaning up code, you can instantly convert messy stylesheets into structured, readable, and professional-quality CSS.</p>

  <p>Whether you are fixing legacy code, working on a team project, or preparing production-ready files, having clean CSS makes your job easier and your workflow smoother.</p>

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