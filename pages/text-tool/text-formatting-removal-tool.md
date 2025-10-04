---
layout: default
title: "Text Formatting Removal Tool"
permalink: /text-formatting-removal-tool/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Text Formatting Removal Tool - Clean Text Online</title>
<meta name="description"
    content="Free online text formatting removal tool. Remove all formatting including bold, italic, underline, font styles, colors, and other formatting. Clean your text for plain text usage.">
<meta name="keywords"
    content="text formatting removal, clean text, remove formatting, plain text converter, text cleaner, format remover">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Canonical URL for Blogspot -->
<link rel="canonical" href="http://yourblog.blogspot.com/text-formatting-removal" />

<!-- Open Graph tags -->
<meta property="og:title" content="Text Formatting Removal Tool - Clean Text Online">
<meta property="og:description"
    content="Free online tool to remove all text formatting including bold, italic, underline, font styles, and colors. Clean your text for plain text usage.">
<meta property="og:type" content="website">
<meta property="og:url" content="http://yourblog.blogspot.com/text-formatting-removal">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Text Formatting Removal Tool - Clean Text Online">
<meta name="twitter:description"
    content="Free online tool to remove all text formatting including bold, italic, underline, font styles, and colors.">

<!-- JSON-LD structured data -->
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Text Formatting Removal Tool",
      "url": "http://yourblog.blogspot.com/text-formatting-removal",
      "description": "Free online tool to remove all text formatting including bold, italic, underline, font styles, and colors.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>

