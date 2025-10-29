---
layout: default
title: "Online PDF Merger - Merge Multiple PDF Files into One"
permalink: /free-online-pdf-merger-combine-multiple-pdf-files-into-one/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online PDF Merger - Merge Multiple PDF Files into One</title>
<meta name="description"
  content="Merge PDF files online for free. Combine multiple PDFs into a single document instantly. Fast, secure, no registration, and no watermark.">
<meta name="keywords"
  content="merge pdf online free, pdf merger tool, combine pdf files, join pdf online, pdf combiner free, merge pdf without watermark, pdf tools online">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph (OG) Tags -->
<meta property="og:title" content="Free Online PDF Merger - Combine PDF Files">
<meta property="og:description" content="Combine multiple PDF files into a single document online — free, secure, and no signup required!">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/free-online-pdf-merger-combine-multiple-pdf-files-into-one">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Merge PDF Files Online Free - No Watermark">
<meta name="twitter:description" content="Fast and secure PDF merge tool. Combine PDFs easily online with no registration or watermark.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script src="https://unpkg.com/downloadjs@1.4.7"></script>

<style>
  /* PDF Merger Styles */
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
    color: #e74c3c;
    margin-right: 15px;
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

  .merge-options {
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

    .merge-options {
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
  <h1>Free Online PDF Merger</h1>
  <p class="welcome-message">Combine multiple PDF files into one document instantly. Merge PDFs without losing quality. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Merger</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Files: </span>
        <span id="fileCount">0</span>
      </div>
      <div class="counter-item">
        <span>Total Pages: </span>
        <span id="pageCount">0</span>
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
      <i class="fas fa-file-pdf"></i>
      <h3>Drag & Drop PDF Files Here</h3>
      <p>or click the button below to select files</p>
      <button class="file-upload-button" id="selectFilesBtn">
        <i class="fas fa-plus"></i> Select PDF Files
      </button>
      <p class="file-info">Maximum 20 files, 100 MB total</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".pdf" multiple style="display: none;">

    <div class="file-list-section">
      <h3>Selected Files <span id="fileListCount">(0 files)</span></h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>No PDF files selected yet</p>
          <p>Drag and drop files or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Merge Options</h3>
      <div class="merge-options">
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="merged-document" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <label class="option-label">Page Size</label>
          <select id="pageSize" class="option-select">
            <option value="original">Keep Original</option>
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Page Orientation</label>
          <select id="pageOrientation" class="option-select">
            <option value="original">Keep Original</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="addBookmarks" checked>
            <label for="addBookmarks">Add Bookmarks</label>
          </div>
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
      <button class="case-button" data-action="merge" id="mergeBtn" disabled>Merge PDFs</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download Merged PDF</button>
      <button class="case-button warning" data-action="preview" id="previewBtn" disabled>Preview</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select PDF Files</h3>
      <div class="example-text">• Click "Select PDF Files" or drag and drop files
• You can select multiple PDF files at once
• Maximum 20 files, 100 MB total size</div>

      <h3>Step 2: Arrange Files (Optional)</h3>
      <div class="example-text">• Use the up/down arrows to reorder files
• Files will be merged in the order shown
• Remove any files you don't need</div>

      <h3>Step 3: Merge & Download</h3>
      <div class="example-text">• Click "Merge PDFs" to combine your files
• Wait for processing to complete
• Download your merged PDF document</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Merger - Combine Multiple PDF Files</h2>

    <p>Need to combine multiple PDF documents into one file? Our free <strong>online PDF Merger tool</strong> makes it incredibly easy to merge PDF files without compromising quality. Whether you're combining reports, merging scanned documents, or assembling a portfolio, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Merge PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Files:</strong> Click the "Select PDF Files" button or simply drag and drop your PDF files into the upload area. You can select multiple files at once.</li>
      <li><strong>Arrange Order:</strong> Use the up and down arrows to arrange your PDF files in the desired order. The files will be merged in the sequence shown.</li>
      <li><strong>Customize Options:</strong> Choose your output filename, page size, orientation, and whether to add bookmarks or page numbers.</li>
      <li><strong>Merge & Download:</strong> Click the "Merge PDFs" button to combine your files, then download the merged PDF with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're preparing a business proposal that consists of multiple documents: a cover letter, company overview, project timeline, pricing sheet, and client testimonials - each as a separate PDF file. Instead of sending five separate files to your client, you can use our PDF Merger to combine them into a single, professional document. This creates a better impression and makes it easier for your client to review everything in one place.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Combine multiple research papers, assignments, or project documents into a single submission.</li>
      <li><strong>Professionals:</strong> Merge reports, presentations, contracts, and other business documents for client delivery.</li>
      <li><strong>HR Departments:</strong> Combine job applications, resumes, and cover letters for easier candidate review.</li>
      <li><strong>Researchers:</strong> Merge multiple research papers, articles, or study materials into organized collections.</li>
      <li><strong>Administrative Staff:</strong> Combine scanned documents, forms, and records for efficient filing and sharing.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Is there a limit to how many PDF files I can merge?</strong><br>
      You can merge up to 20 PDF files at once with a total maximum size of 100 MB. For larger projects, you may need to merge in batches.</p>

    <p><strong>Will the quality of my PDFs be affected by merging?</strong><br>
      No, the merger preserves the original quality of all your PDF files. Text remains sharp and images maintain their resolution.</p>

    <p><strong>Is my data secure when using this PDF merger?</strong><br>
      Absolutely. Your PDF files are processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Can I rearrange the order of pages after merging?</strong><br>
      Yes, you can easily rearrange the order of your PDF files before merging using the up and down arrows in the file list.</p>

    <p><strong>Do I need to create an account or pay to use this tool?</strong><br>
      No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Merger?</h3>
    <p>Our <strong>online PDF Merger</strong> stands out for its simplicity, speed, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool also works on any device with a modern web browser, making it accessible whenever you need it.</p>

    <h3>Common Applications of PDF Merging</h3>
    <p>PDF merging has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Academic Use:</strong> Combine research papers, thesis chapters, or multiple assignments into single documents</li>
      <li><strong>Business Use:</strong> Merge contracts, proposals, invoices, and reports for professional presentations</li>
      <li><strong>Personal Use:</strong> Combine scanned family documents, travel itineraries, or recipe collections</li>
      <li><strong>Legal Use:</strong> Merge court documents, evidence files, or legal briefs for case preparation</li>
      <li><strong>Real Estate:</strong> Combine property documents, contracts, and disclosure statements for transactions</li>
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
        <p>In a full implementation, this would display a preview of your merged PDF document.</p>
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
  let pdfFiles = [];
  let mergedPdfUrl = null;
  let mergedPdfBytes = null;

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFilesBtn = document.getElementById('selectFilesBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const mergeBtn = document.getElementById('mergeBtn');
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
      if (mergedPdfUrl) {
        downloadMergedPdf();
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
        handlePdfAction(action);
      });
    });

    function handleFileSelect(e) {
      const files = e.target.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      const validFiles = Array.from(files).filter(file => {
        // Check if file is PDF
        if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
          showAlert(`"${file.name}" is not a PDF file. Please select PDF files only.`, 'error');
          return false;
        }
        
        // Check file size (max 50MB per file)
        if (file.size > 50 * 1024 * 1024) {
          showAlert(`"${file.name}" is too large. Maximum file size is 50MB.`, 'error');
          return false;
        }
        
        return true;
      });

      // Check total file count
      if (pdfFiles.length + validFiles.length > 20) {
        showAlert('Maximum 20 files allowed. Please remove some files before adding more.', 'error');
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
      const fileItem = {
        id: fileId,
        file: file,
        name: file.name,
        size: formatFileSize(file.size),
        pages: 'Unknown'
      };

      pdfFiles.push(fileItem);
      renderFileList();
    }

    function renderFileList() {
      if (pdfFiles.length === 0) {
        fileList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-folder-open"></i>
            <p>No PDF files selected yet</p>
            <p>Drag and drop files or click the select button above</p>
          </div>
        `;
        return;
      }

      fileList.innerHTML = pdfFiles.map((fileItem, index) => `
        <div class="file-item" data-id="${fileItem.id}">
          <i class="fas fa-file-pdf file-icon"></i>
          <div class="file-info">
            <div class="file-name">${fileItem.name}</div>
            <div class="file-size">${fileItem.size} • ${fileItem.pages} pages</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn move-up" ${index === 0 ? 'disabled' : ''} onclick="moveFileUp('${fileItem.id}')">
              <i class="fas fa-arrow-up"></i>
            </button>
            <button class="file-action-btn move-down" ${index === pdfFiles.length - 1 ? 'disabled' : ''} onclick="moveFileDown('${fileItem.id}')">
              <i class="fas fa-arrow-down"></i>
            </button>
            <button class="file-action-btn remove-file" onclick="removeFile('${fileItem.id}')">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `).join('');
    }

    function updateUI() {
      // Update counters
      document.getElementById('fileCount').textContent = pdfFiles.length;
      document.getElementById('fileListCount').textContent = `(${pdfFiles.length} files)`;
      
      // Calculate total size
      const totalSize = pdfFiles.reduce((sum, file) => sum + file.file.size, 0);
      document.getElementById('totalSize').textContent = formatFileSize(totalSize);
      
      // Estimate pages and time
      const totalPages = pdfFiles.reduce((sum, file) => sum + (file.pages === 'Unknown' ? 10 : parseInt(file.pages)), 0);
      document.getElementById('pageCount').textContent = totalPages;
      document.getElementById('estimatedTime').textContent = Math.ceil(totalPages / 50) + ' seconds';
      
      // Enable/disable buttons
      mergeBtn.disabled = pdfFiles.length < 2;
      downloadBtn.disabled = !mergedPdfUrl;
      previewBtn.disabled = !mergedPdfUrl;
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handlePdfAction(action) {
      switch (action) {
        case 'merge':
          mergePdfs();
          break;

        case 'download':
          downloadMergedPdf();
          break;

        case 'preview':
          previewPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    async function mergePdfs() {
      if (pdfFiles.length < 2) {
        showAlert('Please select at least 2 PDF files to merge.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF merger...';

        const { PDFDocument } = PDFLib;
        const mergedPdf = await PDFDocument.create();

        let totalPages = 0;

        for (let i = 0; i < pdfFiles.length; i++) {
          try {
            // Update progress
            const progress = Math.floor((i / pdfFiles.length) * 80);
            progressFill.style.width = progress + '%';
            progressText.textContent = `Processing ${pdfFiles[i].name} (${i + 1}/${pdfFiles.length})...`;

            const file = pdfFiles[i].file;
            
            // Read file as array buffer
            const arrayBuffer = await readFileAsArrayBuffer(file);
            const pdf = await PDFDocument.load(arrayBuffer);
            
            // Copy all pages from the current PDF
            const pageIndices = pdf.getPageIndices();
            const pages = await mergedPdf.copyPages(pdf, pageIndices);
            
            // Add pages to merged PDF
            pages.forEach(page => {
              mergedPdf.addPage(page);
            });

            // Update file object with actual page count
            pdfFiles[i].pages = pageIndices.length;
            totalPages += pageIndices.length;

          } catch (error) {
            console.error(`Error processing ${pdfFiles[i].name}:`, error);
            throw new Error(`Failed to process "${pdfFiles[i].name}": ${error.message}`);
          }
        }

        // Finalize PDF
        progressFill.style.width = '90%';
        progressText.textContent = 'Finalizing merged PDF...';

        // Save the merged PDF
        mergedPdfBytes = await mergedPdf.save();
        
        // Create blob URL for download
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        mergedPdfUrl = URL.createObjectURL(blob);

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Merge completed successfully!';
        
        showAlert(`Successfully merged ${pdfFiles.length} files with ${totalPages} pages!`, 'success');
        
        // Enable download and preview buttons
        downloadBtn.disabled = false;
        previewBtn.disabled = false;
        
        // Update UI with actual page counts
        updateUI();
        
        // Hide progress after a delay
        setTimeout(() => {
          progressSection.style.display = 'none';
        }, 2000);

      } catch (error) {
        console.error('Merge error:', error);
        progressSection.style.display = 'none';
        showAlert(`Merge failed: ${error.message}`, 'error');
      }
    }

    // File reader helper function
    function readFileAsArrayBuffer(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    function downloadMergedPdf() {
      if (!mergedPdfUrl || !mergedPdfBytes) {
        showAlert('No merged PDF available. Please merge files first.', 'error');
        return;
      }

      try {
        const outputFilename = document.getElementById('outputFilename').value || 'merged-document';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        showAlert(`Downloading "${filename}"...`, 'info');
        
        // Use downloadjs for reliable file download
        download(mergedPdfBytes, filename, "application/pdf");
        
        showAlert('PDF download completed!', 'success');
        
      } catch (error) {
        console.error('Download error:', error);
        
        // Fallback download method
        try {
          const outputFilename = document.getElementById('outputFilename').value || 'merged-document';
          const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
          
          const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          showAlert('PDF downloaded successfully!', 'success');
        } catch (fallbackError) {
          showAlert('Failed to download PDF. Please try again.', 'error');
        }
      }
    }

    function previewPdf() {
      if (!mergedPdfUrl) {
        showAlert('No merged PDF available. Please merge files first.', 'error');
        return;
      }

      try {
        // Open PDF in new tab
        const newTab = window.open(mergedPdfUrl, '_blank');
        if (!newTab) {
          showAlert('Popup blocked. Please allow popups for this site to preview PDF.', 'error');
          
          // Fallback: Show modal with download option
          previewModal.style.display = 'block';
          const modalBody = previewModal.querySelector('.modal-body');
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px;">
              <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
              <h4>PDF Preview</h4>
              <p>Your merged PDF is ready for download.</p>
              <p>To preview, please allow popups or download the file to view it.</p>
              <div style="margin-top: 20px;">
                <button class="modal-button primary" onclick="downloadMergedPdf()">
                  <i class="fas fa-download"></i> Download PDF
                </button>
              </div>
            </div>
          `;
        }
      } catch (error) {
        console.error('Preview error:', error);
        showAlert('Failed to preview PDF. Please download the file instead.', 'error');
      }
    }

    function clearAll() {
      // Clean up blob URLs
      if (mergedPdfUrl) {
        URL.revokeObjectURL(mergedPdfUrl);
      }
      
      pdfFiles = [];
      mergedPdfUrl = null;
      mergedPdfBytes = null;
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

    // Make functions available globally for onclick handlers
    window.moveFileUp = function(fileId) {
      const index = pdfFiles.findIndex(item => item.id === fileId);
      if (index > 0) {
        // Swap with previous item
        [pdfFiles[index - 1], pdfFiles[index]] = [pdfFiles[index], pdfFiles[index - 1]];
        renderFileList();
        updateUI();
      }
    };

    window.moveFileDown = function(fileId) {
      const index = pdfFiles.findIndex(item => item.id === fileId);
      if (index < pdfFiles.length - 1) {
        // Swap with next item
        [pdfFiles[index], pdfFiles[index + 1]] = [pdfFiles[index + 1], pdfFiles[index]];
        renderFileList();
        updateUI();
      }
    };

    window.removeFile = function(fileId) {
      pdfFiles = pdfFiles.filter(item => item.id !== fileId);
      renderFileList();
      updateUI();
      showAlert('File removed.', 'info');
    };

    // Initialize UI
    updateUI();
  });
</script>