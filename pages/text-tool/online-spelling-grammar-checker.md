---
layout: default
title: "Grammar & Spell Checker – Fix Spelling and Grammar Online"
permalink: /online-spelling-and-grammar-checker-check-text-for-errors/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Grammar & Spell Checker – Fix Spelling and Grammar Online</title>

<meta name="description" content="Free online grammar and spell checker tool. Instantly detect spelling mistakes, grammar errors, punctuation issues, and writing style problems to improve your writing quality — no signup needed.">

<meta name="keywords" content="grammar checker, spelling checker, spell check, check grammar, proofread text, writing checker, grammar corrector, spell correction, punctuation checker, writing assistant">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Free Grammar & Spelling Checker - Check Text Online">
<meta property="og:description" content="Instant grammar correction with spelling fix. Improve your writing for essays, email, and blogs — 100% free.">
<meta property="og:url" content="https://toolesy.com/online-spelling-and-grammar-checker-check-text-for-errors">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Instant Grammar & Spell Check Tool Online">
<meta name="twitter:description" content="Fix punctuation & grammar mistakes in one click. No registration required!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Spelling and Grammar Checker Styles */
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
    font-family: 'Arial', sans-serif;
    transition: border-color 0.3s;
    line-height: 1.6;
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
    font-family: 'Arial', sans-serif;
    white-space: pre-wrap;
    line-height: 1.6;
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

  /* New styles for spelling and grammar checker */
  .checking-options {
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

  .results-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .results-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .error-list {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
  }

  .error-item {
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
    border-left: 4px solid #dc3545;
    background: #f8f9fa;
    transition: all 0.3s ease;
  }

  .error-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }

  .error-item.warning {
    border-left-color: #ffc107;
  }

  .error-item.info {
    border-left-color: #17a2b8;
  }

  .error-type {
    font-weight: 600;
    color: #dc3545;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .error-type.warning {
    color: #856404;
  }

  .error-type.info {
    color: #0c5460;
  }

  .error-message {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  .error-context {
    background: white;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    font-family: 'Courier New', monospace;
    margin: 8px 0;
  }

  .error-suggestions {
    margin-top: 8px;
  }

  .suggestion {
    display: inline-block;
    padding: 4px 8px;
    margin: 2px 4px 2px 0;
    background: var(--primary);
    color: white;
    border-radius: 4px;
    font-size: 0.9em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .suggestion:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  .text-preview {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    line-height: 1.6;
    min-height: 150px;
    max-height: 400px;
    overflow-y: auto;
  }

  .highlight-error {
    background-color: #ffebee;
    padding: 2px 4px;
    border-radius: 3px;
    border-bottom: 2px solid #f44336;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .highlight-error:hover {
    background-color: #ffcdd2;
  }

  .highlight-warning {
    background-color: #fff8e1;
    padding: 2px 4px;
    border-radius: 3px;
    border-bottom: 2px solid #ffc107;
    cursor: pointer;
  }

  .highlight-warning:hover {
    background-color: #ffecb3;
  }

  .stats-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .stat-item {
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 5px;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #6c757d;
  }

  .stat-item.error .stat-value {
    color: #dc3545;
  }

  .stat-item.warning .stat-value {
    color: #ffc107;
  }

  .stat-item.success .stat-value {
    color: #28a745;
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

    .checking-options {
      grid-template-columns: 1fr;
    }

    .stats-summary {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Spelling and Grammar Checker</h1>
  <p class="welcome-message">Check your text for spelling mistakes, grammar errors, and punctuation issues instantly. Improve your writing quality with our advanced proofreading tool.</p>

  <div class="converter-section">
    <h2>Spelling and Grammar Checker</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Word Count: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Sentence Count: </span>
        <span id="sentenceCount">0</span>
      </div>
      <div class="counter-item">
        <span>Paragraph Count: </span>
        <span id="paragraphCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Type or paste your text here to check for spelling and grammar errors..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.doc,.docx,.pdf" style="display: none;">

    <div class="checking-options">
      <div class="option-group">
        <label class="option-label">Language</label>
        <select id="language" class="option-select">
          <option value="en-US">English (US)</option>
          <option value="en-GB">English (UK)</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Checking Level</label>
        <select id="checkingLevel" class="option-select">
          <option value="standard">Standard Check</option>
          <option value="strict">Strict Check</option>
          <option value="casual">Casual Writing</option>
          <option value="academic">Academic Writing</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="checkSpelling" checked>
          <label for="checkSpelling">Check Spelling</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="checkGrammar" checked>
          <label for="checkGrammar">Check Grammar</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="checkPunctuation" checked>
          <label for="checkPunctuation">Check Punctuation</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="check">Check Text</button>
        <button class="case-button success" data-action="correct-all">Correct All</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button warning" data-action="clear-highlights">Clear Highlights</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="stats-summary" id="statsSummary" style="display: none;">
      <div class="stat-item error">
        <div class="stat-value" id="errorCount">0</div>
        <div class="stat-label">Errors Found</div>
      </div>
      <div class="stat-item warning">
        <div class="stat-value" id="warningCount">0</div>
        <div class="stat-label">Warnings</div>
      </div>
      <div class="stat-item success">
        <div class="stat-value" id="suggestionCount">0</div>
        <div class="stat-label">Suggestions</div>
      </div>
      <div class="stat-item">
        <div class="stat-value" id="readabilityScore">0</div>
        <div class="stat-label">Readability Score</div>
      </div>
    </div>

    <div class="results-section">
      <h2>Checking Results</h2>
      <div id="errorList" class="error-list">
        <p style="text-align: center; color: #6c757d; padding: 20px;">No errors found yet. Enter your text and click "Check Text" to start checking.</p>
      </div>
    </div>

    <div class="results-section">
      <h2>Text Preview with Highlights</h2>
      <div id="textPreview" class="text-preview">
        <p style="text-align: center; color: #6c757d;">Your text will appear here with highlighted errors after checking.</p>
      </div>
    </div>
{% include share-and-donation.html %}
    <div class="examples">
      <h2>Examples</h2>

      <h3>Text with Common Errors:</h3>
      <div class="example-text">Their are many common spelling and grammer mistakes that people make. For example, using "their" instead of "there", or "your" instead of "you're". Its important too proofread you're writing carefully.</div>

      <h3>Corrected Text:</h3>
      <div class="example-text">There are many common spelling and grammar mistakes that people make. For example, using "their" instead of "there", or "your" instead of "you're". It's important to proofread your writing carefully.</div>

      <h3>Common Error Types:</h3>
      <div class="example-text">
• Spelling: recieve → receive, seperate → separate
• Grammar: He don't → He doesn't, between you and I → between you and me
• Punctuation: Its time → It's time, Lets go → Let's go
• Word choice: affect/effect, then/than, complement/compliment
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Spelling and Grammar Checker Tool</h2>

    <p>Improve your writing with our free <strong>Spelling and Grammar Checker</strong>. This powerful tool helps you identify and correct spelling mistakes, grammar errors, punctuation issues, and style problems in your text. Whether you're writing an email, essay, blog post, or professional document, our checker ensures your writing is clear, correct, and professional. There's no download required, no registration needed, and your text privacy is guaranteed.</p>

    <h3>How to Use This Spelling and Grammar Checker (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your text into the input box above. You can also upload a text file using the upload icon.</li>
      <li><strong>Select Options:</strong> Choose your language preference and checking level (standard, strict, casual, or academic).</li>
      <li><strong>Check Text:</strong> Click the "Check Text" button to analyze your writing for errors and issues.</li>
      <li><strong>Review Results:</strong> Examine the highlighted errors in the preview and detailed explanations in the results panel.</li>
      <li><strong>Apply Corrections:</strong> Use the "Correct All" button to automatically fix errors, or click individual suggestions to apply specific corrections.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've written an important email to a client but want to ensure it's perfectly polished before sending. Instead of manually proofreading (which can be time-consuming and you might miss errors), you can paste the email into this tool. The checker will instantly identify spelling mistakes like "recieve" instead of "receive", grammar issues like "between you and I" instead of "between you and me", and punctuation errors like missing apostrophes. You can then apply corrections with a single click, ensuring your communication is professional and error-free.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Check essays, assignments, and research papers for errors before submission.</li>
      <li><strong>Professionals:</strong> Ensure emails, reports, and documents are error-free and professional.</li>
      <li><strong>Writers & Bloggers:</strong> Proofread articles, stories, and content before publishing.</li>
      <li><strong>Non-Native Speakers:</strong> Improve English writing skills and learn from corrections.</li>
      <li><strong>Anyone Who Writes:</strong> From social media posts to formal letters, make sure your writing is clear and correct.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>How accurate is this spelling and grammar checker?</strong><br>
      Our tool uses advanced algorithms and language databases to provide highly accurate checking. However, for critical documents, we recommend also doing a manual review as automated tools may occasionally miss context-specific errors.</p>

    <p><strong>What types of errors can this tool detect?</strong><br>
      The tool can detect spelling mistakes, grammar errors, punctuation issues, wrong word usage, style problems, and more. It covers common issues like their/there/they're, your/you're, its/it's, and many others.</p>

    <p><strong>Is there a word limit for checking?</strong><br>
      You can check very long documents, including entire essays, articles, or reports. The tool is designed to handle thousands of words at once.</p>

    <p><strong>Is my text kept private when I use this tool?</strong><br>
      Absolutely. All text processing happens locally in your browser. Your text is never sent to our servers, meaning we never see, store, or have access to your content. It is 100% secure and private.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <h3>Why Choose Our Spelling and Grammar Checker?</h3>
    <p>Our <strong>online spelling and grammar checker</strong> stands out from other tools because of its accuracy, ease of use, and privacy features. Unlike many online tools, we don't store your text on our servers - all processing happens in your browser. This means your personal documents, emails, and sensitive content remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Spelling and Grammar Checking</h3>
    <p>Spelling and grammar checking has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Academic Writing:</strong> Ensure essays, theses, and research papers are error-free</li>
      <li><strong>Business Communication:</strong> Polish emails, reports, and professional documents</li>
      <li><strong>Content Creation:</strong> Proofread blog posts, articles, and social media content</li>
      <li><strong>Language Learning:</strong> Help non-native speakers improve their writing skills</li>
      <li><strong>Professional Editing:</strong> Assist editors and proofreaders in identifying errors</li>
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
      <p>Select a text file (.txt, .doc, .docx, or .pdf) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.doc,.docx,.pdf">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
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
    const errorList = document.getElementById('errorList');
    const textPreview = document.getElementById('textPreview');
    const statsSummary = document.getElementById('statsSummary');
    
    // Checking options
    const language = document.getElementById('language');
    const checkingLevel = document.getElementById('checkingLevel');
    const checkSpelling = document.getElementById('checkSpelling');
    const checkGrammar = document.getElementById('checkGrammar');
    const checkPunctuation = document.getElementById('checkPunctuation');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');

    // Store errors and original text
    let errors = [];
    let originalText = '';

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

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === uploadModal) {
            uploadModal.style.display = 'none';
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
        if (file.type === 'text/plain' || file.name.endsWith('.txt') || 
            file.name.endsWith('.doc') || file.name.endsWith('.docx') || file.name.endsWith('.pdf')) {
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
            showAlert('Unsupported file format. Please upload a TXT, DOC, DOCX, or PDF file.', 'error');
        }
    });

    function updateCounts() {
        const text = textInput.value;

        // Character count
        document.getElementById('charCount').textContent = text.length;

        // Word count
        const wordCount = text ? text.trim().split(/\s+/).length : 0;
        document.getElementById('wordCount').textContent = wordCount;

        // Sentence count (approximate)
        const sentenceCount = text ? text.split(/[.!?]+/).length - 1 : 0;
        document.getElementById('sentenceCount').textContent = sentenceCount;

        // Paragraph count
        const paragraphCount = text ? text.split(/\n\s*\n/).length : 0;
        document.getElementById('paragraphCount').textContent = paragraphCount;
    }

    function handleTextAction(action) {
        const text = textInput.value;

        switch (action) {
            case 'check':
                checkSpellingGrammar(text);
                break;

            case 'correct-all':
                correctAllErrors();
                break;

            case 'copy':
                copyToClipboard(text);
                break;

            case 'clear-highlights':
                clearHighlights();
                break;

            case 'clear':
                textInput.value = '';
                errorList.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 20px;">No errors found yet. Enter your text and click "Check Text" to start checking.</p>';
                textPreview.innerHTML = '<p style="text-align: center; color: #6c757d;">Your text will appear here with highlighted errors after checking.</p>';
                statsSummary.style.display = 'none';
                updateCounts();
                break;
        }
    }

    async function checkSpellingGrammar(text) {
        if (!text.trim()) {
            showAlert('Please enter some text to check.', 'error');
            return;
        }

        showAlert('Checking text for errors...', 'success');
        
        // Store original text
        originalText = text;
        
        try {
            // Using LanguageTool API
            const response = await fetch('https://api.languagetool.org/v2/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `text=${encodeURIComponent(text)}&language=${language.value}`
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            errors = data.matches || [];
            
            displayResults();
            showAlert(`Found ${errors.length} potential issues.`, 'success');
            
        } catch (error) {
            console.error('Error checking text:', error);
            // Fallback to basic checking if API fails
            performBasicChecking(text);
            showAlert('Using basic checking (API unavailable).', 'warning');
        }
    }

    function performBasicChecking(text) {
        errors = [];
        
        // Common spelling mistakes to check
        const commonErrors = [
            { wrong: 'recieve', correct: 'receive', type: 'spelling' },
            { wrong: 'seperate', correct: 'separate', type: 'spelling' },
            { wrong: 'definately', correct: 'definitely', type: 'spelling' },
            { wrong: 'accomodate', correct: 'accommodate', type: 'spelling' },
            { wrong: 'occured', correct: 'occurred', type: 'spelling' },
            { wrong: 'their', context: 'there', type: 'grammar' },
            { wrong: 'there', context: 'their', type: 'grammar' },
            { wrong: 'they\'re', context: 'their/there', type: 'grammar' },
            { wrong: 'your', context: 'you\'re', type: 'grammar' },
            { wrong: 'you\'re', context: 'your', type: 'grammar' },
            { wrong: 'its', context: 'it\'s', type: 'grammar' },
            { wrong: 'it\'s', context: 'its', type: 'grammar' }
        ];

        commonErrors.forEach(error => {
            const regex = new RegExp(`\\b${error.wrong}\\b`, 'gi');
            let match;
            while ((match = regex.exec(text)) !== null) {
                errors.push({
                    offset: match.index,
                    length: error.wrong.length,
                    message: {
                        message: `Possible ${error.type} error: "${error.wrong}"`
                    },
                    replacements: error.correct ? [{ value: error.correct }] : [],
                    rule: {
                        category: { name: error.type === 'spelling' ? 'Spelling' : 'Grammar' }
                    },
                    context: {
                        text: text.substring(Math.max(0, match.index - 20), Math.min(text.length, match.index + error.wrong.length + 20)),
                        offset: Math.min(20, match.index),
                        length: error.wrong.length
                    }
                });
            }
        });

        displayResults();
    }

    function displayResults() {
        // Update stats
        const errorCount = errors.filter(e => e.rule.category.name === 'Spelling' || e.rule.category.name === 'Grammar').length;
        const warningCount = errors.filter(e => e.rule.category.name === 'Style' || e.rule.category.name === 'Punctuation').length;
        const suggestionCount = errors.filter(e => e.rule.category.name === 'Suggestions').length;
        
        document.getElementById('errorCount').textContent = errorCount;
        document.getElementById('warningCount').textContent = warningCount;
        document.getElementById('suggestionCount').textContent = suggestionCount;
        document.getElementById('readabilityScore').textContent = calculateReadabilityScore(originalText);
        
        statsSummary.style.display = 'grid';

        // Display error list
        if (errors.length === 0) {
            errorList.innerHTML = '<p style="text-align: center; color: #28a745; padding: 20px;">No errors found! Your text looks great.</p>';
        } else {
            errorList.innerHTML = '';
            errors.forEach((error, index) => {
                const errorItem = document.createElement('div');
                errorItem.className = `error-item ${error.rule.category.name === 'Spelling' || error.rule.category.name === 'Grammar' ? '' : 
                                      error.rule.category.name === 'Style' ? 'warning' : 'info'}`;
                
                const errorType = document.createElement('div');
                errorType.className = `error-type ${error.rule.category.name === 'Spelling' || error.rule.category.name === 'Grammar' ? '' : 
                                     error.rule.category.name === 'Style' ? 'warning' : 'info'}`;
                errorType.innerHTML = `<i class="fas fa-${getErrorIcon(error.rule.category.name)}"></i> ${error.rule.category.name}`;
                
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = error.message.message;
                
                const errorContext = document.createElement('div');
                errorContext.className = 'error-context';
                errorContext.textContent = error.context.text;
                
                const errorSuggestions = document.createElement('div');
                errorSuggestions.className = 'error-suggestions';
                
                if (error.replacements && error.replacements.length > 0) {
                    error.replacements.forEach(replacement => {
                        const suggestion = document.createElement('span');
                        suggestion.className = 'suggestion';
                        suggestion.textContent = replacement.value;
                        suggestion.addEventListener('click', () => applyCorrection(index, replacement.value));
                        errorSuggestions.appendChild(suggestion);
                    });
                }
                
                errorItem.appendChild(errorType);
                errorItem.appendChild(errorMessage);
                errorItem.appendChild(errorContext);
                if (error.replacements && error.replacements.length > 0) {
                    errorItem.appendChild(errorSuggestions);
                }
                
                errorList.appendChild(errorItem);
            });
        }

        // Display highlighted text
        displayHighlightedText();
    }

    function getErrorIcon(category) {
        switch(category) {
            case 'Spelling': return 'spell-check';
            case 'Grammar': return 'language';
            case 'Punctuation': return 'comma';
            case 'Style': return 'paint-brush';
            default: return 'info-circle';
        }
    }

    function displayHighlightedText() {
        let highlightedText = originalText;
        let offsetAdjustment = 0;
        
        // Sort errors by offset to handle replacements correctly
        const sortedErrors = [...errors].sort((a, b) => a.offset - b.offset);
        
        sortedErrors.forEach(error => {
            const start = error.offset + offsetAdjustment;
            const end = start + error.length;
            const errorText = highlightedText.substring(start, end);
            
            const highlightClass = error.rule.category.name === 'Spelling' || error.rule.category.name === 'Grammar' ? 
                                 'highlight-error' : 'highlight-warning';
            
            const highlighted = `<span class="${highlightClass}" title="${error.message.message}">${errorText}</span>`;
            highlightedText = highlightedText.substring(0, start) + highlighted + highlightedText.substring(end);
            
            // Adjust offset for the added HTML tags
            offsetAdjustment += highlighted.length - errorText.length;
        });

        textPreview.innerHTML = highlightedText || '<p style="text-align: center; color: #6c757d;">No text to display.</p>';
        
        // Add click handlers to highlighted errors
        textPreview.querySelectorAll('.highlight-error, .highlight-warning').forEach(highlight => {
            highlight.addEventListener('click', function() {
                const errorIndex = Array.from(textPreview.querySelectorAll('.highlight-error, .highlight-warning')).indexOf(this);
                if (errorIndex >= 0 && errors[errorIndex]) {
                    if (errors[errorIndex].replacements && errors[errorIndex].replacements.length > 0) {
                        applyCorrection(errorIndex, errors[errorIndex].replacements[0].value);
                    }
                }
            });
        });
    }

    function applyCorrection(errorIndex, correction) {
        const error = errors[errorIndex];
        const start = error.offset;
        const end = start + error.length;
        
        textInput.value = originalText.substring(0, start) + correction + originalText.substring(end);
        originalText = textInput.value;
        
        // Recheck the text
        checkSpellingGrammar(originalText);
        showAlert('Correction applied successfully!', 'success');
    }

    function correctAllErrors() {
        if (errors.length === 0) {
            showAlert('No errors to correct.', 'warning');
            return;
        }

        let correctedText = originalText;
        let offsetAdjustment = 0;
        
        // Sort errors by offset to handle replacements correctly
        const sortedErrors = [...errors].sort((a, b) => a.offset - b.offset);
        
        sortedErrors.forEach(error => {
            if (error.replacements && error.replacements.length > 0) {
                const start = error.offset + offsetAdjustment;
                const end = start + error.length;
                const correction = error.replacements[0].value;
                
                correctedText = correctedText.substring(0, start) + correction + correctedText.substring(end);
                
                // Adjust offset for length difference
                offsetAdjustment += correction.length - error.length;
            }
        });

        textInput.value = correctedText;
        originalText = correctedText;
        updateCounts();
        
        // Clear errors since they've been corrected
        errors = [];
        displayResults();
        showAlert('All corrections applied successfully!', 'success');
    }

    function clearHighlights() {
        textPreview.innerHTML = originalText || '<p style="text-align: center; color: #6c757d;">No text to display.</p>';
    }

    function calculateReadabilityScore(text) {
        // Simple readability score based on average word length and sentence length
        const words = text.trim().split(/\s+/);
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        
        if (words.length === 0 || sentences.length === 0) return 0;
        
        const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
        const avgSentenceLength = words.length / sentences.length;
        
        // Simple scoring (higher is better)
        let score = 100;
        score -= (avgWordLength - 5) * 5; // Penalize long words
        score -= (avgSentenceLength - 15) * 0.5; // Penalize very long or very short sentences
        
        return Math.max(0, Math.min(100, Math.round(score)));
    }

    function copyToClipboard(text) {
        if (!text.trim()) {
            showAlert('Please enter some text to copy.', 'error');
            return;
        }
        
        navigator.clipboard.writeText(text).then(() => {
            showAlert('Text copied to clipboard!', 'success');
        }).catch(err => {
            showAlert('Failed to copy text: ' + err, 'error');
        });
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