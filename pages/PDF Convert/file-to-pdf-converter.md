---
layout: default
title: "Online PDF, Word & Excel Converter - Convert Files to PDF"
permalink: /free-online-pdf-word-excel-converter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online PDF, Word & Excel Converter - Convert Files to PDF</title>
<meta name="description"
  content="Free online file converter tool. Convert HTML, Word (DOCX), and Excel (XLSX) files to PDF format instantly. No registration required.">
<meta name="keywords"
  content="pdf converter, word to pdf, excel to pdf, html to pdf, docx to pdf, xlsx to pdf, online converter, file converter">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
<!-- === PDF Converter Required Libraries === -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.12.1/html2pdf.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.7.0/mammoth.browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.8/download.min.js"></script>
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<script src="{{ '/assets/js/converter.js' | relative_url }}"></script>
<style>
  /* Converter Styles */
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

  .upload-section {
    margin: 20px 0;
    padding: 30px;
    background: white;
    border: 3px dashed #e0e6ed;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .upload-section:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .upload-section i {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  .upload-section h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  .upload-section p {
    color: #666;
    margin-bottom: 20px;
  }

  .file-upload-button {
    padding: 12px 30px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
    font-size: 1rem;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .file-list-section {
    margin: 30px 0;
  }

  .file-list {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #e0e6ed;
    border-radius: 10px;
    background: white;
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s ease;
  }

  .file-item:hover {
    background: #f8f9fa;
  }

  .file-item:last-child {
    border-bottom: none;
  }

  .file-icon {
    font-size: 1.5rem;
    margin-right: 15px;
  }

  .file-icon.html {
    color: #e34c26;
  }

  .file-icon.word {
    color: #2b579a;
  }

  .file-icon.excel {
    color: #217346;
  }

  .file-icon.pdf {
    color: #e74c3c;
  }

  .file-info {
    flex: 1;
  }

  .file-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .file-size {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .file-actions {
    display: flex;
    gap: 10px;
  }

  .file-action-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .file-action-btn:hover {
    background: #f0f0f0;
  }

  .move-up {
    color: var(--primary);
  }

  .move-down {
    color: var(--primary);
  }

  .remove-file {
    color: #e74c3c;
  }

  .file-action-btn:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  .file-action-btn:disabled:hover {
    background: none;
  }

  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #7f8c8d;
  }

  .empty-state i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #bdc3c7;
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

  .case-button:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 15px;
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
    background: white;
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

  .progress-section {
    margin: 20px 0;
    display: none;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 4px;
    transition: width 0.3s ease;
    width: 0%;
  }

  .progress-text {
    text-align: center;
    color: #666;
    font-size: 0.9rem;
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

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .file-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .file-actions {
      align-self: flex-end;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online File Converter</h1>
  <p class="welcome-message">Convert HTML, Word (DOCX), and Excel (XLSX) files to PDF format instantly. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>File Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Files: </span>
        <span id="fileCount">0</span>
      </div>
      <div class="counter-item">
        <span>File Types: </span>
        <span id="fileTypes">None</span>
      </div>
      <div class="counter-item">
        <span>Total Size: </span>
        <span id="totalSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Estimated Time: </span>
        <span id="estimatedTime">0 seconds</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-file-export"></i>
      <h3>Drag & Drop Files Here</h3>
      <p>or click the button below to select files</p>
      <button class="file-upload-button" id="selectFilesBtn">
        <i class="fas fa-plus"></i> Select Files
      </button>
      <p class="file-info">Supported formats: HTML, DOCX, XLSX | Maximum 10 files, 50 MB total</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".html,.docx,.xlsx" multiple style="display: none;">

    <div class="file-list-section">
      <h3>Selected Files <span id="fileListCount">(0 files)</span></h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>No files selected yet</p>
          <p>Drag and drop files or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Conversion Options</h3>
      <div class="conversion-options">
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="converted-document" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <label class="option-label">Page Size</label>
          <select id="pageSize" class="option-select">
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Page Orientation</label>
          <select id="pageOrientation" class="option-select">
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="addPageNumbers" checked>
            <label for="addPageNumbers">Add Page Numbers</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="optimizeSize">
            <label for="optimizeSize">Optimize File Size</label>
          </div>
        </div>
      </div>
    </div>

    <div class="progress-section" id="progressSection">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Processing...</div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="convert" id="convertBtn" disabled>Convert to PDF</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download PDF</button>
      <button class="case-button warning" data-action="preview" id="previewBtn" disabled>Preview</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select Files</h3>
      <div class="example-text">• Click "Select Files" or drag and drop files
• Supported formats: HTML, DOCX (Word), XLSX (Excel)
• Maximum 10 files, 100 MB total size</div>

      <h3>Step 2: Arrange Files (Optional)</h3>
      <div class="example-text">• Use the up/down arrows to reorder files
• Files will be converted in the order shown
• Remove any files you don't need</div>

      <h3>Step 3: Convert & Download</h3>
      <div class="example-text">• Click "Convert to PDF" to convert your files
• Wait for processing to complete
• Download your PDF document</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online File Converter - Convert HTML, Word & Excel to PDF</h2>

    <p>Need to convert various file formats to PDF? Our free <strong>online file converter tool</strong> makes it incredibly easy to convert HTML, Word (DOCX), and Excel (XLSX) files to PDF format without compromising quality. Whether you're converting documents, spreadsheets, or web pages, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Convert Files to PDF (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Files:</strong> Click the "Select Files" button or simply drag and drop your files into the upload area. You can select multiple files at once.</li>
      <li><strong>Arrange Order:</strong> Use the up and down arrows to arrange your files in the desired order. The files will be converted in the sequence shown.</li>
      <li><strong>Customize Options:</strong> Choose your output filename, page size, orientation, and whether to add page numbers.</li>
      <li><strong>Convert & Download:</strong> Click the "Convert to PDF" button to process your files, then download the PDF with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're preparing a business report that consists of multiple documents: a Word document with the main content, an Excel spreadsheet with financial data, and an HTML file with additional information. Instead of sending three separate files to your client, you can use our File Converter to combine them into a single, professional PDF document. This creates a better impression and makes it easier for your client to review everything in one place.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Convert assignments, research papers, or project documents from Word to PDF for submission.</li>
      <li><strong>Professionals:</strong> Convert reports, presentations, contracts, and spreadsheets for client delivery.</li>
      <li><strong>Web Developers:</strong> Convert HTML pages to PDF for documentation or client presentations.</li>
      <li><strong>Administrative Staff:</strong> Convert various document formats to PDF for efficient filing and sharing.</li>
      <li><strong>Researchers:</strong> Convert multiple file types into organized PDF collections.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: Is there a limit to how many files I can convert?</strong><br>
      A: You can convert up to 10 files at once with a total maximum size of 50 MB. For larger projects, you may need to convert in batches.</p>

    <p><strong>Q: Will the formatting of my files be preserved?</strong><br>
      A: Yes, the converter preserves the original formatting of your files as much as possible. Complex layouts might require some adjustment.</p>

    <p><strong>Q: Is my data secure when using this converter?</strong><br>
      A: Absolutely. Your files are processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: Can I rearrange the order of pages after converting?</strong><br>
      A: Yes, you can easily rearrange the order of your files before converting using the up and down arrows in the file list.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our File Converter?</h3>
    <p>Our <strong>online file converter</strong> stands out for its simplicity, speed, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool also works on any device with a modern web browser, making it accessible whenever you need it.</p>

    <h3>Common Applications of File Conversion</h3>
    <p>File conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Academic Use:</strong> Convert research papers, thesis chapters, or multiple assignments into PDF format</li>
      <li><strong>Business Use:</strong> Convert contracts, proposals, invoices, and reports for professional presentations</li>
      <li><strong>Web Development:</strong> Convert HTML pages to PDF for documentation or archiving</li>
      <li><strong>Data Analysis:</strong> Convert Excel spreadsheets to PDF for sharing data insights</li>
      <li><strong>Personal Use:</strong> Convert various document formats for personal archiving or sharing</li>
    </ul>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">PDF Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="text-align: center; padding: 20px;">
        <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
        <h4>PDF Preview Feature</h4>
        <p>In a full implementation, this would display a preview of your converted PDF document.</p>
        <p>For security reasons, actual PDF rendering requires server-side processing in a production environment.</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
      <button class="modal-button primary" id="downloadFromPreview">Download</button>
    </div>
  </div>
</div>

<script>
  // Global variables
  let files = [];
  let convertedPdfUrl = null;
  let convertedPdfBytes = null;

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFilesBtn = document.getElementById('selectFilesBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const convertBtn = document.getElementById('convertBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewBtn = document.getElementById('previewBtn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closePreview = document.getElementById('closePreview');
    const downloadFromPreview = document.getElementById('downloadFromPreview');
    
    // Event listeners
    selectFilesBtn.addEventListener('click', function () {
      fileUpload.click();
    });

    fileUpload.addEventListener('change', handleFileSelect);

    // Drag and drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
      dropArea.style.borderColor = 'var(--primary)';
      dropArea.style.backgroundColor = '#e3f2fd';
    }

    function unhighlight() {
      dropArea.style.borderColor = '#e0e6ed';
      dropArea.style.backgroundColor = 'white';
    }

    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFiles(files);
    }

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        previewModal.style.display = 'none';
      });
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Download from preview
    downloadFromPreview.addEventListener('click', function() {
      if (convertedPdfUrl) {
        downloadConvertedPdf();
        previewModal.style.display = 'none';
      }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Action buttons
    document.querySelectorAll('.case-button').forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleFileAction(action);
      });
    });

    function handleFileSelect(e) {
      const files = e.target.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      const validFiles = Array.from(files).filter(file => {
        // Check file type
        const fileExtension = file.name.toLowerCase().split('.').pop();
        if (!['html', 'docx', 'xlsx'].includes(fileExtension)) {
          showAlert(`"${file.name}" is not a supported file type. Please select HTML, DOCX, or XLSX files only.`, 'error');
          return false;
        }
        
        // Check file size (max 20MB per file)
        if (file.size > 20 * 1024 * 1024) {
          showAlert(`"${file.name}" is too large. Maximum file size is 20MB.`, 'error');
          return false;
        }
        
        return true;
      });

      // Check total file count
      if (files.length + validFiles.length > 10) {
        showAlert('Maximum 10 files allowed. Please remove some files before adding more.', 'error');
        return;
      }

      // Add files to the list
      validFiles.forEach(file => {
        addFileToList(file);
      });

      updateUI();
    }

    function addFileToList(file) {
      const fileId = Date.now() + Math.random();
      const fileExtension = file.name.toLowerCase().split('.').pop();
      let fileType = 'unknown';
      let iconClass = 'fas fa-file';
      
      if (fileExtension === 'html') {
        fileType = 'html';
        iconClass = 'fab fa-html5';
      } else if (fileExtension === 'docx') {
        fileType = 'word';
        iconClass = 'fas fa-file-word';
      } else if (fileExtension === 'xlsx') {
        fileType = 'excel';
        iconClass = 'fas fa-file-excel';
      }
      
      const fileItem = {
        id: fileId,
        file: file,
        name: file.name,
        type: fileType,
        size: formatFileSize(file.size),
        iconClass: iconClass
      };

      files.push(fileItem);
      renderFileList();
    }

    function renderFileList() {
      if (files.length === 0) {
        fileList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-folder-open"></i>
            <p>No files selected yet</p>
            <p>Drag and drop files or click the select button above</p>
          </div>
        `;
        return;
      }

      fileList.innerHTML = files.map((fileItem, index) => `
        <div class="file-item" data-id="${fileItem.id}">
          <i class="${fileItem.iconClass} file-icon ${fileItem.type}"></i>
          <div class="file-info">
            <div class="file-name">${fileItem.name}</div>
            <div class="file-size">${fileItem.size}</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn move-up" ${index === 0 ? 'disabled' : ''} data-id="${fileItem.id}" data-action="move-up">
              <i class="fas fa-arrow-up"></i>
            </button>
            <button class="file-action-btn move-down" ${index === files.length - 1 ? 'disabled' : ''} data-id="${fileItem.id}" data-action="move-down">
              <i class="fas fa-arrow-down"></i>
            </button>
            <button class="file-action-btn remove-file" data-id="${fileItem.id}" data-action="remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `).join('');

      // Add event listeners to file action buttons
      fileList.querySelectorAll('.file-action-btn').forEach(button => {
        button.addEventListener('click', function() {
          const fileId = this.getAttribute('data-id');
          const action = this.getAttribute('data-action');
          
          switch(action) {
            case 'move-up':
              moveFileUp(fileId);
              break;
            case 'move-down':
              moveFileDown(fileId);
              break;
            case 'remove':
              removeFile(fileId);
              break;
          }
        });
      });
    }

    function updateUI() {
      // Update counters
      document.getElementById('fileCount').textContent = files.length;
      document.getElementById('fileListCount').textContent = `(${files.length} files)`;
      
      // Calculate total size
      const totalSize = files.reduce((sum, file) => sum + file.file.size, 0);
      document.getElementById('totalSize').textContent = formatFileSize(totalSize);
      
      // Show file types
      const fileTypes = [...new Set(files.map(file => file.type))];
      document.getElementById('fileTypes').textContent = fileTypes.length > 0 ? fileTypes.join(', ') : 'None';
      
      // Estimate time
      const estimatedTime = Math.ceil(files.length * 2);
      document.getElementById('estimatedTime').textContent = estimatedTime + ' seconds';
      
      // Enable/disable buttons
      convertBtn.disabled = files.length < 1;
      downloadBtn.disabled = !convertedPdfUrl;
      previewBtn.disabled = !convertedPdfUrl;
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handleFileAction(action) {
      switch (action) {
        case 'convert':
          convertFiles();
          break;

        case 'download':
          downloadConvertedPdf();
          break;

        case 'preview':
          previewPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    // File manipulation functions
    function moveFileUp(fileId) {
      const index = files.findIndex(item => item.id == fileId);
      if (index > 0) {
        // Swap with previous item
        [files[index - 1], files[index]] = [files[index], files[index - 1]];
        renderFileList();
        updateUI();
      }
    }

    function moveFileDown(fileId) {
      const index = files.findIndex(item => item.id == fileId);
      if (index < files.length - 1) {
        // Swap with next item
        [files[index], files[index + 1]] = [files[index + 1], files[index]];
        renderFileList();
        updateUI();
      }
    }

    function removeFile(fileId) {
      files = files.filter(item => item.id != fileId);
      renderFileList();
      updateUI();
      showAlert('File removed.', 'info');
    }

    async function convertFiles() {
      if (files.length < 1) {
        showAlert('Please select at least 1 file to convert.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing converter...';

        // For single file, convert directly
        if (files.length === 1) {
          const file = files[0].file;
          const fileExtension = file.name.toLowerCase().split('.').pop();
          
          progressFill.style.width = '50%';
          progressText.textContent = `Converting ${files[0].name}...`;
          
          if (fileExtension === 'html') {
            convertedPdfBytes = await convertHtmlToPdfDirect(file);
          } else if (fileExtension === 'docx') {
            convertedPdfBytes = await convertWordToPdfDirect(file);
          } else if (fileExtension === 'xlsx') {
            convertedPdfBytes = await convertExcelToPdfDirect(file);
          }
        } else {
          // For multiple files, convert each and merge
          convertedPdfBytes = await convertMultipleFiles();
        }

        if (!convertedPdfBytes) {
          throw new Error('Conversion failed - no PDF data generated');
        }

        // Create blob URL for download
        const blob = new Blob([convertedPdfBytes], { type: 'application/pdf' });
        convertedPdfUrl = URL.createObjectURL(blob);

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Conversion completed successfully!';
        
        showAlert(`Successfully converted ${files.length} files!`, 'success');
        
        // Enable download and preview buttons
        downloadBtn.disabled = false;
        previewBtn.disabled = false;
        
        // Update UI
        updateUI();
        
        // Hide progress after a delay
        setTimeout(() => {
          progressSection.style.display = 'none';
        }, 2000);

      } catch (error) {
        console.error('Conversion error:', error);
        progressSection.style.display = 'none';
        showAlert(`Conversion failed: ${error.message}`, 'error');
      }
    }

    // Convert multiple files and merge them
    async function convertMultipleFiles() {
      const { PDFDocument } = PDFLib;
      const mergedPdf = await PDFDocument.create();
      
      for (let i = 0; i < files.length; i++) {
        const progress = Math.floor((i / files.length) * 80);
        progressFill.style.width = progress + '%';
        progressText.textContent = `Converting ${files[i].name} (${i + 1}/${files.length})...`;
        
        const file = files[i].file;
        const fileExtension = file.name.toLowerCase().split('.').pop();
        
        let pdfBytes;
        
        if (fileExtension === 'html') {
          pdfBytes = await convertHtmlToPdfDirect(file);
        } else if (fileExtension === 'docx') {
          pdfBytes = await convertWordToPdfDirect(file);
        } else if (fileExtension === 'xlsx') {
          pdfBytes = await convertExcelToPdfDirect(file);
        }
        
        if (pdfBytes) {
          const pdfDoc = await PDFDocument.load(pdfBytes);
          const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
          pages.forEach(page => mergedPdf.addPage(page));
        }
      }
      
      return await mergedPdf.save();
    }

    // HTML to PDF - Direct conversion
    async function convertHtmlToPdfDirect(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
          try {
            const htmlContent = e.target.result;
            
            // Create a temporary container
            const container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.left = '0';
            container.style.top = '0';
            container.style.width = '100%';
            container.style.padding = '20px';
            container.style.backgroundColor = 'white';
            container.style.color = 'black';
            container.style.zIndex = '10000';
            container.innerHTML = htmlContent;
            document.body.appendChild(container);
            
            // Get options
            const pageSize = document.getElementById('pageSize').value;
            const pageOrientation = document.getElementById('pageOrientation').value;
            
            const opt = {
              margin: 10,
              filename: 'converted.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true
              },
              jsPDF: { 
                unit: 'mm', 
                format: pageSize, 
                orientation: pageOrientation 
              }
            };
            
            // Add delay for rendering
            await new Promise(r => setTimeout(r, 1500));
            
            // Convert to PDF
            const pdfArrayBuffer = await html2pdf()
              .set(opt)
              .from(container)
              .toPdf()
              .output('arraybuffer');
              
            document.body.removeChild(container);
            resolve(pdfArrayBuffer);
            
          } catch (error) {
            // Clean up container if it exists
            const container = document.querySelector('div[style*="z-index: 10000"]');
            if (container) {
              document.body.removeChild(container);
            }
            reject(error);
          }
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    }

    // Word to PDF - Direct conversion
    async function convertWordToPdfDirect(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
          try {
            const arrayBuffer = e.target.result;
            const result = await mammoth.convertToHtml({ arrayBuffer });
            
            if (!result.value) {
              throw new Error('Word to HTML conversion failed');
            }

            // Create a temporary container
            const container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.left = '0';
            container.style.top = '0';
            container.style.width = '100%';
            container.style.padding = '20px';
            container.style.backgroundColor = 'white';
            container.style.zIndex = '10000';
            container.innerHTML = result.value;
            document.body.appendChild(container);
            
            // Get options
            const pageSize = document.getElementById('pageSize').value;
            const pageOrientation = document.getElementById('pageOrientation').value;
            
            const opt = {
              margin: 10,
              filename: 'converted.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true
              },
              jsPDF: { 
                unit: 'mm', 
                format: pageSize, 
                orientation: pageOrientation 
              }
            };
            
            // Add delay for rendering
            await new Promise(r => setTimeout(r, 2000));
            
            // Convert to PDF
            const pdfArrayBuffer = await html2pdf()
              .set(opt)
              .from(container)
              .toPdf()
              .output('arraybuffer');
              
            document.body.removeChild(container);
            resolve(pdfArrayBuffer);
            
          } catch (error) {
            // Clean up container if it exists
            const container = document.querySelector('div[style*="z-index: 10000"]');
            if (container) {
              document.body.removeChild(container);
            }
            reject(error);
          }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    // Excel to PDF - Direct conversion
    async function convertExcelToPdfDirect(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
          try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const html = XLSX.utils.sheet_to_html(worksheet, { editable: false });

            // Create a temporary container with styling
            const container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.left = '0';
            container.style.top = '0';
            container.style.width = '100%';
            container.style.padding = '20px';
            container.style.backgroundColor = 'white';
            container.style.zIndex = '10000';
            
            // Add CSS for table styling
            const style = document.createElement('style');
            style.textContent = `
              table { 
                border-collapse: collapse; 
                width: 100%; 
                font-family: Arial, sans-serif;
                font-size: 12px;
              }
              th, td { 
                border: 1px solid #ddd; 
                padding: 6px; 
                text-align: left; 
              }
              th { 
                background-color: #f2f2f2; 
                font-weight: bold; 
              }
              tr:nth-child(even) {
                background-color: #f9f9f9;
              }
            `;
            container.appendChild(style);
            container.innerHTML += html;
            document.body.appendChild(container);
            
            // Get options
            const pageSize = document.getElementById('pageSize').value;
            const pageOrientation = document.getElementById('pageOrientation').value;
            
            const opt = {
              margin: 10,
              filename: 'converted.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true
              },
              jsPDF: { 
                unit: 'mm', 
                format: pageSize, 
                orientation: pageOrientation 
              }
            };
            
            // Add delay for rendering
            await new Promise(r => setTimeout(r, 1500));
            
            // Convert to PDF
            const pdfArrayBuffer = await html2pdf()
              .set(opt)
              .from(container)
              .toPdf()
              .output('arraybuffer');
              
            document.body.removeChild(container);
            resolve(pdfArrayBuffer);
              
          } catch (error) {
            // Clean up container if it exists
            const container = document.querySelector('div[style*="z-index: 10000"]');
            if (container) {
              document.body.removeChild(container);
            }
            reject(error);
          }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    function downloadConvertedPdf() {
      if (!convertedPdfUrl || !convertedPdfBytes) {
        showAlert('No converted PDF available. Please convert files first.', 'error');
        return;
      }

      try {
        const outputFilename = document.getElementById('outputFilename').value || 'converted-document';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        showAlert(`Downloading "${filename}"...`, 'info');
        
        // Use downloadjs for reliable download
        download(convertedPdfBytes, filename, "application/pdf");
        
        showAlert('PDF download completed!', 'success');
        
      } catch (error) {
        console.error('Download error:', error);
        showAlert('Failed to download PDF. Please try again.', 'error');
      }
    }

    function previewPdf() {
      if (!convertedPdfUrl) {
        showAlert('No converted PDF available. Please convert files first.', 'error');
        return;
      }

      try {
        // Create fresh blob URL
        const blob = new Blob([convertedPdfBytes], { type: 'application/pdf' });
        const freshUrl = URL.createObjectURL(blob);
        
        // Open in new tab
        const newTab = window.open(freshUrl, '_blank');
        if (!newTab) {
          showAlert('Popup blocked. Please allow popups for this site to preview PDF.', 'error');
          previewModal.style.display = 'block';
        }
      } catch (error) {
        console.error('Preview error:', error);
        showAlert('Failed to preview PDF. Please download the file instead.', 'error');
      }
    }

    function clearAll() {
      // Clean up blob URLs
      if (convertedPdfUrl) {
        URL.revokeObjectURL(convertedPdfUrl);
      }
      
      files = [];
      convertedPdfUrl = null;
      convertedPdfBytes = null;
      fileUpload.value = '';
      renderFileList();
      updateUI();
      showAlert('All files cleared.', 'info');
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

    // Initialize UI
    updateUI();
  });
</script>