---
layout: default
title: "Case Converter – Change Text to Upper, Lower & Title"
permalink: /online-case-converter-change-text-to-upper-lower-title-case/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Case Converter – Change Text to Upper, Lower & Title</title>

<meta name="description" content="Free online Case Converter tool. Instantly change text to uppercase, lowercase, title case, sentence case, and more. Perfect for students, writers, bloggers, and developers. No signup needed.">

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

  <h2>Free Online Case Converter Tool – Instantly Change Text Case in Seconds</h2>

  <p>
    Working with text often involves more than simply writing words. Whether you're preparing a school assignment,
    editing a business document, formatting website content, or organizing data in a spreadsheet, proper text
    capitalization plays an important role in readability and professionalism. Unfortunately, manually correcting text
    case can be time-consuming, especially when dealing with long paragraphs, articles, reports, or databases.
  </p>

  <p>
    Our <strong>Free Online Case Converter Tool</strong> makes this task effortless. With a single click, you can
    instantly transform text into UPPERCASE, lowercase, Title Case, Sentence case, Capitalized Case, and several other
    formatting styles. Instead of spending valuable time editing each word manually, simply paste your content, choose
    the desired format, and let the tool do the work automatically.
  </p>

  <p>
    Designed for students, writers, marketers, programmers, office professionals, and everyday users, this tool works
    entirely inside your browser. No software installation is required, no account creation is necessary, and your text
    never leaves your device. Everything is processed locally for maximum privacy and security.
  </p>

  <h3>What Is a Case Converter?</h3>

  <p>
    A case converter is a text formatting tool that changes the capitalization style of words and sentences. It helps
    users quickly transform text into different letter cases without manually editing each character.
  </p>

  <p>
    For example, a sentence like:
  </p>

  <blockquote>
    "welcome to our online text tools platform"
  </blockquote>

  <p>
    can instantly become:
  </p>

  <ul>
    <li><strong>UPPERCASE:</strong> WELCOME TO OUR ONLINE TEXT TOOLS PLATFORM</li>
    <li><strong>lowercase:</strong> welcome to our online text tools platform</li>
    <li><strong>Title Case:</strong> Welcome To Our Online Text Tools Platform</li>
    <li><strong>Sentence case:</strong> Welcome to our online text tools platform</li>
  </ul>

  <p>
    This simple transformation improves readability and ensures that content follows proper formatting standards.
  </p>

  <h3>How to Use This Case Converter Tool</h3>

  <p>
    The tool has been designed with simplicity in mind. Even if you have never used a text formatting utility before,
    you can start converting text immediately.
  </p>

  <ul>
    <li>
      <strong>Step 1: Paste Your Text</strong><br>
      Copy content from documents, emails, websites, spreadsheets, or any other source and paste it into the input
      area.
    </li>

    <li>
      <strong>Step 2: Choose a Case Format</strong><br>
      Select the text style that best fits your needs. Options include uppercase, lowercase, sentence case, title
      case, and more.
    </li>

    <li>
      <strong>Step 3: Convert Instantly</strong><br>
      Click the appropriate conversion button. The tool processes your text immediately and displays the result.
    </li>

    <li>
      <strong>Step 4: Copy or Download</strong><br>
      Copy the converted text to your clipboard or download it for future use.
    </li>
  </ul>

  <h3>Why Proper Text Capitalization Matters</h3>

  <p>
    Correct capitalization isn't just about appearance. It directly affects how readers perceive your content.
    Properly formatted text appears more professional, easier to understand, and more trustworthy.
  </p>

  <p>
    Imagine receiving a business proposal written entirely in lowercase letters. Even if the content is excellent, the
    formatting may appear careless. Likewise, text written entirely in uppercase can feel aggressive and difficult to
    read.
  </p>

  <p>
    By applying the appropriate case style, you improve communication, enhance readability, and create a better user
    experience.
  </p>

  <h3>Different Types of Text Cases Explained</h3>

  <p>
    Understanding the available case formats helps you choose the best option for your specific situation.
  </p>

  <ul>
    <li>
      <strong>UPPERCASE</strong><br>
      Converts every letter into capital letters. Commonly used for warnings, headings, announcements, and emphasis.
    </li>

    <li>
      <strong>lowercase</strong><br>
      Converts all letters into small letters. Often used for data normalization and database cleaning.
    </li>

    <li>
      <strong>Title Case</strong><br>
      Capitalizes the first letter of major words. Commonly used for article titles, headlines, and book names.
    </li>

    <li>
      <strong>Sentence case</strong><br>
      Capitalizes only the first word of each sentence along with proper nouns.
    </li>

    <li>
      <strong>Capitalize Each Word</strong><br>
      Converts every word so that its first letter becomes uppercase.
    </li>

    <li>
      <strong>Inverse Case</strong><br>
      Reverses existing capitalization by converting uppercase letters to lowercase and vice versa.
    </li>
  </ul>

  <h3>Real-Life Example</h3>

  <p>
    Suppose a company receives thousands of customer records from multiple sources. Some names are entered in
    uppercase, some in lowercase, and others contain inconsistent formatting.
  </p>

  <p>
    Instead of manually correcting each entry, the team can paste the list into the Case Converter Tool and standardize
    everything within seconds. This improves data quality and creates a more professional database.
  </p>

  <h3>Who Can Benefit from a Case Converter?</h3>

  <ul>
    <li>
      <strong>Students</strong><br>
      Format assignments, reports, references, and academic titles according to style guidelines.
    </li>

    <li>
      <strong>Content Writers</strong><br>
      Correct capitalization before publishing articles, blogs, and web content.
    </li>

    <li>
      <strong>Editors</strong><br>
      Quickly standardize large amounts of text while proofreading manuscripts.
    </li>

    <li>
      <strong>Programmers</strong><br>
      Format variables, strings, and user-generated data consistently.
    </li>

    <li>
      <strong>Digital Marketers</strong><br>
      Create attention-grabbing headlines and social media captions.
    </li>

    <li>
      <strong>Office Professionals</strong><br>
      Prepare business documents, emails, presentations, and reports with proper formatting.
    </li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>Is this Case Converter completely free?</strong><br>
    Yes. The tool is available free of charge with no subscriptions, hidden fees, or usage limits.
  </p>

  <p>
    <strong>Can I convert long articles?</strong><br>
    Absolutely. The tool can handle large blocks of text, making it suitable for essays, reports, blog posts, and
    research papers.
  </p>

  <p>
    <strong>Is my data secure?</strong><br>
    Yes. All processing occurs directly in your browser. Your content is never uploaded to external servers.
  </p>

  <p>
    <strong>Does the tool work on mobile devices?</strong><br>
    Yes. It works seamlessly on smartphones, tablets, laptops, and desktop computers.
  </p>

  <h3>Why Choose Our Online Case Converter?</h3>

  <p>
    There are many text formatting tools available online, but our Case Converter focuses on what matters most:
    simplicity, speed, accuracy, and privacy. Whether you're editing a few words or thousands of lines of text, the
    tool delivers instant results without compromising your data security.
  </p>

  <p>
    Because all processing happens locally within your browser, you maintain complete control over your information.
    This makes the tool ideal for handling sensitive business documents, academic papers, personal notes, and
    professional communications.
  </p>

  <h3>Common Applications of Case Conversion</h3>

  <ul>
    <li><strong>Academic Writing:</strong> Formatting titles, references, and research papers.</li>
    <li><strong>Business Communication:</strong> Standardizing reports, emails, and presentations.</li>
    <li><strong>Data Cleaning:</strong> Normalizing customer records and spreadsheet data.</li>
    <li><strong>Web Content Creation:</strong> Creating properly formatted headlines and article titles.</li>
    <li><strong>Programming:</strong> Managing naming conventions and user-generated content.</li>
    <li><strong>Social Media:</strong> Designing captions and posts with emphasis and style.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>
    A reliable Case Converter is one of the most useful text-processing tools available today. Whether you're a student,
    writer, editor, developer, marketer, or office professional, it helps eliminate tedious manual formatting while
    improving consistency and readability.
  </p>

  <p>
    Try our Free Online Case Converter Tool today and transform your text into the perfect format instantly—without
    downloads, registrations, or privacy concerns.
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