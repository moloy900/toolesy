---
layout: default
title: "Online Case Converter - Change Text to Upper, Lower & Title Case"
permalink: /online-case-converter-change-text-to-upper-lower-title-case/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Text Case Converter Online | Uppercase, Lowercase, Title Case Tool</title>

<meta name="description" content="Free online Text Case Converter. Instantly convert text to uppercase, lowercase, title case, sentence case, and more. Perfect for students, writers, bloggers & web developers. No signup required.">

<meta name="keywords" content="text case converter, uppercase converter, lowercase converter, title case tool, sentence case converter, case change tool, caps to small letters, capitalize text online, blog title formatter, online text editor, free text tools">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Free Online Text Case Converter | Uppercase ↔ Lowercase Tool">
<meta property="og:description" content="Convert text case instantly — uppercase, lowercase, title case, sentence case & more! No login, 100% free.">
<meta property="og:url" content="https://toolesy.com/online-case-converter-change-text-to-upper-lower-title-case">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Text Case Converter Online">
<meta name="twitter:description" content="Convert text case instantly — uppercase, lowercase, title case & more!">

<!-- ✅ Rich FAQ Schema for Google Ranking Boost -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Text Case Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Text Case Converter is a free online tool that changes text format like uppercase, lowercase, title case, sentence case & more instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Is this Text Case Converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this tool is 100% free to use, without signup or restrictions. You can convert unlimited text anytime."
      }
    },
    {
      "@type": "Question",
      "name": "Which text cases can I convert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can convert text to uppercase, lowercase, title case, sentence case, inverse case, and capitalize every word."
      }
    }
  ]
}
</script>


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Text Case Converter Styles */
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
    font-family: inherit;
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
  }
</style>

