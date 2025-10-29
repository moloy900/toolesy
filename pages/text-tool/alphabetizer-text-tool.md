---
layout: default
title: "Online Alphabetizer Text Tool - Sort A-Z, Z-A, Remove Duplicates"
permalink: /online-alphabetizer-text-tool-sort-a-z-z-a-remove-duplicates/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Alphabetizer ✨ Free Online Text Sorter (A-Z, Z-A, Remove Duplicates)</title>

<meta name="description" content="Free Alphabetizer tool to sort text alphabetically (A-Z or Z-A), remove duplicates, sort by length, and clean up lists instantly. Perfect for students, writers & data tasks — no login needed.">

<meta name="keywords" content="alphabetizer, text alphabetizer, sort text online, remove duplicates online, sort list alphabetically, text sorter, a-z z-a sorter, sort list tool, alphabetical order online, text cleanup tool, list sorter tool">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph (OG) Tags -->
<meta property="og:title" content="Free Online Alphabetizer ✨ Sort Text A-Z, Z-A & Remove Duplicates">
<meta property="og:description" content="Sort text alphabetically, remove duplicate lines, sort by length & organize lists fast. 100% free alphabetical text sorter.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.toolesy.com/online-alphabetizer-text-tool-sort-a-z-z-a-remove-duplicates">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Alphabetizer ✨ Free Online Text Sorter Tool">
<meta name="twitter:description" content="Sort text A-Z, Z-A or by length and remove duplicates instantly. Perfect for all devices!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Alphabetizer Styles */
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

  /* Alphabetizer specific styles */
  .sorting-options {
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

    .sorting-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Alphabetizer Text Tool</h1>
  <p class="welcome-message">Sort text alphabetically (A-Z or Z-A), remove duplicates, and organize by length. Perfect for organizing lists, names, and any text data.</p>

  <div class="converter-section">
    <h2>Text Alphabetizer</h2>

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
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Unique Items: </span>
        <span id="uniqueCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Paste your text here (one item per line for best results)..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.csv" style="display: none;">

    <div class="sorting-options">
      <div class="option-group">
        <label class="option-label">Sort Direction</label>
        <select id="sortDirection" class="option-select">
          <option value="a-z">A to Z (Ascending)</option>
          <option value="z-a">Z to A (Descending)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Sort Method</label>
        <select id="sortMethod" class="option-select">
          <option value="alphabetical">Alphabetical</option>
          <option value="length-asc">Short to Long</option>
          <option value="length-desc">Long to Short</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Case Sensitivity</label>
        <select id="caseSensitivity" class="option-select">
          <option value="case-insensitive">Case Insensitive</option>
          <option value="case-sensitive">Case Sensitive</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="lines">One per Line</option>
          <option value="comma">Comma Separated</option>
          <option value="semicolon">Semicolon Separated</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="removeDuplicates" checked>
          <label for="removeDuplicates">Remove Duplicates</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="trimSpaces" checked>
          <label for="trimSpaces">Trim Spaces</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="ignoreEmpty" checked>
          <label for="ignoreEmpty">Ignore Empty Lines</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="sort-a-z">Sort A-Z</button>
        <button class="case-button" data-action="sort-z-a">Sort Z-A</button>
        <button class="case-button" data-action="remove-duplicates">Remove Duplicates</button>
        <button class="case-button" data-action="sort-length">Sort by Length</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Sorting:</h3>
      <div class="example-text">Apple
Orange
Banana
apple
Grape
banana
Cherry
Orange</div>

      <h3>After Sorting A-Z (Case Insensitive, Remove Duplicates):</h3>
      <div class="example-text">Apple
Banana
Cherry
Grape
Orange</div>

      <h3>After Sorting Z-A (Case Insensitive, Remove Duplicates):</h3>
      <div class="example-text">Orange
Grape
Cherry
Banana
Apple</div>

      <h3>After Sorting Short to Long:</h3>
      <div class="example-text">Apple
Grape
Orange
Banana
Cherry</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Alphabetizer Text Tool</h2>

    <p>Need to organize a list of names, words, or any text data? Our free <strong>Alphabetizer Text Tool</strong> is the perfect solution for students, teachers, researchers, and professionals. This powerful tool instantly sorts your text alphabetically (A-Z or Z-A), removes duplicates, and organizes items by length. You can process lists of any size with customizable options for case sensitivity and output format. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Alphabetizer Tool (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste Text:</strong> Copy your text from any source (document, spreadsheet, or website) and paste it into the large input box above. For best results, put each item on a separate line.</li>
      <li><strong>Customize Options:</strong> Adjust the sorting options like direction (A-Z or Z-A), case sensitivity, and whether to remove duplicates according to your needs.</li>
      <li><strong>Sort Text:</strong> Click the appropriate button to sort your text alphabetically, remove duplicates, or sort by length.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the sorted text for pasting elsewhere, or use "Download" to save it as a .txt file on your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a teacher with a list of 50 student names that you need to organize alphabetically for a class roster. Instead of manually sorting them (which could take 10-15 minutes), you can simply paste the names into this tool. By selecting "Sort A-Z" and enabling "Remove Duplicates", the tool will instantly organize all names in perfect alphabetical order, removing any duplicates in less than a second.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Teachers & Educators:</strong> Quickly organize student names, vocabulary lists, or reference materials alphabetically.</li>
      <li><strong>Researchers:</strong> Sort research data, bibliographies, or reference lists efficiently.</li>
      <li><strong>Writers & Editors:</strong> Organize character names, locations, or plot points for stories and books.</li>
      <li><strong>Administrative Staff:</strong> Sort contact lists, inventory items, or any business-related data.</li>
      <li><strong>Students:</strong> Organize study materials, reference lists, or any academic content.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between A-Z and Z-A sorting?</strong><br>
      A: A-Z sorting arranges text in ascending alphabetical order (from A to Z), while Z-A sorting arranges text in descending alphabetical order (from Z to A).</p>

    <p><strong>Q: Can this tool handle large lists of items?</strong><br>
      A: Yes, you can process very large lists with thousands of items without any issue. The tool is built to handle extensive text data efficiently.</p>

    <p><strong>Q: Is my text data kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The sorting happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Alphabetizer Text Tool?</h3>
    <p>Our <strong>online alphabetizer</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your proprietary lists, client data, and sensitive information remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Text Alphabetization</h3>
    <p>Text alphabetization has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Education:</strong> Organize student rosters, reading lists, and educational materials</li>
      <li><strong>Business:</strong> Sort customer databases, product catalogs, and inventory lists</li>
      <li><strong>Research:</strong> Arrange bibliographies, reference lists, and research data</li>
      <li><strong>Writing:</strong> Organize character names, locations, and plot elements for stories</li>
      <li><strong>Personal Use:</strong> Sort contact lists, to-do items, or any personal collections</li>
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
      <p>Select a text file (.txt or .csv) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.csv">
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
          <h4>Sorted Text</h4>
          <textarea id="sortedText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Sorting options
    const sortDirection = document.getElementById('sortDirection');
    const sortMethod = document.getElementById('sortMethod');
    const caseSensitivity = document.getElementById('caseSensitivity');
    const outputFormat = document.getElementById('outputFormat');
    const removeDuplicates = document.getElementById('removeDuplicates');
    const trimSpaces = document.getElementById('trimSpaces');
    const ignoreEmpty = document.getElementById('ignoreEmpty');
    
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
    const sortedText = document.getElementById('sortedText');
    

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
      if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
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
        showAlert('Unsupported file format. Please upload a TXT or CSV file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Word count (approximate)
      const wordCount = text ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Unique items count
      const lines = text.split('\n').filter(line => line.trim() !== '');
      const uniqueItems = new Set(lines.map(line => caseSensitivity.value === 'case-insensitive' ? line.toLowerCase().trim() : line.trim()));
      document.getElementById('uniqueCount').textContent = uniqueItems.size;
    }

    function handleTextAction(action) {
      const text = textInput.value;
      
      // Store original text for comparison
      if (action === 'sort-a-z' || action === 'sort-z-a' || action === 'remove-duplicates' || action === 'sort-length') {
        originalTextContent = text;
      }

      switch (action) {
        case 'sort-a-z':
          textInput.value = sortText(text, 'a-z');
          showAlert('Text sorted A-Z successfully!', 'success');
          break;

        case 'sort-z-a':
          textInput.value = sortText(text, 'z-a');
          showAlert('Text sorted Z-A successfully!', 'success');
          break;

        case 'remove-duplicates':
          textInput.value = removeDuplicateLines(text);
          showAlert('Duplicates removed successfully!', 'success');
          break;

        case 'sort-length':
          textInput.value = sortByLength(text);
          showAlert('Text sorted by length successfully!', 'success');
          break;

        case 'copy':
          copyToClipboard(text);
          break;

        case 'download':
          downloadText('sorted_text.txt', text);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please sort or process text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          sortedText.value = text;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          originalTextContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Text sorting function
    function sortText(text, direction) {
      // Split text into lines
      let lines = text.split('\n');
      
      // Process lines based on options
      lines = lines.map(line => {
        if (trimSpaces.checked) {
          line = line.trim();
        }
        return line;
      });
      
      // Filter empty lines if option is checked
      if (ignoreEmpty.checked) {
        lines = lines.filter(line => line !== '');
      }
      
      // Remove duplicates if option is checked
      if (removeDuplicates.checked) {
        if (caseSensitivity.value === 'case-insensitive') {
          const seen = new Set();
          lines = lines.filter(line => {
            const lower = line.toLowerCase();
            if (seen.has(lower)) {
              return false;
            }
            seen.add(lower);
            return true;
          });
        } else {
          lines = [...new Set(lines)];
        }
      }
      
      // Sort lines
      if (caseSensitivity.value === 'case-insensitive') {
        lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      } else {
        lines.sort();
      }
      
      // Reverse if Z-A direction
      if (direction === 'z-a') {
        lines.reverse();
      }
      
      // Format output
      let output;
      switch (outputFormat.value) {
        case 'comma':
          output = lines.join(', ');
          break;
        case 'semicolon':
          output = lines.join('; ');
          break;
        default: // lines
          output = lines.join('\n');
      }
      
      return output;
    }
    
    // Remove duplicate lines function
    function removeDuplicateLines(text) {
      let lines = text.split('\n');
      
      // Process lines based on options
      lines = lines.map(line => {
        if (trimSpaces.checked) {
          line = line.trim();
        }
        return line;
      });
      
      // Filter empty lines if option is checked
      if (ignoreEmpty.checked) {
        lines = lines.filter(line => line !== '');
      }
      
      // Remove duplicates
      if (caseSensitivity.value === 'case-insensitive') {
        const seen = new Set();
        lines = lines.filter(line => {
          const lower = line.toLowerCase();
          if (seen.has(lower)) {
            return false;
          }
          seen.add(lower);
          return true;
        });
      } else {
        lines = [...new Set(lines)];
      }
      
      // Format output
      let output;
      switch (outputFormat.value) {
        case 'comma':
          output = lines.join(', ');
          break;
        case 'semicolon':
          output = lines.join('; ');
          break;
        default: // lines
          output = lines.join('\n');
      }
      
      return output;
    }
    
    // Sort by length function
    function sortByLength(text) {
      // Split text into lines
      let lines = text.split('\n');
      
      // Process lines based on options
      lines = lines.map(line => {
        if (trimSpaces.checked) {
          line = line.trim();
        }
        return line;
      });
      
      // Filter empty lines if option is checked
      if (ignoreEmpty.checked) {
        lines = lines.filter(line => line !== '');
      }
      
      // Remove duplicates if option is checked
      if (removeDuplicates.checked) {
        if (caseSensitivity.value === 'case-insensitive') {
          const seen = new Set();
          lines = lines.filter(line => {
            const lower = line.toLowerCase();
            if (seen.has(lower)) {
              return false;
            }
            seen.add(lower);
            return true;
          });
        } else {
          lines = [...new Set(lines)];
        }
      }
      
      // Sort by length
      if (sortMethod.value === 'length-asc') {
        lines.sort((a, b) => a.length - b.length);
      } else if (sortMethod.value === 'length-desc') {
        lines.sort((a, b) => b.length - a.length);
      }
      
      // Format output
      let output;
      switch (outputFormat.value) {
        case 'comma':
          output = lines.join(', ');
          break;
        case 'semicolon':
          output = lines.join('; ');
          break;
        default: // lines
          output = lines.join('\n');
      }
      
      return output;
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