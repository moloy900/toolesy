---
layout: default
title: "Online Zalgo Glitch Text Generator - Create Corrupted Text"
permalink: /online-zalgo-glitch-text-generator-create-corrupted-text/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Zalgo Glitch Text Generator - Create Corrupted Text</title>
<meta name="description"
  content="Free online Zalgo Glitch Text Generator tool. Create creepy, corrupted text with combining characters for social media, gaming, and creative projects.">
<meta name="keywords"
  content="zalgo text generator, glitch text, corrupted text, creepy text, horror text, combining characters, text glitcher, zalgo generator, glitch font">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Zalgo Text Generator Styles */
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
    font-size: 16px;
    min-height: 120px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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

  .case-button.danger {
    background: #dc3545;
  }

  .case-button.danger:hover {
    background: #c82333;
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

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
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
    overflow-x: auto;
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

  /* Zalgo specific styles */
  .zalgo-options {
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

  /* Intensity indicators */
  .intensity-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
  }

  .intensity-bar {
    flex: 1;
    height: 6px;
    background: #e9ecef;
    border-radius: 3px;
    overflow: hidden;
  }

  .intensity-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  /* Preview section */
  .preview-section {
    margin: 20px 0;
    padding: 20px;
    background: #2c3e50;
    border-radius: 10px;
    color: white;
  }

  .preview-title {
    color: #ecf0f1;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .preview-text {
    font-family: 'Courier New', monospace;
    font-size: 18px;
    min-height: 60px;
    padding: 15px;
    background: #34495e;
    border-radius: 6px;
    border: 1px solid #4a6572;
    line-height: 1.4;
    overflow-x: auto;
  }

  /* Glitch effect animation */
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

  .glitch-effect {
    animation: glitch 0.3s infinite;
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

    .zalgo-options {
      grid-template-columns: 1fr;
    }

    .preview-text {
      font-size: 14px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Zalgo Glitch Text Generator</h1>
  <p class="welcome-message">Create creepy, corrupted text with combining characters for social media, gaming usernames, and creative projects. Make your text look like it's been possessed or glitched!</p>

  <div class="converter-section">
    <h2>Zalgo Text Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Zalgo Level: </span>
        <span id="zalgoLevel">None</span>
      </div>
      <div class="counter-item">
        <span>Combining Chars: </span>
        <span id="combiningCount">0</span>
      </div>
      <div class="counter-item">
        <span>Text Height: </span>
        <span id="textHeight">Normal</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="4" placeholder="Enter text to convert to Zalgo glitch text..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt" style="display: none;">

    <div class="zalgo-options">
      <div class="option-group">
        <label class="option-label">Intensity Level</label>
        <select id="intensity" class="option-select">
          <option value="1">Light</option>
          <option value="2" selected>Medium</option>
          <option value="3">Heavy</option>
          <option value="4">Extreme</option>
          <option value="5">MAXIMUM</option>
        </select>
        <div class="intensity-indicator">
          <span>Low</span>
          <div class="intensity-bar">
            <div class="intensity-fill" id="intensityFill" style="width: 40%;"></div>
          </div>
          <span>High</span>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Direction</label>
        <select id="direction" class="option-select">
          <option value="all" selected>All Directions</option>
          <option value="up">Up Only</option>
          <option value="down">Down Only</option>
          <option value="middle">Middle Only</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Character Set</label>
        <select id="charSet" class="option-select">
          <option value="standard" selected>Standard</option>
          <option value="extended">Extended</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Max Characters Per Letter</label>
        <input type="number" id="maxChars" class="option-input" min="1" max="50" value="15">
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="preserveSpaces" checked>
          <label for="preserveSpaces">Preserve Spaces</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="preservePunctuation" checked>
          <label for="preservePunctuation">Preserve Punctuation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="randomize">
          <label for="randomize">Randomize Output</label>
        </div>
      </div>
    </div>

    <div class="preview-section">
      <h3 class="preview-title">Live Preview</h3>
      <div id="previewText" class="preview-text">Your Zalgo text will appear here...</div>
    </div>

    <div class="output-section">
      <h2>Zalgo Text Output</h2>
      <pre id="outputText">Zalgo glitch text will appear here...</pre>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="generate">Generate Zalgo Text</button>
        <button class="case-button" data-action="preview">Update Preview</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="examples">Show Examples</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Zalgo Text Examples</h2>

      <h3>Light Intensity:</h3>
      <div class="example-text">H̸e̷l̵l̷o̸ W̴o̵r̸l̸d̸</div>

      <h3>Medium Intensity:</h3>
      <div class="example-text">H͆̓͌͆͌̊̓̓̓̏̀͆̓̇̓̑̓͌͌̓͌̊̓̓̓̏̀͆̓̇͝͠͠͠͝͠͠͠e͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠l͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠l͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠o͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠ W͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠o͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠r͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠l͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠d͆̓͌͆͌̊̓̓̓̏̀͆̓̇͝͠͠͠</div>

      <h3>Heavy Intensity:</h3>
      <div class="example-text">H̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝e̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝l̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝l̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝o̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝ W̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝o̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝r̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝l̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝d̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝</div>

      <h3>Common Phrases:</h3>
      <div class="example-text">S̷̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠ö̷́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠s̷̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠

H̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝e̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝l̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝p̸̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̒̋̋̋̇̋̇̕̕̕̕̕̕̕̕̕̕̕̕̕̕͝͝͝͝͝͝͝͝͝͝͝͝͝͝

Ḯ̴̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠'̴̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠m̴̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠ c̴̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠ö̴́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠m̴̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠ḯ̴̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠n̴̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠g̴̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̈́̓̇̕̕̕̕̕̕̕̕͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠͝͝͝͠</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Zalgo Glitch Text Generator Tool</h2>

    <p>Looking to create creepy, corrupted text for social media, gaming usernames, or creative projects? Our free <strong>Zalgo Glitch Text Generator tool</strong> is the perfect solution for gamers, content creators, and anyone who wants to make their text stand out with a horror or glitch aesthetic. This powerful tool instantly transforms ordinary text into creepy, corrupted text using Unicode combining characters that appear above, below, and through your letters. There's no download required, no registration needed, and your text privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Zalgo Text Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your text into the input box above. You can use any text - names, phrases, messages, or creative content.</li>
      <li><strong>Customize Style:</strong> Choose from various intensity levels, directions, and character sets to create the perfect glitched look for your text.</li>
      <li><strong>Generate Text:</strong> Click the "Generate Zalgo Text" button to instantly transform your text into the selected glitch style.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the glitched text for pasting into social media, games, or websites, or use "Download" to save it as a text file.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're creating a username for a horror game or a spooky social media profile and want to make your name stand out with a creepy, corrupted appearance. Instead of using plain text that looks normal, you can use this tool to create text that looks like it's been possessed or glitched. For example, turning "Shadow" into "S̷h̷a̷d̷o̷w̷" with glitch characters that make it perfect for horror-themed content.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Gamers:</strong> Create unique, creepy usernames for horror games, RPGs, and online gaming platforms.</li>
      <li><strong>Content Creators:</strong> Design eye-catching text for video thumbnails, social media posts, and horror-themed content.</li>
      <li><strong>Writers & Roleplayers:</strong> Add atmospheric text elements to horror stories, creepypasta, and roleplaying scenarios.</li>
      <li><strong>Social Media Users:</strong> Make your bios, captions, and posts stand out with glitched text effects.</li>
      <li><strong>Designers:</strong> Create unique text elements for graphic design projects with a horror or glitch aesthetic.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is Zalgo text and how does it work?</strong><br>
      A: Zalgo text uses Unicode combining characters - special characters that modify the appearance of the characters they follow. These combining characters can appear above, below, or through the base characters, creating a glitched or corrupted appearance. The effect is named after the internet meme "Zalgo" who represents corruption and chaos.</p>

    <p><strong>Q: Can I use Zalgo text on social media platforms and in games?</strong><br>
      A: Yes! Zalgo text works on most modern platforms that support Unicode, including Twitter, Instagram, Discord, and many games. However, some platforms may have character limitations or may not display the combining characters correctly, so it's always good to test first.</p>

    <p><strong>Q: Is my text kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The text generation happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your content. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Zalgo Text Generator?</h3>
    <p>Our <strong>online Zalgo Text Generator</strong> stands out from other tools because of its customization options, real-time preview, and privacy features. Unlike many online tools, we don't store your text on our servers - all processing happens in your browser. This means your creative content, usernames, and personal messages remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Zalgo Text</h3>
    <p>Zalgo text has numerous creative applications across various fields:</p>
    <ul>
      <li><strong>Gaming:</strong> Create unique, creepy usernames for horror games, RPGs, and online platforms</li>
      <li><strong>Social Media:</strong> Make your bios, posts, and captions stand out with glitched text effects</li>
      <li><strong>Content Creation:</strong> Design eye-catching text for video thumbnails, horror content, and creative projects</li>
      <li><strong>Writing:</strong> Add atmospheric text elements to horror stories, creepypasta, and creative writing</li>
      <li><strong>Design:</strong> Create unique text elements for graphic design projects with a glitch or horror aesthetic</li>
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

<!-- Examples Modal -->
<div id="examplesModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Zalgo Text Examples</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Common Words & Phrases</h4>
          <div class="example-text">Hello: H̸e̷l̵l̷o̸
World: W̴o̵r̸l̸d̸
Help: H̸e̸l̸p̸
SOS: S̸O̸S̸
Love: L̸o̸v̸e̸
Death: D̸e̸a̸t̸h̸
Shadow: S̸h̸a̸d̸o̸w̸
Nightmare: N̸i̸g̸h̸t̸m̸a̸r̸e̸</div>
        </div>
        <div>
          <h4>Gaming & Usernames</h4>
          <div class="example-text">DarkLord: D̸a̸r̸k̸L̸o̸r̸d̸
BloodMoon: B̸l̸o̸o̸d̸M̸o̸o̸n̸
Ghost: G̸h̸o̸s̸t̸
Vampire: V̸a̸m̸p̸i̸r̸e̸
Zombie: Z̸o̸m̸b̸i̸e̸
Demon: D̸e̸m̸o̸n̸
Witch: W̸i̸t̸c̸h̸
Cursed: C̸u̸r̸s̸e̸d̸</div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeExamples">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const outputText = document.getElementById('outputText');
    const previewText = document.getElementById('previewText');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Zalgo options
    const intensity = document.getElementById('intensity');
    const direction = document.getElementById('direction');
    const charSet = document.getElementById('charSet');
    const maxChars = document.getElementById('maxChars');
    const preserveSpaces = document.getElementById('preserveSpaces');
    const preservePunctuation = document.getElementById('preservePunctuation');
    const randomize = document.getElementById('randomize');
    const intensityFill = document.getElementById('intensityFill');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const examplesModal = document.getElementById('examplesModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeExamples = document.getElementById('closeExamples');
    
    // Zalgo character sets
    const zalgoChars = {
      up: [
        '\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', 
        '\u0308', '\u0309', '\u030A', '\u030B', '\u030C', '\u030D', '\u030E', '\u030F',
        '\u0310', '\u0311', '\u0312', '\u0313', '\u0314', '\u0315', '\u0316', '\u0317',
        '\u0318', '\u0319', '\u031A', '\u031B', '\u031C', '\u031D', '\u031E', '\u031F',
        '\u0320', '\u0321', '\u0322', '\u0323', '\u0324', '\u0325', '\u0326', '\u0327',
        '\u0328', '\u0329', '\u032A', '\u032B', '\u032C', '\u032D', '\u032E', '\u032F',
        '\u0330', '\u0331', '\u0332', '\u0333', '\u0334', '\u0335', '\u0336', '\u0337',
        '\u0338', '\u0339', '\u033A', '\u033B', '\u033C', '\u033D', '\u033E', '\u033F'
      ],
      down: [
        '\u0316', '\u0317', '\u0318', '\u0319', '\u031A', '\u031B', '\u031C', '\u031D',
        '\u031E', '\u031F', '\u0320', '\u0321', '\u0322', '\u0323', '\u0324', '\u0325',
        '\u0326', '\u0327', '\u0328', '\u0329', '\u032A', '\u032B', '\u032C', '\u032D',
        '\u032E', '\u032F', '\u0330', '\u0331', '\u0332', '\u0333', '\u0334', '\u0335',
        '\u0336', '\u0337', '\u0338', '\u0339', '\u033A', '\u033B', '\u033C', '\u033D',
        '\u033E', '\u033F', '\u0340', '\u0341', '\u0342', '\u0343', '\u0344', '\u0345',
        '\u0346', '\u0347', '\u0348', '\u0349', '\u034A', '\u034B', '\u034C', '\u034D',
        '\u034E', '\u034F', '\u0350', '\u0351', '\u0352', '\u0353', '\u0354', '\u0355'
      ],
      mid: [
        '\u0356', '\u0357', '\u0358', '\u0359', '\u035A', '\u035B', '\u035C', '\u035D',
        '\u035E', '\u035F', '\u0360', '\u0361', '\u0362', '\u0363', '\u0364', '\u0365',
        '\u0366', '\u0367', '\u0368', '\u0369', '\u036A', '\u036B', '\u036C', '\u036D',
        '\u036E', '\u036F', '\u0488', '\u0489', '\u20D0', '\u20D1', '\u20D2', '\u20D3',
        '\u20D4', '\u20D5', '\u20D6', '\u20D7', '\u20D8', '\u20D9', '\u20DA', '\u20DB',
        '\u20DC', '\u20DD', '\u20DE', '\u20DF', '\u20E0', '\u20E1', '\u20E2', '\u20E3',
        '\u20E4', '\u20E5', '\u20E6', '\u20E7', '\u20E8', '\u20E9', '\u20EA', '\u20EB',
        '\u20EC', '\u20ED', '\u20EE', '\u20EF', '\u20F0', '\u20F1', '\u20F2', '\u20F3'
      ]
    };

    // Extended character set
    const extendedChars = {
      up: zalgoChars.up.concat([
        '\u1AB0', '\u1AB1', '\u1AB2', '\u1AB3', '\u1AB4', '\u1AB5', '\u1AB6', '\u1AB7',
        '\u1AB8', '\u1AB9', '\u1ABA', '\u1ABB', '\u1ABC', '\u1ABD', '\u1ABE', '\u1ABF',
        '\u1DC0', '\u1DC1', '\u1DC2', '\u1DC3', '\u1DC4', '\u1DC5', '\u1DC6', '\u1DC7',
        '\u1DC8', '\u1DC9', '\u1DCA', '\u1DCB', '\u1DCC', '\u1DCD', '\u1DCE', '\u1DCF'
      ]),
      down: zalgoChars.down.concat([
        '\u1DCA', '\u1DCB', '\u1DCC', '\u1DCD', '\u1DCE', '\u1DCF', '\u1DD0', '\u1DD1',
        '\u1DD2', '\u1DD3', '\u1DD4', '\u1DD5', '\u1DD6', '\u1DD7', '\u1DD8', '\u1DD9',
        '\u1DDA', '\u1DDB', '\u1DDC', '\u1DDD', '\u1DDE', '\u1DDF', '\u1DE0', '\u1DE1',
        '\u1DE2', '\u1DE3', '\u1DE4', '\u1DE5', '\u1DE6', '\u1DE7', '\u1DE8', '\u1DE9'
      ]),
      mid: zalgoChars.mid.concat([
        '\u1DEA', '\u1DEB', '\u1DEC', '\u1DED', '\u1DEE', '\u1DEF', '\u1DF0', '\u1DF1',
        '\u1DF2', '\u1DF3', '\u1DF4', '\u1DF5', '\u1DF6', '\u1DF7', '\u1DF8', '\u1DF9',
        '\u1DFA', '\u1DFB', '\u1DFC', '\u1DFD', '\u1DFE', '\u1DFF', '\uFE20', '\uFE21',
        '\uFE22', '\uFE23', '\uFE24', '\uFE25', '\uFE26', '\uFE27', '\uFE28', '\uFE29'
      ])
    };

    // Minimal character set
    const minimalChars = {
      up: ['\u0300', '\u0301', '\u0302', '\u0303', '\u0308'],
      down: ['\u0320', '\u0321', '\u0322', '\u0323', '\u0324'],
      mid: ['\u0330', '\u0331', '\u0332', '\u0333', '\u0334']
    };

    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', updateCounts);
    
    // Update intensity indicator
    intensity.addEventListener('input', function() {
      const intensityValue = parseInt(this.value);
      const fillPercentage = (intensityValue / 5) * 100;
      intensityFill.style.width = `${fillPercentage}%`;
      updateCounts();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
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
        examplesModal.style.display = 'none';
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

    // Close examples modal
    closeExamples.addEventListener('click', function() {
      examplesModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === examplesModal) {
        uploadModal.style.display = 'none';
        examplesModal.style.display = 'none';
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

      // Zalgo level
      const intensityMap = {
        1: 'Light',
        2: 'Medium', 
        3: 'Heavy',
        4: 'Extreme',
        5: 'MAXIMUM'
      };
      document.getElementById('zalgoLevel').textContent = intensityMap[intensity.value];

      // Combining characters count (approximate)
      const zalgoText = generateZalgoText(text);
      const combiningCount = (zalgoText.match(/[\u0300-\u036f]/g) || []).length;
      document.getElementById('combiningCount').textContent = combiningCount;

      // Text height
      const heightMap = {
        1: 'Normal',
        2: 'Tall',
        3: 'Very Tall', 
        4: 'Extreme',
        5: 'MAXIMUM'
      };
      document.getElementById('textHeight').textContent = heightMap[intensity.value];
    }

    function handleAction(action) {
      const text = textInput.value;
      
      switch (action) {
        case 'generate':
          const zalgoText = generateZalgoText(text);
          outputText.textContent = zalgoText;
          previewText.textContent = zalgoText;
          showAlert('Zalgo text generated successfully!', 'success');
          break;

        case 'preview':
          const previewZalgo = generateZalgoText(text);
          previewText.textContent = previewZalgo;
          showAlert('Preview updated!', 'success');
          break;

        case 'copy':
          copyToClipboard(outputText.textContent);
          break;

        case 'download':
          downloadText('zalgo_text.txt', outputText.textContent);
          break;

        case 'examples':
          examplesModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          outputText.textContent = 'Zalgo glitch text will appear here...';
          previewText.textContent = 'Your Zalgo text will appear here...';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Zalgo text generation function
    function generateZalgoText(text) {
      if (!text.trim()) {
        return 'Please enter some text to generate Zalgo text.';
      }
      
      let result = '';
      const intensityValue = parseInt(intensity.value);
      const maxCharsValue = parseInt(maxChars.value);
      const dir = direction.value;
      
      // Get appropriate character set
      let charSetToUse;
      switch (charSet.value) {
        case 'extended':
          charSetToUse = extendedChars;
          break;
        case 'minimal':
          charSetToUse = minimalChars;
          break;
        default:
          charSetToUse = zalgoChars;
      }
      
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        // Check if we should preserve this character
        if ((char === ' ' && preserveSpaces.checked) || 
            (/[^\w\s]/.test(char) && preservePunctuation.checked)) {
          result += char;
          continue;
        }
        
        result += char;
        
        // Add combining characters based on intensity
        const numChars = Math.floor(intensityValue * 3 * Math.random()) + 1;
        
        for (let j = 0; j < Math.min(numChars, maxCharsValue); j++) {
          let combiningChar = '';
          
          if (dir === 'all') {
            // Randomly choose direction
            const directions = ['up', 'down', 'mid'];
            const randomDir = directions[Math.floor(Math.random() * directions.length)];
            const chars = charSetToUse[randomDir];
            combiningChar = chars[Math.floor(Math.random() * chars.length)];
          } else {
            const chars = charSetToUse[dir];
            combiningChar = chars[Math.floor(Math.random() * chars.length)];
          }
          
          result += combiningChar;
        }
      }
      
      // Apply randomization if enabled
      if (randomize.checked) {
        result = randomizeZalgoText(result);
      }
      
      return result;
    }
    
    // Randomize the zalgo text for more chaotic appearance
    function randomizeZalgoText(text) {
      const chars = text.split('');
      for (let i = 0; i < chars.length; i++) {
        if (Math.random() < 0.1) { // 10% chance to modify each character
          const combiningChars = [...zalgoChars.up, ...zalgoChars.down, ...zalgoChars.mid];
          chars[i] = combiningChars[Math.floor(Math.random() * combiningChars.length)];
        }
      }
      return chars.join('');
    }

    function copyToClipboard(text) {
      if (text === 'Zalgo glitch text will appear here...' || !text.trim()) {
        showAlert('Please generate some Zalgo text first.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Zalgo text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      if (text === 'Zalgo glitch text will appear here...' || !text.trim()) {
        showAlert('Please generate some Zalgo text first.', 'error');
        return;
      }
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Zalgo text downloaded successfully!', 'success');
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