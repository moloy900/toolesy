---
layout: default
title: "Online XML Formatter - Format, Validate & Beautify XML"
permalink: /online-xml-formatter-format-validate-beautify/
---


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>XML Formatter Online — Format, Validate & Beautify XML Free</title>

<meta name="description"
  content="Free XML Formatter and Validator tool. Format, beautify, and check XML syntax errors instantly with proper indentation. Make your XML readable and clean — no signup required.">

<meta name="keywords"
  content="xml formatter, xml beautifier, online xml validator, xml prettifier, format xml online, xml editor tool, xml syntax checker, xml parser online, xml code formatter">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="XML Formatter & Validator Online — Format XML Instantly">
<meta property="og:description" content="Beautify and validate XML code in one click. Easy-to-use online XML formatter with syntax highlighting and indentation.">
<meta property="og:url" content="https://toolesy.com/online-xml-formatter-format-validate-beautify">
<meta property="og:site_name" content="ToolEsy">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online XML Formatter & Checker">
<meta name="twitter:description" content="Instant XML beautifier and validator. Format unreadable XML into clean and structured code for better readability.">

<!-- ✅ FAQ Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an XML Formatter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An XML formatter formats messy XML code into a properly structured and readable form with correct indentation and syntax highlighting."
      }
    },
    {
      "@type": "Question",
      "name": "Is this XML formatter free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! This XML Formatter and Validator is 100% free. No signup or software installation required."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool validate XML for errors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This tool validates XML structure and highlights any syntax errors so they can be corrected easily."
      }
    }
  ]
}
</script>


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* XML Formatter Styles */
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
    font-family: monospace;
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

  /* XML specific styles */
  .xml-tag {
    color: #905;
  }

  .xml-attr-name {
    color: #07a;
  }

  .xml-attr-value {
    color: #690;
  }

  .xml-comment {
    color: #999;
  }

  .xml-content {
    color: #333;
  }

  .format-options {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0;
    padding: 15px;
    background: white;
    border-radius: 8px;
  }

  .format-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .format-option label {
    font-weight: 500;
    color: #555;
  }

  .format-option input[type="number"] {
    width: 60px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
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
  <h1>Free Online XML Formatter & Validator</h1>
  <p class="welcome-message">Format, validate and beautify your XML code instantly. Make your XML readable with proper indentation and syntax highlighting. No signup required.</p>

  <div class="converter-section">
    <h2>XML Formatter & Validator</h2>

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
        <span>Element Count: </span>
        <span id="elementCount">0</span>
      </div>
      <div class="counter-item">
        <span>Attribute Count: </span>
        <span id="attributeCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input XML <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="xmlInput" rows="6" placeholder="Paste your XML code here...">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;catalog&gt;
&lt;book id="bk101"&gt;&lt;author&gt;Gambardella, Matthew&lt;/author&gt;&lt;title&gt;XML Developer's Guide&lt;/title&gt;&lt;genre&gt;Computer&lt;/genre&gt;&lt;price&gt;44.95&lt;/price&gt;&lt;publish_date&gt;2000-10-01&lt;/publish_date&gt;&lt;description&gt;An in-depth look at creating applications with XML.&lt;/description&gt;&lt;/book&gt;
&lt;book id="bk102"&gt;&lt;author&gt;Ralls, Kim&lt;/author&gt;&lt;title&gt;Midnight Rain&lt;/title&gt;&lt;genre&gt;Fantasy&lt;/genre&gt;&lt;price&gt;5.95&lt;/price&gt;&lt;publish_date&gt;2000-12-16&lt;/publish_date&gt;&lt;description&gt;A former architect battles corporate zombies, an evil sorceress, and her own childhood to become queen of the world.&lt;/description&gt;&lt;/book&gt;
&lt;/catalog&gt;</textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".xml,.txt" style="display: none;">

    <div class="format-options">
      <div class="format-option">
        <label for="indentSize">Indent Size:</label>
        <input type="number" id="indentSize" min="1" max="8" value="2">
      </div>
      <div class="format-option">
        <input type="checkbox" id="collapseEmpty" checked>
        <label for="collapseEmpty">Collapse empty elements</label>
      </div>
      <div class="format-option">
        <input type="checkbox" id="preserveComments" checked>
        <label for="preserveComments">Preserve comments</label>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="format">Format XML</button>
        <button class="case-button" data-action="minify">Minify XML</button>
        <button class="case-button" data-action="validate">Validate XML</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button" data-action="download">Download XML</button>
        <button class="case-button secondary" data-action="clear">Clear XML</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

      {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Before Formatting:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;catalog&gt;&lt;book id="bk101"&gt;&lt;author&gt;Gambardella, Matthew&lt;/author&gt;&lt;title&gt;XML Developer's Guide&lt;/title&gt;&lt;genre&gt;Computer&lt;/genre&gt;&lt;price&gt;44.95&lt;/price&gt;&lt;publish_date&gt;2000-10-01&lt;/publish_date&gt;&lt;description&gt;An in-depth look at creating applications with XML.&lt;/description&gt;&lt;/book&gt;&lt;/catalog&gt;</div>

      <h3>After Formatting:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;catalog&gt;
  &lt;book id="bk101"&gt;
    &lt;author&gt;Gambardella, Matthew&lt;/author&gt;
    &lt;title&gt;XML Developer's Guide&lt;/title&gt;
    &lt;genre&gt;Computer&lt;/genre&gt;
    &lt;price&gt;44.95&lt;/price&gt;
    &lt;publish_date&gt;2000-10-01&lt;/publish_date&gt;
    &lt;description&gt;An in-depth look at creating applications with XML.&lt;/description&gt;
  &lt;/book&gt;
&lt;/catalog&gt;</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online XML Formatter Tool</h2>

    <p>Working with messy, unformatted XML? Our free <strong>XML Formatter tool</strong> is the fastest and easiest way to transform any XML document into a clean, readable format. Perfect for developers, data analysts, and IT professionals, this instant tool formats your XML with proper indentation, validates syntax, and highlights errors with a single click. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser. Fix formatting, prepare data, and ensure professionalism in your XML documents in seconds.</p>

    <h3>How to Use This XML Formatter (Step-by-Step):</h3>
    <ul>
      <li><strong>Paste XML:</strong> Copy your XML code from any source (file, API response, database) and paste it into the large input box above.</li>
      <li><strong>Format Options:</strong> Choose your formatting preferences like indent size and whether to collapse empty elements.</li>
      <li><strong>Format:</strong> Click the "Format XML" button. Your newly formatted XML will appear instantly in the output box with proper indentation.</li>
      <li><strong>Validate:</strong> Use the "Validate XML" button to check for syntax errors and get detailed feedback.</li>
      <li><strong>Copy & Use:</strong> Hit the "Copy" button to grab the formatted XML for pasting elsewhere, or use "Download" to save it as a .xml file on your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've received an XML API response that's all on one line, making it impossible to read and debug. Instead of struggling to manually indent or using complex IDE tools, you can simply paste the XML into this tool. By selecting "Format XML", the tool will automatically add proper indentation and line breaks, transforming an unreadable data blob into a clean, structured document that's easy to analyze and work with.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Developers:</strong> Quickly format XML responses from APIs, configuration files, or data exports for better readability and debugging.</li>
      <li><strong>Data Analysts:</strong> Clean and structure XML data before analysis or import into databases and applications.</li>
      <li><strong>QA Engineers:</strong> Validate XML syntax and structure during testing phases to catch errors early.</li>
      <li><strong>Students & Educators:</strong> Learn XML structure and syntax with properly formatted examples and validation feedback.</li>
      <li><strong>Technical Writers:</strong> Prepare XML documentation examples that are clean, readable, and professional.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between formatting and validating XML?</strong><br>
      A: Formatting XML improves its readability by adding proper indentation and line breaks, while validating XML checks for syntax errors and structural issues according to XML standards.</p>

    <p><strong>Q: Is there a size limit for XML files I can format?</strong><br>
      A: You can format very large XML documents, including full data exports and complex configurations, without any issue. The tool is built to handle several megabytes of XML data at once.</p>

    <p><strong>Q: Is my XML data kept private and secure when I use this tool?</strong><br>
      A: Absolutely. This is a core principle of our tool. The formatting and validation happens locally on your own computer or phone. Your XML is never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our XML Formatter?</h3>
    <p>Our <strong>online XML formatter</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online tools, we don't store your XML on our servers - all processing happens in your browser. This means your sensitive data, configurations, and API responses remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of XML Formatting</h3>
    <p>XML formatting has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>API Development:</strong> Format XML responses for better debugging and documentation</li>
      <li><strong>Data Integration:</strong> Prepare XML data for import into databases and applications</li>
      <li><strong>Configuration Management:</strong> Clean and organize XML configuration files for systems and applications</li>
      <li><strong>Documentation:</strong> Create readable XML examples for technical documentation and tutorials</li>
      <li><strong>Education:</strong> Teach XML structure and syntax with properly formatted examples</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload XML File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select an XML file (.xml or .txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".xml,.txt">
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
    const xmlInput = document.getElementById('xmlInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Format options
    const indentSize = document.getElementById('indentSize');
    const collapseEmpty = document.getElementById('collapseEmpty');
    const preserveComments = document.getElementById('preserveComments');
    
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
    xmlInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleXmlAction(action);
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
      if (file.type === 'text/xml' || file.type === 'text/plain' || 
          file.name.endsWith('.xml') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          xmlInput.value = e.target.result;
          updateCounts();
          showAlert('XML file uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the XML file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload an XML or TXT file.', 'error');
      }
    });

    function updateCounts() {
      const text = xmlInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Element count (rough estimate)
      const elementCount = (text.match(/<[^!][^>]*>/g) || []).length;
      document.getElementById('elementCount').textContent = elementCount;

      // Attribute count (rough estimate)
      const attributeCount = (text.match(/\s+\w+\s*=/g) || []).length;
      document.getElementById('attributeCount').textContent = attributeCount;
    }

    function handleXmlAction(action) {
      const xml = xmlInput.value;

      switch (action) {
        case 'format':
          formatXml();
          break;

        case 'minify':
          minifyXml();
          break;

        case 'validate':
          validateXml();
          break;

        case 'copy':
          copyToClipboard(xml);
          break;

        case 'download':
          downloadXml('formatted_xml.xml', xml);
          break;

        case 'clear':
          xmlInput.value = '';
          updateCounts();
          break;
      }

      updateCounts();
    }

    // XML formatting functions
    function formatXml() {
      try {
        const xml = xmlInput.value;
        if (!xml.trim()) {
          showAlert('Please enter some XML to format.', 'error');
          return;
        }

        const formatted = formatXmlString(xml, parseInt(indentSize.value), collapseEmpty.checked, preserveComments.checked);
        xmlInput.value = formatted;
        showAlert('XML formatted successfully!', 'success');
      } catch (error) {
        showAlert('Error formatting XML: ' + error.message, 'error');
      }
    }

    function minifyXml() {
      try {
        const xml = xmlInput.value;
        if (!xml.trim()) {
          showAlert('Please enter some XML to minify.', 'error');
          return;
        }

        const minified = minifyXmlString(xml);
        xmlInput.value = minified;
        showAlert('XML minified successfully!', 'success');
      } catch (error) {
        showAlert('Error minifying XML: ' + error.message, 'error');
      }
    }

    function validateXml() {
      try {
        const xml = xmlInput.value;
        if (!xml.trim()) {
          showAlert('Please enter some XML to validate.', 'error');
          return;
        }

        // Basic XML validation
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");
        
        if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
          const error = xmlDoc.getElementsByTagName("parsererror")[0].textContent;
          showAlert('XML validation failed: ' + error, 'error');
        } else {
          showAlert('XML is well-formed and valid!', 'success');
        }
      } catch (error) {
        showAlert('Error validating XML: ' + error.message, 'error');
      }
    }

    function formatXmlString(xml, indentSize, collapseEmptyElements, preserveComments) {
      let formatted = '';
      let indent = 0;
      const tab = ' '.repeat(indentSize);
      
      // Split by tags but preserve comments and CDATA
      const tagRegex = /(<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<[^>]+>|[^<]+)/g;
      const tokens = xml.match(tagRegex) || [];
      
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        // Handle comments
        if (token.startsWith('<!--')) {
          if (preserveComments) {
            formatted += '\n' + tab.repeat(indent) + token;
          }
          continue;
        }
        
        // Handle CDATA
        if (token.startsWith('<![CDATA[')) {
          formatted += '\n' + tab.repeat(indent) + token;
          continue;
        }
        
        // Handle closing tags
        if (token.startsWith('</')) {
          indent--;
          formatted += '\n' + tab.repeat(indent) + token;
        } 
        // Handle self-closing tags
        else if (token.endsWith('/>') && collapseEmptyElements) {
          formatted += '\n' + tab.repeat(indent) + token;
        }
        // Handle opening tags
        else if (token.startsWith('<') && !token.startsWith('<?xml')) {
          formatted += '\n' + tab.repeat(indent) + token;
          if (!token.endsWith('/>') && !token.startsWith('<!')) {
            indent++;
          }
        }
        // Handle XML declaration
        else if (token.startsWith('<?xml')) {
          formatted += token;
        }
        // Handle text content
        else {
          const trimmed = token.trim();
          if (trimmed) {
            formatted += trimmed;
          }
        }
      }
      
      return formatted.trim();
    }

    function minifyXmlString(xml) {
      // Remove comments
      let minified = xml.replace(/<!--[\s\S]*?-->/g, '');
      
      // Remove unnecessary whitespace between tags
      minified = minified.replace(/>\s+</g, '><');
      
      // Trim whitespace
      minified = minified.trim();
      
      return minified;
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('XML copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy XML: ' + err, 'error');
      });
    }

    function downloadXml(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('XML downloaded successfully!', 'success');
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