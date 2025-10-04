---
layout: default
title: "Plain Text Converter - Remove Formatting, Clean Text Online"
permalink: /plain-text-converter-remove-formatting-clean-text-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Plain Text Converter - Remove Formatting, Clean Text Online</title>
<meta name="description"
    content="Free online plain text converter tool. Remove formatting, punctuation, duplicates, whitespace, URLs, emails and more from your text. Clean and optimize text instantly.">
<meta name="keywords"
    content="plain text converter, remove formatting, text cleaner, remove punctuation, remove duplicates, text optimization">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Canonical URL for Blogspot -->
<link rel="canonical" href="http://yourblog.blogspot.com/plain-text-converter" />

<!-- Open Graph tags -->
<meta property="og:title" content="Plain Text Converter - Clean and Format Text Online">
<meta property="og:description"
    content="Free online tool to remove formatting, punctuation, duplicates, URLs and more from your text. Clean and optimize text instantly.">
<meta property="og:type" content="website">
<meta property="og:url" content="http://yourblog.blogspot.com/plain-text-converter">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Plain Text Converter - Clean Text Online">
<meta name="twitter:description"
    content="Free online tool to remove formatting, punctuation, duplicates, URLs and more from your text.">

<!-- JSON-LD structured data -->
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Plain Text Converter",
      "url": "http://yourblog.blogspot.com/plain-text-converter",
      "description": "Free online tool to remove formatting, punctuation, duplicates, URLs and more from your text.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
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

    .file-info {
        margin-top: 10px;
        font-size: 14px;
        color: #7f8c8d;
        width: 100%;
    }

    .options-section {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
    }

    .option-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 20px;
    }

    .option-item {
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .option-item h3 {
        color: #2c3e50;
        margin-bottom: 12px;
        font-size: 18px;
        border-bottom: 1px solid #eee;
        padding-bottom: 8px;
    }

    .option-checkbox {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }

    .option-checkbox input {
        margin-right: 10px;
        width: 18px;
        height: 18px;
    }

    .option-checkbox label {
        color: #34495e;
        font-weight: 500;
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

    .results-section {
        margin-top: 30px;
    }

    .results-section textarea {
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

    .results-summary {
        padding: 15px;
        background: #e3f2fd;
        border-radius: 8px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .results-count {
        font-weight: 600;
        color: #2c3e50;
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
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
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

        .option-group {
            grid-template-columns: 1fr;
        }

        .modal-content {
            margin: 20% auto;
            width: 95%;
            padding: 20px;
        }
    }
</style>

<div class="converter-container">
    <h1>Plain Text Converter</h1>
    <p class="welcome-message">Clean and optimize your text by removing formatting, punctuation, duplicates, whitespace,
        URLs, emails and more.</p>

    <div class="converter-section">
        <h2>Text Cleaning Options</h2>

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
        </div>

        <div class="input-section">
            <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
            <textarea id="textInput" rows="6" placeholder="Paste your text here..."></textarea>
        </div>

        <!-- Hidden file input -->
        <input type="file" id="fileUpload" accept=".txt" style="display: none;">

        <div class="options-section">
            <h2>Text Cleaning Options</h2>

            <div class="option-group">
                <div class="option-item">
                    <h3>Characters</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeFormats" checked>
                        <label for="removeFormats">Remove All Text Formats</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removePunctuation">
                        <label for="removePunctuation">Remove Punctuation marks</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeNonAscii">
                        <label for="removeNonAscii">Remove Non-ASCII Characters</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeNonAlphanumeric">
                        <label for="removeNonAlphanumeric">Remove Non-alphanumeric Characters</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeAccents">
                        <label for="removeAccents">Remove letter Accents (diacritics)</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="normalizeUnicode">
                        <label for="normalizeUnicode">Normalize Unicode letters & Characters</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeEmojis">
                        <label for="removeEmojis">Strip all emojis</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Duplicates</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeDuplicateLines">
                        <label for="removeDuplicateLines">Remove Duplicate Lines / Paragraphs</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeDuplicateWords">
                        <label for="removeDuplicateWords">Remove Duplicate Words / Sentences</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Whitespace</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="trimWhitespace" checked>
                        <label for="trimWhitespace">Trim Whitespaces</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeLeadingSpaces">
                        <label for="removeLeadingSpaces">Remove leading spaces</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeTrailingSpaces">
                        <label for="removeTrailingSpaces">Remove trailing spaces</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeBlankLines">
                        <label for="removeBlankLines">Remove Blank/Empty Lines</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeLineBreaks">
                        <label for="removeLineBreaks">Remove Line Breaks</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Others</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeUrls">
                        <label for="removeUrls">Remove all web URLs</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeHashtags">
                        <label for="removeHashtags">Remove hash tags</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="convertUrlsToLinks">
                        <label for="convertUrlsToLinks">Convert URLs to links</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeEmails">
                        <label for="removeEmails">Strip all emails</label>
                    </div>
                </div>
            </div>

            <div class="button-section">
                <button class="case-button success" id="processButton">Process Text</button>
                <button class="case-button" id="copyButton">Copy to Clipboard</button>
                <button class="case-button" id="downloadButton">Download Text</button>
                <button class="case-button secondary" id="clearButton">Clear All</button>
            </div>
        </div>

        <div id="alertContainer" class="alert-container"></div>

        <div class="results-section">
            <h2>Results</h2>
            <div class="results-summary">
                <span id="resultsSummary">No processing done yet</span>
            </div>
            <textarea id="resultsOutput" rows="6" placeholder="Your cleaned text will appear here..."
                readonly></textarea>
        </div>
{% include share-and-donation.html %}
        <div class="examples">
            <h2>Examples</h2>

            <h3>Before Processing:</h3>
            <div class="example-text">Hello, world! 😊
                This is an example text with various formats.

                https://example.com
                email@example.com
                #hashtag

                Duplicate line.
                Duplicate line.</div>

            <h3>After Processing (with common options):</h3>
            <div class="example-text">Hello world
                This is an example text with various formats

                Duplicate line.</div>
        </div>
    </div>

    <!-- SEO Content Section -->
    <div class="content-placeholder">
        <h2>Free Online Plain Text Converter</h2>

        <p>Our <strong>Plain Text Converter</strong> is a powerful utility for cleaning and optimizing text by removing
            formatting, punctuation, duplicates, whitespace, URLs, emails and more. Whether you're a writer preparing
            content for publication, a developer cleaning data, or a student formatting a paper, this tool simplifies
            the process of making text clean and consistent.</p>

        <h3>How to Use the Plain Text Converter (Step-by-Step):</h3>
        <ul>
            <li><strong>Paste Your Text:</strong> Copy and paste your text into the input box, or upload a text file
            </li>
            <li><strong>Select Cleaning Options:</strong> Choose which elements you want to remove from your text</li>
            <li><strong>Process Text:</strong> Click "Process Text" to clean your text according to your selected
                options</li>
            <li><strong>Review and Copy Results:</strong> Examine the cleaned text, then copy or download the result
            </li>
        </ul>

        <h3>Real-Life Use Cases:</h3>
        <ul>
            <li><strong>Content Preparation:</strong> Clean text before pasting into platforms that might add unwanted
                formatting</li>
            <li><strong>Data Processing:</strong> Remove unnecessary characters and formatting from datasets</li>
            <li><strong>Code Cleaning:</strong> Strip formatting from code snippets or configuration files</li>
            <li><strong>Document Standardization:</strong> Ensure consistent formatting across multiple documents</li>
            <li><strong>Text Analysis:</strong> Prepare text for natural language processing or analysis</li>
        </ul>

        <h3>Cleaning Options Explained:</h3>
        <ul>
            <li><strong>Remove All Text Formats:</strong> Strips HTML tags and other formatting codes</li>
            <li><strong>Remove Punctuation:</strong> Removes punctuation marks like commas, periods, and exclamation
                points</li>
            <li><strong>Remove Non-ASCII Characters:</strong> Keeps only standard ASCII characters</li>
            <li><strong>Remove Non-alphanumeric Characters:</strong> Keeps only letters and numbers</li>
            <li><strong>Remove Duplicates:</strong> Eliminates duplicate lines or words</li>
            <li><strong>Whitespace Options:</strong> Various options to clean up spaces, tabs, and line breaks</li>
            <li><strong>URL and Email Removal:</strong> Strips web addresses and email addresses from text</li>
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
        // Elements
        const textInput = document.getElementById('textInput');
        const processButton = document.getElementById('processButton');
        const copyButton = document.getElementById('copyButton');
        const downloadButton = document.getElementById('downloadButton');
        const clearButton = document.getElementById('clearButton');
        const alertContainer = document.getElementById('alertContainer');
        const fileUpload = document.getElementById('fileUpload');
        const resultsOutput = document.getElementById('resultsOutput');
        const resultsSummary = document.getElementById('resultsSummary');
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

        processButton.addEventListener('click', processText);
        copyButton.addEventListener('click', copyToClipboard);
        downloadButton.addEventListener('click', downloadText);
        clearButton.addEventListener('click', clearAll);

        // Upload icon click handler - opens modal
        uploadIcon.addEventListener('click', function () {
            uploadModal.style.display = 'block';
        });

        // Close modal when clicking X
        closeModal.addEventListener('click', function () {
            uploadModal.style.display = 'none';
            modalFileUpload.value = '';
            fileInfo.textContent = '';
        });

        // Close modal when clicking cancel
        cancelUpload.addEventListener('click', function () {
            uploadModal.style.display = 'none';
            modalFileUpload.value = '';
            fileInfo.textContent = '';
        });

        // Close modal when clicking outside
        window.addEventListener('click', function (event) {
            if (event.target === uploadModal) {
                uploadModal.style.display = 'none';
                modalFileUpload.value = '';
                fileInfo.textContent = '';
            }
        });

        // Handle file selection in modal
        modalFileUpload.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
            } else {
                fileInfo.textContent = '';
            }
        });

        // Confirm upload button
        confirmUpload.addEventListener('click', function () {
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

            // Line count
            const lineCount = text ? text.split(/\n/).length : 0;
            document.getElementById('lineCount').textContent = lineCount;
        }

        function processText() {
            let text = textInput.value;
            let changesMade = false;

            if (!text) {
                showAlert('Please enter some text to process.', 'error');
                return;
            }

            // Characters
            if (document.getElementById('removeFormats').checked) {
                text = text.replace(/<[^>]*>/g, ''); // Remove HTML tags
                changesMade = true;
            }

            if (document.getElementById('removePunctuation').checked) {
                text = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, '');
                changesMade = true;
            }

            if (document.getElementById('removeNonAscii').checked) {
                text = text.replace(/[^\x00-\x7F]/g, '');
                changesMade = true;
            }

            if (document.getElementById('removeNonAlphanumeric').checked) {
                text = text.replace(/[^a-zA-Z0-9\s]/g, '');
                changesMade = true;
            }

            if (document.getElementById('removeAccents').checked) {
                text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                changesMade = true;
            }

            if (document.getElementById('normalizeUnicode').checked) {
                text = text.normalize();
                changesMade = true;
            }

            if (document.getElementById('removeEmojis').checked) {
                text = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
                changesMade = true;
            }

            // Duplicates
            if (document.getElementById('removeDuplicateLines').checked) {
                const lines = text.split('\n');
                const uniqueLines = [...new Set(lines)];
                text = uniqueLines.join('\n');
                changesMade = true;
            }

            if (document.getElementById('removeDuplicateWords').checked) {
                const words = text.split(/\s+/);
                const uniqueWords = [...new Set(words)];
                text = uniqueWords.join(' ');
                changesMade = true;
            }

            // Whitespace
            if (document.getElementById('trimWhitespace').checked) {
                text = text.trim();
                changesMade = true;
            }

            if (document.getElementById('removeLeadingSpaces').checked) {
                text = text.replace(/^[ \t]+/gm, '');
                changesMade = true;
            }

            if (document.getElementById('removeTrailingSpaces').checked) {
                text = text.replace(/[ \t]+$/gm, '');
                changesMade = true;
            }

            if (document.getElementById('removeBlankLines').checked) {
                text = text.replace(/^\s*[\r\n]/gm, '');
                changesMade = true;
            }

            if (document.getElementById('removeLineBreaks').checked) {
                text = text.replace(/\r?\n|\r/g, ' ');
                changesMade = true;
            }

            // Others
            if (document.getElementById('removeUrls').checked) {
                text = text.replace(/(https?:\/\/[^\s]+)/g, '');
                changesMade = true;
            }

            if (document.getElementById('removeHashtags').checked) {
                text = text.replace(/#\w+/g, '');
                changesMade = true;
            }

            if (document.getElementById('convertUrlsToLinks').checked) {
                text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');
                changesMade = true;
            }

            if (document.getElementById('removeEmails').checked) {
                text = text.replace(/\S+@\S+\.\S+/g, '');
                changesMade = true;
            }

            resultsOutput.value = text;
            updateCounts();

            if (changesMade) {
                resultsSummary.textContent = 'Text processed successfully!';
                showAlert('Text processed successfully!', 'success');
            } else {
                resultsSummary.textContent = 'No changes made (no options selected)';
                showAlert('No changes made. Please select at least one cleaning option.', 'info');
            }
        }

        function copyToClipboard() {
            const text = resultsOutput.value;
            if (!text) {
                showAlert('No results to copy. Please process text first.', 'error');
                return;
            }

            navigator.clipboard.writeText(text).then(() => {
                showAlert('Text copied to clipboard!', 'success');
            }).catch(err => {
                showAlert('Failed to copy text: ' + err, 'error');
            });
        }

        function downloadText() {
            const text = resultsOutput.value;
            if (!text) {
                showAlert('No results to download. Please process text first.', 'error');
                return;
            }

            const filename = 'cleaned_text.txt';

            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            showAlert('Text downloaded successfully!', 'success');
        }

        function clearAll() {
            textInput.value = '';
            resultsOutput.value = '';

            // Uncheck all checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
            });

            // Re-check default options
            document.getElementById('removeFormats').checked = true;
            document.getElementById('trimWhitespace').checked = true;

            updateCounts();
            resultsSummary.textContent = 'No processing done yet';
            showAlert('All fields cleared!', 'success');
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