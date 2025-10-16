---
layout: default
title: "Pig Latin Translator - Online English to Pig Latin Converter"
permalink: /pig-latin-translator-online-english-to-pig-latin-converter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Pig Latin Translator - Convert English to Pig Latin</title>
<meta name="description"
  content="Free online Pig Latin translator tool. Convert English text to Pig Latin instantly. Learn and have fun with this playful language game.">
<meta name="keywords"
  content="pig latin translator, pig latin converter, english to pig latin, pig latin generator, language game, fun translator, secret language, pig latin code">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Pig Latin Translator Styles */
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

  /* Pig Latin specific styles */
  .translation-options {
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

    .translation-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Pig Latin Translator</h1>
  <p class="welcome-message">Convert English text to Pig Latin instantly. Have fun with this playful language game and learn the secret code language used by kids and language enthusiasts worldwide.</p>

  <div class="converter-section">
    <h2>Pig Latin Translator</h2>

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
        <span>Sentence Count: </span>
        <span id="sentenceCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input English Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="englishInput" rows="6" placeholder="Type or paste your English text here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.doc,.docx" style="display: none;">

    <div class="translation-options">
      <div class="option-group">
        <label class="option-label">Translation Type</label>
        <select id="translationType" class="option-select">
          <option value="toPigLatin">English to Pig Latin</option>
          <option value="fromPigLatin">Pig Latin to English</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Dialect Variation</label>
        <select id="dialectType" class="option-select">
          <option value="standard">Standard Pig Latin</option>
          <option value="ay">"ay" Variation</option>
          <option value="way">"way" Variation</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Case Handling</label>
        <select id="caseOption" class="option-select">
          <option value="preserve">Preserve Original Case</option>
          <option value="lower">Convert to Lowercase</option>
          <option value="sentence">Sentence Case</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="preservePunctuation" checked>
          <label for="preservePunctuation">Preserve Punctuation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="preserveNumbers" checked>
          <label for="preserveNumbers">Preserve Numbers</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="translate">Translate to Pig Latin</button>
        <button class="case-button" data-action="reverse">Reverse Translation</button>
        <button class="case-button" data-action="speak">Speak Translation</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Pig Latin Examples</h2>

      <h3>English Text:</h3>
      <div class="example-text">Hello world! This is a secret message in Pig Latin.
How are you doing today?
I love learning new languages and having fun with word games.</div>

      <h3>Pig Latin Translation:</h3>
      <div class="example-text">Ellohay orldway! Isthay isway away ecretsay essagemay inway Igpay Atinlay.
Owhay areway ouyay oingday odaytay?
Iway ovelay earninglay ewnay anguageslay andway avinghay unfay ithway ordway amesgay.</div>

      <h3>Reverse Translation (Back to English):</h3>
      <div class="example-text">Hello world! This is a secret message in Pig Latin.
How are you doing today?
I love learning new languages and having fun with word games.</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Pig Latin Translator Tool</h2>

    <p>Discover the fun and mystery of Pig Latin with our free <strong>Pig Latin Translator tool</strong>! This playful language game has been entertaining children and language enthusiasts for generations. Our powerful tool instantly converts your English text to Pig Latin and vice versa, allowing you to create secret messages, have fun with friends, or simply learn this entertaining language variation. There's no download required, no registration needed, and your text privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Pig Latin Translator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your English text into the large input box above. You can write anything from simple words to complex paragraphs.</li>
      <li><strong>Choose Options:</strong> Select your preferred translation type (English to Pig Latin or vice versa), dialect variation, and case handling options.</li>
      <li><strong>Translate:</strong> Click the "Translate to Pig Latin" button to convert your text instantly. The translation appears immediately in the same box.</li>
      <li><strong>Share & Enjoy:</strong> Use the "Copy" button to share your Pig Latin text with friends, or "Download" to save it for later use.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you want to send a fun, secret message to your friends during a game night. Instead of manually converting each word to Pig Latin (which could be time-consuming and error-prone), you can simply type your message into this tool. By clicking "Translate to Pig Latin", the tool instantly converts "Meet me at the park at six o'clock" into "Eetmay emay atway ethay arkpay atway ixsay o'clockway". You can then copy and send this secret message that only Pig Latin speakers will understand!</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Parents & Teachers:</strong> Introduce children to language patterns and phonetics in a fun, engaging way.</li>
      <li><strong>Language Enthusiasts:</strong> Explore linguistic patterns and have fun with word games and secret codes.</li>
      <li><strong>Friends & Social Groups:</strong> Create secret messages for games, parties, or private conversations.</li>
      <li><strong>Students:</strong> Learn about language structure and word manipulation through playful experimentation.</li>
      <li><strong>Writers & Creatives:</strong> Generate unique character dialogues or create fictional languages inspired by Pig Latin.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What exactly is Pig Latin?</strong><br>
      A: Pig Latin is a language game where words in English are altered according to a simple set of rules. Typically, the first consonant or consonant cluster is moved to the end of the word and "ay" is added (e.g., "hello" becomes "ellohay").</p>

    <p><strong>Q: Are there different versions of Pig Latin?</strong><br>
      A: Yes, there are variations! Our tool supports the standard version as well as "ay" and "way" variations. The standard version moves the first consonant cluster and adds "ay", while variations might handle vowel-starting words differently.</p>

    <p><strong>Q: Is my text kept private and secure when I use this translator?</strong><br>
      A: Absolutely. This is a core principle of our tool. The translation happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your messages. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Pig Latin Translator?</h3>
    <p>Our <strong>online Pig Latin translator</strong> stands out from other tools because of its accuracy, flexibility, and privacy features. Unlike many online tools, we don't store your text on our servers - all processing happens in your browser. This means your private messages, creative writing, and personal texts remain completely secure. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>The History and Rules of Pig Latin</h3>
    <p>Pig Latin has been a popular language game in English-speaking countries since at least the 19th century. The basic rules are simple:</p>
    <ul>
      <li><strong>Words starting with consonants:</strong> Move the first consonant or consonant cluster to the end and add "ay" (e.g., "hello" → "ellohay")</li>
      <li><strong>Words starting with vowels:</strong> Simply add "way" or "ay" to the end (e.g., "apple" → "appleway" or "appleay")</li>
      <li><strong>Compound words:</strong> Treat each part separately according to the rules</li>
      <li><strong>Punctuation and capitalization:</strong> Typically preserved to maintain readability</li>
    </ul>

    <h3>Common Applications of Pig Latin</h3>
    <p>Pig Latin serves various fun and practical purposes:</p>
    <ul>
      <li><strong>Educational Tool:</strong> Teach children about phonics, syllables, and word structure</li>
      <li><strong>Secret Communication:</strong> Create messages that are easy for initiates to understand but confusing to outsiders</li>
      <li><strong>Entertainment:</strong> Add fun to parties, games, and social gatherings</li>
      <li><strong>Language Learning:</strong> Develop awareness of linguistic patterns and word manipulation</li>
      <li><strong>Creative Writing:</strong> Develop unique character voices or create fictional languages</li>
    </ul>

    <h3>Tips for Speaking Pig Latin Fluently</h3>
    <p>Once you've translated text using our tool, try speaking it aloud! Here are some tips:</p>
    <ul>
      <li>Practice with simple, common words first</li>
      <li>Speak slowly at first to get used to the sound patterns</li>
      <li>Remember that the rhythm and flow are different from regular English</li>
      <li>Use context clues when listening to others speak Pig Latin</li>
      <li>Have fun and don't worry about making mistakes - it's a game!</li>
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
      <p>Select a text file (.txt, .doc, .docx) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.doc,.docx">
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
      <h3 class="modal-title">Compare Translation</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Text</h4>
          <textarea id="originalText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Translated Text</h4>
          <textarea id="translatedText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const englishInput = document.getElementById('englishInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Translation options
    const translationType = document.getElementById('translationType');
    const dialectType = document.getElementById('dialectType');
    const caseOption = document.getElementById('caseOption');
    const preservePunctuation = document.getElementById('preservePunctuation');
    const preserveNumbers = document.getElementById('preserveNumbers');
    
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
    const translatedText = document.getElementById('translatedText');
    

    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    englishInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleTranslationAction(action);
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
      if (file.type === 'text/plain' || 
          file.name.endsWith('.txt') || 
          file.name.endsWith('.doc') || 
          file.name.endsWith('.docx')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          englishInput.value = e.target.result;
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
        showAlert('Unsupported file format. Please upload a text file (TXT, DOC, DOCX).', 'error');
      }
    });

    function updateCounts() {
      const text = englishInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Word count (approximate)
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = words;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Sentence count (approximate)
      const sentenceCount = (text.match(/[.!?]+/g) || []).length;
      document.getElementById('sentenceCount').textContent = sentenceCount;
    }

    function handleTranslationAction(action) {
      const text = englishInput.value;
      
      // Store original text for comparison
      if (action === 'translate' || action === 'reverse') {
        originalTextContent = text;
      }

      switch (action) {
        case 'translate':
          if (translationType.value === 'toPigLatin') {
            englishInput.value = translateToPigLatin(text);
            showAlert('Text translated to Pig Latin successfully!', 'success');
          } else {
            englishInput.value = translateFromPigLatin(text);
            showAlert('Pig Latin translated to English successfully!', 'success');
          }
          break;

        case 'reverse':
          // Toggle between English and Pig Latin
          if (isPigLatin(text)) {
            englishInput.value = translateFromPigLatin(text);
            showAlert('Pig Latin translated to English successfully!', 'success');
          } else {
            englishInput.value = translateToPigLatin(text);
            showAlert('Text translated to Pig Latin successfully!', 'success');
          }
          break;

        case 'speak':
          speakText(englishInput.value);
          break;

        case 'copy':
          copyToClipboard(englishInput.value);
          break;

        case 'download':
          downloadText('pig_latin_translation.txt', englishInput.value);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please translate text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          translatedText.value = englishInput.value;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          englishInput.value = '';
          originalTextContent = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Translate English to Pig Latin
    function translateToPigLatin(text) {
      // Handle case option
      let processedText = text;
      if (caseOption.value === 'lower') {
        processedText = processedText.toLowerCase();
      } else if (caseOption.value === 'sentence') {
        processedText = processedText.charAt(0).toUpperCase() + processedText.slice(1).toLowerCase();
      }
      
      // Split into words and process each one
      const words = processedText.split(/\b/);
      let result = [];
      
      for (let word of words) {
        if (isWord(word)) {
          result.push(convertWordToPigLatin(word));
        } else {
          result.push(word);
        }
      }
      
      return result.join('');
    }
    
    // Convert a single word to Pig Latin
    function convertWordToPigLatin(word) {
      if (!isWord(word)) return word;
      
      // Handle case preservation
      const wasCapitalized = word[0] === word[0].toUpperCase();
      const lowerWord = word.toLowerCase();
      
      // Check if word starts with vowel
      const vowels = 'aeiou';
      let pigLatinWord;
      
      if (vowels.includes(lowerWord[0])) {
        // Word starts with vowel
        if (dialectType.value === 'way') {
          pigLatinWord = lowerWord + 'way';
        } else {
          pigLatinWord = lowerWord + 'ay';
        }
      } else {
        // Word starts with consonant
        let consonantCluster = '';
        let i = 0;
        
        // Find the consonant cluster
        while (i < lowerWord.length && !vowels.includes(lowerWord[i])) {
          consonantCluster += lowerWord[i];
          i++;
        }
        
        // Handle 'qu' as a special case
        if (consonantCluster.endsWith('q') && i < lowerWord.length && lowerWord[i] === 'u') {
          consonantCluster += 'u';
          i++;
        }
        
        const remaining = lowerWord.substring(i);
        pigLatinWord = remaining + consonantCluster + 'ay';
      }
      
      // Restore capitalization if needed
      if (wasCapitalized && caseOption.value === 'preserve') {
        pigLatinWord = pigLatinWord.charAt(0).toUpperCase() + pigLatinWord.slice(1);
      }
      
      return pigLatinWord;
    }
    
    // Translate Pig Latin back to English
    function translateFromPigLatin(text) {
      // Split into words and process each one
      const words = text.split(/\b/);
      let result = [];
      
      for (let word of words) {
        if (isWord(word) && isPigLatinWord(word)) {
          result.push(convertPigLatinToEnglish(word));
        } else {
          result.push(word);
        }
      }
      
      return result.join('');
    }
    
    // Convert a single Pig Latin word back to English
    function convertPigLatinToEnglish(word) {
      if (!isPigLatinWord(word)) return word;
      
      const lowerWord = word.toLowerCase();
      let englishWord;
      
      // Check for vowel-starting pattern (ends with 'way' or 'ay')
      if (lowerWord.endsWith('way') && lowerWord.length > 3) {
        englishWord = lowerWord.slice(0, -3);
      } else if (lowerWord.endsWith('ay') && lowerWord.length > 2) {
        // Find where the 'ay' suffix starts and move consonants back to front
        const base = lowerWord.slice(0, -2);
        let consonants = '';
        let i = base.length - 1;
        
        // Find consonant cluster at the end
        const vowels = 'aeiou';
        while (i >= 0 && !vowels.includes(base[i])) {
          consonants = base[i] + consonants;
          i--;
        }
        
        // Handle 'qu' special case
        if (consonants.startsWith('u') && base[i] === 'q') {
          consonants = 'q' + consonants;
          i--;
        }
        
        englishWord = consonants + base.substring(0, i + 1);
      } else {
        return word; // Not a valid Pig Latin word
      }
      
      // Restore original case if needed
      if (word[0] === word[0].toUpperCase() && caseOption.value === 'preserve') {
        englishWord = englishWord.charAt(0).toUpperCase() + englishWord.slice(1);
      }
      
      return englishWord;
    }
    
    // Check if a string is a word (contains letters)
    function isWord(str) {
      return /[a-zA-Z]/.test(str);
    }
    
    // Check if a word appears to be in Pig Latin
    function isPigLatinWord(word) {
      const lowerWord = word.toLowerCase();
      return (lowerWord.endsWith('ay') || lowerWord.endsWith('way')) && lowerWord.length > 2;
    }
    
    // Check if text appears to be in Pig Latin
    function isPigLatin(text) {
      const words = text.split(/\b/).filter(isWord);
      if (words.length === 0) return false;
      
      const pigLatinWords = words.filter(isPigLatinWord);
      return pigLatinWords.length / words.length > 0.5; // More than 50% Pig Latin words
    }
    
    // Text-to-speech function
    function speakText(text) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8; // Slower speed for clarity
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
        showAlert('Speaking translation...', 'success');
      } else {
        showAlert('Text-to-speech is not supported in your browser.', 'error');
      }
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