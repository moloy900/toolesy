---
layout: default
title: "Online Big Text Generator - Create ASCII Art & Large Text"
permalink: /online-big-text-generator-create-ascii-art-large-text/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Big Text Generator ✨ Free ASCII Art & Large Stylish Text Maker</title>

<meta name="description" content="Free Big Text Generator tool for creating large ASCII art text, fancy banners, and cool stylish fonts for social media, Discord, headlines, and creative designs. Instant copy & paste!">

<meta name="keywords" content="big text generator, ascii text generator, large text maker, big font generator, fancy big letters, banner text generator, stylish text maker, discord big text, text art generator">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph -->
<meta property="og:title" content="Free Big Text Generator - ASCII Art & Large Stylish Fonts Online">
<meta property="og:description" content="Generate ASCII art text and stylish big text banners instantly. Perfect for social media, Discord, and creative projects.">
<meta property="og:url" content="https://www.toolesy.com/base64-encoder-decoder-online-base64-converter-tool">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Big Text Generator - ASCII & Large Text Maker">
<meta name="twitter:description" content="Create cool ASCII art banners and large stylish text instantly. Copy & paste anywhere!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Big Text Generator Styles */
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
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .output-section {
    margin: 20px 0;
  }

  .output-section pre {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 14px;
    min-height: 300px;
    background: #f8f9fa;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: 1.4;
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
    line-height: 1.4;
    font-size: 12px;
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

  /* Big Text Generator specific styles */
  .font-options {
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

  /* Preview section */
  .preview-section {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .preview-title {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
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

    .font-options {
      grid-template-columns: 1fr;
    }
    
    .output-section pre {
      font-size: 10px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Big Text Generator</h1>
  <p class="welcome-message">Create stunning ASCII art, large text banners, and stylized text for social media, websites, and creative projects. Transform ordinary text into eye-catching designs instantly.</p>

  <div class="converter-section">
    <h2>Big Text Generator</h2>

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
        <span>Font Height: </span>
        <span id="fontHeight">0</span>
      </div>
      <div class="counter-item">
        <span>Preview Size: </span>
        <span id="previewSize">Normal</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="4" placeholder="Enter your text here to convert to big text..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt" style="display: none;">

    <div class="font-options">
      <div class="option-group">
        <label class="option-label">Font Style</label>
        <select id="fontStyle" class="option-select">
          <option value="standard">Standard</option>
          <option value="block">Block</option>
          <option value="bubble">Bubble</option>
          <option value="shadow">Shadow</option>
          <option value="script">Script</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Text Size</label>
        <select id="textSize" class="option-select">
          <option value="small">Small</option>
          <option value="medium" selected>Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">Extra Large</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Text Direction</label>
        <select id="textDirection" class="option-select">
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="ascii">ASCII Art</option>
          <option value="text">Plain Text</option>
          <option value="html">HTML Format</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="addBorder" checked>
          <label for="addBorder">Add Border</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="centerText">
          <label for="centerText">Center Text</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="uppercase">
          <label for="uppercase">Uppercase</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="generate">Generate Big Text</button>
        <button class="case-button" data-action="preview">Preview</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="output-section">
      <h2>Big Text Output</h2>
      <pre id="outputText">Your big text will appear here...</pre>
    </div>

    <div class="preview-section">
      <h3 class="preview-title">Live Preview</h3>
      <div id="previewArea" style="background: white; padding: 15px; border-radius: 6px; min-height: 100px; font-family: monospace; white-space: pre; overflow-x: auto;"></div>
    </div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Input Text:</h3>
      <div class="example-text">HELLO WORLD</div>

      <h3>Standard Big Text Output:</h3>
      <div class="example-text"> _    _  ___  __    __  _______   __      __   ___   _      __    __ 
| |  | ||   ||  |  |  ||       | |  |    |  | |   | | |    |  |  |  |
| |__| ||   ||   |_|  ||    ___| |  |    |  | |   | | |    |   |_|  |
|  __  ||   ||       | |   |___  |  |    |  | |   | | |    |       |
| |  | ||   ||  _    | |    ___| |  |___ |  | |   | | |___ |  _    |
|_|  |_||___||_| |___| |___|     |______||__| |___| |_____||_| |___|</div>

      <h3>Block Style Output:</h3>
      <div class="example-text">▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄ 
█▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ 
█▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ 
█▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ █▄▄▄▄▄▄▄▄█ 
▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀</div>

      <h3>Bubble Style Output:</h3>
      <div class="example-text">ⓗⓔⓛⓛⓞ ⓦⓞⓡⓛⓓ</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Big Text Generator Tool</h2>

    <p>Looking to create eye-catching text for social media, websites, or creative projects? Our free <strong>Big Text Generator tool</strong> is the perfect solution for designers, content creators, and anyone who wants to make their text stand out. This powerful tool instantly transforms ordinary text into stunning ASCII art, large text banners, and various stylized formats. You can create text in multiple styles including standard, block, bubble, shadow, and script fonts. There's no download required, no registration needed, and your text privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Big Text Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your text into the input box above. You can use any text - names, phrases, messages, or creative content.</li>
      <li><strong>Customize Style:</strong> Choose from various font styles, sizes, and formatting options to create the perfect look for your big text.</li>
      <li><strong>Generate Text:</strong> Click the "Generate Big Text" button to instantly transform your text into the selected style.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the formatted text for pasting into social media, documents, or websites, or use "Download" to save it as a text file.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're creating a banner for a social media post or website header and want to make your message stand out. Instead of using plain text that blends in with everything else, you can use this tool to create eye-catching big text. For example, turning "SALE" into a large, stylized ASCII art banner that immediately grabs attention and makes your promotion more effective.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Social Media Managers:</strong> Create attention-grabbing text for posts, stories, and banners across all platforms.</li>
      <li><strong>Content Creators:</strong> Design unique text elements for videos, thumbnails, and digital content.</li>
      <li><strong>Web Designers:</strong> Generate ASCII art and stylized text for website headers, banners, and creative elements.</li>
      <li><strong>Students & Teachers:</strong> Create visually appealing text for presentations, projects, and educational materials.</li>
      <li><strong>Marketing Professionals:</strong> Design compelling text for advertisements, emails, and promotional materials.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is ASCII art and how is it different from regular text?</strong><br>
      A: ASCII art uses characters from the ASCII character set to create visual representations of text or images. Unlike regular text that uses standard fonts, ASCII art creates larger, more stylized text using multiple lines of characters arranged to form letters and shapes.</p>

    <p><strong>Q: Can I use the generated big text on social media platforms?</strong><br>
      A: Yes! The big text generated by this tool works on most social media platforms, forums, and messaging apps. However, some platforms may have character limitations or formatting restrictions, so it's always good to test first.</p>

    <p><strong>Q: Is my text kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The text generation happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your content. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Big Text Generator?</h3>
    <p>Our <strong>online Big Text Generator</strong> stands out from other tools because of its simplicity, variety of styles, and privacy features. Unlike many online tools, we don't store your text on our servers - all processing happens in your browser. This means your creative content, personal messages, and sensitive text remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Big Text Generation</h3>
    <p>Big text generation has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Social Media:</strong> Create eye-catching posts, bios, and captions for Instagram, Twitter, Facebook, and other platforms</li>
      <li><strong>Digital Marketing:</strong> Design compelling text for email campaigns, advertisements, and promotional materials</li>
      <li><strong>Web Design:</strong> Generate unique text elements for website headers, banners, and creative sections</li>
      <li><strong>Content Creation:</strong> Enhance videos, thumbnails, and digital content with stylized text</li>
      <li><strong>Education:</strong> Create visually appealing materials for presentations, lessons, and educational content</li>
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
      <p>Select a text file (.txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt">
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
      <h3 class="modal-title">Compare Text</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Text</h4>
          <textarea id="originalText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Big Text</h4>
          <textarea id="bigText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const outputText = document.getElementById('outputText');
    const previewArea = document.getElementById('previewArea');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Font options
    const fontStyle = document.getElementById('fontStyle');
    const textSize = document.getElementById('textSize');
    const textDirection = document.getElementById('textDirection');
    const outputFormat = document.getElementById('outputFormat');
    const addBorder = document.getElementById('addBorder');
    const centerText = document.getElementById('centerText');
    const uppercase = document.getElementById('uppercase');
    
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
    const bigText = document.getElementById('bigText');
    

    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleTextAction(action);
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
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
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
        showAlert('Unsupported file format. Please upload a TXT file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Font height based on selected size
      const sizeMap = {
        'small': 3,
        'medium': 5,
        'large': 7,
        'xlarge': 9
      };
      document.getElementById('fontHeight').textContent = sizeMap[textSize.value] + ' lines';

      // Preview size
      document.getElementById('previewSize').textContent = textSize.value.charAt(0).toUpperCase() + textSize.value.slice(1);
    }

    function handleTextAction(action) {
      const text = textInput.value;
      
      // Store original text for comparison
      if (action === 'generate' || action === 'preview') {
        originalTextContent = text;
      }

      switch (action) {
        case 'generate':
          const bigTextResult = generateBigText(text);
          outputText.textContent = bigTextResult;
          previewArea.textContent = bigTextResult;
          showAlert('Big text generated successfully!', 'success');
          break;

        case 'preview':
          const previewResult = generateBigText(text);
          previewArea.textContent = previewResult;
          showAlert('Preview updated!', 'success');
          break;

        case 'copy':
          copyToClipboard(outputText.textContent);
          break;

        case 'download':
          downloadText('big_text.txt', outputText.textContent);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please generate big text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          bigText.value = outputText.textContent;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          outputText.textContent = 'Your big text will appear here...';
          previewArea.textContent = '';
          originalTextContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Big text generation function
    function generateBigText(text) {
      if (!text.trim()) {
        return 'Please enter some text to generate big text.';
      }
      
      let processedText = text;
      
      // Apply uppercase if selected
      if (uppercase.checked) {
        processedText = processedText.toUpperCase();
      }
      
      // Generate based on font style
      let result = '';
      switch (fontStyle.value) {
        case 'standard':
          result = generateStandardBigText(processedText);
          break;
        case 'block':
          result = generateBlockText(processedText);
          break;
        case 'bubble':
          result = generateBubbleText(processedText);
          break;
        case 'shadow':
          result = generateShadowText(processedText);
          break;
        case 'script':
          result = generateScriptText(processedText);
          break;
        default:
          result = generateStandardBigText(processedText);
      }
      
      // Apply border if selected
      if (addBorder.checked) {
        result = addTextBorder(result);
      }
      
      // Apply centering if selected
      if (centerText.checked) {
        result = centerTextOutput(result);
      }
      
      return result;
    }
    
    // Standard big text generation (simplified ASCII art)
    function generateStandardBigText(text) {
      // A simple mapping for demonstration
      const charMap = {
        'A': [' AAA ', 'A   A', 'AAAAA', 'A   A', 'A   A'],
        'B': ['BBBB ', 'B   B', 'BBBB ', 'B   B', 'BBBB '],
        'C': [' CCCC', 'C    ', 'C    ', 'C    ', ' CCCC'],
        'D': ['DDD  ', 'D  D ', 'D   D', 'D  D ', 'DDD  '],
        'E': ['EEEEE', 'E    ', 'EEEE ', 'E    ', 'EEEEE'],
        'F': ['FFFFF', 'F    ', 'FFFF ', 'F    ', 'F    '],
        'G': [' GGG ', 'G    ', 'G  GG', 'G   G', ' GGG '],
        'H': ['H   H', 'H   H', 'HHHHH', 'H   H', 'H   H'],
        'I': ['IIIII', '  I  ', '  I  ', '  I  ', 'IIIII'],
        'J': ['  JJJ', '   J ', '   J ', 'J  J ', ' JJ  '],
        'K': ['K   K', 'K  K ', 'KKK  ', 'K  K ', 'K   K'],
        'L': ['L    ', 'L    ', 'L    ', 'L    ', 'LLLLL'],
        'M': ['M   M', 'MM MM', 'M M M', 'M   M', 'M   M'],
        'N': ['N   N', 'NN  N', 'N N N', 'N  NN', 'N   N'],
        'O': [' OOO ', 'O   O', 'O   O', 'O   O', ' OOO '],
        'P': ['PPPP ', 'P   P', 'PPPP ', 'P    ', 'P    '],
        'Q': [' QQQ ', 'Q   Q', 'Q   Q', 'Q  Q ', ' QQ Q'],
        'R': ['RRRR ', 'R   R', 'RRRR ', 'R  R ', 'R   R'],
        'S': [' SSS ', 'S    ', ' SSS ', '    S', 'SSSS '],
        'T': ['TTTTT', '  T  ', '  T  ', '  T  ', '  T  '],
        'U': ['U   U', 'U   U', 'U   U', 'U   U', ' UUU '],
        'V': ['V   V', 'V   V', 'V   V', ' V V ', '  V  '],
        'W': ['W   W', 'W   W', 'W W W', 'WW WW', 'W   W'],
        'X': ['X   X', ' X X ', '  X  ', ' X X ', 'X   X'],
        'Y': ['Y   Y', ' Y Y ', '  Y  ', '  Y  ', '  Y  '],
        'Z': ['ZZZZZ', '   Z ', '  Z  ', ' Z   ', 'ZZZZZ'],
        ' ': ['     ', '     ', '     ', '     ', '     '],
        '!': ['  !  ', '  !  ', '  !  ', '     ', '  !  '],
        '?': [' ??? ', '?   ?', '   ? ', '     ', '  ?  ']
      };
      
      const lines = ['', '', '', '', ''];
      const sizeFactor = getSizeFactor();
      
      for (let char of text.toUpperCase()) {
        const pattern = charMap[char] || charMap[' '];
        for (let i = 0; i < pattern.length; i++) {
          lines[i] += pattern[i] + ' '.repeat(sizeFactor);
        }
      }
      
      // Apply size scaling
      let scaledLines = [];
      for (let line of lines) {
        for (let i = 0; i < sizeFactor; i++) {
          scaledLines.push(line);
        }
      }
      
      return scaledLines.join('\n');
    }
    
    // Block text generation
    function generateBlockText(text) {
      const blockChars = {
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 
        'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
        'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾',
        'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
        'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈',
        'Z': '🆉', ' ': ' '
      };
      
      let result = '';
      for (let char of text.toUpperCase()) {
        result += (blockChars[char] || char) + ' ';
      }
      return result;
    }
    
    // Bubble text generation
    function generateBubbleText(text) {
      const bubbleChars = {
        'A': 'ⓐ', 'B': 'ⓑ', 'C': 'ⓒ', 'D': 'ⓓ', 'E': 'ⓔ',
        'F': 'ⓕ', 'G': 'ⓖ', 'H': 'ⓗ', 'I': 'ⓘ', 'J': 'ⓙ',
        'K': 'ⓚ', 'L': 'ⓛ', 'M': 'ⓜ', 'N': 'ⓝ', 'O': 'ⓞ',
        'P': 'ⓟ', 'Q': 'ⓠ', 'R': 'ⓡ', 'S': 'ⓢ', 'T': 'ⓣ',
        'U': 'ⓤ', 'V': 'ⓥ', 'W': 'ⓦ', 'X': 'ⓧ', 'Y': 'ⓨ',
        'Z': 'ⓩ', ' ': ' '
      };
      
      let result = '';
      for (let char of text) {
        if (char.toUpperCase() in bubbleChars) {
          result += bubbleChars[char.toUpperCase()];
        } else {
          result += char;
        }
      }
      return result;
    }
    
    // Shadow text generation
    function generateShadowText(text) {
      // Simple shadow effect using duplicate lines with offset
      const lines = generateStandardBigText(text).split('\n');
      let result = [];
      
      for (let i = 0; i < lines.length; i++) {
        result.push(lines[i] + '    ' + lines[i].replace(/[^ ]/g, '#'));
      }
      
      return result.join('\n');
    }
    
    // Script text generation
    function generateScriptText(text) {
      const scriptChars = {
        'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸',
        'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
        'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪',
        'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴',
        'Z': '𝒵', ' ': ' '
      };
      
      let result = '';
      for (let char of text) {
        if (char.toUpperCase() in scriptChars) {
          result += scriptChars[char.toUpperCase()];
        } else {
          result += char;
        }
      }
      return result;
    }
    
    // Helper function to get size factor
    function getSizeFactor() {
      const sizeMap = {
        'small': 1,
        'medium': 2,
        'large': 3,
        'xlarge': 4
      };
      return sizeMap[textSize.value] || 2;
    }
    
    // Add border to text
    function addTextBorder(text) {
      const lines = text.split('\n');
      const width = Math.max(...lines.map(line => line.length));
      
      // Create top and bottom border
      const border = '┌' + '─'.repeat(width + 2) + '┐';
      const bottomBorder = '└' + '─'.repeat(width + 2) + '┘';
      
      // Add side borders to each line
      const borderedLines = lines.map(line => {
        const padding = ' '.repeat(width - line.length);
        return '│ ' + line + padding + ' │';
      });
      
      return [border, ...borderedLines, bottomBorder].join('\n');
    }
    
    // Center text output
    function centerTextOutput(text) {
      const lines = text.split('\n');
      const maxLength = Math.max(...lines.map(line => line.length));
      
      return lines.map(line => {
        const padding = Math.floor((maxLength - line.length) / 2);
        return ' '.repeat(padding) + line;
      }).join('\n');
    }

    function copyToClipboard(text) {
      if (text === 'Your big text will appear here...' || !text.trim()) {
        showAlert('Please generate some big text first.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Big text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      if (text === 'Your big text will appear here...' || !text.trim()) {
        showAlert('Please generate some big text first.', 'error');
        return;
      }
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Big text downloaded successfully!', 'success');
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