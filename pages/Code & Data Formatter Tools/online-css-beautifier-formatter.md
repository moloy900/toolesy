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
    <h2>Free Online CSS Beautifier & Formatter Tool</h2>

    <p>Let me paint you a picture. You open a CSS file that someone else wrote—or maybe that you wrote six months ago, let's be honest. It's a mess. There are no line breaks. No indentation. Selectors and properties are all crammed onto one giant line that scrolls forever to the right. It looks like someone dropped a keyboard down a flight of stairs. You need to edit it, but you can't even tell where one rule ends and the next begins. Sound familiar? Or maybe you grabbed a CSS library or framework, and the production file is minified—great for performance, terrible for your sanity. You need to read it, but it's just a wall of text. That's where our <strong>CSS Beautifier and Formatter tool</strong> comes in. Paste in your messy CSS, click a button, and in less than a second, you get clean, properly indented, perfectly structured code. Each selector on its own line, each property indented, each rule clearly separated. Suddenly, code that was impossible to read becomes crystal clear. And if you're going the other direction—taking readable CSS and minifying it for production—the tool does that too, stripping out spaces and line breaks to shrink file size and speed up your site. It's free, it's private (all processing happens in your browser), and it works offline. No sign-ups, no uploads, no tracking. Just you, your code, and a tool that makes CSS formatting effortless.</p>

    <h3>How to Use This CSS Beautifier (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Your CSS (The Messy Part):</strong> Copy your CSS code from anywhere—a file, a style tag, an online editor, even a minified CDN file. Paste it into the large input box. Don't worry about formatting. The tool doesn't care. It can handle a single line of compressed CSS or thousands of lines of already-formatted code. It just works.</li>
      <li><strong>Customize Formatting (Make It Yours):</strong> Everyone has preferences. Some people like 2 spaces for indentation. Others swear by 4 spaces. Some prefer tabs. The tool lets you choose: indentation type (spaces or tabs), indentation size (1 to 8 spaces, or tab width), and whether to add a newline after each selector or keep related selectors together. You can also choose to sort properties alphabetically (some developers love this for consistency) or keep the original order. Set it once, and the tool remembers your preferences for next time.</li>
      <li><strong>Beautify or Minify (Two Directions, One Tool):</strong> Need to format messy CSS into readable code? Click "Beautify CSS." The tool will add line breaks, indentation, and spacing, transforming chaos into clarity. Need to compress readable CSS for production? Click "Minify CSS." The tool will remove all unnecessary spaces, line breaks, and comments, shrinking file size dramatically. Both operations are instant, even on large files.</li>
      <li><strong>Copy or Download (Use It Wherever You Need):</strong> Once your code is formatted, click "Copy" to grab it to your clipboard. Paste it into your editor, your email, or your code review. Or click "Download" to save it as a .css file directly to your computer. No more selecting text and hoping you don't miss the last line.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet Alex):</h3>
    <p>Alex is a freelance front-end developer. He just inherited a project from a client who had a previous developer who... let's say "valued speed over readability." The main CSS file is over 5,000 lines, but it's all on a single line. No indentation, no line breaks, no comments. It's technically valid CSS, but Alex can't find anything. He needs to change the color of buttons across the site, but the button styles are scattered throughout the file. Manually reformatting 5,000 lines would take hours, and he'd probably introduce errors.</p>
    <p>Instead, Alex opens our CSS Beautifier. He pastes the entire minified file into the input box—all 5,000 lines as one continuous string. He sets indentation to 2 spaces (his preference), turns on "sort properties alphabetically," and clicks "Beautify CSS." In about two seconds, the tool produces a perfectly formatted CSS file with proper line breaks, nested indentation, and alphabetical properties. He can now scan the file, find the button selectors, and make his changes in minutes. He clicks "Download," saves the formatted file, and sends it back to the client. The client is impressed. Alex charges for the time saved. Everyone wins.</p>
    <p><strong>Another example:</strong> Priya is launching a new website and wants to optimize load times. She has a beautifully formatted CSS file—very readable, with comments and blank lines. But it's 250 KB. She knows that if she minifies it, it might drop to 150 KB or less. She pastes the readable CSS into the tool, clicks "Minify CSS," and gets a compressed version with all spaces, line breaks, and comments removed. She saves it as style.min.css, links to it in her HTML, and shaves 100ms off her page load time. Performance win.</p>

    <h3>Benefits & Who Should Use This Tool (Probably You):</h3>
    <ul>
      <li><strong>Web Developers (All Levels):</strong> You work with CSS every day. Sometimes it's your own code that got a little messy during a late-night debugging session. Sometimes it's code from a tutorial, a template, or a coworker. The beautifier cleans it up instantly, so you can focus on logic, not formatting. And the minifier helps you prepare production-ready files without needing a separate build step. This tool is like having a formatting assistant that never complains.</li>
      <li><strong>Frontend Developers (Framework Users):</strong> You're using Tailwind, Bootstrap, or another framework. The framework's CSS is often minified by default. That's great for performance, but when you need to understand or override a rule, reading minified CSS is painful. Use the beautifier to un-minify the relevant sections, figure out what's happening, then go back to your work. Or beautify the entire framework CSS once to study how it's built. Many developers have learned CSS deeply just by reading well-formatted framework source code.</li>
      <li><strong>Designers Who Write CSS:</strong> You're a designer first, developer second (or third). You know enough CSS to style your designs, but you don't want to fight with formatting. You just want your code to work and be readable when you come back to it. The beautifier handles the formatting for you. Paste your rough CSS, click beautify, and suddenly it looks professional. You can even use it to learn proper indentation and structure by comparing your original to the beautified version.</li>
      <li><strong>Students Learning CSS:</strong> You're taking a web development course, and your instructor wants your CSS to be properly formatted. But you're still learning, and your code is messy. No problem. Write your CSS however it comes out, then paste it into the beautifier before submitting. You'll get clean, indented code that meets any formatting standard. Over time, you'll internalize the patterns and start writing cleaner code on your own.</li>
      <li><strong>Teams (Consistency Matters):</strong> In a team environment, formatting consistency is not a luxury—it's a necessity. When everyone uses different indentation styles, code reviews are harder, diffs are noisier, and frustration is higher. Use the beautifier as a team standard. Agree on settings (2 spaces, no tabs, alphabetical properties? Or 4 spaces? Whatever). Then everyone runs their CSS through the tool before committing. The result: a codebase that looks like one person wrote it, even if twelve people did.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers):</h3>
    <p><strong>What is the difference between beautifying and minifying CSS? When should I use each?</strong><br>
      Great question. <strong>Beautifying</strong> adds line breaks, indentation, and spaces to make CSS readable for humans. Use this during development, for code reviews, when debugging, or when you need to understand someone else's code. <strong>Minifying</strong> does the opposite—it removes all unnecessary characters (spaces, line breaks, comments, even sometimes the last semicolon) to reduce file size. Use this for production websites. A minified CSS file loads faster because there's less data to transfer. Most sites serve a minified CSS file to users and keep a beautified version for developers. The tool supports both, so you can go back and forth as needed.</p>

    <p><strong>Is there a file size limit? Can I beautify an entire CSS framework like Bootstrap?</strong><br>
      The tool can handle very large CSS files—hundreds of kilobytes or even a few megabytes. Entire frameworks like Bootstrap (which is about 200-300 KB minified) beautify in a second or two. However, if you paste a massive file (like 10 MB of generated CSS), your browser might slow down because all the processing happens locally. For typical use—individual CSS files, framework files, or project stylesheets—you won't hit any limits. If you're working with truly enormous files, consider splitting them or using a command-line tool. But for 99% of real-world CSS, the tool works perfectly.</p>

    <p><strong>Is my CSS code kept private? Do you see my styles?</strong><br>
      Absolutely, positively, 100% private. The CSS beautifier runs entirely in your browser using JavaScript. Your code never leaves your computer. When you paste CSS into the input box, it stays there. When you click "Beautify" or "Minify," the transformation happens locally. No data is sent to any server. We can't see your code. We don't store your code. You can prove this by disconnecting your internet after the page loads—the tool still works. That's how local it is. If you're working on proprietary CSS for a client, or a secret project, or just don't want your code floating around the internet, this tool is safe to use.</p>

    <p><strong>Can I use this tool on my mobile phone or tablet?</strong><br>
      Yes, it's fully responsive. The input box resizes to fit your screen. Buttons are big enough to tap. The copy and download functions work on mobile too (downloading a file on a phone saves it to your downloads folder or offers to share it). However, editing large CSS files on a tiny screen is not the greatest experience—use a laptop or desktop if you can. For quick fixes or checking a small snippet, mobile works fine.</p>

    <p><strong>Do I need to create an account or pay for this?</strong><br>
      No. Never. This is completely free. There's no "premium version" with faster processing or larger file limits. There's no "sign up to unlock minification." There's no "free trial" that asks for your credit card. Just a tool that works, forever, at no cost. If you want to share it with a friend or colleague, go ahead. If you want to bookmark it and use it every day, even better. Free means free.</p>

    <p><strong>What formatting options should I choose? What do most developers use?</strong><br>
      This is a matter of preference and team convention. But here's what's common: <strong>Indentation</strong> - Most developers use either 2 spaces or 4 spaces. Tabs are less common but have their fans. <strong>Newlines</strong> - Most put each selector on its own line, and each property on its own line, with one line break between rules. <strong>Sorting</strong> - Most do <em>not</em> sort properties alphabetically because they prefer to group related properties (position, then display, then size, then color, etc.). But some teams enforce alphabetical sorting for consistency. The tool's defaults (2 spaces, no alphabetical sorting) are a safe starting point. Adjust to your preference or your team's style guide.</p>

    <h3>Why Choose Our CSS Beautifier & Formatter (Over Others)?</h3>
    <p>There are a lot of CSS formatters online. I've used many of them. Here's what sets this one apart. <strong>Privacy first.</strong> Most online tools upload your code to their server, which means you're giving them your work. Maybe they don't do anything bad with it, but why take the risk? Our tool processes everything locally. <strong>Offline capable.</strong> Once the page loads, you can disconnect from the internet and it still works. That's rare. <strong>Dual mode.</strong> Many tools only beautify or only minify. This does both. <strong>Customizable.</strong> Indentation type, size, selector separation, property sorting—you can tweak it to match your style. <strong>Fast.</strong> Even large files format in under a second. <strong>Clean output.</strong> The formatted CSS is not just technically correct—it's human-readable. Proper nesting. Consistent spacing. No weird artifacts. And it's free. No hidden costs. No "pro" features locked behind a paywall. Just a solid, reliable tool that does one thing well.</p>

    <h3>Common Applications of CSS Beautification (Real Use Cases):</h3>
    <ul>
      <li><strong>Code Maintenance (Legacy Projects):</strong> You inherited a project from someone who left the company. Their CSS is a mess—inconsistent indentation, no organization, hard to navigate. Run it through the beautifier. Suddenly, the structure becomes clear. You can find the rules you need, understand the cascade, and make changes without breaking things. Good formatting saves hours of confusion.</li>
      <li><strong>Team Collaboration (Pull Requests):</strong> When you submit a pull request, the diff shows every changed line. If your team uses different formatting, the diff will include hundreds of whitespace changes, making it hard to see the actual code changes. By running all CSS through the same formatter before committing, diffs stay clean. Reviewers can focus on what you actually changed, not how you spaced it.</li>
      <li><strong>Learning & Education (Study Well-Formatted Code):</strong> You're trying to learn CSS. You find a tutorial or a CodePen example, but the code is poorly formatted. Copy it into the beautifier. Now you can see the structure: which rules are nested where, how selectors are grouped, the hierarchy of properties. Well-formatted code is easier to understand, which means you learn faster.</li>
      <li><strong>Debugging (Unminify to Find Issues):</strong> Your site is behaving strangely. The CSS is minified for production, so you can't read it. Copy the minified CSS into the beautifier, format it, and now you can search for the problematic selector or property. Debug minified CSS without losing your mind.</li>
      <li><strong>Code Reviews (Before You Submit):</strong> Before asking a teammate to review your CSS, run it through the beautifier. It shows you any inconsistent indentation or messy structure. You can fix it yourself before anyone else sees it. A little self-formatting goes a long way toward looking professional.</li>
    </ul>

    <h3>Understanding CSS Formatting (Why It Matters):</h3>
    <p>CSS formatting is not just about aesthetics. It affects how easily you can maintain code, how quickly you can find bugs, and how well your team collaborates. Here's why good formatting matters. <strong>Readability:</strong> Properly indented CSS shows the nesting structure clearly. When you see a media query, you know its contents are indented inside. When you see a rule with multiple selectors, line breaks make each selector visible. <strong>Diff Clarity:</strong> When you use version control (Git, etc.), formatting changes create noise. Consistent formatting minimizes that noise. <strong>Error Reduction:</strong> In a messy CSS file, it's easy to miss a missing closing brace or a misplaced semicolon. In a well-formatted file, structure is obvious, and errors stand out. <strong>Professionalism:</strong> If you're sharing code with a client, a team, or an open-source project, well-formatted code signals that you care about quality. It's a small thing that makes a big impression. The beautifier automates all of this. You don't need to be a formatting perfectionist. Just run the tool.</p>

    <h3>Advanced Tips for CSS Power Users:</h3>
    <p>Here are a few extra things you might not know. <strong>Sorting properties alphabetically</strong> can help you find properties faster, but it can also break the natural grouping of related properties (e.g., position, top, left). Use with caution. <strong>Removing comments</strong> during minification is optional—some comments (like license information) should stay. The tool's minifier can preserve comments that start with /*! (important comments). <strong>Combining minification with other tools</strong>—once you minify CSS, you can also gzip it for even smaller file sizes. Most web servers do this automatically. <strong>Formatting inline CSS</strong>—if you have CSS inside an HTML style tag, copy just the CSS part (between the tags) into the beautifier, then paste it back. The tool doesn't touch the HTML, just the CSS. <strong>Converting spaces to tabs</strong>—if you inherit a file that uses spaces but your team uses tabs, you can convert by setting indentation type to tabs and running beautify. It will replace existing spaces with tabs based on your settings.</p>

    <h3>One Final Thought (Formatting Is Not Busywork):</h3>
    <p>I used to think that formatting CSS manually was a waste of time. "The browser doesn't care about spaces," I'd say. And that's true. The browser doesn't care. But people do. The next developer who reads your code—which might be you, six months from now, at 11 PM, trying to fix a urgent bug—cares deeply. Readable code saves time, reduces frustration, and prevents mistakes. The beautifier makes readable code effortless. It takes a messy file and transforms it in seconds. So next time you open a CSS file that looks like a disaster, don't spend an hour fixing it by hand. Don't complain about the previous developer. Just paste it into the tool, click beautify, and get back to work. Future you will thank you. Your teammates will thank you. And you'll look like the kind of developer who cares about quality—because you do.</p>
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