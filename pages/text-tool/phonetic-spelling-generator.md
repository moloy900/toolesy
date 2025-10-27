---
layout: default
title: "Online Phonetic Spelling Generator - Convert Text to Phonetic Alphabet"
permalink: /online-phonetic-spelling-generator-convert-text-to-phonetic-alphabet/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Phonetic Spelling Generator - Convert Text to NATO & IPA Online</title>

<meta name="description" content="Free online Phonetic Spelling Generator. Convert words into NATO phonetic alphabet or IPA phonetic symbols. Improve pronunciation and communicate clearly — used by pilots, military & learners.">

<meta name="keywords" content="phonetic spelling, nato phonetic alphabet, ipa converter, phonetic translator, spelling alphabet, military alphabet, aviation communication, phonetic spelling tool">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Phonetic Spelling Generator - Text to NATO & IPA">
<meta property="og:description" content="Convert English words to NATO phonetic or IPA for radio and communication clarity. 100% free & online.">
<meta property="og:url" content="https://toolesy.com/online-phonetic-spelling-generator-convert-text-to-phonetic-alphabet">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online Phonetic Spelling Translator">
<meta name="twitter:description" content="Convert text to NATO phonetic or IPA symbols instantly. No signup required.">

<!-- ✅ FAQ Schema for Google Featured Snippets -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a phonetic spelling generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A phonetic spelling generator converts text into phonetic systems like NATO alphabet or IPA symbols for clearer pronunciation and communication."
      }
    },
    {
      "@type": "Question",
      "name": "Is this phonetic tool free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the phonetic spelling generator is 100% free with unlimited usage. No login required."
      }
    },
    {
      "@type": "Question",
      "name": "Who uses phonetic spelling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pilots, military, call centers, language learners, and anyone needing clear communication across accents and noise."
      }
    }
  ]
}
</script>


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Phonetic Spelling Generator Styles */
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

  .case-button.info {
    background: #17a2b8;
  }

  .case-button.info:hover {
    background: #138496;
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

  /* Phonetic specific styles */
  .phonetic-options {
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

  /* Pronunciation guide */
  .pronunciation-guide {
    margin: 20px 0;
    padding: 20px;
    background: #e8f4f8;
    border-radius: 10px;
    border-left: 4px solid #17a2b8;
  }

  .guide-title {
    color: #138496;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .guide-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  .guide-item {
    padding: 10px;
    background: white;
    border-radius: 6px;
    text-align: center;
    font-family: monospace;
  }

  .guide-letter {
    font-weight: bold;
    color: var(--primary);
    font-size: 1.1rem;
  }

  .guide-word {
    color: #666;
    font-size: 0.9rem;
  }

  /* Audio playback */
  .audio-section {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .audio-controls {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  }

  .audio-button {
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    background: var(--primary);
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .audio-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  .audio-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
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

    .phonetic-options {
      grid-template-columns: 1fr;
    }

    .guide-content {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Phonetic Spelling Generator</h1>
  <p class="welcome-message">Convert text to phonetic spelling using NATO phonetic alphabet, IPA, and other phonetic systems. Perfect for clear communication, learning pronunciation, and professional use.</p>

  <div class="converter-section">
    <h2>Phonetic Spelling Generator</h2>

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
        <span>Phonetic Words: </span>
        <span id="phoneticCount">0</span>
      </div>
      <div class="counter-item">
        <span>Alphabet System: </span>
        <span id="alphabetSystem">NATO</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="4" placeholder="Enter text to convert to phonetic spelling..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.doc,.docx" style="display: none;">

    <div class="phonetic-options">
      <div class="option-group">
        <label class="option-label">Phonetic Alphabet</label>
        <select id="alphabetType" class="option-select">
          <option value="nato">NATO Phonetic</option>
          <option value="ipa">International Phonetic (IPA)</option>
          <option value="military">US Military</option>
          <option value="aviation">Aviation Alphabet</option>
          <option value="police">Police Phonetic</option>
          <option value="english">English Phonetic</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="words">Word Format (Alpha Bravo)</option>
          <option value="codes">Code Format (A-B)</option>
          <option value="full">Full Description</option>
          <option value="compact">Compact Format</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Case Style</label>
        <select id="caseStyle" class="option-select">
          <option value="title">Title Case</option>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="sentence">Sentence case</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Separator</label>
        <select id="separator" class="option-select">
          <option value="space">Space</option>
          <option value="dash">Dash</option>
          <option value="dot">Dot</option>
          <option value="slash">Slash</option>
          <option value="comma">Comma</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="includeOriginal" checked>
          <label for="includeOriginal">Include Original Text</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="groupWords">
          <label for="groupWords">Group by Words</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showPronunciation">
          <label for="showPronunciation">Show Pronunciation Guide</label>
        </div>
      </div>
    </div>

    <div class="pronunciation-guide" id="pronunciationGuide">
      <h3 class="guide-title">Phonetic Alphabet Reference</h3>
      <div class="guide-content" id="alphabetGuide">
        <!-- Alphabet guide will be populated by JavaScript -->
      </div>
    </div>

    <div class="audio-section">
      <h3>Audio Pronunciation</h3>
      <div class="audio-controls">
        <button class="audio-button" id="playAllButton">
          <i class="fas fa-play"></i> Play All
        </button>
        <button class="audio-button" id="playWordButton">
          <i class="fas fa-forward"></i> Play by Word
        </button>
        <button class="audio-button" id="stopButton" disabled>
          <i class="fas fa-stop"></i> Stop
        </button>
        <span id="audioStatus">Ready to play</span>
      </div>
    </div>

    <div class="output-section">
      <h2>Phonetic Spelling Output</h2>
      <pre id="outputText">Phonetic spelling will appear here...</pre>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="generate">Generate Phonetic</button>
        <button class="case-button info" data-action="speak">Speak Text</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download</button>
        <button class="case-button warning" data-action="examples">Show Examples</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Phonetic Spelling Examples</h2>

      <h3>NATO Phonetic Alphabet:</h3>
      <div class="example-text">HELLO: Hotel Echo Lima Lima Oscar
WORLD: Whiskey Oscar Romeo Lima Delta
EMERGENCY: Echo Mike Echo Romeo Golf Echo November Charlie Yankee
SOS: Sierra Oscar Sierra</div>

      <h3>International Phonetic Alphabet (IPA):</h3>
      <div class="example-text">Hello: /hɛˈloʊ/
World: /wɜːrld/
Phonetic: /fəˈnɛtɪk/
Alphabet: /ˈælfəˌbɛt/</div>

      <h3>Common Phrases:</h3>
      <div class="example-text">"Call me back": Charlie Alpha Lima Lima - Mike Echo - Bravo Alpha Charlie Kilo
"Meet at 3 PM": Mike Echo Echo Tango - Alpha Tango - Three - Papa Mike
"Code red": Charlie Oscar Delta Echo - Romeo Echo Delta
"All clear": Alpha Lima Lima - Charlie Lima Echo Alpha Romeo</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Phonetic Spelling Generator Tool</h2>

    <p>Need to communicate clearly over phone, radio, or in noisy environments? Our free <strong>Phonetic Spelling Generator tool</strong> is the perfect solution for military personnel, pilots, customer service representatives, and anyone who needs precise communication. This powerful tool instantly converts text to phonetic spelling using various alphabet systems including NATO phonetic, IPA, military, and aviation alphabets. There's no download required, no registration needed, and your text privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Phonetic Spelling Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your text into the input box above. You can use any text - names, addresses, codes, or important messages.</li>
      <li><strong>Choose Alphabet:</strong> Select from various phonetic alphabet systems including NATO, military, aviation, police, and International Phonetic Alphabet (IPA).</li>
      <li><strong>Customize Output:</strong> Adjust the output format, case style, and separators to match your communication needs.</li>
      <li><strong>Generate & Use:</strong> Click "Generate Phonetic" to convert your text, then copy, download, or use the audio playback to hear proper pronunciation.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a customer service representative needing to confirm an email address over the phone. Instead of struggling with unclear letters like "B" and "D" or "M" and "N", you can use this tool to generate phonetic spelling. For example, "john.doe@example.com" becomes "Juliet Oscar Hotel November Dot Delta Oscar Echo At Echo X-ray Alpha Mike Papa Lima Echo Dot Charlie Oscar Mike" - making it crystal clear and eliminating communication errors.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Military & Law Enforcement:</strong> Use standardized phonetic alphabets for clear radio communication and documentation.</li>
      <li><strong>Aviation Professionals:</strong> Communicate clearly with air traffic control using aviation phonetic alphabet.</li>
      <li><strong>Customer Service:</strong> Confirm spellings of names, email addresses, and important information over the phone.</li>
      <li><strong>Language Learners:</strong> Learn proper pronunciation using International Phonetic Alphabet (IPA) symbols.</li>
      <li><strong>Emergency Services:</strong> Ensure critical information is communicated accurately in high-stress situations.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the NATO phonetic alphabet and why is it used?</strong><br>
      A: The NATO phonetic alphabet is the most widely used spelling alphabet in the world. It assigns code words to each letter of the English alphabet (Alpha for A, Bravo for B, etc.) to ensure letters are clearly understood even when communication is difficult. It's used worldwide in military, aviation, maritime, and emergency services communications.</p>

    <p><strong>Q: What's the difference between NATO phonetic and IPA?</strong><br>
      A: NATO phonetic alphabet uses words to represent letters (Alpha, Bravo, Charlie), making it ideal for spelling out words letter by letter. The International Phonetic Alphabet (IPA) uses symbols to represent sounds (/fəˈnɛtɪk/), making it perfect for showing pronunciation of words in any language.</p>

    <p><strong>Q: Is my text kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The phonetic conversion happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your messages. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets. The audio playback feature works on all modern mobile browsers.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Phonetic Spelling Generator?</h3>
    <p>Our <strong>online Phonetic Spelling Generator</strong> stands out from other tools because of its comprehensive alphabet systems, audio pronunciation features, and privacy protection. Unlike many online tools, we don't store your text on our servers - all processing happens in your browser. This means your sensitive information, confidential codes, and private messages remain completely secure. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Phonetic Spelling</h3>
    <p>Phonetic spelling has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Military Communications:</strong> Ensure clear transmission of coordinates, codes, and important information</li>
      <li><strong>Aviation Safety:</strong> Communicate flight numbers, call signs, and airport codes without ambiguity</li>
      <li><strong>Customer Service:</strong> Confirm spelling of names, email addresses, and product codes over the phone</li>
      <li><strong>Emergency Services:</strong> Relay critical information accurately in high-stress situations</li>
      <li><strong>Language Education:</strong> Learn and teach proper pronunciation using standardized phonetic systems</li>
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

<!-- Examples Modal -->
<div id="examplesModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Phonetic Spelling Examples</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Common Words & Names</h4>
          <div class="example-text">John: Juliet Oscar Hotel November
Sarah: Sierra Alpha Romeo Alpha Hotel
Michael: Mike India Charlie Hotel Alpha Echo Lima
Jennifer: Juliet Echo November November India Foxtrot Echo Romeo
Computer: Charlie Oscar Mike Papa Uniform Tango Echo Romeo
Telephone: Tango Echo Lima Echo Papa Hotel Oscar November Echo</div>
        </div>
        <div>
          <h4>Emergency & Important</h4>
          <div class="example-text">Help: Hotel Echo Lima Papa
Police: Papa Oscar Lima India Charlie Echo
Ambulance: Alpha Mike Bravo Uniform Lima Alpha November Charlie Echo
Fire: Foxtrot India Romeo Echo
Doctor: Delta Oscar Charlie Tango Oscar Romeo
Hospital: Hotel Oscar Sierra Papa India Tango Alpha Lima</div>
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
    const caseButtons = document.querySelectorAll('.case-button');
    const audioButtons = document.querySelectorAll('.audio-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    const alphabetGuide = document.getElementById('alphabetGuide');
    const pronunciationGuide = document.getElementById('pronunciationGuide');
    
    // Phonetic options
    const alphabetType = document.getElementById('alphabetType');
    const outputFormat = document.getElementById('outputFormat');
    const caseStyle = document.getElementById('caseStyle');
    const separator = document.getElementById('separator');
    const includeOriginal = document.getElementById('includeOriginal');
    const groupWords = document.getElementById('groupWords');
    const showPronunciation = document.getElementById('showPronunciation');
    
    // Audio elements
    const playAllButton = document.getElementById('playAllButton');
    const playWordButton = document.getElementById('playWordButton');
    const stopButton = document.getElementById('stopButton');
    const audioStatus = document.getElementById('audioStatus');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const examplesModal = document.getElementById('examplesModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeExamples = document.getElementById('closeExamples');
    
    // Phonetic alphabet dictionaries
    const phoneticAlphabets = {
      nato: {
        name: "NATO Phonetic Alphabet",
        letters: {
          'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
          'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliet',
          'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
          'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
          'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
          'Z': 'Zulu'
        },
        numbers: {
          '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
          '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
        }
      },
      military: {
        name: "US Military Alphabet", 
        letters: {
          'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
          'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliet',
          'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
          'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
          'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
          'Z': 'Zulu'
        },
        numbers: {
          '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Tree', '4': 'Four',
          '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Niner'
        }
      },
      aviation: {
        name: "Aviation Alphabet",
        letters: {
          'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
          'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
          'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
          'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
          'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
          'Z': 'Zulu'
        },
        numbers: {
          '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
          '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Niner'
        }
      },
      police: {
        name: "Police Phonetic Alphabet",
        letters: {
          'A': 'Adam', 'B': 'Boy', 'C': 'Charles', 'D': 'David', 'E': 'Edward',
          'F': 'Frank', 'G': 'George', 'H': 'Henry', 'I': 'Ida', 'J': 'John',
          'K': 'King', 'L': 'Lincoln', 'M': 'Mary', 'N': 'Nora', 'O': 'Ocean',
          'P': 'Paul', 'Q': 'Queen', 'R': 'Robert', 'S': 'Sam', 'T': 'Tom',
          'U': 'Union', 'V': 'Victor', 'W': 'William', 'X': 'X-ray', 'Y': 'Young',
          'Z': 'Zebra'
        },
        numbers: {
          '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
          '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
        }
      },
      english: {
        name: "English Phonetic",
        letters: {
          'A': 'Apple', 'B': 'Ball', 'C': 'Cat', 'D': 'Dog', 'E': 'Egg',
          'F': 'Fish', 'G': 'Goat', 'H': 'Hat', 'I': 'Ice', 'J': 'Jam',
          'K': 'Kite', 'L': 'Lion', 'M': 'Moon', 'N': 'Nest', 'O': 'Orange',
          'P': 'Pig', 'Q': 'Queen', 'R': 'Rose', 'S': 'Sun', 'T': 'Tree',
          'U': 'Umbrella', 'V': 'Violin', 'W': 'Water', 'X': 'Xylophone', 'Y': 'Yoyo',
          'Z': 'Zoo'
        },
        numbers: {
          '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
          '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
        }
      },
      ipa: {
        name: "International Phonetic Alphabet",
        letters: {
          'A': 'æ', 'B': 'b', 'C': 'k', 'D': 'd', 'E': 'ɛ',
          'F': 'f', 'G': 'g', 'H': 'h', 'I': 'ɪ', 'J': 'dʒ',
          'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'ɒ',
          'P': 'p', 'Q': 'kw', 'R': 'r', 'S': 's', 'T': 't',
          'U': 'ʊ', 'V': 'v', 'W': 'w', 'X': 'ks', 'Y': 'j',
          'Z': 'z'
        },
        numbers: {
          '0': 'ˈzɪəroʊ', '1': 'wʌn', '2': 'tuː', '3': 'θriː', '4': 'fɔːr',
          '5': 'faɪv', '6': 'sɪks', '7': 'ˈsɛvən', '8': 'eɪt', '9': 'naɪn'
        }
      }
    };

    // Audio playback state
    let isPlaying = false;
    let currentUtterance = null;
    let wordsToSpeak = [];

    // Initialize
    updateCounts();
    updateAlphabetGuide();

    // Event listeners
    textInput.addEventListener('input', updateCounts);
    
    // Show/hide pronunciation guide
    showPronunciation.addEventListener('change', function() {
      pronunciationGuide.style.display = this.checked ? 'block' : 'none';
    });

    // Update alphabet guide when alphabet type changes
    alphabetType.addEventListener('change', updateAlphabetGuide);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    // Audio button event listeners
    playAllButton.addEventListener('click', playAllPhonetic);
    playWordButton.addEventListener('click', playByWord);
    stopButton.addEventListener('click', stopPlayback);

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
      if (file.type === 'text/plain' || file.name.endsWith('.txt') || 
          file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
          showAlert('File uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a TXT, DOC, or DOCX file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Word count
      const wordCount = text ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Phonetic words count (approximate)
      const phoneticText = generatePhoneticText(text);
      const phoneticWords = (phoneticText.match(/\b\w+\b/g) || []).length;
      document.getElementById('phoneticCount').textContent = phoneticWords;

      // Alphabet system
      const alphabet = phoneticAlphabets[alphabetType.value];
      document.getElementById('alphabetSystem').textContent = alphabet.name;
    }

    function updateAlphabetGuide() {
      const alphabet = phoneticAlphabets[alphabetType.value];
      alphabetGuide.innerHTML = '';
      
      for (const [letter, word] of Object.entries(alphabet.letters)) {
        const guideItem = document.createElement('div');
        guideItem.className = 'guide-item';
        guideItem.innerHTML = `
          <div class="guide-letter">${letter}</div>
          <div class="guide-word">${word}</div>
        `;
        alphabetGuide.appendChild(guideItem);
      }
    }

    function handleAction(action) {
      const text = textInput.value;
      
      switch (action) {
        case 'generate':
          const phoneticText = generatePhoneticText(text);
          outputText.textContent = phoneticText;
          showAlert('Phonetic spelling generated successfully!', 'success');
          break;

        case 'speak':
          speakText(text);
          break;

        case 'copy':
          copyToClipboard(outputText.textContent);
          break;

        case 'download':
          downloadText('phonetic_spelling.txt', outputText.textContent);
          break;

        case 'examples':
          examplesModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          outputText.textContent = 'Phonetic spelling will appear here...';
          stopPlayback();
          updateCounts();
          break;
      }

      updateCounts();
    }

    // Phonetic text generation function
    function generatePhoneticText(text) {
      if (!text.trim()) {
        return 'Please enter some text to generate phonetic spelling.';
      }
      
      const alphabet = phoneticAlphabets[alphabetType.value];
      const sep = getSeparator();
      let result = '';
      
      if (includeOriginal.checked) {
        result += `Original: ${text}\n\n`;
        result += `Phonetic: `;
      }
      
      if (groupWords.checked) {
        // Process word by word
        const words = text.split(/\s+/);
        const phoneticWords = words.map(word => convertWordToPhonetic(word, alphabet, sep));
        result += phoneticWords.join(' / ');
      } else {
        // Process character by character
        result += convertTextToPhonetic(text, alphabet, sep);
      }
      
      return result;
    }

    function convertTextToPhonetic(text, alphabet, separator) {
      let result = '';
      
      for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        
        if (char >= 'A' && char <= 'Z') {
          result += applyCaseStyle(alphabet.letters[char]) + separator;
        } else if (char >= '0' && char <= '9') {
          result += applyCaseStyle(alphabet.numbers[char]) + separator;
        } else if (char === ' ') {
          result += '  ';
        } else {
          // Keep punctuation and other characters as is
          result += char;
        }
      }
      
      // Remove trailing separator
      return result.replace(new RegExp(separator + '$'), '');
    }

    function convertWordToPhonetic(word, alphabet, separator) {
      let phoneticWord = '';
      
      for (let i = 0; i < word.length; i++) {
        const char = word[i].toUpperCase();
        
        if (char >= 'A' && char <= 'Z') {
          phoneticWord += applyCaseStyle(alphabet.letters[char]) + separator;
        } else if (char >= '0' && char <= '9') {
          phoneticWord += applyCaseStyle(alphabet.numbers[char]) + separator;
        } else {
          phoneticWord += char;
        }
      }
      
      // Remove trailing separator
      return phoneticWord.replace(new RegExp(separator + '$'), '');
    }

    function applyCaseStyle(text) {
      switch (caseStyle.value) {
        case 'upper':
          return text.toUpperCase();
        case 'lower':
          return text.toLowerCase();
        case 'title':
          return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        case 'sentence':
          return text;
        default:
          return text;
      }
    }

    function getSeparator() {
      switch (separator.value) {
        case 'space': return ' ';
        case 'dash': return '-';
        case 'dot': return '.';
        case 'slash': return '/';
        case 'comma': return ',';
        default: return ' ';
      }
    }

    // Audio functions
    function playAllPhonetic() {
      const text = outputText.textContent;
      if (!text || text === 'Phonetic spelling will appear here...') {
        showAlert('Please generate phonetic text first.', 'error');
        return;
      }
      
      stopPlayback();
      isPlaying = true;
      updateAudioControls();
      audioStatus.textContent = 'Playing...';
      
      // Extract just the phonetic part for speaking
      let speakText = text;
      if (includeOriginal.checked) {
        const parts = text.split('Phonetic:');
        speakText = parts[1] || text;
      }
      
      currentUtterance = new SpeechSynthesisUtterance(speakText);
      currentUtterance.onend = function() {
        isPlaying = false;
        updateAudioControls();
        audioStatus.textContent = 'Finished playing';
      };
      
      speechSynthesis.speak(currentUtterance);
    }

    function playByWord() {
      const text = outputText.textContent;
      if (!text || text === 'Phonetic spelling will appear here...') {
        showAlert('Please generate phonetic text first.', 'error');
        return;
      }
      
      stopPlayback();
      isPlaying = true;
      updateAudioControls();
      audioStatus.textContent = 'Playing by word...';
      
      // Extract words for sequential playback
      let speakText = text;
      if (includeOriginal.checked) {
        const parts = text.split('Phonetic:');
        speakText = parts[1] || text;
      }
      
      wordsToSpeak = speakText.match(/\b\w+\b/g) || [];
      speakNextWord();
    }

    function speakNextWord() {
      if (!isPlaying || wordsToSpeak.length === 0) {
        isPlaying = false;
        updateAudioControls();
        audioStatus.textContent = 'Finished playing';
        return;
      }
      
      const word = wordsToSpeak.shift();
      currentUtterance = new SpeechSynthesisUtterance(word);
      currentUtterance.onend = speakNextWord;
      speechSynthesis.speak(currentUtterance);
    }

    function stopPlayback() {
      isPlaying = false;
      if (currentUtterance) {
        speechSynthesis.cancel();
        currentUtterance = null;
      }
      wordsToSpeak = [];
      updateAudioControls();
      audioStatus.textContent = 'Stopped';
    }

    function updateAudioControls() {
      playAllButton.disabled = isPlaying;
      playWordButton.disabled = isPlaying;
      stopButton.disabled = !isPlaying;
    }

    function speakText(text) {
      if (!text.trim()) {
        showAlert('Please enter some text to speak.', 'error');
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      showAlert('Speaking text...', 'info');
    }

    function copyToClipboard(text) {
      if (text === 'Phonetic spelling will appear here...' || !text.trim()) {
        showAlert('Please generate phonetic spelling first.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Phonetic spelling copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      if (text === 'Phonetic spelling will appear here...' || !text.trim()) {
        showAlert('Please generate phonetic spelling first.', 'error');
        return;
      }
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Phonetic spelling downloaded successfully!', 'success');
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