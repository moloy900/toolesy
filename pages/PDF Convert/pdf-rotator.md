---
layout: default
title: "Online PDF Rotator - Rotate PDF Pages"
permalink: /online-pdf-rotator-rotate-pdf-pages/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Online PDF Rotator - Rotate PDF Pages in Seconds</title>

<meta name="description"
  content="Rotate PDF pages online for free. Easily rotate left, right, or 180°. Fix upside-down PDF pages, rotate specific pages or the entire PDF. No signup or watermark.">

<meta name="keywords"
  content="rotate pdf, pdf rotator, rotate pdf online free, fix upside down pdf, rotate specific pdf pages, pdf tools, rotate pdf orientation">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free Online PDF Rotator - Rotate PDF Pages Easily">
<meta property="og:description" content="Fix upside-down or sideways PDF pages online for free. No watermark or registration required.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/online-pdf-rotator-rotate-pdf-pages/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="PDF Rotator - Free Online Rotate Tool">
<meta name="twitter:description" content="Rotate any PDF page online instantly. No signup required!">



<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script src="https://unpkg.com/downloadjs@1.4.7"></script>

<style>
  /* PDF Rotator Styles */
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

  .rotate-options {
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

  .direction-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 10px;
  }

  .direction-btn {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #555;
  }

  .direction-btn:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .direction-btn.active {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
  }

  .direction-btn i {
    font-size: 1.5rem;
  }

  .page-range-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .range-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .range-label {
    font-size: 0.9rem;
    color: #666;
  }

  .rotation-preview {
    background: #e8f4fd;
    border-left: 4px solid var(--primary);
    padding: 15px;
    border-radius: 6px;
    margin-top: 10px;
    text-align: center;
  }

  .rotation-preview h4 {
    margin: 0 0 8px 0;
    color: var(--primary);
    font-size: 1rem;
  }

  .rotation-preview p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
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

    .rotate-options {
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

    .page-range-inputs {
      grid-template-columns: 1fr;
    }

    .direction-buttons {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online PDF Rotator</h1>
  <p class="welcome-message">Rotate PDF pages to correct orientation - left, right, or upside down. Rotate specific pages or entire document with precision. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Rotator</h2>

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
        <span>Pages to Rotate: </span>
        <span id="pagesToRotate">0</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-redo-alt"></i>
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
      <h3>Rotation Options</h3>
      <div class="rotate-options">
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="rotated-document" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <label class="option-label">Pages to Rotate</label>
          <select id="rotateScope" class="option-select">
            <option value="all">All Pages</option>
            <option value="range">Page Range</option>
            <option value="odd">Odd Pages Only</option>
            <option value="even">Even Pages Only</option>
          </select>
        </div>
        
        <div class="option-group" id="pageRangeGroup" style="display: none;">
          <label class="option-label">Page Range</label>
          <div class="page-range-inputs">
            <div class="range-group">
              <span class="range-label">From Page</span>
              <input type="number" id="fromPage" class="option-input" min="1" value="1" placeholder="1">
            </div>
            <div class="range-group">
              <span class="range-label">To Page</span>
              <input type="number" id="toPage" class="option-input" min="1" value="1" placeholder="1">
            </div>
          </div>
        </div>
        
        <div class="option-group">
          <label class="option-label">Rotation Direction</label>
          <div class="direction-buttons">
            <button class="direction-btn active" data-direction="normal">
              <i class="fas fa-arrow-up"></i>
              <span>Normal</span>
            </button>
            <button class="direction-btn" data-direction="left">
              <i class="fas fa-undo"></i>
              <span>Left 90°</span>
            </button>
            <button class="direction-btn" data-direction="right">
              <i class="fas fa-redo"></i>
              <span>Right 90°</span>
            </button>
            <button class="direction-btn" data-direction="upside-down">
              <i class="fas fa-arrow-down"></i>
              <span>Upside Down</span>
            </button>
          </div>
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="preserveAnnotations" checked>
            <label for="preserveAnnotations">Preserve Annotations</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="optimizeAfterRotate">
            <label for="optimizeAfterRotate">Optimize After Rotation</label>
          </div>
        </div>
      </div>
      
      <div class="rotation-preview" id="rotationPreview">
        <h4>Current Selection: Normal (0°)</h4>
        <p>No rotation will be applied to the selected pages</p>
      </div>
    </div>

    <div class="progress-section" id="progressSection">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Processing...</div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="rotate" id="rotateBtn" disabled>Rotate PDF</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download Rotated PDF</button>
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

      <h3>Step 2: Choose Rotation Options</h3>
      <div class="example-text">• Select which pages to rotate (all, range, odd, or even)
• Choose rotation direction: left, right, or upside down
• Set additional options like preserving annotations</div>

      <h3>Step 3: Rotate & Download</h3>
      <div class="example-text">• Click "Rotate PDF" to apply the rotation
• Wait for processing to complete
• Download your rotated PDF with corrected page orientation</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Rotator - Correct PDF Page Orientation</h2>

    <p>Need to fix incorrectly oriented PDF pages? Our free <strong>online PDF Rotator tool</strong> makes it incredibly easy to rotate PDF pages to the correct orientation. Whether you're dealing with scanned documents, photos, or digital files with wrong page rotations, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Rotate PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click the "Select PDF File" button or simply drag and drop your PDF file into the upload area.</li>
      <li><strong>Choose Pages:</strong> Select whether to rotate all pages, a specific page range, or only odd/even pages.</li>
      <li><strong>Set Direction:</strong> Choose the rotation direction - left (90° counterclockwise), right (90° clockwise), or upside down (180°).</li>
      <li><strong>Rotate & Download:</strong> Click the "Rotate PDF" button to apply the rotation, then download your corrected PDF with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've scanned a multi-page document but some pages were scanned sideways or upside down. Instead of manually rotating each page in an image editor, you can use our PDF Rotator to quickly correct all the page orientations in one go, saving you time and ensuring consistency across your document.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Educators:</strong> Correct scanned textbook pages or assignments with wrong orientations.</li>
      <li><strong>Office Professionals:</strong> Fix documents scanned incorrectly or received with sideways pages.</li>
      <li><strong>Archivists & Librarians:</strong> Standardize page orientations in digital archives and collections.</li>
      <li><strong>Photographers:</strong> Rotate portrait-oriented photos in PDF portfolios to landscape when needed.</li>
      <li><strong>Administrative Staff:</strong> Quickly correct batch-scanned documents with mixed page orientations.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: Can I rotate only specific pages in a multi-page PDF?</strong><br>
      A: Yes, you can choose to rotate all pages, a specific page range, or only odd/even pages according to your needs.</p>

    <p><strong>Q: Will rotating affect the quality of my PDF?</strong><br>
      A: No, rotation is a lossless operation that doesn't affect the quality of your PDF content. Text remains sharp and images maintain their resolution.</p>

    <p><strong>Q: Is my data secure when using this PDF rotator?</strong><br>
      A: Absolutely. Your PDF file is processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: What rotation angles are supported?</strong><br>
      A: We support 90° clockwise (right), 90° counterclockwise (left), and 180° (upside down) rotations.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Rotator?</h3>
    <p>Our <strong>online PDF Rotator</strong> stands out for its precision, flexibility, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool offers multiple page selection options and precise rotation controls, giving you complete command over your document's orientation.</p>

    <h3>Common Applications of PDF Rotation</h3>
    <p>PDF rotation has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Document Correction:</strong> Fix pages scanned in the wrong orientation</li>
      <li><strong>Presentation Preparation:</strong> Ensure all slides have consistent orientation</li>
      <li><strong>Digital Archiving:</strong> Standardize page orientations in scanned collections</li>
      <li><strong>Photo Management:</strong> Rotate images within PDF portfolios</li>
      <li><strong>Legal Documents:</strong> Correct orientation of scanned legal forms and contracts</li>
    </ul>

    <h3>Rotation Options Explained</h3>
    <p>Our tool provides several rotation options to suit different needs:</p>
    <ul>
      <li><strong>Left (90° counterclockwise):</strong> Rotates pages to the left - useful for pages scanned sideways</li>
      <li><strong>Right (90° clockwise):</strong> Rotates pages to the right - alternative correction for sideways pages</li>
      <li><strong>Upside Down (180°):</strong> Completely flips pages - for completely inverted scans</li>
      <li><strong>Page Range Selection:</strong> Rotate specific pages without affecting the entire document</li>
      <li><strong>Odd/Even Pages:</strong> Apply rotation to only odd-numbered or even-numbered pages</li>
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
        <p>In a full implementation, this would display a preview of your rotated PDF document.</p>
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
  let rotatedPdfUrl = null;
  let rotatedPdfBytes = null;
  let totalPages = 0;
  let currentDirection = 'normal';

  // Rotation angle mapping
  const ROTATION_ANGLES = {
    'normal': 0,
    'left': 90,
    'right': 270,
    'upside-down': 180
  };

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const rotateBtn = document.getElementById('rotateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewBtn = document.getElementById('previewBtn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Option elements
    const rotateScope = document.getElementById('rotateScope');
    const pageRangeGroup = document.getElementById('pageRangeGroup');
    const fromPage = document.getElementById('fromPage');
    const toPage = document.getElementById('toPage');
    const directionBtns = document.querySelectorAll('.direction-btn');
    const rotationPreview = document.getElementById('rotationPreview');
    
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
      if (rotatedPdfUrl) {
        downloadRotatedPdf();
        previewModal.style.display = 'none';
      }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Rotation scope change
    rotateScope.addEventListener('change', function() {
      if (this.value === 'range') {
        pageRangeGroup.style.display = 'flex';
        // Set default values
        if (totalPages > 0) {
          fromPage.value = 1;
          toPage.value = totalPages;
          fromPage.max = totalPages;
          toPage.max = totalPages;
        }
      } else {
        pageRangeGroup.style.display = 'none';
      }
      updatePagesToRotate();
    });

    // Page range changes
    fromPage.addEventListener('change', updatePagesToRotate);
    toPage.addEventListener('change', updatePagesToRotate);

    // Direction buttons
    directionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const direction = this.getAttribute('data-direction');
        setActiveDirection(direction);
      });
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
        URL.revokeObjectURL(rotatedPdfUrl);
        rotatedPdfUrl = null;
        rotatedPdfBytes = null;
      }
      
      pdfFile = file;
      renderFileList();
      
      // Get page count from PDF
      getPdfPageCount(file).then(pageCount => {
        totalPages = pageCount;
        updateUI();
        
        // Set page range defaults
        fromPage.max = totalPages;
        toPage.max = totalPages;
        toPage.value = totalPages;
        
        // Enable rotate button
        rotateBtn.disabled = false;
        
        showAlert('PDF file loaded successfully!', 'success');
      }).catch(error => {
        console.error('Error getting page count:', error);
        showAlert('Failed to load PDF file. Please try another file.', 'error');
      });
    }

    async function getPdfPageCount(file) {
      const arrayBuffer = await readFileAsArrayBuffer(file);
      const { PDFDocument } = PDFLib;
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      return pdfDoc.getPages().length;
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
      document.getElementById('pageCount').textContent = totalPages;
      document.getElementById('fileSize').textContent = pdfFile ? formatFileSize(pdfFile.size) : '0 MB';
      document.getElementById('fileListCount').textContent = pdfFile ? '(1 file)' : '(0 files)';
      
      // Update pages to rotate
      updatePagesToRotate();
      
      // Enable/disable buttons
      downloadBtn.disabled = !rotatedPdfUrl;
      previewBtn.disabled = !rotatedPdfUrl;
    }

    function updatePagesToRotate() {
      const scope = rotateScope.value;
      let pagesCount = 0;
      
      switch(scope) {
        case 'all':
          pagesCount = totalPages;
          break;
        case 'range':
          const from = parseInt(fromPage.value) || 1;
          const to = parseInt(toPage.value) || totalPages;
          pagesCount = Math.max(0, Math.min(to, totalPages) - Math.max(from, 1) + 1);
          break;
        case 'odd':
          pagesCount = Math.ceil(totalPages / 2);
          break;
        case 'even':
          pagesCount = Math.floor(totalPages / 2);
          break;
      }
      
      document.getElementById('pagesToRotate').textContent = pagesCount;
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function setActiveDirection(direction) {
      // Remove active class from all buttons
      directionBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      const activeBtn = document.querySelector(`[data-direction="${direction}"]`);
      activeBtn.classList.add('active');
      
      currentDirection = direction;
      
      // Update preview
      updateRotationPreview();
    }

    function updateRotationPreview() {
      const angle = ROTATION_ANGLES[currentDirection];
      let description = '';
      
      switch(currentDirection) {
        case 'normal':
          description = 'No rotation will be applied to the selected pages';
          break;
        case 'left':
          description = 'Pages will be rotated 90° counterclockwise (to the left)';
          break;
        case 'right':
          description = 'Pages will be rotated 90° clockwise (to the right)';
          break;
        case 'upside-down':
          description = 'Pages will be rotated 180° (upside down)';
          break;
      }
      
      rotationPreview.innerHTML = `
        <h4>Current Selection: ${currentDirection.charAt(0).toUpperCase() + currentDirection.slice(1)} (${angle}°)</h4>
        <p>${description}</p>
      `;
    }

    function handlePdfAction(action) {
      switch (action) {
        case 'rotate':
          rotatePDF();
          break;

        case 'download':
          downloadRotatedPdf();
          break;

        case 'preview':
          previewPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    async function rotatePDF() {
      if (!pdfFile) {
        showAlert('Please select a PDF file first.', 'error');
        return;
      }

      if (currentDirection === 'normal') {
        showAlert('Please select a rotation direction other than "Normal".', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF rotator...';

        const arrayBuffer = await readFileAsArrayBuffer(pdfFile);
        const { PDFDocument, degrees } = PDFLib;
        const pdfDoc = await PDFDocument.load(arrayBuffer);

        // Get pages to rotate
        const pagesToRotate = getPagesToRotate();
        const rotationAngle = ROTATION_ANGLES[currentDirection];

        for (let i = 0; i < pagesToRotate.length; i++) {
          const pageIndex = pagesToRotate[i];
          
          try {
            // Update progress
            const progress = Math.floor((i / pagesToRotate.length) * 80);
            progressFill.style.width = progress + '%';
            progressText.textContent = `Rotating page ${pageIndex + 1} of ${totalPages}...`;

            // Get the page and rotate it
            const page = pdfDoc.getPages()[pageIndex];
            page.setRotation(degrees(rotationAngle));

          } catch (error) {
            console.error(`Error rotating page ${pageIndex + 1}:`, error);
            throw new Error(`Failed to rotate page ${pageIndex + 1}: ${error.message}`);
          }
        }

        // Finalize PDF
        progressFill.style.width = '90%';
        progressText.textContent = 'Finalizing rotated PDF...';

        // Save the rotated PDF
        rotatedPdfBytes = await pdfDoc.save();
        
        // Create blob URL for download
        const blob = new Blob([rotatedPdfBytes], { type: 'application/pdf' });
        rotatedPdfUrl = URL.createObjectURL(blob);

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Rotation completed successfully!';
        
        showAlert(`Successfully rotated ${pagesToRotate.length} pages!`, 'success');
        
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
        console.error('Rotation error:', error);
        progressSection.style.display = 'none';
        showAlert(`Rotation failed: ${error.message}`, 'error');
      }
    }

    function getPagesToRotate() {
      const scope = rotateScope.value;
      const pages = [];
      
      switch(scope) {
        case 'all':
          for (let i = 0; i < totalPages; i++) {
            pages.push(i);
          }
          break;
          
        case 'range':
          const from = Math.max(1, parseInt(fromPage.value) || 1) - 1;
          const to = Math.min(totalPages, parseInt(toPage.value) || totalPages) - 1;
          for (let i = from; i <= to; i++) {
            pages.push(i);
          }
          break;
          
        case 'odd':
          for (let i = 0; i < totalPages; i += 2) {
            pages.push(i);
          }
          break;
          
        case 'even':
          for (let i = 1; i < totalPages; i += 2) {
            pages.push(i);
          }
          break;
      }
      
      return pages;
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

    function downloadRotatedPdf() {
      if (!rotatedPdfUrl || !rotatedPdfBytes) {
        showAlert('No rotated PDF available. Please rotate a file first.', 'error');
        return;
      }

      try {
        const outputFilename = document.getElementById('outputFilename').value || 'rotated-document';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        showAlert(`Downloading "${filename}"...`, 'info');
        
        // Use downloadjs for reliable file download
        download(rotatedPdfBytes, filename, "application/pdf");
        
        showAlert('PDF download completed!', 'success');
        
      } catch (error) {
        console.error('Download error:', error);
        
        // Fallback download method
        try {
          const outputFilename = document.getElementById('outputFilename').value || 'rotated-document';
          const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
          
          const blob = new Blob([rotatedPdfBytes], { type: 'application/pdf' });
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
      if (!rotatedPdfUrl) {
        showAlert('No rotated PDF available. Please rotate a file first.', 'error');
        return;
      }

      try {
        // Open PDF in new tab
        const newTab = window.open(rotatedPdfUrl, '_blank');
        if (!newTab) {
          showAlert('Popup blocked. Please allow popups for this site to preview PDF.', 'error');
          
          // Fallback: Show modal with download option
          previewModal.style.display = 'block';
          const modalBody = previewModal.querySelector('.modal-body');
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px;">
              <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
              <h4>PDF Preview</h4>
              <p>Your rotated PDF is ready for download.</p>
              <p>To preview, please allow popups or download the file to view it.</p>
              <div style="margin-top: 20px;">
                <button class="modal-button primary" onclick="downloadRotatedPdf()">
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
      if (rotatedPdfUrl) {
        URL.revokeObjectURL(rotatedPdfUrl);
      }
      
      pdfFile = null;
      totalPages = 0;
      rotatedPdfUrl = null;
      rotatedPdfBytes = null;
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
    updateRotationPreview();
    updateUI();
  });
</script>