---
layout: default
title: "Pig Latin Translator - Online English to Pig Latin Converter"
permalink: /pig-latin-translator-online-english-to-pig-latin-converter/
---

<!-- ✅ Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Pig Latin Translator - Convert English to Pig Latin</title>
<meta name="description" content="Free online Pig Latin translator tool. Convert English to Pig Latin instantly. Learn and have fun with this playful language game.">
<meta name="keywords" content="pig latin translator, pig latin converter, english to pig latin, pig latin generator, language game, fun translator, secret language, translate to pig latin, kids language game, playful translation tool, free translator">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Free Online Pig Latin Translator - Convert English to Pig Latin">
<meta property="og:description" content="Convert English text to Pig Latin instantly. Fun, fast, and free language translator tool.">
<meta property="og:url" content="https://toolesy.com/pig-latin-translator-online-english-to-pig-latin-converter">
<meta property="og:type" content="website">

<!-- ✅ Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Pig Latin Translator - Convert English to Pig Latin">
<meta name="twitter:description" content="Instant Pig Latin translation for fun communication and learning!">

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

  <p>
    Want to turn ordinary English into a fun secret language? Our
    <strong>Pig Latin Translator Tool</strong> makes it easy to convert words,
    sentences, and entire paragraphs into Pig Latin within seconds. Whether
    you're playing language games with friends, teaching children about word
    patterns, creating coded messages, or simply exploring a classic language
    game, this free online tool can help.
  </p>

  <p>
    Pig Latin has been enjoyed by English speakers for generations because it
    transforms familiar words into something that sounds mysterious while still
    following simple rules. Instead of manually converting every word yourself,
    our translator automatically handles the process for you. Just enter your
    text, click a button, and instantly see the translated result.
  </p>

  <p>
    The tool works directly in your browser without requiring downloads,
    registrations, subscriptions, or software installation. Everything happens
    locally, helping keep your text private and secure while providing fast and
    accurate translations whenever you need them.
  </p>

  <h3>How to Use This Pig Latin Translator (Step-by-Step)</h3>

  <ul>
    <li>
      <strong>Enter Your Text:</strong> Type or paste any English word,
      sentence, paragraph, or message into the text box.
    </li>
    <li>
      <strong>Select Translation Direction:</strong> Choose whether you want to
      translate English into Pig Latin or convert Pig Latin back into English.
    </li>
    <li>
      <strong>Customize Settings:</strong> Select available options such as
      dialect variations, capitalization preferences, or formatting choices.
    </li>
    <li>
      <strong>Translate Instantly:</strong> Click the translation button and
      view the converted text immediately.
    </li>
    <li>
      <strong>Copy or Download:</strong> Save the result for messages,
      educational activities, games, or personal use.
    </li>
  </ul>

  <h3>Real-Life Example & Use Case</h3>

  <p>
    Imagine you're organizing a treasure hunt for children. Instead of leaving
    clues in plain English, you want to make the activity more exciting by
    hiding instructions in Pig Latin. For example, the sentence:
  </p>

  <p>
    <strong>"Look behind the big tree."</strong>
  </p>

  <p>
    becomes:
  </p>

  <p>
    <strong>"Ooklay ehindbay ethay igbay eetray."</strong>
  </p>

  <p>
    Participants who know the rules of Pig Latin can quickly decode the clue,
    while others must first figure out the language pattern. This adds an extra
    layer of fun and creativity to educational games, classroom activities, and
    social gatherings.
  </p>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <ul>
    <li>
      <strong>Teachers:</strong> Introduce students to phonics, word patterns,
      and language structures through interactive activities.
    </li>
    <li>
      <strong>Parents:</strong> Encourage children to practice reading and
      spelling in a playful and engaging way.
    </li>
    <li>
      <strong>Students:</strong> Explore language transformation and improve
      vocabulary recognition.
    </li>
    <li>
      <strong>Writers:</strong> Create unique dialogue, secret codes, and
      creative content for stories and games.
    </li>
    <li>
      <strong>Language Enthusiasts:</strong> Experiment with word manipulation
      and linguistic patterns.
    </li>
    <li>
      <strong>Friends & Families:</strong> Exchange secret messages and enjoy
      fun communication challenges.
    </li>
  </ul>

  <h3>Frequently Asked Questions (FAQ)</h3>

  <p>
    <strong>What is Pig Latin?</strong><br>
    Pig Latin is a word game that alters English words according to simple
    pronunciation rules. It is not a separate language but rather a playful way
    of rearranging letters and sounds.
  </p>

  <p>
    <strong>How does Pig Latin work?</strong><br>
    For words beginning with consonants, the first consonant or consonant group
    is moved to the end and followed by "ay." Words that begin with vowels
    usually have "way" added to the end.
  </p>

  <p>
    <strong>Can this tool translate entire paragraphs?</strong><br>
    Yes. You can translate individual words, complete sentences, or large
    blocks of text instantly.
  </p>

  <p>
    <strong>Is Pig Latin difficult to learn?</strong><br>
    Not at all. Most people can learn the basic rules within a few minutes and
    begin reading simple Pig Latin immediately.
  </p>

  <p>
    <strong>Is my text private?</strong><br>
    Yes. The translation takes place directly inside your browser. Your text is
    not uploaded, stored, or shared with external servers.
  </p>

  <p>
    <strong>Does this tool work on mobile devices?</strong><br>
    Absolutely. The translator is fully responsive and works on smartphones,
    tablets, laptops, and desktop computers.
  </p>

  <h3>Why Choose Our Pig Latin Translator?</h3>

  <p>
    Many online translators focus only on basic word conversion. Our Pig Latin
    Translator is designed to provide accurate results while maintaining
    punctuation, capitalization, readability, and ease of use. Because
    everything runs in your browser, translations are fast and your information
    remains private.
  </p>

  <p>
    The clean interface makes the tool suitable for both beginners and advanced
    users. Whether you're translating a single word for fun or creating a long
    coded message, the process is simple and reliable.
  </p>

  <h3>The History of Pig Latin</h3>

  <p>
    Pig Latin has existed for more than a century and became especially popular
    among children in English-speaking countries. Although its exact origin is
    difficult to trace, historical references suggest that versions of Pig
    Latin were already being used during the nineteenth century.
  </p>

  <p>
    The appeal of Pig Latin comes from its simplicity. Anyone can learn it
    quickly, yet it creates a sense of exclusivity because outsiders may not
    immediately understand what is being said.
  </p>

  <p>
    Before modern digital communication, children often used Pig Latin as a
    playful secret language during conversations. Today, it remains popular in
    educational settings, games, and language-learning activities.
  </p>

  <h3>Basic Pig Latin Rules Explained</h3>

  <ul>
    <li>
      <strong>Words Starting with Consonants:</strong> Move the first consonant
      sound to the end and add "ay."
    </li>
    <li>
      <strong>Words Starting with Vowels:</strong> Add "way" or "yay" to the
      end of the word.
    </li>
    <li>
      <strong>Consonant Clusters:</strong> Move the entire beginning cluster,
      such as "ch", "sh", "th", "br", or "st".
    </li>
    <li>
      <strong>Capital Letters:</strong> Preserve capitalization whenever
      possible.
    </li>
    <li>
      <strong>Punctuation:</strong> Maintain punctuation marks to keep sentences
      readable.
    </li>
  </ul>

  <h3>Common Applications of Pig Latin</h3>

  <ul>
    <li><strong>Educational Activities:</strong> Teaching phonics and spelling.</li>
    <li><strong>Language Games:</strong> Creating puzzles and word challenges.</li>
    <li><strong>Secret Messages:</strong> Sharing coded conversations with friends.</li>
    <li><strong>Creative Writing:</strong> Building fictional dialogue and stories.</li>
    <li><strong>Brain Training:</strong> Improving pattern recognition skills.</li>
    <li><strong>Family Entertainment:</strong> Adding fun to conversations and activities.</li>
  </ul>

  <h3>Tips for Becoming Fluent in Pig Latin</h3>

  <ul>
    <li>Start with short words and common phrases.</li>
    <li>Practice translating simple sentences every day.</li>
    <li>Read Pig Latin aloud to improve recognition speed.</li>
    <li>Challenge friends to conversations using Pig Latin.</li>
    <li>Use translation tools to verify your understanding.</li>
    <li>Focus on sound patterns rather than memorization.</li>
  </ul>

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