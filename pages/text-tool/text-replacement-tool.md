---
layout: default
title: "Text Replacement Tool - Find and Replace Text Online"
permalink: /text-replacement-tool-find-and-replace-text-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Text Replacement Tool - Find and Replace Text Online</title>
<meta name="description"
    content="Free online text replacement tool. Find and replace text with options for case sensitivity, whole words, regex, and more. Perfect for editing and formatting text.">
<meta name="keywords"
    content="text replacement, find and replace, text editor, search and replace, regex replace, text formatting, text tool">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Canonical URL for Blogspot -->
<link rel="canonical" href="http://toolesy.com/text-replacement-tool-find-and-replace-text-online" />

<!-- Open Graph tags -->
<meta property="og:title" content="Text Replacement Tool - Find and Replace Text Online">
<meta property="og:description"
    content="Free online tool to find and replace text with advanced options. Perfect for editing, formatting, and processing text.">
<meta property="og:type" content="website">
<meta property="og:url" content="http://toolesy.com/text-replacement-tool-find-and-replace-text-online">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Text Replacement Tool - Find and Replace Text Online">
<meta name="twitter:description"
    content="Free online tool to find and replace text with advanced options. Perfect for editing, formatting, and processing text.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
    /* Text Replacement Tool Styles */

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

    .replacement-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-bottom: 20px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
    }

    .input-group label {
        font-weight: 600;
        margin-bottom: 8px;
        color: #2c3e50;
    }

    .input-group input {
        padding: 12px;
        border: 2px solid #e0e6ed;
        border-radius: 8px;
        font-size: 16px;
        transition: border-color 0.3s;
    }

    .input-group input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
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

    .history-section {
        margin-top: 30px;
    }

    .history-list {
        margin-top: 15px;
        max-height: 200px;
        overflow-y: auto;
        border: 1px solid #e0e6ed;
        border-radius: 8px;
        padding: 10px;
        background: white;
    }

    .history-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid #f0f0f0;
    }

    .history-item:last-child {
        border-bottom: none;
    }

    .history-text {
        flex-grow: 1;
        margin-right: 15px;
    }

    .history-find {
        font-weight: 600;
        color: #e74c3c;
    }

    .history-replace {
        font-weight: 600;
        color: #27ae60;
    }

    .history-copy {
        background: none;
        border: none;
        color: var(--primary);
        cursor: pointer;
        font-size: 16px;
    }

    .history-copy:hover {
        color: #2980b9;
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

        .replacement-inputs {
            grid-template-columns: 1fr;
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
    <h1>Text Replacement Tool - Find and Replace Text Online</h1>
    <p class="welcome-message">Easily find and replace text in your content with advanced options for case sensitivity,
        whole words, regular expressions, and more. Perfect for editing and formatting text.</p>

    <div class="converter-section">
        <h2>Find and Replace Text</h2>

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
                <span>Replacements: </span>
                <span id="replacementCount">0</span>
            </div>
        </div>

        <div class="input-section">
            <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
            <textarea id="textInput" rows="6" placeholder="Paste your text here..."></textarea>
        </div>

        <!-- Hidden file input -->
        <input type="file" id="fileUpload" accept=".txt" style="display: none;">

        <div class="options-section">
            <h2>Replacement Options</h2>

            <div class="replacement-inputs">
                <div class="input-group">
                    <label for="findInput">Text to Find:</label>
                    <input type="text" id="findInput" placeholder="Enter text to find">
                </div>

                <div class="input-group">
                    <label for="replaceInput">Replace With:</label>
                    <input type="text" id="replaceInput" placeholder="Enter replacement text">
                </div>
            </div>

            <div class="option-group">
                <div class="option-item">
                    <h3>Matching Options</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="caseSensitive">
                        <label for="caseSensitive">Case sensitive</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="wholeWord">
                        <label for="wholeWord">Match whole word only</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="regexMode">
                        <label for="regexMode">Use regex (regular expressions)</label>
                    </div>
                </div>

                <div class="option-item">
                    <h3>Additional Options</h3>
                    <div class="option-checkbox">
                        <input type="checkbox" id="replaceAll">
                        <label for="replaceAll">Replace all occurrences</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="preserveCase">
                        <label for="preserveCase">Preserve case (e.g., "Word" → "Term")</label>
                    </div>
                    <div class="option-checkbox">
                        <input type="checkbox" id="highlightChanges">
                        <label for="highlightChanges">Highlight changes in results</label>
                    </div>
                </div>
            </div>

            <div class="button-section">
                <button class="case-button success" id="replaceButton">Replace Text</button>
                <button class="case-button" id="countButton">Count Occurrences</button>
                <button class="case-button" id="copyButton">Copy Result</button>
                <button class="case-button secondary" id="clearButton">Clear All</button>
            </div>
        </div>

        <div id="alertContainer" class="alert-container"></div>

        <div class="results-section">
            <h2>Results</h2>
            <div class="results-summary">
                <span id="resultsSummary">No replacements made yet</span>
                <span class="results-count" id="resultsCount"></span>
            </div>
            <textarea id="resultsOutput" rows="6" placeholder="Your results will appear here..." readonly></textarea>
        </div>

        <div class="history-section">
            <h2>Replacement History</h2>
            <div class="history-list" id="historyList">
                <p style="text-align: center; color: #7f8c8d; padding: 20px;">Your recent replacements will appear here
                </p>
            </div>
        </div>

        {% include share-and-donation.html %}
        <div class="examples">
            <h2>Examples</h2>

            <h3>Basic Replacement:</h3>
            <div class="example-text">Find: "apple"
                Replace: "orange"
                Input: "I have an apple and another apple."
                Output: "I have an orange and another orange."</div>

            <h3>Regex Replacement:</h3>
            <div class="example-text">Find: "\d{4}" (matches 4-digit numbers)
                Replace: "YEAR"
                Input: "Copyright 2021, updated 2022"
                Output: "Copyright YEAR, updated YEAR"</div>

            <h3>Case Preservation:</h3>
            <div class="example-text">Find: "color"
                Replace: "colour"
                Input: "Color, COLOR, and color"
                Output: "Colour, COLOUR, and colour"</div>
        </div>
    </div>

    <!-- SEO Content Section -->
    <div class="content-placeholder">
        <h2>Free Online Text Replacement Tool</h2>

        <p>Our <strong>Text Replacement Tool</strong> is a powerful utility for finding and replacing text in documents,
            code, or any text content. Whether you're a writer editing a manuscript, a programmer refactoring code, or a
            student formatting a paper, this tool simplifies the process of making bulk changes to text with precision
            and control.</p>

        <h3>How to Use the Text Replacement Tool (Step-by-Step):</h3>
        <ul>
            <li><strong>Paste Your Text:</strong> Copy and paste your text into the input box, or upload a text file
            </li>
            <li><strong>Specify Find and Replace Terms:</strong> Enter the text you want to find and what you want to
                replace it with</li>
            <li><strong>Adjust Options:</strong> Customize the replacement behavior with options like case sensitivity,
                whole word matching, or regex mode</li>
            <li><strong>Execute Replacement:</strong> Click "Replace Text" to perform the replacement or "Count
                Occurrences" to see how many matches exist</li>
            <li><strong>Review and Copy Results:</strong> Examine the results, then copy or download the modified text
            </li>
        </ul>

        <h3>Real-Life Use Cases:</h3>
        <ul>
            <li><strong>Content Editing:</strong> Quickly change product names, brand terms, or terminology across
                entire documents</li>
            <li><strong>Code Refactoring:</strong> Rename variables, functions, or classes throughout code files</li>
            <li><strong>Data Cleaning:</strong> Standardize formatting in datasets (e.g., changing date formats, phone
                number formats)</li>
            <li><strong>Document Preparation:</strong> Replace placeholders with actual content in templates</li>
            <li><strong>Localization:</strong> Adapt content for different regions (e.g., replacing "color" with
                "colour" for UK English)</li>
        </ul>

        <h3>Advanced Features Explained:</h3>
        <ul>
            <li><strong>Case Sensitivity:</strong> When enabled, "Apple" will not match "apple"</li>
            <li><strong>Whole Word Matching:</strong> When enabled, "cat" will not match "category" or "scatter"</li>
            <li><strong>Regex Mode:</strong> Allows using powerful pattern matching for complex replacements</li>
            <li><strong>Preserve Case:</strong> Maintains the original capitalization pattern when replacing</li>
            <li><strong>Replace All:</strong> Replaces every occurrence at once instead of one at a time</li>
        </ul>

        <h3>Frequently Asked Questions (FAQ):</h3>
        <p><strong>Q: What is regex (regular expression) mode?</strong><br>
            A: Regex mode allows you to use special patterns to match text. For example, '\d+' would match any sequence
            of digits. This is useful for advanced text manipulation like finding all email addresses or phone numbers
            in a text.</p>

        <p><strong>Q: Is my text kept private when using this tool?</strong><br>
            A: Absolutely. All text processing happens locally in your browser. Your text is never sent to any server,
            meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

        <p><strong>Q: Can I use this tool for code refactoring?</strong><br>
            A: Yes, the tool is excellent for code refactoring, especially when combined with the whole word matching
            and case sensitivity options to ensure precise replacements.</p>

        <p><strong>Q: What are some common regex patterns I can use?</strong><br>
            A: Some useful patterns include:<br>
            - \d+ (matches one or more digits)<br>
            - [A-Za-z]+ (matches words)<br>
            - \bword\b (matches "word" as a whole word)<br>
            - ^.+@.+\..+$ (matches email addresses)</p>

        <p><strong>Q: Can I replace text in multiple files at once?</strong><br>
            A: This tool processes one text at a time. For multiple files, you would need to process each file
            separately, or use a dedicated desktop application for batch processing.</p>

        <h3>Regex Quick Reference</h3>
        <p>Regular expressions (regex) are powerful patterns for matching text. Here are some common patterns:</p>
        <ul>
            <li><strong>.</strong> - Matches any single character</li>
            <li><strong>*</strong> - Matches zero or more of the previous character</li>
            <li><strong>+</strong> - Matches one or more of the previous character</li>
            <li><strong>\d</strong> - Matches any digit (0-9)</li>
            <li><strong>\w</strong> - Matches any word character (a-z, A-Z, 0-9, _)</li>
            <li><strong>\s</strong> - Matches any whitespace character</li>
            <li><strong>^</strong> - Matches the beginning of a line</li>
            <li><strong>$</strong> - Matches the end of a line</li>
            <li><strong>[abc]</strong> - Matches any character in the brackets</li>
            <li><strong>[^abc]</strong> - Matches any character not in the brackets</li>
            <li><strong>(abc)</strong> - Creates a capture group</li>
        </ul>

        <h3>Tips for Effective Text Replacement</h3>
        <ul>
            <li>Always test your find/replace pattern with a small sample first</li>
            <li>Use the "Count Occurrences" button to verify you're matching the right text</li>
            <li>When working with important documents, keep a backup before making bulk changes</li>
            <li>For complex replacements, consider doing them in multiple steps</li>
            <li>Use the highlight changes option to visually verify your replacements</li>
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
        const findInput = document.getElementById('findInput');
        const replaceInput = document.getElementById('replaceInput');
        const resultsOutput = document.getElementById('resultsOutput');
        const replaceButton = document.getElementById('replaceButton');
        const countButton = document.getElementById('countButton');
        const copyButton = document.getElementById('copyButton');
        const clearButton = document.getElementById('clearButton');
        const alertContainer = document.getElementById('alertContainer');
        const fileUpload = document.getElementById('fileUpload');
        const historyList = document.getElementById('historyList');
        const resultsSummary = document.getElementById('resultsSummary');
        const resultsCount = document.getElementById('resultsCount');
        const uploadIcon = document.getElementById('uploadIcon');

        // Modal elements
        const uploadModal = document.getElementById('uploadModal');
        const modalFileUpload = document.getElementById('modalFileUpload');
        const fileInfo = document.getElementById('fileInfo');
        const closeModal = document.querySelector('.close-modal');
        const cancelUpload = document.getElementById('cancelUpload');
        const confirmUpload = document.getElementById('confirmUpload');

        // Replacement history
        let replacementHistory = [];
        let replacementCount = 0;

        // Initialize counters
        updateCounts();

        // Event listeners
        textInput.addEventListener('input', updateCounts);
        replaceButton.addEventListener('click', performReplacement);
        countButton.addEventListener('click', countOccurrences);
        copyButton.addEventListener('click', copyResults);
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

            // Update replacement count if we have results
            if (resultsOutput.value && replacementCount > 0) {
                document.getElementById('replacementCount').textContent = replacementCount;
            }
        }

        function performReplacement() {
            const text = textInput.value;
            const find = findInput.value;
            const replace = replaceInput.value;

            if (!text) {
                showAlert('Please enter some text to process.', 'error');
                return;
            }

            if (!find) {
                showAlert('Please enter text to find.', 'error');
                return;
            }

            const caseSensitive = document.getElementById('caseSensitive').checked;
            const wholeWord = document.getElementById('wholeWord').checked;
            const regexMode = document.getElementById('regexMode').checked;
            const replaceAll = document.getElementById('replaceAll').checked;
            const preserveCase = document.getElementById('preserveCase').checked;
            const highlightChanges = document.getElementById('highlightChanges').checked;

            let result = text;
            let count = 0;

            try {
                if (regexMode) {
                    // Regex replacement
                    const flags = caseSensitive ? 'g' : 'gi';
                    const regex = wholeWord ? new RegExp(`\\b${find}\\b`, flags) : new RegExp(find, flags);

                    if (replaceAll) {
                        result = text.replace(regex, (match) => {
                            count++;
                            return preserveCase ? preserveCaseReplacement(match, replace) : replace;
                        });
                    } else {
                        result = text.replace(regex, (match) => {
                            if (count === 0) {
                                count++;
                                return preserveCase ? preserveCaseReplacement(match, replace) : replace;
                            }
                            return match;
                        });
                    }
                } else {
                    // Simple text replacement
                    if (caseSensitive) {
                        if (wholeWord) {
                            const regex = new RegExp(`\\b${escapeRegExp(find)}\\b`, 'g');
                            result = text.replace(regex, (match) => {
                                count++;
                                return preserveCase ? preserveCaseReplacement(match, replace) : replace;
                            });
                        } else {
                            if (replaceAll) {
                                result = text.split(find).join(replace);
                                count = (text.split(find).length - 1);
                            } else {
                                result = text.replace(find, replace);
                                count = 1;
                            }
                        }
                    } else {
                        if (wholeWord) {
                            const regex = new RegExp(`\\b${escapeRegExp(find)}\\b`, 'gi');
                            result = text.replace(regex, (match) => {
                                count++;
                                return preserveCase ? preserveCaseReplacement(match, replace) : replace;
                            });
                        } else {
                            const regex = new RegExp(escapeRegExp(find), 'gi');
                            result = text.replace(regex, (match) => {
                                count++;
                                return preserveCase ? preserveCaseReplacement(match, replace) : replace;
                            });
                        }
                    }
                }

                // Highlight changes if requested
                if (highlightChanges && count > 0) {
                    // Simple highlighting by wrapping changes in brackets
                    const findPattern = regexMode ? find : escapeRegExp(find);
                    const flags = caseSensitive ? 'g' : 'gi';
                    const highlightRegex = wholeWord ?
                        new RegExp(`\\b${findPattern}\\b`, flags) :
                        new RegExp(findPattern, flags);

                    result = result.replace(highlightRegex, '[ $& ]');
                }

                // Update results
                resultsOutput.value = result;
                replacementCount = count;

                // Update counters and summary
                updateCounts();
                resultsSummary.textContent = count === 0 ?
                    'No matches found' :
                    `Made ${count} replacement${count === 1 ? '' : 's'}`;
                resultsCount.textContent = count > 0 ? `${count} match${count === 1 ? '' : 'es'}` : '';

                // Add to history
                addToHistory(find, replace, count);

                showAlert(`Successfully made ${count} replacement${count === 1 ? '' : 's'}!`, 'success');
            } catch (error) {
                showAlert('Error performing replacement: ' + error.message, 'error');
                console.error(error);
            }
        }

        function countOccurrences() {
            const text = textInput.value;
            const find = findInput.value;

            if (!text) {
                showAlert('Please enter some text to process.', 'error');
                return;
            }

            if (!find) {
                showAlert('Please enter text to find.', 'error');
                return;
            }

            const caseSensitive = document.getElementById('caseSensitive').checked;
            const wholeWord = document.getElementById('wholeWord').checked;
            const regexMode = document.getElementById('regexMode').checked;

            let count = 0;

            try {
                if (regexMode) {
                    // Regex count
                    const flags = caseSensitive ? 'g' : 'gi';
                    const regex = wholeWord ? new RegExp(`\\b${find}\\b`, flags) : new RegExp(find, flags);
                    const matches = text.match(regex);
                    count = matches ? matches.length : 0;
                } else {
                    // Simple text count
                    if (caseSensitive) {
                        if (wholeWord) {
                            const regex = new RegExp(`\\b${escapeRegExp(find)}\\b`, 'g');
                            const matches = text.match(regex);
                            count = matches ? matches.length : 0;
                        } else {
                            count = text.split(find).length - 1;
                        }
                    } else {
                        if (wholeWord) {
                            const regex = new RegExp(`\\b${escapeRegExp(find)}\\b`, 'gi');
                            const matches = text.match(regex);
                            count = matches ? matches.length : 0;
                        } else {
                            const regex = new RegExp(escapeRegExp(find), 'gi');
                            const matches = text.match(regex);
                            count = matches ? matches.length : 0;
                        }
                    }
                }

                resultsSummary.textContent = count === 0 ?
                    'No matches found' :
                    `Found ${count} occurrence${count === 1 ? '' : 's'}`;
                resultsCount.textContent = count > 0 ? `${count} match${count === 1 ? '' : 'es'}` : '';

                showAlert(`Found ${count} occurrence${count === 1 ? '' : 's'} of "${find}"`, 'success');
            } catch (error) {
                showAlert('Error counting occurrences: ' + error.message, 'error');
                console.error(error);
            }
        }

        function preserveCaseReplacement(match, replacement) {
            // Preserve the case of the original match
            if (match === match.toUpperCase()) {
                return replacement.toUpperCase();
            } else if (match === match.toLowerCase()) {
                return replacement.toLowerCase();
            } else if (match[0] === match[0].toUpperCase()) {
                return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
            } else {
                return replacement;
            }
        }

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        function addToHistory(find, replace, count) {
            if (count === 0) return;

            // Add to beginning of history array
            replacementHistory.unshift({
                find,
                replace,
                count,
                timestamp: new Date()
            });

            // Limit history to 10 items
            if (replacementHistory.length > 10) {
                replacementHistory.pop();
            }

            // Update history display
            updateHistoryDisplay();
        }

        function updateHistoryDisplay() {
            if (replacementHistory.length === 0) {
                historyList.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 20px;">Your recent replacements will appear here</p>';
                return;
            }

            historyList.innerHTML = '';

            replacementHistory.forEach((item, index) => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';

                const historyText = document.createElement('div');
                historyText.className = 'history-text';
                historyText.innerHTML = `
                        <span class="history-find">"${item.find}"</span> → 
                        <span class="history-replace">"${item.replace}"</span>
                        <span>(${item.count} replacement${item.count === 1 ? '' : 's'})</span>
                    `;

                const copyButton = document.createElement('button');
                copyButton.className = 'history-copy';
                copyButton.innerHTML = '↻';
                copyButton.title = 'Use this replacement again';
                copyButton.addEventListener('click', () => {
                    findInput.value = item.find;
                    replaceInput.value = item.replace;
                    performReplacement();
                });

                historyItem.appendChild(historyText);
                historyItem.appendChild(copyButton);
                historyList.appendChild(historyItem);
            });
        }

        function copyResults() {
            if (!resultsOutput.value) {
                showAlert('No results to copy. Please perform a replacement first.', 'error');
                return;
            }

            navigator.clipboard.writeText(resultsOutput.value).then(() => {
                showAlert('Results copied to clipboard!', 'success');
            }).catch(err => {
                showAlert('Failed to copy results: ' + err, 'error');
            });
        }

        function clearAll() {
            textInput.value = '';
            findInput.value = '';
            replaceInput.value = '';
            resultsOutput.value = '';
            replacementHistory = [];
            replacementCount = 0;

            // Reset options to defaults
            document.getElementById('caseSensitive').checked = false;
            document.getElementById('wholeWord').checked = false;
            document.getElementById('regexMode').checked = false;
            document.getElementById('replaceAll').checked = true;
            document.getElementById('preserveCase').checked = false;
            document.getElementById('highlightChanges').checked = false;

            // Update counters and summary
            updateCounts();
            resultsSummary.textContent = 'No replacements made yet';
            resultsCount.textContent = '';
            updateHistoryDisplay();

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