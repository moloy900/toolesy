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

  <p>
    Clear and error-free writing creates a strong impression, whether you're sending an important email, writing a blog
    post, preparing a school assignment, or creating business documents. Our
    <strong>Free Online Spelling and Grammar Checker</strong> helps you identify and correct spelling mistakes,
    grammar issues, punctuation errors, and writing inconsistencies in just a few seconds.
  </p>

  <p>
    Instead of spending valuable time proofreading line by line, you can use this tool to instantly review your text
    and receive helpful correction suggestions. It is designed for students, professionals, writers, bloggers,
    marketers, and anyone who wants to communicate more effectively.
  </p>

  <p>
    The tool is fast, easy to use, and works directly inside your browser. There is no software installation required,
    no account creation process, and no hidden fees. Simply paste your text, run the checker, and improve your writing
    immediately.
  </p>

  <h3>How to Use This Spelling and Grammar Checker (Step-by-Step)</h3>

  <ul>
    <li>
      <strong>Paste or Type Your Text</strong><br>
      Enter your content into the editor. You can write directly in the text box or paste text from documents, emails,
      websites, reports, or assignments.
    </li>

    <li>
      <strong>Choose Your Settings</strong><br>
      Select your preferred language and checking mode. Depending on your needs, you may choose standard, academic,
      professional, or strict grammar checking.
    </li>

    <li>
      <strong>Run the Analysis</strong><br>
      Click the check button to scan your writing for spelling errors, grammar mistakes, punctuation issues, and style
      concerns.
    </li>

    <li>
      <strong>Review Suggestions</strong><br>
      The tool highlights detected issues and provides explanations along with recommended corrections.
    </li>

    <li>
      <strong>Apply Corrections</strong><br>
      Accept individual suggestions or apply multiple corrections to improve your document quickly.
    </li>
  </ul>

  <h3>Real-Life Example & Use Case</h3>

  <p>
    Imagine you are preparing a job application and need to send a cover letter to a potential employer. Even a small
    spelling mistake or grammar error can create an unprofessional impression. Before sending your document, you can
    paste the text into this grammar checker.
  </p>

  <p>
    Within seconds, the tool may identify common mistakes such as incorrect verb agreement, punctuation errors,
    duplicated words, or misspelled terms. After applying the recommended corrections, your letter becomes clearer,
    more professional, and easier to read.
  </p>

  <p>
    This same process can be used for essays, blog posts, business reports, social media content, newsletters, and
    virtually any other type of written communication.
  </p>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <ul>
    <li>
      <strong>Students</strong><br>
      Improve essays, assignments, dissertations, and research papers before submission.
    </li>

    <li>
      <strong>Professionals</strong><br>
      Ensure emails, presentations, proposals, and reports maintain a professional standard.
    </li>

    <li>
      <strong>Content Writers & Bloggers</strong><br>
      Publish polished content with fewer errors and better readability.
    </li>

    <li>
      <strong>Non-Native English Speakers</strong><br>
      Learn proper grammar structures and improve overall writing confidence.
    </li>

    <li>
      <strong>Business Owners</strong><br>
      Maintain a professional brand image through accurate communication.
    </li>

    <li>
      <strong>Anyone Who Writes</strong><br>
      From personal letters to social media captions, everyone can benefit from error-free writing.
    </li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>What does a spelling and grammar checker do?</strong><br>
    A spelling and grammar checker analyzes your text to identify mistakes such as misspelled words, punctuation
    problems, grammar errors, and readability issues. It then suggests corrections to improve the quality of your
    writing.
  </p>

  <p>
    <strong>Can the tool detect punctuation mistakes?</strong><br>
    Yes. It can identify common punctuation problems such as missing commas, misplaced apostrophes, incorrect sentence
    endings, and inconsistent punctuation usage.
  </p>

  <p>
    <strong>Can I check long documents?</strong><br>
    Absolutely. The tool can process large amounts of text, making it suitable for essays, reports, articles, and
    lengthy documents.
  </p>

  <p>
    <strong>Will it improve writing style as well?</strong><br>
    In addition to correcting mistakes, the tool can suggest improvements that make sentences clearer, more concise,
    and easier to read.
  </p>

  <p>
    <strong>Is my text private?</strong><br>
    Yes. Privacy is important. Your content remains secure, and no registration is required to use the tool.
  </p>

  <p>
    <strong>Can I use the checker on mobile devices?</strong><br>
    Yes. The tool works on smartphones, tablets, laptops, and desktop computers through any modern web browser.
  </p>

  <p>
    <strong>Is the tool free?</strong><br>
    Yes. You can use the spelling and grammar checker without paying subscription fees or creating an account.
  </p>

  <h3>Why Choose Our Spelling and Grammar Checker?</h3>

  <p>
    Many online writing tools focus only on spelling corrections, but effective writing requires much more than that.
    Our spelling and grammar checker reviews grammar, punctuation, sentence structure, readability, and overall writing
    quality.
  </p>

  <p>
    The tool is designed to provide accurate suggestions while remaining simple enough for everyday users. Whether
    you're proofreading a short email or reviewing a lengthy academic paper, the interface remains intuitive and easy
    to understand.
  </p>

  <p>
    Another major advantage is convenience. Since everything works directly in your browser, you can improve your
    writing anytime and from virtually any device.
  </p>

  <h3>Common Writing Errors This Tool Can Detect</h3>

  <p>
    Even experienced writers occasionally make mistakes. This tool helps identify many of the most common writing
    issues, including:
  </p>

  <ul>
    <li><strong>Spelling Errors:</strong> Misspelled words and typing mistakes.</li>
    <li><strong>Grammar Mistakes:</strong> Incorrect sentence structure and grammatical usage.</li>
    <li><strong>Punctuation Issues:</strong> Missing commas, apostrophes, periods, and quotation marks.</li>
    <li><strong>Capitalization Errors:</strong> Incorrect use of uppercase and lowercase letters.</li>
    <li><strong>Repeated Words:</strong> Duplicate words that can easily be overlooked.</li>
    <li><strong>Word Choice Problems:</strong> Commonly confused words such as "their," "there," and "they’re."</li>
    <li><strong>Verb Agreement Issues:</strong> Subject-verb agreement errors.</li>
    <li><strong>Sentence Clarity Problems:</strong> Awkward or difficult-to-read sentence constructions.</li>
  </ul>

  <h3>Common Applications of Spelling and Grammar Checking</h3>

  <p>
    Accurate writing is valuable in almost every area of life. Some of the most common uses include:
  </p>

  <ul>
    <li><strong>Academic Writing:</strong> Essays, research papers, dissertations, and assignments.</li>
    <li><strong>Business Communication:</strong> Emails, reports, proposals, and presentations.</li>
    <li><strong>Content Marketing:</strong> Blog articles, website content, and newsletters.</li>
    <li><strong>Social Media:</strong> Posts, captions, and online communication.</li>
    <li><strong>Job Applications:</strong> Cover letters, resumes, and professional profiles.</li>
    <li><strong>Creative Writing:</strong> Stories, books, scripts, and personal writing projects.</li>
  </ul>

  <h3>Tips for Better Writing</h3>

  <ul>
    <li>Keep sentences clear and concise.</li>
    <li>Avoid unnecessary repetition.</li>
    <li>Use proper punctuation consistently.</li>
    <li>Proofread important documents before publishing.</li>
    <li>Read your text aloud to identify awkward phrasing.</li>
    <li>Use grammar-checking tools as a second review, not the only review.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>
    Strong writing builds credibility, improves communication, and helps your message reach readers more effectively.
    Whether you're preparing an academic paper, writing business correspondence, creating online content, or sending a
    personal message, accurate grammar and spelling matter.
  </p>

  <p>
    Our Free Online Spelling and Grammar Checker provides a simple, fast, and reliable way to improve your writing. Use
    it to catch mistakes, refine your style, and create polished content with confidence.
  </p>

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