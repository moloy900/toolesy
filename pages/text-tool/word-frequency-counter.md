---
layout: default
title: "Word Frequency Counter - Analyze Text Word Usage"
permalink: /word-frequency-counter-analyze-text-word-usage/
---


  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Word Frequency Counter - Analyze Text Word Usage</title>
<meta name="description"
    content="Free online word frequency counter tool. Analyze text to find how often each word is used. Perfect for writers, SEO, and content analysis.">
<meta name="keywords"
    content="word frequency counter, text analysis, word count, word usage, vocabulary analysis, content analysis, SEO tool">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Canonical URL for Blogspot -->
<link rel="canonical" href="http://toolesy.com/word-frequency-counter-analyze-text-word-usage" />

<!-- Open Graph tags -->
<meta property="og:title" content="Word Frequency Counter - Analyze Text Word Usage">
<meta property="og:description"
    content="Free online tool to analyze word frequency in your text. Perfect for writers, SEO, and content analysis.">
<meta property="og:type" content="website">
<meta property="og:url" content="http://toolesy.com/word-frequency-counter-analyze-text-word-usage">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Word Frequency Counter - Analyze Text Word Usage">
<meta name="twitter:description"
    content="Free online tool to analyze word frequency in your text. Perfect for writers, SEO, and content analysis.">

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

    .results-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .results-table th,
    .results-table td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #e0e6ed;
    }

    .results-table th {
        background-color: var(--primary);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .results-table th:hover {
        background-color: #2980b9;
    }

    .results-table tr:nth-child(even) {
        background-color: #f8f9fa;
    }

    .results-table tr:hover {
        background-color: #e3f2fd;
    }

    .results-placeholder {
        padding: 40px;
        text-align: center;
        color: #7f8c8d;
        background: white;
        border-radius: 8px;
        margin-top: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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

        .results-table {
            font-size: 14px;
        }

        .results-table th,
        .results-table td {
            padding: 8px 10px;
        }

        .modal-content {
            margin: 20% auto;
            width: 95%;
            padding: 20px;
        }
    }
</style>

<div class="converter-container">
    <h1>Word Frequency Counter</h1>
    <p class="welcome-message">Analyze your text to find how often each word is used. Identify overused words, optimize
        your content, and improve your writing.</p>

    <div class="converter-section">
        <h2>Word Frequency Analyzer</h2>

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
                <span>Unique Words: </span>
                <span id="uniqueWordCount">0</span>
            </div>
            <div class="counter-item">
                <span>Most Frequent: </span>
                <span id="mostFrequentWord">-</span>
            </div>
        </div>

        <div class="input-section">
            <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
            <textarea id="textInput" rows="6"
                placeholder="Paste your text here to analyze word frequency..."></textarea>
        </div>

        <!-- Hidden file input -->
        <input type="file" id="fileUpload" accept=".txt" style="display: none;">

        <div class="options-section">
            <h2>Analysis Options</h2>

            <div class="option-group">
                <div class="option-item">
                    <h3>Text Processing</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="ignoreCase" checked>
                        <label for="ignoreCase">Ignore case (e.g., "The" = "the")</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="ignoreCommonWords">
                        <label for="ignoreCommonWords">Ignore common words (the, and, of, etc.)</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="ignoreNumbers">
                        <label for="ignoreNumbers">Ignore numbers</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Word Boundaries</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="ignorePunctuation" checked>
                        <label for="ignorePunctuation">Ignore punctuation</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="ignorePossessives" checked>
                        <label for="ignorePossessives">Ignore possessives (e.g., "writer's" = "writer")</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="splitHyphenated">
                        <label for="splitHyphenated">Split hyphenated words</label>
                    </div>
                </div>
            </div>

            <div class="button-section">
                <button class="case-button success" id="analyzeButton">Analyze Text</button>
                <button class="case-button" id="copyButton">Copy Results</button>
                <button class="case-button" id="downloadButton">Download Results</button>
                <button class="case-button secondary" id="clearButton">Clear All</button>
            </div>
        </div>

        <div id="alertContainer" class="alert-container"></div>

        <div class="results-section">
            <h2>Word Frequency Results</h2>
            <div id="resultsPlaceholder" class="results-placeholder">
                <p>Your word frequency results will appear here after analysis.</p>
            </div>
            <div id="resultsContainer" style="display: none;">
                <table class="results-table">
                    <thead>
                        <tr>
                            <th data-sort="word">Word ↕</th>
                            <th data-sort="frequency">Frequency ↕</th>
                            <th data-sort="percentage">Percentage ↕</th>
                        </tr>
                    </thead>
                    <tbody id="resultsBody">
                        <!-- Results will be inserted here -->
                    </tbody>
                </table>
            </div>
        </div>
{% include share-and-donation.html %}
        <div class="examples">
            <h2>Examples</h2>

            <h3>Sample Text:</h3>
            <div class="example-text">The quick brown fox jumps over the lazy dog. The fox was quick and the dog was
                lazy.</div>

            <h3>Word Frequency Results:</h3>
            <div class="example-text">the: 4 (16.0%)
                fox: 2 (8.0%)
                quick: 2 (8.0%)
                dog: 2 (8.0%)
                was: 2 (8.0%)
                brown: 1 (4.0%)
                jumps: 1 (4.0%)
                over: 1 (4.0%)
                lazy: 1 (4.0%)
                and: 1 (4.0%)</div>
        </div>
    </div>

    <!-- SEO Content Section -->
    <div class="content-placeholder">
        <h2>Free Online Word Frequency Counter</h2>

        <p>Our <strong>Word Frequency Counter</strong> is an essential tool for writers, editors, students, and SEO
            specialists. It analyzes your text to show how often each word appears, helping you identify overused words,
            optimize your content, and improve your writing style. This tool is completely free, requires no
            registration, and processes your text locally in your browser for maximum privacy and security.</p>

        <h3>How to Use the Word Frequency Counter (Step-by-Step):</h3>
        <ul>
            <li><strong>Paste Text:</strong> Copy your text from any source (document, website, email) and paste it into
                the input box above.</li>
            <li><strong>Adjust Options:</strong> Customize the analysis by selecting or deselecting the available
                options (ignore case, ignore common words, etc.).</li>
            <li><strong>Analyze:</strong> Click the "Analyze Text" button to process your text and generate word
                frequency statistics.</li>
            <li><strong>Review Results:</strong> Examine the frequency table to see which words you use most often.</li>
            <li><strong>Export:</strong> Use the "Copy Results" or "Download Results" buttons to save your analysis for
                future reference.</li>
        </ul>

        <h3>Real-Life Example & Use Case:</h3>
        <p>Imagine you're writing an essay or article and want to ensure you're not overusing certain words. By pasting
            your text into the Word Frequency Counter, you can quickly identify which words appear most frequently. For
            example, if you see that the word "very" appears 15 times in a 500-word article, you might want to replace
            some instances with stronger, more descriptive words to improve your writing quality.</p>

        <h3>Benefits & Who Should Use This Tool:</h3>
        <ul>
            <li><strong>Writers & Authors:</strong> Identify overused words and improve your writing style by varying
                your vocabulary.</li>
            <li><strong>Students:</strong> Analyze essays and papers to ensure you're not repeating words excessively.
            </li>
            <li><strong>SEO Specialists:</strong> Optimize web content by analyzing keyword density and distribution.
            </li>
            <li><strong>Editors & Proofreaders:</strong> Quickly identify repetitive language in documents you're
                reviewing.</li>
            <li><strong>Researchers:</strong> Analyze text data for linguistic patterns and trends.</li>
            <li><strong>Language Learners:</strong> Track your vocabulary usage and identify words you need to practice.
            </li>
        </ul>

        <h3>Frequently Asked Questions (FAQ):</h3>
        <p><strong>Q: What is a word frequency counter used for?</strong><br>
            A: A word frequency counter analyzes text to show how often each word appears. Writers use it to identify
            overused words, SEO specialists use it to optimize content, and researchers use it for text analysis.</p>

        <p><strong>Q: Is there a limit to how much text I can analyze?</strong><br>
            A: You can analyze very large texts, including full articles, essays, and chapters. The tool is built to
            handle several thousand words at once.</p>

        <p><strong>Q: Is my text kept private when using this tool?</strong><br>
            A: Absolutely. The analysis happens locally in your browser. Your text is never sent to any server, meaning
            we never see, store, or have access to your data. It is 100% secure.</p>

        <p><strong>Q: What are "common words" that can be ignored?</strong><br>
            A: Common words (also called stop words) include frequently used words like "the", "and", "of", "to", "in",
            etc. that often don't carry significant meaning for analysis purposes.</p>

        <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
            A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including
            smartphones and tablets.</p>

        <h3>Why Analyze Word Frequency?</h3>
        <p>Word frequency analysis provides valuable insights into your writing style and content quality. By
            understanding which words you use most frequently, you can:</p>
        <ul>
            <li>Identify and replace overused words to improve readability</li>
            <li>Ensure proper keyword distribution for SEO optimization</li>
            <li>Analyze your vocabulary range and diversity</li>
            <li>Detect unconscious repetition patterns in your writing</li>
            <li>Compare your word usage against established style guidelines</li>
        </ul>

        <h3>Tips for Effective Word Usage Analysis:</h3>
        <p>To get the most value from word frequency analysis:</p>
        <ul>
            <li><strong>Focus on meaningful words:</strong> Ignore common words to see the distribution of your
                substantive vocabulary</li>
            <li><strong>Compare similar documents:</strong> Analyze multiple pieces of writing to identify consistent
                patterns</li>
            <li><strong>Set goals:</strong> Aim to reduce overused words by a certain percentage in your next draft</li>
            <li><strong>Use synonyms:</strong> Identify words that appear frequently and find appropriate alternatives
            </li>
            <li><strong>Track progress:</strong> Use the tool regularly to monitor improvements in your writing style
            </li>
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
        const analyzeButton = document.getElementById('analyzeButton');
        const copyButton = document.getElementById('copyButton');
        const downloadButton = document.getElementById('downloadButton');
        const clearButton = document.getElementById('clearButton');
        const alertContainer = document.getElementById('alertContainer');
        const resultsContainer = document.getElementById('resultsContainer');
        const resultsPlaceholder = document.getElementById('resultsPlaceholder');
        const resultsBody = document.getElementById('resultsBody');
        const uploadIcon = document.getElementById('uploadIcon');

        // Modal elements
        const uploadModal = document.getElementById('uploadModal');
        const modalFileUpload = document.getElementById('modalFileUpload');
        const fileInfo = document.getElementById('fileInfo');
        const closeModal = document.querySelector('.close-modal');
        const cancelUpload = document.getElementById('cancelUpload');
        const confirmUpload = document.getElementById('confirmUpload');

        // Common words to ignore (stop words)
        const commonWords = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'over', 'after', 'is', 'are', 'was', 'were', 'be', 'being', 'been', 'am', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'this', 'that', 'these', 'those', 'has', 'have', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can', 'shall', 'should']);

        // Initialize counters
        updateCounts();

        // Event listeners
        textInput.addEventListener('input', updateCounts);

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

        analyzeButton.addEventListener('click', analyzeText);
        copyButton.addEventListener('click', copyResults);
        downloadButton.addEventListener('click', downloadResults);
        clearButton.addEventListener('click', clearAll);

        // Add sorting functionality to table headers
        document.querySelectorAll('.results-table th').forEach(header => {
            header.addEventListener('click', function () {
                const sortBy = this.getAttribute('data-sort');
                sortResults(sortBy);
            });
        });

        function updateCounts() {
            const text = textInput.value;

            // Character count
            document.getElementById('charCount').textContent = text.length;

            // Word count
            const words = processText(text, true);
            document.getElementById('wordCount').textContent = words.length;

            // Unique word count
            const uniqueWords = new Set(words);
            document.getElementById('uniqueWordCount').textContent = uniqueWords.size;
        }

        function analyzeText() {
            const text = textInput.value;

            if (!text.trim()) {
                showAlert('Please enter some text to analyze.', 'error');
                return;
            }

            // Process the text based on options
            const words = processText(text);

            if (words.length === 0) {
                showAlert('No words found after processing with current options.', 'error');
                return;
            }

            // Count word frequencies
            const wordCounts = {};
            words.forEach(word => {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            });

            // Convert to array and sort by frequency
            const wordArray = Object.entries(wordCounts).map(([word, count]) => ({
                word,
                frequency: count,
                percentage: ((count / words.length) * 100).toFixed(1)
            }));

            // Sort by frequency (descending)
            wordArray.sort((a, b) => b.frequency - a.frequency);

            // Update most frequent word display
            document.getElementById('mostFrequentWord').textContent =
                wordArray.length > 0 ? `${wordArray[0].word} (${wordArray[0].frequency})` : '-';

            // Display results
            displayResults(wordArray);

            showAlert('Text analysis completed successfully!', 'success');
        }

        function processText(text, forCounting = false) {
            let processedText = text;

            // Ignore case if option is selected
            if (document.getElementById('ignoreCase').checked) {
                processedText = processedText.toLowerCase();
            }

            // Remove punctuation if option is selected
            if (document.getElementById('ignorePunctuation').checked) {
                processedText = processedText.replace(/[^\w\s]|_/g, ' ').replace(/\s+/g, ' ');
            }

            // Remove possessives if option is selected
            if (document.getElementById('ignorePossessives').checked) {
                processedText = processedText.replace(/'s\b/g, '');
            }

            // Split hyphenated words if option is selected
            if (document.getElementById('splitHyphenated').checked) {
                processedText = processedText.replace(/-/g, ' ');
            }

            // Split into words
            let words = processedText.split(/\s+/).filter(word => word.length > 0);

            // Ignore numbers if option is selected
            if (document.getElementById('ignoreNumbers').checked) {
                words = words.filter(word => !/^\d+$/.test(word));
            }

            // For counting purposes, we don't apply the common words filter
            if (!forCounting && document.getElementById('ignoreCommonWords').checked) {
                words = words.filter(word => !commonWords.has(word.toLowerCase()));
            }

            return words;
        }

        function displayResults(wordArray) {
            // Hide placeholder and show results
            resultsPlaceholder.style.display = 'none';
            resultsContainer.style.display = 'block';

            // Clear previous results
            resultsBody.innerHTML = '';

            // Add results to table
            wordArray.forEach((item, index) => {
                const row = document.createElement('tr');

                const wordCell = document.createElement('td');
                wordCell.textContent = item.word;

                const frequencyCell = document.createElement('td');
                frequencyCell.textContent = item.frequency;

                const percentageCell = document.createElement('td');
                percentageCell.textContent = `${item.percentage}%`;

                row.appendChild(wordCell);
                row.appendChild(frequencyCell);
                row.appendChild(percentageCell);

                resultsBody.appendChild(row);
            });
        }

        function sortResults(sortBy) {
            const rows = Array.from(resultsBody.querySelectorAll('tr'));
            const header = document.querySelector(`th[data-sort="${sortBy}"]`);
            const currentOrder = header.getAttribute('data-order') || 'asc';

            // Remove sort indicators from all headers
            document.querySelectorAll('.results-table th').forEach(h => {
                h.textContent = h.textContent.replace(' ↑', '').replace(' ↓', '');
                h.textContent = h.textContent.replace(' ↕', '');
                if (h !== header) {
                    h.setAttribute('data-order', '');
                    h.textContent += ' ↕';
                }
            });

            // Sort rows
            rows.sort((a, b) => {
                const aValue = a.querySelector(`td:nth-child(${sortBy === 'word' ? 1 : sortBy === 'frequency' ? 2 : 3})`).textContent;
                const bValue = b.querySelector(`td:nth-child(${sortBy === 'word' ? 1 : sortBy === 'frequency' ? 2 : 3})`).textContent;

                let comparison = 0;
                if (sortBy === 'word') {
                    comparison = aValue.localeCompare(bValue);
                } else {
                    comparison = parseFloat(aValue) - parseFloat(bValue);
                }

                return currentOrder === 'asc' ? comparison : -comparison;
            });

            // Update header indicator
            const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
            header.setAttribute('data-order', newOrder);
            header.textContent = header.textContent.replace(' ↕', '');
            header.textContent += newOrder === 'asc' ? ' ↑' : ' ↓';

            // Rebuild table
            resultsBody.innerHTML = '';
            rows.forEach(row => resultsBody.appendChild(row));
        }

        function copyResults() {
            const rows = resultsBody.querySelectorAll('tr');
            if (rows.length === 0) {
                showAlert('No results to copy. Please analyze some text first.', 'error');
                return;
            }

            let text = 'Word\tFrequency\tPercentage\n';
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                text += `${cells[0].textContent}\t${cells[1].textContent}\t${cells[2].textContent}\n`;
            });

            navigator.clipboard.writeText(text).then(() => {
                showAlert('Results copied to clipboard!', 'success');
            }).catch(err => {
                showAlert('Failed to copy results: ' + err, 'error');
            });
        }

        function downloadResults() {
            const rows = resultsBody.querySelectorAll('tr');
            if (rows.length === 0) {
                showAlert('No results to download. Please analyze some text first.', 'error');
                return;
            }

            let text = 'Word,Frequency,Percentage\n';
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                text += `"${cells[0].textContent}",${cells[1].textContent},${cells[2].textContent}\n`;
            });

            const filename = 'word_frequency_analysis.csv';
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

            showAlert('Results downloaded as CSV!', 'success');
        }

        function clearAll() {
            textInput.value = '';
            resultsContainer.style.display = 'none';
            resultsPlaceholder.style.display = 'block';

            // Reset options to defaults
            document.getElementById('ignoreCase').checked = true;
            document.getElementById('ignoreCommonWords').checked = false;
            document.getElementById('ignoreNumbers').checked = false;
            document.getElementById('ignorePunctuation').checked = true;
            document.getElementById('ignorePossessives').checked = true;
            document.getElementById('splitHyphenated').checked = false;

            updateCounts();
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