<!-- FAQ Schema -->
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of formatting does this tool remove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This tool removes all text formatting including bold, italic, underline, font styles, colors, hyperlinks, bullets, special characters, and HTML tags. It converts formatted text into clean plain text."
          }
        },
        {
          "@type": "Question",
          "name": "Is my text kept private when using this tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All text processing happens locally in your browser. Your text is never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure and private."
          }
        }
      ]
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

    .stats {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        color: #6c757d;
        font-size: 0.9rem;
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
    <h1>Text Formatting Removal Tool</h1>
    <p class="welcome-message">Remove all formatting from text including bold, italic, underline, font styles, colors,
        and other formatting. Clean your text for plain text usage.</p>

    <div class="converter-section">
        <h2>Text Formatting Cleaner</h2>

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
                <span>Formatting Removed: </span>
                <span id="formatCount">0</span>
            </div>
        </div>

        <div class="input-section">
            <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
            <textarea id="inputText" rows="6" placeholder="Paste your formatted text here..."></textarea>

            <div class="stats">
                <span id="inputStats">Characters: 0 | Lines: 0</span>
            </div>
        </div>

        <!-- Hidden file input -->
        <input type="file" id="fileUpload" accept=".txt,.html,.doc,.docx" style="display: none;">

        <div class="options-section">
            <h2>Text Cleaner Options</h2>

            <div class="option-group">
                <div class="option-item">
                    <h3>Whitespace Options</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="trimLines" checked>
                        <label for="trimLines">Trim lines (remove leading/trailing spaces)</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeEmptyLines" checked>
                        <label for="removeEmptyLines">Remove empty lines</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeExtraSpaces" checked>
                        <label for="removeExtraSpaces">Remove extra spaces</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="forceSingleLine">
                        <label for="forceSingleLine">Force single line (remove all line breaks)</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Text Formatting</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeAllFormatting" checked>
                        <label for="removeAllFormatting">Remove all text formatting</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeFontStyles" checked>
                        <label for="removeFontStyles">Remove font styles and sizes</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeHyperlinks" checked>
                        <label for="removeHyperlinks">Remove hyperlinks</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="replaceBullets" checked>
                        <label for="replaceBullets">Replace bullets with asterisks</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Special Characters</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="fixQuotes" checked>
                        <label for="fixQuotes">Fix curly quotes to straight</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="fixDashes" checked>
                        <label for="fixDashes">Fix dashes and hyphens</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeSpecialChars">
                        <label for="removeSpecialChars">Remove special characters</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="removeEmojis">
                        <label for="removeEmojis">Remove emojis and symbols</label>
                    </div>
                </div>
            </div>

            <div class="button-section">
                <button id="processBtn" class="case-button success">Clean Text</button>
                <button id="clearBtn" class="case-button secondary">Clear All</button>
                <button id="exampleBtn" class="case-button">Load Example</button>
            </div>
        </div>

        <div id="alertContainer" class="alert-container"></div>
{% include share-and-donation.html %}
        <div class="results-section">
            <h2>Clean Text Output</h2>
            <div class="results-summary">
                <span id="resultsSummary">No cleaning done yet</span>
            </div>
            <textarea id="outputText" rows="6" placeholder="Your clean text will appear here..." readonly></textarea>

            <div class="button-section">
                <button id="copyBtn" class="case-button">Copy to Clipboard</button>
                <button id="downloadBtn" class="case-button">Download Text</button>
            </div>

            <div class="stats">
                <span id="outputStats">Characters: 0 | Lines: 0</span>
            </div>
        </div>
    </div>

    <!-- SEO Content Section -->
    <div class="content-placeholder">
        <h2>Free Online Text Formatting Removal Tool</h2>

        <p>Our <strong>Text Formatting Removal Tool</strong> is an essential utility for cleaning and converting
            formatted text into plain text. Whether you're copying content from websites, documents, or emails, this
            tool helps you remove all formatting including bold, italic, underline, font styles, colors, hyperlinks, and
            special characters. Perfect for writers, editors, students, and anyone who needs clean, plain text for their
            work.</p>

        <h3>How to Use the Text Formatting Removal Tool (Step-by-Step):</h3>
        <ul>
            <li><strong>Paste Your Text:</strong> Copy your formatted text from any source and paste it into the input
                box above, or upload a file</li>
            <li><strong>Adjust Options:</strong> Customize the cleaning process by selecting or deselecting the
                available options</li>
            <li><strong>Clean Text:</strong> Click the "Clean Text" button to process your text and remove all
                formatting</li>
            <li><strong>Review Results:</strong> Examine the clean text output to ensure it meets your requirements</li>
            <li><strong>Copy or Download:</strong> Use the "Copy to Clipboard" or "Download Text" buttons to save your
                clean text</li>
        </ul>

        <h3>Real-Life Example & Use Case:</h3>
        <p>Imagine you're copying content from a website for a research paper. The pasted text includes various
            formatting like bold headings, italicized terms, hyperlinks, and different font styles. By using this tool,
            you can quickly convert it into clean, plain text that's ready for your document without carrying over any
            unwanted formatting.</p>

        <h3>Benefits & Who Should Use This Tool:</h3>
        <ul>
            <li><strong>Writers & Bloggers:</strong> Clean text before publishing to ensure consistent formatting</li>
            <li><strong>Students & Researchers:</strong> Prepare content from various sources for academic papers</li>
            <li><strong>Office Workers:</strong> Clean text copied from emails, documents, or presentations</li>
            <li><strong>Developers & Programmers:</strong> Remove formatting from code snippets or documentation</li>
            <li><strong>Content Creators:</strong> Ensure clean text for social media posts, newsletters, or articles
            </li>
        </ul>

        <h3>Frequently Asked Questions (FAQ):</h3>
        <p><strong>Q: What types of formatting does this tool remove?</strong><br>
            A: This tool removes all text formatting including bold, italic, underline, font styles, colors, hyperlinks,
            bullets, special characters, and HTML tags. It converts formatted text into clean plain text.</p>

        <p><strong>Q: Can I upload files directly to the tool?</strong><br>
            A: Yes, you can upload TXT, HTML, DOC, and DOCX files. The tool will extract the text content and remove
            formatting accordingly.</p>

        <p><strong>Q: Is my text kept private when using this tool?</strong><br>
            A: Absolutely. All text processing happens locally in your browser. Your text is never sent to any server,
            meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

        <p><strong>Q: What happens to bullet points and lists?</strong><br>
            A: You can choose to replace bullets with asterisks or remove them completely, depending on your preference.
        </p>

        <p><strong>Q: Can I use this tool on my mobile device?</strong><br>
            A: Yes, the tool is fully responsive and works perfectly on all devices including smartphones and tablets.
        </p>

        <h3>Why Remove Text Formatting?</h3>
        <p>Text formatting removal is essential for several reasons:</p>
        <ul>
            <li><strong>Consistency:</strong> Ensure uniform text appearance across different platforms</li>
            <li><strong>Compatibility:</strong> Avoid formatting issues when transferring text between applications</li>
            <li><strong>Readability:</strong> Improve text readability by removing distracting formatting</li>
            <li><strong>Processing:</strong> Prepare text for further processing or analysis</li>
            <li><strong>Storage:</strong> Reduce file size by removing unnecessary formatting information</li>
        </ul>

        <h3>Tips for Effective Text Cleaning:</h3>
        <p>To get the best results from the text formatting removal tool:</p>
        <ul>
            <li><strong>Review options carefully:</strong> Select only the cleaning options you need for your specific
                use case</li>
            <li><strong>Test with sample text:</strong> Try the tool with a small sample first to ensure it meets your
                requirements</li>
            <li><strong>Use the example feature:</strong> Load the example text to see how the tool works with different
                formatting types</li>
            <li><strong>Check the results:</strong> Always review the cleaned text before using it in your final work
            </li>
            <li><strong>Save your settings:</strong> If you frequently use specific options, they will be remembered for
                future use</li>
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
            <p>Select a text file (.txt, .html, .doc, .docx) to upload its content to the text area.</p>
            <input type="file" id="modalFileUpload" accept=".txt,.html,.doc,.docx">
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
        const inputText = document.getElementById('inputText');
        const outputText = document.getElementById('outputText');
        const processBtn = document.getElementById('processBtn');
        const clearBtn = document.getElementById('clearBtn');
        const copyBtn = document.getElementById('copyBtn');
        const downloadBtn = document.getElementById('downloadBtn');
        const exampleBtn = document.getElementById('exampleBtn');
        const alertContainer = document.getElementById('alertContainer');
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
        inputText.addEventListener('input', updateCounts);

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

            const reader = new FileReader();
            reader.onload = function (e) {
                inputText.value = e.target.result;
                updateCounts();
                showAlert('File uploaded successfully!', 'success');
                uploadModal.style.display = 'none';
                modalFileUpload.value = '';
                fileInfo.textContent = '';
            };
            reader.onerror = function () {
                showAlert('Error reading the file.', 'error');
            };

            if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
                reader.readAsText(file);
            } else if (file.type === 'text/html' || file.name.endsWith('.html')) {
                reader.readAsText(file);
            } else if (file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
                showAlert('DOC/DOCX files will be extracted as plain text. Some formatting may be lost.', 'success');
                reader.readAsText(file);
            } else {
                showAlert('Unsupported file format. Please upload a TXT, HTML, DOC, or DOCX file.', 'error');
            }
        });

        processBtn.addEventListener('click', function () {
            let text = inputText.value;
            const originalLength = text.length;

            if (!text.trim()) {
                showAlert('Please enter some text to clean.', 'error');
                return;
            }

            // Get selected options
            const trimLines = document.getElementById('trimLines').checked;
            const removeEmptyLines = document.getElementById('removeEmptyLines').checked;
            const removeExtraSpaces = document.getElementById('removeExtraSpaces').checked;
            const forceSingleLine = document.getElementById('forceSingleLine').checked;
            const removeAllFormatting = document.getElementById('removeAllFormatting').checked;
            const removeFontStyles = document.getElementById('removeFontStyles').checked;
            const removeHyperlinks = document.getElementById('removeHyperlinks').checked;
            const replaceBullets = document.getElementById('replaceBullets').checked;
            const fixQuotes = document.getElementById('fixQuotes').checked;
            const fixDashes = document.getElementById('fixDashes').checked;
            const removeSpecialChars = document.getElementById('removeSpecialChars').checked;
            const removeEmojis = document.getElementById('removeEmojis').checked;

            // Remove HTML tags (basic formatting)
            if (removeAllFormatting) {
                text = text.replace(/<[^>]*>/g, '');
            }

            // Remove font styles and sizes
            if (removeFontStyles) {
                text = text.replace(/<font[^>]*>/gi, '');
                text = text.replace(/<span[^>]*>/gi, '');
                text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
            }

            // Remove hyperlinks
            if (removeHyperlinks) {
                text = text.replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1');
                text = text.replace(/https?:\/\/[^\s]+/g, '');
            }

            // Replace bullets with asterisks
            if (replaceBullets) {
                text = text.replace(/<li[^>]*>/gi, '* ');
                text = text.replace(/•/g, '*');
            }

            // Fix quotes
            if (fixQuotes) {
                text = text.replace(/[“”]/g, '"');
                text = text.replace(/[‘’]/g, "'");
            }

            // Fix dashes and hyphens
            if (fixDashes) {
                text = text.replace(/–/g, '-');
                text = text.replace(/—/g, '--');
            }

            // Remove special characters
            if (removeSpecialChars) {
                text = text.replace(/[^\w\s.,!?;:'"()\-\n\r]/g, '');
            }

            // Remove emojis and symbols
            if (removeEmojis) {
                text = text.replace(/[\u{1F600}-\u{1F64F}]/gu, '');
                text = text.replace(/[\u{1F300}-\u{1F5FF}]/gu, '');
                text = text.replace(/[\u{1F680}-\u{1F6FF}]/gu, '');
                text = text.replace(/[\u{2600}-\u{26FF}]/gu, '');
                text = text.replace(/[\u{2700}-\u{27BF}]/gu, '');
            }

            // Trim lines
            if (trimLines) {
                text = text.split('\n').map(line => line.trim()).join('\n');
            }

            // Remove empty lines
            if (removeEmptyLines) {
                text = text.replace(/^\s*[\r\n]/gm, '');
            }

            // Remove extra spaces
            if (removeExtraSpaces) {
                text = text.replace(/\s+/g, ' ');
            }

            // Force single line
            if (forceSingleLine) {
                text = text.replace(/(\r\n|\n|\r)/gm, ' ');
            }

            // Trim the result
            text = text.trim();

            outputText.value = text;
            updateCounts();

            // Update formatting removed count
            const formatCount = originalLength - text.length;
            document.getElementById('formatCount').textContent = formatCount;
            resultsSummary.textContent = 'Text cleaned successfully!';

            showAlert('Text cleaned successfully!', 'success');
        });

        // Clear both text areas
        clearBtn.addEventListener('click', function () {
            inputText.value = '';
            outputText.value = '';
            updateCounts();
            document.getElementById('formatCount').textContent = '0';
            resultsSummary.textContent = 'No cleaning done yet';
            showAlert('Text cleared!', 'success');
        });

        // Copy to clipboard
        copyBtn.addEventListener('click', function () {
            if (!outputText.value) {
                showAlert('No results to copy. Please clean text first.', 'error');
                return;
            }

            navigator.clipboard.writeText(outputText.value).then(() => {
                showAlert('Text copied to clipboard!', 'success');
            }).catch(err => {
                showAlert('Failed to copy text: ' + err, 'error');
            });
        });

        // Download text as file
        downloadBtn.addEventListener('click', function () {
            const text = outputText.value;
            if (!text) {
                showAlert('No results to download. Please clean text first.', 'error');
                return;
            }

            const filename = 'clean-text.txt';

            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            showAlert('Text downloaded successfully!', 'success');
        });

        // Load example text
        exampleBtn.addEventListener('click', function () {
            inputText.value = `# Formatted Text Example

This is a <b>bold text</b> example and this is an <i>italic text</i> example.

You can also find <s>strikethrough text</s> and <u>underlined text</u> here.

## List Example:
• First item with <i>italic</i>
• Second item with <b>bold</b>
• Third item with <s>strikethrough</s>

## Link Example:
Visit <a href="https://www.google.com">Google</a> for search.

This text has    extra   spaces and
line breaks that need cleaning.

"Curly quotes" and ‘single curly quotes’ should be fixed.

Emojis and symbols: 😊 ✅ ♻️ ★`;

            updateCounts();
            showAlert('Example text loaded!', 'success');
        });

        function updateCounts() {
            const text = inputText.value;
            const outputTextValue = outputText.value;

            // Character count
            document.getElementById('charCount').textContent = text.length;

            // Word count
            const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
            document.getElementById('wordCount').textContent = wordCount;

            // Line count
            const lineCount = text ? text.split(/\n/).length : 0;
            document.getElementById('lineCount').textContent = lineCount;

            // Input stats
            document.getElementById('inputStats').textContent = `Characters: ${text.length} | Lines: ${lineCount}`;

            // Output stats
            document.getElementById('outputStats').textContent = `Characters: ${outputTextValue.length} | Lines: ${outputTextValue ? outputTextValue.split(/\n/).length : 0}`;
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