<div class="converter-container">
  <h1>Free Online Text Case Converter Tool</h1>
  <p class="welcome-message">Transform your text with various case styles including UPPERCASE, lowercase, sentence case,
    Capitalized case, alternating case, Title Case, inverse case, reverse text, Bold Text, Italic Text, and Underline
    Text.</p>

  <div class="converter-section">
    <h2>Text Case Converter</h2>

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
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Enter your text here.."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt" style="display: none;">

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="uppercase">UPPERCASE</button>
        <button class="case-button" data-action="lowercase">Lowercase</button>
        <button class="case-button" data-action="sentence">Sentence case</button>
        <button class="case-button" data-action="capitalized">Capitalized case</button>
        <button class="case-button" data-action="alternating">aLtErNaTiNg cAsE</button>
        <button class="case-button" data-action="title">Title Case</button>
        <button class="case-button" data-action="inverse">InVeRsE CaSe</button>
        <button class="case-button" data-action="reverse">Reverse Text</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button" data-action="bold">Bold Text</button>
        <button class="case-button" data-action="italic">Italic Text</button>
        <button class="case-button" data-action="underline">Underline Text</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button secondary" data-action="clear">Clear Text</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}
    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Conversion:</h3>
      <div class="example-text">the quick brown fox jumps over the lazy dog. it's an example text with various cases.
      </div>

      <h3>After UPPERCASE Conversion:</h3>
      <div class="example-text">THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. IT'S AN EXAMPLE TEXT WITH VARIOUS CASES.
      </div>

      <h3>After Title Case Conversion:</h3>
      <div class="example-text">The Quick Brown Fox Jumps Over the Lazy Dog. It's an Example Text With Various Cases.
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Case Converter Tool</h2>

    <p>Tired of manually changing text case? Our free <strong>Case Converter tool</strong> is the fastest and easiest
      way to transform any text. Perfect for students, writers, and professionals, this instant tool converts your text
      to <strong>UPPERCASE</strong>, <strong>lowercase</strong>, <strong>Title Case</strong>, <strong>Sentence
        case</strong>, and more with a single click. There's no download required, no registration needed, and your data
      privacy is guaranteed as all processing happens securely right in your browser. Fix formatting, prepare data, and
      ensure professionalism in your documents in seconds.</p>

    <h3>How to Use This Text Case Changer (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Text:</strong> Copy your text from any source (Word doc, email, webpage) and paste it into the
        large input box above.</li>
      <li><strong>Select Case:</strong> Choose your desired text case from the available options (e.g., "UPPERCASE" for
        shouting, "Title Case" for headlines).</li>
      <li><strong>Convert:</strong> Click the bright "Convert" button. Your newly formatted text will appear instantly
        in the output box.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the text for pasting elsewhere, or use "Download"
        to save it as a .txt file on your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've received an email where the entire message is in LOWERCASE, making it difficult to read. Instead
      of struggling or asking the sender to resend it, you can simply paste the email text into this tool. By selecting
      "Sentence case", the tool will automatically capitalize the first letter of each sentence, transforming a
      hard-to-read message into a properly formatted, professional communication in less than a second.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Ensure your essay titles, headings, and bibliography entries are perfectly
        capitalized according to academic style guides (APA, MLA, Chicago).</li>
      <li><strong>Writers & Editors:</strong> Quickly fix the case mistakes in articles, blog posts, and manuscripts
        before publishing.</li>
      <li><strong>Programmers & Developers:</strong> Format strings and standardize user-generated content (like names
        and emails) before storing them in a database.</li>
      <li><strong>Data Analysts & Office Workers:</strong> Clean and standardize text data in spreadsheets, CSV files,
        and mailing lists for accurate reporting and mailing.</li>
      <li><strong>Social Media Users:</strong> Create stylistic variations for your bios and posts (e.g., using small
        text or all caps for emphasis).</li>
    </ul>


    <h2>Frequently Asked Questions</h2>
<p><strong>What is a Text Case Converter?</strong><br>
A Text Case Converter is a free online tool that changes text format like uppercase, lowercase, title case, sentence case & more instantly.</p>

<p><strong>Is this Text Case Converter free?</strong><br>
Yes, this tool is 100% free to use, without signup or restrictions. You can convert unlimited text anytime.</p>

<p><strong>Which text cases can I convert?</strong><br>
You can convert text to uppercase, lowercase, title case, sentence case, inverse case, and capitalize every word.</p>

    <p><strong>Q: What is the difference between Title Case and Sentence case?</strong><br>
      A: Title Case capitalizes the first letter of every major word (e.g., nouns, verbs, adjectives), as seen in book
      titles: "The Quick Brown Fox". Sentence case only capitalizes the very first word of the sentence and any proper
      nouns, like a normal sentence: "The quick brown fox".</p>

    <p><strong>Q: Is there a character or word limit for this converter?</strong><br>
      A: You can convert very large texts, including full articles and essays, without any issue. The tool is built to
      handle several thousand words at once.</p>

    <p><strong>Q: Is my text kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The conversion happens locally on your own computer or phone.
      Your text is never sent to any server, meaning we never see, store, or have access to your data. It is 100%
      secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including
      smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Text Case Converter?</h3>
    <p>Our <strong>online case converter</strong> stands out from other tools because of its simplicity, speed, and
      privacy features. Unlike many online tools, we don't store your text on our servers - all processing happens in
      your browser. This means your sensitive documents, emails, and content remain completely private. The tool also
      works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Case Conversion</h3>
    <p>Text case conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Academic Writing:</strong> Format titles, headings, and references according to specific style
        guidelines</li>
      <li><strong>Programming:</strong> Convert between camelCase, snake_case, and other naming conventions</li>
      <li><strong>Data Processing:</strong> Standardize user-input data for database consistency</li>
      <li><strong>Content Creation:</strong> Create visually appealing social media posts with varied text cases</li>
      <li><strong>Accessibility:</strong> Convert ALL CAPS text to readable sentence case for better comprehension</li>
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

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelector('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    
    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCaseConversion(action);
      });
    });

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
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

      // Word count
      const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Sentence count
      const sentenceCount = text.split(/[.!?]+/).filter(sentence =>
        sentence.trim().length > 0
      ).length;
      document.getElementById('sentenceCount').textContent = sentenceCount;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;
    }

    function handleCaseConversion(action) {
      const text = textInput.value;

      switch (action) {
        case 'uppercase':
          textInput.value = text.toUpperCase();
          break;

        case 'lowercase':
          textInput.value = text.toLowerCase();
          break;

        case 'sentence':
          textInput.value = toSentenceCase(text);
          break;

        case 'capitalized':
          textInput.value = toCapitalizedCase(text);
          break;

        case 'alternating':
          textInput.value = toAlternatingCase(text);
          break;

        case 'title':
          textInput.value = toTitleCase(text);
          break;

        case 'inverse':
          textInput.value = toInverseCase(text);
          break;

        case 'reverse':
          textInput.value = text.split('').reverse().join('');
          break;

        case 'copy':
          copyToClipboard(text);
          break;

        case 'bold':
          textInput.style.fontWeight = textInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
          break;

        case 'italic':
          textInput.style.fontStyle = textInput.style.fontStyle === 'italic' ? 'normal' : 'italic';
          break;

        case 'underline':
          textInput.style.textDecoration = textInput.style.textDecoration === 'underline' ? 'none' : 'underline';
          break;

        case 'download':
          downloadText('converted_text.txt', text);
          break;

        case 'clear':
          textInput.value = '';
          textInput.style.fontWeight = 'normal';
          textInput.style.fontStyle = 'normal';
          textInput.style.textDecoration = 'none';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Case conversion functions
    function toSentenceCase(text) {
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });
    }

    function toCapitalizedCase(text) {
      return text.toLowerCase().replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
    }

    function toAlternatingCase(text) {
      let result = '';
      for (let i = 0; i < text.length; i++) {
        result += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
      }
      return result;
    }

    function toTitleCase(text) {
      const smallWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'on', 'in', 'to', 'by', 'at', 'up', 'off', 'out', 'over', 'with', 'of', 'from', 'as', 'is', 'am', 'are', 'was', 'were', 'be', 'being', 'been', 'do', 'does', 'did', 'has', 'have', 'had', 'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must'];

      return text.toLowerCase().split(' ').map((word, index) => {
        if (index === 0 || !smallWords.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
      }).join(' ');
    }

    function toInverseCase(text) {
      return text.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }).join('');
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Text downloaded successfully!', 'success');
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