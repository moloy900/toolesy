---
layout: default
title: "Online PDF Resizer – Resize PDF Pages to Any Paper Size Free"
permalink: /online-pdf-resizer-resize-pdf-pages-to-different-paper-sizes/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online PDF Resizer – Resize PDF Pages to Any Paper Size Free</title>
<meta name="description"
  content="Resize PDF pages online for free. Change PDF dimensions to A4, Letter, Legal, or custom sizes. Fast, secure, and no watermark.">
<meta name="keywords"
  content="resize pdf online free, pdf resizer tool, change pdf paper size, pdf dimensions, resize pdf without losing quality, a4 pdf resizer, pdf size changer, compress and resize pdf">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph (OG) Tags -->
<meta property="og:title" content="Free Online PDF Resizer - Resize PDF Pages Easily">
<meta property="og:description" content="Change your PDF page size to A4, Letter, Legal or custom dimensions — free, fast and no signup required.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/online-pdf-resizer-resize-pdf-pages-to-different-paper-sizes">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Resize PDF Pages Online Free">
<meta name="twitter:description" content="Adjust PDF dimensions to standard or custom sizes. No watermark and no registration.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script src="https://unpkg.com/downloadjs@1.4.7"></script>

<style>
  /* PDF Resizer Styles */
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

  .resize-options {
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

  .dimension-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .dimension-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .dimension-label {
    font-size: 0.9rem;
    color: #666;
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

  .paper-size-info {
    background: #e8f4fd;
    border-left: 4px solid var(--primary);
    padding: 15px;
    border-radius: 6px;
    margin-top: 10px;
  }

  .paper-size-info h4 {
    margin: 0 0 8px 0;
    color: var(--primary);
    font-size: 1rem;
  }

  .paper-size-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
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

    .resize-options {
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

    .dimension-inputs {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online PDF Resizer</h1>
  <p class="welcome-message">Resize PDF pages to different paper sizes like A4, Letter, Legal. Adjust PDF dimensions and resolution while maintaining quality. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Resizer</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Selected File: </span>
        <span id="fileName">None</span>
      </div>
      <div class="counter-item">
        <span>Total Pages: </span>
        <span id="pageCount">0</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Estimated Time: </span>
        <span id="estimatedTime">0 seconds</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-expand-alt"></i>
      <h3>Drag & Drop PDF File Here</h3>
      <p>or click the button below to select a file</p>
      <button class="file-upload-button" id="selectFileBtn">
        <i class="fas fa-plus"></i> Select PDF File
      </button>
      <p class="file-info">Maximum file size: 50 MB</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".pdf" style="display: none;">

    <div class="file-list-section">
      <h3>Selected File <span id="fileListCount">(0 files)</span></h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-file-pdf"></i>
          <p>No PDF file selected yet</p>
          <p>Drag and drop a file or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Resize Options</h3>
      <div class="resize-options">
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="resized-document" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <label class="option-label">Paper Size</label>
          <select id="paperSize" class="option-select">
            <option value="original">Keep Original Size</option>
            <option value="a4">A4 (210 × 297 mm)</option>
            <option value="letter">Letter (8.5 × 11 in)</option>
            <option value="legal">Legal (8.5 × 14 in)</option>
            <option value="a3">A3 (297 × 420 mm)</option>
            <option value="a5">A5 (148 × 210 mm)</option>
            <option value="tabloid">Tabloid (11 × 17 in)</option>
            <option value="custom">Custom Size</option>
          </select>
          <div class="paper-size-info" id="paperSizeInfo">
            <h4>Current Selection: Keep Original Size</h4>
            <p>No changes will be made to the page dimensions</p>
          </div>
        </div>
        
        <div class="option-group" id="customSizeGroup" style="display: none;">
          <label class="option-label">Custom Dimensions</label>
          <div class="dimension-inputs">
            <div class="dimension-group">
              <span class="dimension-label">Width</span>
              <input type="number" id="customWidth" class="option-input" min="1" max="2000" value="210" placeholder="Width">
            </div>
            <div class="dimension-group">
              <span class="dimension-label">Height</span>
              <input type="number" id="customHeight" class="option-input" min="1" max="2000" value="297" placeholder="Height">
            </div>
          </div>
          <select id="dimensionUnit" class="option-select">
            <option value="mm">Millimeters (mm)</option>
            <option value="inches">Inches</option>
            <option value="pixels">Pixels (px)</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Page Orientation</label>
          <select id="pageOrientation" class="option-select">
            <option value="auto">Auto (Keep Original)</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Apply To</label>
          <select id="resizeScope" class="option-select">
            <option value="all">All Pages</option>
            <option value="range">Page Range</option>
          </select>
        </div>
        
        <div class="option-group" id="pageRangeGroup" style="display: none;">
          <label class="option-label">Page Range</label>
          <input type="text" id="pageRange" class="option-input" placeholder="e.g., 1-5, 7, 9-12">
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="maintainAspectRatio" checked>
            <label for="maintainAspectRatio">Maintain Aspect Ratio</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="optimizeImages">
            <label for="optimizeImages">Optimize Images</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="highQuality" checked>
            <label for="highQuality">High Quality Output</label>
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
      <button class="case-button" data-action="resize" id="resizeBtn" disabled>Resize PDF</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download Resized PDF</button>
      <button class="case-button warning" data-action="preview" id="previewBtn" disabled>Preview</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select PDF File</h3>
      <div class="example-text">• Click "Select PDF File" or drag and drop a file
• Only one PDF file can be processed at a time
• Maximum file size: 50 MB</div>

      <h3>Step 2: Choose Resize Options</h3>
      <div class="example-text">• Select from standard paper sizes (A4, Letter, Legal, etc.)
• Or set custom dimensions with precise control
• Choose orientation and which pages to resize</div>

      <h3>Step 3: Resize & Download</h3>
      <div class="example-text">• Click "Resize PDF" to process your file
• Wait for processing to complete
• Download your resized PDF document</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Resizer - Change PDF Page Sizes</h2>

    <p>Need to resize your PDF documents to fit different paper sizes? Our free <strong>online PDF Resizer tool</strong> makes it incredibly easy to change PDF page dimensions while maintaining quality. Whether you're preparing documents for printing, adjusting for different standards, or optimizing for digital viewing, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Resize PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click the "Select PDF File" button or simply drag and drop your PDF file into the upload area.</li>
      <li><strong>Choose Size:</strong> Select from standard paper sizes like A4, Letter, Legal, or set custom dimensions with precise control.</li>
      <li><strong>Adjust Settings:</strong> Choose page orientation, select which pages to resize, and set quality options.</li>
      <li><strong>Resize & Download:</strong> Click the "Resize PDF" button to process your file, then download the resized PDF with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you have a document created for US Letter size paper, but you need to print it on A4 paper for international distribution. Instead of dealing with formatting issues or cut-off content, you can use our PDF Resizer to automatically adjust the document to the correct size while maintaining all your content and formatting.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Educators:</strong> Resize assignments and research papers to meet specific formatting requirements.</li>
      <li><strong>Professionals:</strong> Prepare documents for international clients who use different paper standards.</li>
      <li><strong>Print Shops:</strong> Quickly adjust customer files to match available paper sizes.</li>
      <li><strong>Administrative Staff:</strong> Standardize document sizes across departments and organizations.</li>
      <li><strong>Designers:</strong> Adjust PDF dimensions for different presentation or publication requirements.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Will resizing affect the quality of my PDF content?</strong><br>
      Our resizer uses advanced algorithms to maintain quality. Text remains sharp, and images are resized intelligently to preserve clarity.</p>

    <p><strong>Can I resize only specific pages in a multi-page PDF?</strong><br>
      Yes, you can choose to resize all pages or specify a page range using our flexible options.</p>

    <p><strong>Is my data secure when using this PDF resizer?</strong><br>
      Absolutely. Your PDF file is processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>What paper sizes are supported?</strong><br>
      We support all standard paper sizes including A4, Letter, Legal, A3, A5, Tabloid, and custom dimensions.</p>

    <p><strong>Do I need to create an account or pay to use this tool?</strong><br>
      No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Resizer?</h3>
    <p>Our <strong>online PDF Resizer</strong> stands out for its precision, flexibility, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool offers both standard paper sizes and custom dimension options, giving you complete control over your document's appearance.</p>

    <h3>Common Applications of PDF Resizing</h3>
    <p>PDF resizing has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>International Business:</strong> Convert documents between US Letter and international A4 standards</li>
      <li><strong>Academic Publishing:</strong> Resize research papers to meet journal formatting requirements</li>
      <li><strong>Legal Documents:</strong> Adjust contracts and legal forms to standard paper sizes</li>
      <li><strong>Presentation Materials:</strong> Resize PDFs for different display or printing needs</li>
      <li><strong>Archival Purposes:</strong> Standardize document sizes for consistent digital archiving</li>
    </ul>

    <h3>Supported Paper Sizes Reference</h3>
    <p>Our tool supports the following standard paper sizes:</p>
    <ul>
      <li><strong>A4:</strong> 210 × 297 mm (8.27 × 11.69 inches) - International standard</li>
      <li><strong>Letter:</strong> 8.5 × 11 inches (215.9 × 279.4 mm) - US standard</li>
      <li><strong>Legal:</strong> 8.5 × 14 inches (215.9 × 355.6 mm) - US legal documents</li>
      <li><strong>A3:</strong> 297 × 420 mm (11.69 × 16.54 inches) - Larger format</li>
      <li><strong>A5:</strong> 148 × 210 mm (5.83 × 8.27 inches) - Half of A4</li>
      <li><strong>Tabloid:</strong> 11 × 17 inches (279 × 432 mm) - Newspaper format</li>
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
        <p>In a full implementation, this would display a preview of your resized PDF document.</p>
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
  let pdfFile = null;
  let resizedPdfUrl = null;
  let resizedPdfBytes = null;

  // Paper size definitions in points (1 point = 1/72 inch)
  const PAPER_SIZES = {
    'a4': { width: 595, height: 842 },
    'letter': { width: 612, height: 792 },
    'legal': { width: 612, height: 1008 },
    'a3': { width: 842, height: 1191 },
    'a5': { width: 420, height: 595 },
    'tabloid': { width: 792, height: 1224 }
  };

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const resizeBtn = document.getElementById('resizeBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewBtn = document.getElementById('previewBtn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Option elements
    const paperSize = document.getElementById('paperSize');
    const paperSizeInfo = document.getElementById('paperSizeInfo');
    const customSizeGroup = document.getElementById('customSizeGroup');
    const customWidth = document.getElementById('customWidth');
    const customHeight = document.getElementById('customHeight');
    const dimensionUnit = document.getElementById('dimensionUnit');
    const resizeScope = document.getElementById('resizeScope');
    const pageRangeGroup = document.getElementById('pageRangeGroup');
    const pageRange = document.getElementById('pageRange');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closePreview = document.getElementById('closePreview');
    const downloadFromPreview = document.getElementById('downloadFromPreview');
    
    // Event listeners
    selectFileBtn.addEventListener('click', function () {
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
      if (files.length > 0) {
        handleFiles(files[0]);
      }
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
      if (resizedPdfUrl) {
        downloadResizedPdf();
        previewModal.style.display = 'none';
      }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Paper size change
    paperSize.addEventListener('change', updatePaperSizeInfo);

    // Dimension unit change
    dimensionUnit.addEventListener('change', updateCustomDimensions);

    // Resize scope change
    resizeScope.addEventListener('change', function() {
      if (this.value === 'range') {
        pageRangeGroup.style.display = 'flex';
      } else {
        pageRangeGroup.style.display = 'none';
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
      const file = e.target.files[0];
      if (file) {
        handleFiles(file);
      }
    }

    function handleFiles(file) {
      // Check if file is PDF
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showAlert(`"${file.name}" is not a PDF file. Please select a PDF file.`, 'error');
        return;
      }
      
      // Check file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        showAlert(`"${file.name}" is too large. Maximum file size is 50MB.`, 'error');
        return;
      }
      
      // Clear previous file
      if (pdfFile) {
        URL.revokeObjectURL(resizedPdfUrl);
        resizedPdfUrl = null;
        resizedPdfBytes = null;
      }
      
      pdfFile = file;
      renderFileList();
      updateUI();
      
      // Enable resize button
      resizeBtn.disabled = false;
      
      showAlert('PDF file selected successfully!', 'success');
    }

    function renderFileList() {
      if (!pdfFile) {
        fileList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-file-pdf"></i>
            <p>No PDF file selected yet</p>
            <p>Drag and drop a file or click the select button above</p>
          </div>
        `;
        return;
      }

      fileList.innerHTML = `
        <div class="file-item">
          <i class="fas fa-file-pdf file-icon"></i>
          <div class="file-info">
            <div class="file-name">${pdfFile.name}</div>
            <div class="file-size">${formatFileSize(pdfFile.size)}</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn remove-file" onclick="removeFile()">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
    }

    function updateUI() {
      // Update counters
      document.getElementById('fileName').textContent = pdfFile ? pdfFile.name : 'None';
      document.getElementById('fileSize').textContent = pdfFile ? formatFileSize(pdfFile.size) : '0 MB';
      document.getElementById('fileListCount').textContent = pdfFile ? '(1 file)' : '(0 files)';
      
      // Enable/disable buttons
      downloadBtn.disabled = !resizedPdfUrl;
      previewBtn.disabled = !resizedPdfUrl;
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function updatePaperSizeInfo() {
      const selectedSize = paperSize.value;
      
      if (selectedSize === 'custom') {
        customSizeGroup.style.display = 'flex';
        paperSizeInfo.innerHTML = `
          <h4>Current Selection: Custom Size</h4>
          <p>Set your own dimensions using the custom size options</p>
        `;
      } else if (selectedSize === 'original') {
        customSizeGroup.style.display = 'none';
        paperSizeInfo.innerHTML = `
          <h4>Current Selection: Keep Original Size</h4>
          <p>No changes will be made to the page dimensions</p>
        `;
      } else {
        customSizeGroup.style.display = 'none';
        const size = PAPER_SIZES[selectedSize];
        const widthInch = (size.width / 72).toFixed(2);
        const heightInch = (size.height / 72).toFixed(2);
        const widthMm = (size.width / 72 * 25.4).toFixed(1);
        const heightMm = (size.height / 72 * 25.4).toFixed(1);
        
        paperSizeInfo.innerHTML = `
          <h4>Current Selection: ${selectedSize.toUpperCase()}</h4>
          <p>Dimensions: ${widthMm} × ${heightMm} mm (${widthInch} × ${heightInch} inches)</p>
        `;
      }
    }

    function updateCustomDimensions() {
      // This function would convert between units if needed
      // For now, it's a placeholder for unit conversion logic
    }

    function handlePdfAction(action) {
      switch (action) {
        case 'resize':
          resizePdf();
          break;

        case 'download':
          downloadResizedPdf();
          break;

        case 'preview':
          previewPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    async function resizePdf() {
      if (!pdfFile) {
        showAlert('Please select a PDF file first.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF resizer...';

        const { PDFDocument } = PDFLib;
        const resizedPdf = await PDFDocument.create();

        // Read the original PDF
        const arrayBuffer = await readFileAsArrayBuffer(pdfFile);
        const originalPdf = await PDFDocument.load(arrayBuffer);
        
        const totalPages = originalPdf.getPages().length;
        
        // Determine which pages to resize
        let pagesToResize = [];
        const scope = resizeScope.value;
        
        if (scope === 'all') {
          pagesToResize = Array.from({ length: totalPages }, (_, i) => i);
        } else if (scope === 'range') {
          pagesToResize = parsePageRange(pageRange.value, totalPages).map(p => p - 1);
          if (pagesToResize.length === 0) {
            showAlert('Invalid page range. Please enter valid page numbers.', 'error');
            progressSection.style.display = 'none';
            return;
          }
        }

        // Get target dimensions
        const targetDimensions = getTargetDimensions();
        const orientation = document.getElementById('pageOrientation').value;
        const maintainAspectRatio = document.getElementById('maintainAspectRatio').checked;

        for (let i = 0; i < pagesToResize.length; i++) {
          const pageIndex = pagesToResize[i];
          
          try {
            // Update progress
            const progress = Math.floor((i / pagesToResize.length) * 80);
            progressFill.style.width = progress + '%';
            progressText.textContent = `Resizing page ${pageIndex + 1} of ${totalPages}...`;

            // Get the original page
            const originalPage = originalPdf.getPages()[pageIndex];
            const originalSize = originalPage.getSize();
            
            // Calculate new dimensions
            let newWidth = targetDimensions.width;
            let newHeight = targetDimensions.height;
            
            // Apply orientation if needed
            if (orientation === 'portrait' && newWidth > newHeight) {
              [newWidth, newHeight] = [newHeight, newWidth];
            } else if (orientation === 'landscape' && newWidth < newHeight) {
              [newWidth, newHeight] = [newHeight, newWidth];
            }
            
            // Maintain aspect ratio if requested
            if (maintainAspectRatio && targetDimensions.paperSize !== 'original') {
              const originalRatio = originalSize.width / originalSize.height;
              const newRatio = newWidth / newHeight;
              
              if (newRatio > originalRatio) {
                // New size is wider, adjust height
                newHeight = newWidth / originalRatio;
              } else {
                // New size is taller, adjust width
                newWidth = newHeight * originalRatio;
              }
            }
            
            // Create new page with calculated dimensions
            const newPage = resizedPdf.addPage([newWidth, newHeight]);
            
            // Embed the original page as a form XObject
            const embeddedPage = await resizedPdf.embedPage(originalPage);
            
            // Draw the embedded page onto the new page, scaled to fit
            newPage.drawPage(embeddedPage, {
              x: 0,
              y: 0,
              width: newWidth,
              height: newHeight
            });

          } catch (error) {
            console.error(`Error resizing page ${pageIndex + 1}:`, error);
            throw new Error(`Failed to resize page ${pageIndex + 1}: ${error.message}`);
          }
        }

        // Finalize PDF
        progressFill.style.width = '90%';
        progressText.textContent = 'Finalizing resized PDF...';

        // Save the resized PDF
        resizedPdfBytes = await resizedPdf.save();
        
        // Create blob URL for download
        const blob = new Blob([resizedPdfBytes], { type: 'application/pdf' });
        resizedPdfUrl = URL.createObjectURL(blob);

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Resizing completed successfully!';
        
        showAlert(`Successfully resized ${pagesToResize.length} pages!`, 'success');
        
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
        console.error('Resize error:', error);
        progressSection.style.display = 'none';
        showAlert(`Resizing failed: ${error.message}`, 'error');
      }
    }

    function getTargetDimensions() {
      const paperSizeValue = paperSize.value;
      
      if (paperSizeValue === 'original') {
        return { width: 0, height: 0, paperSize: 'original' };
      }
      
      if (paperSizeValue === 'custom') {
        let width = parseFloat(customWidth.value) || 210;
        let height = parseFloat(customHeight.value) || 297;
        const unit = dimensionUnit.value;
        
        // Convert to points (PDF units: 1 point = 1/72 inch)
        if (unit === 'mm') {
          width = (width / 25.4) * 72; // mm to points
          height = (height / 25.4) * 72;
        } else if (unit === 'inches') {
          width = width * 72; // inches to points
          height = height * 72;
        }
        // pixels are already approximately points for screen resolution
        
        return { width, height, paperSize: 'custom' };
      }
      
      // Standard paper size
      return { ...PAPER_SIZES[paperSizeValue], paperSize: paperSizeValue };
    }

    function parsePageRange(rangeStr, maxPages) {
      if (!rangeStr.trim()) return [];
      
      const pages = new Set();
      const parts = rangeStr.split(',');
      
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [start, end] = trimmed.split('-').map(num => parseInt(num.trim()));
          if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
            return [];
          }
          for (let i = start; i <= end; i++) {
            pages.add(i);
          }
        } else {
          const pageNum = parseInt(trimmed);
          if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPages) {
            return [];
          }
          pages.add(pageNum);
        }
      }
      
      return Array.from(pages).sort((a, b) => a - b);
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

    function downloadResizedPdf() {
      if (!resizedPdfUrl || !resizedPdfBytes) {
        showAlert('No resized PDF available. Please resize a file first.', 'error');
        return;
      }

      try {
        const outputFilename = document.getElementById('outputFilename').value || 'resized-document';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        showAlert(`Downloading "${filename}"...`, 'info');
        
        // Use downloadjs for reliable file download
        download(resizedPdfBytes, filename, "application/pdf");
        
        showAlert('PDF download completed!', 'success');
        
      } catch (error) {
        console.error('Download error:', error);
        
        // Fallback download method
        try {
          const outputFilename = document.getElementById('outputFilename').value || 'resized-document';
          const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
          
          const blob = new Blob([resizedPdfBytes], { type: 'application/pdf' });
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
      if (!resizedPdfUrl) {
        showAlert('No resized PDF available. Please resize a file first.', 'error');
        return;
      }

      try {
        // Open PDF in new tab
        const newTab = window.open(resizedPdfUrl, '_blank');
        if (!newTab) {
          showAlert('Popup blocked. Please allow popups for this site to preview PDF.', 'error');
          
          // Fallback: Show modal with download option
          previewModal.style.display = 'block';
          const modalBody = previewModal.querySelector('.modal-body');
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px;">
              <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
              <h4>PDF Preview</h4>
              <p>Your resized PDF is ready for download.</p>
              <p>To preview, please allow popups or download the file to view it.</p>
              <div style="margin-top: 20px;">
                <button class="modal-button primary" onclick="downloadResizedPdf()">
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
      if (resizedPdfUrl) {
        URL.revokeObjectURL(resizedPdfUrl);
      }
      
      pdfFile = null;
      resizedPdfUrl = null;
      resizedPdfBytes = null;
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
    window.removeFile = function() {
      clearAll();
    };

    // Initialize UI
    updatePaperSizeInfo();
    updateUI();
  });
</script>